---
title: Query station tariff details
description: Get the tariff and cost details of a specific station
order: 11
frequently:
- currency
- min_price
- max_price
- elements
---

# Query station tariff details
The `tariff` query will provide you with the costs to use a specific charging station. It will include the charging costs and optional setup fee.

<note display="block">

1. We advise all customers using the Eco-movement database to switch to the new prices module.

2. The station tariff data is currently not available on our playground. Create an account or <cta action='openChat'>contact sales</cta> to get access to the data.

</note>

## Query
The `tariff` query requires a tariff `id` to work. This tariff `id` can be found inside the attributes of a [station](/API-Reference/stations/query-station-details).

<schema name="tariff" :frequent="frequently"></schema>

<response error="tariff"></response>

<playground>
<code-block lang="graphql" type="query">	
query tarrif($id: ID!) {
  tariff (
	id: $id
  ) {
    id
    country_code
    party_id
    id
    currency
    type
    tariff_alt_url
    tariff_alt_text {
      text
    }
    min_price {
      incl_vat
    }
    max_price {
      incl_vat
    }
    elements {
      price_components {
        price
        vat
      }
      restrictions {
        day_of_week
      }
    }
    start_date_time
    end_date_time
    energy_mix {
      is_green_energy
    }
    last_updated
  }
}
</code-block>
<code-block lang="json" type="response">
{
    "data": {
        "tariff": {
            "id": "#",
            "country_code": null,
            "party_id": null,
            "currency": "EUR",
            "type": null,
            "tariff_alt_url": "",
            "tariff_alt_text": [],
            "min_price": null,
            "max_price": null,
            "elements": [
                {
                    "price_components": [
                        {
                            "price": 0.21,
                            "vat": 0
                        },
                        {
                            "price": 0.57,
                            "vat": 0
                        }
                    ],
                    "restrictions": []
                }
            ],
            "start_date_time": null,
            "end_date_time": null,
            "energy_mix": null,
            "last_updated": "2020-05-22T00:00:00.000Z"
        }
    }
}
</code-block>
</playground>
