/* eslint-disable */
const path = require('path');
const fs = require('fs')
const OfTypeKind = {
  LIST: 'LIST',
  OBJECT: 'OBJECT',
  INPUT_OBJECT: 'INPUT_OBJECT',
  ENUM: 'ENUM',
}

const flags = require('flags');
flags.defineString('dotenv')
flags.parse();

const dotenv = require('dotenv')
dotenv.config()
dotenv.config({path: '.env.local'});
if (flags.get('dotenv')) {
  dotenv.config({path: flags.get('dotenv') || ".env"})
}

const ofTypeKinds = Object.keys(OfTypeKind)
const fetch = require('cross-fetch').fetch
const { getIntrospectionQuery } = require('graphql')
const axios = require('axios')
let schemas = {};
const tileFilter = {
  "name": "tileFilter",
  "description": "A set of filters that is available for the tile service.",
  "args": [
    {
      "name": "power",
      "description": "Deprecated in favor of `powers`.",
      "type": {
        "kind": "SCALAR",
        "name": "Int",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": true
    },
    {
      "name": "powers",
      "description": "Determines the powers of the stations that will be included in the tiles. This can be `all` (`powers=all`) for all powers or a list of kWh values for individual powers. For kWh values, you can send a numeric array with the specific powers you would like to return, `powers[]=22&powers[]=43&powers[]=50`.",
      "type": {
        "kind": "SCALAR",
        "name": "All || [Number]",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    },
    {
      "name": "powerGroups",
      "description": "Determines the speed groups of powers that will be included in the tiles. We have grouped all available powers into three speed groups (`slow`, `fast` or `turbo`), you can send an array (`powerGroups[]=slow &powerGroups[]=fast &powerGroups[]=turbo`). Note: You can't mix powerGroups with `powers=all`. You can mix powerGroups with individual powers `powerGroups[]=fast&powers[]=22` (for this specific example we will consider both, stations which are `fast` and stations that are 22 kWh).",
      "type": {
        "kind": "OBJECT",
        "name": "StationSpeedType",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    },
    {
      "name": "connectors",
      "description": "Determine the connector standards that will be included in the tiles. You can send an array with the `connectors[]=CHADEMO&connectors[]=IEC_62196_T2_COMBO`, etc.",
      "type": {
        "kind": "OBJECT",
        "name": "OCPIConnectorType",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    },
    {
      "name": "amenities",
      "description": "An optional list of amenities that should be present near the stations. Possible values: `hotel`, `shopping`, `bathroom`, `supermarket`, `playground`, `pharmacy`, `museum`, `coffee`, `park`, `restaurant`.",
      "type": {
        "kind": "SCALAR",
        "name": "[String]",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    },
    {
      "name": "availableOnly",
      "description": "An optional flag that will return only available (`status: free`) stations.",
      "type": {
        "kind": "SCALAR",
        "name": "Boolean",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    },
    {
      "name": "preferredOperator",
      "description": "An optional flag that will filter stations by a pre-defined preferred operator.",
      "type": {
        "kind": "SCALAR",
        "name": "Boolean",
        "ofType": null
      },
      "defaultValue": null,
      "isDeprecated": false
    }
  ],
  "isDeprecated": false,
  "deprecationReason": null
}

const mainTypes = ['Query', 'Mutation', 'Subscription'];

const main = async () => {
  const baseURL = process.env.CHARGETRIP_API_URL;
  const { data: { errors, data: { __schema: { types } } } } = await axios.post(baseURL, {
    variables: {},
    query: getIntrospectionQuery({ descriptions: true })
  });

  if(errors) {
    console.error(errors);
    throw new Error(JSON.stringify(errors))
  }
  schemas = types.reduce((schema, type) => {
    if(type.name === 'Query') {
      type = {
        ...type,
        fields: [
          ...type.fields,
          tileFilter
        ]
      }
    }

    schema[type.name] = type;

    return schema;
  }, {})

  mainTypes.forEach(mainType => {
    schemas[mainType].fields.forEach(async schema => {
      await fs.writeFileSync(path.join(process.cwd(), `static/schema/${mainType}-${schema.name}.json`), JSON.stringify(populateSchema(schema)))
    })
  })

};

const populateSchema = (schema) => {
  const name = getOfTypeName(schema)

  return {
    ...schema,
    args: appendOfType(schema?.args, true),
    fields: appendOfType(schemas[name]?.fields || [])
  }
}

const getOfTypeName = (item) =>  {
  let type = item?.type
  let name = item?.type?.name

  while (type) {
    type = type.ofType

    if (type) {
      name = type.name
    }
  }

  return name
}

const appendOfType = (fields, allowRequired = false) => {
  return fields?.map((field) => {
    const returnField = {
      ...field,
      children: [],
    }

    if (!field.type) return returnField
    const typeStr =
      field.type.kind === 'SCALAR'
        ? field.type?.name
        : field.type?.kind === 'INPUT_OBJECT'
        ? null
        : field.type?.kind

    const required = allowRequired && typeStr === 'NON_NULL'
    const isDeprecated = field.isDeprecated || field.description?.includes('Deprecated:');


    if (
      !(
        field.type?.ofType?.name ||
        field.type.kind === OfTypeKind.ENUM ||
        field.type.kind === OfTypeKind.OBJECT ||
        field.type.kind === OfTypeKind.INPUT_OBJECT ||
        field.args
      )
    ) {
      return {
        ...returnField,
        isDeprecated,
        typeStr,
        required,
      }
    }

    const typeName = getOfTypeName(field)

    const json = typeName ? schemas[typeName] : null
    const args = appendOfType(
      field?.args || [],
      allowRequired
    );


    const normalizedTypeName = (typeName || '').replace('Query', '')
    const showOfTypeKind = ofTypeKinds.includes(json?.kind)
    const children = appendOfType(
      json?.fields || json?.enumValues || json.inputFields || [],
      allowRequired
    )

    return {
      ...returnField,
      showOfTypeKind,
      typeStr,
      args,
      isDeprecated,
      typeName: normalizedTypeName,
      required,
      children,
    }
  })
}


main();

