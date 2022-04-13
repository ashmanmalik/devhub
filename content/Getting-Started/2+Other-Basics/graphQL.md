---
title: GraphQL Basics
description: A short introduction on what graphQL is.
order: 1
quickNav: true
---

# Introduction on GraphQL
GraphQL is a query language and runtime system. Clients form requests (called queries and mutations) by using the GraphQL query language, and the GraphQL server executes these requests and returns the data in a response. Unlike REST APIs, which expose a different endpoint for each resource object, a GraphQL API makes all data available at a single endpoint. A client specifies exactly the data that it wants, and the server responds with only that data. GraphQL is seen as a modern alternative to a REST-based architecture and aimed at solving its shortcomings.

## Documentation
The documentation for a GraphQL API lives side-by-side with the code that constitutes it. Combined with the typed Schema, this means that we can generate accurate and up-to-date documentation whenever something changes. Using GraphQL's introspection feature, you can query the Schema itself to explore its contents and documentation.

Deprecation is a first-class citizen. We can easily mark a part of our Schema as deprecated, and this will also be reflected in the documentation. GraphQL tooling, such as client libraries, is also expected to communicate to the developer that they're using a deprecated tool.

## GraphQL Basics
Everything that's available through a GraphQL API is typed and included in its schema. You can use this schema to build queries that return only the data that you need. This solves the problem of over-fetching data. It also means that we know which fields each app is using, making it easier for us to evolve our APIs over time. You can find our entire schema in the side-menu or view a visual representation of our schema using [Chargetrip Voyager](https://voyager.chargetrip.com/).
 
Having a schema before querying helps you validate a query before you make it. This eliminates unwelcome surprises like unavailable data or erroneous structures.

All GraphQL requests are sent to the same endpoint, which means that you can often retrieve all the data that you need in a single request. Using GraphQL features such as connections, variables, and aliases, you can make your queries incredibly efficient and retrieve data about many resource types in a single request. Learn about query features [here](https://graphql.org/learn/queries/).

### Primary operations
GraphQL has three primary operations: `Queries`, `Mutations`, and `Subscriptions`. Below are examples of each one.

<code-block lang="graphql" prefix="GraphQL / Primary Operations" title="Query">
query {
  carList {
    id
    carModel
  }
}
</code-block>

<code-block lang="graphql" prefix="GraphQL / Primary Operations" title="Mutation">
mutation {
  addReview(
    review: {
      stationId: "5dc401b04ecd176cfb0d74ef"
      rating: 5
      message: "My review message"
      tags: { working: true, recommended: true }
      locale: "en-US"
      ev: "5d161be5c9eef46132d9d20a"
      plugType: CHADEMO
    }
  ) {
    id
  }
}
</code-block>

<code-block lang="graphql" prefix="GraphQL / Primary Operations" title="Subscription">
subscription {
  routeUpdatedById(id: "5e4d4a8738ef04d2b4206d2a") {
    status
  }
}
</code-block>

<right-aside large="true">

<article-teaser src="/globe.svg" href="https://medium.com/chargetrip/chargetrip-tile-service-with-react-native-and-mapbox-228dae36a574">

## Chargetrip Tile Service with React Native and Mapbox
An introduction to the Chargetrip Tile Service and the caveats of integrating it into a React Native mobile application.

</article-teaser>

<latest-updates></latest-updates>

</right-aside>
