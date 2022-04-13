---
title: Mutate to update a navigation session
description: Update a navigation session by providing locations, telemetry and heading
order: 5
---

# Updating a navigation session

Once you have created a navigation session and set up a subscription, you can provide more data to update the navigation session. Based on the locations and telemetry data, the Chargetrip algorithms optimize the route.

<api-reference-actions url="https://playground.chargetrip.com/?page=updateNavigation"></api-reference-actions>

## Mutation

In order to update a navigation session you need to provide the id and an array of `locations_data`. The other fields, `heading` and `telemetry` are optional but including them will result in better routes.

### Locations data heartbeat

You need to send at least one location in `locations_data` array. If you are using Mapbox as a data provider you will periodically receive updates that can be stored in a local cache. Alternatively, you could store a location every 5 or 10 seconds depending on the vehicle speed.

We recommend you to send the locations every 5 minutes.

### Telemetry data

Besides the location data we accept telemetry data. This includes the `state_of_charge`. As an example you could send us a new value after charging at a station. The data can either come from a user interface in the navigation application, from an in-car system or telemetry API.

Furthermore, you can provide us an average `tire_pressure` for all wheels of the vehicle and whether or not the vehicle is charging via the `is_charging` boolean.

<schema name="updateNavigation" type="Mutation"></schema>

<response error="updateNavigation"></response>

<playground>
<code-block lang="graphql" type="mutation">					
mutation updateNavigation {
  updateNavigation(
    input: {
      id: "624fed3789403385e0eca8d2"
      heading: 174.5
      locations_data: [
        {
          geometry: { type: Point, coordinates: [9.9936818, 53.5510846] }
          properties: {
            route_leg: 0
            speed: 48.3
            timestamp: 1649322266
            altitude: 23
          }
        }
        {
          geometry: { type: Point, coordinates: [9.9936822, 53.5510866] }
          properties: {
            route_leg: 0
            speed: 51.3
            timestamp: 1649322266
            altitude: 23
          }
        }
      ]
      telemetry: {
        state_of_charge: 42.40
        is_charging: false
        tire_pressure: 2.7
      }
    }
  )
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "updateNavigation": null
  }
}
</code-block>
</playground>
