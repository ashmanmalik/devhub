---
title: Query stations around a GeoJSON point
description: Query stations at a specific location or GeoJSON point.
order: 4
frequently:
- id
---

# Query stations around a GeoJSON point
With the query `stationsAround` you can fetch the stations around a GeoJSON point with a specific distance in meters. This can be useful when a station is busy, or when you want to provide several charging options.

<api-reference-actions example-url="https://examples.chargetrip.com/?id=stations-around" url="https://playground.chargetrip.com/?page=stationAround"></api-reference-actions>

## Query
To query a station around GeoJSON point you have set various `query` arguments including `location`, `distance` and optionally `power` and `amenities`. To limit your results and improve the performance you can use [pagination](/API-Reference/API/pagination) on your query.

<schema name="stationAround" :frequent="frequently"></schema>

<response error="stationAround"></response>

<playground>
<code-block lang="graphql" type="query">					
query stationAround {
  stationAround(
    query: {
      location: { type: Point, coordinates: [4.8979755, 52.3745403] }
      distance: 5000
      power: [50, 22]
      amenities: ["supermarket"]
    }
    size: 10
    page: 0
  ) {
    id
    external_id
    name
    location {
      type
      coordinates
    }
    elevation
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
    power
    # add more fields here
  }
}

</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "stationAround": [
      {
        "id": "5e859067d3406c7e163c4318",
        "external_id": "84373",
        "name": "Allego Shell Hobbemakade Amsterdam",
        "location": {
          "type": "Point",
          "coordinates": [
            4.88584220409393,
            52.3497200185866
          ]
        },
        "elevation": 2,
        "physical_address": {
          "continent": "EU",
          "country": "NL",
          "county": "Noord-Holland",
          "city": "Amsterdam",
          "street": "Hobbemakade 121",
          "number": null,
          "postalCode": "1071 XW",
          "what3Words": "tech.plan.dashes",
          "formattedAddress": [
            "Hobbemakade 121, 1071 XW",
            "Amsterdam, Noord-Holland",
            "Netherlands"
          ]
        },
        "amenities": {
          "restaurant": 5,
          "bathroom": 0,
          "supermarket": 5,
          "playground": 3,
          "coffee": 5,
          "shopping": 2,
          "museum": 2,
          "hotel": 5,
          "park": 5
        },
        "power": {
          "43": {
            "total": 1,
            "available": 0
          },
          "50": {
            "total": 2,
            "available": 0
          }
        }
      },
      {
        "id": "5e85e81e109582840dead29a",
        "external_id": "148324",
        "name": "Strawinskylaan",
        "location": {
          "type": "Point",
          "coordinates": [
            4.875402153081495,
            52.340961671030556
          ]
        },
        "elevation": 2,
        "physical_address": {
          "continent": "EU",
          "country": "NL",
          "county": "North Holland",
          "city": "Amsterdam",
          "street": "Strawinskylaan",
          "number": null,
          "postalCode": "1077XW",
          "what3Words": "voices.enabling.lung",
          "formattedAddress": [
            "Strawinskylaan, 1077XW",
            "Amsterdam, North Holland",
            "Netherlands"
          ]
        },
        "amenities": {
          "restaurant": 5,
          "bathroom": 0,
          "supermarket": 4,
          "playground": 3,
          "coffee": 5,
          "shopping": 0,
          "museum": 0,
          "hotel": 5,
          "park": 5
        },
        "power": {
          "43": {
            "total": 1,
            "available": 0
          },
          "50": {
            "total": 2,
            "available": 0
          }
        }
      },
      {
        "id": "5e859652d3406c7d833c9875",
        "external_id": "37392",
        "name": "Europaboulevard",
        "location": {
          "type": "Point",
          "coordinates": [
            4.88961460317989,
            52.3342774301877
          ]
        },
        "elevation": 2,
        "physical_address": {
          "continent": "EU",
          "country": "NL",
          "county": null,
          "city": "Amsterdam",
          "street": "Europaboulevard",
          "number": null,
          "postalCode": "1083 AD",
          "what3Words": "testing.boggles.blanked",
          "formattedAddress": [
            "Europaboulevard, 1083 AD",
            "Amsterdam",
            "Netherlands"
          ]
        },
        "amenities": {
          "restaurant": 4,
          "bathroom": 0,
          "supermarket": 3,
          "playground": 4,
          "coffee": 5,
          "shopping": 2,
          "museum": 0,
          "hotel": 5,
          "park": 4
        },
        "power": {
          "50": {
            "total": 1,
            "available": 0
          }
        }
      }
    ]
  }
}
</code-block>
</playground>
