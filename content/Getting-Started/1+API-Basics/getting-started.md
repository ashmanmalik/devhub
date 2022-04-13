---
title: Getting started
description: Get started by setting up your chargetrip API project
order: 1
quickNav: true
images:
- /configuring-your-project-1.png
- /configuring-your-project-2.png
---
# Getting started
The Chargetrip API can be used to render electric vehicles, plot stations and calculate routes. The API itself has different access levels and request limits depending on your plan. Everyone can start with a limited dataset on the free plan, but you can <cta action="openChat">contact us</cta> at any time to upgrade your plan.

<steps>
<step img="/getting-access.png">

## Getting access

To get started with the Chargetrip API you need to create an account and collect your own keys. Once you have done that, you can start making requests.

<c-button href="https://account.chargetrip.com/sign-up" size="md" type="primary" title="Sign up"></c-button>
<c-button href="https://account.chargetrip.com/" size="md" type="secondary" title="Sign in"></c-button>

</step>
<step :images="images">

## Configuring your project

When logged in to the dashboard, go to projects and click create new project. You will be going through a small onboarding guide where you can set your station provider and cars. Bear in mind: cars can be updated later on, stations can not. 

<step-note color="accent" title="Chargetip">

Want to use the same configuration in a different app? Create additional app keys inside your project and add them to your header as explained [here](/Getting-Started/API-Basics/authorization/).

</step-note>

</step>
<step img="/collect-your-keys.png">

## Collect your keys
After configuring your project, you need to click create. After that you will be taken to your project overview. Copy the `project id` / `x-client-id` and use this to make requests.

<step-note color="note" title="Key alert" :khaled="true">

These keys can’t be regenerated so keep them safe by using environment variables or a secure password manager.

</step-note>
</step>
</steps>

<right-aside large="true">

<article-teaser src="/globe.svg" href="https://medium.com/chargetrip/a-simple-guide-to-ev-navigation-and-routing-for-developers-bb82b1c78901">

## A simple guide to EV navigation and routing
To help you get started with the Chargetrip API, we provide you insights about the EV routing paradigm.

</article-teaser>

<latest-updates></latest-updates>

</right-aside>
