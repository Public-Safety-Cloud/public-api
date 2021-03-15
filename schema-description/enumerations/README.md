# Enumerations

We are using enumerations to define allowed values for a field.

### UnitType

Value | Comment
 --- | ---
FIRE_STATION | If a unit is a fire station
AMBULANCE_STATION | If a unit is an ambulance station
TECHNISCHES_HILFSWERK_STATION | If a unit is a Technisches Hilfswerk (THW) station

### LiquidUnit

Value | Comment
 --- | ---
LITER | Metric liter unit

### CouplingCategory

Value | Comment
 --- | ---
PRESSURE | if coupling is pressure, so outflow of pumped liquid
SUCTION | if coupling is suction, so input of pumped liquid

### CouplingType

Value | Hose diameter | Comment
 --- | --- | ---
DIN_14323_A | 100 mm | A coupling as defined in DIN 14323
DIN_14303_B | 75 mm | B coupling as defined in DIN 14303
DIN_14302_C52 | 52 mm |  C52 coupling as defined in DIN 14302
DIN_14332_C42 | 42 mm |  C42 coupling as defined in DIN 14332
DIN_14330_1_S32 | 32 mm |  S32 coupling as defined in DIN 14330
DIN_14330_2_S28 | 28 mm |  S28 coupling as defined in DIN 14330
DIN_14301_D | 25 mm |  D coupling as defined in DIN 14301

### LiquidTankType

Value | Comment
 --- | ---
EXTINGUISHING_WATER | water used to extinguish fire as an example
FOAMING_AGENT | foam agent to produce foam with water
PETROL | petrol for gasoline engines
DIESEL | diesel for diesel engines

### DriveType

Value | Comment
 --- | ---
GASOLINE_ENGINE | pump is powered by an gasoline engine
DIESEL_ENGINE | pump is powered by an diesel engine (not vehicle engine)
ELECTRICITY_230V | pump is powered by 230 volts electricity
ELECTRICITY_400V | pump is powered by 400 volts electricity
POWERED_BY_VEHICLE | pump is powered by the vehicle engine

### PumpInputType

Value | Comment
 --- | ---
ON_THE_DEVICE | if pump does not have input coupling (example: submersible pump)
COUPLING | if pump has an input coupling

### VehicleOffRoadCapability

Based on DIN EN 1846-1.

Value | Comment
 --- | ---
ROAD | if the vehicle can drive on roads only
OFF_ROAD | if vehicle has basic off-road capability
ALL_TERRAIN | if the vehicle has advanced off-road capability

### VehicleTypeCategory

Value | Comment
 --- | ---
FIRE_TRUCK | if the vehicle is a fire truck
AMBULANCE | if the vehicle is an ambulance
TECHNISCHES_HILFSWERK | if the vehicle is a THW truck

### VehicleWeightCategory

Based on DIN EN 1846-1.

Value | Comment
 --- | ---
LIGHT | if the vehicle's total weight is less than 7.5 tons
MEDIUM | if the vehicle's total weight is between 7.5 tons and 16 tons
HEAVY | if the vehicle's total weight is more than 16 tons

### EquipmentType

Value | Comment
 --- | ---
TECHNICAL_EQUIPMENT | if the equipment is for technical aid
MEDICAL_EQUIPMENT | if the equipment is for medical aid
FIRE_EXTINGUISHING_EQUIPMENT | if the equipment is for extinguish fire
OTHER_EQUIPMENT | other equipment type