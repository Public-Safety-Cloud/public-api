import {VehiclePumpInput} from "./vehicle-pump-input";
import {VehiclePumpOutput} from "./vehicle-pump-output";
import {DriveType} from "../enumerations/drive-type";

export interface VehiclePump {
    name: string;
    driveType: DriveType;
    electricalPowerConsumptionInKilowattPerHour?: number;
    portable: boolean;
    explosionProof: boolean;
    deliveryRateLiterPerMinute: number;
    deliveryRatePressureInBar: number;
    inputs: VehiclePumpInput[];
    outputs: VehiclePumpOutput[];
}