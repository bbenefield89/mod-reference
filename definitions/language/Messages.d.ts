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
    All = 8,
    AllEquipmentUnEquipped = 9,
    AlreadyDesalinatedWaterInStill = 10,
    AlreadyFullyRepaired = 11,
    AlreadyPreserved = 12,
    AlreadyWaterInStill = 13,
    AnUnknownItem = 14,
    AppearedNotEffectiveForGathering = 15,
    AppearsInjured = 16,
    AppearsToBeAberrant = 17,
    AppearsUninjured = 18,
    ArmorAppeared = 19,
    ArmorProtectedFromInjuryAgainst = 20,
    Attack = 21,
    AttemptedToDropAllIntoFire = 22,
    AttemptedToPlaceAllOnGround = 23,
    AttemptToTill = 24,
    AwakeToFindYourself = 25,
    Back = 26,
    BadlyBurnedLostHealth = 27,
    BarteringSkillsProvided = 28,
    BeenPoisoned = 29,
    BeginSleeping = 30,
    BeginUsingRaft = 31,
    Belt = 32,
    BleedingHasStopped = 33,
    BleedingProfusely = 34,
    BleedingToDeathLostHealth = 35,
    Blunt = 36,
    BookBlank = 37,
    BookContains = 38,
    BookCrumbles = 39,
    BookDiagrams = 40,
    BookEmpty = 41,
    BookNothing = 42,
    BookOpen = 43,
    BookScribbles = 44,
    BrokeIntoPieces = 45,
    BrokenOnImpact = 46,
    BrokenWhileFiring = 47,
    Build = 48,
    Burned = 49,
    CannotAddAnyMoreFuel = 50,
    CannotBePerformedOverWater = 51,
    CannotBePreserved = 52,
    CannotBeReinforced = 53,
    CannotBeRepaired = 54,
    CannotBeTamed = 55,
    CannotBeTransmogrified = 56,
    CannotBuildHere = 57,
    CannotDoThatHere = 58,
    CannotDropHere = 59,
    CannotEquipThatThere = 60,
    CannotFishFor = 61,
    CannotHere = 62,
    CannotInWater = 63,
    CannotLeave = 64,
    CannotPickupWhenFull = 65,
    CannotPickUpWhileLit = 66,
    CannotPickUpWithItemsInside = 67,
    CannotPlaceContainerInItself = 68,
    CannotPlaceHere = 69,
    CannotPlaceThatFromHere = 70,
    CannotPlaceThatHere = 71,
    CannotPlantHereTilled = 72,
    CannotRepairWhileLit = 73,
    CannotRestHere = 74,
    CannotSeeHere = 75,
    CannotSleepHere = 76,
    CannotStartFireHere = 77,
    CannotToTellTime = 78,
    CarryingTooMuchWeight = 79,
    CarvedUpCorpse = 80,
    CarveWithTool = 81,
    Carving = 82,
    CastYourLine = 83,
    Category = 84,
    CaughtFish = 85,
    ChatBanCommand = 86,
    ChatBannedCommand = 87,
    ChatCommandsCommand = 88,
    ChatPingCommand = 89,
    ChatPlayerMessage = 90,
    ChatPlayersCommand = 91,
    ChatUnbanCommand = 92,
    ChatUnknownCommand = 93,
    Chest = 94,
    ClearMessages = 95,
    Clockwise = 96,
    CloseContainer = 97,
    CloseDoor = 98,
    CollectObjectWithHands = 99,
    Consumed = 100,
    Container = 101,
    Cook = 102,
    Cooked = 103,
    CopySelectedText = 104,
    Corpse = 105,
    CorpseOf = 106,
    CouldNotDecipher = 107,
    Counterclockwise = 108,
    Craft = 109,
    Crafted = 110,
    Crafts = 111,
    CreatureAlreadyFullHealth = 112,
    CreatureAngered = 113,
    CreatureAppears = 114,
    CreatureAppeased = 115,
    CreatureIdolAttractedCreature = 116,
    CreatureResistanceVulnerableHigh = 117,
    CreatureResistanceVulnerableLow = 118,
    CreatureResistanceVulnerableModerate = 119,
    CreatureUntamed = 120,
    CuredYourPoison = 121,
    Cut = 122,
    DamageAppeared = 123,
    DamagedByPouring = 124,
    DayQuarter1 = 125,
    DayQuarter2 = 126,
    DayQuarter3 = 127,
    DayQuarter4 = 128,
    DealtNoDamageToYou = 129,
    DeathBy = 130,
    DeathByBleeding = 131,
    DeathByBurning = 132,
    DeathByConsumption = 133,
    DeathByDrowning = 134,
    DeathByExhaustion = 135,
    DeathByFistByPlayer = 136,
    DeathByPoison = 137,
    DeathBySteppingOn = 138,
    DeathByTrap = 139,
    DeathByWeaponByPlayer = 140,
    Decay = 141,
    DestroyedFromUse = 142,
    Dexterity = 143,
    DexterityIncreasing = 144,
    DidNotSeemToBeHurting = 145,
    DifficultyEasy = 146,
    DifficultyHard = 147,
    DifficultyInsane = 148,
    DifficultyMedium = 149,
    DifficultySimple = 150,
    DifficultyVeryEasy = 151,
    DifficultyVeryHard = 152,
    Dig = 153,
    DigAway = 154,
    Digging = 155,
    DigWithHands = 156,
    Disabled = 157,
    Disassemble = 158,
    DisassembleAction = 159,
    Disassembling = 160,
    DiscoveredCaveEntrance = 161,
    DiscoveredInTheBottle = 162,
    Dismantle = 163,
    DismantleAction = 164,
    DismantleLabel = 165,
    Dismantling = 166,
    DismantlingRequires = 167,
    DoNotHaveTreasureMaps = 168,
    DoNotProduceAnyResources = 169,
    DoodadAppearsDamaged = 170,
    DoodadAppearsOnVergeOfBreaking = 171,
    DoodadAppearsUnscathed = 172,
    DoodadCauseStatus = 173,
    DoodadShowsSignsOfWear = 174,
    DrewSurroundings = 175,
    Drink = 176,
    Drop = 177,
    DropAll = 178,
    DropAllIntoFire = 179,
    DropAllOfSameQuality = 180,
    DroppedAllIntoDepths = 181,
    DroppedIntoDepths = 182,
    DroppedIntoFire = 183,
    DueToDehydration = 184,
    DueToStarvation = 185,
    DugTreasureOut = 186,
    DumpContentsOfContainerInInventory = 187,
    Durability = 188,
    DyingOfDehydration = 189,
    EarnedMilestone = 190,
    Effective = 191,
    Enabled = 192,
    EquipTo = 193,
    ErrorHasOccured = 194,
    Expert = 195,
    ExtinguishedFire = 196,
    ExtinguishedTorch = 197,
    FailedToAddFuelToTorch = 198,
    FailedToCatchFish = 199,
    FailedToCauseDamage = 200,
    FailedToCauseYouDamage = 201,
    FailedToDrawMap = 202,
    FailedToPickLock = 203,
    FailedToPlant = 204,
    FailedToPreserve = 205,
    FailedToReinforce = 206,
    FailedToRepair = 207,
    FailedToStartFire = 208,
    FailedToTame = 209,
    FailedToTransmogrify = 210,
    FarAwayFromTreasure = 211,
    Feet = 212,
    FeltBurningPainLostHealth = 213,
    FewMinutes = 214,
    Filled = 215,
    FilledFrom = 216,
    Fire = 217,
    FireAlmostExtinguished = 218,
    FireAroundYouIsWarm = 219,
    FiredIntoObstacle = 220,
    FireIsHealthy = 221,
    FireIsRaging = 222,
    FireIsStruggling = 223,
    FireOverflowed = 224,
    FireReducedToEmbers = 225,
    FireSource = 226,
    FullyDecodedMap = 227,
    GainedHealth = 228,
    GainedHunger = 229,
    GainedStamina = 230,
    GainedThirst = 231,
    GameHasBeenSavedIsTakingUpMB = 232,
    Gather = 233,
    GatherDestroy = 234,
    Gathering = 235,
    GatherWithHands = 236,
    GhostNoActions = 237,
    GhostOf = 238,
    GoatHasNoMilk = 239,
    GrabAll = 240,
    Group = 241,
    HackAway = 242,
    HandProtectionPreventedInjury = 243,
    Hands = 244,
    HandsNotEffectiveForDigging = 245,
    Harvest = 246,
    Harvesting = 247,
    HarvestWithHands = 248,
    HasBeenHurtByATrap = 249,
    HasDecayed = 250,
    HasHitYouForDamage = 251,
    HasNoEffect = 252,
    HasSetTrapOffNoDamage = 253,
    HasSplit = 254,
    Head = 255,
    Held = 256,
    Help = 257,
    HelpGrow = 258,
    Hints = 259,
    HintsDisabled = 260,
    HintsEnabled = 261,
    HitForDamage = 262,
    HitYouForDamage = 263,
    Hour = 264,
    Hours = 265,
    HurtHandsHittingWithoutWeapons = 266,
    HurtHandsWithNoTool = 267,
    Ineffective = 268,
    InExactLocationOfTreasure = 269,
    InjuredFromTrap = 270,
    InNeedOfRepair = 271,
    Intermediate = 272,
    Inventory = 273,
    IsAtPercentHealth = 274,
    IsBarelyHurt = 275,
    IsInjured = 276,
    IsSeverelyDamaged = 277,
    IsUninjured = 278,
    ItContains = 279,
    ItsWeightCapacity = 280,
    Jump = 281,
    Killed = 282,
    LabelAdditionalRequirements = 283,
    LabelAttackFromTactics = 284,
    LabelBase = 285,
    LabelBaseDefense = 286,
    LabelBenignity = 287,
    LabelBluntResist = 288,
    LabelCanIncrease = 289,
    LabelCraftingReputation = 290,
    LabelDecay = 291,
    LabelDefense = 292,
    LabelDefenseFromParrying = 293,
    LabelDifficulty = 294,
    LabelDurability = 295,
    LabelEquip = 296,
    LabelFireResist = 297,
    LabelGrouping = 298,
    LabelHave = 299,
    LabelLeftHandAttack = 300,
    LabelLevel = 301,
    LabelLightSourceWhenLit = 302,
    LabelMalignity = 303,
    LabelOnCreatureHeal = 304,
    LabelOnCure = 305,
    LabelOnDrink = 306,
    LabelOnEat = 307,
    LabelOnEquip = 308,
    LabelOnHeal = 309,
    LabelPiercingResist = 310,
    LabelProtected = 311,
    LabelRange = 312,
    LabelRanged = 313,
    LabelRangedAttack = 314,
    LabelRangedDamage = 315,
    LabelReputationImpact = 316,
    LabelRequires = 317,
    LabelResists = 318,
    LabelRightHandAttack = 319,
    LabelScore = 320,
    LabelSkill = 321,
    LabelSlashingResist = 322,
    LabelStokeFireStrength = 323,
    LabelThrowDamageType = 324,
    LabelTicks = 325,
    LabelTrapDamage = 326,
    LabelTurns = 327,
    LabelUse = 328,
    LabelUses = 329,
    LabelVulnerabilities = 330,
    LabelWeight = 331,
    LabelWeightCapacity = 332,
    LabelWeightReduction = 333,
    LabelWorth = 334,
    LastPlaceYouLeftOff = 335,
    LearnedHowToCreate = 336,
    LeftHand = 337,
    LeftHandEquip = 338,
    Legs = 339,
    LikelyFailures = 340,
    LostHealth = 341,
    LostHunger = 342,
    LostStamina = 343,
    LostThirst = 344,
    MapNotOfThisArea = 345,
    MaterialsDestroyed = 346,
    Metabolism = 347,
    MetabolismSlowed = 348,
    MilestoneIsHidden = 349,
    MilestoneIsInvisible = 350,
    Milk = 351,
    Milking = 352,
    MissedWith = 353,
    MissedYouWith = 354,
    MoreInformation = 355,
    MoveAllOfSameQualityToFacingContainer = 356,
    MoveAllOfSameQualityToInventory = 357,
    MoveAllOfSameQualityToLastOpenedContainer = 358,
    MoveAllOfSameQualityToOpenedContainer = 359,
    MoveAllToFacingContainer = 360,
    MoveAllToInventory = 361,
    MoveAllToLastOpenedContainer = 362,
    MoveAllToOpenedContainer = 363,
    MoveOverTrapButDoNotSetOff = 364,
    MoveToFacingContainer = 365,
    MoveToInventory = 366,
    MoveToLastOpenedContainer = 367,
    MoveToOpenedContainer = 368,
    MultiplayerGamePaused = 369,
    MultiplayerGameResumed = 370,
    MultiplayerPlayerConnected = 371,
    MultiplayerPlayerDied = 372,
    MultiplayerPlayerDisconnected = 373,
    MultiplayerPlayerJoined = 374,
    MustBeEquippedToIgnite = 375,
    MustCastIntoWater = 376,
    Mysteriously = 377,
    Name = 378,
    NearlyBurnedEquipmentProtectedYou = 379,
    Neck = 380,
    NeedAShovelToDigTreasure = 381,
    NeedFishingNetForTreasure = 382,
    NeedFreeHandToShoot = 383,
    NeedToEquipToShoot = 384,
    NeedToStartTravelsOutside = 385,
    NeedWaterForRaft = 386,
    NightQuarter1 = 387,
    NightQuarter2 = 388,
    NightQuarter3 = 389,
    NightQuarter4 = 390,
    No = 391,
    NoAmmunitionForThatWeapon = 392,
    NoBlackPowderToFireWeapon = 393,
    NoFireToStokeWith = 394,
    NoFishAtLocation = 395,
    NoInkToDrawMap = 396,
    NoKindlingOrFuelItemsToStartFire = 397,
    NoKindlingToStartFire = 398,
    NoLongerFeelPainOfBeingBurned = 399,
    NoMoreRoomInContainer = 400,
    NoNeedToStokeFire = 401,
    NoRoomForImprovement = 402,
    NoRoomToDrop = 403,
    NotAvailable = 404,
    NotEnoughPurifiedWaterYet = 405,
    NotEnoughTreasureToReturn = 406,
    NotFacingCreatureToHeal = 407,
    NotFacingCreatureToOfferThisTo = 408,
    NotFacingLockedObject = 409,
    NotFacingValidItem = 410,
    NothingHereToCarve = 411,
    NothingHereToFill = 412,
    NothingToGetFromThis = 413,
    NothingToHarvestFromThisGather = 414,
    NothingToSmother = 415,
    NothingUsefulToHarvestYet = 416,
    NoTinderToStartFire = 417,
    NotInRangeOfTreasure = 418,
    NotSuitableToPlant = 419,
    NoWaterInStill = 420,
    NoWhereNearTreasure = 421,
    NumberEight = 422,
    NumberFive = 423,
    NumberFour = 424,
    NumberNine = 425,
    NumberOne = 426,
    NumberSeven = 427,
    NumberSix = 428,
    NumberTen = 429,
    NumberThree = 430,
    NumberTwo = 431,
    ObjectIsLocked = 432,
    ObjectIsLockedAttemptToBreakIt = 433,
    Offer = 434,
    OfferAberrantFail = 435,
    OpenDoor = 436,
    OverEatingLostStamina = 437,
    OverHydratingLostStamina = 438,
    Pack = 439,
    PaperTurnedToMush = 440,
    PartiallyDecodedMap = 441,
    PastExperiencesProvideBenefits = 442,
    PenultimateAnd = 443,
    PetCreature = 444,
    PickAway = 445,
    PickupAllItems = 446,
    PickupItem = 447,
    Piercing = 448,
    Place = 449,
    PlaceAllOnGround = 450,
    PlacedOnGround = 451,
    Plant = 452,
    PlantedInGround = 453,
    PlantHighlyFertile = 454,
    PlantIsFertile = 455,
    PlantIsNotFertile = 456,
    Poisoned = 457,
    PoisonedLostHealth = 458,
    PoisonWorkedItsCourse = 459,
    PouredOut = 460,
    PouredOutOnYourself = 461,
    PouredWaterIntoStill = 462,
    Preservation = 463,
    Preserve = 464,
    PreservedFood = 465,
    PurifiedWaterInStill = 466,
    Quality = 467,
    Recent = 468,
    ReduceLength = 469,
    RefusedToBeTamed = 470,
    Reinforce = 471,
    Reinforcement = 472,
    Release = 473,
    RemovedBlood = 474,
    RemoveFromQuickslot = 475,
    Repair = 476,
    RequiredForDisassembleLabel = 477,
    RequiredForDisassembly = 478,
    RequiresFireToBeLit = 479,
    RequiresYouFacingFireSource = 480,
    RequiresYouToBeAround = 481,
    Resistant = 482,
    Rest = 483,
    Rested = 484,
    Resting = 485,
    RestingOnGroundNotEffective = 486,
    RestInterrupted = 487,
    RestInterruptedDamage = 488,
    RestInterruptedLoudNoise = 489,
    RestInterruptedPain = 490,
    RestInterruptedStirring = 491,
    RestLongTime = 492,
    RestModerateTime = 493,
    RestOnGround = 494,
    RestShortTime = 495,
    RestTime = 496,
    ReturnedToCivilization = 497,
    ReturningToCivilizationSetOffAgain = 498,
    ReturnsToLife = 499,
    RightHand = 500,
    RightHandEquip = 501,
    ScrollProvidedNoUsefulInsight = 502,
    SeaweedFromWater = 503,
    SeemsHurt = 504,
    SeemsQuiteInjured = 505,
    SeemsToHaveDrawnEnergy = 506,
    SeemsUnharmed = 507,
    SetTrapOffButNoDamage = 508,
    SetUp = 509,
    ShadowInTheWater = 510,
    Simple = 511,
    Skill = 512,
    SkillHasRaised = 513,
    Slashing = 514,
    Sleep = 515,
    Sleeping = 516,
    Slept = 517,
    SlitherSuckerConstricts = 518,
    SlitherSuckerJumpedOnHead = 519,
    Some = 520,
    SomethingInTheWayOf = 521,
    SomethingInTheWayOfCarveFirst = 522,
    SomethingInTheWayOfFire = 523,
    SomethingInTheWayOfFishing = 524,
    SomethingInTheWayOfPerforming = 525,
    SomethingInTheWayOfPlacing = 526,
    SomethingInTheWayOfPlanting = 527,
    SomethingInWayOfClosingDoor = 528,
    SoothedYourBurnInjuries = 529,
    Sort = 530,
    SortedByCategory = 531,
    SortedByDecay = 532,
    SortedByDurability = 533,
    SortedByGroup = 534,
    SortedByName = 535,
    SortedByQuality = 536,
    SortedByRecent = 537,
    SortedBySkill = 538,
    SortedByUnlockedTime = 539,
    SortedByWeight = 540,
    StaminaIsFull = 541,
    StartedFire = 542,
    StartTravelInWater = 543,
    StarvingToDeath = 544,
    SteppingOnHasInjuredYouForDamage = 545,
    StillHasNoWaterToPurify = 546,
    StirredUpClawWorm = 547,
    StirredUpCreature = 548,
    StoppedYourBleeding = 549,
    StopUsingRaft = 550,
    Strength = 551,
    StrengthIncreasing = 552,
    SummonedGuardiansByDiggingTreasure = 553,
    SunNotBrightEnoughToStartFire = 554,
    TakenFromGroundBecomeTamed = 555,
    Tame = 556,
    TamedAppearsAngered = 557,
    TamedAppearsContended = 558,
    TamedAppearsHappy = 559,
    TamedAppearsUpset = 560,
    TamedCreature = 561,
    TeleportBlocked = 562,
    Teleported = 563,
    TheirFist = 564,
    ThereIsNoSunToStartFire = 565,
    ThereIsNothingToMilk = 566,
    ThisCannotBeMilked = 567,
    Throw = 568,
    ThrownIntoDepths = 569,
    ThrownIntoObstacle = 570,
    Till = 571,
    Tilling = 572,
    TimeIs = 573,
    TimeIsDawn = 574,
    TimeIsDaytime = 575,
    TimeIsDusk = 576,
    TimeIsNighttime = 577,
    TimeIsSunrise = 578,
    TimeIsSunset = 579,
    TooDamaged = 580,
    TooExhaustedToJump = 581,
    TradeBarterCreditForItem = 582,
    TradeItemForBarterCredit = 583,
    TradingWith = 584,
    TrampledFire = 585,
    TrampledIntoGround = 586,
    TrampleIntoGround = 587,
    Trampling = 588,
    Transmogrification = 589,
    Transmogrified = 590,
    TrapStoppedYou = 591,
    TravelToFarOffLands = 592,
    TreasureIsBlocked = 593,
    True = 594,
    UnEquip = 595,
    UnEquipAll = 596,
    Unknown = 597,
    UnknownItem = 598,
    UnlockedChest = 599,
    UnlockedTime = 600,
    UnpurifiedWaterInStill = 601,
    UsingBareFistsToFight = 602,
    UsingBareHands = 603,
    Vulnerable = 604,
    WaitUntilFireCooledToGetWater = 605,
    WalkingDistanceOfTreasure = 606,
    Water = 607,
    WaterGathering = 608,
    WaterPutOutFire = 609,
    Weight = 610,
    WeightCapacity = 611,
    WildGoatRefusedToBeMilked = 612,
    With = 613,
    WorkingYourselfIntoExhaustion = 614,
    WorkingYourselfIntoExhaustionAndDrowning = 615,
    YouAte = 616,
    YouBeginResting = 617,
    YouCannotDoThatYet = 618,
    YouCooledLava = 619,
    YouCrafted = 620,
    YouDied = 621,
    YouDisassembled = 622,
    YouDismantled = 623,
    YouDrank = 624,
    YouEquip = 625,
    YouFailedTo = 626,
    YouFailedToHeal = 627,
    YouFailedToHealCreature = 628,
    YouFire = 629,
    YouGathered = 630,
    YouHardenedCooledLava = 631,
    YouHarvested = 632,
    YouHaveDied = 633,
    YouHaveEnabledDisabled = 634,
    YouHaveHealedCreature = 635,
    YouHaveKilled = 636,
    YouHaveReleased = 637,
    YouHaveTamed = 638,
    YouNeedMoreCredit = 639,
    YouNoticeBecomeEnraged = 640,
    YouNoticeDying = 641,
    YouNoticeFertilityDecreasing = 642,
    YouNoticeFertilityIncreasing = 643,
    YouNoticeGrowing = 644,
    YouNoticeLavaCooling = 645,
    YouNoticeLavaHardening = 646,
    YouNoticePerish = 647,
    YouNoticeStumbleInjureItself = 648,
    YouNoticeTakeFromGround = 649,
    YouNoticeWoundsClosing = 650,
    YouNoticeZombieHorde = 651,
    YouOfferedToCreature = 652,
    YouOpen = 653,
    YouPacked = 654,
    YouPickedUp = 655,
    YouRepair = 656,
    YourFist = 657,
    YourHands = 658,
    YourRubbingNoEffect = 659,
    YouRub = 660,
    YouSalvaged = 661,
    YouSee = 662,
    YouSeeAnAberrant = 663,
    YouSeeDrop = 664,
    YouSeeEngulfFire = 665,
    YouSeeLay = 666,
    YouSeeLayingTrap = 667,
    YouSeeSpewLava = 668,
    YouSeeSpitAcid = 669,
    YouSeeSpringForth = 670,
    YouSeeSummon = 671,
    YouSeeSwampFlood = 672,
    YouSeparate = 673,
    YouSetTheTrapOff = 674,
    YouThrew = 675,
    YouTilled = 676,
    YouUnequip = 677,
    YouUsed = 678,
}
