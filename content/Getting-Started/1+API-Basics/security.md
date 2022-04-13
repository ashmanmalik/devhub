---
title: Security
description: Prevent your keys from unauthorized use when using the Chargetrip API
order: 3
quickNav: true

keys:
- x-client-id
- x-app-id

types:
- string
- string

descriptions:
- Your project id with the corresponding configuration
- Your app id for splitting up analytics

required:
- Yes
- No
---
# Security
When working with the Chargetrip API, your keys can be visible to anyone who makes an effort to look for it. That is why we recommend adding a layer of restrictions to build secure applications and prevent unauthorized use.

## Application keys
When configuring new projects, creating applications or editing applications you can set up your security. You can use HTTP referrer, Android fingerprint and iOS bundle identifier restrictions. By default it's set to use no restrictions. __Be aware you can only set one restriction type per application ID.__

### HTTP referrer
A HTTP referrer allows restriction to URLs that can use an application ID / `x-app-id`. This is useful when building any type of web application. You can add as many URLs to a single application as you would like.

Here are some examples of URLs that you can allow to set up a referrer:

- A specific URL with an exact path: __www.example.com/path__
- Any URL in a single domain with no subdomains, using a wildcard asterisk (\*): __example.com/*__
- Any URL in a single subdomain, using a wildcard asterisk (\*): __sub.example.com/*__
- Any subdomain or path URLs in a single domain, using wildcard asterisks (\*): __\*.example.com/*__
- A URL with a non-standard port: __www.example.com:8000/*__

<note display="block">
Query parameters and fragments are not supported. When added, they will be ignored.
</note>

### Android fingerprint
To restrict the use of an application ID on Android, you will need to provide your application identifier and debug / release certificate fingerprint. To use this restriction, you will need to send your identifier and fingerprint with every request by using the `x-app-identifier` and `x-app-fingerprint` headers.

Your application identifier can be found in your modules `build.gradle` file. To obtain your release or debug fingerprint use any of the following commands;

<code-block lang="bash" prefix="Security" title="Linux | macOS (debug)">
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
</code-block>

<code-block lang="bash" prefix="Security" title="Windows (debug)">
keytool -list -v -keystore "%USERPROFILE%\\.android\\debug.keystore" -alias androiddebugkey -storepass android -keypass android
</code-block>

<code-block lang="bash" prefix="Security" title="Linux | macOS | Windows (release)">
keytool -list -v -keystore your_keystore_name -alias your_alias_name
</code-block>

### iOS bundle identifier
An iOS bundle identifier can be used to restrict the use of an application ID / `x-app-identifier` on any iOS application. To use this restriction, you will need to send your bundle identifier with every request by using the `x-app-identifier` header.

The bundle identifier is a unique identifier within the Apple ecosystem and uses a reverse domain notation. Here is an example of such identifier; `com.example.app.ios`.

To look up your identifier navigate to `project > targets > general` in your Xcode project.

<right-aside large="true">

<article-teaser src="/globe.svg" href="https://medium.com/chargetrip/chargetrip-tile-service-with-react-native-and-mapbox-228dae36a574">

## Chargetrip Tile Service with React Native and Mapbox
An introduction to the Chargetrip Tile Service and the caveats of integrating it into a React Native mobile application.

</article-teaser>

<latest-updates></latest-updates>

</right-aside>
		
