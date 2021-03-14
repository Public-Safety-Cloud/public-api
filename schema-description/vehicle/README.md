# Vehicle Endpoint

Our vehicle endpoint will provide information about the vehicles of a customer or unit.

### Vehicle-Object

Our vehicle object contains the following fields:

```json
{
  "id": "vehicle_5dde5671-8326-4a9f-b9db-e4bad898f088",
  "vehicleType": VehicleType,
  "radioCallName": "EX01 HLF20 1",
  "unit": Unit,
  "weightCategory": VehicleWeightCategory,
  "offRoadCapability": VehicleOffRoadCapability,
  "liquidTanks": VehicleLiquidTank[],
  "pumps": VehiclePump[],
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | VehicleId contains the `vehicle_` prefix and a uuid
vehicleType | VehicleType | The type of the vehicle
radioCallName | string | Radio call name of the vehicle
unit | Unit | Unit of the vehicle, if present
weightCategory | VehicleWeightCategory | weight category of the vehicle. Possible values: `LIGHT`, `MEDIUM`, `HEAVY`. See DIN EN 1846-1
offRoadCapability | VehicleOffRoadCapability | Off-road mobility of the vehicle. Possible values: `ROAD`, `OFF_ROAD`, `ALL_TERRAIN`. See DIN EN 1846-1
liquidTanks | List of VehicleLiquidTank | All liquids the vehicle carries
pumps | List of VehiclePump | All pumps the vehicle carries (including built-in pumps)
