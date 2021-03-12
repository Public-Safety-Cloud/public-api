# Country Endpoint

Our country endpoint will provide the countries, our system knows. Customers can only choose from our known countries.

### Country-Object

Our country object contains the following fields:

```json
{
  "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
  "name": "Germany",
  "isoCode": "DEU"
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | CountryId contains the `country_` prefix and a uuid
name | String | Name of the Country, based on the provided language
isoCode | String | 3-Character isoCode, based on https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

### `GET` `/countries` Get all Countries
Get all Countries, our system knows.
#### Request
*No request payload*
#### Response

```json
{
  "version": "draft",
  "lang": "en",
  "livemode": false,
  "type": "list",
  "items": [
    {
      "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
      "name": "Germany",
      "isoCode": "DEU"
    }
  ]
}
```