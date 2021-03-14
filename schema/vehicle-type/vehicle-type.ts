import {Country} from "../country/country";
import {VehicleTypeCategory} from "../enumerations/vehicle-type-category";

export interface VehicleType {
    id: string;
    name: string;
    category: VehicleTypeCategory;
    country: Country;
}