# Developer Portal

Here you can find our developer portal that serves as an entrypoint on how to work with the Chargetrip API. Every bit of content is available as an MD file. If something is incomplete or unclear feel free to open a pull request. If you are unsure whether something should be a pull request you can always contact us. We improve our documentation continuously, and your feedback is valuable.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Schema & Errors
Internally we run a couple of scripts that allow us to fetch the schema and errors from our API dynamically. This way all descriptions are maintained in one location. Embedding a schema is done automatically by a custom build script. 

If you would like to add an additional schema or error section you can navigate to our playground and find the right query, mutation or subscription name. You can then use the relevant error or schema components inside the MD file to construct a section. For example adding the Navigation Mapping query and errors would work like this. 

1. Open up the [playground](playground.chargetrip.com) and search for the query inside the docs: `Query.navigationMapping()`
2. Copy the name that's right behind `Query` part, in this case; `navigationMapping`
3. Open up your editor and create or select the appropriate MD file
4. Add the following components inside the MD file:

```
<schema name="navigationMapping"></schema>

<response error="navigationMapping"></response>
```

If you spot a mistake inside our schema or errors, you can still open up a PR. Please provide us with the name of the query, mutation or subscription as well as the property, argument or error that the mistake is in and the fix that you would like to see.


## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Chargetrip