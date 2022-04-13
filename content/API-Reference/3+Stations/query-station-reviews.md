---
title: Query station reviews
description: Query the station reviews of a specific station
order: 5
---

# Query station reviews
Every station in your database can be accompanied by a user review. You can query for properties such as `rating` and `message` but also receive data about the EV that was used. Reviews are stored per station database and can't be used across different projects.

<api-reference-actions url="https://playground.chargetrip.com/?page=reviewListLazyLoading"></api-reference-actions>

## Query
To get the reviews of a specific station you will need to provide a `stationId` as an argument. Optionally you can use [pagination](/API-Reference/API/pagination) for your query.

<schema name="reviewList"></schema>

<response error="reviewList"></response>

<playground>
<code-block lang="graphql" type="query">					
query reviewList($stationId: ID!) {
  reviewList(stationId: $stationId, size: 2, page: 0) {
    id
    rating
    message
    locale
    ev {
      id
      naming {
        make
        model
        edition
        version
      }
    }
    plugType
    tags {
      working
      recommended
    }
    properties
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "reviewList": [
      {
        "id": "5eb91eedd40bda5e3df3c6a3",
        "rating": 5,
        "message": "My review message",
        "locale": "en-US",
        " "ev": {
          "id": "5d161be5c9eef46132d9d20a",
          "naming": {
            "make": "Tesla",
            "model": "Model S",
            "edition": null,
            "version": "75D"
          }
        },
        "plugType": "CHADEMO",
        "tags": {
          "working": true,
          "recommended": true
        },
        "properties": null
      },
      {
        "id": "5eb2a8bd629b005f65bb297f",
        "rating": 5,
        "message": "My review message",
        "locale": "en-US",
        "ev": {
          "id": "5d161be5c9eef46132d9d20a",
          "naming": {
            "make": "Tesla",
            "model": "Model S",
            "edition": null,
            "version": "75D"
          }
        },
        "plugType": "CHADEMO",
        "tags": {
          "working": true,
          "recommended": true
        },
        "properties": null
      }
    ]
  }
}
</code-block>
</playground>
