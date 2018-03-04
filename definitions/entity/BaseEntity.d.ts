import { IBaseEntity } from "entity/IBaseEntity";
import { FacingDirection, FireType, MoveType, SfxType } from "Enums";
import { ITile } from "tile/ITerrain";
import Emitter from "utilities/Emitter";
import { IPoint, IPointZ } from "utilities/math/IPoint";
export default abstract class BaseEntity extends Emitter implements IBaseEntity {
    id: number;
    renamed?: string;
    z: number;
    x: number;
    y: number;
    fromX: number;
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: IPoint;
    facingDirection: FacingDirection;
    protected _movementFinishTime: number | undefined;
    private _inFov;
    constructor();
    getTile(): ITile;
    getPoint(): IPointZ;
    getFacingPoint(): IPointZ;
    getFacingTile(): ITile;
    getMovementProgress(): number;
    getMovementFinishTime(): number | undefined;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    isOnFire(): FireType;
    canSeeTile(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
}