export declare const messages: Description<string>;
export default messages;
export declare function makeString(msg: Message | string, ...variables: any[]): string;
export declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
}
export declare enum Message {
    None = 0,
    AberrantCreatureDroppedItem = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    AllEquipmentUnEquipped = 8,
    AlreadyFullyRepaired = 9,
    AlreadyPreserved = 10,
    AlreadyWaterInStill = 11,
    AppearedNotEffectiveForGathering = 12,
    AppearsToBeAberrant = 13,
    ArmorAppeared = 14,
    ArmorProtectedFromInjuryAgainst = 15,
    Attack = 16,
    AttemptedToDropAllIntoFire = 17,
    AttemptedToPlaceAllOnGround = 18,
    AttemptToTill = 19,
    AwakeToFindYourself = 20,
    Back = 21,
    BadlyBurnedLostHealth = 22,
    BeenPoisoned = 23,
    BeginSleeping = 24,
    BeginUsingRaft = 25,
    Belt = 26,
    BleedingHasStopped = 27,
    BleedingProfusely = 28,
    BleedingToDeathLostHealth = 29,
    Blunt = 30,
    BrokeIntoPieces = 31,
    BrokenOnImpact = 32,
    BrokenWhileFiring = 33,
    Build = 34,
    Burned = 35,
    CannotAddAnyMoreFuel = 36,
    CannotBePerformedOverWater = 37,
    CannotBePreserved = 38,
    CannotBeReinforced = 39,
    CannotBeRepaired = 40,
    CannotBeTamed = 41,
    CannotBeTransmogrified = 42,
    CannotBuildHere = 43,
    CannotDoThatHere = 44,
    CannotDropHere = 45,
    CannotEquipThatThere = 46,
    CannotFishFor = 47,
    CannotGatherHere = 48,
    CannotImproveGrowingSpeed = 49,
    CannotInWater = 50,
    CannotLeave = 51,
    CannotPickupWhenFull = 52,
    CannotPickUpWhileLit = 53,
    CannotPickUpWithItemsInside = 54,
    CannotPlaceContainerInItself = 55,
    CannotPlaceHere = 56,
    CannotPlaceThatFromHere = 57,
    CannotPlaceThatHere = 58,
    CannotPlantHereTilled = 59,
    CannotRepairWhileLit = 60,
    CannotRestHere = 61,
    CannotSeeHere = 62,
    CannotSleepHere = 63,
    CannotStartFireHere = 64,
    CannotToTellTime = 65,
    CarryingTooMuchWeight = 66,
    CarvedUpCorpse = 67,
    CarveWithTool = 68,
    Carving = 69,
    CastYourLine = 70,
    Category = 71,
    CaughtFish = 72,
    ChatPingCommand = 73,
    ChatPlayerMessage = 74,
    ChatPlayersCommand = 75,
    ChatUnknownCommand = 76,
    Chest = 77,
    ClearMessages = 78,
    Clockwise = 79,
    CloseDoor = 80,
    CollectObjectWithHands = 81,
    Consumed = 82,
    Container = 83,
    Cook = 84,
    Cooked = 85,
    Corpse = 86,
    CorruptSaveDetected = 87,
    CouldNotDecipher = 88,
    Counterclockwise = 89,
    Craft = 90,
    Crafted = 91,
    Crafts = 92,
    CreatureAlreadyFullHealth = 93,
    CreatureAngered = 94,
    CreatureAppears = 95,
    CreatureAppearsInjured = 96,
    CreatureAppearsUninjured = 97,
    CreatureAppeased = 98,
    CreatureIdolAttractedCreature = 99,
    CreatureIsAtPercentHealth = 100,
    CreatureIsBarelyHurt = 101,
    CreatureIsInjured = 102,
    CreatureIsSeverelyDamaged = 103,
    CreatureIsUninjured = 104,
    CreatureSeemsHurt = 105,
    CreatureSeemsQuiteInjured = 106,
    CreatureSeemsUnharmed = 107,
    CreatureUntamed = 108,
    CuredYourPoison = 109,
    Cut = 110,
    DailyChallengeMode = 111,
    DamageAppeared = 112,
    DamagedByPouring = 113,
    DayQuarter1 = 114,
    DayQuarter2 = 115,
    DayQuarter3 = 116,
    DayQuarter4 = 117,
    DealtNoDamageToYou = 118,
    DeathBy = 119,
    DeathByBleeding = 120,
    DeathByBurning = 121,
    DeathByConsumption = 122,
    DeathByDrowning = 123,
    DeathByExhaustion = 124,
    DeathByPoison = 125,
    DeathBySteppingOn = 126,
    DeathByTrap = 127,
    Decay = 128,
    DefaultGameName = 129,
    DefaultPlayerName = 130,
    DestroyedFromUse = 131,
    DestroyedGrowingByPickingItUp = 132,
    DestroyedGrowingGrassByPickingItUp = 133,
    Dexterity = 134,
    DexterityIncreasing = 135,
    DidNotSeemToBeHurting = 136,
    DifficultyEasy = 137,
    DifficultyHard = 138,
    DifficultyInsane = 139,
    DifficultyMedium = 140,
    DifficultySimple = 141,
    DifficultyVeryEasy = 142,
    DifficultyVeryHard = 143,
    Dig = 144,
    DigAway = 145,
    Digging = 146,
    DigWithHands = 147,
    Disabled = 148,
    Disassemble = 149,
    DisassembleAction = 150,
    Disassembling = 151,
    DiscoveredCaveEntrance = 152,
    DiscoveredInTheBottle = 153,
    Dismantle = 154,
    DismantleAction = 155,
    DismantleLabel = 156,
    Dismantling = 157,
    DismantlingRequires = 158,
    DoNotHaveTreasureMaps = 159,
    DoNotProduceAnyResources = 160,
    DoodadAppearsDamaged = 161,
    DoodadAppearsOnVergeOfBreaking = 162,
    DoodadAppearsUnscathed = 163,
    DoodadCauseStatus = 164,
    DoodadShowsSignsOfWear = 165,
    DrewSurroundings = 166,
    Drink = 167,
    Drop = 168,
    DropAll = 169,
    DropAllIntoFire = 170,
    DropAllOfSameQuality = 171,
    DroppedAllIntoDepths = 172,
    DroppedIntoDepths = 173,
    DroppedIntoFire = 174,
    DueToDehydration = 175,
    DueToStarvation = 176,
    DugTreasureOut = 177,
    DumpContentsOfContainerInInventory = 178,
    Durability = 179,
    DyingOfDehydration = 180,
    EarnedMilestone = 181,
    Effective = 182,
    Enabled = 183,
    EquipTo = 184,
    ErrorHasOccured = 185,
    Expert = 186,
    ExtinguishedFire = 187,
    ExtinguishedTorch = 188,
    FailedToAddFuelToTorch = 189,
    FailedToCatchFish = 190,
    FailedToCauseDamage = 191,
    FailedToDrawMap = 192,
    FailedToPickLock = 193,
    FailedToPlant = 194,
    FailedToPreserve = 195,
    FailedToReinforce = 196,
    FailedToRepair = 197,
    FailedToStartFire = 198,
    FailedToTame = 199,
    FailedToTransmogrify = 200,
    FarAwayFromTreasure = 201,
    Feet = 202,
    FeltBurningPainLostHealth = 203,
    FewMinutes = 204,
    Filled = 205,
    FilledFrom = 206,
    Fire = 207,
    FireAlmostExtinguished = 208,
    FireAroundYouIsWarm = 209,
    FiredIntoObstacle = 210,
    FireIsHealthy = 211,
    FireIsRaging = 212,
    FireIsStruggling = 213,
    FireOverflowed = 214,
    FireSource = 215,
    Food = 216,
    FullyDecodedMap = 217,
    GainedHealth = 218,
    GainedHunger = 219,
    GainedStamina = 220,
    GainedThirst = 221,
    GameHasBeenSavedIsTakingUpMB = 222,
    Gather = 223,
    GatherDestroy = 224,
    Gathering = 225,
    GatherWithHands = 226,
    GhostNoActions = 227,
    GoatHasNoMilk = 228,
    GrabAll = 229,
    Group = 230,
    HackAway = 231,
    Hands = 232,
    HandsNotEffectiveForDigging = 233,
    Harvest = 234,
    Harvesting = 235,
    HarvestWithHands = 236,
    HasBeenHurtByATrap = 237,
    HasDecayed = 238,
    HasHitYouForDamage = 239,
    HasSetTrapOffNoDamage = 240,
    HasSplit = 241,
    Head = 242,
    Held = 243,
    Help = 244,
    HelpGrow = 245,
    HighscoreTurns = 246,
    Hints = 247,
    HintsDisabled = 248,
    HintsEnabled = 249,
    HitForDamage = 250,
    Hour = 251,
    Hours = 252,
    HurtHandsHittingWithoutWeapons = 253,
    HurtHandsWithNoTool = 254,
    Ineffective = 255,
    InExactLocationOfTreasure = 256,
    InjuredFromTrap = 257,
    InNeedOfRepair = 258,
    Inspect = 259,
    Intermediate = 260,
    Inventory = 261,
    ItContains = 262,
    ItsWeightCapacity = 263,
    Jump = 264,
    Killed = 265,
    LabelAdditionalRequirements = 266,
    LabelAttackFromTactics = 267,
    LabelAuthor = 268,
    LabelBase = 269,
    LabelBaseDefense = 270,
    LabelBenignity = 271,
    LabelBluntResist = 272,
    LabelCanIncrease = 273,
    LabelCraftingReputation = 274,
    LabelDecay = 275,
    LabelDefense = 276,
    LabelDefenseFromParrying = 277,
    LabelDifficulty = 278,
    LabelDurability = 279,
    LabelEquip = 280,
    LabelFireResist = 281,
    LabelGrouping = 282,
    LabelHave = 283,
    LabelHp = 284,
    LabelLastUpdated = 285,
    LabelLeftHandAttack = 286,
    LabelLevel = 287,
    LabelLightSourceWhenLit = 288,
    LabelMalignity = 289,
    LabelOnCure = 290,
    LabelOnDrink = 291,
    LabelOnEat = 292,
    LabelOnEquip = 293,
    LabelOnHeal = 294,
    LabelPiercingResist = 295,
    LabelRange = 296,
    LabelRanged = 297,
    LabelRangedAttack = 298,
    LabelRangedDamage = 299,
    LabelReputationImpact = 300,
    LabelRequiredMods = 301,
    LabelRequires = 302,
    LabelResists = 303,
    LabelRightHandAttack = 304,
    LabelScore = 305,
    LabelSkill = 306,
    LabelSlashingResist = 307,
    LabelStokeFireStrength = 308,
    LabelThrowDamageType = 309,
    LabelTicks = 310,
    LabelTrapDamage = 311,
    LabelTurns = 312,
    LabelUse = 313,
    LabelUses = 314,
    LabelVersion = 315,
    LabelVulnerabilities = 316,
    LabelWeight = 317,
    LabelWeightCapacity = 318,
    LabelWeightReduction = 319,
    LastPlaceYouLeftOff = 320,
    LearnedHowToCreate = 321,
    LeftHand = 322,
    LeftHandEquip = 323,
    Legs = 324,
    LikelyFailures = 325,
    LoseBonesLayBleaching = 326,
    LoseEndIsBeginning = 327,
    LoseSadlyNoTrace = 328,
    LostHealth = 329,
    LostHunger = 330,
    LostStamina = 331,
    LostThirst = 332,
    MapNotOfThisArea = 333,
    MaterialsDestroyed = 334,
    Metabolism = 335,
    MetabolismSlowed = 336,
    MilestoneIsHidden = 337,
    MilestoneIsInvisible = 338,
    Milk = 339,
    Milking = 340,
    MissedWith = 341,
    ModFailedToImportSaveGame = 342,
    ModImportedSaveGame = 343,
    ModImportedSaveGameV2 = 344,
    MouseButton = 345,
    MoveAllOfSameQualityToInventory = 346,
    MoveAllOfSameQualityToLastOpenedContainer = 347,
    MoveAllOfSameQualityToOpenedContainer = 348,
    MoveAllToInventory = 349,
    MoveAllToLastOpenedContainer = 350,
    MoveAllToOpenedContainer = 351,
    MoveOverTrapButDoNotSetOff = 352,
    MoveToInventory = 353,
    MoveToLastOpenedContainer = 354,
    MoveToOpenedContainer = 355,
    MultiplayerGamePaused = 356,
    MultiplayerGameResumed = 357,
    MultiplayerPlayerConnected = 358,
    MultiplayerPlayerDied = 359,
    MultiplayerPlayerDisconnected = 360,
    MultiplayerPlayerJoined = 361,
    MustBeEquippedToIgnite = 362,
    MustCastIntoWater = 363,
    Mysteriously = 364,
    Name = 365,
    NearlyBurnedEquipmentProtectedYou = 366,
    Neck = 367,
    NeedAShovelToDigTreasure = 368,
    NeedFishingNetForTreasure = 369,
    NeedFreeHandToShoot = 370,
    NeedToEquipToShoot = 371,
    NeedToStartTravelsOutside = 372,
    NeedWaterForRaft = 373,
    NightQuarter1 = 374,
    NightQuarter2 = 375,
    NightQuarter3 = 376,
    NightQuarter4 = 377,
    NoAmmunitionForThatWeapon = 378,
    NoBlackPowderToFireWeapon = 379,
    NoFireToStokeWith = 380,
    NoFishAtLocation = 381,
    NoInkToDrawMap = 382,
    NoKindlingOrFuelItemsToStartFire = 383,
    NoKindlingToStartFire = 384,
    NoLongerFeelPainOfBeingBurned = 385,
    NoMoreRoomInContainer = 386,
    NoNeedToStokeFire = 387,
    NoRoomForImprovement = 388,
    NoRoomToDrop = 389,
    NotAvailable = 390,
    NotEnoughPurifiedWaterYet = 391,
    NotEnoughTreasureToReturn = 392,
    NotFacingCreatureToHeal = 393,
    NotFacingLockedObject = 394,
    NotFacingValidItem = 395,
    NothingHereToCarve = 396,
    NothingHereToFill = 397,
    NothingToGetFromThis = 398,
    NothingToHarvestFromThisGather = 399,
    NothingUsefulToHarvestYet = 400,
    NoTinderToStartFire = 401,
    NotInRangeOfTreasure = 402,
    NotSuitableToPlant = 403,
    NoWaterInStill = 404,
    NoWhereNearTreasure = 405,
    NumberEight = 406,
    NumberFive = 407,
    NumberFour = 408,
    NumberNine = 409,
    NumberOne = 410,
    NumberSeven = 411,
    NumberSix = 412,
    NumberTen = 413,
    NumberThree = 414,
    NumberTwo = 415,
    ObjectIsLocked = 416,
    ObjectIsLockedAttemptToBreakIt = 417,
    Offer = 418,
    OpenDoor = 419,
    OpenFolderFailed = 420,
    OverEatingLostStamina = 421,
    OverHydratingLostStamina = 422,
    Pack = 423,
    PaperTurnedToMush = 424,
    PartiallyDecodedMap = 425,
    PastExperiencesProvideBenefits = 426,
    PenultimateAnd = 427,
    PetCreature = 428,
    PickAway = 429,
    PickupAllItems = 430,
    PickupItem = 431,
    Piercing = 432,
    Place = 433,
    PlaceAllOnGround = 434,
    PlacedOnGround = 435,
    Plant = 436,
    PlantedInGround = 437,
    PlantHighlyFertile = 438,
    PlantIsFertile = 439,
    PlantIsNotFertile = 440,
    Poisoned = 441,
    PoisonedLostHealth = 442,
    PoisonWorkedItsCourse = 443,
    PouredOut = 444,
    PouredOutOnYourself = 445,
    PouredWaterIntoStill = 446,
    Preservation = 447,
    Preserve = 448,
    PreservedFood = 449,
    PurifiedWaterInStill = 450,
    Quality = 451,
    Recent = 452,
    RefusedToBeTamed = 453,
    Reinforce = 454,
    Reinforcement = 455,
    Release = 456,
    RemovedBlood = 457,
    RemoveFromQuickslot = 458,
    Repair = 459,
    RequiredForDisassembleLabel = 460,
    RequiredForDisassembly = 461,
    RequiresFireToBeLit = 462,
    RequiresYouFacingFireSource = 463,
    RequiresYouToBeAround = 464,
    Resistant = 465,
    Rest = 466,
    Rested = 467,
    RestingOnGroundNotEffective = 468,
    RestInterrupted = 469,
    RestInterruptedLoudNoise = 470,
    RestInterruptedPain = 471,
    RestInterruptedStirring = 472,
    RestOnGround = 473,
    ReturnedToCivilization = 474,
    ReturningToCivilizationSetOffAgain = 475,
    ReturnsToLife = 476,
    RightHand = 477,
    RightHandEquip = 478,
    SailedToCivilization = 479,
    Score = 480,
    ScrollProvidedNoUsefulInsight = 481,
    SeaweedFromWater = 482,
    SeemsToHaveDrawnEnergy = 483,
    SetTrapOffButNoDamage = 484,
    SetUp = 485,
    ShadowInTheWater = 486,
    Simple = 487,
    Skill = 488,
    SkillHasRaised = 489,
    Slashing = 490,
    Sleep = 491,
    Slept = 492,
    Soil = 493,
    SomethingInTheWayOf = 494,
    SomethingInTheWayOfCarveFirst = 495,
    SomethingInTheWayOfFire = 496,
    SomethingInTheWayOfFishing = 497,
    SomethingInTheWayOfPerforming = 498,
    SomethingInTheWayOfPlacing = 499,
    SomethingInTheWayOfPlanting = 500,
    SomethingInWayOfClosingDoor = 501,
    SoothedYourBurnInjuries = 502,
    Sort = 503,
    SortedByCategory = 504,
    SortedByDecay = 505,
    SortedByDurability = 506,
    SortedByGroup = 507,
    SortedByName = 508,
    SortedByQuality = 509,
    SortedByRecent = 510,
    SortedBySkill = 511,
    SortedByUnlockedTime = 512,
    SortedByWeight = 513,
    StaminaIsFull = 514,
    StartedFire = 515,
    Starting = 516,
    StartTravelInWater = 517,
    StarvingToDeath = 518,
    SteppingOnHasInjuredYouForDamage = 519,
    StillHasNoWaterToPurify = 520,
    StirredUpClawWorm = 521,
    StirredUpCreature = 522,
    Stoking = 523,
    StoppedYourBleeding = 524,
    StopUsingRaft = 525,
    Strength = 526,
    StrengthIncreasing = 527,
    SummonedGuardiansByDiggingTreasure = 528,
    SunNotBrightEnoughToStartFire = 529,
    Tame = 530,
    TamedAppearsAngered = 531,
    TamedAppearsContended = 532,
    TamedAppearsHappy = 533,
    TamedAppearsUpset = 534,
    TamedCreature = 535,
    TeleportBlocked = 536,
    Teleported = 537,
    ThereIsNoSunToStartFire = 538,
    ThereIsNothingToMilk = 539,
    ThisCannotBeMilked = 540,
    Throw = 541,
    ThrownIntoDepths = 542,
    ThrownIntoObstacle = 543,
    Till = 544,
    Tilling = 545,
    TimeIs = 546,
    TimeIsDawn = 547,
    TimeIsDaytime = 548,
    TimeIsDusk = 549,
    TimeIsNighttime = 550,
    TimeIsSunrise = 551,
    TimeIsSunset = 552,
    TooDamaged = 553,
    TooExhaustedToJump = 554,
    TrampledFire = 555,
    TrampledIntoGround = 556,
    TrampleIntoGround = 557,
    Trampling = 558,
    Transmogrification = 559,
    Transmogrified = 560,
    TrapStoppedYou = 561,
    TravelToFarOffLands = 562,
    TreasureIsBlocked = 563,
    True = 564,
    UnEquip = 565,
    UnEquipAll = 566,
    Unknown = 567,
    UnknownItem = 568,
    UnlockedChest = 569,
    UnlockedTime = 570,
    UnpurifiedWaterInStill = 571,
    URLHasOpenedInWebBrowser = 572,
    UsedToSpeedUpGrowing = 573,
    UsingBareFistsToFight = 574,
    UsingBareHands = 575,
    Vulnerable = 576,
    WaitUntilFireCooledToGetWater = 577,
    WalkingDistanceOfTreasure = 578,
    Water = 579,
    WaterGathering = 580,
    WaterPutOutFire = 581,
    Weight = 582,
    WeightCapacity = 583,
    WildGoatRefusedToBeMilked = 584,
    WinFindWayBackToCivilization = 585,
    WinSailBackWithRiches = 586,
    WinTravelledBackToCivilization = 587,
    With = 588,
    WorkingYourselfIntoExhaustion = 589,
    WorkingYourselfIntoExhaustionAndDrowning = 590,
    WorkshopHasBeenOpenedPressOkAfter = 591,
    WouldHaveNoEffect = 592,
    YouAte = 593,
    YouBeginResting = 594,
    YouCannotDoThatYet = 595,
    YouCollected = 596,
    YouCooledLava = 597,
    YouCrafted = 598,
    YouDied = 599,
    YouDisassembled = 600,
    YouDismantled = 601,
    YouDrank = 602,
    YouEquip = 603,
    YouFailedTo = 604,
    YouFailedToHeal = 605,
    YouFailedToHealCreature = 606,
    YouFire = 607,
    YouGathered = 608,
    YouHardenedCooledLava = 609,
    YouHarvested = 610,
    YouHaveDied = 611,
    YouHaveEnabledDisabled = 612,
    YouHaveHealedCreature = 613,
    YouHaveKilled = 614,
    YouHaveReleased = 615,
    YouHaveTamed = 616,
    YouNoticeBecomeEnraged = 617,
    YouNoticeDying = 618,
    YouNoticeFertilityDecreasing = 619,
    YouNoticeFertilityIncreasing = 620,
    YouNoticeGrowing = 621,
    YouNoticeLavaCooling = 622,
    YouNoticeLavaHardening = 623,
    YouNoticePerish = 624,
    YouNoticeStumbleInjureItself = 625,
    YouNoticeWoundsClosing = 626,
    YouNoticeZombieHorde = 627,
    YouOfferedToCreature = 628,
    YouOpen = 629,
    YouPacked = 630,
    YouPickedUp = 631,
    YouRepair = 632,
    YourFist = 633,
    YourHands = 634,
    YourRubbingNoEffect = 635,
    YouRub = 636,
    YouSalvaged = 637,
    YouSee = 638,
    YouSeeAnAberrant = 639,
    YouSeeDrop = 640,
    YouSeeEngulfFire = 641,
    YouSeeLay = 642,
    YouSeeLayingTrap = 643,
    YouSeeSpewLava = 644,
    YouSeeSpitAcid = 645,
    YouSeeSpringForth = 646,
    YouSeeSummon = 647,
    YouSeeSwampFlood = 648,
    YouSeparate = 649,
    YouSetTheTrapOff = 650,
    YouThrew = 651,
    YouTilled = 652,
    YouUnequip = 653,
    YouUsed = 654,
}
