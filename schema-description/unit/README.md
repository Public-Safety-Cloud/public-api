# Unit Endpoint

Our unit endpoint will provide information about the units of a customer.

### Unit-Object

Our unit object contains the following fields:

```json
{
  "id": "unit_5dde5671-8326-4a9f-b9db-e4bad898f088",
  "name": "Unit Name",
  "type": "FIRE_STATION"
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | UnitId contains the `unit_` prefix and a uuid
name | String | Name of the unit
type | Enumeration | The type of the unit. Possible values: `FIRE_STATION`

### `GET` `/unit/:unitId` Get Unit by id

Get unit by unitId.

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
    "id": "unit_5dde5671-8326-4a9f-b9db-e4bad898f088",
    "name": "Unit Name",
    "type": "FIRE_STATION"
  }
}
```

### `GET` `/units` Get all Units

Get all units of customer.

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
      "id": "unit_5dde5671-8326-4a9f-b9db-e4bad898f088",
      "name": "Unit Name",
      "type": "FIRE_STATION"
    }
  ]
}
```