---
title: Query station operator details
description: Query the details of a single station operator
order: 9
frequently:
- id
- name
- website
- logo
---

# Query station operator details
After you [queried a `station`](/API-Reference/Stations/query-station-details) you will be able to fetch the operator details through this `operator` query. It will provide you with a wide range of information such as the `name`, `website` and `logo` of the operator.

## Query
To query the operator details you do need an operator `id`. You can get this `id` from the [`station`](/API-Reference/Stations/query-station-details) query that you just executed.

<schema name="operator" :frequent="frequently"></schema>

<response error="operator"></response>

<playground>
<code-block lang="graphql" type="query">
query operator($id: ID!) {
  operator(id: $id) {
    id
    external_id
    name
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
    "operator": {
      "id": "5e947c83e337015769770512",
      "external_id": "3383",
      "name": "AlterBase - Sorégies (FR)",
      "country": null,
      "contact": {
        "phone": "",
        "email": "service-recharge@soregies.fr",
        "website": "http://www.alterbase86.soregies.fr/portal/#/",
        "facebook": null,
        "twitter": null,
        "properties": null
      }
    }
  }
}
</code-block>
</playground>
