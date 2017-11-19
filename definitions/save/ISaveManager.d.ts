export interface ISaveManager {
    compressSave(slot: number, saveObject: SaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: SaveObject, importing?: boolean): void;
    deleteAllData(): Promise<void>;
    deleteAllSlots(): Promise<boolean | undefined>;
    deleteSlot(slot: number): Promise<boolean | undefined>;
    exportSave(slot: number): Promise<SaveObject>;
    getFirstFreeSlot(): Promise<number>;
    getSaveCount(): Promise<number>;
    getSlots(): Promise<boolean[]>;
    getUsedSlots(): Promise<number[]>;
    getUsedSlotsSorted(sortBy: SaveSort, direction?: SortDirection): Promise<number[]>;
    getMostRecentSlot(): Promise<number>;
    importSave(slot: number, data: SaveObject | string): Promise<number | undefined>;
    initialize(): void;
    isEnabled(): boolean;
    isSlotUsed(slot: number): Promise<boolean>;
    load(slot: number): Promise<boolean>;
    loadPartial(slot: number): Promise<SaveObject>;
    loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean, importing?: boolean): void;
    loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    save(slot: number): Promise<[number, SaveObject]>;
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string): Promise<number>;
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any): Promise<number>;
    transferSaves(): void;
    useLocalStorage(): void;
}
export default ISaveManager;
export declare enum SaveSort {
    SaveTime = 0,
    Name = 1,
    TurnCount = 2,
    CreatedTime = 3,
}
export declare enum SortDirection {
    More = 1,
    Less = -1,
}
export declare let dailyChallengeSlot: number;
export declare let globalSlot: number;
export declare let multiplayerSlot: number;
export declare let maxSlots: number;
export declare let propertiesToSerialize: ISerializeProperty[];
export declare let propertiesToSerializeGlobal: ISerializeProperty[];
export declare class SaveObject {
    version: string;
    data: any;
}
export interface ISerializeProperty {
    key: string;
    property: string[];
    skipCompression?: boolean;
}
export interface IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    transferSaves(): void;
    isSlotUsed(slot: number, interval?: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: SaveObject, fakeSave?: boolean): Promise<number>;
    loadFromSlot(slot: number, saveObject: SaveObject): Promise<void>;
    deleteSlot(slot: number): Promise<boolean>;
    deleteAllSlots(): Promise<boolean>;
    deleteAllData(): Promise<void>;
}
