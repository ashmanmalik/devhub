---
title: Query car details
description: Query the data of a single car
order: 3
frequently:
- id
- naming
- connectors
- availability
---

# Query car details
Car data can be useful when you want to display more information about the car. You can access data using the `car` query or get even more data with`carPremium`. Please <cta action='openChat'>contact us</cta> for more information on how to get access to our premium data set. You can see a live example with all available output parameters [here](https://playground.chargetrip.com/?page=car).

<api-reference-actions example-url="https://examples.chargetrip.com/?id=car-details" url="https://playground.chargetrip.com/?page=car"></api-reference-actions>

## Query
To get specific details of a car you need to provide a `carId`. This `id` can be obtained by using the `carList` query.

<schema name="car" :frequent="frequently"></schema>

<response error="car"></response>

<playground>
<code-block lang="graphql" type="query">
query car {
  car(id: "5d161be5c9eef46132d9d20a") {
    id
    naming {
      make
      model
      version
      edition
      chargetrip_version
    }
    connectors {
      standard
      power
      time
      speed
    }
    adapters {
      standard
      power
      time
      speed
    }
    battery {
      usable_kwh
      full_kwh
    }
    body {
      width
      height
      weight
      seats
    }
    availability {
      status
    }
    performance {
      acceleration
      top_speed
    }
    range {
      real
      real_is_estimated
      worst {
        highway
        city
        combined
      }
      best {
        highway
        city
        combined
      }
      chargetrip_range {
        worst
        best
      }
    }
    media {
      evdb_details_url
      image {
        id
        type
        url
        height
        width
        thumbnail_url
        thumbnail_width
        thumbnail_height
      }
      brand {
        id
        type
        url
        height
        width
        thumbnail_url
        thumbnail_width
        thumbnail_height
      }
      image_list {
        id
        type
        url
        height
        width
        thumbnail_url
        thumbnail_width
        thumbnail_height
      }
      video {
        id
        url
      }
      video_list {
        id
        url
      }
    }
    routing {
      fast_charging_support
    }
  }
}

</code-block>

<code-block lang="json" type="response">
{
  "data": {
    "car": {
      "id": "5d161be5c9eef46132d9d20a",
      "naming": {
        "make": "Tesla",
        "model": "Model S",
        "version": "75D",
        "edition": null,
        "chargetrip_version": "75D (2016-2019)"
      },
      "connectors": [
        {
          "standard": "IEC_62196_T2",
          "power": 16.5,
          "time": 315,
          "speed": 72
        },
        {
          "standard": "TESLA_S",
          "power": 120,
          "time": 40,
          "speed": 390
        }
      ],
      "adapters": [
        {
          "standard": "IEC_62196_T2_COMBO",
          "power": 80,
          "time": 45,
          "speed": 350
        },
        {
          "standard": "CHADEMO",
          "power": 80,
          "time": 45,
          "speed": 350
        },
        {
          "standard": "IEC_62196_T2",
          "power": 16.5,
          "time": 315,
          "speed": 55
        }
      ],
      "battery": {
        "usable_kwh": 72.5,
        "full_kwh": 75
      },
      "body": {
        "width": 2037,
        "height": 1445,
        "weight": 2183,
        "seats": 5
      },
      "availability": {
        "status": 0
      },
      "performance": {
        "acceleration": 4.4,
        "top_speed": 225
      },
      "range": {
        "real": 380,
        "real_is_estimated": false,
        "worst": {
          "highway": 275,
          "city": 370,
          "combined": 320
        },
        "best": {
          "highway": 350,
          "city": 540,
          "combined": 435
        },
        "chargetrip_range": {
          "worst": 334,
          "best": 387
        }
      },
      "media": {
        "evdb_details_url": null,
        "image": null,
        "brand": null,
        "image_list": null,
        "video": null,
        "video_list": null
      },
      "routing": {
        "fast_charging_support": true
      }
    }
  }
}
</code-block>

</playground>
