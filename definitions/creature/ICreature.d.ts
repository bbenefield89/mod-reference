import { CreatureType, DamageType, Defense, FacingDirection, IMessagePack, IPointZ, IRGB, ItemType, ItemTypeGroup, LootGroupType, MoveType, SfxType, StatusType } from "Enums";
import { IPlayer } from "player/IPlayer";
export interface ICreature extends IPointZ {
    readonly type: CreatureType;
    fromX: number;
    fromY: number;
    direction: FacingDirection;
    ai: AiType;
    anim: number;
    hp: number;
    maxhp: number;
    loot?: ItemType[];
    aberrant?: boolean;
    respawned?: boolean;
    enemy?: number;
    enemyAttempts?: number;
    happiness?: number;
    chickenEggCounter?: number;
    description(): ICreatureDescription | undefined;
    id(): number | undefined;
    isHidden(): boolean;
    isDefender(): boolean;
    getInspectMessage(player: IPlayer): IMessagePack;
    checkForBurn(moveType?: MoveType): boolean;
    damage(damageInfo: IDamageInfo): number | undefined;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    pet(): boolean;
    skipNextUpdate(): void;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    getMovementProgress(): number;
    getMovementFinishTime(): number;
    update(creatureId: number): boolean;
    moveTo(x: number, y: number): boolean;
    canSwapWith(player: IPlayer): boolean;
}
export declare enum SpawnGroup {
    Any = 0,
    Guardians = 1,
    Water = 2,
    WaterCave = 3,
    Cave = 4,
    Night = 5,
}
export declare enum AiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
    Tamed = 32,
    Follower = 64,
    Defender = 128,
}
export declare enum SpawnableTiles {
    None = 0,
    Default = 1,
    DefaultWithLava = 2,
    DefaultWithWater = 3,
    DeepWater = 4,
    Water = 5,
    Flying = 6,
    Ghost = 7,
    Desert = 8,
    Lava = 9,
}
export interface ICreatureDescription {
    name?: string;
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType;
    moveType: MoveType;
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    spawnTiles: SpawnableTiles;
    spawnReputation?: number;
    spawnOnBenignity?: boolean;
    spawnGroup?: SpawnGroup[];
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    mod?: number;
    noCorpse?: boolean;
    respawn?: boolean;
    reputation: number;
    prefix?: string;
    suffix?: string;
    waterAnimations?: boolean;
    description?: string;
    tamingDifficulty?: number;
    acceptedItems?: [ItemType | ItemTypeGroup];
    lightSource?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export interface IDamageInfo {
    player?: IPlayer;
    amount: number;
    type: DamageType;
    weaponName?: string;
    creature?: ICreature;
    skipMilestones?: boolean;
}