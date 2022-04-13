---
title: Query route path
description: 
order: 5
frequently: 
- route
- status
---

# Query route path
Whenever you need data about a specific point in your route, you can use the `routePath` query. It can return information about `temperatures`, `speed`, `elevation` and more. 

<api-reference-actions example-url="https://examples.chargetrip.com/?id=elevation-plot" url="https://playground.chargetrip.com/page=getRoute"></api-reference-actions>

## Query
When using the `routePath` query you need a route id and `location` as a GeoJSON point of a specific point in the route. You can create a new route and receive the route `id` using the new route mutation as described [here](/API-Reference/Routes/mutate-route). Please note that the coordinates need to be identical to those you receive back from your route request. You can find all coordinates by decoding the encoded `polyline`. 

<schema name="routePath" :frequent="frequently"></schema>

<response error="routePath"></response>

<playground>
<code-block lang="graphql" type="query">
query routePath {
  routePath(
    id: "5fd25d01cb36454e2666f988", 
    location: {
      type: Point
      coordinates: [11.61653, 50.04779]
    }
  ) {
  	elevation
    averageSpeed
    recommendedSpeed
    consumption
    consumptionPerKm
    distance
    duration
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "routePath": {
      "elevation": 357,
      "averageSpeed": 110,
      "recommendedSpeed": 110,
      "consumption": -0.001,
      "consumptionPerKm": -0.012,
      "distance": 46,
      "duration": 2
    }
  }
}
</code-block>
</playground>
