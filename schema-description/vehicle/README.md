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
  "liquidTanks": LiquidTank[],
  "pumps": VehiclePump[],
  "equipment": Equipment[]
}
```

column | dataType | description
--- | ------------- | -------------
id     | String     | VehicleId contains the `vehicle_` prefix and a uuid
vehicleType | VehicleType | The type of the vehicle. See [VehicleType Definition](../enumerations/README.md)
radioCallName | string | Radio call name of the vehicle
unit | Unit | Unit of the vehicle, if present
weightCategory | VehicleWeightCategory | weight category of the vehicle, based on DIN EN 1846-1. See [VehicleWeightCategory Definition](../enumerations/README.md)
offRoadCapability | VehicleOffRoadCapability | Off-road mobility of the vehicle, based on DIN EN 1846-1. See [VehicleOffRoadCapability Definition](../enumerations/README.md)
liquidTanks | List of LiquidTank | All liquids the vehicle carries.
pumps | List of VehiclePump | All pumps the vehicle carries (including built-in pumps)
equipment | List of Equipment | All equipment the vehicle carries.