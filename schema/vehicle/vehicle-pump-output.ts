import {CouplingType} from "../enumerations/coupling-type";
import {CouplingCategory} from "../enumerations/coupling-category";

export interface VehiclePumpOutput {
    couplingType?: CouplingType;
    couplingCategory?: CouplingCategory;
}