---
title: Query station statistics
description: Get the overall statistics of all stations in your station database
order: 13
frequently:
- standards
- amenities
---

# Query station statistics
The `stationStats` query provides you with the ability to query information about your database.This endpoint gives you an overview of what amenities, powertypes or standards are available.

## Query
The query is pretty straight-forward and doesn't require any setup. Just select the attributes you need and you are good to go.

<schema name="stationStats" :frequent="frequently"></schema>

<response error="stationStats"></response>

<playground>
<code-block lang="graphql" type="query">
query stationStats {
  stationStats {
    standards {
      type
      total
    }
    power {
      type
    }
    amenities {
      type
      total
    }
  }
}				
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "stationStats": {
      "standards": [
        {
          "type": "TESLA_S",
          "total": 12319
        },
        {
          "type": "IEC_62196_T2_COMBO",
          "total": 8287
        },
        {
          "type": "CHADEMO",
          "total": 8315
        },
        {
          "type": "IEC_62196_T2",
          "total": 26525
        }
      ],
      "power": [
        {
          "type": "turbo"
        },
        {
          "type": "fast"
        },
        {
          "type": "slow"
        }
      ],
      "amenities": [
        {
          "type": "restaurant",
          "total": 38696
        },
        {
          "type": "bathroom",
          "total": 1288
        },
        {
          "type": "supermarket",
          "total": 24473
        },
        {
          "type": "playground",
          "total": 13644
        },
        {
          "type": "coffee",
          "total": 21825
        },
        {
          "type": "shopping",
          "total": 14832
        },
        {
          "type": "museum",
          "total": 11782
        },
        {
          "type": "hotel",
          "total": 30823
        },
        {
          "type": "park",
          "total": 16724
        },
        {
          "type": "pharmacy",
          "total": 23921
        }
      ]
    }
  }
}
</code-block>
</playground>
