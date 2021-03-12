# Customer Endpoint

Our customer endpoint will provide information about the customer of the access token.

### Customer-Object

Our customer object contains the following fields:

```json
{
  "id": "customer_5dde5671-8326-4a9f-b9db-e4bad898f088",
  "lang": "de",
  "country": Country,
  "organizationName": "Firebrigade Sample"
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | CustomerId contains the `customer_` prefix and a uuid
organizationName | String | Name of the organization of the customer
lang | String | 2-Character Language ISO-639-1, based on https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes
country | Country | The Country Object of the Customer

### `GET` `/customer` Get Customer

Get customer based on api token.

#### Request

*No request payload*

#### Response

```json
{
  "version": "draft",
  "lang": "en",
  "livemode": false,
  "type": "object",
  "data": {
    "id": "customer_5dde5671-8326-4a9f-b9db-e4bad898f088",
    "lang": "de",
    "country": {
      "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
      "name": "Germany",
      "isoCode": "DEU"
    },
    "organizationName": "Firebrigade Sample"
  }
}
```