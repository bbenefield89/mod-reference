import { Delay, EquipType, FacingDirection, HairColor, Hairstyle, IInputMovement, IInspect, IPoint, IPointZ, IRGB, ItemQuality, ItemType, KeyBind, MoveType, PlayerState, RestType, SfxType, SkillType, SkinColor, TurnType } from "Enums";
import IFlowFieldManager from "flowfield/IFlowFieldManager";
import IOptions from "game/IOptions";
import { IContainer, IItem } from "item/IItem";
import { UiMessage } from "language/ILanguage";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
import { IPropSerializable } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export interface IPlayer extends IPropSerializable, IPointZ {
    attack: number;
    attackFromEquip: IAttackHand;
    benignity: number;
    customization: IPlayerCustomization;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    dehydration: number;
    dexterity: number;
    direction: IPoint;
    equipped: {
        [index: number]: number;
    };
    facingDirection: FacingDirection;
    flowFieldManager: IFlowFieldManager;
    fromX: number;
    fromY: number;
    handToUse: EquipType;
    hintSeen: boolean[];
    id: number;
    identifier: string;
    inventory: IContainer;
    isMoving: boolean;
    lightBonus: number;
    malignity: number;
    movement: IInputMovement;
    movementAnimation: number;
    movementCompleted: boolean;
    movementCompleteZ: number | undefined;
    movementFinishTime: number;
    movementProgress: number;
    moveType: MoveType;
    name: string;
    nextMoveDirection: FacingDirection | undefined;
    nextX: number;
    nextY: number;
    options: IOptions;
    raft: number | undefined;
    resting: boolean;
    score: number;
    skills: ISkillSet;
    spawnPoint: IPointZ | undefined;
    starvation: number;
    state: PlayerState;
    stats: IStats;
    status: IPlayerStatus;
    strength: number;
    swimming: boolean;
    tamedCreatures: number[];
    turns: number;
    walkSoundCounter: number;
    wasAbsentPlayer: boolean;
    weight: number;
    weightBonus: number;
    x: number;
    y: number;
    z: number;
    addDelay(delay: Delay, replace?: boolean): void;
    addMilestone(milestone: MilestoneType, data?: number | null): void;
    attributes(): void;
    calculateEquipmentStats(): void;
    calculateStats(): void;
    canCarve(): IItem | undefined;
    canJump(): boolean;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkReputationMilestones(): void;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    checkWeight(): void;
    createFlowFieldManager(): void;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    damage(amount: number, damageMessage: string, soundDelay?: number): void;
    damageEquipment(): void;
    equip(item: IItem, slot: EquipType, internal?: boolean): void;
    getBindDownTime(key: KeyBind): number | undefined;
    burn(skipMessage?: boolean): number | null;
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquippedItems(): IItem[];
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getHandToUse(): EquipType | undefined;
    getMaxHealth(): number;
    getMouseDirection(): FacingDirection;
    getReputation(): number;
    getSerializationProperties(_: string): string[];
    getTouchDirection(): FacingDirection | undefined;
    hasDelay(): boolean;
    hurtHands(message: Message, damageMessage: Message): void;
    inspect(x: number, y: number, z?: number): void;
    inspectTile(tile: ITile): IInspect[];
    isBindDown(key: KeyBind): boolean;
    isGhost(): boolean;
    isLocalPlayer(): boolean;
    processInput(): void;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    resetKeyBindState(): void;
    rest(restType: RestType, cycles: number, loadingMessage: UiMessage, item?: IItem): void;
    setId(id: number): void;
    setMouseDirection(playerDirection: FacingDirection): void;
    setRaft(itemId: number | undefined): void;
    setTouchDirection(playerDirection: FacingDirection | undefined): void;
    setup(completedMilestones: number): void;
    setZ(z: number): void;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    staminaCheck(): boolean;
    staminaReduction(skillType: SkillType): void;
    tick(turnType?: TurnType): void;
    unequip(item: IItem, internal?: boolean): void;
    unequipAll(): void;
    updateCraftTableAndWeight(): void;
    updateKeyBindState(key: KeyBind, state: number | undefined): void;
    updateReputation(reputation: number): void;
}
export default IPlayer;
export interface IPlayerStatus {
    bleeding: boolean;
    burned: boolean;
    poisoned: boolean;
}
export interface IHairstyleDescription {
    name: string;
    imagePath?: string;
    mod?: number;
}
export interface IColorDescription {
    color: IRGB;
    mod?: number;
}
export interface IPlayerCustomization {
    hairStyle: Hairstyle;
    hairColor: HairColor;
    skinColor: SkinColor;
}
export interface IAttackHand {
    leftHand: number;
    rightHand: number;
}
export interface IStats {
    health: IStat;
    stamina: IStat;
    hunger: IStat;
    thirst: IStat;
}
export interface IStat {
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
export declare type IPlayerOld = Partial<IPlayer> & {
    gender: 0 | 1;
    talent: number;
    stamina: number;
    staminaRegen: number;
    staminaTimer: number;
    thirst: number;
    thirstRegen: number;
    thirstTimer: number;
    hunger: number;
    hungerRegen: number;
    hungerTimer: number;
    health: number;
    healthRegen: number;
    healthTimer: number;
    malignityPlus: number;
    malignityNegative: number;
};
export interface IMobCheck {
    x: number;
    y: number;
    z: number;
    creatureId?: number;
    player?: IPlayer;
    obstacle?: boolean;
    water?: boolean;
}