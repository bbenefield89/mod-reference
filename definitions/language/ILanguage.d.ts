import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
/**
 * Choices for interrupts
 */
export declare enum InterruptChoice {
    Retry = 0,
    Cancel = 1,
    No = 2,
    Ok = 3,
    Rejoin = 4,
    Rename = 5,
    Yes = 6,
}
/**
 * Ui messages that are on elements that don't change
 */
export declare enum UiTranslation {
    GameInterruptItemMayBeDestroyedInCraft = 0,
    GameInterruptItemMayBeDestroyedInCraftDescription = 1,
    GameInterruptItemMayBeDestroyedOnUse = 2,
    GameInterruptItemMayBeDestroyedOnUseDescription = 3,
    GameInterruptLoadingQuitting = 4,
    GameInterruptLoadingQuittingDescription = 5,
    GameInterruptLoadingSaving = 6,
    GameInterruptLoadingSavingDescription = 7,
    GameInterruptReleaseCreature = 8,
    GameInterruptReleaseCreatureDescription = 9,
    GameInterruptRenameCreature = 10,
    GameInterruptRenameCreatureDescription = 11,
    GameInterruptRenameDoodad = 12,
    GameInterruptRenameDoodadDescription = 13,
    GameInterruptRenameItem = 14,
    GameInterruptRenameItemDescription = 15,
    GameInterruptReturnToTitleScreen = 16,
    GameInterruptReturnToTitleScreenDailyChallenge = 17,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 18,
    GameInterruptReturnToTitleScreenDescription = 19,
    GameInterruptLoadingWorld = 20,
    GameInterruptLoadingWorldDescription = 21,
    GameInterruptLoadingGeneratingWorld = 22,
    GameInterruptLoadingGeneratingWorldDescription = 23,
    GameInterruptLoadingFinalizingWorld = 24,
    GameInterruptLoadingFinalizingWorldDescription = 25,
    GameInterruptSailAwayEnd = 26,
    GameInterruptSailAwayEndDescription = 27,
    GameInterruptSailAwayReturnable = 28,
    GameInterruptSailAwayReturnableDescription = 29,
    GameInterruptTravelAway = 30,
    GameInterruptTravelAwayDescription = 31,
    GameInterruptLoadingResting = 32,
    GameInterruptLoadingRestingDescription = 33,
    GameInterruptLoadingSleeping = 34,
    GameInterruptLoadingSleepingDescription = 35,
    GameInterruptLoadingTraveling = 36,
    GameInterruptLoadingTravelingDescription = 37,
    GameInterruptLoadingLostGLContext = 38,
    GameInterruptLoadingLostGLContextDescription = 39,
    GameInterruptLoadingAutoSaving = 40,
    GameInterruptLoadingAutoSavingDescription = 41,
    GameInterruptLoadingMods = 42,
    GameInterruptLoadingModsDescription = 43,
    GameInterruptDangerousStep = 44,
    GameInterruptDangerousStepDescription = 45,
    GameInterruptSaveFailure = 46,
    GameInterruptSaveFailureDescription = 47,
    GameInterruptDesalinationNoNeed = 48,
    GameInterruptDesalinationNoNeedDescription = 49,
    GameInterruptConfirmationActionOnFire = 50,
    GameInterruptConfirmationActionOnFireDescription = 51,
    GameInterruptConfirmationDestroyOnGather = 52,
    GameInterruptConfirmationDestroyOnGatherDescription = 53,
    GameInterruptLoadingGame = 54,
    GameInterruptLoadingGameDescription = 55,
    GameInterruptLoadingSprites = 56,
    GameInterruptLoadingSpritesDescription = 57,
    GameMultiplayerInterruptBanned = 58,
    GameMultiplayerInterruptFailedToConnect = 59,
    GameMultiplayerInterruptFailedToLoadMods = 60,
    GameMultiplayerInterruptKicked = 61,
    GameMultiplayerInterruptLostConnection = 62,
    GameMultiplayerInterruptServerShutdown = 63,
    GameMultiplayerInterruptSynchronizationError = 64,
    GameMultiplayerInterruptUnableToJoinServer = 65,
    GameMultiplayerInterruptUnknownError = 66,
    GameMultiplayerInterruptVersionMismatch = 67,
    GameMultiplayerInterruptConnecting = 68,
    GameMultiplayerInterruptConnectingDescription = 69,
    MenuAboutTitle = 70,
    MenuAboutDescription = 71,
    MenuAboutGameDescription = 72,
    MenuAboutSectionTeam = 73,
    MenuAboutTeamMemberResponsibilities = 74,
    MenuAboutTeamMemberResponsibilityProgramming = 75,
    MenuAboutTeamMemberResponsibilityDesign = 76,
    MenuAboutTeamMemberResponsibilityWeb = 77,
    MenuAboutTeamMemberResponsibilityArt = 78,
    MenuAboutTeamMemberResponsibilityPR = 79,
    MenuAboutTeamMemberResponsibilityUX = 80,
    MenuAboutTeamMemberResponsibilityMusic = 81,
    MenuAboutTeamMemberName = 82,
    MenuAboutTeamMemberNickname = 83,
    MenuAboutSectionContributors = 84,
    MenuAboutSectionSpecialThanks = 85,
    MenuAboutTextSpecialThanksTestorsAndDonators = 86,
    MenuAboutSectionLibraries = 87,
    MenuAboutSectionLibrariesDescription = 88,
    MenuChangelogTitle = 89,
    MenuChangelogDescription = 90,
    MenuChangelogSectionBalance = 91,
    MenuChangelogSectionBugFixes = 92,
    MenuChangelogSectionImprovements = 93,
    MenuChangelogSectionMod = 94,
    MenuChangelogSectionModding = 95,
    MenuChangelogSectionNew = 96,
    MenuChangelogSectionTechnical = 97,
    MenuChangelogHeadingFailedLoad = 98,
    MenuChangelogHeadingChangeCount = 99,
    MenuChangelogInterruptLoadingChangelog = 100,
    MenuChangelogInterruptLoadingChangelogDescription = 101,
    MenuCharacterCreationButtonExportTooltip = 102,
    MenuCharacterCreationButtonImportTooltip = 103,
    MenuCharacterCreationButtonStartGame = 104,
    MenuCharacterCreationDescription = 105,
    MenuCharacterCreationHeadingHairColor = 106,
    MenuCharacterCreationHeadingHairStyle = 107,
    MenuCharacterCreationHeadingSkinTone = 108,
    MenuCharacterCreationLabelName = 109,
    MenuCharacterCreationTitle = 110,
    MenuCharacterCreationInterruptImportCharacterFailure = 111,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 112,
    MenuCharacterCreationButtonRotateLeftTooltip = 113,
    MenuCharacterCreationButtonRotateRightTooltip = 114,
    MenuCharacterCreationButtonRandomizeTooltip = 115,
    MenuCharacterSelectionButtonNewCharacter = 116,
    MenuCharacterSelectionCharacterSortLastUse = 117,
    MenuCharacterSelectionCharacterSortName = 118,
    MenuCharacterSelectionCharacterSortUseCount = 119,
    MenuCharacterSelectionDescription = 120,
    MenuCharacterSelectionHeadingNoCharacters = 121,
    MenuCharacterSelectionTitle = 122,
    MenuCharacterSelectionLabelLastUse = 123,
    MenuCharacterSelectionLabelUseCount = 124,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 125,
    MenuCharacterSelectionInterruptDeleteCharacter = 126,
    MenuFriendsDescription = 127,
    MenuFriendsHeadingNotPlayingWayward = 128,
    MenuFriendsHeadingPlayingWayward = 129,
    MenuFriendsNoneOnlineDescription = 130,
    MenuFriendsNumberOnline = 131,
    MenuFriendsSectionNoFriends = 132,
    MenuFriendsTitle = 133,
    MenuGameEndTitleDead = 134,
    MenuGameEndTitleWon = 135,
    MenuGameEndDescriptionDead1 = 136,
    MenuGameEndDescriptionDead2 = 137,
    MenuGameEndDescriptionDead3 = 138,
    MenuGameEndDescriptionWin1 = 139,
    MenuGameEndDescriptionWin2 = 140,
    MenuGameEndDescriptionWin3 = 141,
    MenuGameEndShareFacebook = 142,
    MenuGameEndShareTwitter = 143,
    MenuHighscoresTitle = 144,
    MenuHighscoresDescription = 145,
    MenuHighscoresDifficultyFilterHardcore = 146,
    MenuHighscoresDifficultyFilterCasual = 147,
    MenuHighscoresDifficultyFilterDailyChallenge = 148,
    MenuHighscoresDifficultyFilterAll = 149,
    MenuHighscoresSortScore = 150,
    MenuHighscoresSortSaveName = 151,
    MenuHighscoresSortRecency = 152,
    MenuHighscoresHighscoreLabelDifficulty = 153,
    MenuHighscoresHighscoreLabelTurns = 154,
    MenuHighscoresHighscoreLabelScore = 155,
    MenuHighscoresHighscoreLabelPlace = 156,
    MenuHighscoresHighscoreLabelDate = 157,
    MenuHighscoresHighscoreLabelDeathBy = 158,
    MenuHighscoresHighscoreLabelSaveName = 159,
    MenuHighscoresHighscoreLabelCharacterName = 160,
    MenuHighscoresCharacterNameUnknown = 161,
    MenuLoadGameButtonNewGame = 162,
    MenuLoadGameButtonNewGameButtonImportTooltip = 163,
    MenuLoadGameDescription = 164,
    MenuLoadGameNoSlotsRemainingDescription = 165,
    MenuLoadGameSaveButtonDeleteTooltip = 166,
    MenuLoadGameSaveButtonEditNameTooltip = 167,
    MenuLoadGameSaveButtonExportTooltip = 168,
    MenuLoadGameSaveSortCreatedTime = 169,
    MenuLoadGameSaveSortName = 170,
    MenuLoadGameSaveSortSaveTime = 171,
    MenuLoadGameSaveSortTurnCount = 172,
    MenuLoadGameSaveTooltipLabelCreatedTime = 173,
    MenuLoadGameSaveTooltipLabelMods = 174,
    MenuLoadGameSaveTooltipLabelSaveTime = 175,
    MenuLoadGameSaveTooltipLabelScore = 176,
    MenuLoadGameSaveTooltipLabelSeed = 177,
    MenuLoadGameSaveTooltipLabelTurns = 178,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 179,
    MenuLoadGameSlotsRemaining = 180,
    MenuLoadGameTitle = 181,
    MenuLoadGameInterruptDeleteSave = 182,
    MenuLoadGameInterruptDeleteSaveDescription = 183,
    MenuLoadGameInterruptLoadingExportingSave = 184,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 185,
    MenuLoadGameInterruptLoadingImportingSave = 186,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 187,
    MenuLoadGameInterruptImportSaveFailure = 188,
    MenuLoadGameInterruptImportSaveFailureDescription = 189,
    MenuMainButtonAbout = 190,
    MenuMainButtonChangelog = 191,
    MenuMainButtonContinueGame = 192,
    MenuMainButtonDailyChallenge = 193,
    MenuMainButtonFriends = 194,
    MenuMainButtonFriendsWithCount = 195,
    MenuMainButtonHighscores = 196,
    MenuMainButtonLoadGame = 197,
    MenuMainButtonMods = 198,
    MenuMainButtonNewGame = 199,
    MenuMainButtonNews = 200,
    MenuMainButtonOptions = 201,
    MenuMainInterruptLoadingNews = 202,
    MenuMainInterruptLoadingNewsDescription = 203,
    MenuMainInterruptLoadingChangelog = 204,
    MenuMainInterruptLoadingChangelogDescription = 205,
    MenuMainInterruptWelcomeToVersion = 206,
    MenuMainInterruptWelcomeToVersionDescription = 207,
    MenuMainInterruptOldVersionWarning = 208,
    MenuMainInterruptOldVersionWarningDescription = 209,
    MenuMainInterruptLoadingOptions = 210,
    MenuMainInterruptLoadingOptionsDescription = 211,
    MenuModsButtonDisableAll = 212,
    MenuModsButtonEnableAll = 213,
    MenuModsButtonModdingGuide = 214,
    MenuModsButtonOpenFolder = 215,
    MenuModsButtonOpenWorkshop = 216,
    MenuModsDescription = 217,
    MenuModsHeadingInternal = 218,
    MenuModsHeadingLocal = 219,
    MenuModsHeadingNoMods = 220,
    MenuModsHeadingWorkshop = 221,
    MenuModsInterruptConfirmPublish = 222,
    MenuModsInterruptConfirmPublishUpdate = 223,
    MenuModsInterruptModEnableMultipleLanguages = 224,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 225,
    MenuModsInterruptModEnableUseLanguage = 226,
    MenuModsInterruptModEnableUseLanguageDescription = 227,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 228,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 229,
    MenuModsInterruptConfirmPublishDescription = 230,
    MenuModsInterruptConfirmPublishUpdateDescription = 231,
    MenuModsInterruptPublishingMod = 232,
    MenuModsInterruptPublishingModDescription = 233,
    MenuModsInterruptPublishError = 234,
    MenuModsInterruptPublishErrorDescription = 235,
    MenuModsInterruptUpdatingMod = 236,
    MenuModsInterruptUpdatingModDescription = 237,
    MenuModsInterruptPublishUpdateError = 238,
    MenuModsInterruptPublishUpdateErrorDescription = 239,
    MenuModsInterruptInfoMissingDependencies = 240,
    MenuModsInterruptInfoMissingDependenciesDescription = 241,
    MenuModsInterruptConfirmEnableDisabledDependencies = 242,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 243,
    MenuModsInterruptConfirmDisableDependents = 244,
    MenuModsInterruptConfirmDisableDependentsDescription = 245,
    MenuModsInterruptConfirmUninstallMod = 246,
    MenuModsInterruptConfirmUninstallModDescription = 247,
    MenuModsSortName = 248,
    MenuModsSortCreatedDate = 249,
    MenuModsSortInstallDate = 250,
    MenuModsSortAuthor = 251,
    MenuModsSortLastUpdated = 252,
    MenuModsTabInternal = 253,
    MenuModsTabLocal = 254,
    MenuModsTabWorkshop = 255,
    MenuModsTitle = 256,
    MenuModsTooltipLabelAuthor = 257,
    MenuModsTooltipLabelDependencies = 258,
    MenuModsTooltipLabelProvides = 259,
    MenuModsTooltipLabelVersion = 260,
    MenuModsTooltipLabelInstallDate = 261,
    MenuModsTooltipLabelCreatedDate = 262,
    MenuModsTooltipLabelLastUpdatedDate = 263,
    MenuModsTooltipModOptions = 264,
    MenuModsTooltipProvidesCustomizations = 265,
    MenuModsTooltipProvidesImageOverrides = 266,
    MenuModsTooltipProvidesLanguage = 267,
    MenuModsTooltipProvidesScript = 268,
    MenuModsTooltipProvidesStylesheet = 269,
    MenuModsTooltipPublishMod = 270,
    MenuModsTooltipUninstallMod = 271,
    MenuModsTooltipViewInSteamWorkshop = 272,
    MenuNewGameButtonNext = 273,
    MenuNewGameDescription = 274,
    MenuNewGameLabelEditName = 275,
    MenuNewGameLabelEditSeed = 276,
    MenuNewGamePlaceholderEditSeed = 277,
    MenuNewGameTitle = 278,
    MenuNewGameChoiceDifficultyCasual = 279,
    MenuNewGameChoiceDifficultyCasualDescription = 280,
    MenuNewGameChoiceDifficultyHardcore = 281,
    MenuNewGameChoiceDifficultyHardcoreDescription = 282,
    MenuNewGameChoiceDifficultyDailyChallenge = 283,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 284,
    MenuNewGameChoiceSingleplayer = 285,
    MenuNewGameChoiceSingleplayerDescription = 286,
    MenuNewGameChoiceMultiplayer = 287,
    MenuNewGameChoiceMultiplayerDescription = 288,
    MenuNewGameChoicePVP = 289,
    MenuNewGameChoicePVPDescription = 290,
    MenuNewGameChoiceTurnsManual = 291,
    MenuNewGameChoiceTurnsManualDescription = 292,
    MenuNewGameChoiceTurnsRealTime = 293,
    MenuNewGameChoiceTurnsRealTimeDescription = 294,
    MenuNewsButtonDiscord = 295,
    MenuNewsButtonFacebook = 296,
    MenuNewsButtonReddit = 297,
    MenuNewsButtonTwitter = 298,
    MenuNewsDescription = 299,
    MenuNewsHeadingSocial = 300,
    MenuNewsTitle = 301,
    MenuNewsHeadingUnableToLoad = 302,
    MenuNewsButtonAllNews = 303,
    MenuOptionsButtonDitherFogOfWar = 304,
    MenuOptionsButtonFullscreen = 305,
    MenuOptionsButtonInterfaceScaleDefault = 306,
    MenuOptionsButtonOpenNotesAutomatically = 307,
    MenuOptionsButtonScreenshotMode = 308,
    MenuOptionsButtonDeveloperMode = 309,
    MenuOptionsButtonDeveloperModeContextMenu = 310,
    MenuOptionsButtonPixelFont = 311,
    MenuOptionsButtonReloadGame = 312,
    MenuOptionsButtonSaveDataClearAll = 313,
    MenuOptionsButtonSaveDataClearCharacters = 314,
    MenuOptionsButtonSaveDataClearHighscores = 315,
    MenuOptionsButtonSaveDataClearMilestones = 316,
    MenuOptionsButtonSaveDataClearOptions = 317,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 318,
    MenuOptionsButtonSaveDataClearSaves = 319,
    MenuOptionsButtonSkipSplash = 320,
    MenuOptionsButtonToggleDevTools = 321,
    MenuOptionsButtonTooltipsCreatures = 322,
    MenuOptionsButtonTooltipsDoodads = 323,
    MenuOptionsButtonTooltipsItems = 324,
    MenuOptionsButtonTooltipsTerrain = 325,
    MenuOptionsButtonTurnDelayDefault = 326,
    MenuOptionsDescription = 327,
    MenuOptionsHeadingAudio = 328,
    MenuOptionsHeadingDeveloper = 329,
    MenuOptionsHeadingGameplayOptions = 330,
    MenuOptionsHeadingGeneralOptions = 331,
    MenuOptionsHeadingControls = 332,
    MenuOptionsHeadingLanguage = 333,
    MenuOptionsHeadingModOptions = 334,
    MenuOptionsHeadingOther = 335,
    MenuOptionsHeadingSaveData = 336,
    MenuOptionsHeadingTooltips = 337,
    MenuOptionsHeadingVideo = 338,
    MenuOptionsInterruptReloadGame = 339,
    MenuOptionsInterruptReloadGameDescription = 340,
    MenuOptionsInterruptSaveDataClearAll = 341,
    MenuOptionsInterruptSaveDataClearAllDescription = 342,
    MenuOptionsInterruptSaveDataClearCharacters = 343,
    MenuOptionsInterruptSaveDataClearCharactersDescription = 344,
    MenuOptionsInterruptSaveDataClearHighscores = 345,
    MenuOptionsInterruptSaveDataClearHighscoresDescription = 346,
    MenuOptionsInterruptSaveDataClearMilestones = 347,
    MenuOptionsInterruptSaveDataClearMilestonesDescription = 348,
    MenuOptionsInterruptSaveDataClearOptions = 349,
    MenuOptionsInterruptSaveDataClearOptionsDescription = 350,
    MenuOptionsInterruptSaveDataClearSaves = 351,
    MenuOptionsInterruptSaveDataClearSavesDescription = 352,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 353,
    MenuOptionsInterruptSaveDataClearCraftingRecipesDescription = 354,
    MenuOptionsLabelInterfaceScale = 355,
    MenuOptionsLabelTurnDelay = 356,
    MenuOptionsTooltipTurnDelay = 357,
    MenuOptionsLabelVolumeEffects = 358,
    MenuOptionsLabelVolumeMusic = 359,
    MenuOptionsTabAudio = 360,
    MenuOptionsTabDeveloper = 361,
    MenuOptionsTabGameplay = 362,
    MenuOptionsTabGeneral = 363,
    MenuOptionsTabControls = 364,
    MenuOptionsTabMods = 365,
    MenuOptionsTabSaveData = 366,
    MenuOptionsTabVideo = 367,
    MenuOptionsTitle = 368,
    MenuOptionsTooltipMusicNextTrack = 369,
    MenuOptionsBindChoose = 370,
    MenuOptionsBindChooseAdd = 371,
    MenuOptionsBindLabelMouse = 372,
    MenuOptionsBindLabelGamepad = 373,
    MenuOptionsBindableTypeGame = 374,
    MenuOptionsBindableTypeDialog = 375,
    MenuOptionsBindableTypeMenu = 376,
    MenuOptionsBindableTypeDeveloper = 377,
    MenuOptionsBindableTypeMod = 378,
    MenuOptionsBindLabelModifier = 379,
    MenuOptionsBindLabelOr = 380,
    MenuOptionsBindModifierShift = 381,
    MenuOptionsBindModifierControl = 382,
    MenuOptionsBindModifierAlt = 383,
    MenuOptionsBindMouse0 = 384,
    MenuOptionsBindMouse1 = 385,
    MenuOptionsBindMouse2 = 386,
    MenuOptionsBindMouseUp = 387,
    MenuOptionsBindMouseDown = 388,
    MenuOptionsBindButtonResetTooltip = 389,
    MenuOptionsBindButtonDeleteTooltip = 390,
    MenuOptionsBindButtonAddTooltip = 391,
    MenuOptionsBindNoBinding = 392,
    MenuOptionsButtonAlwaysShowMoreInformation = 393,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 394,
    MenuOptionsButtonAutoGather = 395,
    MenuOptionsButtonAutoGatherTooltip = 396,
    MenuOptionsButtonAutoPickup = 397,
    MenuOptionsButtonAutoPickupTooltip = 398,
    MenuOptionsButtonDropOnGather = 399,
    MenuOptionsButtonDropOnGatherTooltip = 400,
    MenuOptionsButtonDropUnderYourself = 401,
    MenuOptionsButtonDropUnderYourselfTooltip = 402,
    MenuOptionsButtonKeepSortActive = 403,
    MenuOptionsButtonKeepSortActiveTooltip = 404,
    MenuOptionsButtonProtectedCraftingItems = 405,
    MenuOptionsButtonProtectedCraftingItemsTooltip = 406,
    MenuOptionsButtonWarnOnDangerousActions = 407,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 408,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 409,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 410,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 411,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 412,
    MenuOptionsHeadingWarnWhenBreakingItems = 413,
    MenuOptionsButtonSaveDataClearBindings = 414,
    MenuOptionsInterruptSaveDataClearBindings = 415,
    MenuOptionsInterruptSaveDataClearBindingsDescription = 416,
    MenuPauseButtonContinue = 417,
    MenuPauseButtonOptions = 418,
    MenuPauseButtonTitleScreen = 419,
    MenuPauseHeadingPaused = 420,
    MenuPauseParagraphPaused = 421,
    MenuPauseHeadingNotPaused = 422,
    MenuPauseParagraphNotPaused = 423,
    MenuSharedSortBy = 424,
    MenuSharedSortDirection = 425,
    MiscPlayerNameDefault = 426,
    MiscSaveNameDefault = 427,
    MiscSaveVersionUnknown = 428,
    MiscDailyChallengeName = 429,
    MiscDifficultyHardcore = 430,
    MiscDifficultyCasual = 431,
    MiscDifficultyDailyChallenge = 432,
    MiscVersion = 433,
    MiscVersionBeta = 434,
    MiscVersionRelease = 435,
    SharedListSeparator = 436,
    SteamworksInterruptURLOpenedInBrowser = 437,
    SteamworksInterruptURLOpenedInBrowserDescription = 438,
    SteamworksInterruptWorkshopOpenedInBrowser = 439,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 440,
    SteamworksInterruptModWithNameAlreadyExists = 441,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 442,
    SteamworksInterruptModImportSaveGameFailure = 443,
    SteamworksInterruptModImportSaveGameFailureDescription = 444,
    SteamworksInterruptModImportedSaveGame = 445,
    SteamworksInterruptModImportedSaveGameDescription = 446,
    SteamworksInterruptLoadingRefreshingMods = 447,
    SteamworksInterruptLoadingRefreshingModsDescription = 448,
    SteamworksInterruptOpenFolderFailure = 449,
    SteamworksInterruptOpenFolderFailureDescription = 450,
    Bleeding = 451,
    Burned = 452,
    Dehydrated = 453,
    DisableHints = 454,
    EnableHints = 455,
    Encumbered = 456,
    EquipmentBack = 457,
    EquipmentBelt = 458,
    EquipmentChest = 459,
    EquipmentFeet = 460,
    EquipmentHands = 461,
    EquipmentHead = 462,
    EquipmentLeftHand = 463,
    EquipmentLeftHandOption = 464,
    EquipmentLegs = 465,
    EquipmentNeck = 466,
    EquipmentRightHand = 467,
    EquipmentRightHandOption = 468,
    EquipmentUse = 469,
    Exhausted = 470,
    Health = 471,
    Healthy = 472,
    HudActions = 473,
    HudCrafting = 474,
    HudEquipment = 475,
    HudFilter = 476,
    HudHelp = 477,
    HudInventory = 478,
    HudMessages = 479,
    HudMilestones = 480,
    HudOptions = 481,
    HudSave = 482,
    HudSkills = 483,
    HudTitleScreen = 484,
    Hunger = 485,
    MenuDeleteAllGameData = 486,
    MenuDeleteGame = 487,
    MenuEditGame = 488,
    MenuExportGame = 489,
    MenuExportSave = 490,
    MenuHighscoresAll = 491,
    MenuHighscoresDailyChallenge = 492,
    MenuHighscoresMessage = 493,
    MenuHighscoresNone = 494,
    MenuHighscoresNormal = 495,
    MenuImportGame = 496,
    MenuImportSave = 497,
    MenuJoinGame = 498,
    MenuJoinGameJoin = 499,
    MenuJoinGameMessage = 500,
    MenuJoinGameName = 501,
    MenuJoinGameServer = 502,
    MenuOpenLogsFolder = 503,
    MenuOptionsMessage = 504,
    MenuQuitGame = 505,
    MenuReloadGame = 506,
    MenuToggleDeveloperTools = 507,
    MenuVisitSteamWorkshop = 508,
    NearDeath = 509,
    NextHint = 510,
    OptionsAlternateContextMenu = 511,
    OptionsAlternateContextMenuTooltip = 512,
    OptionsAlternateFont = 513,
    OptionsAudio = 514,
    OptionsAutoGather = 515,
    OptionsAutoGatherTooltip = 516,
    OptionsAutoPickup = 517,
    OptionsAutoPickupTooltip = 518,
    OptionsBindDefault = 519,
    OptionsBinds = 520,
    OptionsDeveloper = 521,
    OptionsDeveloperLogging = 522,
    OptionsDeveloperLoggingTooltip = 523,
    OptionsDialogOpacity = 524,
    OptionsDirectionTurnDelay = 525,
    OptionsDirectionTurnDelayTooltip = 526,
    OptionsDropOnGather = 527,
    OptionsDropOnGatherTooltip = 528,
    OptionsDropUnderYourself = 529,
    OptionsDropUnderYourselfTooltip = 530,
    OptionsEffects = 531,
    OptionsEnableHints = 532,
    OptionsEnableHintsTooltip = 533,
    OptionsFullscreenMode = 534,
    OptionsGame = 535,
    OptionsGraphics = 536,
    OptionsKeepSortActive = 537,
    OptionsKeepSortActiveTooltip = 538,
    OptionsKeyBindRebinding = 539,
    OptionsLanguage = 540,
    OptionsMouseClickMovement = 541,
    OptionsMouseClickMovementTooltip = 542,
    OptionsMusic = 543,
    OptionsMute = 544,
    OptionsNextSong = 545,
    OptionsPixelFont = 546,
    OptionsProtectedCraftingItems = 547,
    OptionsProtectedCraftingItemsTooltip = 548,
    OptionsRightClickInspect = 549,
    OptionsRightClickInspectTooltip = 550,
    OptionsSaveData = 551,
    OptionsScaleDefault = 552,
    OptionsScaleIn = 553,
    OptionsScaleOut = 554,
    OptionsScreenshotMode = 555,
    OptionsScreenshotModeTooltip = 556,
    OptionsSkipIntro = 557,
    OptionsSkipIntroTooltip = 558,
    OptionsVisionDither = 559,
    OptionsVisionFade = 560,
    OptionsWarnOnDangerousActions = 561,
    OptionsWarnOnDangerousActionsTooltip = 562,
    OptionsWarnWhenBreakingItems = 563,
    OptionsWarnWhenBreakingItemsOnCraft = 564,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 565,
    OptionsWarnWhenBreakingItemsTooltip = 566,
    OptionsWindowedMode = 567,
    OptionsWorldTooltips = 568,
    OptionsWorldTooltipsTooltip = 569,
    OptionsZoomIn = 570,
    OptionsZoomOnScroll = 571,
    OptionsZoomOnScrollTooltip = 572,
    OptionsZoomOut = 573,
    Overburdened = 574,
    Poisoned = 575,
    PreviousHint = 576,
    QuickSlot1 = 577,
    QuickSlot2 = 578,
    QuickSlot3 = 579,
    QuickSlot4 = 580,
    QuickSlot5 = 581,
    QuickSlot6 = 582,
    QuickSlot7 = 583,
    QuickSlot8 = 584,
    QuickSlot9 = 585,
    Reputation = 586,
    ReturnToTitleScreen = 587,
    Stamina = 588,
    Starving = 589,
    TabCrafting = 590,
    TabDismantle = 591,
    Thirst = 592,
    Version = 593,
    Weight = 594,
    WindowTitleContainer = 595,
    WindowTitleCrafting = 596,
    WindowTitleEquipment = 597,
    WindowTitleHighscores = 598,
    WindowTitleInventory = 599,
    WindowTitleMap = 600,
    WindowTitleMessages = 601,
    WindowTitleMilestones = 602,
    WindowTitleOptions = 603,
    WindowTitleSkills = 604,
}
export declare enum PlayerTranslation {
    FirstName = 0,
    LastName = 1,
}
export declare enum Dictionary {
    Action = 0,
    Book = 1,
    Bindable = 2,
    Corpse = 3,
    Creature = 4,
    Doodad = 5,
    Growth = 6,
    Hint = 7,
    Item = 8,
    Message = 9,
    Milestone = 10,
    OnEquip = 11,
    Player = 12,
    Skill = 13,
    Terrain = 14,
    TileEvent = 15,
    UiChoice = 16,
    Ui = 17,
}
export declare enum GrowthStageTranslation {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Dead = 6,
    FungusGerminating = 7,
    FungusSpreading = 8,
    FungusForming = 9,
    FungusYoung = 10,
    FungusFruiting = 11,
    FungusFull = 12,
    FungusDead = 13,
}
export interface IStringArray {
    [index: number]: string;
}
export interface ITranslationObject {
    name: string;
    description?: string;
    prefix?: string;
    suffix?: string;
}
export declare type ITranslation = string[] | ITranslationObject;
export interface ITranslationArray {
    [index: number]: ITranslation;
}
export interface IActionDictionary {
    [index: number]: [string, string];
}
export interface ICorpseDictionary {
    [index: number]: [string, string];
}
export interface ICreatureDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IDoodadDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IGrowthDictionary {
    [index: number]: [string, string];
}
export interface IHintDictionary {
    [index: number]: [string, string];
}
export interface IItemDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IMessageDictionary {
    [index: number]: string;
}
export interface IMilestoneDictionary {
    [index: number]: [string, string];
}
export interface IOnEquipDictionary {
    [index: number]: string;
}
export interface ISkillDictionary {
    [index: number]: [string, string];
}
export interface ITerrainDictionary {
    [index: number]: [string, string];
}
export interface ITileEventDictionary {
    [index: number]: [string, string];
}
export interface IUiDictionary {
    [index: number]: string;
}
export interface IBookDictionary {
    [index: number]: [string, string];
}
export interface ILanguage {
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    getDictionary(dictionary: Dictionary): ITranslationArray;
    setDictionary(dictionary: Dictionary.Action, newEntries: IActionDictionary): void;
    setDictionary(dictionary: Dictionary.Book, newEntries: IBookDictionary): void;
    setDictionary(dictionary: Dictionary.Corpse, newEntries: ICorpseDictionary): void;
    setDictionary(dictionary: Dictionary.Creature, newEntries: ICreatureDictionary): void;
    setDictionary(dictionary: Dictionary.Doodad, newEntries: IDoodadDictionary): void;
    setDictionary(dictionary: Dictionary.Growth, newEntries: IGrowthDictionary): void;
    setDictionary(dictionary: Dictionary.Hint, newEntries: IHintDictionary): void;
    setDictionary(dictionary: Dictionary.Item, newEntries: IItemDictionary): void;
    setDictionary(dictionary: Dictionary.Message, newEntries: IMessageDictionary): void;
    setDictionary(dictionary: Dictionary.Milestone, newEntries: IMilestoneDictionary): void;
    setDictionary(dictionary: Dictionary.OnEquip, newEntries: IOnEquipDictionary): void;
    setDictionary(dictionary: Dictionary.Skill, newEntries: ISkillDictionary): void;
    setDictionary(dictionary: Dictionary.Terrain, newEntries: ITerrainDictionary): void;
    setDictionary(dictionary: Dictionary.TileEvent, newEntries: ITileEventDictionary): void;
    setDictionary(dictionary: Dictionary.UiChoice, newEntries: IUiDictionary): void;
    setDictionary(dictionary: Dictionary, newEntries: {
        [index: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: ITranslationArray): void;
    setDictionaries(dictionaries: {
        [index: number]: {
            [index: number]: any;
        };
    }): void;
    setEntry(dictionary: Dictionary.Action, entryIndex: ActionType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Book, entryIndex: BookType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Corpse, entryIndex: CreatureType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.Creature, entryIndex: CreatureType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Hint, entryIndex: HintType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.UiChoice, entryIndex: UiTranslation, name: string): void;
    setEntry(dictionary: Dictionary, entryIndex: number, ...entry: string[]): void;
    removeDictionary(dictionary: Dictionary): void;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?(translation: string): string;
}
export interface ISelectorArray {
    [index: number]: ISelector;
}
export interface ILanguageExtension {
    [key: string]: ITranslation;
}
