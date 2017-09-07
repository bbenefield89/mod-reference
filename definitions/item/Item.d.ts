import { ICreature } from "creature/ICreature";
import { CreatureType, EquipType, IPointZ, ItemQuality, ItemType, TatteredMap } from "Enums";
import { IContainable, IContainer, IItem, IItemArray, IItemDescription, IItemLegendary } from "item/IItem";
import IPlayer from "player/IPlayer";
import { IPropSerializable, IUnserializedCallback } from "save/ISerializer";
export default class Item implements IItem, IContainer, IContainable, IPropSerializable, IUnserializedCallback {
    id: number;
    type: ItemType;
    equippedPid: EquipType;
    quickSlot: number;
    tatteredMap: TatteredMap;
    legendary: IItemLegendary;
    disassembly: IItemArray;
    order: number;
    weight: number;
    decay: number;
    minDur: number;
    maxDur: number;
    quality: ItemQuality;
    renamed: string;
    weightCapacity: number;
    containedItems: IItemArray;
    containedWithin: IContainer;
    private _description;
    constructor(itemType?: ItemType | undefined, quality?: ItemQuality);
    description(): IItemDescription | undefined;
    getDecayMax(): number;
    getTotalWeight(): number;
    getDisassemblyWeight(): number;
    verifyAndFixItem(): void;
    damage(modifier?: number): void;
    isDamaged(): boolean;
    isEquipped(): boolean;
    getEquipSlot(): EquipType | undefined;
    isDecayed(): boolean;
    changeInto(type: ItemType, disableNotify?: boolean): void;
    returns(): boolean;
    spawnOnBreak(): ICreature | undefined;
    spawnOnDecay(): ICreature | undefined;
    spawnCreatureOnItem(creatureType: CreatureType | undefined): ICreature | undefined;
    getLocation(): IPointZ | undefined;
    dropInLava(player: IPlayer, x?: number, y?: number): void;
    dropInWater(player: IPlayer, x?: number, y?: number): void;
    placeOnTile(x: number, y: number, z: number, force: boolean, skipMessage?: boolean): boolean;
    initializeMap(): void;
    setQuality(quality?: ItemQuality): void;
    acquireNotify(player: IPlayer): void;
    getStokeFireValue(): number | undefined;
    getOnUseBonus(): number;
    getSerializationProperties(_: string): string[];
    onUnserialized(): void;
    private getOwner();
}
