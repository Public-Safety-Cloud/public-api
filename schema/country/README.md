# Country Endpoint

Our country endpoint will provide the countries, our system knows. Customers can only choose from our known countries.

### Country-Object

Our country object contains the following fields:

```json
Country {
  "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
  // the id of the country, starting with the country_ prefix
  "name": "Germany",
  // the name of the country, based on provided language
  "isoCode": "DEU"
  // The isoCode of the Country
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | CountryId contains the `country_` prefix and a uuid
name | String | Name of the Country, based on the provided language
isoCode | String | 3-Character isoCode, based on https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

### Get all Countries

`GET https://<domain>/<version>/countries`
**Domain:** Our Endpoint Domain. Depends on the used environment.  
**Version:** The API Version you want to use.  
**Language:** You can specify the language with an url parameter like
this: `GET https://<domain>/<version>/countries?lang=de` We are using the ISO 639-1 Language Code

#### Example Response

```json
{
  "version": "draft",
  "lang": "en",
  "livemode": false,
  "items": [
    {
      "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
      "name": "Germany",
      "isoCode": "DEU"
    }
  ]
}
```