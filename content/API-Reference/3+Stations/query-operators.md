---
title: Query station operators
description: Query all the operators of your station database
order: 8
frequently:
- id
- name
- website
- logo
---

# Query station operators
Charge stations are often exploited by various operators. To get an overview of the operators in your station database you can use the `operatorList` query. All operator details are available for you to query. Keeping the number of attributes as low as possible will improve performance.

<api-reference-actions url="https://playground.chargetrip.com/?page=stationListAll"></api-reference-actions>

## Query
The entire list of operators can be accessed using the `operatorList` query, along with the attributes you would like to receive. Optionally you can use [pagination](/API-Reference/API/pagination) and `filters` to improve your results.

### Filters
To filter your operator list you can use the `query` argument. You can then use `name`, `id`, `external_id` or `country` to specify how you want to filter the list.

<schema name="operatorList" :frequent="frequently"></schema>

<response error="operatorList"></response>

<playground>
<code-block lang="graphql" type="query">					
query operatorList {
  operatorList(
    query: { name: "AeroVironment" }
    size: 2
    page: 0
  ) {
    id
    external_id
    name
    website
    logo {
      url
      thumbnail
      type
    }
    country
    contact {
      phone
      email
      website
      facebook
      twitter
      properties
    }
  }
}
</code-block>
<code-block lang="json" type="response">
{
  "data": {
    "operatorList": [
      {
        "id": "5dc3dff8c81f55a86f7197ac",
        "external_id": "3377",
        "name": " Etecnic",
        "website": "http://www.etecnic.es",
        "logo": null,
        "country": "ES",
        "contact": {
          "phone": " (+34) 977 276 952",
          "email": "etecnic@etecnic.es",
          "website": "http://www.etecnic.es",
          "facebook": null,
          "twitter": null,
          "properties": null
        }
      },
      {
        "id": "5dc3dff8c81f557fb27197ad",
        "external_id": "45",
        "name": "(Business Owner at Location)",
        "website": "",
        "logo": null,
        "country": null,
        "contact": {
          "phone": "",
          "email": "",
          "website": "",
          "facebook": null,
          "twitter": null,
          "properties": null
        }
      }
    ]
  }
}
</code-block>
</playground>
