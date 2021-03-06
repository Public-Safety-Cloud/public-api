# Public-Safety.Cloud - Public-API

We offer a public API to everyone. This API requires a bearer authentication token, which can be created in our customer
portal (https://portal.public-safety.cloud).

## Current Version - DRAFT

### Contribute

If you want to contribute to our api, just create a pull-request or send us a message to info@kirch-solutions.de

### What will you find here?

You will find our API definitions and endpoints how you can communicate with our system. We will provide a test system
too, which can be used to test your api calls in your local development setup or in a test or staging environment.

## REST-API

We will provide our API as an REST-API which only understands JSON, no XML ;)

### Endpoints

| Environment | Url | Comment |
| --- | --- | --- |
| Production | `https://api.public-safety.cloud/<version>/` | Our live endpoint. In every response the field `livemode` is true |
| Test | `https://test-api.public-safety.cloud/<version>/` | Our test endpoint. In every response the field `livemode` is false |

### API Versions

Our available API versions:

| Version | Comment |
| --- | --- |
| draft | The draft version contains all latest features and is always under development |
| v1 | Please change to the git tag v1 to see the released v1 version endpoints |

#### Language

You can put a language as a request parameter to each request like
this: `GET https://<domain>/<version>/countries?lang=de`.  
Available languages:

- German: `de`
- English `en`

#### Api Response Structure

All API responses following the same structure:

```json
{
  "version": "draft",
  "lang": "en",
  "livemode": false,
  "type": "list",
  "items": [],
  "data": {}
}
```

| Field | Type | Comment |
| --- | --- | --- |
| version | string | The version of the response |
| lang | string | The language of the response |
| livemode | boolean | if the response is in livemode or not |
| type | Enumeration | the response type. Possible values: `list`, `object` |
| items | JSON-Array | if type is `list`, this field will be used |
| data | JSON-Object | if type is `object`, this field will be used | 

## GRAPHQL-API

We will offer our API as GRAPHQL too, but only in a later release.

### Table of Contents

- Schema
    - [Country](/schema-description/country/README.md)
    - [Customer](/schema-description/customer/README.md)
    - [Unit](/schema-description/unit/README.md)
    - [VehicleType](/schema-description/vehicle-type/README.md)
    - [Vehicle](/schema-description/vehicle/README.md)
    - [Enumerations](/schema-description/enumerations/README.md)