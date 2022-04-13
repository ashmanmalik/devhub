---
title: Release notes
description: An overview of updates and improvements on the Chargetrip API.
releasePage: true
---

# Release notes

With every update we write release notes. This way you know what has been fixed or what has been added.

<release-note title="4.20.2 - Stability" date="23-03-2022">

### ⚡️ New features
- Improved stability by fixing various small bugs

### 🐞 Bug fixes
- Fixed a bug on station stats for new projects; now station stats are directly available after the creation of a new project

</release-note>

<release-note title="4.20.1 - App ID" date="17-03-2022">

### ⚡️ New features
- Added the app id in the response
- Added an error message for an incorrect app id

### 🐞 Bug fixes
- Fixed a bug on station stats for new projects; now station stats are directly available after the creation of a new project

</release-note>

<release-note title="4.19.2 - Improved description" date="10-03-2022">

### ✨ Improvements
- Improved the scheme descriptions for `fast_charging_support`
- Improved stability by fixing various small bugs

### 🐞 Bug fixes
- Fixed a bug in routing with OCPI-status BLOCKED. Status BLOCKED is no longer taken into account.

</release-note>

<release-note title="4.19.0 - External ids on via points" date="02-03-2022">

### ⚡️ New features
- Added support for external ids on via points

### ✨ Improvements
- Improved stability by fixing various small bugs

</release-note>

<release-note title="4.18.0 - Road characteristics" date="24-02-2022">

### ⚡️ New features
- Added route steps to easily identify road characteristics like toll and ferries.
- Added support for OCPI 2.2.1

### ✨ Improvements
- Improved performance when creating a new client or updating cars.

</release-note>

<release-note title="4.17.1 - Manually flag road closures" date="21-02-2022">

### ⚡️ New features
- Added the ability to manually flag road closures. We can manually close roads permanently or for a date range in regions where road closure data is seasonal or not available through traffic and incident API's. 

### 🐞 Bug fixes
- Fixed a bug in routing that caused the engine to consider the entry and exit ramp over the highway itself.

</release-note>

<release-note title="4.17.0 - Eco-movement pricing module" date="10-02-2022">

### ⚡️ New features
- Added support for the Eco-movement pricing module. All our customers using the pre integrated Eco-movement database, can use pricing instead of tariff on EVSEs. We recommend customers to switch to the new pricing query. See [pricing](API-Reference/Stations/query-station-details#query) for more information.
- Added `operatorName` and `operatorRanking` on routeLeg

### 🐞 Bug fixes
- Fixed a bug in `stationStats` on the stations count grouped by amenities.  

</release-note>

<release-note title="4.16.0 - Added mapping for Mapbox navigation SDK" date="03-02-2022">

<note display="block">
This release contains experimental features. They are not supported and may change, break, or disappear at any time.
</note>

### ⚡️ New features
- Added the new query `navigationMapping` that converts a route to navigation instructions for a specified mapping provider. Currently Mapbox is supported, other mapping providers will follow.
- Added an all new dark and light mode to the dashboard.
- Added date range inputfields to the dashboard calendar dropdown.
- Added the ability to remove your account from the dashboard.
- Added the ability to remove your own projects from the dashboard.

### ✨ Improvements
- Improved stability by fixing various small bugs

</release-note>

<release-note title="4.15.0 - Added operator ranking to best matching alternative route" date="26-01-2022">

### ⚡️ New features
- Added operator ranking to `bestMatching` type. The best matching route is now a combination of operator and amenity preferences.

</release-note>

<release-note title="4.14.0 - WebSocket Protocol" date="19-01-2022">

### ⚡️ New features
- Added support for the `graphql-transport-ws` protocol on our WebSocket. [Learn more](/Getting-Started/API-Basics/subscriptions).

### 📦 Deprecations 
- Deprecated passengers in favor of occupants. See [deprecations](/deprecations) for more information.

</release-note>

<release-note title="4.13.0 - State management" date="13-01-2022">

### ✨ Improvements 
- Improved state management on the dashboard to remember filter and search states while navigating through pages.
- Improved the performance of fetching project details.

### 🐞 Bug fixes
- Fixed a bug on the dashboard where you were not able to enter certain domains as HTTP referrer.
- Fixed a bug on the dashboard where an empty graph would sometimes scale on Firefox.

</release-note>

<release-note title="4.12.0 - Stability" date="11-01-2022">

### ✨ Improvements 
- Improved stability by fixing various small bugs.

</release-note>

<release-note title="4.11.0 - Station import improvements" date="22-12-2021">

### ✨ Improvements
- Improved the station import by comparing old and new station data before adding or removing stations from the database.

### 🐞 Bug fixes
- Fixed a bug on alternative routes where an error message was thrown when tariffs were requested.

</release-note>

<release-note title="4.10.0 - Configurable prioritized operators in the dashboard" date="20-12-2021">

### ⚡️ New features
- Added the ability in the dashboard to prioritize operators on a project / `x-client-id`.

### 🐞 Bug fixes
- Fixed a bug where the `safeRiskMargin` caused routes to fail when the SoC at origin was below the `safeRiskMargin`.

</release-note>

<release-note title="4.9.0 - Advanced project settings" date="09-12-2021">

### ⚡️ New features
- Added the ability to automatically add cars to a project / `x-client-id`. Note: when enabled only new cars will be added. Cars that are currently available and not attached to a client will not be added.
- Added the ability to set charge mode on a project / `x-client-id`
- Added the ability to set charge stop duration on a project / `x-client-id`

</release-note>

<release-note title="4.8.0 - Merge into master" date="07-12-2021">

### ⏭ Onto the next one
- In this release we honor Jay-Z. No new features, improvements or fixes. We are <a href="https://youtu.be/VTYXVwrWz4Y?t=11">on to the next one</a>.

</release-note>

<release-note title="4.7.0 - Security" date="02-12-2021">

### ⚡️ New features
- Added the ability to restrict the use of client and application ids based on different security restrictions per platform. Read more [here](/Getting-Started/API-Basics/security).
- Added the ability to configure `x-app-id` security restrictions on the dashboard
- Added the ability to customize the charge duration and charge mode on the `x-client-id` through the dashboard

</release-note>

<release-note title="4.6.0 - Under the hood" date="18-11-2021">

### 🛠 Refactoring
- Some refactoring under the hood that needed to be <a href="https://www.youtube.com/watch?v=Mu0cE9RgK5M">launched</a>.

</release-note>

<release-note title="4.5.0 - Range in percentages" date="17-11-2021">

### ⚡️ New features
- Added the ability to query range in percentages on getRoute and use percentages as an input value. Please be aware when adding percentages for the state of charge and the final state of charge they are a percentage of the `usableCarBattery` or the capacity when including this object in the mutation.

### ✨ Improvements
- Improved search and filtering on the `operatorList` query.

### 🐞 Bug fixes
- Fixed an issue where `rangeEnd` and `rangeEndKwh` were 0 when plotting a route using a car that does not  support fast charging.

</release-note>

<release-note title="4.4.0 - Error handling" date="11-11-2021">

### ✨ Improvements
- Improved error handling on the login section of the dashboard.

</release-note>

<release-note title="4.3.1 - Bug fix review module" date="01-11-2021">

### 🐞 Bug fixes
- Fixed a bug where `station.review.count` and `station.review.rating` were not incremented when a review was added.

</release-note>

<release-note title="4.3.0 - Stability Improvements" date="28-10-2021">

### ✨ Improvements
- Improved stability through several software updates.

</release-note>

<release-note title="4.2.0 - Test merge into master" date="21-10-2021">

### 👉 My finger ... is on the button
Like The Chemical Brothers once said; <a href="https://youtu.be/Xu3FTEmN-eg?t=122">the time has come to push the button</a>.

</release-note>

<release-note title="4.1.0 - Route mutation validation" date="21-10-2021">

### ✨ Improvements
- Improved error coverage for the route mutation validation. All errors are currently collected and used to improve the error messages. Routes will be returned for now, even if there are mistakes in the route mutation. We will notify you before enforcing the new errors.

### 🐞 Bug fixes
- Fixed a bug where `safeRiskMargin` was applied twice in winter scenarios. 

</release-note>

<release-note title="4.0.0 - Stability improvements" date="13-10-2021">

### ✨ Improvements
- Improved stability through several software updates. 

</release-note>

<release-note title="3.33.0 - Bug fixes" date="30-09-2021">

### 🐞 Bug fixes
- Fixed a bug where an incorrect start range when using `OPTIMIZE_TRAVEL_TIME` was displayed.

</release-note>

<release-note title="3.32.0 - Improved tile service expansion zoom" date="22-09-2021">

### ✨ Improvements
- Improved tile service cluster break-up by adjusting the expansion zoom calculation.  
- Improved filtering of stations by excluding onboard chargers below 20 kW for all models with onboard capabilities higher than 20 kW. 

### 🐞 Bug fixes
- Fixed a bug where the `routePath` query changed the route path location search from a strict find to nearest point search. 
- Fixed a bug where list queries accepted negative integers.

</release-note>

<release-note title="3.31.0 - Tiered preferred operators and excluded operators" date="15-09-2021">

### ⚡️ New features

- Added the input argument `operators` to the `newRoute` mutation! We are happy to announce the release of a tiered preferred operator system and the ability to exclude operators from routing! From now on, in your route request, you will be able to add what operators you want us to prefer in order of ranking, and let us know if there are operators you wish to exclude from the route calculation! The same functionality is possible to include in the config of your client ID, which will soon be possible to adjust in the dashboard; get in touch with us directly until then.

</release-note>

<release-note title="3.30.0 - Improved Charge Time estimates" date="1-09-2021">

### ✨ Improvements

- Improved charge time estimates by introducing a generalized charge curve model that accounts for the On Board Charging (OBC) power threshold and drop-off characteristic at higher state of charges. The generalized charge curve model is used for all cars for which we have sufficient data. We will increase our coverage over time when more data becomes available.

</release-note>

<release-note title="3.29.0 - E2E Maintenance" date="24-08-2021">

### ✨ Improvements

- Improved release times by lowering the memory usage on our end to end tests.
- Improved performance for several sections of the Chargetrip dashboard.

### 🐞 Bug fixes

- Fixed an issue with the optimal route where in some cases a station was selected far from the optimal route.

</release-note>

<release-note title="3.28.0 - Introduction of chargeMode" date="18-08-2021">

### ⚡️ New features

- Added `chargeMode`. This field can be set to `OPTIMIZE_TRAVEL_TIME` and `ALWAYS_TO_MAX_CHARGE`.

---

`ALWAYS_TO_MAX_CHARGE` will give you a route response where we recommend charging to the maximum capacity at every charging stop. The default maximum charging capacity is 80%. For all our existing customers, this is the default setting.

---

`OPTIMIZE_TRAVEL_TIME` optimizes the charging time at each station, in order to decrease the total travel time. You will only charge up until the state of charge you need in order to reach the next stop.

</release-note>

<release-note title="3.27.0 - CI/CD Upgrade" date="17-08-2021">

### ✨ Improvements

- Improved CI/CD for faster releases.

</release-note>

<release-note title="3.26.0 - Turn-by-turn instructions" date="10-08-2021">

<note display="block">
This release contains experimental features. They are not supported and may change, break, or disappear at any time.
</note>

### ⚡️ New features

- Added 'raw' turn-by-turn instructions that can be used in combination with navigation SDK's to offer turn-by-turn navigation. To receive the instructions, add the `instructions` argument to the `newRoute` mutation. Don’t forget to also request the instructions in the `getRoute` request. **Important**: this feature is still in active development and it should only be used for test purposes until further notice.

### ✨ Improvements

- Improved performance for several sections of the Chargetrip dashboard.

</release-note>

<release-note title="3.25.0 - Client configuration options" date="04-08-2021">

### ⚡️ New features

- Added the field `max_electric_power` which gives the maximum electric power in kW of a connector/adapter. `max_electric_power` is exposed on the carList, Car and CarPremium query.
- Added the ability to configure the time it takes to halt, start and stop charging on client level. We default to 5 minutes if you choose not to change this. This functionality will soon become available to you in the dashboard.

### ✨ Improvements

- Improved the description of the power field for connectors and adapters to: "Usable electric power in kW".

### 🐞️ Bug fixes

- Fixed an issue where the route mutation returned an internal server error when the `operatorPrefer` parameter was set to `true` and the `operatorIds` parameter set to `null`.
- Fixed an issue where `safeRiskMargin` could be set to `null`. An integer between 0 and 60 is now required.

</release-note>

<release-note title="3.24.0 - Stability improvements" date="30-07-2021">

### ✨ Improvements

- Improved stability through several software updates.

</release-note>

<release-note title="3.22.1 - Configurable charge speed" date="29-07-2021">

### ⚡️ New features

- Added configurable charge speed for our customers. By default we use the average charge speed, but customers can now choose to use the maximum charge speed instead. This functionality will soon become available to you in the dashboard.

### 🐞️ Bug fixes

- Fixed an issue with the tariffs module where in some cases the wrong tariff was displayed.
- Fixed an issue when the WebSocket broke and it didn’t return a result on a subscription by adding a KeepAlive message.

</release-note>

<release-note title="3.14.1-supercluster.15 - Tile service performance" date="22-07-2021">

### ✨ Improvements

- Improved the performance of our Tile Service to provide more structured clustering and faster response times.

</release-note>

<release-note title="3.14.1 - Password changes" date="14-07-2021">

### ⚡️ New features

- Added the ability to change your Chargetrip account password through your profile.

</release-note>

<release-note title="3.9.0 - Performance improvements" date="28-06-2021">

### ✨ Improvements

- Improved performance for several sections of the Chargetrip dashboard.

</release-note>

<release-note title="3.8.0 - pathPlot Release" date="17-06-2021">

In this release, we introduce `pathPlot`, a new property that combines the data from our previous `elevationPlot` and aggregated data from `routePath` query. The received data is more accurate, and the response is quicker.

### ⚡️ New features

- Added the `pathPlot` property in favour of `elevationPlot`.
- Added support to search the `carList` by `id`.

### ✨ Improvements

- Improved how routes should be queried. A single additional `route` query is no longer needed after you started a `route` subscription.

### 🐞️ Bug fixes

- Removed the unused operator and station subscriptions.
- Fixed an issue where in some cases an incorrect connector type was selected at charge stations.

</release-note>

<release-note title="3.3.4 - Routing in Low Density Charge Station Regions" date="02-06-2021">

### ⚡️ New features

- Added support for URL parameter authentication on top of header authentication to provide a more seamless Mapbox integration. See our updated documentation [here](/API-Reference/Tile-Service/integration).

### ✨ Improvements

- Improved our calculations in regions where the density of stations is still low by widening our search for possible stations if the first route fails.

</release-note>

<release-note title="3.0.0 - GraphEngine 3.0" date="31-05-2021">

### ⚡️ New features

- Chargetrip's Graph Engine has been rebuild from the ground-up to maintain performance and withstand higher loads. The new version of the engine calculates routes faster, uses more variables and gives back better results.

### ✨ Improvements

- Improved the client environment's stability by moving the import and processing of station data outside the client environment.
- Improved route calculation speeds when searching for stations along a route.
- Improved route calculation speeds when using preferred operators.
- Improved car data processing.

</release-note>

<release-note title="2.58.6 - Introducing pagination to the car database" date="11-05-2021">

Today we are rolling out an overhauled carlist query which allows for better frontend performance and search results. For an example on how to use all these new features, you can go [here](https://chargetrip.github.io/examples/car-list/).

### ⚡️ New features

- Added pagination to the carList query.
- Added search over `naming.make`, `naming.model`, `naming.chargetrip_version` to the carList query.
- Added filter for `availability` to the carList query.

</release-note>

<release-note title="2.38.3 - Car Database Structure" date="27-01-2021">

### ✨ Improvements

- Improved car data clustering. Fields are now categorized by using nesting.

</release-note>

<release-note title="2.38.3 - Car Database Structure" date="27-01-2021">

This release improves the structuring of our car data. This improvement however includes breaking changes and requires migration. The fields that require migration can be found on the [deprecation page](/deprecations).

### ✨ Improvements

- Improved car data structuring which allows for better clustering and query scalability.

### 🐞️ Bug fixes

- Fixed a bug that prevented using stations as `via` point.

</release-note>

<release-note title="2.33.1 - Predictive Availability Module" date="17-11-2020">

This week we extended our station data by including historical station availability. Not every station includes this information at the moment but this will increase over time.

The predictive availability module contains this week's predictions. For every hour, there is an availability scale ranging from 1 to 5.

<c-table>
    <c-row>
        <c-cell font-weight="bold" tag="th">Value</c-cell>
        <c-cell font-weight="bold" tag="th">Prediction</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">1</c-cell>
        <c-cell>very busy - high probability that the charging station is occupied</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">2</c-cell>
        <c-cell>busy</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">3</c-cell>
        <c-cell>average</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">4</c-cell>
        <c-cell>quiet</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">5</c-cell>
        <c-cell>very quiet - high probability that the charging station will be free</c-cell>
    </c-row>
</c-table>

The days of the week start at 1 which results in the following `weekdays` values:

<c-table>
    <c-row>
        <c-cell font-weight="bold" tag="th">Value</c-cell>
        <c-cell font-weight="bold" tag="th">Day of the week</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">1</c-cell>
        <c-cell>Monday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">2</c-cell>
        <c-cell>Tuesday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">3</c-cell>
        <c-cell>Wednesday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">4</c-cell>
        <c-cell>Thursday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">5</c-cell>
        <c-cell>Friday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">6</c-cell>
        <c-cell>Saturday</c-cell>
    </c-row>
    <c-row>
        <c-cell font-weight="semibold">7</c-cell>
        <c-cell>Sunday</c-cell>
    </c-row>
</c-table>

### ⚡️ New features

- Station data has been extended and now includes historical station availability.

### 🐞️ Bug fixes

- Fixed a bug where error codes were not consistent.

</release-note>

<release-note title="2.30.3 - Bug fixes & improvements" date="06-11-2020">

### 🐞️ Bug fixes

- Fixed a bug that hid 24 / 7 information for some stations.
- Fixed a bug where alternative routes with a single charge were not displayed correctly.

</release-note>

<release-note title="2.30.2 - Chargetrip Range" date="27-10-2020">

This release introduces the chargetripRange field. The Chargetrip Real Range helps displaying a realistic range for all EV models. The range is based on Chargetrip's research and driving data. You can find more details on the [car section](/API-Reference/Cars/introduction).

### ⚡️ New features

- Added the `chargetripRange` field.

### ✨ Improvements

- Migrated fields from the `carList` query to the `car` query to allow caching of the `carList` query.

### 🐞️ Bug fixes

- Fixed a bug where the number of amenities were not equal when comparing between the `stationList` and `amenityList`.

</release-note>

<release-note title="2.27.5 - New Outside Temperature Model" date="15-10-2020">

### ✨ Improvements

- Improved outside temperature model which enhances the route computation speed and improves the charge stop accuracy.
- Various other improvements to improve our route calculation speed.

### 🐞️ Bug fixes

- Fixed a bug where the ordering of alternative routes was wrong.

</release-note>

<release-note title="2.24.0 - Custom Error Codes" date="14-09-2020">

This release is all about errors. We know, you hate getting them but we tried to make debugging a little bit easier. Apart from that we also included all custom error codes in our documentation. Please be aware that in addition to our custom error codes, GraphQL throws an `INTERNAL_SERVER_ERROR` as a generic HTTP-error. Please ignore this error and use only our custom error codes.

### ⚡️ New features

- Added custom error codes and detailed error descriptions. No more guess-work.

### 🐞️ Bug fixes

- Various small bug fixes.

</release-note>

<release-note title="2.22.2 - Bug Fixes & improvements" date="27-08-2020">

### ✨ Improvements

- Improved the description of our recently released `chargetripEdition` field.
- Improved various `chargetripEdition` field names to be more descriptive.

### 🐞️ Bug fixes

- Fixed a bug where `via` points were not correctly added to the route.

</release-note>

<release-note title="2.22.0 - Chargetrip Edition" date="26-08-2020">

This week the `chargetripEdition` field has been released. Often car manufacturers don't make a distinction between different versions of the same modal. By using the chargetrip edition we make sure you always have a unique car name.

### ⚡️ New features

- Added the `chargetripEdition` field.

</release-note>

<release-note title="2.21.8 - Bug Fixes" date="07-08-2020">

### 🐞️ Bug fixes

- Fixed a spelling mistake by renaming `recommandedSpeed` to `recommendedSpeed`.
- Fixed the destination type from `stationVia` to `stationFinal` when adding a station as final destination.

</release-note>

<release-note title="2.21.0 - Alternative Stations" date="20-07-2020">

### ⚡️ New features

- Added the ability to request alternative stations along an existing route.
- Added the ability to set charge stations as waypoints to an existing route.

### 🐞️ Bug fixes

- Renamed the `stationAlong` field to `stationsAlongRoute`.

</release-note>

<release-note title="2.19.0 - Tile Service Filter" date="16-07-2020">

### ⚡️ New features

- Added support for selecting different power filters.
- Added support to select all available connectors.

### 🐞️ Bug fixes

- Fixed various spelling mistakes and inconsistencies in our documentation.

</release-note>

<release-note title="2.15.0 - OCPI 2.2 Support" date="10-06-2020">

### ⚡️ New features

- Added support for OCPI 2.2. OCPI specifications can be found [here](https://github.com/ocpi/ocpi). The full specifications can be found [here](https://github.com/ocpi/ocpi/releases/download/2.2/OCPI-2.2.pdf).

</release-note>

<release-note title="2.0.0 - OCPI 2.1.1 Support" date="01-04-2020">

Today's release contains an exclusive Eco-Movement Integration. Next to our free Open Charge Map stations, your account can be pre-loaded with over 100.000 highly curated premium charge stations across Europe. Our premium station data includes real-time availability, pricing, and charging history. You no longer need to connect several costly charge station database providers to get European coverage. See [Eco-Movement](https://www.eco-movement.com/) for more details about regional limitations. <cta action='openChat'>Contact us</cta> for pricing.

### ⚡️ New features

- Added an exclusive Eco-Movement integration.
- Added support for OCPI 2.1.1

### 🐞️ Bug fixes

- Fixed various spelling mistakes and inconsistencies in our documentation.
- Fixed missing descriptions for all types that return values with a unit.

</release-note>

<release-note title="1.0.0 - Generation 3 of the Chargetrip API" date="18-01-2020">

### ⚡️ New features

- Added support for Peugeot e-208 and Seat Mii Electric.
- Added support for the OCPI Tarrif Module. More information about the OCPI 2.1.1 specifications can be found [here](https://github.com/ocpi/ocpi). The full specifications can be found [here](https://github.com/ocpi/ocpi/releases/download/2.1.1/OCPI_2.1.1.pdf).

### 🐞️ Bug fixes

- Fixed various spelling mistakes and inconsistencies in our documentation.

</release-note>
