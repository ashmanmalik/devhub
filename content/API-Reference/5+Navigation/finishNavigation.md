---
title: Mutate to finish navigation
description: Finish a navigation session when the final destination is reached
order: 7
---

# Finish a navigation session

When you have reached the final destination on the route you should finish the navigation session. It is also possible to finish the session when the end user cancels the turn-by-turn navigation.

<api-reference-actions url="https://playground.chargetrip.com/?page=finishNavigation"></api-reference-actions>

## Mutation

To finish a navigation session, you need to provide the navigation `id` and `current_location`. When you finish a navigation session you can no longer send updates or do recalculations. The state of the navigation session will be set to `finished`. After you have finished a navigation session you should unsubscribe from [navigationUpdatedById](API-Reference/Navigation/subscribe-to-navigation-updates).

<schema name="finishNavigation" type="Mutation"></schema>

<response error="finishNavigation"></response>

<playground>
<code-block lang="graphql" type="mutation">					
mutation finishCalculation {
  finishNavigation(
    input: {
      id: "624fed3789403385e0eca8d2"
      current_location: {
        type: Point,
        coordinates: [9.1829321, 48.7758459] 
      }
    }
  )
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "finishNavigation": null
  }
}
</code-block>
</playground>
