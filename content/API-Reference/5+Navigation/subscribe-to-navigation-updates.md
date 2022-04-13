---
title: Subscribe to navigation updates
description: Receive navigation updates through a GraphQL subscription
order: 3
frequently:
  - route_id
  - state
  - state_of_charge
  - next_station
  - alternative_stations
  - instructions
---

# Subscribe to navigation updates

When you have obtained a navigation `id` through the [startNavigation mutation](/API-Reference/Navigation/mutate-start-navigation), you can start a navigation subscription to get the turn-by-turn instructions and other subscription details. As the vehicle is approaching a charge station, a lot can happen. Therefore, we recommend subscribing to a navigation session to push updates to the navigation app when necessary. Updates can be triggered, for example, when all connectors are occupied at the planned charge stop or if the end-user takes a wrong exit. In both cases, a reroute will be triggered.

By subscribing to a navigation session, updates are pushed to the navigation app when necessary.

<api-reference-actions url="https://playground.chargetrip.com/?page=navigationUpdatedById"></api-reference-actions>

## Subscription

The subscription service needs to be initiated with a `navigation ID`. From there on it will start a navigation session and provide you with updates.

### Listen to the route id

When starting the subscription always include the `route_id` field. Whenever this value changes the navigation application needs to re-render the polyline. This id is updated when, for example, a wrong exit is taken and the `recalculateNavigation` mutation is called.

### Supported turn-by-turn providers

The `instructions` field accepts three field arguments. The `instructions_format` accepts two values: `MapboxV5` which returns the turn-by-turn instructions mapped for the latest Mapbox SDK and `Chargetrip` which can be used to map the instructions to a mapping provider that we do not yet officially support. Official support for more providers is on its way. The `language` argument currently accepts English and `precision` will encode the polyline with coordinates that either have 5 or 6 decimals.

For more information about upcoming providers and languages [get in touch](https://help.chargetrip.com/)!

<schema type="Subscription" name="navigationUpdatedById"  :frequent="frequently"></schema>

<response error="navigationUpdatedById"></response>

## Response

If successful, the HTTP status code in the response header is `200` and the response body contains the attributes you requested. The most important value here is the status field. This will tell you what data is available.

<playground>
<code-block lang="graphql" type="subscription">					
subscription navigationUpdatedById {
  navigationUpdatedById(id: "624e918b89403385e0eb97d0") {
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
    "navigationUpdatedById": {
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
