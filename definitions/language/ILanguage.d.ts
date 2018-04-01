import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
/**
 * Choices for interrupts
 */
export declare enum InterruptChoice {
    Cancel = 0,
    LocalFile = 1,
    No = 2,
    Ok = 3,
    Rejoin = 4,
    Rename = 5,
    Retry = 6,
    SteamWorkshop = 7,
    Yes = 8,
}
/**
 * Ui messages that are on elements that don't change
 */
export declare enum UiTranslation {
    GameActionGather = 0,
    GameQualityExceptional = 1,
    GameQualityRemarkable = 2,
    GameQualityLegendary = 3,
    GameDamageTypeBlunt = 4,
    GameDamageTypeSlashing = 5,
    GameDamageTypePiercing = 6,
    GameDamageTypeFire = 7,
    GameStatsPercentage = 8,
    GameStatsStatAttack = 9,
    GameStatsStatGeneric = 10,
    GameStatsStatGenericWithMax = 11,
    GameStatsStatbar = 12,
    GameStatsStatHealthTooltip = 13,
    GameStatsStatStaminaTooltip = 14,
    GameStatsStatHungerTooltip = 15,
    GameStatsStatThirstTooltip = 16,
    GameStatsStatReputationTooltipDifficulty = 17,
    GameStatsStatReputationTooltipDifficultyEasy = 18,
    GameStatsStatReputationTooltipDifficultyHard = 19,
    GameStatsStatReputationTooltipDifficultyInsane = 20,
    GameStatsStatReputationTooltipDifficultyMedium = 21,
    GameStatsStatReputationTooltipDifficultySimple = 22,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 23,
    GameStatsStatReputationTooltipDifficultyVeryHard = 24,
    GameStatsStatReputationTooltipBenignity = 25,
    GameStatsStatReputationTooltipMalignity = 26,
    GameStatsStatReputationTooltipScore = 27,
    GameStatsStatReputationTooltipTurn = 28,
    GameStatsStatReputationTooltipTicks = 29,
    GameStatsStatWeightTooltip = 30,
    GameStatsStatAttackTooltipTactics = 31,
    GameStatsStatAttackTooltipLeftHand = 32,
    GameStatsStatAttackTooltipRightHand = 33,
    GameStatsStatDefenseTooltipBase = 34,
    GameStatsStatDefenseTooltipBlunt = 35,
    GameStatsStatDefenseTooltipParrying = 36,
    GameStatsStatDefenseTooltipFire = 37,
    GameStatsStatDefenseTooltipPiercing = 38,
    GameStatsStatDefenseTooltipSlashing = 39,
    GameStatsStatusEffectBleedingTooltip = 40,
    GameStatsStatusEffectBurnedTooltip = 41,
    GameStatsStatusEffectPoisonedTooltip = 42,
    GameItemBarterCredit = 43,
    GameItemBarterCreditTrade = 44,
    GameInterruptItemMayBeDestroyedInCraft = 45,
    GameInterruptItemMayBeDestroyedInCraftDescription = 46,
    GameInterruptItemMayBeDestroyedOnUse = 47,
    GameInterruptItemMayBeDestroyedOnUseDescription = 48,
    GameInterruptLoadingQuitting = 49,
    GameInterruptLoadingQuittingDescription = 50,
    GameInterruptLoadingSaving = 51,
    GameInterruptLoadingSavingDescription = 52,
    GameInterruptReleaseCreature = 53,
    GameInterruptReleaseCreatureDescription = 54,
    GameInterruptRenameCreature = 55,
    GameInterruptRenameCreatureDescription = 56,
    GameInterruptRenameDoodad = 57,
    GameInterruptRenameDoodadDescription = 58,
    GameInterruptRenameItem = 59,
    GameInterruptRenameItemDescription = 60,
    GameInterruptReturnToTitleScreen = 61,
    GameInterruptReturnToTitleScreenDailyChallenge = 62,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 63,
    GameInterruptReturnToTitleScreenDescription = 64,
    GameInterruptReturnToTitleScreenDead = 65,
    GameInterruptReturnToTitleScreenDeadDescription = 66,
    GameInterruptLoadingWorld = 67,
    GameInterruptLoadingWorldDescription = 68,
    GameInterruptLoadingGeneratingWorld = 69,
    GameInterruptLoadingGeneratingWorldDescription = 70,
    GameInterruptLoadingFinalizingWorld = 71,
    GameInterruptLoadingFinalizingWorldDescription = 72,
    GameInterruptSailAwayEnd = 73,
    GameInterruptSailAwayEndDescription = 74,
    GameInterruptSailAwayReturnable = 75,
    GameInterruptSailAwayReturnableDescription = 76,
    GameInterruptTravelAway = 77,
    GameInterruptTravelAwayDescription = 78,
    GameInterruptLoadingResting = 79,
    GameInterruptLoadingRestingDescription = 80,
    GameInterruptLoadingSleeping = 81,
    GameInterruptLoadingSleepingDescription = 82,
    GameInterruptLoadingTraveling = 83,
    GameInterruptLoadingTravelingDescription = 84,
    GameInterruptLoadingLostGLContext = 85,
    GameInterruptLoadingAutoSaving = 86,
    GameInterruptLoadingAutoSavingDescription = 87,
    GameInterruptLoadingLostGLContextDescription = 88,
    GameInterruptLoadingMods = 89,
    GameInterruptLoadingModsDescription = 90,
    GameInterruptLoadingMultiplayerPlayerConnecting = 91,
    GameInterruptLoadingMultiplayerSyncing = 92,
    GameInterruptDangerousStep = 93,
    GameInterruptDangerousStepDescription = 94,
    GameInterruptSaveFailure = 95,
    GameInterruptSaveFailureDescription = 96,
    GameInterruptDesalinationNoNeed = 97,
    GameInterruptDesalinationNoNeedDescription = 98,
    GameInterruptConfirmationActionOnFire = 99,
    GameInterruptConfirmationActionOnFireDescription = 100,
    GameInterruptConfirmationDestroyOnGather = 101,
    GameInterruptConfirmationDestroyOnGatherDescription = 102,
    GameInterruptLoadingGame = 103,
    GameInterruptLoadingGameDescription = 104,
    GameInterruptLoadingSprites = 105,
    GameInterruptLoadingSpritesDescription = 106,
    GameInterruptMultiplayerSynchronizing = 107,
    GameInterruptMultiplayerSynchronizingDescription = 108,
    GameInterruptNoSaveOnDeath = 109,
    GameInterruptNoSaveOnDeathDescription = 110,
    GameMultiplayerInterruptBanned = 111,
    GameMultiplayerInterruptConnecting = 112,
    GameMultiplayerInterruptConnectingDescription = 113,
    GameMultiplayerInterruptFailedToConnect = 114,
    GameMultiplayerInterruptFailedToLoadMods = 115,
    GameMultiplayerInterruptKicked = 116,
    GameMultiplayerInterruptLostConnection = 117,
    GameMultiplayerInterruptServerShutdown = 118,
    GameMultiplayerInterruptSynchronizationError = 119,
    GameMultiplayerInterruptSynchronizationErrorDescription = 120,
    GameMultiplayerInterruptUnableToJoinGame = 121,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 122,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 123,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 124,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 125,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 126,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 127,
    MenuAboutTitle = 128,
    MenuAboutDescription = 129,
    MenuAboutGameDescription = 130,
    MenuAboutSectionTeam = 131,
    MenuAboutTeamMemberResponsibilities = 132,
    MenuAboutTeamMemberResponsibilityProgramming = 133,
    MenuAboutTeamMemberResponsibilityDesign = 134,
    MenuAboutTeamMemberResponsibilityWeb = 135,
    MenuAboutTeamMemberResponsibilityArt = 136,
    MenuAboutTeamMemberResponsibilityPR = 137,
    MenuAboutTeamMemberResponsibilityUX = 138,
    MenuAboutTeamMemberResponsibilityMusic = 139,
    MenuAboutTeamMemberName = 140,
    MenuAboutTeamMemberNickname = 141,
    MenuAboutSectionContributors = 142,
    MenuAboutSectionSpecialThanks = 143,
    MenuAboutTextSpecialThanksTestorsAndDonators = 144,
    MenuAboutSectionLibraries = 145,
    MenuAboutSectionLibrariesDescription = 146,
    MenuChangelogTitle = 147,
    MenuChangelogDescription = 148,
    MenuChangelogSectionBalance = 149,
    MenuChangelogSectionBugFixes = 150,
    MenuChangelogSectionImprovements = 151,
    MenuChangelogSectionMod = 152,
    MenuChangelogSectionModding = 153,
    MenuChangelogSectionNew = 154,
    MenuChangelogSectionTechnical = 155,
    MenuChangelogHeadingFailedLoad = 156,
    MenuChangelogHeadingChangeCount = 157,
    MenuChangelogInterruptLoadingChangelog = 158,
    MenuChangelogInterruptLoadingChangelogDescription = 159,
    MenuCharacterCreationButtonExportTooltip = 160,
    MenuCharacterCreationButtonImportTooltip = 161,
    MenuCharacterCreationButtonStartGame = 162,
    MenuCharacterCreationButtonJoinGame = 163,
    MenuCharacterCreationDescription = 164,
    MenuCharacterCreationHeadingHairColor = 165,
    MenuCharacterCreationHeadingHairStyle = 166,
    MenuCharacterCreationHeadingSkinTone = 167,
    MenuCharacterCreationLabelName = 168,
    MenuCharacterCreationTitle = 169,
    MenuCharacterCreationInterruptImportCharacterFailure = 170,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 171,
    MenuCharacterCreationButtonRotateLeftTooltip = 172,
    MenuCharacterCreationButtonRotateRightTooltip = 173,
    MenuCharacterCreationButtonRandomizeTooltip = 174,
    MenuCharacterSelectionButtonNewCharacter = 175,
    MenuCharacterSelectionCharacterSortLastUse = 176,
    MenuCharacterSelectionCharacterSortName = 177,
    MenuCharacterSelectionCharacterSortUseCount = 178,
    MenuCharacterSelectionDescription = 179,
    MenuCharacterSelectionHeadingNoCharacters = 180,
    MenuCharacterSelectionTitle = 181,
    MenuCharacterSelectionLabelLastUse = 182,
    MenuCharacterSelectionLabelUseCount = 183,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 184,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 185,
    MenuCharacterSelectionInterruptDeleteCharacter = 186,
    MenuFriendsDescription = 187,
    MenuFriendsHeadingNotPlayingWayward = 188,
    MenuFriendsHeadingPlayingWayward = 189,
    MenuFriendsSectionNoFriendsOnline = 190,
    MenuFriendsSectionNoFriendsWayward = 191,
    MenuFriendsTitle = 192,
    MenuFriendsUnableToLoad = 193,
    MenuFriendsJoinDedicatedServer = 194,
    MenuGameEndTitleDead = 195,
    MenuGameEndTitleWon = 196,
    MenuGameEndDescriptionDead1 = 197,
    MenuGameEndDescriptionDead2 = 198,
    MenuGameEndDescriptionDead3 = 199,
    MenuGameEndDescriptionWin1 = 200,
    MenuGameEndDescriptionWin2 = 201,
    MenuGameEndDescriptionWin3 = 202,
    MenuGameEndShareFacebook = 203,
    MenuGameEndShareTwitter = 204,
    MenuHighscoresTitle = 205,
    MenuHighscoresDescription = 206,
    MenuHighscoresDifficultyFilterHardcore = 207,
    MenuHighscoresDifficultyFilterCasual = 208,
    MenuHighscoresDifficultyFilterDailyChallenge = 209,
    MenuHighscoresDifficultyFilterAll = 210,
    MenuHighscoresSortScore = 211,
    MenuHighscoresSortSaveName = 212,
    MenuHighscoresSortRecency = 213,
    MenuHighscoresHighscoreLabelDifficulty = 214,
    MenuHighscoresHighscoreLabelTurns = 215,
    MenuHighscoresHighscoreLabelScore = 216,
    MenuHighscoresHighscoreLabelPlace = 217,
    MenuHighscoresHighscoreLabelDate = 218,
    MenuHighscoresHighscoreLabelDeathBy = 219,
    MenuHighscoresHighscoreLabelSaveName = 220,
    MenuHighscoresHighscoreLabelCharacterName = 221,
    MenuHighscoresCharacterNameUnknown = 222,
    MenuLoadGameButtonNewGame = 223,
    MenuLoadGameButtonNewGameButtonImportTooltip = 224,
    MenuLoadGameDescription = 225,
    MenuLoadGameSaveButtonDeleteTooltip = 226,
    MenuLoadGameSaveButtonEditNameTooltip = 227,
    MenuLoadGameSaveButtonExportTooltip = 228,
    MenuLoadGameSaveSortCreatedTime = 229,
    MenuLoadGameSaveSortName = 230,
    MenuLoadGameSaveSortSaveTime = 231,
    MenuLoadGameSaveSortTurnCount = 232,
    MenuLoadGameSaveTooltipLabelCreatedTime = 233,
    MenuLoadGameSaveTooltipLabelSaveTime = 234,
    MenuLoadGameSaveTooltipLabelScore = 235,
    MenuLoadGameSaveTooltipLabelSeed = 236,
    MenuLoadGameSaveTooltipLabelTurns = 237,
    MenuLoadGameSaveTooltipLabelMods = 238,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 239,
    MenuLoadGameSlotsRemaining = 240,
    MenuLoadGameTitle = 241,
    MenuLoadGameInterruptDeleteSave = 242,
    MenuLoadGameInterruptDeleteSaveDescription = 243,
    MenuLoadGameInterruptLoadingExportingSave = 244,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 245,
    MenuLoadGameInterruptLoadingImportingSave = 246,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 247,
    MenuLoadGameInterruptImportSaveFailure = 248,
    MenuLoadGameInterruptImportSaveFailureDescription = 249,
    MenuLoadGameInterruptExportType = 250,
    MenuLoadGameInterruptExportTypeDescription = 251,
    MenuLoadGameInterruptPublishingSave = 252,
    MenuLoadGameInterruptPublishingSaveDescription = 253,
    MenuLoadGameInterruptMissingMod = 254,
    MenuLoadGameInterruptMissingModDescription = 255,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 256,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 257,
    MenuLoadGameInterruptLoading = 258,
    MenuLoadGameInterruptLoadingDescription = 259,
    MenuMainButtonAbout = 260,
    MenuMainButtonChangelog = 261,
    MenuMainButtonContinueGame = 262,
    MenuMainButtonFriends = 263,
    MenuMainButtonFriendsWithCount = 264,
    MenuMainButtonHighscores = 265,
    MenuMainButtonLoadGame = 266,
    MenuMainButtonMods = 267,
    MenuMainButtonNewGame = 268,
    MenuMainButtonNews = 269,
    MenuMainButtonOptions = 270,
    MenuMainInterruptLoadingNews = 271,
    MenuMainInterruptLoadingNewsDescription = 272,
    MenuMainInterruptLoadingChangelog = 273,
    MenuMainInterruptLoadingChangelogDescription = 274,
    MenuMainInterruptWelcomeToVersion = 275,
    MenuMainInterruptWelcomeToVersionDescription = 276,
    MenuMainInterruptOldVersionWarning = 277,
    MenuMainInterruptOldVersionWarningDescription = 278,
    MenuModsButtonDisableAll = 279,
    MenuModsButtonEnableAll = 280,
    MenuModsButtonModdingGuide = 281,
    MenuModsButtonOpenFolder = 282,
    MenuModsButtonOpenWorkshop = 283,
    MenuModsDescription = 284,
    MenuModsHeadingInternal = 285,
    MenuModsHeadingLocal = 286,
    MenuModsHeadingNoMods = 287,
    MenuModsHeadingWorkshop = 288,
    MenuModsInterruptConfirmPublish = 289,
    MenuModsInterruptConfirmPublishUpdate = 290,
    MenuModsInterruptModEnableMultipleLanguages = 291,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 292,
    MenuModsInterruptModEnableUseLanguage = 293,
    MenuModsInterruptModEnableUseLanguageDescription = 294,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 295,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 296,
    MenuModsInterruptConfirmPublishDescription = 297,
    MenuModsInterruptConfirmPublishUpdateDescription = 298,
    MenuModsInterruptPublishingMod = 299,
    MenuModsInterruptPublishingModDescription = 300,
    MenuModsInterruptPublishError = 301,
    MenuModsInterruptPublishErrorDescription = 302,
    MenuModsInterruptUpdatingMod = 303,
    MenuModsInterruptUpdatingModDescription = 304,
    MenuModsInterruptPublishUpdateError = 305,
    MenuModsInterruptPublishUpdateErrorDescription = 306,
    MenuModsInterruptInfoMissingDependencies = 307,
    MenuModsInterruptInfoMissingDependenciesDescription = 308,
    MenuModsInterruptConfirmEnableDisabledDependencies = 309,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 310,
    MenuModsInterruptConfirmDisableDependents = 311,
    MenuModsInterruptConfirmDisableDependentsDescription = 312,
    MenuModsInterruptConfirmUninstallMod = 313,
    MenuModsInterruptConfirmUninstallModDescription = 314,
    MenuModsSortName = 315,
    MenuModsSortCreatedDate = 316,
    MenuModsSortInstallDate = 317,
    MenuModsSortAuthor = 318,
    MenuModsSortLastUpdated = 319,
    MenuModsTabInternal = 320,
    MenuModsTabLocal = 321,
    MenuModsTabWorkshop = 322,
    MenuModsTitle = 323,
    MenuModsTooltipLabelAuthor = 324,
    MenuModsTooltipLabelDependencies = 325,
    MenuModsTooltipLabelProvides = 326,
    MenuModsTooltipLabelVersion = 327,
    MenuModsTooltipLabelDescription = 328,
    MenuModsTooltipLabelInstallDate = 329,
    MenuModsTooltipLabelCreatedDate = 330,
    MenuModsTooltipLabelLastUpdatedDate = 331,
    MenuModsTooltipModOptions = 332,
    MenuModsTooltipProvidesCustomizations = 333,
    MenuModsTooltipProvidesImageOverrides = 334,
    MenuModsTooltipProvidesLanguage = 335,
    MenuModsTooltipProvidesScript = 336,
    MenuModsTooltipProvidesStylesheet = 337,
    MenuModsTooltipPublishMod = 338,
    MenuModsTooltipUninstallMod = 339,
    MenuModsTooltipViewInSteamWorkshop = 340,
    MenuModsTooltipCanLoadStateModLoadError = 341,
    MenuModsTooltipCanLoadStateDependencyIssue = 342,
    MenuModsTooltipCanLoadStateModRequiresItself = 343,
    MenuModsTooltipCanLoadStateMissingRequiredMod = 344,
    MenuModsTooltipCanLoadStateReqiredModNotLoaded = 345,
    MenuModsTooltipCanLoadStateLocalModPrecedence = 346,
    MenuModsTooltipCanLoadStateIncompatibleVersion = 347,
    MenuNewGameButtonNext = 348,
    MenuNewGameButtonStartServer = 349,
    MenuNewGameDescription = 350,
    MenuNewGameLabelEditName = 351,
    MenuNewGameLabelEditSeed = 352,
    MenuNewGamePlaceholderEditSeed = 353,
    MenuNewGameTitle = 354,
    MenuNewGameChoiceDifficultyCasual = 355,
    MenuNewGameChoiceDifficultyCasualDescription = 356,
    MenuNewGameChoiceDifficultyHardcore = 357,
    MenuNewGameChoiceDifficultyHardcoreDescription = 358,
    MenuNewGameChoiceDifficultyDailyChallenge = 359,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 360,
    MenuNewGameChoiceSingleplayer = 361,
    MenuNewGameChoiceSingleplayerDescription = 362,
    MenuNewGameChoiceMultiplayer = 363,
    MenuNewGameChoiceMultiplayerDescription = 364,
    MenuNewGameChoiceTurnsManual = 365,
    MenuNewGameChoiceTurnsManualDescription = 366,
    MenuNewGameChoiceTurnsRealTime = 367,
    MenuNewGameChoiceTurnsRealTimeDescription = 368,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 369,
    MenuNewsButtonDiscord = 370,
    MenuNewsButtonFacebook = 371,
    MenuNewsButtonReddit = 372,
    MenuNewsButtonTwitter = 373,
    MenuNewsDescription = 374,
    MenuNewsHeadingSocial = 375,
    MenuNewsTitle = 376,
    MenuNewsHeadingUnableToLoad = 377,
    MenuNewsButtonAllNews = 378,
    MenuOptionsInterruptLoading = 379,
    MenuOptionsInterruptLoadingDescription = 380,
    MenuOptionsButtonDitherFogOfWar = 381,
    MenuOptionsButtonFullscreen = 382,
    MenuOptionsButtonOpenNotesAutomatically = 383,
    MenuOptionsButtonScreenshotMode = 384,
    MenuOptionsButtonDeveloperMode = 385,
    MenuOptionsButtonDeveloperModeContextMenu = 386,
    MenuOptionsButtonPixelFont = 387,
    MenuOptionsButtonReloadGame = 388,
    MenuOptionsButtonSaveDataClearAll = 389,
    MenuOptionsButtonSaveDataClearCharacters = 390,
    MenuOptionsButtonSaveDataClearHighscores = 391,
    MenuOptionsButtonSaveDataClearMilestones = 392,
    MenuOptionsButtonSaveDataClearOptions = 393,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 394,
    MenuOptionsButtonSaveDataClearSaves = 395,
    MenuOptionsButtonSkipSplash = 396,
    MenuOptionsButtonToggleDevTools = 397,
    MenuOptionsButtonTooltipsCreatures = 398,
    MenuOptionsButtonOpenLogsFolder = 399,
    MenuOptionsButtonTooltipsDoodads = 400,
    MenuOptionsButtonTooltipsItems = 401,
    MenuOptionsButtonTooltipsTerrain = 402,
    MenuOptionsButtonDropLocationFacing = 403,
    MenuOptionsButtonDropLocationFeet = 404,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 405,
    MenuOptionsDescription = 406,
    MenuOptionsHeadingAudio = 407,
    MenuOptionsHeadingDeveloper = 408,
    MenuOptionsHeadingGameplayOptions = 409,
    MenuOptionsHeadingGeneralOptions = 410,
    MenuOptionsHeadingControls = 411,
    MenuOptionsHeadingLanguage = 412,
    MenuOptionsHeadingModOptions = 413,
    MenuOptionsHeadingOther = 414,
    MenuOptionsHeadingSaveData = 415,
    MenuOptionsHeadingTooltips = 416,
    MenuOptionsHeadingVideo = 417,
    MenuOptionsInterruptReloadGame = 418,
    MenuOptionsInterruptSaveDataClearAll = 419,
    MenuOptionsInterruptSaveDataClearAllDescription = 420,
    MenuOptionsInterruptSaveDataClearCharacters = 421,
    MenuOptionsInterruptSaveDataClearHighscores = 422,
    MenuOptionsInterruptSaveDataClearMilestones = 423,
    MenuOptionsInterruptSaveDataClearOptions = 424,
    MenuOptionsInterruptSaveDataClearSaves = 425,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 426,
    MenuOptionsLabelInterfaceScale = 427,
    MenuOptionsLabelTurnDelay = 428,
    MenuOptionsTooltipTurnDelay = 429,
    MenuOptionsLabelVolumeEffects = 430,
    MenuOptionsLabelVolumeMusic = 431,
    MenuOptionsTabAudio = 432,
    MenuOptionsTabDeveloper = 433,
    MenuOptionsTabGameplay = 434,
    MenuOptionsTabGeneral = 435,
    MenuOptionsTabControls = 436,
    MenuOptionsTabMods = 437,
    MenuOptionsTabSaveData = 438,
    MenuOptionsTabVideo = 439,
    MenuOptionsTitle = 440,
    MenuOptionsTooltipMusicNextTrack = 441,
    MenuOptionsBindChoose = 442,
    MenuOptionsBindChooseAdd = 443,
    MenuOptionsBindableTypeGame = 444,
    MenuOptionsBindableTypeDialog = 445,
    MenuOptionsBindableTypeMenu = 446,
    MenuOptionsBindableTypeDeveloper = 447,
    MenuOptionsBindableTypeMod = 448,
    MenuOptionsBindLabelModifier = 449,
    MenuOptionsBindLabelOr = 450,
    MenuOptionsBindButtonResetTooltip = 451,
    MenuOptionsBindButtonDeleteTooltip = 452,
    MenuOptionsBindButtonAddTooltip = 453,
    MenuOptionsBindNoBinding = 454,
    MenuOptionsButtonAlwaysShowMoreInformation = 455,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 456,
    MenuOptionsButtonAutoGather = 457,
    MenuOptionsButtonAutoGatherTooltip = 458,
    MenuOptionsButtonAutoPickup = 459,
    MenuOptionsButtonAutoPickupTooltip = 460,
    MenuOptionsButtonDropOnGather = 461,
    MenuOptionsButtonDropOnGatherTooltip = 462,
    MenuOptionsButtonKeepSortActive = 463,
    MenuOptionsButtonKeepSortActiveTooltip = 464,
    MenuOptionsButtonProtectedCraftingItems = 465,
    MenuOptionsButtonProtectedCraftingItemsTooltip = 466,
    MenuOptionsButtonHideEquippedHeadgear = 467,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 468,
    MenuOptionsButtonWarnOnDangerousActions = 469,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 470,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 471,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 472,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 473,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 474,
    MenuOptionsHeadingWarnWhenBreakingItems = 475,
    MenuOptionsButtonSaveDataClearBindings = 476,
    MenuOptionsInterruptSaveDataClearBindings = 477,
    MenuOptionsTooltipDialogOpacity = 478,
    MenuOptionsLabelDialogOpacity = 479,
    MenuPauseButtonContinue = 480,
    MenuPauseButtonOptions = 481,
    MenuPauseButtonMultiplayer = 482,
    MenuPauseButtonTitleScreen = 483,
    MenuPauseButtonStopServer = 484,
    MenuPauseHeadingPaused = 485,
    MenuPauseParagraphPaused = 486,
    MenuPauseHeadingNotPaused = 487,
    MenuPauseParagraphNotPaused = 488,
    MenuPauseHeadingDedicatedServer = 489,
    MenuPauseParagraphDedicatedServer = 490,
    MenuMultiplayerTitle = 491,
    MenuMultiplayerDescription = 492,
    MenuMultiplayerOpenServer = 493,
    MenuMultiplayerOpenServerDescription = 494,
    MenuMultiplayerPauseServer = 495,
    MenuMultiplayerPauseServerDescription = 496,
    MenuJoinDedicatedServerTitle = 497,
    MenuJoinDedicatedServerDescription = 498,
    MenuJoinDedicatedServerIP = 499,
    MenuJoinDedicatedServerIPPlaceholder = 500,
    MenuJoinDedicatedServerNext = 501,
    MenuSharedSortBy = 502,
    MenuSharedSortDirection = 503,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 504,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 505,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 506,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 507,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 508,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 509,
    MenuSharedMultiplayerChoicePVP = 510,
    MenuSharedMultiplayerChoicePVPDescription = 511,
    MenuSharedMultiplayerMaxPlayers = 512,
    MenuSharedRealTimeTickSpeedTooltip = 513,
    MenuSharedRealTimeTickSpeedLabel = 514,
    MenuSharedButtonDefault = 515,
    MiscPlayerNameDefault = 516,
    MiscSaveNameDefault = 517,
    MiscSaveVersionUnknown = 518,
    MiscDailyChallengeName = 519,
    MiscDifficultyHardcore = 520,
    MiscDifficultyCasual = 521,
    MiscDifficultyDailyChallenge = 522,
    MiscVersion = 523,
    MiscVersionBeta = 524,
    MiscVersionRelease = 525,
    SharedListSeparator = 526,
    SteamworksInterruptURLOpenedInBrowser = 527,
    SteamworksInterruptURLOpenedInBrowserDescription = 528,
    SteamworksInterruptWorkshopOpenedInBrowser = 529,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 530,
    SteamworksInterruptModWithNameAlreadyExists = 531,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 532,
    SteamworksInterruptModImportSaveGameFailure = 533,
    SteamworksInterruptModImportSaveGameFailureDescription = 534,
    SteamworksInterruptModImportedSaveGame = 535,
    SteamworksInterruptModImportedSaveGameDescription = 536,
    SteamworksInterruptLoadingRefreshingMods = 537,
    SteamworksInterruptLoadingRefreshingModsDescription = 538,
    SteamworksInterruptOpenFolderFailure = 539,
    SteamworksInterruptOpenFolderFailureDescription = 540,
    Bleeding = 541,
    Burned = 542,
    ChatButton = 543,
    DisableHints = 544,
    EnableHints = 545,
    EquipmentBack = 546,
    EquipmentBelt = 547,
    EquipmentChest = 548,
    EquipmentFeet = 549,
    EquipmentHands = 550,
    EquipmentHead = 551,
    EquipmentLeftHand = 552,
    EquipmentLeftHandOption = 553,
    EquipmentLegs = 554,
    EquipmentNeck = 555,
    EquipmentRightHand = 556,
    EquipmentRightHandOption = 557,
    EquipmentUse = 558,
    HudActions = 559,
    HudCrafting = 560,
    HudEquipment = 561,
    HudFilter = 562,
    HudHelp = 563,
    HudInventory = 564,
    HudMessages = 565,
    HudMilestones = 566,
    HudOptions = 567,
    HudSave = 568,
    HudSkills = 569,
    HudTitleScreen = 570,
    MenuDeleteAllGameData = 571,
    MenuDeleteGame = 572,
    MenuEditGame = 573,
    MenuExportGame = 574,
    MenuExportSave = 575,
    MenuHighscoresAll = 576,
    MenuHighscoresDailyChallenge = 577,
    MenuHighscoresMessage = 578,
    MenuHighscoresNone = 579,
    MenuHighscoresNormal = 580,
    MenuImportGame = 581,
    MenuImportSave = 582,
    MenuJoinGame = 583,
    MenuJoinGameJoin = 584,
    MenuJoinGameMessage = 585,
    MenuJoinGameName = 586,
    MenuJoinGameServer = 587,
    MenuOptionsMessage = 588,
    MenuQuitGame = 589,
    MenuReloadGame = 590,
    MenuToggleDeveloperTools = 591,
    MenuVisitSteamWorkshop = 592,
    NextHint = 593,
    OptionsAudio = 594,
    OptionsAutoGather = 595,
    OptionsAutoGatherTooltip = 596,
    OptionsAutoPickup = 597,
    OptionsAutoPickupTooltip = 598,
    OptionsDropItemsAtFeet = 599,
    OptionsDropItemsAtFeetTooltip = 600,
    OptionsDropItemsAtFeetWhenFacingTileBlocked = 601,
    OptionsDropItemsAtFeetWhenFacingTileBlockedTooltip = 602,
    OptionsDropItemsOnFacingTile = 603,
    OptionsDropItemsOnFacingTileTooltip = 604,
    OptionsDropOnGather = 605,
    OptionsDropOnGatherTooltip = 606,
    OptionsHideEquippedHeadgear = 607,
    OptionsHideEquippedHeadgearTooltip = 608,
    OptionsKeepSortActive = 609,
    OptionsKeepSortActiveTooltip = 610,
    OptionsProtectedCraftingItems = 611,
    OptionsProtectedCraftingItemsTooltip = 612,
    OptionsWarnOnDangerousActions = 613,
    OptionsWarnOnDangerousActionsTooltip = 614,
    OptionsWarnWhenBreakingItems = 615,
    OptionsWarnWhenBreakingItemsOnCraft = 616,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 617,
    OptionsWarnWhenBreakingItemsTooltip = 618,
    Poisoned = 619,
    PreviousHint = 620,
    QuickSlot1 = 621,
    QuickSlot2 = 622,
    QuickSlot3 = 623,
    QuickSlot4 = 624,
    QuickSlot5 = 625,
    QuickSlot6 = 626,
    QuickSlot7 = 627,
    QuickSlot8 = 628,
    QuickSlot9 = 629,
    TabCrafting = 630,
    TabDismantle = 631,
    Version = 632,
    WindowTitleContainer = 633,
    WindowTitleCrafting = 634,
    WindowTitleEquipment = 635,
    WindowTitleInventory = 636,
    WindowTitleMap = 637,
    WindowTitleMessages = 638,
    WindowTitleMilestones = 639,
    WindowTitleOptions = 640,
    WindowTitleSkills = 641,
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
    BindPress = 13,
    Skill = 14,
    Terrain = 15,
    TileEvent = 16,
    InterruptChoice = 17,
    Ui = 18,
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
    [index: number]: [string, string, string, string] | [string, string];
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
export interface IPressNameDictionary {
    [index: string]: string;
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
    setDictionary(dictionary: Dictionary.InterruptChoice, newEntries: IUiDictionary): void;
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
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string, plural?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.InterruptChoice, entryIndex: UiTranslation, name: string): void;
    setEntry(dictionary: Dictionary.BindPress, entryName: string, name: string): void;
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
