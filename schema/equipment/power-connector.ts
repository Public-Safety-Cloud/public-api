import {PowerConnectorType} from "../enumerations/power-connector-type";

export interface PowerConnector {
    type: PowerConnectorType;
    bayonetLock: boolean;
    explosionProof: boolean;
    count: number;
}