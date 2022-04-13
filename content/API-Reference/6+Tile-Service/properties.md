---
title: Properties
description: The tile service property list of possible configurations that you can apply
order: 2

keys:
- ID
- lat
- lng
- count
- expansionZoom
- speed
- status
- preferred_operator
- preferredOperator

types:
- string
- number
- number
- number
- number
- enum
- enum
- boolean
- boolean

descriptions:
- This is the ID of the station. If the feature is a cluster, this parameter is the ID of the first station in that cluster.
- The latitude coordinate of the feature for both clusters and stations.
- The longitude coordinate of the feature for both clusters and stations.
- The number of stations within a cluster. This is the discriminator between clusters and stations. The count will always be 1 for a station and more than 1 for clusters.
- The zoom level where the cluster is split into multiple clusters or stations.
- This indicates the power of a station. It can vary between `slow`, `fast` or `turbo`. If the feature is a cluster, it will indicate the power of the first station in that cluster. All stations below 43 kWh are considered slow, between 43 kWh and 150 kWh - fast, and above 150 kWh - turbo.
- This indicates the availability status of a station. It can vary between `free`, `busy`, `unknown` or `error`. If the feature is a cluster, it will indicate the availability status of the first station in that cluster. Free means that at least one connector is available to charge a car; busy means that there are no free connectors; error means that the station is inoperational and cannot be used; unknown means that we don't know the exact status of all connectors.
- Deprecated in favor of `preferredOperator`.
- This flag indicates if the operator of a particular station is marked as a preferred operator. Please <cta action='openChat'>contact us</cta> to mark certain operators as preferred operators.
---

# Properties
Each tile provided by the tile service contains a layer, called `stations`. This layer contains a list of features, for either clusters or stations. All features have the following properties:

<property-table :keys="keys" :types="types" :descriptions="descriptions"></property-table>

<note display="block">

You must use the `count` property to differentiate between stations and clusters. The `count` will always be 1 for a station and more than 1 for clusters.

</note>
