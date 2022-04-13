---
title: Home
description: A clear overview of our setup guides API reference and open source projects.
icon: home

package: 
- Typescript Typings
- Clusterbuster
  
descriptions: 
- Make integrating with our API easier with our typescript types
- Easily cluster data to improve render speeds

columns:
- Package
- Description

row1:
- Typescript Typpings
- Clusterbuster

row2:
- Make integrating with our API easier with our typescript types
- Easily cluster data to improve render speeds
---

# Documentation

Get going with the **Chargetrip** API. Clone one of our examples as a boilerplate, build along with our guides or start by browsing through our API reference.

Need some information about EV routing, EVs or graphQL first? No worries, we have you covered with our blog over [here](https://medium.com/chargetrip).

<article-teaser-section title="Latest technology article">

<article-teaser src="/globe.svg" href="https://medium.com/chargetrip/chargetrip-tile-service-with-react-native-and-mapbox-228dae36a574">

### Chargetrip Tile Service with React Native and Mapbox

</article-teaser>

</article-teaser-section>

## Open source
<c-table>
    <c-row>
        <c-cell font-weight="bold" tag="th">Package</c-cell>
        <c-cell font-weight="bold" tag="th">Description</c-cell>
    </c-row>
    <c-row url="https://github.com/chargetrip/types">
        <c-cell font-weight="semibold">Typescript Typings</c-cell>
        <c-cell>Make integrating with our API easier with our typescript types</c-cell>
    </c-row>
    <c-row url="https://github.com/chargetrip/clusterbuster">
        <c-cell font-weight="semibold">Clusterbuster</c-cell>
        <c-cell>Easily cluster data to improve render speeds</c-cell>
    </c-row>
</c-table>

<examples title="Clone an example">
    <!-- Cars -->
    <example 
        href="https://examples.chargetrip.com/?id=car-list" 
        img="cars-example.png" 
        title="Query car list" 
        description="Quickly fetch a list of cars." 
        category="Cars">
    </example>
    <example 
        href="https://examples.chargetrip.com/?id=car-details" 
        img="cars-detail-example.png" 
        title="Query car details" 
        description="Query all the details of a specific car." 
        category="Cars">
    </example>
    <!-- Stations -->
    <example 
        href="https://examples.chargetrip.com/?id=stations-around" 
        img="stations-example.png" 
        title="Query stations" 
        description="Query the 20 closest stations and show them on a map." 
        category="Stations">
    </example>
    <example 
        href="https://examples.chargetrip.com/?id=station-details" 
        img="stations-info-example.png" 
        title="Query specific station" 
        description="Query and parse a complete set of station data" 
        category="Stations">
    </example>
    <example 
        href="https://examples.chargetrip.com/?id=stations-along-route" 
        img="alternative-stations-example.png" 
        title="Stations along the route" 
        description="Query and display alternative stations along a route" 
        category="Stations">
    </example>
    <!-- Routes -->
    <example 
        href="https://examples.chargetrip.com/?id=route" 
        img="route-example.png" 
        title="Build a route" 
        description="Query and mutate route information and plot it on a map" 
        category="Routes">
    </example>
    <example 
        href="https://examples.chargetrip.com/?id=elevation-plot" 
        img="elevation-example.png" 
        title="Elevation Plot" 
        description="Grab the elevation profile from a route and plot it on a graph" 
        category="Routes">
    </example>
    <!-- <example 
        href="https://examples.chargetrip.com/?id=alternative-routes" 
        img="alternative-routes-example.png" 
        title="Alternative routes" 
        description="Query and render alternative routes" 
        category="Routes">
    </example> -->
    <example 
        href="https://examples.chargetrip.com/?id=state-of-charge" 
        img="state-of-charge-example.png" 
        title="State of Charge" 
        description="Mutate the state of charge and reroute the journey" 
        category="Routes">
    </example>
    <!-- Tiles -->
    <example 
        href="https://examples.chargetrip.com/?id=tile-server" 
        img="tile-service-example.png" 
        title="Vector tile service" 
        description="Show stations on a map using our Vector Tile Server" 
        category="Tiles">
    </example>
</examples>
