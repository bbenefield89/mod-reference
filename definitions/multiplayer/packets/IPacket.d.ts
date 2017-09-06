import { ConnectionState } from "Enums";
import * as Utilities from "Utilities";
export declare enum PacketType {
    Client = 0,
    Server = 1,
    Shared = 2,
}
export interface ISynchronizationCheckData {
    packetNumber?: number;
    afterRandomHistory?: Utilities.IRandomHistory[];
    beforeSyncChecks?: ISyncCheck;
    afterSyncChecks?: ISyncCheck;
}
export interface ISyncCheck {
    [index: number]: string[];
}
export interface IPacket {
    getAllowedStates(): ConnectionState;
    getArrayBuffer(id?: number): ArrayBuffer;
    getId(): number;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getType(): PacketType;
    isSyncCheckEnabled(): boolean;
    process(): any;
    processData(dataView: DataView): void;
}
export declare enum NetworkPropertyType {
    Bool = 0,
    Uint8 = 1,
    Uint16 = 2,
    Float64 = 3,
    Uint32NumberArray = 4,
    String = 5,
    Container = 6,
    Generic = 7,
}
export interface INetworkedProperty {
    key: string;
    type: NetworkPropertyType;
    optional: boolean;
}
export declare function NetworkProperty(type: NetworkPropertyType): PropertyDecorator;
export declare function OptionalNetworkProperty(type: NetworkPropertyType): PropertyDecorator;
