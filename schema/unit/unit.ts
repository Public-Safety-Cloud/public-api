import {UnitType} from "../enumerations/unit-type";

export interface Unit {
    id: string;
    name: string;
    type: UnitType;
}