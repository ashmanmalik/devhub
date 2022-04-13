---
title: Query cars
description: Query all cars from the database
order: 2
frequently:
- id
- naming
- connectors
- availability
---

# Querying cars
In order to see all cars in our car database you can use the `carList` query. To create fast front-ends, you are allowed to cache the carList query response. We recommend you query the carList at least once a day, never to miss an update. You can see a live example of this query including all available output parameters [here](https://playground.chargetrip.com/?page=carListAll).

<api-reference-actions url="https://playground.chargetrip.com/?page=carList"></api-reference-actions>

## Query
To query the cars in your database, you only need to call the `carList` alongside the paramaters you would like to receive. Optionally you can add [pagination](/API-Reference/API/pagination) and `filters`.

### Filters
To filter your car list you can use the `query` argument. You can use the `make` to filter on a specific make, Tesla for example. Or filter on size, to specify the amount of cars you would like to receive. The default is 10. 

<schema name="carList" :frequent="frequently"></schema>

<response error="carList"></response>

<playground>
<code-block lang="graphql" type="query">	
query carListAll {
  carList {
  id
 	naming {
      make
      model
      edition
      chargetrip_version
    }
  body {
      seats
    }
  }
}
</code-block>

<code-block lang="json" type="response">
{
  "data": {
    "carList": [
      {
        "id": "5d161beec9eef4c250d9d225",
        "naming": {
          "make": "BMW",
          "model": "i3s",
          "edition": null,
          "chargetrip_version": "94 Ah"
        },
        "body": {
          "seats": 4
        }
      },
      {
        "id": "5d161befc9eef48216d9d228",
        "naming": {
          "make": "Kia",
          "model": "Soul EV",
          "edition": null,
          "chargetrip_version": "30 kWh"
        },
        "body": {
          "seats": 5
        }
      },
      {
        "id": "5d161bdbc9eef45824d9d1ec",
        "naming": {
          "make": "Nissan",
          "model": "Leaf",
          "edition": null,
          "chargetrip_version": "30 kWh"
        },
        "body": {
          "seats": 5
        }
      },
      {
        "id": "5d161be5c9eef46132d9d20a",
        "naming": {
          "make": "Tesla",
          "model": "Model S",
          "edition": null,
          "chargetrip_version": "75D (2016-2019)"
        },
        "body": {
          "seats": 5
        }
      }
    ]
  }
}
</code-block>
</playground>
