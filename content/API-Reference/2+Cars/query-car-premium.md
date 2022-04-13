---
title: Query premium car details
description: Query data of a single car
order: 4
frequently:
- id
- naming
- connectors
- fast_charge
- routing
---

# Query premium car details <premium />
Car premium data allows you to get even more data about your car, the tire pressure, prices, data about your drivetrain, and more. Please <cta action='openChat'>contact us</cta> to get access to premium data. 

## Query
To get premium data of a car you need to provide a `carId`. This `id` can be obtained by using the `carList` query.

<schema name="carPremium" :frequent="frequently"></schema>

<response error="carPremium"></response>

<playground>
<code-block lang="graphql" type="query">	
query car {
  carPremium(id: "carPremium-test") {
    id
    succesor_id
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
    charge {
      plug {
        value
        is_estimated
        location
      }
      second_plug {
        location
        is_optional
      }
      standard {
        power
        phases
        phase_amperage
        charge_time
        charge_speed
        is_estimated
        table {
          evse_phase_voltage
          evse_phase_amperage
          evse_phases
          charge_phase_voltage
          charge_phase_amperage
          charge_phases
          charge_power
          charge_time
          charge_speed
        }
      }
      alternative {
        power
        phases
        phase_amperage
        charge_time
        charge_speed
        table {
          evse_phase_voltage
          evse_phase_amperage
          evse_phases
          charge_phase_voltage
          charge_phase_amperage
          charge_phases
          charge_power
          charge_time
          charge_speed
        }
      }
      option {
        power
        phases
        phase_amperage
        charge_time
        charge_speed
        table {
          evse_phase_voltage
          evse_phase_amperage
          evse_phases
          charge_phase_voltage
          charge_phase_amperage
          charge_phases
          charge_power
          charge_time
          charge_speed
        }
      }
    }
    fast_charge {
      plug {
        value
        is_estimated
        location
      }
      power {
        max
        average
      }
      charge_time
      charge_speed
      is_optional
      is_estimated
      table {
        format
        power {
          max
          average
        }
        charge_time
        charge_speed
        is_limited
        average_is_limited
      }
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
      estimated_fields
      thermal_management_system
      warranty_period
      warranty_mileage
    }
    body {
      length
      full_width
      size_is_estimated
      wheelbase_is_estimated
      seats
      weight
      weight_is_estimated
      weight_max_payload
      max_gross_vehicle_weight
      boot_front_capacity
      tow_hitch_compatible
      height
      width
      wheelbase
      boot_capacity
      boot_capacity_max
      tow_weight_unbraked
      tow_weight_braked
      tow_weight_is_estimated
      tow_weight_vertical_load
      roof_load_max
      body_type
      segment
      has_roofrails
      turning_circle
      vehicle_platform
      vehicle_platform_is_dedicated
    }
    price {
      de {
        value
        currency
        is_estimated
      }
      nl {
        value
        currency
        is_estimated
      }
      uk {
        value
        currency
        is_estimated
        grant_applied
      }
    }
    drivetrain {
      type
      fuel
      propulsion
      propulsion_is_estimated
      power
      power_is_estimated
      power_hp
      torque
      torque_is_estimated
    }
    efficiency {
      wltp {
        value
        fuel_equivalent
        vehicle
        vehicle_fuel_equivalent
        co2
      }
      wltp_teh {
        value
        fuel_equivalent
        vehicle
        vehicle_fuel_equivalent
        co2
      }
      nedc {
        value
        fuel_equivalent
        vehicle
        vehicle_fuel_equivalent
        co2
      }
      real {
        value
        fuel_equivalent
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
      }
    }
    safety {
      isofix_seats
      euro_ncap {
        rating
        year
        adult
        child
        vru
        sa
      }
    }
    range {
      real
      real_is_estimated
      nedc
      nedc_is_estimated
      wltp
      wltp_teh
      wltp_is_estimated
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
      image_list {
        id
        type
        url
        width
        height
        thumbnail_url
        thumbnail_height
        thumbnail_width
      }
      image {
        id
        type
        url
        height
        width
        thumbnail_url
        thumbnail_height
        thumbnail_width
      }
      brand {
        id
        type
        height
        width
        url
        thumbnail_url
        thumbnail_height
        thumbnail_width
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
      drag_coefficient
      tire_pressure
      consumption {
        aux {
          worst
          best
        }
        bms {
          worst
          best
        }
        idle {
          worst
          best
        }
      }
      petrol_consumption
    }
    performance {
      acceleration
      acceleration_is_estimated
      top_speed
      top_speed_is_estimated
    }
    availability {
      status
      date_from
      date_to
      date_from_is_estimated
    }
  }
}
</code-block>

<code-block lang="json" type="response">
{
  "data": {
    "carPremium": {
      "id": "carPremium-test",
      "succesor_id": 1028,
      "naming": {
        "make": "carPremium-test",
        "model": "carPremium-test",
        "version": "carPremium-test",
        "edition": "carPremium-test",
        "chargetrip_version": "carPremium-test"
      },
      "connectors": [
        {
          "standard": "IEC_62196_T2",
          "power": 22,
          "time": 285,
          "speed": 81
        },
        {
          "standard": "IEC_62196_T2_COMBO",
          "power": 130,
          "time": 35,
          "speed": 460
        }
      ],
      "charge": {
        "plug": {
          "value": "IEC_62196_T2",
          "is_estimated": false,
          "location": left
        },
        "second_plug": {
          "location": null,
          "is_optional": null
        },
        "standard": {
          "power": 22,
          "phases": 3,
          "phase_amperage": 32,
          "charge_time": 285,
          "charge_speed": 81,
          "is_estimated": false,
          "table": [
            {
              "evse_phase_voltage": 230,
              "evse_phase_amperage": 10,
              "evse_phases": 1,
              "charge_phase_voltage": 230,
              "charge_phase_amperage": 10,
              "charge_phases": 1,
              "charge_power": 2.3,
              "charge_time": 2670,
              "charge_speed": 9
            },
            {
              "evse_phase_voltage": 230,
              "evse_phase_amperage": 16,
              "evse_phases": 1,
              "charge_phase_voltage": 230,
              "charge_phase_amperage": 16,
              "charge_phases": 1,
              "charge_power": 3.7,
              "charge_time": 1665,
              "charge_speed": 14
            },
            {
              "evse_phase_voltage": 230,
              "evse_phase_amperage": 32,
              "evse_phases": 1,
              "charge_phase_voltage": 230,
              "charge_phase_amperage": 32,
              "charge_phases": 1,
              "charge_power": 7.4,
              "charge_time": 840,
              "charge_speed": 28
            },
            {
              "evse_phase_voltage": 230,
              "evse_phase_amperage": 16,
              "evse_phases": 3,
              "charge_phase_voltage": 230,
              "charge_phase_amperage": 16,
              "charge_phases": 3,
              "charge_power": 11,
              "charge_time": 570,
              "charge_speed": 41
            },
            {
              "evse_phase_voltage": 230,
              "evse_phase_amperage": 32,
              "evse_phases": 3,
              "charge_phase_voltage": 230,
              "charge_phase_amperage": 32,
              "charge_phases": 3,
              "charge_power": 22,
              "charge_time": 285,
              "charge_speed": 81
            }
          ]
        },
        "alternative": null,
        "option": null
      },
      "fast_charge": {
        "plug": {
          "value": "IEC_62196_T2_COMBO",
          "is_estimated": false,
          "location": left
        },
        "power": {
          "max": 130,
          "average": 110
        },
        "charge_time": 35,
        "charge_speed": 460,
        "is_optional": false,
        "is_estimated": true,
        "table": [
          {
            "format": "CCS-50-DC",
            "power": {
              "max": 50,
              "average": 45
            },
            "charge_time": 85,
            "charge_speed": 190,
            "is_limited": false,
            "average_is_limited": true
          },
          {
            "format": "CCS-100-DC",
            "power": {
              "max": 100,
              "average": 85
            },
            "charge_time": 45,
            "charge_speed": 350,
            "is_limited": false,
            "average_is_limited": true
          },
          {
            "format": "CCS-150-DC",
            "power": {
              "max": 130,
              "average": 110
            },
            "charge_time": 35,
            "charge_speed": 460,
            "is_limited": true,
            "average_is_limited": true
          }
        ]
      },
      "adapters": [],
      "battery": {
        "usable_kwh": 87,
        "full_kwh": 90,
        "estimated_fields": "N",
        "thermal_management_system": "Active Liquid",
        "warranty_period": null,
        "warranty_mileage": null
      },
      "body": {
        "length": 4595,
        "full_width": null,
        "size_is_estimated": false,
        "wheelbase_is_estimated": false,
        "seats": 5,
        "weight": 2300,
        "weight_is_estimated": true,
        "weight_max_payload": null,
        "max_gross_vehicle_weight": null,
        "boot_front_capacity": null,
        "tow_hitch_compatible": true,
        "height": 1660,
        "width": 1850,
        "wheelbase": 2775,
        "boot_capacity": 415,
        "boot_capacity_max": null,
        "tow_weight_unbraked": null,
        "tow_weight_braked": 1500,
        "tow_weight_is_estimated": false,
        "tow_weight_vertical_load": null,
        "roof_load_max": null,
        "body_type": "SUV",
        "segment": "JC - Medium",
        "has_roofrails": null,
        "turning_circle": null,
        "vehicle_platform": "carPremium-test",
        "vehicle_platform_is_dedicated": true
      },
      "price": {
        "de": {
          "value": 65000,
          "currency": "Euro",
          "is_estimated": true
        },
        "nl": {
          "value": 65000,
          "currency": "Euro",
          "is_estimated": true
        },
        "uk": {
          "value": 57500,
          "currency": "British Pound",
          "is_estimated": true,
          "grant_applied": 0
        }
      },
      "drivetrain": {
        "type": null,
        "fuel": null,
        "propulsion": null,
        "propulsion_is_estimated": null,
        "power": 290,
        "power_is_estimated": null,
        "power_hp": null,
        "torque": 600,
        "torque_is_estimated": null
      },
      "efficiency": {
        "wltp": {
          "value": null,
          "fuel_equivalent": null,
          "vehicle": 21.8,
          "vehicle_fuel_equivalent": 2.4,
          "co2": null
        },
        "wltp_teh": {
          "value": null,
          "fuel_equivalent": null,
          "vehicle": null,
          "vehicle_fuel_equivalent": null,
          "co2": null
        },
        "nedc": {
          "value": null,
          "fuel_equivalent": null,
          "vehicle": null,
          "vehicle_fuel_equivalent": null,
          "co2": null
        },
        "real": {
          "value": 22.6,
          "fuel_equivalent": 2.5,
          "worst": {
            "highway": 31.6,
            "city": 22.3,
            "combined": 26.4
          },
          "best": {
            "highway": 25.2,
            "city": 15.7,
            "combined": 20.2
          }
        }
      },
      "safety": {
        "isofix_seats": null,
        "euro_ncap": {
          "rating": null,
          "year": null,
          "adult": null,
          "child": null,
          "vru": null,
          "sa": null
        }
      },
      "range": {
        "real": 385,
        "real_is_estimated": false,
        "nedc": null,
        "nedc_is_estimated": false,
        "wltp": 400,
        "wltp_teh": null,
        "wltp_is_estimated": true,
        "worst": {
          "highway": 275,
          "city": 390,
          "combined": 330
        },
        "best": {
          "highway": 345,
          "city": 555,
          "combined": 430
        },
        "chargetrip_range": {
          "worst": 407,
          "best": 471
        }
      },
      "media": {
        "evdb_details_url": "carPremium-test",
        "image_list": null,
        "video": null,
        "video_list": []
      },
      "routing": {
        "fast_charging_support": true,
        "drag_coefficient": 0.25,
        "tire_pressure": 2.9,
        "consumption": {
          "aux": {
            "worst": 1,
            "best": 0.5
          },
          "bms": {
            "worst": 1,
            "best": 0.3
          },
          "idle": {
            "worst": 0.3,
            "best": 0.1
          }
        },
        "petrol_consumption": 8
      },
      "performance": {
        "acceleration": 5.1,
        "acceleration_is_estimated": false,
        "top_speed": 200,
        "top_speed_is_estimated": false
      },
      "availability": {
        "status": 3,
        "date_from": "10-2021",
        "date_to": null,
        "date_from_is_estimated": true
      }
    }
  }
}
</code-block>
</playground>
