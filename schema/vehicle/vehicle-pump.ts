import {VehiclePumpInput} from "./vehicle-pump-input";
import {VehiclePumpOutput} from "./vehicle-pump-output";
import {PumpDriveType} from "../enumerations/pump-drive-type";

export interface VehiclePump {
    driveType: PumpDriveType;
    portable: boolean;
    explosionProof: boolean;
    deliveryRateLiterPerMinute: number;
    deliveryRatePressureInBar: number;
    inputs: VehiclePumpInput[];
    outputs: VehiclePumpOutput[];
}