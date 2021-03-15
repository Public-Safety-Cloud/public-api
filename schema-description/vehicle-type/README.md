# Vehicle-Type Endpoint

Our vehicle-type endpoint will provide all vehicle types our system knows.  
Is some vehicle-type missing? Tell us at info@kirch-solutions.de

### Vehicle-Type-Object

Our vehicle-type object contains the following fields:

```json
{
  "id": "vehicletype_5dde5671-8326-4a9f-b9db-e4bad898f088",
  "name": "HLF 20",
  "category": VehicleTypeCategory,
  "country": Country
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | UnitId contains the `vehicletype_` prefix and a uuid
name | String | Name of the unit
category | VehicleTypeCategory | The category of the vehicle. See [VehicleTypeCategory Definition](../enumerations/README.md)
country | Country | The country of the vehicle-type

### `GET` `/vehicle-types` Get all Vehicle-Types

Get all knows vehicle-types.

#### Request query parameters

query parameter | dataType | description
--- | ------------- | -------------
country_iso_code  | String     | get all vehicle-types by country isoCode
country_id  | CountryId     | get all vehicle-types by countryId
category  | String     | get all vehicle-types by category

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
      "id": "vehicletype_5dde5671-8326-4a9f-b9db-e4bad898f088",
      "name": "HLF 20",
      "category": "FIRE_TRUCK",
      "country": {
        "id": "country_5dde5671-8326-4a9f-b9db-e4bad898f088",
        "name": "Germany",
        "isoCode": "DEU"
      }
    }
  ]
}
```