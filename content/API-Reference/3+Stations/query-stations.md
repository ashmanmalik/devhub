---
title: Query stations
description: Query all stations or stations at a specific location.
order: 2
frequently:
- id
- name
- address
- coordinates
- evses
- operator
- amenities
---

# Query stations
To be able to browse through all your stations inside your station database you can use the `stationList` query. While querying you will have access to all station properties. You can set the size property to specify how many stations you would like to receive, the default is 10. Keep your query as small as possible to improve the performance. 

<api-reference-actions url="https://playground.chargetrip.com/?page=stationListAll"></api-reference-actions>

## Query
To query your stations you only need to call the `stationList` alongside the properties you would like to receive. Optionally you can add [pagination](/API-Reference/API/pagination) and `filters`.

### Filters
To filter your station list you can use the `query` argument. You can then use `name`, `id` or `external_id` to specify what stations you would like to receive.

<schema name="stationList" :frequent="frequently"></schema>

<response error="stationList"></response>

<playground>
<code-block lang="graphql" type="query">					
query stationListAll {
  stationList(
    query: { name: "Townley Road (2)" }
    size: 2
    page: 1
  ) {
    id
    external_id
    country_code
    party_id
    name
    address
    city
    postal_code
    state
    country
    coordinates {
      latitude
      longitude
    }
    related_locations {
      latitude
      longitude
    }
    parking_type
    evses {
      uid
      evse_id
      status
      status_schedule {
        period_begin
        period_end
        status
      }
      capabilities
      connectors {
        id
        standard
        format
        power_type
        max_voltage
        max_amperage
        max_electric_power
        power
        tariff_ids
        terms_and_conditions
        last_updated
        properties
      }
      floor_level
      coordinates {
        latitude
        longitude
            }
      physical_reference
      parking_restrictions
      images {
        url
        thumbnail
        category
        type
        width
        height
      }
      last_updated
      parking_cost
      properties
    }
    directions  {
      language
      text
    }
    operator {
      id
      external_id
      name
      website
      logo {
        url
        thumbnail
        category
        type
        width
        height
      }
      country
      contact {
        phone
        email
        website
        facebook
        twitter
        properties
      }
    }
    suboperator {
      id
      name
    }
    owner {
      id
      name
    }
    facilities
    time_zone
    opening_times {
      twentyfourseven
      regular_hours {
        weekday
        period_begin
        period_end
      }
      exceptional_openings {
        period_begin
        period_end
      }
      exceptional_closings {
        period_begin
        period_end
      }
    }
    charging_when_closed
    images {
      url
      thumbnail
      category
      type
      width
      height
    }
    last_updated
    location {
      type
      coordinates
    }
    elevation
    chargers {
      standard
      power
      price
      speed
      status {
        free
        busy
        unknown
        error
      }
      total
    }
    physical_address {
      continent
      country
      county
      city
      street
      number
      postalCode
      what3Words
      formattedAddress
    }
    amenities
    properties
    realtime
    power
    speed
    status
    review {
      rating
      count
    }
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "stationList": [
      {
        "id": "5e8583c0d3406c6cb23b90a2",
        "external_id": "155240",
        "country_code": "GB",
        "party_id": null,
        "name": "Cofton Country Holidays-Static Caravans",
        "address": "Starcross",
        "city": "Exeter",
        "postal_code": "EX6 8RP",
        "state": null,
        "country": "GBR",
        "coordinates": {
          "latitude": "50.612321",
          "longitude": "-3.460562"
        },
        "related_locations": [],
        "parking_type": null,
        "evses": [
          {
            "uid": "218532",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.321Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "50.612321",
              "longitude": "-3.460562"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.321Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218532",
            "evse_id": "1",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.321Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "50.612321",
              "longitude": "-3.460562"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.321Z",
            "parking_cost": null,
            "properties": null
          }
        ],
        "directions": null,
        "operator": {
          "id": "5e8583a3d3406c13803b901e",
          "external_id": "3",
          "name": "POD Point (UK)",
          "website": "http://www.pod-point.com/",
          "logo": null,
          "country": null,
          "contact": {
            "phone": "020 7247 4114",
            "email": "enquiries@pod-point.com",
            "website": "http://www.pod-point.com/",
            "facebook": null,
            "twitter": null,
            "properties": null
          }
        },
        "suboperator": null,
        "owner": null,
        "facilities": [],
        "time_zone": null,
        "opening_times": {
          "twentyfourseven": false,
          "regular_hours": [],
          "exceptional_openings": [],
          "exceptional_closings": []
        },
        "charging_when_closed": true,
        "images": [],
        "last_updated": "2020-04-02T13:24:25.321Z",
        "location": {
          "type": "Point",
          "coordinates": [
            -3.460562,
            50.612321
          ]
        },
        "elevation": 0,
        "chargers": [
          {
            "standard": "IEC_62196_T2",
            "power": 7,
            "price": "",
            "speed": "slow",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 2,
              "error": 0
            },
            "total": 2
          }
        ],
        "physical_address": {
          "continent": "EU",
          "country": "GB",
          "county": null,
          "city": "Exeter",
          "street": "Starcross",
          "number": null,
          "postalCode": "EX6 8RP",
          "what3Words": "eyelid.excavate.cheek",
          "formattedAddress": [
            "Starcross, EX6 8RP",
            "Exeter",
            "United Kingdom"
          ]
        },
        "amenities": null,
        "properties": null,
        "realtime": false,
        "power": {
          "7": {
            "total": 1,
            "available": 0
          }
        },
        "speed": "slow",
        "status": "unknown",
        "review": {
          "rating": 0,
          "count": 0
        }
      },
      {
        "id": "5e8583c0d3406c396c3b90a4",
        "external_id": "155239",
        "country_code": "GB",
        "party_id": null,
        "name": "Cofton Country Holidays-Cottages",
        "address": "Starcross",
        "city": "Exeter",
        "postal_code": "EX6 8RP",
        "state": null,
        "country": "GBR",
        "coordinates": {
          "latitude": "50.613074",
          "longitude": "-3.460541"
        },
        "related_locations": [],
        "parking_type": null,
        "evses": [
          {
            "uid": "218531",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.408Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "50.613074",
              "longitude": "-3.460541"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.408Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218531",
            "evse_id": "1",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.408Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "50.613074",
              "longitude": "-3.460541"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.408Z",
            "parking_cost": null,
            "properties": null
          }
        ],
        "directions": null,
        "operator": {
          "id": "5e8583a3d3406c13803b901e",
          "external_id": "3",
          "name": "POD Point (UK)",
          "website": "http://www.pod-point.com/",
          "logo": null,
          "country": null,
          "contact": {
            "phone": "020 7247 4114",
            "email": "enquiries@pod-point.com",
            "website": "http://www.pod-point.com/",
            "facebook": null,
            "twitter": null,
            "properties": null
          }
        },
        "suboperator": null,
        "owner": null,
        "facilities": [],
        "time_zone": null,
        "opening_times": {
          "twentyfourseven": false,
          "regular_hours": [],
          "exceptional_openings": [],
          "exceptional_closings": []
        },
        "charging_when_closed": true,
        "images": [],
        "last_updated": "2020-04-02T13:24:25.408Z",
        "location": {
          "type": "Point",
          "coordinates": [
            -3.460541,
            50.613074
          ]
        },
        "elevation": 0,
        "chargers": [
          {
            "standard": "IEC_62196_T2",
            "power": 7,
            "price": "",
            "speed": "slow",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 2,
              "error": 0
            },
            "total": 2
          }
        ],
        "physical_address": {
          "continent": "EU",
          "country": "GB",
          "county": null,
          "city": "Exeter",
          "street": "Starcross",
          "number": null,
          "postalCode": "EX6 8RP",
          "what3Words": "strictest.grapes.bloomers",
          "formattedAddress": [
            "Starcross, EX6 8RP",
            "Exeter",
            "United Kingdom"
          ]
        },
        "amenities": null,
        "properties": null,
        "realtime": false,
        "power": {
          "7": {
            "total": 1,
            "available": 0
          }
        },
        "speed": "slow",
        "status": "unknown",
        "review": {
          "rating": 0,
          "count": 0
        }
      },
      {
        "id": "5e8583c1d3406c83f13b90a6",
        "external_id": "155238",
        "country_code": "GB",
        "party_id": null,
        "name": "Market Street Car Park",
        "address": "Market Street Car Park",
        "city": "Winkworth",
        "postal_code": "DE4 4ET",
        "state": null,
        "country": "GBR",
        "coordinates": {
          "latitude": "53.082149",
          "longitude": "-1.574028"
        },
        "related_locations": [],
        "parking_type": null,
        "evses": [
          {
            "uid": "218528",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2_COMBO",
                "format": null,
                "power_type": null,
                "max_voltage": 0,
                "max_amperage": 0,
                "max_electric_power": 50000,
                "power": 50,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.662Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "53.082149",
              "longitude": "-1.574028"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.662Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218529",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "CHADEMO",
                "format": null,
                "power_type": null,
                "max_voltage": 0,
                "max_amperage": 0,
                "max_electric_power": 50000,
                "power": 50,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.662Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "53.082149",
              "longitude": "-1.574028"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.662Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218530",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 0,
                "max_amperage": 0,
                "max_electric_power": 43000,
                "power": 43,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.662Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "53.082149",
              "longitude": "-1.574028"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.662Z",
            "parking_cost": null,
            "properties": null
          }
        ],
        "directions": null,
        "operator": {
          "id": "5e858399d3406c378f3b8f49",
          "external_id": "20",
          "name": "Charge Your Car",
          "website": "http://www.chargeyourcar.org.uk/",
          "logo": null,
          "country": null,
          "contact": {
            "phone": "0191 26 50 500",
            "email": "admin@chargeyourcar.org.uk",
            "website": "http://www.chargeyourcar.org.uk/",
            "facebook": null,
            "twitter": null,
            "properties": null
          }
        },
        "suboperator": null,
        "owner": null,
        "facilities": [],
        "time_zone": null,
        "opening_times": {
          "twentyfourseven": false,
          "regular_hours": [],
          "exceptional_openings": [],
          "exceptional_closings": []
        },
        "charging_when_closed": true,
        "images": [],
        "last_updated": "2020-04-02T13:24:25.662Z",
        "location": {
          "type": "Point",
          "coordinates": [
            -1.574028,
            53.082149
          ]
        },
        "elevation": 37,
        "chargers": [
          {
            "standard": "IEC_62196_T2_COMBO",
            "power": 50,
            "price": "",
            "speed": "fast",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 1,
              "error": 0
            },
            "total": 1
          },
          {
            "standard": "CHADEMO",
            "power": 50,
            "price": "",
            "speed": "fast",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 1,
              "error": 0
            },
            "total": 1
          },
          {
            "standard": "IEC_62196_T2",
            "power": 43,
            "price": "",
            "speed": "fast",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 1,
              "error": 0
            },
            "total": 1
          }
        ],
        "physical_address": {
          "continent": "EU",
          "country": "GB",
          "county": null,
          "city": "Winkworth",
          "street": "Market Street Car Park",
          "number": null,
          "postalCode": "DE4 4ET",
          "what3Words": "dares.abandons.foal",
          "formattedAddress": [
            "Market Street Car Park, DE4 4ET",
            "Winkworth",
            "United Kingdom"
          ]
        },
        "amenities": null,
        "properties": null,
        "realtime": false,
        "power": {
          "43": {
            "total": 1,
            "available": 0
          },
          "50": {
            "total": 2,
            "available": 0
          }
        },
        "speed": "fast",
        "status": "unknown",
        "review": {
          "rating": 0,
          "count": 0
        }
      },
      {
        "id": "5e8583c1d3406c56cb3b90a9",
        "external_id": "155237",
        "country_code": "GB",
        "party_id": null,
        "name": "Blythswood Street",
        "address": "Blythswood Street",
        "city": "Glasgow",
        "postal_code": "G2 4QY",
        "state": null,
        "country": "GBR",
        "coordinates": {
          "latitude": "55.863572",
          "longitude": "-4.262374"
        },
        "related_locations": [],
        "parking_type": null,
        "evses": [
          {
            "uid": "218527",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.817Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "55.863572",
              "longitude": "-4.262374"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.817Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218527",
            "evse_id": "1",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 230,
                "max_amperage": 32,
                "max_electric_power": 7000,
                "power": 7,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.817Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "55.863572",
              "longitude": "-4.262374"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.817Z",
            "parking_cost": null,
            "properties": null
          }
        ],
        "directions": null,
        "operator": {
          "id": "5e85839ad3406cd1333b8f52",
          "external_id": "3315",
          "name": "Chargeplace Scotland",
          "website": "http://chargeplacescotland.org/",
          "logo": null,
          "country": null,
          "contact": {
            "phone": "0141 648 0750",
            "email": "",
            "website": "http://chargeplacescotland.org/",
            "facebook": null,
            "twitter": null,
            "properties": null
          }
        },
        "suboperator": null,
        "owner": null,
        "facilities": [],
        "time_zone": null,
        "opening_times": {
          "twentyfourseven": false,
          "regular_hours": [],
          "exceptional_openings": [],
          "exceptional_closings": []
        },
        "charging_when_closed": true,
        "images": [],
        "last_updated": "2020-04-02T13:24:25.817Z",
        "location": {
          "type": "Point",
          "coordinates": [
            -4.262374,
            55.863572
          ]
        },
        "elevation": 188,
        "chargers": [
          {
            "standard": "IEC_62196_T2",
            "power": 7,
            "price": "",
            "speed": "slow",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 2,
              "error": 0
            },
            "total": 2
          }
        ],
        "physical_address": {
          "continent": "EU",
          "country": "GB",
          "county": null,
          "city": "Glasgow",
          "street": "Blythswood Street",
          "number": null,
          "postalCode": "G2 4QY",
          "what3Words": "matter.shall.point",
          "formattedAddress": [
            "Blythswood Street, G2 4QY",
            "Glasgow",
            "United Kingdom"
          ]
        },
        "amenities": null,
        "properties": null,
        "realtime": false,
        "power": {
          "7": {
            "total": 1,
            "available": 0
          }
        },
        "speed": "slow",
        "status": "unknown",
        "review": {
          "rating": 0,
          "count": 0
        }
      },
      {
        "id": "5e8583c1d3406c62f53b90ab",
        "external_id": "155236",
        "country_code": "GB",
        "party_id": null,
        "name": "Main Street Inverkip 22 KW",
        "address": "Main Street",
        "city": "Inverkip",
        "postal_code": "PA16 0FZ",
        "state": null,
        "country": "GBR",
        "coordinates": {
          "latitude": "55.91031",
          "longitude": "-4.86522"
        },
        "related_locations": [],
        "parking_type": null,
        "evses": [
          {
            "uid": "218526",
            "evse_id": "0",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 400,
                "max_amperage": 32,
                "max_electric_power": 22000,
                "power": 22,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.899Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "55.91031",
              "longitude": "-4.86522"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.899Z",
            "parking_cost": null,
            "properties": null
          },
          {
            "uid": "218526",
            "evse_id": "1",
            "status": "UNKNOWN",
            "status_schedule": [],
            "capabilities": [],
            "connectors": [
              {
                "id": null,
                "standard": "IEC_62196_T2",
                "format": null,
                "power_type": null,
                "max_voltage": 400,
                "max_amperage": 32,
                "max_electric_power": 22000,
                "power": 22,
                "tariff_ids": null,
                "terms_and_conditions": null,
                "last_updated": "2020-04-02T13:24:25.899Z",
                "properties": null
              }
            ],
            "floor_level": null,
            "coordinates": {
              "latitude": "55.91031",
              "longitude": "-4.86522"
            },
            "physical_reference": null,
            "parking_restrictions": [],
            "images": [],
            "last_updated": "2020-04-02T13:24:25.899Z",
            "parking_cost": null,
            "properties": null
          }
        ],
        "directions": null,
        "operator": {
          "id": "5e85839ad3406cd1333b8f52",
          "external_id": "3315",
          "name": "Chargeplace Scotland",
          "website": "http://chargeplacescotland.org/",
          "logo": null,
          "country": null,
          "contact": {
            "phone": "0141 648 0750",
            "email": "",
            "website": "http://chargeplacescotland.org/",
            "facebook": null,
            "twitter": null,
            "properties": null
          }
        },
        "suboperator": null,
        "owner": null,
        "facilities": [],
        "time_zone": null,
        "opening_times": {
          "twentyfourseven": false,
          "regular_hours": [],
          "exceptional_openings": [],
          "exceptional_closings": []
        },
        "charging_when_closed": true,
        "images": [],
        "last_updated": "2020-04-02T13:24:25.899Z",
        "location": {
          "type": "Point",
          "coordinates": [
            -4.86522,
            55.91031
          ]
        },
        "elevation": 106,
        "chargers": [
          {
            "standard": "IEC_62196_T2",
            "power": 22,
            "price": "",
            "speed": "slow",
            "status": {
              "free": 0,
              "busy": 0,
              "unknown": 2,
              "error": 0
            },
            "total": 2
          }
        ],
        "physical_address": {
          "continent": "EU",
          "country": "GB",
          "county": null,
          "city": "Inverkip",
          "street": "Main Street",
          "number": null,
          "postalCode": "PA16 0FZ",
          "what3Words": "organic.rattled.intestine",
          "formattedAddress": [
            "Main Street, PA16 0FZ",
            "Inverkip",
            "United Kingdom"
          ]
        },
        "amenities": null,
        "properties": null,
        "realtime": false,
        "power": {
          "22": {
            "total": 1,
            "available": 0
          }
        },
        "speed": "slow",
        "status": "unknown",
        "review": {
          "rating": 0,
          "count": 0
        }
      }
    ]
  }
}
</code-block>
</playground>
