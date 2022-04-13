---
title: Mutate to recalculate navigation
description: Recalculate the route on the navigation session by providing the current location and heading
order: 6
---

# Recalculate the route

Besides the update mutation, there is another way to alter the route in a navigation session. With the `recalculateNavigation` mutation you can force the calculation of a new route.

<api-reference-actions url="https://playground.chargetrip.com/?page=recalculateNavigation"></api-reference-actions>

## Mutation

To be able to recalculate a route you need to provide the navigation `id` and the `current_location`. You can include the current `state_of_charge`, `via` points and the current `heading` of the vehicle. These fields are optional but will be used to optimize the new route.

There are two use cases for this operation.

### 1. Deviate from the route

In case a vehicle deviates from the calculated route (e.g. the driver takes a wrong exit), most navigation SDKs will detect this. We recommend to hook into the event and send the location from the off route callback.

Do not send multiple requests but wait until the subscription returns a new route.

### 2. Changing the via points

The second use case for using this operation is to change the manually added via points. This allows the driver to change the order of the via points, to add new ones or to delete them. Note that via points that were already reached are eliminated automatically.

<schema name="recalculateNavigation" type="Mutation"></schema>

<response error="recalculateNavigation"></response>

<playground>
<code-block lang="graphql" type="mutation">					
mutation recalculateNavigation {
  recalculateNavigation(
    input: {
      id: "624fed3789403385e0eca8d2"
      heading: 174.5
      current_location: { type: Point, coordinates: [9.9936818, 53.5510846] }
    }
  )
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "recalculateNavigation": null
  }
}
</code-block>
</playground>
