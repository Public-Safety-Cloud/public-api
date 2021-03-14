import {CouplingCategory} from "../enumerations/coupling-category";
import {CouplingType} from "../enumerations/coupling-type";
import {PumpInputType} from "../enumerations/pump-input-type";

export interface VehiclePumpInput {
    type: PumpInputType;
    couplingType?: CouplingType;
    couplingCategory?: CouplingCategory;
}