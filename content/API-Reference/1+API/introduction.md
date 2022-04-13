---
title: Quick setup guide
description: A quick introduction around the chargetrip API
order: 1
---

# Quick setup guide
The Chargetrip API gives you the ability to integrate smart, EV-specific routing into products built for electric car drivers. This API gives developers access to the same powerful EV routing engine that is already used and trusted by car manufacturers and e-mobility services around the world. Our GraphQL API and documentation are always current to the latest stable version, and fully backward compatible. For new features and bug fixes, see the [release notes](/release-notes).

## Integration
To start integrating the Chargetrip API you can read our [getting started guide](/Getting-Started/API-Basics/getting-started). If you already have your keys ready and know a thing or two about graphQL you can continue here by copying the base URL.

<code-block lang="html" prefix="API Reference / Integration" title="Base URL">
https://api.chargetrip.io/graphql
</code-block>

## Authorization
The example below shows the required headers needed to authorize with the Chargetrip API. For a more in-depth guide around authorization and errors, you can take a look [here](/Getting-Started/API-Basics/status-error-codes).

<code-block lang="bash" prefix="API Reference / Authorization" title="Headers">
curl -X POST \
-H "Content-Type: application/json" \
-H "x-client-id: 5e8c22366f9c5f23ab0eff39" \
-d 'query { }' \
http://api.chargetrip.io/graphql
</code-block>

## Subscriptions
Subscriptions can be implemented by using the `graphql-ws` or `graphql-transport-ws` protocol. It is recommended to use the newer `graphql-transport-ws` protocol. Learn how to use websockets in detail over [here]().

The `graphql-ws` protocol uses the following url:

<code-block lang="bash" prefix="API Reference / Subscriptions" title="graphql-ws">
wss://api.chargetrip.io/graphql
</code-block>

The `graphql-transport-ws` uses:

<code-block lang="bash" prefix="API Reference / Subscriptions" title="graphql-transport-ws">
wss://api.chargetrip.io/subscription
</code-block>

## Who is this API for?
Whether you are a car manufacturer, charge point operator, utility provider, or fleet operator, you need EV-specific routing to remove adoption barriers, improve the electric driving and charging experience, and optimize your operation. Integrating the Chargetrip API into your end-user mobile or in-car products or telematics dashboard will give you instant access to intelligent route computations for electric vehicles and electric fleets.
