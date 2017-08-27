import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { IPoint } from "Enums";
import { IContainer, IItem } from "item/IItem";
import BasePacket from "multiplayer/packets/BasePacket";
export default abstract class IndexedPacket extends BasePacket {
    private _index;
    private _nextIndex;
    protected resetIndexes(): void;
    protected readIndexedUint8(): number | undefined;
    protected writeIndexedUint8(value?: number): void;
    protected readIndexedUint16(): number | undefined;
    protected writeIndexedUint16(value?: number): void;
    protected readIndexedUint32(): number | undefined;
    protected writeIndexedUint32(value?: number): void;
    protected readIndexedFloat64(): number | undefined;
    protected writeIndexedFloat64(value?: number): void;
    protected readIndexedBool(): boolean | undefined;
    protected writeIndexedBool(value?: boolean): void;
    protected readIndexedUint8Array(): Uint8Array | undefined;
    protected writeIndexedUint8Array(value?: Uint8Array): void;
    protected readIndexedUint32NumberArray(): number[] | undefined;
    protected writeIndexedUint32NumberArray(value?: number[]): void;
    protected readIndexedString(): string | undefined;
    protected writeIndexedString(value?: string): void;
    protected readIndexedStringArray(): string[] | undefined;
    protected writeIndexedStringArray(value?: string[]): void;
    protected readIndexedPoint(): IPoint | undefined;
    protected writeIndexedPoint(value?: IPoint): void;
    protected readIndexedContainer(): IContainer | undefined;
    protected writeIndexedContainer(value?: IContainer): void;
    protected readIndexedCreature(): ICreature | undefined;
    protected writeIndexedCreature(value?: ICreature): void;
    protected readIndexedDoodad(): IDoodad | undefined;
    protected writeIndexedDoodad(value?: IDoodad): void;
    protected readIndexedItem(): IItem | undefined;
    protected writeIndexedItem(value?: IItem): void;
    protected readIndexedItemOrDoodad(): IItem | IDoodad | undefined;
    protected writeIndexedItemOrDoodad(value?: IItem | IDoodad): void;
    protected readIndexedItems(): IItem[] | undefined;
    protected writeIndexedItems(value?: IItem[]): void;
    protected readIndexedObject(): any;
    protected writeIndexedObject(value?: any): void;
    private writeIndex(value);
    private readIndex();
}