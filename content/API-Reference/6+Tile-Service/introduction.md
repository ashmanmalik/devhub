---
title: Introduction
description: Speed up your station rendering with our custom tile service
order: 1
---

# Chargetrip Tile Service
The Chargetrip tile service is a vector tile server that offers a pre-rendered fully clustered charge station solution including filtering that supercharges your station map. Traditionally, you would load stations on the front-end within a visible bounding box and apply filters and clusters on the client side. This results in long waiting times when interacting with the map. Our tile service moves complex operations to the back-end. So filtering and clustering become nearly instantaneous, and the map becomes much more responsive.

## Configuration
Configuring your tile service can be done through two easy steps as shown below.

### Using the tile service
The tile service can be used with your own station database or the premium eco-movement database. Our tile service can be accessed at:

<code-block lang="html" prefix="Tile Service" title="Endpoint">
    https://api.chargetrip.io/station/{z}/{x}/{y}/tile.mvt
</code-block>

### Authorization
You need to set your `x-client-id` as a `header` to authorize your request. In a similar fashion as described [here](/Getting-Started/API-Basics/authorization).

<code-block lang="json" prefix="Tile Service" title="Authorization">"x-client-id": "5e8c22366f9c5f23ab0eff39"</code-block>

<examples title="Clone an example">
    <!-- Tiles -->
    <example 
        href="https://examples.chargetrip.com/?id=tile-server" 
        img="tile-service-example.png" 
        title="Vector tile service" 
        description="Show stations on a map using our Vector Tile Server" 
        category="Tiles">
    </example>
</examples>
