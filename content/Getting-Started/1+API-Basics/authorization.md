---
title: Authorization
description: Configure your project so it can authorize with the Chargetrip API
order: 2
quickNav: true

keys:
- x-client-id
- x-app-id
- x-app-identifier
- x-app-fingerprint

types:
- string
- string
- string
- string

descriptions:
- Your project id with the corresponding configuration
- Your app id for splitting up analytics and security
- Your iOS or Android bundle identifier
- Your android SHA fingerprint

required:
- Yes
- No
- No
- No
---
# Authorization

Before you can start with our API you need to be able to authorize yourself. You can do this by [signing up](http://dashboard.chargetrip.com/) and [configuring](/Getting-Started/API-Basics/getting-started#configuring-your-project) your own free key. After you’ve done that we will guide you through the process of configuring your key and authorizing yourself.

<c-image alt="Authorization image" src="/authorization.png" max-width="full"></c-image>

## The API
Now that you have all necessary credentials you can start using our API. The first thing you need is the following base url:

<code-block lang="bash" prefix="Authorization" title="Base Url">					
https://api.chargetrip.io/graphql
</code-block>

## Authorization process
To communicate with the chargetrip API, we require authorization on our endpoints as well as our websocket. Authentication can be done on one or two levels. If you provide us only with your `x-client-id` we will use this project configuration and the default `x-app-id` associated with it.

If you would like to split up your analytics per platform you can provide an additional `x-app-id`. This way your requests will be categorised on this level. 

Apart from the `x-app-id` and `x-client-id` there are two other headers: `x-app-identifier` and `x-app-fingerprint`. Both of these are used to implement security restrictions. The `x-app-identifier` is used to set the iOS or Android bundle identifier. The `x-app-fingerprint` is only used for Android and requires the SHA fingerprint of the Android application. Learn more about security over [here](/Getting-Started/API-Basics/security).

<property-table :keys="keys" :types="types" :descriptions="descriptions" :required="required"></property-table>

If we want to reflect this as a curl it would look like this;

<code-block lang="bash" prefix="Authorization" title="Curl">
curl -X POST \
-H "Content-Type: application/json" \
-H "x-client-id: 5e8c22366f9c5f23ab0eff39" \
-H "x-app-id: 5e8c22366f9c5f23ab0eff39" \
-d 'query { }' \
https://api.chargetrip.io/graphql
</code-block>

<right-aside large="true">

<article-teaser src="/globe.svg" href="https://medium.com/chargetrip/chargetrip-tile-service-with-react-native-and-mapbox-228dae36a574">

## Chargetrip Tile Service with React Native and Mapbox
An introduction to the Chargetrip Tile Service and the caveats of integrating it into a React Native mobile application.

</article-teaser>

<latest-updates></latest-updates>

</right-aside>
		
