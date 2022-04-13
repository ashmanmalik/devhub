/* eslint-disable */
const fs = require('fs')
const path = require('path')
const flags = require('flags');
flags.defineString('dotenv')
flags.parse();

const dotenv = require('dotenv')
dotenv.config()
dotenv.config({path: '.env.local'});
if (flags.get('dotenv')) {
  dotenv.config({path: flags.get('dotenv') || ".env"})
}
const axios = require('axios')

let accessToken = '';

const login = async () => {
  const {
    data: { access_token },
  } = await axios.post(
    process.env.CHARGETRIP_MGT_LOGIN_URL,
    {
      email: process.env.CHARGETRIP_MGT_EMAIL,
      password: process.env.CHARGETRIP_MGT_PASSWORD
    }
  );

  return access_token
}

const getExceptionList = async () => {
  console.log(`Fetching exception list from ${process.env.CHARGETRIP_MGT_API_URL}`)
  const {
    data: {
      errors,
      data: { exceptionList },
    },
  } = await axios.post(
    process.env.CHARGETRIP_MGT_API_URL,
    {
      query: 'query { exceptionList { message code operation type }}',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  ).catch(e => {
    console.log(e)
  })

  if(errors) {
    throw errors;
  }

  return exceptionList.reduce(
    (groups, { operation, code, message }) => {
      if (!groups[operation]) {
        groups[operation] = []
      }

      groups[operation].push({
        code,
        message,
      })

      return groups
    },
    {}
  );
}

const getCarList = async () => {
  console.log(`Fetching car list from ${process.env.CHARGETRIP_MGT_API_URL}`)

  const normalizedCarlist = {
    "public": [],
    "new": []
  }

  const {
    data: {
      errors,
      data: { carList },
    },
  } = await axios.post(
    process.env.CHARGETRIP_MGT_API_URL,
    {
      query: 'query { carList(filter: { status: [public, new] }, size: 1000) { id status naming {model make version chargetrip_version edition } }}',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  carList
    .filter(car => car.status !== "new" || car.naming.make !== "Porsche")
    .filter(car => car.id !== "620f6aa076b535f6e23b6002")
    .forEach(car => normalizedCarlist[car.status].push(car))

  if(errors) {
    throw errors;
  }

  return normalizedCarlist;
}
const main = async () => {
  try {

    accessToken = await login();

    const [exceptionList, carList] = await Promise.all([
      getExceptionList(),
      getCarList(),
    ])


    await Promise.all(
      Object.entries(exceptionList).map(([key, value]) => {
        fs.writeFileSync(
          path.join(process.cwd(), `static/errors/${key}.json`),
          JSON.stringify(value)
        )
      }),
      fs.writeFileSync(
        path.join(process.cwd(), `static/carList.json`),
        JSON.stringify(carList)
      )
    )
  } catch (e) {
    console.log(e)
    throw new Error(JSON.stringify(e));
  }
}

main()
