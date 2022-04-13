---
title: Query station tariffs
description: Get a global overview of the tariffs and costs of all your stations
order: 10
frequently:
- currency
- min_price
- max_price
- elements
---

# Query station tariff list
To get an overview of the charging costs and optional setup fee you can run the query station tariff list. Within this list you will find all costs per station.

<note display="block">
The station tariff data is currently not available on our playground. Create an account or <cta action='openChat'>contact sales</cta> to get access to the data.
</note>

## Query
The `tariffList` query works out of the box and no additional information is required. However, you have the option to enable [pagination](/API-Reference/API/pagination) on the query to improve the performance as you can see below.

<schema name="tariffList" :frequent="frequently"></schema>

<response error="tariffList"></response>

<playground>
<code-block lang="graphql" type="query">
query tariffList {
  tariffList (
    size: 5, 
    page: 1
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
        "tariffList": [
            {
                "id": "#",
                "country_code": null,
                "party_id": null,
                "currency": "EUR",
                "type": null,
                "tariff_alt_url": "",
                "tariff_alt_text": [
                    {
                        "text": "PNB"
                    }
                ],
                "min_price": null,
                "max_price": null,
                "elements": [
                    {
                        "price_components": [
                            {
                                "price": 0.5,
                                "vat": 0
                            }
                        ],
                        "restrictions": []
                    },
                    {
                        "price_components": [
                            {
                                "price": 0.29,
                                "vat": 0
                            }
                        ],
                        "restrictions": [
                            {
                                "day_of_week": null
                            }
                        ]
                    }
                ],
                "start_date_time": null,
                "end_date_time": null,
                "energy_mix": null,
                "last_updated": "2018-09-25T23:10:04.000Z"
            }
        ]
    }
}
</code-block>
</playground>
