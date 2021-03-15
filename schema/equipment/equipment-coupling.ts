import {CouplingType} from "../enumerations/coupling-type";
import {CouplingCategory} from "../enumerations/coupling-category";

export interface EquipmentCoupling {
    type: CouplingType;
    category: CouplingCategory;
}