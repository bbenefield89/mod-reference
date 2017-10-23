import { IPlayOptions } from "game/IGame";
import { Hook } from "mod/IMod";
import { CanLoadState, ICanLoadInfo, IModInfo, IModManager, IModProvides, ModState, ModType } from "mod/IModManager";
export default class ModManager implements IModManager {
    private mods;
    private modsToSetup;
    private internalMods;
    private internalModsElectron;
    private cachedHooks;
    private cachedHookNames;
    private onLanguageLoadCallbacks;
    constructor();
    loadAll(options: IPlayOptions, callback: (err?: string) => void): void;
    unloadAll(reset?: boolean): void;
    setupMods(callback: () => void): void;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): void;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    callHook(hook: Hook, ...args: any[]): any;
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
    load(index: number): void;
    unload(index: number): void;
    save(index: number): void;
    reloadByName(name: string): boolean;
    reload(index: number): boolean;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getName(index: number): string;
    getDescription(index: number): string;
    getVersion(index: number): string;
    getLastUpdatedDate(index: number): string | undefined;
    getAuthor(index: number): string;
    getType(index: number): ModType;
    getRequiredMods(index: number): string[];
    getPath(index: number): string;
    getFolderName(index: number): string;
    getPublishFileId(index: number): string | undefined;
    getSteamIdOwner(index: number): string | undefined;
    getProvided(index: number): IModProvides;
    canLoad(index: number, fromTitleScreen?: boolean, count?: number): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getIndexFromName(name: string): number | undefined;
    getIndexFromPublishId(publishFileId: string): number[];
    getIndexFromPath(path: string): number | undefined;
    isEnabledByName(name: string): boolean;
    isLoadedByName(name: string): boolean;
    setPublishId(index: number, publishedFileId: string): void;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setLastUpdated(index: number, lastUpdated: string): void;
    getState(index: number): ModState;
    isInitializing(index: number): ModState;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void): boolean;
    uninitialize(index: number): void;
    uninitializeAll(): void;
    cacheHooks(): void;
    private onLanguageLoad(languageName, callback);
}
