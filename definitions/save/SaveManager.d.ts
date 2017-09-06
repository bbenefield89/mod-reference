import { ISaveManager, SaveObject } from "save/ISaveManager";
export default class SaveManager implements ISaveManager {
    private loadedGlobalSlot;
    private dataStorage;
    private multiplayerSlotData;
    isEnabled(): boolean;
    useLocalStorage(): void;
    initialize(): void;
    getSaveSlots(callback: (slot: number, isUsed: boolean) => void): void;
    isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void): void;
    getSaveCount(callback: (usedCount: number, usedSlots: number[]) => void, callbackPerSlot?: (slot: number, isUsed: boolean) => void): void;
    getFirstFreeSlot(callback: (slot: number | undefined) => void): void;
    save(slot: number, callback: (slot: number, bytes: number, saveObject?: SaveObject) => void): void;
    load(slot: number, callback: (slot: number, success: boolean) => void): void;
    loadPartial(slot: number, callback: (slot: number, success: boolean, saveObject: SaveObject) => void): void;
    loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean): void;
    loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string, callback: (slot: number, bytes: number) => void): void;
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any, callback: (slot: number, bytes: number) => void): void;
    exportSave(slot: number, callback: (slot: number, success: boolean, json: string) => void): void;
    importSave(slot: number, data: string, callback: (slot: number | undefined, bytes: number | undefined) => void): void;
    deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    deleteAll(callback: () => void): void;
    transferSaves(): void;
    compressSave(slot: number, saveObject: SaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: SaveObject, importing?: boolean): void;
    private getPropertiesToSerialize(slot);
    private compressString(str, exporting?);
    private decompressString(str, importing?);
    private createSaveObject(slot);
    private saveObjectToSlot(slot, saveObject, callback);
}
