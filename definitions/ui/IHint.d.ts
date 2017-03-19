export interface IHint {
    name?: string;
    description?: string;
    highlightElementSelector?: string[];
}
export declare enum HintType {
    First = 0,
    WelcomeToWayward = 1,
    Controls = 2,
    CorpseCarving = 3,
    Doodads = 4,
    Caves = 5,
    Nightfall = 6,
    StaminaReplenishment = 7,
    HealthProblems = 8,
    Bleeding = 9,
    Poisoned = 10,
    Dehydration = 11,
    UseATool = 12,
    Durability = 13,
    Death = 14,
    ConsumingBadThings = 15,
    FastPickup = 16,
    Bugs = 17,
    HeldItems = 18,
    Milestones = 19,
    Burned = 20,
    Crafting = 21,
    Encumberance = 22,
    DailyChallengeMode = 23,
    MovingItems = 24,
    CraftingFailure = 25,
    Reputation = 26,
    Interface = 27,
    CreatureTaming = 28,
    Combat = 29,
    Last = 30,
}