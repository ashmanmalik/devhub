---
title: Deprecations
description: An overview of all fields that have been deprecated on the Chargetrip API.
---

# Deprecations

The EV landscape is changing rapidly and our ever-evolving API is reflecting that. This means we need to deprecate fields when we find better solutions or structures. To migrate between different versions we provide a clear overview of our deprecated properties, replacement properties, deprecation dates, planned removal dates and deprecation reasons.

<note display="block">

If you do not migrate before the removal date unexpected behaviour, errors or missing data may occur. If you have any questions, please <cta action='openChat'>contact us</cta>.

</note>

## Fields & arguments

Below you will find a list of everything that is deprecated and will be removed. They are categorized based on type.

### Routes

<deprecated-item 
    from-title="user" 
    description="May, 2021: user property is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="route.elevationPlot" 
    to-title="route.pathPlot" 
    description="June, 2021: deprecated in favor of `pathPlot`" 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="newRoute.routeRequest.operatorIds" 
    to-title="newRoute.routeRequest.operators" 
    description="Dec, 2021: deprecated in favor of `operators`" 
    supported-until="June, 2022">
</deprecated-item>

<deprecated-item 
    from-title="newRoute.routeRequest.operatorRequired" 
    to-title="newRoute.routeRequest.operators" 
    description="Dec, 2021: deprecated in favor of `operators`" 
    supported-until="June, 2022">
</deprecated-item>

<deprecated-item 
    from-title="newRoute.routeRequest.operatorPrefer" 
    to-title="newRoute.routeRequest.operators" 
    description="Dec, 2021: deprecated in favor of `operators`" 
    supported-until="June, 2022">
</deprecated-item>

<deprecated-item 
    from-title="amenityRanking" 
    description="Feb, 2022: deprecated." 
    supported-until="July, 2022">
</deprecated-item>

### Cars

<deprecated-item 
    from-title="carList.size (optional)" 
    to-title="carList.size (required)"
    description="January, 2021: carList query no longer supports fetching the full list in one go and requires pagination." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="externalId" 
    description="January, 2021: externalId is no longer being used internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="make" 
    to-title="naming.make"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="model" 
    to-title="naming.model"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="edition" 
    to-title="naming.version"
    description="January, 2021: New clustering applied to improve property scalability and alignment with EV Database values." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="version" 
    to-title="naming.edition"
    description="January, 2021: New clustering applied to improve property scalability and alignment with EV Database values." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="chargetripEdition" 
    to-title="naming.chargetrip_version"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="chargetripRange" 
    to-title="naming.chargetrip_range"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="fastChargingSupport" 
    to-title="routing.fast_charging_support"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="mode" 
    to-title="availability.status"
    description="January, 2021: New clustering applied to improve property scalability and alignment with EV Database values." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="seats" 
    to-title="body.seats"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="weight" 
    to-title="body.weight"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="height" 
    to-title="body.height"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="width" 
    to-title="body.width"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="batteryUsableKwh" 
    to-title="battery.usable_kwh"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="batteryFullKwh" 
    to-title="battery.full_kwh"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="acceleration" 
    to-title="performance.acceleration"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="topSpeed" 
    to-title="performance.top_speed"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="topSpeed" 
    to-title="performance.top_speed"
    description="January, 2021: New clustering applied to improve property scalability." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="batteryEfficiency" 
    to-title="battery.efficiency"
    description="January, 2021: Moved towards our new carPremium package and carPremium query." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="power" 
    to-title="drivetrain.power"
    description="January, 2021: Moved towards our new carPremium package and carPremium query." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="torque" 
    to-title="drivetrain.torque"
    description="January, 2021: Moved towards our new carPremium package and carPremium query." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="consumption" 
    to-title="routing.consumption"
    description="January, 2021: Moved towards our new carPremium package and carPremium query." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="petrolConsumption" 
    to-title="routing.petrol_consumption"
    description="January, 2021: Moved towards our new carPremium package and carPremium query." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="chargingOffset" 
    description="January, 2021: Field removed. chargingOffset is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="auxConsumption" 
    description="January, 2021: Field removed. auxConsumption is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="bmsConsumption" 
    description="January, 2021: Field removed. bmsConsumption is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="dragCoefficient" 
    description="January, 2021: Field removed. dragCoefficient is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="tirePressure" 
    description="January, 2021: Field removed. tirePressure is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="motorEfficiency" 
    description="January, 2021: Field removed. motorEfficiency is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="drivelineEfficiency" 
    description="January, 2021: Field removed. drivelineEfficiency is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="regenEfficiency" 
    description="January, 2021: Field removed. regenEfficiency is handled internally." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="carList.query" 
    to-title="carList.filter"
    description="January, 2021: deprecated in favor of `filter`." 
    supported-until="Jan, 2022">
</deprecated-item>

<deprecated-item 
    from-title="route.ev.passengers" 
    to-title="route.ev.occupants"
    description="Jan, 2022: deprecated in favor of `occupants`." 
    supported-until="June, 2022">
</deprecated-item>

### Reviews

<deprecated-item 
    from-title="user.id" 
    description="May, 2021: user.id is no longer available." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="user.firstName" 
    description="May, 2021: user.firstName is no longer available." 
    supported-until="Nov, 2021">
</deprecated-item>

<deprecated-item 
    from-title="user.lastName" 
    description="May, 2021: user.lastName is no longer available." 
    supported-until="Nov, 2021">
</deprecated-item>

### Operator subscriptions

<deprecated-item 
    from-title="operator.operatorAdded" 
    description="June, 2021: operatorAdded has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="operator.operatorUpdated" 
    description="June, 2021: operatorUpdated has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="operator.operatorDeleted" 
    description="June, 2021: operatorDeleted has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="operator.operatorUpdatedById(id: ID!)" 
    description="June, 2021: operatorUpdatedById(id: ID!) has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="operator.operatorDeletedById(id: ID!)" 
    description="June, 2021: operatorDeletedById(id: ID!) has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

### Station subscriptions

<deprecated-item 
    from-title="stations.stationAdded" 
    description="June, 2021: stationAdded has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="stations.stationUpdated" 
    description="June, 2021: stationUpdated has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="stations.stationDeleted" 
    description="June, 2021: stationDeleted has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="stations.stationUpdatedById(id: ID!)" 
    description="June, 2021: stationUpdatedById has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="stations.stationDeletedById(id: ID!)" 
    description="June, 2021: stationDeletedById has been removed, no value will be sent." 
    supported-until="Dec, 2021">
</deprecated-item>

<deprecated-item 
    from-title="station.predicted_availability" 
    to-title="station.predicted_occupancy"
    description="August, 2021: deprecated in favor of `predicted_occupancy`" 
    supported-until="Jan, 2022">
</deprecated-item>

<right-aside>

<latest-updates></latest-updates>

</right-aside>
