import { Message, MessageType } from "language/Messages";
export declare enum TerrainMask {
    None = 0,
    Type = 536870911,
    Tilled = 536870912,
    Wall = 1073741824,
    Fence = 2147483648,
}
export declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    Creature = 2,
}
export declare enum WorldZ {
    Min = 0,
    Cave = 0,
    Overworld = 1,
    Max = 1,
}
export declare enum Source {
    ActionManager = 0,
    Audio = 1,
    Chat = 2,
    CorpseManager = 3,
    CreatureManager = 4,
    DoodadManager = 5,
    FlowField = 6,
    Game = 7,
    ItemManager = 8,
    Languages = 9,
    MapGen = 10,
    Mod = 11,
    Mods = 12,
    Multiplayer = 13,
    Player = 14,
    ResourceLoader = 15,
    SaveManager = 16,
    Serializer = 17,
    Shaders = 18,
    Steamworks = 19,
    TileEventManager = 20,
    Trello = 21,
    Ui = 22,
    Utilities = 23,
    WebAssembly = 24,
}
export declare enum AttackType {
    Melee = 0,
    HandToHand = 1,
    Shoot = 2,
    Sling = 3,
    Fire = 4,
    ThrowItem = 5,
}
export declare enum InspectType {
    None = 0,
    Tile = 1,
    Doodad = 2,
    Creature = 3,
    Items = 4,
    Quality = 5,
    Player = 6,
}
export declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Fire = 32,
    BreakDoodads = 64,
    Flying = 15,
}
export declare enum DamageType {
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    True = 16,
    Last = 32,
}
export declare function fullDamageType(damageType: DamageType): string;
export declare class Resistances {
    [index: number]: number;
    constructor(...args: any[]);
}
export declare class Vulnerabilities {
    [index: number]: number;
    constructor(...args: any[]);
}
export declare class Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
export declare enum DoorOrientation {
    Default = 0,
    Vertical = 1,
}
export declare enum FacingDirection {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3,
}
export declare enum SaveType {
    InGame = 0,
    Quit = 1,
    BackToMainMenu = 2,
    Multiplayer = 3,
    DailyChallenge = 4,
}
export declare enum LootGroupType {
    Low = 0,
    High = 1,
    Treasure = 2,
    SeaTreasure = 3,
    CaveChest = 4,
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11,
}
export declare enum RecipeLevel {
    Advanced = 0,
    Simple = 1,
    Intermediate = 2,
    Expert = 3,
}
export declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Carve = 5,
    SetDown = 6,
    Eat = 7,
    DrinkItem = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherWater = 14,
    Shoot = 15,
    Cast = 16,
    TraverseTheSea = 17,
    LockPick = 18,
    Sling = 19,
    Repair = 20,
    Decode = 21,
    Read = 22,
    Reinforce = 23,
    Gather = 24,
    StokeFire = 25,
    Pour = 26,
    Plant = 27,
    GatherTreasure = 28,
    Ignite = 29,
    Build = 30,
    OpenContainer = 31,
    Preserve = 32,
    OpenBottle = 33,
    DrinkCure = 34,
    TellTime = 35,
    SailToCivilization = 36,
    Transmogrify = 37,
    Fire = 38,
    Teleport = 39,
    Extinguish = 40,
    DrawMap = 41,
    Dismantle = 42,
    PourOnYourself = 43,
    Squeeze = 44,
    Pet = 45,
    Tame = 46,
    Release = 47,
    HealCreature = 48,
    RubClockwise = 49,
    RubCounterclockwise = 50,
    OpenDoor = 51,
    CloseDoor = 52,
    AddFuel = 53,
    Drink = 54,
    Grasp = 55,
    PickupItem = 56,
    PickupAllItems = 57,
    Offer = 58,
    Drop = 59,
    Jump = 60,
    Move = 61,
    MoveTo = 62,
    UpdateDirection = 63,
    Idle = 64,
    DrinkInFront = 65,
    UseItem = 66,
    Equip = 67,
    Unequip = 68,
    MoveItem = 69,
    Craft = 70,
    Till = 71,
    Rename = 72,
    Harvest = 73,
}
export declare enum ItemType {
    None = 0,
    Amber = 1,
    AnimalSkull = 2,
    Arrow = 3,
    StoneArrowhead = 4,
    PileOfAsh = 5,
    BarkLeggings = 6,
    BarkShield = 7,
    BarkTunic = 8,
    Bone = 9,
    Branch = 10,
    CactusSpines = 11,
    Charcoal = 12,
    CobblestoneFlooring = 13,
    CookedMeat = 14,
    Earthworm = 15,
    Feather = 16,
    Fertilizer = 17,
    WaterskinOfSeawater = 18,
    FirePlough = 19,
    BeggartickSeeds = 20,
    Fossil = 21,
    GoldCoins = 22,
    GoldenChalice = 23,
    GoldenRing = 24,
    GoldenSword = 25,
    GrassSeeds = 26,
    IronOre = 27,
    WoodenDowels = 28,
    LargeRock = 29,
    LeafBedroll = 30,
    LeatherHide = 31,
    Leaves = 32,
    Limestone = 33,
    Log = 34,
    MortarAndPestle = 35,
    ButtonMushrooms = 36,
    Nopal = 37,
    Peat = 38,
    Sandstone = 39,
    PileOfGravel = 40,
    PileOfSand = 41,
    WoodenArrow = 42,
    StoneAxe = 43,
    Bandage = 44,
    WovenFabric = 45,
    CactusNeedle = 46,
    StoneShovel = 47,
    WoodenSpear = 48,
    Suture = 49,
    Raft = 50,
    RawMeat = 51,
    Raspberries = 52,
    FlyAmanita = 53,
    Rope = 54,
    MapleSeeds = 55,
    Badderlocks = 56,
    SharpGlass = 57,
    SharpRock = 58,
    Skullcap = 59,
    SmoothRock = 60,
    Soil = 61,
    StoneSpear = 62,
    Stones = 63,
    StoneWall = 64,
    String = 65,
    StrippedBark = 66,
    TannedLeather = 67,
    Tannin = 68,
    MilkThistleSeeds = 69,
    TreeBark = 70,
    HoneyFungus = 71,
    ClematisVine = 72,
    Twigs = 73,
    Waterskin = 74,
    WoodenPole = 75,
    PeatBandage = 76,
    Bow = 77,
    BowDrill = 78,
    FishingNet = 79,
    RawCod = 80,
    CookedCod = 81,
    StoneCampfire = 82,
    VineWhip = 83,
    PileOfSnow = 84,
    BarkTorch = 85,
    LitBarkTorch = 86,
    HandDrill = 87,
    SmallBag = 88,
    Shale = 89,
    SharpenedBone = 90,
    Grindstone = 91,
    RawFishSteak = 92,
    CookedFishSteak = 93,
    WaterskinOfDesalinatedWater = 94,
    BoatPaddle = 95,
    BullBoat = 96,
    RefinedSand = 97,
    Spyglass = 98,
    Flask = 99,
    RawClay = 100,
    RawClayBlowpipe = 101,
    ClayBlowpipe = 102,
    LeatherBelt = 103,
    LeatherTunic = 104,
    LeatherBoots = 105,
    LeatherCap = 106,
    LeatherGorget = 107,
    LeatherPants = 108,
    LeatherGloves = 109,
    StoneFurnace = 110,
    SandstoneKiln = 111,
    IronTongs = 112,
    Talc = 113,
    TalcumPowder = 114,
    SandCastFlask = 115,
    Lens = 116,
    PlantRoots = 117,
    LockPick = 118,
    BoneNeedle = 119,
    Pineapple = 120,
    TatteredMap = 121,
    Coal = 122,
    WroughtIron = 123,
    LimestonePowder = 124,
    IronIngot = 125,
    Backpack = 126,
    RottenMeat = 127,
    StoneHammer = 128,
    RawChicken = 129,
    CookedChicken = 130,
    StoneAnvil = 131,
    WoodenChest = 132,
    IronSword = 133,
    IronBreastplate = 134,
    IronBoots = 135,
    IronHelmet = 136,
    IronGorget = 137,
    IronGreaves = 138,
    IronGauntlets = 139,
    IronShield = 140,
    SandstoneWall = 141,
    SandstoneFlooring = 142,
    SpiderSilk = 143,
    AnimalFat = 144,
    AnimalFatTorch = 145,
    ClayFlakes = 146,
    GreenSand = 147,
    OldInstructionalScroll = 148,
    SlimeGelatin = 149,
    Glue = 150,
    CookedSpiderMeat = 151,
    SpiderMeat = 152,
    IronLockPick = 153,
    RottingVegetation = 154,
    Chives = 155,
    IronHammer = 156,
    IronSpear = 157,
    IronShovel = 158,
    IronDoubleAxe = 159,
    IronPickaxe = 160,
    Inkstick = 161,
    Coconut = 162,
    PalmLeaf = 163,
    Offal = 164,
    BoneFragments = 165,
    LitPoleTorch = 166,
    Cotton = 167,
    CottonSeeds = 168,
    CottonFabric = 169,
    BonePole = 170,
    Tourniquet = 171,
    WroughtIronPickaxe = 172,
    WroughtIronDoubleAxe = 173,
    WroughtIronShovel = 174,
    WroughtIronSpear = 175,
    WroughtIronHammer = 176,
    WroughtIronLockPick = 177,
    WroughtIronShield = 178,
    WroughtIronGauntlets = 179,
    WroughtIronGreaves = 180,
    WroughtIronGorget = 181,
    WroughtIronHelmet = 182,
    WroughtIronBoots = 183,
    WroughtIronBreastPlate = 184,
    WroughtIronSword = 185,
    WoodenWall = 186,
    WoodenFlooring = 187,
    WoodenDoor = 188,
    FishingRod = 189,
    MessageInABottle = 190,
    CarbonPowder = 191,
    PileOfCompost = 192,
    MeltedAmber = 193,
    WoodenShavings = 194,
    Deadfall = 195,
    Snare = 196,
    WaterskinOfMedicinalWater = 197,
    CharcoalBandage = 198,
    WoodenTongs = 199,
    WroughtIronTongs = 200,
    SheetOfGlass = 201,
    SolarStill = 202,
    StoneWaterStill = 203,
    Sundial = 204,
    LitAnimalFatTorch = 205,
    Sinew = 206,
    ShortBow = 207,
    LongBow = 208,
    CompositeBow = 209,
    WaterskinOfPurifiedFreshWater = 210,
    WaterskinOfUnpurifiedFreshWater = 211,
    GlassBottle = 212,
    Cork = 213,
    GlassBottleOfSeawater = 214,
    GlassBottleOfDesalinatedWater = 215,
    GlassBottleOfMedicinalWater = 216,
    GlassBottleOfPurifiedFreshWater = 217,
    GlassBottleOfUnpurifiedFreshWater = 218,
    WroughtIronArrow = 219,
    IronArrow = 220,
    StoneBullet = 221,
    WroughtIronBullet = 222,
    IronBullet = 223,
    LeatherQuiver = 224,
    Ectoplasm = 225,
    MagicalEssence = 226,
    WoodenFence = 227,
    CreatureIdol = 228,
    CordedSling = 229,
    LeatherSling = 230,
    WroughtIronArrowhead = 231,
    IronArrowhead = 232,
    Hammock = 233,
    CottonBedroll = 234,
    FeatherBedroll = 235,
    RawTaintedMeat = 236,
    CookedTaintedMeat = 237,
    StoneKnife = 238,
    RawBlindfish = 239,
    CookedBlindfish = 240,
    Pemmican = 241,
    PreparedPemmican = 242,
    Sail = 243,
    Sailboat = 244,
    Egg = 245,
    BoiledEgg = 246,
    SheafOfHay = 247,
    Niter = 248,
    Saltpeter = 249,
    BlackPowder = 250,
    FlintlockPistol = 251,
    Giblets = 252,
    ExplosiveTrap = 253,
    SkeletalMageWand = 254,
    RawClayJug = 255,
    ClayJug = 256,
    ClayJugOfSeawater = 257,
    ClayJugOfDesalinatedWater = 258,
    ClayJugOfMedicinalWater = 259,
    ClayJugOfPurifiedFreshWater = 260,
    ClayJugOfUnpurifiedFreshWater = 261,
    RawClayBrick = 262,
    ClayBrick = 263,
    ClayBrickWall = 264,
    ClayBrickFlooring = 265,
    PineappleSeeds = 266,
    RaspberrySeeds = 267,
    PricklyPearSeeds = 268,
    ClematisSeeds = 269,
    PaperSheet = 270,
    PaperMold = 271,
    Beggarticks = 272,
    MilkThistleFlowers = 273,
    DrawnMap = 274,
    TatteredShirt = 275,
    TatteredPants = 276,
    WoodenGate = 277,
    PoisonIvyLeaves = 278,
    PoisonIvySeeds = 279,
    WroughtIronChest = 280,
    IronChest = 281,
    SwitchgrassSeeds = 282,
    Apple = 283,
    SpiderEggs = 284,
    TailFeathers = 285,
    AppleSeeds = 286,
    VenomGland = 287,
    OrnateWoodenChest = 288,
    RollOfRedCarpet = 289,
    OrnateCape = 290,
    FireBladder = 291,
    GoldenKey = 292,
    WoodenSword = 293,
    ClayKiln = 294,
    ClayCampfire = 295,
    ClayFurnace = 296,
    ClayWaterStill = 297,
    SandstoneCampfire = 298,
    SandstoneFurnace = 299,
    SandstoneWaterStill = 300,
    StoneKiln = 301,
    WroughtIronAnvil = 302,
    IronAnvil = 303,
    MageRobe = 304,
    OrbOfInfluence = 305,
    AnimalClaw = 306,
    AnimalPelt = 307,
    AnimalFur = 308,
    Scales = 309,
    SharkFin = 310,
    RawReptileMeat = 311,
    CookedReptileMeat = 312,
    Tentacles = 313,
    CookedTentacles = 314,
    WormMeat = 315,
    CookedWormMeat = 316,
    StonePickaxe = 317,
    WroughtIronAxe = 318,
    IronAxe = 319,
    FertileSoil = 320,
    StoneHoe = 321,
    WroughtIronHoe = 322,
    IronHoe = 323,
    LavaBeetleHelmet = 324,
    SpruceCone = 325,
    SpruceSeeds = 326,
    SpruceNeedles = 327,
    CypressCone = 328,
    CypressSeeds = 329,
    CypressLeaves = 330,
    Lettuce = 331,
    LettuceSeeds = 332,
    ChiveSeeds = 333,
    Potato = 334,
    PotatoSeeds = 335,
    Carrot = 336,
    CarrotSeeds = 337,
    CornEar = 338,
    CornSeeds = 339,
    Cucumber = 340,
    CucumberSeeds = 341,
    Tomato = 342,
    TomatoSeeds = 343,
    Pumpkin = 344,
    PumpkinSeeds = 345,
    PricklyPearFruit = 346,
    SugarCaneStalks = 347,
    SugarCaneSeeds = 348,
    BushelOfWheat = 349,
    Wheat = 350,
    CookedPotato = 351,
    CookedCornCob = 352,
    BundleOfSwitchgrass = 353,
}
export declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    Skewer = 804,
    Fuel = 805,
    Medicinal = 806,
    Meat = 807,
    Food = 808,
    Insect = 809,
    Water = 810,
    Treasure = 811,
    Rock = 812,
    Compost = 813,
    Fabric = 814,
    Needle = 815,
    Cordage = 816,
    SharpenedRock = 817,
    Container = 818,
    Pole = 819,
    LightSource = 820,
    Repair = 821,
    Tongs = 822,
    Hammer = 823,
    Preservative = 824,
    Reinforce = 825,
    GlassBottleOfPotableWater = 826,
    Bullet = 827,
    Transmogrify = 828,
    WaterskinOfPotableWater = 829,
    Pulp = 830,
    ClayJugOfPotableWater = 831,
    Powder = 832,
    Equipment = 833,
    Gardening = 834,
    Firemaking = 835,
    Bedding = 836,
    Tool = 837,
    Weapon = 838,
    Health = 839,
    Travel = 840,
    Housing = 841,
    Heating = 842,
    Storage = 843,
    Trap = 844,
    Other = 845,
    RawMeat = 846,
    CookedMeat = 847,
    ContainerOfSeawater = 848,
    ContainerOfDesalinatedWater = 849,
    ContainerOfMedicinalWater = 850,
    ContainerOfPurifiedFreshWater = 851,
    ContainerOfUnpurifiedFreshWater = 852,
    Campfire = 853,
    Furnace = 854,
    Kiln = 855,
    WaterStill = 856,
    Anvil = 857,
    Seed = 858,
    Fruit = 859,
    Vegetable = 860,
    Tinder = 861,
    Bone = 862,
    Kindling = 863,
    Last = 864,
}
export interface IItemTypeGroup {
    types: Array<ItemType | ItemTypeGroup>;
    default: ItemType | ItemTypeGroup;
    name: string;
}
export declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Gravel = 7,
    Dirt = 8,
    Sand = 9,
    Snow = 10,
    Swamp = 11,
    Clay = 12,
    Ash = 13,
    Rocks = 14,
    RocksWithIron = 15,
    RocksWithTalc = 16,
    RocksWithCoal = 17,
    RocksWithLimestone = 18,
    CobblestoneFlooring = 19,
    Sandstone = 20,
    SandstoneFlooring = 21,
    SandstoneWithIron = 22,
    SandstoneWithNiter = 23,
    WoodenFlooring = 24,
    ClayBrickFlooring = 25,
    CaveEntrance = 26,
    RedCarpet = 27,
    Lava = 28,
    FertileDirt = 29,
}
export declare enum DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayBrickWall = 3,
    SandstoneWall = 4,
    StoneWall = 5,
    SetExplosiveTrap = 6,
    SetDeadfall = 7,
    SetSnare = 8,
    SetHobgoblinSnare = 9,
    SolarStill = 10,
    WoodenChest = 11,
    LockedWoodenChest = 12,
    CreatureIdol = 13,
    Grass = 14,
    Clematis = 15,
    MilkThistles = 16,
    ButtonMushrooms = 17,
    FlyAmanita = 18,
    Switchgrass = 19,
    Badderlocks = 20,
    Chives = 21,
    Pineapple = 22,
    PileOfRocks = 23,
    RaspberryBush = 24,
    Beggarticks = 25,
    Cotton = 26,
    PricklyPears = 27,
    DeadBush = 28,
    StoneWaterStill = 29,
    LitStoneWaterStill = 30,
    StoneCampfire = 31,
    LitStoneCampfire = 32,
    SandstoneKiln = 33,
    LitSandstoneKiln = 34,
    StoneFurnace = 35,
    LitStoneFurnace = 36,
    TorchStand = 37,
    LitTorchStand = 38,
    StoneAnvil = 39,
    Acid = 40,
    CaveEntrance = 41,
    WoodenDoorOpen = 42,
    WoodenGate = 43,
    WoodenGateOpen = 44,
    PoisonIvy = 45,
    WroughtIronChest = 46,
    IronChest = 47,
    OrnateWoodenChest = 48,
    SkeletalRemains = 49,
    ClayKiln = 50,
    LitClayKiln = 51,
    ClayCampfire = 52,
    LitClayCampfire = 53,
    ClayFurnace = 54,
    LitClayFurnace = 55,
    ClayWaterStill = 56,
    LitClayWaterStill = 57,
    SandstoneCampfire = 58,
    LitSandstoneCampfire = 59,
    SandstoneFurnace = 60,
    LitSandstoneFurnace = 61,
    SandstoneWaterStill = 62,
    LitSandstoneWaterStill = 63,
    StoneKiln = 64,
    LitStoneKiln = 65,
    WroughtIronAnvil = 66,
    IronAnvil = 67,
    MapleTree = 68,
    AppleTree = 69,
    SpruceTree = 70,
    CypressTree = 71,
    CoconutTree = 72,
    Lettuce = 73,
    PotatoPlant = 74,
    Carrots = 75,
    CornStalks = 76,
    CucumberPlant = 77,
    TomatoPlant = 78,
    Pumpkin = 79,
    SugarCaneStalks = 80,
    Wheat = 81,
}
export declare enum DoodadTypeGroup {
    Invalid = 400,
    LitCampfire = 401,
    LitFurnace = 402,
    LitKiln = 403,
    LitWaterStill = 404,
    Anvil = 405,
    Tree = 406,
    Fungi = 407,
    Last = 408,
}
export declare enum GrowingStage {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Dead = 6,
}
export declare enum CreatureType {
    Slime = 0,
    JellyCube = 1,
    GiantSpider = 2,
    Bear = 3,
    Rabbit = 4,
    Snake = 5,
    GiantRat = 6,
    Rat = 7,
    VampireBat = 8,
    GreyWolf = 9,
    Imp = 10,
    Bogling = 11,
    LivingRock = 12,
    Shark = 13,
    Zombie = 14,
    Skeleton = 15,
    PirateGhost = 16,
    TimeSkitter = 17,
    Chicken = 18,
    TrapdoorSpider = 19,
    FireElemental = 20,
    Cod = 21,
    Hobgoblin = 22,
    LivingMushroom = 23,
    Kraken = 24,
    Blindfish = 25,
    Harpy = 26,
    AcidSpitterDemon = 27,
    SkeletalMage = 28,
    Blood = 29,
    ClawWorm = 30,
    Drake = 31,
    Sandcat = 32,
    WaterBlood = 33,
    LavaBeetle = 34,
    Goat = 35,
}
export declare enum Hairstyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Straight = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
}
export declare enum HairColor {
    "#e7c978" = 0,
    "#b84627" = 1,
    "#87501e" = 2,
    "#422116" = 3,
    "#28222a" = 4,
    "#bfb0a8" = 5,
    "#ffffff" = 6,
}
export declare enum SkinColor {
    "#fdd8d4" = 0,
    "#cab286" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#89623a" = 4,
    "#613429" = 5,
    "#392321" = 6,
}
export declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Archery = 2,
    Blacksmithing = 3,
    Botany = 4,
    Camping = 5,
    Cartography = 6,
    Claythrowing = 7,
    Cooking = 8,
    Fishing = 9,
    Fletching = 10,
    Glassblowing = 11,
    Leatherworking = 12,
    LockPicking = 13,
    Lumberjacking = 14,
    Mining = 15,
    Mycology = 16,
    Parrying = 17,
    Stonecrafting = 18,
    Swimming = 19,
    Tactics = 20,
    Tailoring = 21,
    Throwing = 22,
    Tinkering = 23,
    Trapping = 24,
    Woodworking = 25,
    Taming = 26,
    Gardening = 27,
}
export declare enum Music {
    ShipWrecked = 0,
    DarkerWorld = 1,
    TheFirstSpark = 2,
    NomadsHeartBeat = 3,
    TheWildBorn = 4,
    NightOwl = 5,
    Savage = 6,
    Underworld = 7,
    ShudderSounds = 8,
}
export declare enum SfxType {
    Bow = 0,
    Craft = 1,
    Death = 2,
    Eating = 3,
    Exceptional = 4,
    Fail = 5,
    TreeHit = 6,
    Hit = 7,
    Hurt = 8,
    Miss = 9,
    CreatureHit = 10,
    CreatureNoise = 11,
    PickUp = 12,
    RockHit = 13,
    SandstoneHit = 14,
    Swim = 15,
    Throw = 16,
    Trample = 17,
    Walk = 18,
    Water = 19,
    Click = 20,
    Damaged = 21,
    Chat = 22,
}
export declare const equipTypeToMessage: Message[];
export declare const recipeLevelToMessage: Message[];
export declare const damageTypeToMessage: Message[];
export declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
    Ghost = 4,
}
export declare enum ObjectContext {
    None = 0,
    Inventory = 1,
    TileItem = 2,
    Doodad = 3,
    TileEvent = 4,
    Corpse = 5,
}
export declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 11,
    ShortPause = 13,
    Collision = 40,
    HotKey = 20,
    RealTimeTick = 40,
    TurnDirection = 2,
}
export declare enum StatType {
    EnemyHealth = 0,
    Stat = 1,
    Stamina = 2,
    Hunger = 3,
    Health = 4,
    Thirst = 5,
}
export declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burned = 2,
}
export declare enum ItemQuality {
    None = 0,
    Random = 1,
    Exceptional = 2,
    Remarkable = 3,
    Legendary = 4,
}
export declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Creature = 8,
    Terrain = 16,
    All = 65535,
}
export declare enum OnEquipType {
    LightSource = 0,
    Telescopy = 1,
}
export declare const itemQualitySortOrder: {
    [index: number]: number;
};
export declare const onEquipTypes: IOnEquipType;
export declare enum KeyBind {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3,
    Idle = 4,
    One = 5,
    Two = 6,
    Three = 7,
    Four = 8,
    Five = 9,
    Six = 10,
    Seven = 11,
    Eight = 12,
    Nine = 13,
    Escape = 14,
    Inventory = 15,
    Help = 16,
    Skills = 17,
    Messages = 18,
    Options = 19,
    Alt = 20,
    Shift = 21,
    Equipment = 22,
    Crafting = 23,
    Dismantle = 24,
    Actions = 25,
    Milestones = 26,
    Enter = 27,
    Ten = 28,
    Eleven = 29,
    Twelve = 30,
    PrimaryMouse = 31,
    SecondaryMouse = 32,
    Touch = 33,
    LeftHand = 34,
    RightHand = 35,
    Chat = 36,
}
export declare enum BindType {
    Keyboard = 0,
    Mouse = 1,
    Other = 2,
}
export declare const keybindOrder: KeyBind[];
export declare const defaultBinds: IBindArray;
export declare const playerKeyBinds: KeyBind[];
export declare function addDefaultBind(key: KeyBind, value: number, type?: BindType, bindable?: boolean): void;
export declare function removeDefaultKeybind(key: KeyBind): void;
export declare const hotKeyNumbers: KeyBind[];
export declare enum TurnType {
    CheckUnderPlayer = 0,
    DontEnterCaves = 1,
    ForcePickUp = 2,
}
export declare const keyCodes: string[];
export declare enum ScreenId {
    None = 0,
    Cover = 1,
    Title = 2,
    Game = 3,
}
export declare enum TitleScreenId {
    Default = 0,
    EndGame = 1,
    JoinGame = 2,
    Options = 3,
}
export declare enum DialogId {
    Inventory = 0,
    Crafting = 1,
    Equipment = 2,
    Messages = 3,
    Skills = 4,
    Milestones = 5,
    Map = 6,
    Container = 7,
    Custom = 8,
}
export declare enum SortType {
    Name = 0,
    Group = 1,
    Weight = 2,
    Recent = 3,
    Skill = 4,
    Decay = 5,
    Quality = 6,
    Category = 7,
    Durability = 8,
    DiscoveredTime = 9,
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1,
}
export declare enum LoadingType {
    Normal = 0,
    Rest = 1,
}
export declare enum CraftStatus {
    Invalid = 0,
    Failed = 1,
    Success = 2,
}
export declare enum InputRecordType {
    KeyDown = 0,
    KeyUp = 1,
    MouseDown = 2,
    MouseUpOrLeave = 3,
    MouseMove = 4,
    MouseScroll = 5,
}
export declare enum CaseStyle {
    PascalCase = 0,
    CamelCase = 1,
    SnakeCase = 2,
    KebabCase = 3,
}
export declare enum SentenceCaseStyle {
    None = 0,
    Title = 1,
    Sentence = 2,
}
export interface IOnEquipType {
    [index: number]: {};
}
export interface IBindArray {
    [index: number]: IBind;
}
export interface IModBindArray {
    [index: string]: IBind;
}
export interface IBind {
    value: number;
    type: BindType;
}
export interface IKeyBind {
    [index: number]: number;
}
export interface IVersionInfo {
    str: string;
    stage: "beta" | "release";
    major: number;
    minor: number;
    patch: number;
    name?: string;
    date?: Date;
}
export interface IPoint {
    x: number;
    y: number;
}
export interface IPointZ extends IPoint {
    z: number;
}
export interface IObject<T> {
    type: T;
    id: number;
}
export interface IObjectOptions {
    decay?: number;
    minDur?: number;
    maxDur?: number;
    quality?: ItemQuality;
    renamed?: string;
}
export interface IObjectDescription {
    name?: string;
    description?: string;
    suffix?: string;
    prefix?: string;
    decayMax?: number;
    skillUse?: SkillType;
    weightCapacity?: number;
    imagePath?: string;
}
export interface IModdable {
    modIndex?: number;
}
export interface TatteredMap extends IPointZ {
    reinitialize?: boolean;
}
export interface IInputMovement extends IPoint {
    keyBind: KeyBind;
    direction: FacingDirection;
}
export interface ISeeds {
    base: number | string;
    saved: number;
}
export interface IHighscore {
    name: string;
    message: string;
    turns: number;
    score: number;
    dailyChallenge: boolean;
    date: number;
    talent?: number;
}
export interface IMessagePack {
    message?: Message | string;
    type?: MessageType;
    args?: string | number | any[];
    argSkipCasing?: boolean;
}
export interface IInspect {
    type?: InspectType;
    onlyShowInTooltip?: boolean;
    messagePack: IMessagePack;
}
export interface IRGB {
    r: number;
    g: number;
    b: number;
}
export declare enum Difficulty {
    Hardcore = 0,
    Casual = 1,
}
export declare enum WeightType {
    Normal = 0,
    Static = 1,
    Min = 2,
    Max = 3,
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
}
export declare enum FireType {
    None = 0,
    Doodad = 1,
    Fire = 2,
    Lava = 3,
}
export interface IResourceItem {
    type: ItemType;
    chance?: number;
    chanceOutOf?: number;
}
export interface IDoodadResource {
    [index: number]: IResourceItem[];
}
export interface ITerrainResource {
    items: ITerrainResourceItem[];
    defaultItem?: ItemType;
}
export interface ITerrainResourceItem extends IResourceItem {
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export declare enum WeightStatus {
    None = 0,
    Overweight = 1,
    Encumbered = 2,
}
