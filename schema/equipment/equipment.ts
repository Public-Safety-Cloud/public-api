import {EquipmentType} from "../enumerations/equipment-type";
import {EquipmentCoupling} from "./equipment-coupling";
import {EquipmentLiquidThroughput} from "./equipment-liquid-throughput";
import {DriveType} from "../enumerations/drive-type";
import {LiquidTank} from "../liquid-tank/liquid-tank";
import {PowerConnector} from "./power-connector";
import {EquipmentPart} from "./equipment-part";

export interface Equipment {
    name: string;
    manufacturer: string;
    type: EquipmentType;
    portable: boolean;
    coupling?: EquipmentCoupling[];
    liquidThroughputInLitersPerMinute?: EquipmentLiquidThroughput;
    driveType?: DriveType;
    weightInKilogramms?: number;
    electricalPowerGenerationInKilowattPerHour?: number;
    fuelConsumptionInLiterPerHours?: number;
    liquidTanks?: LiquidTank[];
    powerConnectors?: PowerConnector[];
    parts?: EquipmentPart[];
}