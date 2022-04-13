---
title: Query route details
description: Query details like the polyline, duration and distance of route 
order: 4
frequently: 
- route
- status
---

# Query route details
After you received your `route ID` through the [route mutation](/API-Reference/Routes/mutate-route), you can query your route details. These route details will contain everything from a polyline to charge stations, ideal for plotting a route on a map or providing turn-by-turn instructions. If you need more details for your specific route, see [query route path](/API-Reference/Routes/query-route-path-details).

<api-reference-actions example-url="https://examples.chargetrip.com/?id=route" url="https://playground.chargetrip.com/page=getRoute"></api-reference-actions>

## Query
To query the route details you will need to configure it with the `route ID`. Be sure to include the status in your response and check it. If your route hasn't completed processing yet, then your route details will not be available. To prevent this from happening you can use the [subscription service](/API-Reference/Routes/subscribe-to-route-updates).

If you also supported additional route options in the [route mutation](/API-Reference/Routes/mutate-route) you will now be able to collect the details. Below you can find instructions on how to do that.

### Pricing
To render pricing when using the Eco-Movement station database, you can use `pricing` to fetch a list of prices on the connector level. The `pricing` field is available on `evse.connectors`. The pricing list includes CPO and MSP prices. The "adhoc price" is the CPO price.

When using any other station database, use the [tariff query](/API-Reference/Stations/query-tariffs) and [tariff details query](/API-Reference/Stations/query-tariff-details).

### Route steps
Every leg of the route includes the `steps` property. These steps allow you to easily identify different road characteristics and highlight them in your application.  The type of route steps are: `road`, `ferry`, `toll`, and `highway`. Every step includes the `distance`, `duration`, `consumption` and a separate `polyline`. If you want to know what type of road characteristics there are on your entire journey you can include the `tags` property in your route request. 

### Support alternative stations along a route
If your [route mutation](/API-Reference/Routes/mutate-route) included the `stationsAlongRouteRadius` with a valid distance, you can now request the station details in this query. To do so, you will need to add the `stationsAlongRoute` field with its appropriate children.

### Support stations as waypoint
If your [route mutation](/API-Reference/Routes/mutate-route) included stations in the `via` parameter, you will receive a route with additional stations as waypoints. These station as waypoints can be found inside the `route.leg`.

### Get additional properties
Our route destination, origin and stations have an optional `properties` attribute in any of our route queries. You can use this to fetch a complete `address`, the current temperature (`temp`) and air `pressure` at that location. 

<schema name="route" :frequent="frequently"></schema>

<response error="route"></response>

<playground>
<code-block lang="graphql" type="query">					
query getRoute {
  route(id:"5e300e71f7e26f726afd3d71") {
    route {
      id
      type
      charges
      distance
      duration
      consumption
      chargeTime
      amenityRanking
      rangeStart
      rangeStartKwh
      rangeEnd
      rangeEndKwh
      via
      polyline
      pathPlot{
        elevation
        consumptionPerKm
        averageSpeed
      }
      elevationUp
      elevationDown
      elevationMax
      saving {
        co2
        money
        currency
        averageGasPrice
        averageEnergyPrice
      }
      legs {
        id
        distance
        duration
        consumption
        rangeStart
        rangeStartKwh
        rangeEnd
        rangeEndKwh
        origin {
          id
          type
          geometry {
            type
            coordinates
          }
          properties
        }
        destination {
          id
          type
          geometry {
            type
            coordinates
          }
          properties
        }
        type
        name
        stationId
        operatorId
        chargeTime
        evse {
          uid
          status
          connectors {
            standard
            power
          }
        }
        connector {
          standard
          power
        }
        plugsAvailable
        plugsCount
      }
      stationsAlongRoute {
        id
        location {
          type
          coordinates
        }
        speed
        status
        preferredOperator
        distance
      }
    }
    status
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "route": {
      "route": {
        "id": "5e8c34fe2cc60438df7dc948",
        "type": "fastest",
        "charges": 1,
        "distance": 151327,
        "duration": 6613,
        "consumption": 29.553,
        "chargeTime": 974,
        "amenityRanking": 0,
        "rangeStart": 195000,
        "rangeStartKwh": 28,
        "rangeEnd": 47837,
        "rangeEndKwh": 6.868889337936359,
        "via": "Fastned De Poel",
        "polyline": "ejt...AJK",
        "pathPlot": [ {
            "elevation": 4,
            "consumptionPerKm": 0.143,
            "averageSpeed": 65
          },
          ...{
            "elevation": 275,
            "consumptionPerKm": 0.118,
            "averageSpeed": 39
          }}],
        "elevationUp": 7566,
        "elevationDown": 6053,
        "elevationMax": 68,
        "saving": {
          "co2": "47520",
          "money": "17.23",
          "currency": "$",
          "averageGasPrice": "1.45",
          "averageEnergyPrice": "0.3"
        },
        "via": "BayWa Schnellladestation 4",
        "legs": [
          {
            "id": "5e8c34fe2cc60415d77dc94a",
            "distance": 74619,
            "duration": 2945,
            "consumption": 14.022,
            "rangeStart": 195000,
            "rangeStartKwh": 28,
            "rangeEnd": 97345,
            "rangeEndKwh": 13.978,
            "origin": {
              "id": null,
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  4.8979755,
                  52.3745403
                ]
              },
              "properties": {
                "addess": "Amsterdam, North Holland, The Netherlands",
                "temp": 11.52,
                "pressure": 1031
              }
            },
            "destination": {
              "id": null,
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  5.6117284297943115,
                  52.06440082406267
                ]
              },
              "properties": {
                "address": "De Poel (A30 Ede - Barneveld HMP 11.8), Ede, Gelderland, NL",
                "temp": 23,
                "pressure": 1013.25
              }
            },
            "type": "station",
            "name": "Fastned De Poel",
            "stationId": "5e8595aad3406c06083c8f76",
            "operatorId": "5e85839fd3406c6b9f3b8fc3",
            "chargeTime": 974,
            "evse": {
              "uid": "57830",
              "status": "UNKNOWN",
              "connectors": [
                {
                  "standard": "CHADEMO",
                  "power": 50
                }
              ]
            },
            "connector": {
              "standard": "CHADEMO",
              "power": 50
            },
            "plugsAvailable": 2,
            "plugsCount": 2
          },
          {
            "id": "5e8c34fe2cc60436277dc949",
            "distance": 76708,
            "duration": 2694,
            "consumption": 15.531,
            "rangeStart": 156000,
            "rangeStartKwh": 22.4,
            "rangeEnd": 47837,
            "rangeEndKwh": 6.869,
            "origin": {
              "id": null,
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  5.6117284297943115,
                  52.06440082406267
                ]
              },
              "properties": {
                "address": "De Poel (A30 Ede - Barneveld HMP 11.8), Ede, Gelderland, NL",
                "temp": 23,
                "pressure": 1013.25
              }
            },
            "destination": {
              "id": null,
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [
                  6.41907267506761,
                  51.94840944992789
                ]
              },
              "properties": {
                "address": "Tandembos, Doetinchemseweg, 7054 CD Oude IJsselstreek, The Netherlands",
                "temp": 12.55,
                "pressure": 1032
              }
            },
            "type": "final",
            "name": "Tandembos, Doetinchemseweg, 7054 CD Oude IJsselstreek, The Netherlands",
            "stationId": "",
            "operatorId": "",
            "chargeTime": 0,
            "evse": null,
            "connector": null,
            "plugsAvailable": 0,
            "plugsCount": 0
          }
        ],
        "stationsAlongRoute": [
          {
            "id": "5e8472ee86a7893516b4c236",
            "location": {
              "type": "Point",
              "coordinates": [
                174.778519,
                -41.292701
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 308
          },
          {
            "id": "5e8472dd86a7896055b4c1b0",
            "location": {
              "type": "Point",
              "coordinates": [
                174.774923,
                -36.869245
              ]
            },
            "speed": "fast",
            "status": "busy",
            "preferredOperator": true,
            "distance": 276
          },
          {
            "id": "5e8472e186a7890273b4c1d0",
            "location": {
              "type": "Point",
              "coordinates": [
                174.775189,
                -36.849508
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 890
          },
          {
            "id": "5e8472eb86a789877eb4c221",
            "location": {
              "type": "Point",
              "coordinates": [
                174.95142,
                -40.987489
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 153
          },
          {
            "id": "5e8472eb86a789a28eb4c21f",
            "location": {
              "type": "Point",
              "coordinates": [
                174.98174,
                -40.918804
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 1818
          },
          {
            "id": "5e8472e886a7896484b4c206",
            "location": {
              "type": "Point",
              "coordinates": [
                175.400028,
                -39.417303
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 8
          },
          {
            "id": "5e8472ea86a789f3c1b4c21a",
            "location": {
              "type": "Point",
              "coordinates": [
                175.152736,
                -40.763595
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 67
          },
          {
            "id": "5e8472e986a7897b29b4c213",
            "location": {
              "type": "Point",
              "coordinates": [
                175.386466,
                -40.174447
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 164
          },
          {
            "id": "5e8472e586a789445fb4c1f8",
            "location": {
              "type": "Point",
              "coordinates": [
                175.163076,
                -38.33225
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 81
          },
          {
            "id": "5e8472dc86a7891a7ab4c1ae",
            "location": {
              "type": "Point",
              "coordinates": [
                174.794549,
                -36.890082
              ]
            },
            "speed": "fast",
            "status": "busy",
            "preferredOperator": true,
            "distance": 230
          },
          {
            "id": "5e8472e486a789251ab4c1f2",
            "location": {
              "type": "Point",
              "coordinates": [
                175.328916,
                -38.008473
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 486
          },
          {
            "id": "5e8472ea86a7890bfeb4c219",
            "location": {
              "type": "Point",
              "coordinates": [
                175.284152,
                -40.623516
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 54
          },
          {
            "id": "5e8472ee86a7897860b4c233",
            "location": {
              "type": "Point",
              "coordinates": [
                174.776116,
                -41.284599
              ]
            },
            "speed": "fast",
            "status": "error",
            "preferredOperator": false,
            "distance": 267
          },
          {
            "id": "5e8472ef86a7893446b4c241",
            "location": {
              "type": "Point",
              "coordinates": [
                174.797143,
                -41.318419
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 2497
          },
          {
            "id": "5edf3db983254c3a4ed21946",
            "location": {
              "type": "Point",
              "coordinates": [
                174.983637,
                -37.192743
              ]
            },
            "speed": "turbo",
            "status": "unknown",
            "preferredOperator": false,
            "distance": 72
          },
          {
            "id": "5e8472ea86a78974dbb4c218",
            "location": {
              "type": "Point",
              "coordinates": [
                175.281212,
                -40.47165
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 462
          },
          {
            "id": "5e8472ee86a7897eb0b=4c235",
            "location": {
              "type": "Point",
              "coordinates": [
                174.782858,
                -41.291425
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 562
          },
          {
            "id": "5e8472e386a789dcdfb4c1eb",
            "location": {
              "type": "Point",
              "coordinates": [
                175.273749,
                -37.778893
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 1730
          },
          {
            "id": "5e8472ec86a7893ad9b4c226",
            "location": {
              "type": "Point",
              "coordinates": [
                174.840789,
                -41.134453
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 388
          },
          {
            "id": "5e8472ee86a78941d7b4c237",
            "location": {
              "type": "Point",
              "coordinates": [
                174.774566,
                -41.29457
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 9
          },
          {
            "id": "5e8472dc86a78942fdb4c1ab",
            "location": {
              "type": "Point",
              "coordinates": [
                174.762623,
                -36.84537
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": true,
            "distance": 1287
          },
          {
            "id": "5e8472e286a7891bdab4c1d9",
            "location": {
              "type": "Point",
              "coordinates": [
                174.879214,
                -36.988096
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 595
          },
          {
            "id": "5e8472db86a789ad54b4c1a9",
            "location": {
              "type": "Point",
              "coordinates": [
                174.932611,
                -37.048889
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": true,
            "distance": 1382
          },
          {
            "id": "5e8472ed86a7890444b4c22a",
            "location": {
              "type": "Point",
              "coordinates": [
                174.868515,
                -41.22281
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 4827
          },
          {
            "id": "5e8472ea86a789afa7b4c21b",
            "location": {
              "type": "Point",
              "coordinates": [
                175.02426,
                -40.861299
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 1221
          },
          {
            "id": "5e8472e186a78917c6b4c1d3",
            "location": {
              "type": "Point",
              "coordinates": [
                174.828352,
                -36.860782
              ]
            },
            "speed": "fast",
            "status": "free",
            "preferredOperator": false,
            "distance": 4054
          }
        ],
      },
      "status": "done"
    }
  }
}
</code-block>
</playground>
