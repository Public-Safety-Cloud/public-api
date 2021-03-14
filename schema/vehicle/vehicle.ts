import {VehicleType} from "../vehicle-type/vehicle-type";
import {Unit} from "../unit/unit";
import {VehicleLiquidTank} from "./vehicle-liquid-tank";
import {VehicleWeightCategory} from "../enumerations/vehicle-weight-category";
import {VehicleOffRoadCapability} from "../enumerations/vehicle-off-road-capability";
import {VehiclePump} from "./vehicle-pump";

export interface Vehicle {
    id: string;
    vehicleType: VehicleType;
    radioCallName: string;
    unit?: Unit;
    weightCategory: VehicleWeightCategory;
    offRoadCapability: VehicleOffRoadCapability;
    liquidTanks: VehicleLiquidTank[];
    pumps: VehiclePump[];
}