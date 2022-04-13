---
title: Query station amenities
description: Query the amenities of a specific station
order: 12
frequently:
- address
- type
- rating
- foursquareUrl
---

# Query station amenities
To get a full overview of all amenities at a charging station you can use the `amenityList` query. Most of them support a link towards foursquare for more information.

The available amenities can also be used as [filters](/API-Reference/Tile-Service/filters) on our [tile service](/API-Reference/Tile-Service/introduction). To show the amenity count you can use the [station statistics](/API-Reference/Stations/query-station-stats) query. 

## Query
To use the `amenityList` query you will need a station `id`. This `id` can be fetched by using our `stationList` query. After passing in this `id` you have access to anything from `address` to `rating`.

<schema name="amenityList" :frequent="frequently"></schema>

<response error="amenityList"></response>

<playground>
<code-block lang="graphql" type="query">					
query amenityList($stationId: ID!) {
  amenityList(stationId: $stationId) {
    id
    externalId
    name
    location {
      type
      coordinates
    }
    address {
      continent
      country
      county
      city
      street
      number
      postalCode
      what3Words
      formattedAddress
    }
    type
    distance
    foursquareUrl
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "amenityList": [
      {
        "id": "5cf87262532717b6e7a510df",
        "externalId": "4a270706f964a520bd8c1fe3",
        "name": "Rijksmuseum",
        "location": {
          "type": "Point",
          "coordinates": [
            4.885132584180236,
            52.3601351663482
          ]
        },
        "address": {
          "continent": "EU",
          "country": "NL",
          "county": "Noord-Holland",
          "city": "Amsterdam",
          "street": "Museumstraat 1",
          "number": null,
          "postalCode": "1071 XX",
          "what3Words": null,
          "formattedAddress": [
            "Museumstraat 1, 1071 XX",
            "Amsterdam, Noord-Holland",
            "Netherlands"
          ]
        },
        "type": [
          "museum"
        ],
        "distance": 198,
        "foursquareUrl": "https://foursquare.com/v/rijksmuseum/4a270706f964a520bd8c1fe3"
      },
      {
        "id": "5ee8fab85d7d79001c8fdaa9",
        "externalId": "4b8d3f6ef964a520b9ef32e3",
        "name": "Amsterdam Marriott Hotel",
        "location": {
          "type": "Point",
          "coordinates": [
            4.880108247650469,
            52.362570809114246
          ]
        },
        "address": {
          "continent": "EU",
          "country": "NL",
          "county": "Noord-Holland",
          "city": "Amsterdam",
          "street": "Stadhouderskade 12",
          "number": null,
          "postalCode": "1054 ES",
          "what3Words": null,
          "formattedAddress": [
            "Stadhouderskade 12, 1054 ES",
            "Amsterdam, Noord-Holland",
            "Netherlands"
          ]
        },
        "type": [
          "hotel"
        ],
        "distance": 250,
        "foursquareUrl": "https://foursquare.com/v/amsterdam%20marriott%20hotel/4b8d3f6ef964a520b9ef32e3"
      }
    ]
  }
}
</code-block>
</playground>
