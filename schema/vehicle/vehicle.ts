import {VehicleType} from "../vehicle-type/vehicle-type";
import {Unit} from "../unit/unit";
import {LiquidTank} from "../liquid-tank/liquid-tank";
import {VehicleWeightCategory} from "../enumerations/vehicle-weight-category";
import {VehicleOffRoadCapability} from "../enumerations/vehicle-off-road-capability";
import {VehiclePump} from "./vehicle-pump";
import {Equipment} from "../equipment/equipment";

export interface Vehicle {
    id: string;
    vehicleType: VehicleType;
    radioCallName: string;
    unit?: Unit;
    weightCategory: VehicleWeightCategory;
    offRoadCapability: VehicleOffRoadCapability;
    liquidTanks: LiquidTank[];
    pumps: VehiclePump[];
    equipment: Equipment[];
}