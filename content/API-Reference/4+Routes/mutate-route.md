---
title: Mutate to create a new route
description: Mutate a route between 2 or more waypoints and support alternative stations along a route
order: 2
---

# Create a new route

As described in the route introduction, the first thing you will need to do is fetch a `route ID`. This `route ID` can then be sent to subscribe to [route details](/API-Reference/Routes/query-route-details) and retrieve a polyline and other route data.

<api-reference-actions example-url="https://examples.chargetrip.com/?id=route" url="https://playground.chargetrip.com/?page=newRoute"></api-reference-actions>

## Mutation

To get a `route ID`, you will need to provide us with EV details and at least a departure location and destination. Apart from that you can also support any of the options that are described below.

### Support alternative stations along a route

If you want to request alternative charging stations along a route, you can set the `stationsAlongRouteRadius` property of the route mutation. The radius can be set between `500` and `5000` meters. This will return all applicable stations within the set radius following the specified powers and standards.

### Support stations as waypoint

You can add a station as a waypoint or as a destination. To do this, add `stationId` to `routeRequest.via.properties` or `routeRequest.destination.properties`.

### Get additional properties

Our route destination, origin and stations have an optional `properties` attribute in any of our route queries. You can use this to fetch a complete `address`, the current temperature (`temp`) and air `pressure` at that location.

### Using percentages

You can configure this query to use percentages for the state of charge and final state of charge. This way client-side conversions are no longer needed. Please be aware that the percentages are based upon the `usableCarBattery` or the capacity included inside this mutation.

### Operator ranking

In your route request, you can rank or exclude operators based on preference. We support ten different levels of preference. Level 1 is considered the highest level, and level 10 is the lowest. It is possible to skip levels or add multiple operators to the same level. Every level lowers the preference by 10 percent. Enable your operator ranking by setting it to `preferred` or `required`.

If you always prefer and exclude the same operators, we recommend that you add your operator ranking to your client configuration instead. The route request will override any client configuration you might have.

### Amenities

In the route request you can define a list of amenities that should be available at the charge stations. Valid amenity types are: `restaurant`, `bathroom`, `supermarket`, `playground`, `coffee`, `shoping`, `museum`, `hotel`, `park` and `pharmacy`. The route that matches the requested amenities best will be available as a route alternative with the type `bestMatching`. If you did include an operator ranking object in your route request this ranking is equally taken into account.

Use the [amenity list query](/API-Reference/Stations/query-station-amenities) to retrieve the amenity details for a station id.

<note display="block">
We do not use onboard chargers of 20 kWh in routing unless a car has no plugs above 20 kWh. Therefore, if you add a plug of 20 kWh or less to your route request, this plug will often be ignored.
</note>

<schema name="newRoute" type="Mutation"></schema>

<response error="newRoute"></response>

<playground>
<code-block lang="graphql" type="mutation">					
mutation newRoute {
  newRoute(
    input: {
      ev: { 
        id: "5f043da2bc262f1627fc0333"
      }
      routeRequest: {
        operators:{ 
          type: preferred 
          ranking: { 
            level1: ["5e8582d6ec23e63214acc2fb"]
            level5: ["5e8582d7ec23e63adeacc313"]
          }
          exclude: ["5e858338ec23e666aeacc912"]
        }
        origin: {
          type: Feature
          geometry: { type: Point, coordinates: [13.3888599, 52.5170365] }
          properties: { name: "Berlin, Germany" }
        }
        destination: {
          type: Feature
          geometry: { type: Point, coordinates: [9.1800132, 48.7784485] }
          properties: { name: "Stuttgart, Germany" }
        }
        via: [
          {
            type: Feature
            geometry: { type: Point, coordinates: [12.20824,47.83697] }
            properties: { stationId: "5e844fa8160789b6c028fb14" }
          }
        ]
        stationsAlongRouteRadius: 5000
     }
    }
  )
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "newRoute": "5e300e71f7e26f726afd3d71"
  }
}
</code-block>
</playground>
