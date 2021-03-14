import {LiquidTankType} from "../enumerations/liquid-tank-type";
import {LiquidUnit} from "../enumerations/liquid-unit";

export interface VehicleLiquidTank {
    unit: LiquidUnit;
    capacity: number;
    type: LiquidTankType;
    portable: boolean;
}