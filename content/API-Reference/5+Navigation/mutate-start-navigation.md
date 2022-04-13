---
title: Mutate to start a new navigation session
description: Create a new navigation session with the startNavigation mutation
order: 2
---

# Start a new navigation session

After creating a [new route](/API-Reference/Routes/mutate-route) and obtaining your route `id`, you can use the `startNavigation` mutation to start a new navigation session. A navigation session is automatically finished after 48 hours of inactivity. During that time frame you can [subscribe](API-Reference/Navigation/subscribe-to-navigation-updates) to it for updates or [query](API-Reference/Navigation/navigation) its current state.

<api-reference-actions url="https://playground.chargetrip.com/?page=startNavigation"></api-reference-actions>

## Mutation

To start a navigation session, you need a route `id`, an `alternative_id` and your `current_location`. Of these three arguments `alternative_id` is optional. In case no alternative was chosen explicitly the first route is used for the navigation session. In order to start a navigation session you need to be in proximity of the route.

<schema name="startNavigation" type="Mutation"></schema>

<response error="startNavigation"></response>

<playground>
<code-block lang="graphql" type="mutation">					
mutation startNavigation {
  startNavigation(
    input: {
      route_id: "624c2e9658e5c17cd1b65a0d"
      route_alternative_id: "624c2e961b7230e5aec14f20"
      current_location: { 
        type: Point, 
        coordinates: [9.9936818, 53.5510846]
      }
    }
  )
}

</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "startNavigation": "624c2f33f3a27e9cb19fa0cc"
  }
}
</code-block>
</playground>
