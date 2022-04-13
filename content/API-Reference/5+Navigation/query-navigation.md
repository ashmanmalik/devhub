---
title: Query navigation session
description: Query a navigation session for its current state
order: 4
---

# Query a navigation session

When you have obtained a navigation `id` through the [startNavigation mutation](/API-Reference/Navigation/mutate-start-navigation), you can query for its current state.

<api-reference-actions url="https://playground.chargetrip.com/?page=navigation"></api-reference-actions>

## Query

To query the navigation details you will need to provide the `navigation ID` as an argument. For doing turn-by-turn navigation we strongly recommend you to use the [subscription service](/API-Reference/Navigation/subscribe-to-navigation-updates). A subscription provides you with updates on the navigation session whilst a navigation query only gives you a snapshot of the current state.

<schema name="navigation"></schema>

<response error="navigation"></response>

## Response

If successful, the HTTP status code in the response header is `200` and the response body contains the attributes you requested. The most important value here is the status field. This will tell you what data is available.

<playground>
<code-block lang="graphql" type="query">					
query navigation {
  navigation(id: "624e918b89403385e0eb97d0") {
    route_id
    route_alternative_id
    state
    state_of_charge
    last_known_location {
      type
      coordinates
    }
    next_station {
      station_id
      station_location {
        type
        coordinates
      }
      via {
        type
        coordinates
      }
      estimated_state_of_charge
      estimated_duration
      estimated_consumption
    }
    alternative_stations {
      station_id
      station_location {
        type
        coordinates
      }
      via {
        type
        coordinates
      }
      estimated_state_of_charge
      estimated_consumption
      estimated_duration
    }
    instructions(instructions_format: MapboxV5, language: en, precision: 6)
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "navigation": {
      "route_id": "624e92170ccb0eeb800aa9cc",
      "route_alternative_id": "624e9217ed4e70241b3092b5",
      "state": "driving",
      "state_of_charge": 60.5,
      "last_known_location": {
        "type": "Point",
        "coordinates": [
          9.9936818,
          53.5510846
        ]
      },
      "next_station": {
        "station_id": null,
        "station_location": {
          "type": "Point",
          "coordinates": [
            8.806422,
            53.073635
          ]
        },
        "via": [],
        "estimated_state_of_charge": 29.59827119941316,
        "estimated_duration": 3955,
        "estimated_consumption": 30.90172880058684
      },
      "alternative_stations": [],
      "instructions": {
        "routes": [
          {
            // Note: Instructions are removed from this example response
          }
        ]
 
      }
    }
  }
}
}
</code-block>
</playground>
