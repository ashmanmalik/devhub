---
title: Subscribe to route updates
description: Receive route updates through a GraphQL subscription
order: 3

frequently:
  - status
  - route

statuses:
  - Pending
  - Processing
  - Done
  - Not_Found
  - Error

statusDescriptions:
  - Route is waiting to be processed
  - Route is being calculated
  - Route has successfully been processed and data is available
  - Route could not be found
  - Route could not be calculated due to an error
---

# Subscribe to route updates

When you have obtained a `route ID` through the [route mutation](/API-Reference/Routes/mutate-route), you can start a route subscription to obtain your polyline and other route details. Because longer routes take some time to finish you can use a [GraphQL subscription](https://graphql.org/blog/subscriptions-in-graphql-and-relay/) as described in the [introduction](/API-Reference/Routes/introduction).

<api-reference-actions url="https://playground.chargetrip.com/?page=routeUpdatedById"></api-reference-actions>

## Subscription

The subscription service needs to be initiated with a `route ID`. From there on it will start calculating and, based on your interval, provide you with a route status. For all possible statuses, see the [response section](/API-Reference/Routes/subscribe-to-route-updates#response) of this document.

Last but not least, if your route supported any additional options you can now request them on the subscription response, as described here;

### Support alternative stations along a route

If your [route mutation](/API-Reference/Routes/mutate-route) included the `stationsAlongRouteRadius` with a valid distance, you can now request the station details. To do so, you will need to add the `stationsAlongRoute` field with its appropriate children.

### Support stations as waypoint

If your [route mutation](/API-Reference/Routes/mutate-route) included stations in the `via` parameter, you will receive a route with additional stations as waypoints. These station as waypoints can be found inside the `route.leg`.

### Get additional properties

Our route destination, origin and stations have an optional `properties` attribute any of our route queries. You can use this to fetch a complete `address`, the current temperature (`temp`) and air `pressure` at that location.

### Using percentages

You can configure this query to use percentages for the state of charge and final state of charge. This way client-side conversions are no longer needed. Please be aware that the percentages are based upon the `usableCarBattery` or the capacity included inside this mutation.

<schema type="Subscription" name="routeUpdatedById" :frequent="frequently"></schema>

## Response

If successful, the HTTP status code in the response header is `200` and the response body contains the attributes you requested. The most important value here is the status field. This will tell you what data is available.

<status-table :statuses="statuses" :descriptions="statusDescriptions"></status-table>

<playground>
<code-block lang="graphql" type="subscription">					
subscription routeUpdatedById {
  routeUpdatedById(id: "5e300e71f7e26f726afd3d71") {
    status
    # add more fields here
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "route": {
      "status": "pending"
    }
  }
}
</code-block>
</playground>
