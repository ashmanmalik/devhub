---
title: Introduction
description: Start building routes with the chargetrip routing queries, mutations and subscriptions.
order: 1
---

# Route calculations
To create a route you need the `newRoute` mutation and `routeUpdateById` subscription. We strongly recommend to use subscriptions. Recursively querying a route ID until the route is processed increases costs and delays your application. A visual representation is added below. For a more detailed explanation keep reading.

<c-image alt="Authorization image" src="/route-mutation.png" max-width="lg"></c-image>

## Mutation & Subscription
First, use your GraphQL client to execute the [mutation](/API-Reference/Routes/mutate-route). This mutation takes a `RequestInput` object which contains all the parameters needed to create a route. It returns the `ID` of that newly created route. Use that route ID to [subscribe to route updates](/API-Reference/Routes/subscribe-to-route-updates). The status of the route (`RouteStatus`) will be updated from `pending`, to `processing`, and afterward to the final status `done`. If a route is not found or something goes wrong during the calculation the final status resolves to either `not_found` or `error`. It is recommended to unsubscribe from further updates when the route has reached a final status. 

<examples title="Clone an example">
    <!-- Routes -->
    <example 
        href="https://examples.chargetrip.com/?id=route" 
        img="route-example.png" 
        title="Build a route" 
        description="Query and mutate route information and plot it on a map" 
        category="Routes">
    </example>
    <example 
        href="https://examples.chargetrip.com/?id=elevation-plot" 
        img="elevation-example.png" 
        title="Elevation Plot" 
        description="Grab the elevation profile from a route and plot it on a graph" 
        category="Routes">
    </example>
    <!-- <example 
        href="https://examples.chargetrip.com/?id=alternative-routes" 
        img="alternative-routes-example.png" 
        title="Alternative routes" 
        description="Query and render alternative routes" 
        category="Routes">
    </example> -->
</examples>
