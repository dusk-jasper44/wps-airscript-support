/// <reference path="lib.kso.d.ts" />

declare const Application: Application;
declare const ActiveSheet: Application["ActiveSheet"];
declare const ActiveWorkbook: Application["ActiveWorkbook"];
declare const Range: Application["Range"];
declare const WorksheetFunction: WorksheetFunction;

declare enum Constants {
    xlAll = -4104,
    xlAutomatic = -4105,
    xlBoth = 1,
    xlCenter = -4108,
    xlChecker = 9,
    xlCircle = 8,
    xlCorner = 2,
    xlCrissCross = 16,
    xlCross = 4,
    xlDiamond = 2,
    xlDistributed = -4117,
    xlDoubleAccounting = 5,
    xlFixedValue = 1,
    xlFormats = -4122,
    xlGray16 = 17,
    xlGray8 = 18,
    xlGrid = 15,
    xlHigh = -4127,
    xlInside = 2,
    xlJustify = -4130,
    xlLightDown = 13,
    xlLightHorizontal = 11,
    xlLightUp = 14,
    xlLightVertical = 12,
    xlLow = -4134,
    xlManual = -4135,
    xlMinusValues = 3,
    xlModule = -4141,
    xlNextToAxis = 4,
    xlNone = -4142,
    xlNotes = -4144,
    xlOff = -4146,
    xlOn = 1,
    xlPercent = 2,
    xlPlus = 9,
    xlPlusValues = 2,
    xlSemiGray75 = 10,
    xlShowLabel = 4,
    xlShowLabelAndPercent = 5,
    xlShowPercent = 3,
    xlShowValue = 2,
    xlSimple = -4154,
    xlSingle = 2,
    xlSingleAccounting = 4,
    xlSolid = 1,
    xlSquare = 1,
    xlStar = 5,
    xlStError = 4,
    xlToolbarButton = 2,
    xlTriangle = 3,
    xlGray25 = -4124,
    xlGray50 = -4125,
    xlGray75 = -4126,
    xlBottom = -4107,
    xlLeft = -4131,
    xlRight = -4152,
    xlTop = -4160,
    xl3DBar = -4099,
    xl3DSurface = -4103,
    xlBar = 2,
    xlColumn = 3,
    xlCombination = -4111,
    xlCustom = -4114,
    xlDefaultAutoFormat = -1,
    xlMaximum = 2,
    xlMinimum = 4,
    xlOpaque = 3,
    xlTransparent = 2,
    xlBidi = -5000,
    xlLatin = -5001,
    xlContext = -5002,
    xlLTR = -5003,
    xlRTL = -5004,
    xlFullScript = 1,
    xlPartialScript = 2,
    xlMixedScript = 3,
    xlMixedAuthorizedScript = 4,
    xlVisualCursor = 2,
    xlLogicalCursor = 1,
    xlSystem = 1,
    xlPartial = 3,
    xlHindiNumerals = 3,
    xlBidiCalendar = 3,
    xlGregorian = 2,
    xlComplete = 4,
    xlScale = 3,
    xlClosed = 3,
    xlColor1 = 7,
    xlColor2 = 8,
    xlColor3 = 9,
    xlConstants = 2,
    xlContents = 2,
    xlBelow = 1,
    xlCascade = 7,
    xlCenterAcrossSelection = 7,
    xlChart4 = 2,
    xlChartSeries = 17,
    xlChartShort = 6,
    xlChartTitles = 18,
    xlClassic1 = 1,
    xlClassic2 = 2,
    xlClassic3 = 3,
    xl3DEffects1 = 13,
    xl3DEffects2 = 14,
    xlAbove = 0,
    xlAccounting1 = 4,
    xlAccounting2 = 5,
    xlAccounting3 = 6,
    xlAccounting4 = 17,
    xlAdd = 2,
    xlDebugCodePane = 13,
    xlDesktop = 9,
    xlDirect = 1,
    xlDivide = 5,
    xlDoubleClosed = 5,
    xlDoubleOpen = 4,
    xlDoubleQuote = 1,
    xlEntireChart = 20,
    xlExcelMenus = 1,
    xlExtended = 3,
    xlFill = 5,
    xlFirst = 0,
    xlFloating = 5,
    xlFormula = 5,
    xlGeneral = 1,
    xlGridline = 22,
    xlIcons = 1,
    xlImmediatePane = 12,
    xlInteger = 2,
    xlLast = 1,
    xlLastCell = 11,
    xlList1 = 10,
    xlList2 = 11,
    xlList3 = 12,
    xlLocalFormat1 = 15,
    xlLocalFormat2 = 16,
    xlLong = 3,
    xlLotusHelp = 2,
    xlMacrosheetCell = 7,
    xlMixed = 2,
    xlMultiply = 4,
    xlNarrow = 1,
    xlNoDocuments = 3,
    xlOpen = 2,
    xlOutside = 3,
    xlReference = 4,
    xlSemiautomatic = 2,
    xlShort = 1,
    xlSingleQuote = 2,
    xlStrict = 2,
    xlSubtract = 3,
    xlTextBox = 16,
    xlTiled = 1,
    xlTitleBar = 8,
    xlToolbar = 1,
    xlVisible = 12,
    xlWatchPane = 11,
    xlWide = 3,
    xlWorkbookTab = 6,
    xlWorksheet4 = 1,
    xlWorksheetCell = 3,
    xlWorksheetShort = 5,
    xlAllExceptBorders = 7,
    xlLeftToRight = 2,
    xlTopToBottom = 1,
    xlVeryHidden = 2,
    xlDrawingObject = 14
}

declare enum XlCreator {
    xlCreatorCode = 1480803660
}

declare enum XlChartGallery {
    xlBuiltIn = 21,
    xlUserDefined = 22,
    xlAnyGallery = 23
}

declare enum XlDataSeriesType {
    xlAutoFill = 4,
    xlChronological = 3,
    xlGrowth = 2,
    xlDataSeriesLinear = -4132
}

declare enum XlBackground {
    xlBackgroundAutomatic = -4105,
    xlBackgroundOpaque = 3,
    xlBackgroundTransparent = 2
}

declare enum XlWindowState {
    xlMaximized = -4137,
    xlMinimized = -4140,
    xlNormal = -4143
}

declare enum XlArrowHeadLength {
    xlArrowHeadLengthLong = 3,
    xlArrowHeadLengthMedium = -4138,
    xlArrowHeadLengthShort = 1
}

declare enum XlErrorBarDirection {
    xlX = -4168,
    xlY = 1
}

declare enum XlArrowHeadStyle {
    xlArrowHeadStyleClosed = 3,
    xlArrowHeadStyleDoubleClosed = 5,
    xlArrowHeadStyleDoubleOpen = 4,
    xlArrowHeadStyleNone = -4142,
    xlArrowHeadStyleOpen = 2
}

declare enum XlArrowHeadWidth {
    xlArrowHeadWidthMedium = -4138,
    xlArrowHeadWidthNarrow = 1,
    xlArrowHeadWidthWide = 3
}

declare enum XlChartPicturePlacement {
    xlSides = 1,
    xlEnd = 2,
    xlEndSides = 3,
    xlFront = 4,
    xlFrontSides = 5,
    xlFrontEnd = 6,
    xlAllFaces = 7
}

declare enum XlOrientation {
    xlDownward = -4170,
    xlHorizontal = -4128,
    xlUpward = -4171,
    xlVertical = -4166
}

declare enum XlDataSeriesDate {
    xlDay = 1,
    xlMonth = 3,
    xlWeekday = 2,
    xlYear = 4
}

declare enum XlLineStyle {
    xlContinuous = 1,
    xlDash = -4115,
    xlDashDot = 4,
    xlDashDotDot = 5,
    xlDot = -4118,
    xlDouble = -4119,
    xlSlantDashDot = 13,
    xlLineStyleNone = -4142
}

declare enum XlPictureConvertorType {
    xlBMP = 1,
    xlCGM = 7,
    xlDRW = 4,
    xlDXF = 5,
    xlEPS = 8,
    xlHGL = 6,
    xlPCT = 13,
    xlPCX = 10,
    xlPIC = 11,
    xlPLT = 12,
    xlTIF = 9,
    xlWMF = 2,
    xlWPG = 3
}

declare enum XlPattern {
    xlPatternAutomatic = -4105,
    xlPatternChecker = 9,
    xlPatternCrissCross = 16,
    xlPatternDown = -4121,
    xlPatternGray16 = 17,
    xlPatternGray25 = -4124,
    xlPatternGray50 = -4125,
    xlPatternGray75 = -4126,
    xlPatternGray8 = 18,
    xlPatternGrid = 15,
    xlPatternHorizontal = -4128,
    xlPatternLightDown = 13,
    xlPatternLightHorizontal = 11,
    xlPatternLightUp = 14,
    xlPatternLightVertical = 12,
    xlPatternNone = -4142,
    xlPatternSemiGray75 = 10,
    xlPatternSolid = 1,
    xlPatternUp = -4162,
    xlPatternVertical = -4166,
    xlPatternLinearGradient = 4000,
    xlPatternRectangularGradient = 4001
}

declare enum XlDisplayUnit {
    xlHundreds = -2,
    xlThousands = -3,
    xlTenThousands = -4,
    xlHundredThousands = -5,
    xlMillions = -6,
    xlTenMillions = -7,
    xlHundredMillions = -8,
    xlThousandMillions = -9,
    xlMillionMillions = -10
}

declare enum XlChartType {
    xlColumnClustered = 51,
    xlColumnStacked = 52,
    xlColumnStacked100 = 53,
    xl3DColumnClustered = 54,
    xl3DColumnStacked = 55,
    xl3DColumnStacked100 = 56,
    xlBarClustered = 57,
    xlBarStacked = 58,
    xlBarStacked100 = 59,
    xl3DBarClustered = 60,
    xl3DBarStacked = 61,
    xl3DBarStacked100 = 62,
    xlLineStacked = 63,
    xlLineStacked100 = 64,
    xlLineMarkers = 65,
    xlLineMarkersStacked = 66,
    xlLineMarkersStacked100 = 67,
    xlPieOfPie = 68,
    xlPieExploded = 69,
    xl3DPieExploded = 70,
    xlBarOfPie = 71,
    xlXYScatterSmooth = 72,
    xlXYScatterSmoothNoMarkers = 73,
    xlXYScatterLines = 74,
    xlXYScatterLinesNoMarkers = 75,
    xlAreaStacked = 76,
    xlAreaStacked100 = 77,
    xl3DAreaStacked = 78,
    xl3DAreaStacked100 = 79,
    xlDoughnutExploded = 80,
    xlRadarMarkers = 81,
    xlRadarFilled = 82,
    xlSurface = 83,
    xlSurfaceWireframe = 84,
    xlSurfaceTopView = 85,
    xlSurfaceTopViewWireframe = 86,
    xlBubble = 15,
    xlBubble3DEffect = 87,
    xlStockHLC = 88,
    xlStockOHLC = 89,
    xlStockVHLC = 90,
    xlStockVOHLC = 91,
    xlCylinderColClustered = 92,
    xlCylinderColStacked = 93,
    xlCylinderColStacked100 = 94,
    xlCylinderBarClustered = 95,
    xlCylinderBarStacked = 96,
    xlCylinderBarStacked100 = 97,
    xlCylinderCol = 98,
    xlConeColClustered = 99,
    xlConeColStacked = 100,
    xlConeColStacked100 = 101,
    xlConeBarClustered = 102,
    xlConeBarStacked = 103,
    xlConeBarStacked100 = 104,
    xlConeCol = 105,
    xlPyramidColClustered = 106,
    xlPyramidColStacked = 107,
    xlPyramidColStacked100 = 108,
    xlPyramidBarClustered = 109,
    xlPyramidBarStacked = 110,
    xlPyramidBarStacked100 = 111,
    xlPyramidCol = 112,
    xl3DColumn = -4100,
    xlLine = 4,
    xl3DLine = -4101,
    xl3DPie = -4102,
    xlPie = 5,
    xlXYScatter = -4169,
    xl3DArea = -4098,
    xlArea = 1,
    xlDoughnut = -4120,
    xlRadar = -4151
}

declare enum XlInsertShiftDirection {
    xlShiftDown = -4121,
    xlShiftToRight = -4161
}

declare enum XlDeleteShiftDirection {
    xlShiftToLeft = -4159,
    xlShiftUp = -4162
}

declare enum XlDirection {
    xlDown = -4121,
    xlToLeft = -4159,
    xlToRight = -4161,
    xlUp = -4162
}

declare enum XlConsolidationFunction {
    xlAverage = -4106,
    xlCount = -4112,
    xlCountNums = -4113,
    xlMax = -4136,
    xlMin = -4139,
    xlProduct = -4149,
    xlStDev = -4155,
    xlStDevP = -4156,
    xlSum = -4157,
    xlVar = -4164,
    xlVarP = -4165,
    xlUnknown = 1000,
    xlDistinctCount = 11
}

declare enum XlSheetType {
    xlChart = -4109,
    xlDialogSheet = -4116,
    xlExcel4IntlMacroSheet = 4,
    xlExcel4MacroSheet = 3,
    xlWorksheet = -4167
}

declare enum XlLocationInTable {
    xlColumnHeader = -4110,
    xlColumnItem = 5,
    xlDataHeader = 3,
    xlDataItem = 7,
    xlPageHeader = 2,
    xlPageItem = 6,
    xlRowHeader = -4153,
    xlRowItem = 4,
    xlTableBody = 8
}

declare enum XlFindLookIn {
    xlFormulas = -4123,
    xlComments = -4144,
    xlValues = -4163
}

declare enum XlWindowType {
    xlChartAsWindow = 5,
    xlChartInPlace = 4,
    xlClipboard = 3,
    xlInfo = -4129,
    xlWorkbook = 1
}

declare enum XlPivotFieldDataType {
    xlDate = 2,
    xlNumber = -4145,
    xlText = -4158
}

declare enum XlCopyPictureFormat {
    xlBitmap = 2,
    xlPicture = -4147
}

declare enum XlPivotTableSourceType {
    xlScenario = 4,
    xlConsolidation = 3,
    xlDatabase = 1,
    xlExternal = 2,
    xlPivotTable = -4148
}

declare enum XlReferenceStyle {
    xlA1 = 1,
    xlR1C1 = -4150
}

declare enum XlMSApplication {
    xlMicrosoftAccess = 4,
    xlMicrosoftFoxPro = 5,
    xlMicrosoftMail = 3,
    xlMicrosoftPowerPoint = 2,
    xlMicrosoftProject = 6,
    xlMicrosoftSchedulePlus = 7,
    xlMicrosoftWord = 1
}

declare enum XlMouseButton {
    xlNoButton = 0,
    xlPrimaryButton = 1,
    xlSecondaryButton = 2
}

declare enum XlCutCopyMode {
    xlCopy = 1,
    xlCut = 2
}

declare enum XlFillWith {
    xlFillWithAll = -4104,
    xlFillWithContents = 2,
    xlFillWithFormats = -4122
}

declare enum XlFilterAction {
    xlFilterCopy = 2,
    xlFilterInPlace = 1
}

declare enum XlOrder {
    xlDownThenOver = 1,
    xlOverThenDown = 2
}

declare enum XlLinkType {
    xlLinkTypeExcelLinks = 1,
    xlLinkTypeOLELinks = 2
}

declare enum XlApplyNamesOrder {
    xlColumnThenRow = 2,
    xlRowThenColumn = 1
}

declare enum XlEnableCancelKey {
    xlDisabled = 0,
    xlErrorHandler = 2,
    xlInterrupt = 1
}

declare enum XlPageBreak {
    xlPageBreakAutomatic = -4105,
    xlPageBreakManual = -4135,
    xlPageBreakNone = -4142
}

declare enum XlOLEType {
    xlOLEControl = 2,
    xlOLEEmbed = 1,
    xlOLELink = 0
}

declare enum XlPageOrientation {
    xlLandscape = 2,
    xlPortrait = 1
}

declare enum XlLinkInfo {
    xlEditionDate = 2,
    xlUpdateState = 1,
    xlLinkInfoStatus = 3
}

declare enum XlCommandUnderlines {
    xlCommandUnderlinesAutomatic = -4105,
    xlCommandUnderlinesOff = -4146,
    xlCommandUnderlinesOn = 1
}

declare enum XlOLEVerb {
    xlVerbOpen = 2,
    xlVerbPrimary = 1
}

declare enum XlCalculation {
    xlCalculationAutomatic = -4105,
    xlCalculationManual = -4135,
    xlCalculationSemiautomatic = 2
}

declare enum XlFileAccess {
    xlReadOnly = 3,
    xlReadWrite = 2
}

declare enum XlEditionType {
    xlPublisher = 1,
    xlSubscriber = 2
}

declare enum XlObjectSize {
    xlFitToPage = 2,
    xlFullPage = 3,
    xlScreenSize = 1
}

declare enum XlLookAt {
    xlPart = 2,
    xlWhole = 1
}

declare enum XlMailSystem {
    xlMAPI = 1,
    xlNoMailSystem = 0,
    xlPowerTalk = 2
}

declare enum XlLinkInfoType {
    xlLinkInfoOLELinks = 2,
    xlLinkInfoPublishers = 5,
    xlLinkInfoSubscribers = 6
}

declare enum XlCVError {
    xlErrCalc = 2050,
    xlErrDiv0 = 2007,
    xlErrField = 2049,
    xlErrNA = 2042,
    xlErrName = 2029,
    xlErrNull = 2000,
    xlErrNum = 2036,
    xlErrRef = 2023,
    xlErrSpill = 2045,
    xlErrValue = 2015
}

declare enum XlEditionFormat {
    xlBIFF = 2,
    xlPICT = 1,
    xlRTF = 4,
    xlVALU = 8
}

declare enum XlLink {
    xlExcelLinks = 1,
    xlOLELinks = 2,
    xlPublishers = 5,
    xlSubscribers = 6
}

declare enum XlCellType {
    xlCellTypeBlanks = 4,
    xlCellTypeConstants = 2,
    xlCellTypeFormulas = -4123,
    xlCellTypeLastCell = 11,
    xlCellTypeComments = -4144,
    xlCellTypeVisible = 12,
    xlCellTypeAllFormatConditions = -4172,
    xlCellTypeSameFormatConditions = -4173,
    xlCellTypeAllValidation = -4174,
    xlCellTypeSameValidation = -4175
}

declare enum XlArrangeStyle {
    xlArrangeStyleCascade = 7,
    xlArrangeStyleHorizontal = -4128,
    xlArrangeStyleTiled = 1,
    xlArrangeStyleVertical = -4166
}

declare enum XlMousePointer {
    xlIBeam = 3,
    xlDefault = -4143,
    xlNorthwestArrow = 1,
    xlWait = 2
}

declare enum XlEditionOptionsOption {
    xlAutomaticUpdate = 4,
    xlCancel = 1,
    xlChangeAttributes = 6,
    xlManualUpdate = 5,
    xlOpenSource = 3,
    xlSelect = 3,
    xlSendPublisher = 2,
    xlUpdateSubscriber = 2
}

declare enum XlAutoFillType {
    xlFillCopy = 1,
    xlFillDays = 5,
    xlFillDefault = 0,
    xlFillFormats = 3,
    xlFillMonths = 7,
    xlFillSeries = 2,
    xlFillValues = 4,
    xlFillWeekdays = 6,
    xlFillYears = 8,
    xlGrowthTrend = 10,
    xlLinearTrend = 9,
    xlFlashFill = 11
}

declare enum XlAutoFilterOperator {
    xlAnd = 1,
    xlBottom10Items = 4,
    xlBottom10Percent = 6,
    xlOr = 2,
    xlTop10Items = 3,
    xlTop10Percent = 5,
    xlFilterValues = 7,
    xlFilterCellColor = 8,
    xlFilterFontColor = 9,
    xlFilterIcon = 10,
    xlFilterDynamic = 11,
    xlFilterNoFill = 12,
    xlFilterAutomaticFontColor = 13,
    xlFilterNoIcon = 14
}

declare enum XlClipboardFormat {
    xlClipboardFormatBIFF12 = 63,
    xlClipboardFormatBIFF = 8,
    xlClipboardFormatBIFF2 = 18,
    xlClipboardFormatBIFF3 = 20,
    xlClipboardFormatBIFF4 = 30,
    xlClipboardFormatBinary = 15,
    xlClipboardFormatBitmap = 9,
    xlClipboardFormatCGM = 13,
    xlClipboardFormatCSV = 5,
    xlClipboardFormatDIF = 4,
    xlClipboardFormatDspText = 12,
    xlClipboardFormatEmbeddedObject = 21,
    xlClipboardFormatEmbedSource = 22,
    xlClipboardFormatLink = 11,
    xlClipboardFormatLinkSource = 23,
    xlClipboardFormatLinkSourceDesc = 32,
    xlClipboardFormatMovie = 24,
    xlClipboardFormatNative = 14,
    xlClipboardFormatObjectDesc = 31,
    xlClipboardFormatObjectLink = 19,
    xlClipboardFormatOwnerLink = 17,
    xlClipboardFormatPICT = 2,
    xlClipboardFormatPrintPICT = 3,
    xlClipboardFormatRTF = 7,
    xlClipboardFormatScreenPICT = 29,
    xlClipboardFormatStandardFont = 28,
    xlClipboardFormatStandardScale = 27,
    xlClipboardFormatSYLK = 6,
    xlClipboardFormatTable = 16,
    xlClipboardFormatText = 0,
    xlClipboardFormatToolFace = 25,
    xlClipboardFormatToolFacePICT = 26,
    xlClipboardFormatVALU = 1,
    xlClipboardFormatWK1 = 10
}

declare enum XlFileFormat {
    xlAddIn = 18,
    xlCSV = 6,
    xlCSVMac = 22,
    xlCSVMSDOS = 24,
    xlCSVWindows = 23,
    xlDBF2 = 7,
    xlDBF3 = 8,
    xlDBF4 = 11,
    xlDIF = 9,
    xlExcel2 = 16,
    xlExcel2FarEast = 27,
    xlExcel3 = 29,
    xlExcel4 = 33,
    xlExcel5 = 39,
    xlExcel7 = 39,
    xlExcel9795 = 43,
    xlExcel4Workbook = 35,
    xlIntlAddIn = 26,
    xlIntlMacro = 25,
    xlWorkbookNormal = -4143,
    xlSYLK = 2,
    xlTemplate = 17,
    xlCurrentPlatformText = -4158,
    xlTextMac = 19,
    xlTextMSDOS = 21,
    xlTextPrinter = 36,
    xlTextWindows = 20,
    xlWJ2WD1 = 14,
    xlWK1 = 5,
    xlWK1ALL = 31,
    xlWK1FMT = 30,
    xlWK3 = 15,
    xlWK4 = 38,
    xlWK3FM3 = 32,
    xlWKS = 4,
    xlWorks2FarEast = 28,
    xlWQ1 = 34,
    xlWJ3 = 40,
    xlWJ3FJ3 = 41,
    xlUnicodeText = 42,
    xlHtml = 44,
    xlWebArchive = 45,
    xlXMLSpreadsheet = 46,
    xlExcel12 = 50,
    xlOpenXMLWorkbook = 51,
    xlOpenXMLWorkbookMacroEnabled = 52,
    xlOpenXMLTemplateMacroEnabled = 53,
    xlTemplate8 = 17,
    xlOpenXMLTemplate = 54,
    xlAddIn8 = 18,
    xlOpenXMLAddIn = 55,
    xlExcel8 = 56,
    xlOpenDocumentSpreadsheet = 60,
    xlOpenXMLStrictWorkbook = 61,
    xlWorkbookDefault = 51
}

declare enum XlApplicationInternational {
    xl24HourClock = 33,
    xl4DigitYears = 43,
    xlAlternateArraySeparator = 16,
    xlColumnSeparator = 14,
    xlCountryCode = 1,
    xlCountrySetting = 2,
    xlCurrencyBefore = 37,
    xlCurrencyCode = 25,
    xlCurrencyDigits = 27,
    xlCurrencyLeadingZeros = 40,
    xlCurrencyMinusSign = 38,
    xlCurrencyNegative = 28,
    xlCurrencySpaceBefore = 36,
    xlCurrencyTrailingZeros = 39,
    xlDateOrder = 32,
    xlDateSeparator = 17,
    xlDayCode = 21,
    xlDayLeadingZero = 42,
    xlDecimalSeparator = 3,
    xlGeneralFormatName = 26,
    xlHourCode = 22,
    xlLeftBrace = 12,
    xlLeftBracket = 10,
    xlListSeparator = 5,
    xlLowerCaseColumnLetter = 9,
    xlLowerCaseRowLetter = 8,
    xlMDY = 44,
    xlMetric = 35,
    xlMinuteCode = 23,
    xlMonthCode = 20,
    xlMonthLeadingZero = 41,
    xlMonthNameChars = 30,
    xlNoncurrencyDigits = 29,
    xlNonEnglishFunctions = 34,
    xlRightBrace = 13,
    xlRightBracket = 11,
    xlRowSeparator = 15,
    xlSecondCode = 24,
    xlThousandsSeparator = 4,
    xlTimeLeadingZero = 45,
    xlTimeSeparator = 18,
    xlUpperCaseColumnLetter = 7,
    xlUpperCaseRowLetter = 6,
    xlWeekdayNameChars = 31,
    xlYearCode = 19
}

declare enum XlPageBreakExtent {
    xlPageBreakFull = 1,
    xlPageBreakPartial = 2
}

declare enum XlCellInsertionMode {
    xlOverwriteCells = 0,
    xlInsertDeleteCells = 1,
    xlInsertEntireRows = 2
}

declare enum XlFormulaLabel {
    xlNoLabels = -4142,
    xlRowLabels = 1,
    xlColumnLabels = 2,
    xlMixedLabels = 3
}

declare enum XlHighlightChangesTime {
    xlSinceMyLastSave = 1,
    xlAllChanges = 2,
    xlNotYetReviewed = 3
}

declare enum XlCommentDisplayMode {
    xlNoIndicator = 0,
    xlCommentIndicatorOnly = -1,
    xlCommentAndIndicator = 1
}

declare enum XlFormatConditionType {
    xlCellValue = 1,
    xlExpression = 2,
    xlColorScale = 3,
    xlDatabar = 4,
    xlTop10 = 5,
    xlIconSets = 6,
    xlUniqueValues = 8,
    xlTextString = 9,
    xlBlanksCondition = 10,
    xlTimePeriod = 11,
    xlAboveAverageCondition = 12,
    xlNoBlanksCondition = 13,
    xlErrorsCondition = 16,
    xlNoErrorsCondition = 17
}

declare enum XlFormatConditionOperator {
    xlBetween = 1,
    xlNotBetween = 2,
    xlEqual = 3,
    xlNotEqual = 4,
    xlGreater = 5,
    xlLess = 6,
    xlGreaterEqual = 7,
    xlLessEqual = 8
}

declare enum XlEnableSelection {
    xlNoRestrictions = 0,
    xlUnlockedCells = 1,
    xlNoSelection = -4142
}

declare enum XlDVType {
    xlValidateInputOnly = 0,
    xlValidateWholeNumber = 1,
    xlValidateDecimal = 2,
    xlValidateList = 3,
    xlValidateDate = 4,
    xlValidateTime = 5,
    xlValidateTextLength = 6,
    xlValidateCustom = 7
}

declare enum XlIMEMode {
    xlIMEModeNoControl = 0,
    xlIMEModeOn = 1,
    xlIMEModeOff = 2,
    xlIMEModeDisable = 3,
    xlIMEModeHiragana = 4,
    xlIMEModeKatakana = 5,
    xlIMEModeKatakanaHalf = 6,
    xlIMEModeAlphaFull = 7,
    xlIMEModeAlpha = 8,
    xlIMEModeHangulFull = 9,
    xlIMEModeHangul = 10
}

declare enum XlDVAlertStyle {
    xlValidAlertStop = 1,
    xlValidAlertWarning = 2,
    xlValidAlertInformation = 3
}

declare enum XlChartLocation {
    xlLocationAsNewSheet = 1,
    xlLocationAsObject = 2,
    xlLocationAutomatic = 3
}

declare enum XlPaperSize {
    xlPaper10x14 = 16,
    xlPaper11x17 = 17,
    xlPaperA3 = 8,
    xlPaperA4 = 9,
    xlPaperA4Small = 10,
    xlPaperA5 = 11,
    xlPaperB4 = 12,
    xlPaperB5 = 13,
    xlPaperCsheet = 24,
    xlPaperDsheet = 25,
    xlPaperEnvelope10 = 20,
    xlPaperEnvelope11 = 21,
    xlPaperEnvelope12 = 22,
    xlPaperEnvelope14 = 23,
    xlPaperEnvelope9 = 19,
    xlPaperEnvelopeB4 = 33,
    xlPaperEnvelopeB5 = 34,
    xlPaperEnvelopeB6 = 35,
    xlPaperEnvelopeC3 = 29,
    xlPaperEnvelopeC4 = 30,
    xlPaperEnvelopeC5 = 28,
    xlPaperEnvelopeC6 = 31,
    xlPaperEnvelopeC65 = 32,
    xlPaperEnvelopeDL = 27,
    xlPaperEnvelopeItaly = 36,
    xlPaperEnvelopeMonarch = 37,
    xlPaperEnvelopePersonal = 38,
    xlPaperEsheet = 26,
    xlPaperExecutive = 7,
    xlPaperFanfoldLegalGerman = 41,
    xlPaperFanfoldStdGerman = 40,
    xlPaperFanfoldUS = 39,
    xlPaperFolio = 14,
    xlPaperLedger = 4,
    xlPaperLegal = 5,
    xlPaperLetter = 1,
    xlPaperLetterSmall = 2,
    xlPaperNote = 18,
    xlPaperQuarto = 15,
    xlPaperStatement = 6,
    xlPaperTabloid = 3,
    xlPaperUser = 256
}

declare enum XlPasteSpecialOperation {
    xlPasteSpecialOperationAdd = 2,
    xlPasteSpecialOperationDivide = 5,
    xlPasteSpecialOperationMultiply = 4,
    xlPasteSpecialOperationNone = -4142,
    xlPasteSpecialOperationSubtract = 3
}

declare enum XlPasteType {
    xlPasteAll = -4104,
    xlPasteAllUsingSourceTheme = 13,
    xlPasteAllMergingConditionalFormats = 14,
    xlPasteAllExceptBorders = 7,
    xlPasteFormats = -4122,
    xlPasteFormulas = -4123,
    xlPasteComments = -4144,
    xlPasteValues = -4163,
    xlPasteColumnWidths = 8,
    xlPasteValidation = 6,
    xlPasteFormulasAndNumberFormats = 11,
    xlPasteValuesAndNumberFormats = 12
}

declare enum XlPhoneticCharacterType {
    xlKatakanaHalf = 0,
    xlKatakana = 1,
    xlHiragana = 2,
    xlNoConversion = 3
}

declare enum XlPhoneticAlignment {
    xlPhoneticAlignNoControl = 0,
    xlPhoneticAlignLeft = 1,
    xlPhoneticAlignCenter = 2,
    xlPhoneticAlignDistributed = 3
}

declare enum XlPictureAppearance {
    xlPrinter = 2,
    xlScreen = 1
}

declare enum XlPivotFieldCalculation {
    xlDifferenceFrom = 2,
    xlIndex = 9,
    xlNoAdditionalCalculation = -4143,
    xlPercentDifferenceFrom = 4,
    xlPercentOf = 3,
    xlPercentOfColumn = 7,
    xlPercentOfRow = 6,
    xlPercentOfTotal = 8,
    xlRunningTotal = 5,
    xlPercentOfParentRow = 10,
    xlPercentOfParentColumn = 11,
    xlPercentOfParent = 12,
    xlPercentRunningTotal = 13,
    xlRankAscending = 14,
    xlRankDecending = 15
}

declare enum XlPlacement {
    xlFreeFloating = 3,
    xlMove = 2,
    xlMoveAndSize = 1
}

declare enum XlPlatform {
    xlMacintosh = 1,
    xlMSDOS = 3,
    xlWindows = 2
}

declare enum XlPrintLocation {
    xlPrintSheetEnd = 1,
    xlPrintInPlace = 16,
    xlPrintNoComments = -4142
}

declare enum XlPriority {
    xlPriorityHigh = -4127,
    xlPriorityLow = -4134,
    xlPriorityNormal = -4143
}

declare enum XlPTSelectionMode {
    xlLabelOnly = 1,
    xlDataAndLabel = 0,
    xlDataOnly = 2,
    xlOrigin = 3,
    xlButton = 15,
    xlBlanks = 4,
    xlFirstRow = 256
}

declare enum XlRangeAutoFormat {
    xlRangeAutoFormat3DEffects1 = 13,
    xlRangeAutoFormat3DEffects2 = 14,
    xlRangeAutoFormatAccounting1 = 4,
    xlRangeAutoFormatAccounting2 = 5,
    xlRangeAutoFormatAccounting3 = 6,
    xlRangeAutoFormatAccounting4 = 17,
    xlRangeAutoFormatClassic1 = 1,
    xlRangeAutoFormatClassic2 = 2,
    xlRangeAutoFormatClassic3 = 3,
    xlRangeAutoFormatColor1 = 7,
    xlRangeAutoFormatColor2 = 8,
    xlRangeAutoFormatColor3 = 9,
    xlRangeAutoFormatList1 = 10,
    xlRangeAutoFormatList2 = 11,
    xlRangeAutoFormatList3 = 12,
    xlRangeAutoFormatLocalFormat1 = 15,
    xlRangeAutoFormatLocalFormat2 = 16,
    xlRangeAutoFormatLocalFormat3 = 19,
    xlRangeAutoFormatLocalFormat4 = 20,
    xlRangeAutoFormatReport1 = 21,
    xlRangeAutoFormatReport2 = 22,
    xlRangeAutoFormatReport3 = 23,
    xlRangeAutoFormatReport4 = 24,
    xlRangeAutoFormatReport5 = 25,
    xlRangeAutoFormatReport6 = 26,
    xlRangeAutoFormatReport7 = 27,
    xlRangeAutoFormatReport8 = 28,
    xlRangeAutoFormatReport9 = 29,
    xlRangeAutoFormatReport10 = 30,
    xlRangeAutoFormatClassicPivotTable = 31,
    xlRangeAutoFormatTable1 = 32,
    xlRangeAutoFormatTable2 = 33,
    xlRangeAutoFormatTable3 = 34,
    xlRangeAutoFormatTable4 = 35,
    xlRangeAutoFormatTable5 = 36,
    xlRangeAutoFormatTable6 = 37,
    xlRangeAutoFormatTable7 = 38,
    xlRangeAutoFormatTable8 = 39,
    xlRangeAutoFormatTable9 = 40,
    xlRangeAutoFormatTable10 = 41,
    xlRangeAutoFormatPTNone = 42,
    xlRangeAutoFormatNone = -4142,
    xlRangeAutoFormatSimple = -4154
}

declare enum XlReferenceType {
    xlAbsolute = 1,
    xlAbsRowRelColumn = 2,
    xlRelative = 4,
    xlRelRowAbsColumn = 3
}

declare enum XlLayoutFormType {
    xlTabular = 0,
    xlOutline = 1
}

declare enum XlRoutingSlipDelivery {
    xlAllAtOnce = 2,
    xlOneAfterAnother = 1
}

declare enum XlRoutingSlipStatus {
    xlNotYetRouted = 0,
    xlRoutingComplete = 2,
    xlRoutingInProgress = 1
}

declare enum XlRunAutoMacro {
    xlAutoActivate = 3,
    xlAutoClose = 2,
    xlAutoDeactivate = 4,
    xlAutoOpen = 1
}

declare enum XlSaveAction {
    xlDoNotSaveChanges = 2,
    xlSaveChanges = 1
}

declare enum XlSaveAsAccessMode {
    xlExclusive = 3,
    xlNoChange = 1,
    xlShared = 2
}

declare enum XlSaveConflictResolution {
    xlLocalSessionChanges = 2,
    xlOtherSessionChanges = 3,
    xlUserResolution = 1
}

declare enum XlSearchDirection {
    xlNext = 1,
    xlPrevious = 2
}

declare enum XlSearchOrder {
    xlByColumns = 2,
    xlByRows = 1
}

declare enum XlSheetVisibility {
    xlSheetVisible = -1,
    xlSheetHidden = 0,
    xlSheetVeryHidden = 2
}

declare enum XlSortMethod {
    xlPinYin = 1,
    xlStroke = 2
}

declare enum XlSortMethodOld {
    xlCodePage = 2,
    xlSyllabary = 1
}

declare enum XlSortOrder {
    xlAscending = 1,
    xlDescending = 2
}

declare enum XlSortOrientation {
    xlSortRows = 2,
    xlSortColumns = 1
}

declare enum XlSortType {
    xlSortLabels = 2,
    xlSortValues = 1
}

declare enum XlSpecialCellsValue {
    xlErrors = 16,
    xlLogical = 4,
    xlNumbers = 1,
    xlTextValues = 2
}

declare enum XlSubscribeToFormat {
    xlSubscribeToPicture = -4147,
    xlSubscribeToText = -4158
}

declare enum XlSummaryRow {
    xlSummaryAbove = 0,
    xlSummaryBelow = 1
}

declare enum XlSummaryColumn {
    xlSummaryOnLeft = -4131,
    xlSummaryOnRight = -4152
}

declare enum XlSummaryReportType {
    xlSummaryPivotTable = -4148,
    xlStandardSummary = 1
}

declare enum XlTabPosition {
    xlTabPositionFirst = 0,
    xlTabPositionLast = 1
}

declare enum XlTextParsingType {
    xlDelimited = 1,
    xlFixedWidth = 2
}

declare enum XlTextQualifier {
    xlTextQualifierDoubleQuote = 1,
    xlTextQualifierNone = -4142,
    xlTextQualifierSingleQuote = 2
}

declare enum XlWBATemplate {
    xlWBATChart = -4109,
    xlWBATExcel4IntlMacroSheet = 4,
    xlWBATExcel4MacroSheet = 3,
    xlWBATWorksheet = -4167
}

declare enum XlWindowView {
    xlNormalView = 1,
    xlPageBreakPreview = 2,
    xlPageLayoutView = 3
}

declare enum XlXLMMacroType {
    xlCommand = 2,
    xlFunction = 1,
    xlNotXLM = 3
}

declare enum XlYesNoGuess {
    xlGuess = 0,
    xlNo = 2,
    xlYes = 1
}

declare enum XlBordersIndex {
    xlInsideHorizontal = 12,
    xlInsideVertical = 11,
    xlDiagonalDown = 5,
    xlDiagonalUp = 6,
    xlEdgeBottom = 9,
    xlEdgeLeft = 7,
    xlEdgeRight = 10,
    xlEdgeTop = 8
}

declare enum XlToolbarProtection {
    xlNoButtonChanges = 1,
    xlNoChanges = 4,
    xlNoDockingChanges = 3,
    xlToolbarProtectionNone = -4143,
    xlNoShapeChanges = 2
}

declare enum XlBuiltInDialog {
    xlDialogOpen = 1,
    xlDialogOpenLinks = 2,
    xlDialogSaveAs = 5,
    xlDialogFileDelete = 6,
    xlDialogPageSetup = 7,
    xlDialogPrint = 8,
    xlDialogPrinterSetup = 9,
    xlDialogArrangeAll = 12,
    xlDialogWindowSize = 13,
    xlDialogWindowMove = 14,
    xlDialogRun = 17,
    xlDialogSetPrintTitles = 23,
    xlDialogFont = 26,
    xlDialogDisplay = 27,
    xlDialogProtectDocument = 28,
    xlDialogCalculation = 32,
    xlDialogExtract = 35,
    xlDialogDataDelete = 36,
    xlDialogSort = 39,
    xlDialogDataSeries = 40,
    xlDialogTable = 41,
    xlDialogFormatNumber = 42,
    xlDialogAlignment = 43,
    xlDialogStyle = 44,
    xlDialogBorder = 45,
    xlDialogCellProtection = 46,
    xlDialogColumnWidth = 47,
    xlDialogClear = 52,
    xlDialogPasteSpecial = 53,
    xlDialogEditDelete = 54,
    xlDialogInsert = 55,
    xlDialogPasteNames = 58,
    xlDialogDefineName = 61,
    xlDialogCreateNames = 62,
    xlDialogFormulaGoto = 63,
    xlDialogFormulaFind = 64,
    xlDialogGalleryArea = 67,
    xlDialogGalleryBar = 68,
    xlDialogGalleryColumn = 69,
    xlDialogGalleryLine = 70,
    xlDialogGalleryPie = 71,
    xlDialogGalleryScatter = 72,
    xlDialogCombination = 73,
    xlDialogGridlines = 76,
    xlDialogAxes = 78,
    xlDialogAttachText = 80,
    xlDialogPatterns = 84,
    xlDialogMainChart = 85,
    xlDialogOverlay = 86,
    xlDialogScale = 87,
    xlDialogFormatLegend = 88,
    xlDialogFormatText = 89,
    xlDialogParse = 91,
    xlDialogUnhide = 94,
    xlDialogWorkspace = 95,
    xlDialogActivate = 103,
    xlDialogCopyPicture = 108,
    xlDialogDeleteName = 110,
    xlDialogDeleteFormat = 111,
    xlDialogNew = 119,
    xlDialogRowHeight = 127,
    xlDialogFormatMove = 128,
    xlDialogFormatSize = 129,
    xlDialogFormulaReplace = 130,
    xlDialogSelectSpecial = 132,
    xlDialogApplyNames = 133,
    xlDialogReplaceFont = 134,
    xlDialogSplit = 137,
    xlDialogOutline = 142,
    xlDialogSaveWorkbook = 145,
    xlDialogCopyChart = 147,
    xlDialogFormatFont = 150,
    xlDialogNote = 154,
    xlDialogSetUpdateStatus = 159,
    xlDialogColorPalette = 161,
    xlDialogChangeLink = 166,
    xlDialogAppMove = 170,
    xlDialogAppSize = 171,
    xlDialogMainChartType = 185,
    xlDialogOverlayChartType = 186,
    xlDialogOpenMail = 188,
    xlDialogSendMail = 189,
    xlDialogStandardFont = 190,
    xlDialogConsolidate = 191,
    xlDialogSortSpecial = 192,
    xlDialogGallery3dArea = 193,
    xlDialogGallery3dColumn = 194,
    xlDialogGallery3dLine = 195,
    xlDialogGallery3dPie = 196,
    xlDialogView3d = 197,
    xlDialogGoalSeek = 198,
    xlDialogWorkgroup = 199,
    xlDialogFillGroup = 200,
    xlDialogUpdateLink = 201,
    xlDialogPromote = 202,
    xlDialogDemote = 203,
    xlDialogShowDetail = 204,
    xlDialogObjectProperties = 207,
    xlDialogSaveNewObject = 208,
    xlDialogApplyStyle = 212,
    xlDialogAssignToObject = 213,
    xlDialogObjectProtection = 214,
    xlDialogCreatePublisher = 217,
    xlDialogSubscribeTo = 218,
    xlDialogShowToolbar = 220,
    xlDialogPrintPreview = 222,
    xlDialogEditColor = 223,
    xlDialogFormatMain = 225,
    xlDialogFormatOverlay = 226,
    xlDialogEditSeries = 228,
    xlDialogDefineStyle = 229,
    xlDialogGalleryRadar = 249,
    xlDialogEditionOptions = 251,
    xlDialogZoom = 256,
    xlDialogInsertObject = 259,
    xlDialogSize = 261,
    xlDialogMove = 262,
    xlDialogFormatAuto = 269,
    xlDialogGallery3dBar = 272,
    xlDialogGallery3dSurface = 273,
    xlDialogCustomizeToolbar = 276,
    xlDialogWorkbookAdd = 281,
    xlDialogWorkbookMove = 282,
    xlDialogWorkbookCopy = 283,
    xlDialogWorkbookOptions = 284,
    xlDialogSaveWorkspace = 285,
    xlDialogChartWizard = 288,
    xlDialogAssignToTool = 293,
    xlDialogPlacement = 300,
    xlDialogFillWorkgroup = 301,
    xlDialogWorkbookNew = 302,
    xlDialogScenarioCells = 305,
    xlDialogScenarioAdd = 307,
    xlDialogScenarioEdit = 308,
    xlDialogScenarioSummary = 311,
    xlDialogPivotTableWizard = 312,
    xlDialogPivotFieldProperties = 313,
    xlDialogOptionsCalculation = 318,
    xlDialogOptionsEdit = 319,
    xlDialogOptionsView = 320,
    xlDialogAddinManager = 321,
    xlDialogMenuEditor = 322,
    xlDialogAttachToolbars = 323,
    xlDialogOptionsChart = 325,
    xlDialogVbaInsertFile = 328,
    xlDialogVbaProcedureDefinition = 330,
    xlDialogRoutingSlip = 336,
    xlDialogMailLogon = 339,
    xlDialogInsertPicture = 342,
    xlDialogGalleryDoughnut = 344,
    xlDialogChartTrend = 350,
    xlDialogWorkbookInsert = 354,
    xlDialogOptionsTransition = 355,
    xlDialogOptionsGeneral = 356,
    xlDialogFilterAdvanced = 370,
    xlDialogMailNextLetter = 378,
    xlDialogDataLabel = 379,
    xlDialogInsertTitle = 380,
    xlDialogFontProperties = 381,
    xlDialogMacroOptions = 382,
    xlDialogWorkbookUnhide = 384,
    xlDialogWorkbookName = 386,
    xlDialogGalleryCustom = 388,
    xlDialogAddChartAutoformat = 390,
    xlDialogChartAddData = 392,
    xlDialogTabOrder = 394,
    xlDialogSubtotalCreate = 398,
    xlDialogWorkbookTabSplit = 415,
    xlDialogWorkbookProtect = 417,
    xlDialogScrollbarProperties = 420,
    xlDialogPivotShowPages = 421,
    xlDialogTextToColumns = 422,
    xlDialogFormatCharttype = 423,
    xlDialogPivotFieldGroup = 433,
    xlDialogPivotFieldUngroup = 434,
    xlDialogCheckboxProperties = 435,
    xlDialogLabelProperties = 436,
    xlDialogListboxProperties = 437,
    xlDialogEditboxProperties = 438,
    xlDialogOpenText = 441,
    xlDialogPushbuttonProperties = 445,
    xlDialogFilter = 447,
    xlDialogFunctionWizard = 450,
    xlDialogSaveCopyAs = 456,
    xlDialogOptionsListsAdd = 458,
    xlDialogSeriesAxes = 460,
    xlDialogSeriesX = 461,
    xlDialogSeriesY = 462,
    xlDialogErrorbarX = 463,
    xlDialogErrorbarY = 464,
    xlDialogFormatChart = 465,
    xlDialogSeriesOrder = 466,
    xlDialogMailEditMailer = 470,
    xlDialogStandardWidth = 472,
    xlDialogScenarioMerge = 473,
    xlDialogProperties = 474,
    xlDialogSummaryInfo = 474,
    xlDialogFindFile = 475,
    xlDialogActiveCellFont = 476,
    xlDialogVbaMakeAddin = 478,
    xlDialogFileSharing = 481,
    xlDialogAutoCorrect = 485,
    xlDialogCustomViews = 493,
    xlDialogInsertNameLabel = 496,
    xlDialogSeriesShape = 504,
    xlDialogChartOptionsDataLabels = 505,
    xlDialogChartOptionsDataTable = 506,
    xlDialogSetBackgroundPicture = 509,
    xlDialogDataValidation = 525,
    xlDialogChartType = 526,
    xlDialogChartLocation = 527,
    _xlDialogPhonetic = 538,
    xlDialogChartSourceData = 540,
    _xlDialogChartSourceData = 541,
    xlDialogSeriesOptions = 557,
    xlDialogPivotTableOptions = 567,
    xlDialogPivotSolveOrder = 568,
    xlDialogPivotCalculatedField = 570,
    xlDialogPivotCalculatedItem = 572,
    xlDialogConditionalFormatting = 583,
    xlDialogInsertHyperlink = 596,
    xlDialogProtectSharing = 620,
    xlDialogOptionsME = 647,
    xlDialogPublishAsWebPage = 653,
    xlDialogPhonetic = 656,
    xlDialogNewWebQuery = 667,
    xlDialogImportTextFile = 666,
    xlDialogExternalDataProperties = 530,
    xlDialogWebOptionsGeneral = 683,
    xlDialogWebOptionsFiles = 684,
    xlDialogWebOptionsPictures = 685,
    xlDialogWebOptionsEncoding = 686,
    xlDialogWebOptionsFonts = 687,
    xlDialogPivotClientServerSet = 689,
    xlDialogPropertyFields = 754,
    xlDialogSearch = 731,
    xlDialogEvaluateFormula = 709,
    xlDialogDataLabelMultiple = 723,
    xlDialogChartOptionsDataLabelMultiple = 724,
    xlDialogErrorChecking = 732,
    xlDialogWebOptionsBrowsers = 773,
    xlDialogCreateList = 796,
    xlDialogPermission = 832,
    xlDialogMyPermission = 834,
    xlDialogDocumentInspector = 862,
    xlDialogNameManager = 977,
    xlDialogNewName = 978,
    xlDialogSparklineInsertLine = 1133,
    xlDialogSparklineInsertColumn = 1134,
    xlDialogSparklineInsertWinLoss = 1135,
    xlDialogSlicerSettings = 1179,
    xlDialogSlicerCreation = 1182,
    xlDialogSlicerPivotTableConnections = 1184,
    xlDialogPivotTableSlicerConnections = 1183,
    xlDialogPivotTableWhatIfAnalysisSettings = 1153,
    xlDialogSetManager = 1109,
    xlDialogSetMDXEditor = 1208,
    xlDialogSetTupleEditorOnRows = 1107,
    xlDialogSetTupleEditorOnColumns = 1108,
    xlDialogManageRelationships = 1271,
    xlDialogCreateRelationship = 1272,
    xlDialogRecommendedPivotTables = 1258
}

declare enum XlParameterType {
    xlPrompt = 0,
    xlConstant = 1,
    xlRange = 2
}

declare enum XlParameterDataType {
    xlParamTypeUnknown = 0,
    xlParamTypeChar = 1,
    xlParamTypeNumeric = 2,
    xlParamTypeDecimal = 3,
    xlParamTypeInteger = 4,
    xlParamTypeSmallInt = 5,
    xlParamTypeFloat = 6,
    xlParamTypeReal = 7,
    xlParamTypeDouble = 8,
    xlParamTypeVarChar = 12,
    xlParamTypeDate = 9,
    xlParamTypeTime = 10,
    xlParamTypeTimestamp = 11,
    xlParamTypeLongVarChar = -1,
    xlParamTypeBinary = -2,
    xlParamTypeVarBinary = -3,
    xlParamTypeLongVarBinary = -4,
    xlParamTypeBigInt = -5,
    xlParamTypeTinyInt = -6,
    xlParamTypeBit = -7,
    xlParamTypeWChar = -8
}

declare enum XlFormControl {
    xlButtonControl = 0,
    xlCheckBox = 1,
    xlDropDown = 2,
    xlEditBox = 3,
    xlGroupBox = 4,
    xlLabel = 5,
    xlListBox = 6,
    xlOptionButton = 7,
    xlScrollBar = 8,
    xlSpinner = 9
}

declare enum XlSourceType {
    xlSourceWorkbook = 0,
    xlSourceSheet = 1,
    xlSourcePrintArea = 2,
    xlSourceAutoFilter = 3,
    xlSourceRange = 4,
    xlSourceChart = 5,
    xlSourcePivotTable = 6,
    xlSourceQuery = 7
}

declare enum XlHtmlType {
    xlHtmlStatic = 0,
    xlHtmlCalc = 1,
    xlHtmlList = 2,
    xlHtmlChart = 3
}

declare enum XlPivotFormatType {
    xlReport1 = 0,
    xlReport2 = 1,
    xlReport3 = 2,
    xlReport4 = 3,
    xlReport5 = 4,
    xlReport6 = 5,
    xlReport7 = 6,
    xlReport8 = 7,
    xlReport9 = 8,
    xlReport10 = 9,
    xlTable1 = 10,
    xlTable2 = 11,
    xlTable3 = 12,
    xlTable4 = 13,
    xlTable5 = 14,
    xlTable6 = 15,
    xlTable7 = 16,
    xlTable8 = 17,
    xlTable9 = 18,
    xlTable10 = 19,
    xlPTClassic = 20,
    xlPTNone = 21
}

declare enum XlCmdType {
    xlCmdCube = 1,
    xlCmdSql = 2,
    xlCmdTable = 3,
    xlCmdDefault = 4,
    xlCmdList = 5,
    xlCmdTableCollection = 6,
    xlCmdExcel = 7,
    xlCmdDAX = 8
}

declare enum XlColumnDataType {
    xlGeneralFormat = 1,
    xlTextFormat = 2,
    xlMDYFormat = 3,
    xlDMYFormat = 4,
    xlYMDFormat = 5,
    xlMYDFormat = 6,
    xlDYMFormat = 7,
    xlYDMFormat = 8,
    xlSkipColumn = 9,
    xlEMDFormat = 10
}

declare enum XlQueryType {
    xlODBCQuery = 1,
    xlDAORecordset = 2,
    xlWebQuery = 4,
    xlOLEDBQuery = 5,
    xlTextImport = 6,
    xlADORecordset = 7
}

declare enum XlWebSelectionType {
    xlEntirePage = 1,
    xlAllTables = 2,
    xlSpecifiedTables = 3
}

declare enum XlCubeFieldType {
    xlHierarchy = 1,
    xlMeasure = 2,
    xlSet = 3
}

declare enum XlWebFormatting {
    xlWebFormattingAll = 1,
    xlWebFormattingRTF = 2,
    xlWebFormattingNone = 3
}

declare enum XlDisplayDrawingObjects {
    xlDisplayShapes = -4104,
    xlHide = 3,
    xlPlaceholders = 2
}

declare enum XlSubtototalLocationType {
    xlAtTop = 1,
    xlAtBottom = 2
}

declare enum XlPivotTableVersionList {
    xlPivotTableVersion2000 = 0,
    xlPivotTableVersion10 = 1,
    xlPivotTableVersion11 = 2,
    xlPivotTableVersion12 = 3,
    xlPivotTableVersion14 = 4,
    xlPivotTableVersion15 = 5,
    xlPivotTableVersionCurrent = -1
}

declare enum XlPrintErrors {
    xlPrintErrorsDisplayed = 0,
    xlPrintErrorsBlank = 1,
    xlPrintErrorsDash = 2,
    xlPrintErrorsNA = 3
}

declare enum XlPivotCellType {
    xlPivotCellValue = 0,
    xlPivotCellPivotItem = 1,
    xlPivotCellSubtotal = 2,
    xlPivotCellGrandTotal = 3,
    xlPivotCellDataField = 4,
    xlPivotCellPivotField = 5,
    xlPivotCellPageFieldItem = 6,
    xlPivotCellCustomSubtotal = 7,
    xlPivotCellDataPivotField = 8,
    xlPivotCellBlankCell = 9
}

declare enum XlPivotTableMissingItems {
    xlMissingItemsDefault = -1,
    xlMissingItemsNone = 0,
    xlMissingItemsMax = 32500,
    xlMissingItemsMax2 = 1048576
}

declare enum XlCalculationState {
    xlDone = 0,
    xlCalculating = 1,
    xlPending = 2
}

declare enum XlCalculationInterruptKey {
    xlNoKey = 0,
    xlEscKey = 1,
    xlAnyKey = 2
}

declare enum XlSortDataOption {
    xlSortNormal = 0,
    xlSortTextAsNumbers = 1
}

declare enum XlUpdateLinks {
    xlUpdateLinksUserSetting = 1,
    xlUpdateLinksNever = 2,
    xlUpdateLinksAlways = 3
}

declare enum XlLinkStatus {
    xlLinkStatusOK = 0,
    xlLinkStatusMissingFile = 1,
    xlLinkStatusMissingSheet = 2,
    xlLinkStatusOld = 3,
    xlLinkStatusSourceNotCalculated = 4,
    xlLinkStatusIndeterminate = 5,
    xlLinkStatusNotStarted = 6,
    xlLinkStatusInvalidName = 7,
    xlLinkStatusSourceNotOpen = 8,
    xlLinkStatusSourceOpen = 9,
    xlLinkStatusCopiedValues = 10
}

declare enum XlSearchWithin {
    xlWithinSheet = 1,
    xlWithinWorkbook = 2
}

declare enum XlCorruptLoad {
    xlNormalLoad = 0,
    xlRepairFile = 1,
    xlExtractData = 2
}

declare enum XlRobustConnect {
    xlAsRequired = 0,
    xlAlways = 1,
    xlNever = 2
}

declare enum XlErrorChecks {
    xlEvaluateToError = 1,
    xlTextDate = 2,
    xlNumberAsText = 3,
    xlInconsistentFormula = 4,
    xlOmittedCells = 5,
    xlUnlockedFormulaCells = 6,
    xlEmptyCellReferences = 7,
    xlListDataValidation = 8,
    xlInconsistentListFormula = 9
}

declare enum XlDataLabelSeparator {
    xlDataLabelSeparatorDefault = 1
}

declare enum XlSmartTagDisplayMode {
    xlIndicatorAndButton = 0,
    xlDisplayNone = 1,
    xlButtonOnly = 2
}

declare enum XlRangeValueDataType {
    xlRangeValueDefault = 10,
    xlRangeValueXMLSpreadsheet = 11,
    xlRangeValueMSPersistXML = 12
}

declare enum XlSpeakDirection {
    xlSpeakByRows = 0,
    xlSpeakByColumns = 1
}

declare enum XlInsertFormatOrigin {
    xlFormatFromLeftOrAbove = 0,
    xlFormatFromRightOrBelow = 1
}

declare enum XlArabicModes {
    xlArabicNone = 0,
    xlArabicStrictAlefHamza = 1,
    xlArabicStrictFinalYaa = 2,
    xlArabicBothStrict = 3
}

declare enum XlImportDataAs {
    xlQueryTable = 0,
    xlPivotTableReport = 1,
    xlTable = 2
}

declare enum XlCalculatedMemberType {
    xlCalculatedMember = 0,
    xlCalculatedSet = 1,
    xlCalculatedMeasure = 2
}

declare enum XlHebrewModes {
    xlHebrewFullScript = 0,
    xlHebrewPartialScript = 1,
    xlHebrewMixedScript = 2,
    xlHebrewMixedAuthorizedScript = 3
}

declare enum XlListObjectSourceType {
    xlSrcExternal = 0,
    xlSrcRange = 1,
    xlSrcXml = 2,
    xlSrcQuery = 3,
    xlSrcModel = 4
}

declare enum XlTextVisualLayoutType {
    xlTextVisualLTR = 1,
    xlTextVisualRTL = 2
}

declare enum XlListDataType {
    xlListDataTypeNone = 0,
    xlListDataTypeText = 1,
    xlListDataTypeMultiLineText = 2,
    xlListDataTypeNumber = 3,
    xlListDataTypeCurrency = 4,
    xlListDataTypeDateTime = 5,
    xlListDataTypeChoice = 6,
    xlListDataTypeChoiceMulti = 7,
    xlListDataTypeListLookup = 8,
    xlListDataTypeCheckbox = 9,
    xlListDataTypeHyperLink = 10,
    xlListDataTypeCounter = 11,
    xlListDataTypeMultiLineRichText = 12
}

declare enum XlTotalsCalculation {
    xlTotalsCalculationNone = 0,
    xlTotalsCalculationSum = 1,
    xlTotalsCalculationAverage = 2,
    xlTotalsCalculationCount = 3,
    xlTotalsCalculationCountNums = 4,
    xlTotalsCalculationMin = 5,
    xlTotalsCalculationMax = 6,
    xlTotalsCalculationStdDev = 7,
    xlTotalsCalculationVar = 8,
    xlTotalsCalculationCustom = 9
}

declare enum XlXmlLoadOption {
    xlXmlLoadPromptUser = 0,
    xlXmlLoadOpenXml = 1,
    xlXmlLoadImportToList = 2,
    xlXmlLoadMapXml = 3
}

declare enum XlSmartTagControlType {
    xlSmartTagControlSmartTag = 1,
    xlSmartTagControlLink = 2,
    xlSmartTagControlHelp = 3,
    xlSmartTagControlHelpURL = 4,
    xlSmartTagControlSeparator = 5,
    xlSmartTagControlButton = 6,
    xlSmartTagControlLabel = 7,
    xlSmartTagControlImage = 8,
    xlSmartTagControlCheckbox = 9,
    xlSmartTagControlTextbox = 10,
    xlSmartTagControlListbox = 11,
    xlSmartTagControlCombo = 12,
    xlSmartTagControlActiveX = 13,
    xlSmartTagControlRadioGroup = 14
}

declare enum XlListConflict {
    xlListConflictDialog = 0,
    xlListConflictRetryAllConflicts = 1,
    xlListConflictDiscardAllConflicts = 2,
    xlListConflictError = 3
}

declare enum XlXmlExportResult {
    xlXmlExportSuccess = 0,
    xlXmlExportValidationFailed = 1
}

declare enum XlXmlImportResult {
    xlXmlImportSuccess = 0,
    xlXmlImportElementsTruncated = 1,
    xlXmlImportValidationFailed = 2
}

declare enum XlRemoveDocInfoType {
    xlRDIComments = 1,
    xlRDIRemovePersonalInformation = 4,
    xlRDIEmailHeader = 5,
    xlRDIRoutingSlip = 6,
    xlRDISendForReview = 7,
    xlRDIDocumentProperties = 8,
    xlRDIDocumentWorkspace = 10,
    xlRDIInkAnnotations = 11,
    xlRDIScenarioComments = 12,
    xlRDIPublishInfo = 13,
    xlRDIDocumentServerProperties = 14,
    xlRDIDocumentManagementPolicy = 15,
    xlRDIContentType = 16,
    xlRDIDefinedNameComments = 18,
    xlRDIInactiveDataConnections = 19,
    xlRDIPrinterPath = 20,
    xlRDIInlineWebExtensions = 21,
    xlRDITaskpaneWebExtensions = 22,
    xlRDIExcelDataModel = 23,
    xlRDIAll = 99
}

declare enum XlRgbColor {
    rgbAliceBlue = 16775408,
    rgbAntiqueWhite = 14150650,
    rgbAqua = 16776960,
    rgbAquamarine = 13959039,
    rgbAzure = 16777200,
    rgbBeige = 14480885,
    rgbBisque = 12903679,
    rgbBlack = 0,
    rgbBlanchedAlmond = 13495295,
    rgbBlue = 16711680,
    rgbBlueViolet = 14822282,
    rgbBrown = 2763429,
    rgbBurlyWood = 8894686,
    rgbCadetBlue = 10526303,
    rgbChartreuse = 65407,
    rgbCoral = 5275647,
    rgbCornflowerBlue = 15570276,
    rgbCornsilk = 14481663,
    rgbCrimson = 3937500,
    rgbDarkBlue = 9109504,
    rgbDarkCyan = 9145088,
    rgbDarkGoldenrod = 755384,
    rgbDarkGreen = 25600,
    rgbDarkGray = 11119017,
    rgbDarkGrey = 11119017,
    rgbDarkKhaki = 7059389,
    rgbDarkMagenta = 9109643,
    rgbDarkOliveGreen = 3107669,
    rgbDarkOrange = 36095,
    rgbDarkOrchid = 13382297,
    rgbDarkRed = 139,
    rgbDarkSalmon = 8034025,
    rgbDarkSeaGreen = 9419919,
    rgbDarkSlateBlue = 9125192,
    rgbDarkSlateGray = 5197615,
    rgbDarkSlateGrey = 5197615,
    rgbDarkTurquoise = 13749760,
    rgbDarkViolet = 13828244,
    rgbDeepPink = 9639167,
    rgbDeepSkyBlue = 16760576,
    rgbDimGray = 6908265,
    rgbDimGrey = 6908265,
    rgbDodgerBlue = 16748574,
    rgbFireBrick = 2237106,
    rgbFloralWhite = 15792895,
    rgbForestGreen = 2263842,
    rgbFuchsia = 16711935,
    rgbGainsboro = 14474460,
    rgbGhostWhite = 16775416,
    rgbGold = 55295,
    rgbGoldenrod = 2139610,
    rgbGray = 8421504,
    rgbGreen = 32768,
    rgbGrey = 8421504,
    rgbGreenYellow = 3145645,
    rgbHoneydew = 15794160,
    rgbHotPink = 11823615,
    rgbIndianRed = 6053069,
    rgbIndigo = 8519755,
    rgbIvory = 15794175,
    rgbKhaki = 9234160,
    rgbLavender = 16443110,
    rgbLavenderBlush = 16118015,
    rgbLawnGreen = 64636,
    rgbLemonChiffon = 13499135,
    rgbLightBlue = 15128749,
    rgbLightCoral = 8421616,
    rgbLightCyan = 9145088,
    rgbLightGoldenrodYellow = 13826810,
    rgbLightGray = 13882323,
    rgbLightGreen = 9498256,
    rgbLightGrey = 13882323,
    rgbLightPink = 12695295,
    rgbLightSalmon = 8036607,
    rgbLightSeaGreen = 11186720,
    rgbLightSkyBlue = 16436871,
    rgbLightSlateGray = 10061943,
    rgbLightSlateGrey = 10061943,
    rgbLightSteelBlue = 14599344,
    rgbLightYellow = 14745599,
    rgbLime = 65280,
    rgbLimeGreen = 3329330,
    rgbLinen = 15134970,
    rgbMaroon = 128,
    rgbMediumAquamarine = 11206502,
    rgbMediumBlue = 13434880,
    rgbMediumOrchid = 13850042,
    rgbMediumPurple = 14381203,
    rgbMediumSeaGreen = 7451452,
    rgbMediumSlateBlue = 15624315,
    rgbMediumSpringGreen = 10156544,
    rgbMediumTurquoise = 13422920,
    rgbMediumVioletRed = 8721863,
    rgbMidnightBlue = 7346457,
    rgbMintCream = 16449525,
    rgbMistyRose = 14804223,
    rgbMoccasin = 11920639,
    rgbNavajoWhite = 11394815,
    rgbNavy = 8388608,
    rgbNavyBlue = 8388608,
    rgbOldLace = 15136253,
    rgbOlive = 32896,
    rgbOliveDrab = 2330219,
    rgbOrange = 42495,
    rgbOrangeRed = 17919,
    rgbOrchid = 14053594,
    rgbPaleGoldenrod = 7071982,
    rgbPaleGreen = 10025880,
    rgbPaleTurquoise = 15658671,
    rgbPaleVioletRed = 9662683,
    rgbPapayaWhip = 14020607,
    rgbPeachPuff = 12180223,
    rgbPeru = 4163021,
    rgbPink = 13353215,
    rgbPlum = 14524637,
    rgbPowderBlue = 15130800,
    rgbPurple = 8388736,
    rgbRed = 255,
    rgbRosyBrown = 9408444,
    rgbRoyalBlue = 14772545,
    rgbSalmon = 7504122,
    rgbSandyBrown = 6333684,
    rgbSeaGreen = 5737262,
    rgbSeashell = 15660543,
    rgbSienna = 2970272,
    rgbSilver = 12632256,
    rgbSkyBlue = 15453831,
    rgbSlateBlue = 13458026,
    rgbSlateGray = 9470064,
    rgbSlateGrey = 9470064,
    rgbSnow = 16448255,
    rgbSpringGreen = 8388352,
    rgbSteelBlue = 11829830,
    rgbTan = 9221330,
    rgbTeal = 8421376,
    rgbThistle = 14204888,
    rgbTomato = 4678655,
    rgbTurquoise = 13688896,
    rgbYellow = 65535,
    rgbYellowGreen = 3329434,
    rgbViolet = 15631086,
    rgbWheat = 11788021,
    rgbWhite = 16777215,
    rgbWhiteSmoke = 16119285
}

declare enum XlStdColorScale {
    xlColorScaleRYG = 1,
    xlColorScaleGYR = 2,
    xlColorScaleBlackWhite = 3,
    xlColorScaleWhiteBlack = 4
}

declare enum XlConditionValueTypes {
    xlConditionValueNone = -1,
    xlConditionValueNumber = 0,
    xlConditionValueLowestValue = 1,
    xlConditionValueHighestValue = 2,
    xlConditionValuePercent = 3,
    xlConditionValueFormula = 4,
    xlConditionValuePercentile = 5,
    xlConditionValueAutomaticMin = 6,
    xlConditionValueAutomaticMax = 7
}

declare enum XlFormatFilterTypes {
    xlFilterBottom = 0,
    xlFilterTop = 1,
    xlFilterBottomPercent = 2,
    xlFilterTopPercent = 3
}

declare enum XlContainsOperator {
    xlContains = 0,
    xlDoesNotContain = 1,
    xlBeginsWith = 2,
    xlEndsWith = 3
}

declare enum XlAboveBelow {
    xlAboveAverage = 0,
    xlBelowAverage = 1,
    xlEqualAboveAverage = 2,
    xlEqualBelowAverage = 3,
    xlAboveStdDev = 4,
    xlBelowStdDev = 5
}

declare enum XlLookFor {
    xlLookForBlanks = 0,
    xlLookForErrors = 1,
    xlLookForFormulas = 2
}

declare enum XlTimePeriods {
    xlToday = 0,
    xlYesterday = 1,
    xlLast7Days = 2,
    xlThisWeek = 3,
    xlLastWeek = 4,
    xlLastMonth = 5,
    xlTomorrow = 6,
    xlNextWeek = 7,
    xlNextMonth = 8,
    xlThisMonth = 9
}

declare enum XlDupeUnique {
    xlUnique = 0,
    xlDuplicate = 1
}

declare enum XlTopBottom {
    xlTop10Top = 1,
    xlTop10Bottom = 0
}

declare enum XlIconSet {
    xlCustomSet = -1,
    xl3Arrows = 1,
    xl3ArrowsGray = 2,
    xl3Flags = 3,
    xl3TrafficLights1 = 4,
    xl3TrafficLights2 = 5,
    xl3Signs = 6,
    xl3Symbols = 7,
    xl3Symbols2 = 8,
    xl4Arrows = 9,
    xl4ArrowsGray = 10,
    xl4RedToBlack = 11,
    xl4CRV = 12,
    xl4TrafficLights = 13,
    xl5Arrows = 14,
    xl5ArrowsGray = 15,
    xl5CRV = 16,
    xl5Quarters = 17,
    xl3Stars = 18,
    xl3Triangles = 19,
    xl5Boxes = 20
}

declare enum XlThemeFont {
    xlThemeFontNone = 0,
    xlThemeFontMajor = 1,
    xlThemeFontMinor = 2
}

declare enum XlPivotLineType {
    xlPivotLineRegular = 0,
    xlPivotLineSubtotal = 1,
    xlPivotLineGrandTotal = 2,
    xlPivotLineBlank = 3
}

declare enum XlCheckInVersionType {
    xlCheckInMinorVersion = 0,
    xlCheckInMajorVersion = 1,
    xlCheckInOverwriteVersion = 2
}

declare enum XlPropertyDisplayedIn {
    xlDisplayPropertyInPivotTable = 1,
    xlDisplayPropertyInTooltip = 2,
    xlDisplayPropertyInPivotTableAndTooltip = 3
}

declare enum XlConnectionType {
    xlConnectionTypeOLEDB = 1,
    xlConnectionTypeODBC = 2,
    xlConnectionTypeXMLMAP = 3,
    xlConnectionTypeTEXT = 4,
    xlConnectionTypeWEB = 5,
    xlConnectionTypeDATAFEED = 6,
    xlConnectionTypeMODEL = 7,
    xlConnectionTypeWORKSHEET = 8,
    xlConnectionTypeNOSOURCE = 9
}

declare enum XlActionType {
    xlActionTypeUrl = 1,
    xlActionTypeRowset = 16,
    xlActionTypeReport = 128,
    xlActionTypeDrillthrough = 256
}

declare enum XlLayoutRowType {
    xlCompactRow = 0,
    xlTabularRow = 1,
    xlOutlineRow = 2
}

declare enum XlMeasurementUnits {
    xlInches = 0,
    xlCentimeters = 1,
    xlMillimeters = 2
}

declare enum XlPivotFilterType {
    xlTopCount = 1,
    xlBottomCount = 2,
    xlTopPercent = 3,
    xlBottomPercent = 4,
    xlTopSum = 5,
    xlBottomSum = 6,
    xlValueEquals = 7,
    xlValueDoesNotEqual = 8,
    xlValueIsGreaterThan = 9,
    xlValueIsGreaterThanOrEqualTo = 10,
    xlValueIsLessThan = 11,
    xlValueIsLessThanOrEqualTo = 12,
    xlValueIsBetween = 13,
    xlValueIsNotBetween = 14,
    xlCaptionEquals = 15,
    xlCaptionDoesNotEqual = 16,
    xlCaptionBeginsWith = 17,
    xlCaptionDoesNotBeginWith = 18,
    xlCaptionEndsWith = 19,
    xlCaptionDoesNotEndWith = 20,
    xlCaptionContains = 21,
    xlCaptionDoesNotContain = 22,
    xlCaptionIsGreaterThan = 23,
    xlCaptionIsGreaterThanOrEqualTo = 24,
    xlCaptionIsLessThan = 25,
    xlCaptionIsLessThanOrEqualTo = 26,
    xlCaptionIsBetween = 27,
    xlCaptionIsNotBetween = 28,
    xlSpecificDate = 29,
    xlNotSpecificDate = 30,
    xlBefore = 31,
    xlBeforeOrEqualTo = 32,
    xlAfter = 33,
    xlAfterOrEqualTo = 34,
    xlDateBetween = 35,
    xlDateNotBetween = 36,
    xlDateTomorrow = 37,
    xlDateToday = 38,
    xlDateYesterday = 39,
    xlDateNextWeek = 40,
    xlDateThisWeek = 41,
    xlDateLastWeek = 42,
    xlDateNextMonth = 43,
    xlDateThisMonth = 44,
    xlDateLastMonth = 45,
    xlDateNextQuarter = 46,
    xlDateThisQuarter = 47,
    xlDateLastQuarter = 48,
    xlDateNextYear = 49,
    xlDateThisYear = 50,
    xlDateLastYear = 51,
    xlYearToDate = 52,
    xlAllDatesInPeriodQuarter1 = 53,
    xlAllDatesInPeriodQuarter2 = 54,
    xlAllDatesInPeriodQuarter3 = 55,
    xlAllDatesInPeriodQuarter4 = 56,
    xlAllDatesInPeriodJanuary = 57,
    xlAllDatesInPeriodFebruary = 58,
    xlAllDatesInPeriodMarch = 59,
    xlAllDatesInPeriodApril = 60,
    xlAllDatesInPeriodMay = 61,
    xlAllDatesInPeriodJune = 62,
    xlAllDatesInPeriodJuly = 63,
    xlAllDatesInPeriodAugust = 64,
    xlAllDatesInPeriodSeptember = 65,
    xlAllDatesInPeriodOctober = 66,
    xlAllDatesInPeriodNovember = 67,
    xlAllDatesInPeriodDecember = 68
}

declare enum XlCredentialsMethod {
    xlCredentialsMethodIntegrated = 0,
    xlCredentialsMethodNone = 1,
    xlCredentialsMethodStored = 2
}

declare enum XlCubeFieldSubType {
    xlCubeHierarchy = 1,
    xlCubeMeasure = 2,
    xlCubeSet = 3,
    xlCubeAttribute = 4,
    xlCubeCalculatedMeasure = 5,
    xlCubeKPIValue = 6,
    xlCubeKPIGoal = 7,
    xlCubeKPIStatus = 8,
    xlCubeKPITrend = 9,
    xlCubeKPIWeight = 10,
    xlCubeImplicitMeasure = 11
}

declare enum XlSortOn {
    xlSortOnValues = 0,
    xlSortOnCellColor = 1,
    xlSortOnFontColor = 2,
    xlSortOnIcon = 3
}

declare enum XlDynamicFilterCriteria {
    xlFilterToday = 1,
    xlFilterYesterday = 2,
    xlFilterTomorrow = 3,
    xlFilterThisWeek = 4,
    xlFilterLastWeek = 5,
    xlFilterNextWeek = 6,
    xlFilterThisMonth = 7,
    xlFilterLastMonth = 8,
    xlFilterNextMonth = 9,
    xlFilterThisQuarter = 10,
    xlFilterLastQuarter = 11,
    xlFilterNextQuarter = 12,
    xlFilterThisYear = 13,
    xlFilterLastYear = 14,
    xlFilterNextYear = 15,
    xlFilterYearToDate = 16,
    xlFilterAllDatesInPeriodQuarter1 = 17,
    xlFilterAllDatesInPeriodQuarter2 = 18,
    xlFilterAllDatesInPeriodQuarter3 = 19,
    xlFilterAllDatesInPeriodQuarter4 = 20,
    xlFilterAllDatesInPeriodJanuary = 21,
    xlFilterAllDatesInPeriodFebruray = 22,
    xlFilterAllDatesInPeriodMarch = 23,
    xlFilterAllDatesInPeriodApril = 24,
    xlFilterAllDatesInPeriodMay = 25,
    xlFilterAllDatesInPeriodJune = 26,
    xlFilterAllDatesInPeriodJuly = 27,
    xlFilterAllDatesInPeriodAugust = 28,
    xlFilterAllDatesInPeriodSeptember = 29,
    xlFilterAllDatesInPeriodOctober = 30,
    xlFilterAllDatesInPeriodNovember = 31,
    xlFilterAllDatesInPeriodDecember = 32,
    xlFilterAboveAverage = 33,
    xlFilterBelowAverage = 34
}

declare enum XlFilterAllDatesInPeriod {
    xlFilterAllDatesInPeriodYear = 0,
    xlFilterAllDatesInPeriodMonth = 1,
    xlFilterAllDatesInPeriodDay = 2,
    xlFilterAllDatesInPeriodHour = 3,
    xlFilterAllDatesInPeriodMinute = 4,
    xlFilterAllDatesInPeriodSecond = 5
}

declare enum XlTableStyleElementType {
    xlWholeTable = 0,
    xlHeaderRow = 1,
    xlTotalRow = 2,
    xlGrandTotalRow = 2,
    xlFirstColumn = 3,
    xlLastColumn = 4,
    xlGrandTotalColumn = 4,
    xlRowStripe1 = 5,
    xlRowStripe2 = 6,
    xlColumnStripe1 = 7,
    xlColumnStripe2 = 8,
    xlFirstHeaderCell = 9,
    xlLastHeaderCell = 10,
    xlFirstTotalCell = 11,
    xlLastTotalCell = 12,
    xlSubtotalColumn1 = 13,
    xlSubtotalColumn2 = 14,
    xlSubtotalColumn3 = 15,
    xlSubtotalRow1 = 16,
    xlSubtotalRow2 = 17,
    xlSubtotalRow3 = 18,
    xlBlankRow = 19,
    xlColumnSubheading1 = 20,
    xlColumnSubheading2 = 21,
    xlColumnSubheading3 = 22,
    xlRowSubheading1 = 23,
    xlRowSubheading2 = 24,
    xlRowSubheading3 = 25,
    xlPageFieldLabels = 26,
    xlPageFieldValues = 27,
    xlSlicerUnselectedItemWithData = 28,
    xlSlicerUnselectedItemWithNoData = 29,
    xlSlicerSelectedItemWithData = 30,
    xlSlicerSelectedItemWithNoData = 31,
    xlSlicerHoveredUnselectedItemWithData = 32,
    xlSlicerHoveredSelectedItemWithData = 33,
    xlSlicerHoveredUnselectedItemWithNoData = 34,
    xlSlicerHoveredSelectedItemWithNoData = 35,
    xlTimelineSelectionLabel = 36,
    xlTimelineTimeLevel = 37,
    xlTimelinePeriodLabels1 = 38,
    xlTimelinePeriodLabels2 = 39,
    xlTimelineSelectedTimeBlock = 40,
    xlTimelineUnselectedTimeBlock = 41,
    xlTimelineSelectedTimeBlockSpace = 42
}

declare enum XlPivotConditionScope {
    xlSelectionScope = 0,
    xlFieldsScope = 1,
    xlDataFieldScope = 2
}

declare enum XlCalcFor {
    xlAllValues = 0,
    xlRowGroups = 1,
    xlColGroups = 2
}

declare enum XlThemeColor {
    xlThemeColorDark1 = 1,
    xlThemeColorLight1 = 2,
    xlThemeColorDark2 = 3,
    xlThemeColorLight2 = 4,
    xlThemeColorAccent1 = 5,
    xlThemeColorAccent2 = 6,
    xlThemeColorAccent3 = 7,
    xlThemeColorAccent4 = 8,
    xlThemeColorAccent5 = 9,
    xlThemeColorAccent6 = 10,
    xlThemeColorHyperlink = 11,
    xlThemeColorFollowedHyperlink = 12
}

declare enum XlFixedFormatType {
    xlTypePDF = 0,
    xlTypeXPS = 1
}

declare enum XlFixedFormatQuality {
    xlQualityStandard = 0,
    xlQualityMinimum = 1
}

declare enum XlGenerateTableRefs {
    xlGenerateTableRefA1 = 0,
    xlGenerateTableRefStruct = 1
}

declare enum XlGradientFillType {
    xlGradientFillLinear = 0,
    xlGradientFillPath = 1
}

declare enum XlThreadMode {
    xlThreadModeAutomatic = 0,
    xlThreadModeManual = 1
}

declare enum XlOartHorizontalOverflow {
    xlOartHorizontalOverflowOverflow = 0,
    xlOartHorizontalOverflowClip = 1
}

declare enum XlOartVerticalOverflow {
    xlOartVerticalOverflowOverflow = 0,
    xlOartVerticalOverflowClip = 1,
    xlOartVerticalOverflowEllipsis = 2
}

declare enum XlSparkScale {
    xlSparkScaleGroup = 1,
    xlSparkScaleSingle = 2,
    xlSparkScaleCustom = 3
}

declare enum XlSparkType {
    xlSparkLine = 1,
    xlSparkColumn = 2,
    xlSparkColumnStacked100 = 3
}

declare enum XlSparklineRowCol {
    xlSparklineNonSquare = 0,
    xlSparklineRowsSquare = 1,
    xlSparklineColumnsSquare = 2
}

declare enum XlDataBarFillType {
    xlDataBarFillSolid = 0,
    xlDataBarFillGradient = 1
}

declare enum XlDataBarBorderType {
    xlDataBarBorderNone = 0,
    xlDataBarBorderSolid = 1
}

declare enum XlDataBarAxisPosition {
    xlDataBarAxisAutomatic = 0,
    xlDataBarAxisMidpoint = 1,
    xlDataBarAxisNone = 2
}

declare enum XlDataBarNegativeColorType {
    xlDataBarColor = 0,
    xlDataBarSameAsPositive = 1
}

declare enum XlAllocation {
    xlManualAllocation = 1,
    xlAutomaticAllocation = 2
}

declare enum XlAllocationValue {
    xlAllocateValue = 1,
    xlAllocateIncrement = 2
}

declare enum XlAllocationMethod {
    xlEqualAllocation = 1,
    xlWeightedAllocation = 2
}

declare enum XlCellChangedState {
    xlCellNotChanged = 1,
    xlCellChanged = 2,
    xlCellChangeApplied = 3
}

declare enum XlPivotFieldRepeatLabels {
    xlDoNotRepeatLabels = 1,
    xlRepeatLabels = 2
}

declare enum XlSpanishModes {
    xlSpanishTuteoOnly = 0,
    xlSpanishTuteoAndVoseo = 1,
    xlSpanishVoseoOnly = 2
}

declare enum XlSlicerCrossFilterType {
    xlSlicerNoCrossFilter = 1,
    xlSlicerCrossFilterShowItemsWithDataAtTop = 2,
    xlSlicerCrossFilterShowItemsWithNoData = 3,
    xlSlicerCrossFilterHideButtonsWithNoData = 4
}

declare enum XlSlicerSort {
    xlSlicerSortDataSourceOrder = 1,
    xlSlicerSortAscending = 2,
    xlSlicerSortDescending = 3
}

declare enum XlIcon {
    xlIconNoCellIcon = -1,
    xlIconGreenUpArrow = 1,
    xlIconYellowSideArrow = 2,
    xlIconRedDownArrow = 3,
    xlIconGrayUpArrow = 4,
    xlIconGraySideArrow = 5,
    xlIconGrayDownArrow = 6,
    xlIconGreenFlag = 7,
    xlIconYellowFlag = 8,
    xlIconRedFlag = 9,
    xlIconGreenCircle = 10,
    xlIconYellowCircle = 11,
    xlIconRedCircleWithBorder = 12,
    xlIconBlackCircleWithBorder = 13,
    xlIconGreenTrafficLight = 14,
    xlIconYellowTrafficLight = 15,
    xlIconRedTrafficLight = 16,
    xlIconYellowTriangle = 17,
    xlIconRedDiamond = 18,
    xlIconGreenCheckSymbol = 19,
    xlIconYellowExclamationSymbol = 20,
    xlIconRedCrossSymbol = 21,
    xlIconGreenCheck = 22,
    xlIconYellowExclamation = 23,
    xlIconRedCross = 24,
    xlIconYellowUpInclineArrow = 25,
    xlIconYellowDownInclineArrow = 26,
    xlIconGrayUpInclineArrow = 27,
    xlIconGrayDownInclineArrow = 28,
    xlIconRedCircle = 29,
    xlIconPinkCircle = 30,
    xlIconGrayCircle = 31,
    xlIconBlackCircle = 32,
    xlIconCircleWithOneWhiteQuarter = 33,
    xlIconCircleWithTwoWhiteQuarters = 34,
    xlIconCircleWithThreeWhiteQuarters = 35,
    xlIconWhiteCircleAllWhiteQuarters = 36,
    xlIcon0Bars = 37,
    xlIcon1Bar = 38,
    xlIcon2Bars = 39,
    xlIcon3Bars = 40,
    xlIcon4Bars = 41,
    xlIconGoldStar = 42,
    xlIconHalfGoldStar = 43,
    xlIconSilverStar = 44,
    xlIconGreenUpTriangle = 45,
    xlIconYellowDash = 46,
    xlIconRedDownTriangle = 47,
    xlIcon4FilledBoxes = 48,
    xlIcon3FilledBoxes = 49,
    xlIcon2FilledBoxes = 50,
    xlIcon1FilledBox = 51,
    xlIcon0FilledBoxes = 52
}

declare enum XlProtectedViewCloseReason {
    xlProtectedViewCloseNormal = 0,
    xlProtectedViewCloseEdit = 1,
    xlProtectedViewCloseForced = 2
}

declare enum XlProtectedViewWindowState {
    xlProtectedViewWindowNormal = 0,
    xlProtectedViewWindowMinimized = 1,
    xlProtectedViewWindowMaximized = 2
}

declare enum XlFileValidationPivotMode {
    xlFileValidationPivotDefault = 0,
    xlFileValidationPivotRun = 1,
    xlFileValidationPivotSkip = 2
}

declare enum XlPortugueseReform {
    xlPortuguesePreReform = 1,
    xlPortuguesePostReform = 2,
    xlPortugueseBoth = 3
}

declare enum XlQuickAnalysisMode {
    xlLensOnly = 0,
    xlFormatConditions = 1,
    xlRecommendedCharts = 2,
    xlTotals = 3,
    xlTables = 4,
    xlSparklines = 5
}

declare enum XlSlicerCacheType {
    xlSlicer = 1,
    xlTimeline = 2
}

declare enum XlCalcMemNumberFormatType {
    xlNumberFormatTypeDefault = 0,
    xlNumberFormatTypeNumber = 1,
    xlNumberFormatTypePercent = 2
}

declare enum XlTimelineLevel {
    xlTimelineLevelYears = 0,
    xlTimelineLevelQuarters = 1,
    xlTimelineLevelMonths = 2,
    xlTimelineLevelDays = 3
}

declare enum XlFilterStatus {
    xlFilterStatusOK = 0,
    xlFilterStatusDateWrongOrder = 1,
    xlFilterStatusDateHasTime = 2,
    xlFilterStatusInvalidDate = 3
}

declare enum XlModelChangeSource {
    xlChangeByExcel = 0,
    xlChangeByPowerPivotAddIn = 1
}

declare interface Adjustments extends Kso._IMsoDispObj {
    /**
     * @returnParam Count 
     */
    readonly Count: int;
    /**
     * @put 
     */
    Item(Index: int, Val: float): void;
    /**
     * @get 
     * @returnParam Val 
     */
    Item(Index: int): float;
}

declare interface ColorFormat extends Kso._IMsoDispObj {
    /**
     * @returnParam RGB 
     */
    RGB: int4;
    /**
     * @returnParam SchemeColor 
     */
    SchemeColor: int;
    /**
     * @returnParam Type 
     */
    readonly Type: Kso.MsoColorType;
    /**
     * @returnParam pValue 
     */
    TintAndShade: float;
    /**
     * @returnParam ObjectThemeColor 
     */
    ObjectThemeColor: Kso.MsoThemeColorIndex;
    /**
     * @returnParam pValue 
     */
    Brightness: float;
}

declare interface LineFormat extends Kso._IMsoDispObj {
    /**
     * @returnParam BackColor 
     */
    BackColor: ColorFormat;
    /**
     * @returnParam BeginArrowheadLength 
     */
    BeginArrowheadLength: Kso.MsoArrowheadLength;
    /**
     * @returnParam BeginArrowheadStyle 
     */
    BeginArrowheadStyle: Kso.MsoArrowheadStyle;
    /**
     * @returnParam BeginArrowheadWidth 
     */
    BeginArrowheadWidth: Kso.MsoArrowheadWidth;
    /**
     * @returnParam DashStyle 
     */
    DashStyle: Kso.MsoLineDashStyle;
    /**
     * @returnParam EndArrowheadLength 
     */
    EndArrowheadLength: Kso.MsoArrowheadLength;
    /**
     * @returnParam EndArrowheadStyle 
     */
    EndArrowheadStyle: Kso.MsoArrowheadStyle;
    /**
     * @returnParam EndArrowheadWidth 
     */
    EndArrowheadWidth: Kso.MsoArrowheadWidth;
    /**
     * @returnParam ForeColor 
     */
    ForeColor: ColorFormat;
    /**
     * @returnParam Pattern 
     */
    Pattern: Kso.MsoPatternType;
    /**
     * @returnParam Style 
     */
    Style: Kso.MsoLineStyle;
    /**
     * @returnParam Transparency 
     */
    Transparency: float;
    /**
     * @returnParam Visible 
     */
    Visible: Kso.MsoTriState;
    /**
     * @returnParam Weight 
     */
    Weight: float;
    /**
     * @returnParam InsetPen 
     */
    InsetPen: Kso.MsoTriState;
}

declare interface ShapeNode extends Kso._IMsoDispObj {
    /**
     * @returnParam EditingType 
     */
    readonly EditingType: Kso.MsoEditingType;
    /**
     * @returnParam Points 
     */
    readonly Points: any;
    /**
     * @returnParam SegmentType 
     */
    readonly SegmentType: Kso.MsoSegmentType;
}

declare interface ShapeNodes extends Kso._IMsoDispObj {
    /**
     * @returnParam Count 
     */
    readonly Count: int;
    Delete(Index: int): void;
    Insert(Index: int, SegmentType: Kso.MsoSegmentType, EditingType: Kso.MsoEditingType, X1: float, Y1: float, X2?: Default<float, 0.000000>, Y2?: Default<float, 0.000000>, X3?: Default<float, 0.000000>, Y3?: Default<float, 0.000000>): void;
    SetEditingType(Index: int, EditingType: Kso.MsoEditingType): void;
    SetPosition(Index: int, X1: float, Y1: float): void;
    SetSegmentType(Index: int, SegmentType: Kso.MsoSegmentType): void;
}

declare interface PictureFormat extends Kso._IMsoDispObj {
    IncrementBrightness(Increment: float): void;
    IncrementContrast(Increment: float): void;
    /**
     * @returnParam Brightness 
     */
    Brightness: float;
    /**
     * @returnParam ColorType 
     */
    ColorType: Kso.MsoPictureColorType;
    /**
     * @returnParam Contrast 
     */
    Contrast: float;
    /**
     * @returnParam CropBottom 
     */
    CropBottom: float;
    /**
     * @returnParam CropLeft 
     */
    CropLeft: float;
    /**
     * @returnParam CropRight 
     */
    CropRight: float;
    /**
     * @returnParam CropTop 
     */
    CropTop: float;
    /**
     * @returnParam TransparencyColor 
     */
    TransparencyColor: int4;
    /**
     * @returnParam TransparentBackground 
     */
    TransparentBackground: Kso.MsoTriState;
    /**
     * @returnParam Crop 
     */
    readonly Crop: Kso.Crop;
}

declare interface ShadowFormat extends Kso._IMsoDispObj {
    IncrementOffsetX(Increment: float): void;
    IncrementOffsetY(Increment: float): void;
    /**
     * @returnParam ForeColor 
     */
    ForeColor: ColorFormat;
    /**
     * @returnParam Obscured 
     */
    Obscured: Kso.MsoTriState;
    /**
     * @returnParam OffsetX 
     */
    OffsetX: float;
    /**
     * @returnParam OffsetY 
     */
    OffsetY: float;
    /**
     * @returnParam Transparency 
     */
    Transparency: float;
    /**
     * @returnParam Type 
     */
    Type: Kso.MsoShadowType;
    /**
     * @returnParam Visible 
     */
    Visible: Kso.MsoTriState;
    /**
     * @returnParam ShadowStyle 
     */
    Style: Kso.MsoShadowStyle;
    /**
     * @returnParam Blur 
     */
    Blur: float;
    /**
     * @returnParam Size 
     */
    Size: float;
    /**
     * @returnParam RotateWithShape 
     */
    RotateWithShape: Kso.MsoTriState;
}

declare interface TextEffectFormat extends Kso._IMsoDispObj {
    ToggleVerticalText(): void;
    /**
     * @returnParam Alignment 
     */
    Alignment: Kso.MsoTextEffectAlignment;
    /**
     * @returnParam FontBold 
     */
    FontBold: Kso.MsoTriState;
    /**
     * @returnParam FontItalic 
     */
    FontItalic: Kso.MsoTriState;
    /**
     * @returnParam FontName 
     */
    FontName: string;
    /**
     * @returnParam FontSize 
     */
    FontSize: float;
    /**
     * @returnParam KernedPairs 
     */
    KernedPairs: Kso.MsoTriState;
    /**
     * @returnParam NormalizedHeight 
     */
    NormalizedHeight: Kso.MsoTriState;
    /**
     * @returnParam PresetShape 
     */
    PresetShape: Kso.MsoPresetTextEffectShape;
    /**
     * @returnParam Preset 
     */
    PresetTextEffect: Kso.MsoPresetTextEffect;
    /**
     * @returnParam RotatedChars 
     */
    RotatedChars: Kso.MsoTriState;
    /**
     * @returnParam Text 
     */
    Text: string;
    /**
     * @returnParam Tracking 
     */
    Tracking: float;
}

declare interface ThreeDFormat extends Kso._IMsoDispObj {
    IncrementRotationX(Increment: float): void;
    IncrementRotationY(Increment: float): void;
    ResetRotation(): void;
    SetThreeDFormat(PresetThreeDFormat: Kso.MsoPresetThreeDFormat): void;
    SetExtrusionDirection(PresetExtrusionDirection: Kso.MsoPresetExtrusionDirection): void;
    /**
     * @returnParam Depth 
     */
    Depth: float;
    /**
     * @returnParam ExtrusionColor 
     */
    readonly ExtrusionColor: ColorFormat;
    /**
     * @returnParam ExtrusionColorType 
     */
    ExtrusionColorType: Kso.MsoExtrusionColorType;
    /**
     * @returnParam Perspective 
     */
    Perspective: Kso.MsoTriState;
    /**
     * @returnParam PresetExtrusionDirection 
     */
    readonly PresetExtrusionDirection: Kso.MsoPresetExtrusionDirection;
    /**
     * @returnParam PresetLightingDirection 
     */
    PresetLightingDirection: Kso.MsoPresetLightingDirection;
    /**
     * @returnParam PresetLightingSoftness 
     */
    PresetLightingSoftness: Kso.MsoPresetLightingSoftness;
    /**
     * @returnParam PresetMaterial 
     */
    PresetMaterial: Kso.MsoPresetMaterial;
    /**
     * @returnParam PresetThreeDFormat 
     */
    readonly PresetThreeDFormat: Kso.MsoPresetThreeDFormat;
    /**
     * @returnParam RotationX 
     */
    RotationX: float;
    /**
     * @returnParam RotationY 
     */
    RotationY: float;
    /**
     * @returnParam Visible 
     */
    Visible: Kso.MsoTriState;
    SetPresetCamera(PresetCamera: Kso.MsoPresetCamera): void;
    /**
     * @returnParam PresetLightRigType 
     */
    PresetLighting: Kso.MsoLightRigType;
    /**
     * @returnParam Z 
     */
    Z: float;
    /**
     * @returnParam BevelTopType 
     */
    BevelTopType: Kso.MsoBevelType;
    /**
     * @returnParam BevelTopInset 
     */
    BevelTopInset: float;
    /**
     * @returnParam BevelTopDepth 
     */
    BevelTopDepth: float;
    /**
     * @returnParam BevelBottomType 
     */
    BevelBottomType: Kso.MsoBevelType;
    /**
     * @returnParam BevelBottomInset 
     */
    BevelBottomInset: float;
    /**
     * @returnParam BevelBottomDepth 
     */
    BevelBottomDepth: float;
    /**
     * @returnParam PresetCamera 
     */
    readonly PresetCamera: Kso.MsoPresetCamera;
    /**
     * @returnParam RotationZ 
     */
    RotationZ: float;
    /**
     * @returnParam Width 
     */
    ContourWidth: float;
    /**
     * @returnParam ContourColor 
     */
    readonly ContourColor: ColorFormat;
    /**
     * @returnParam FOV 
     */
    FieldOfView: float;
    /**
     * @returnParam ProjectText 
     */
    ProjectText: Kso.MsoTriState;
    /**
     * @returnParam LightAngle 
     */
    LightAngle: float;
}

declare interface FillFormat extends Kso._IMsoDispObj {
    OneColorGradient(Style: Kso.MsoGradientStyle, Variant: int, Degree: float): void;
    Patterned(Pattern: Kso.MsoPatternType): void;
    PresetGradient(Style: Kso.MsoGradientStyle, Variant: int, PresetGradientType: Kso.MsoPresetGradientType): void;
    PresetTextured(PresetTexture: Kso.MsoPresetTexture): void;
    Solid(): void;
    TwoColorGradient(Style: Kso.MsoGradientStyle, Variant: int): void;
    UserPicture(PictureFile: string): void;
    UserTextured(TextureFile: string): void;
    /**
     * @returnParam BackColor 
     */
    BackColor: ColorFormat;
    /**
     * @returnParam ForeColor 
     */
    ForeColor: ColorFormat;
    /**
     * @returnParam GradientColorType 
     */
    readonly GradientColorType: Kso.MsoGradientColorType;
    /**
     * @returnParam GradientDegree 
     */
    readonly GradientDegree: float;
    /**
     * @returnParam GradientStyle 
     */
    readonly GradientStyle: Kso.MsoGradientStyle;
    /**
     * @returnParam GradientVariant 
     */
    readonly GradientVariant: int;
    /**
     * @returnParam Pattern 
     */
    readonly Pattern: Kso.MsoPatternType;
    /**
     * @returnParam PresetGradientType 
     */
    readonly PresetGradientType: Kso.MsoPresetGradientType;
    /**
     * @returnParam PresetTexture 
     */
    readonly PresetTexture: Kso.MsoPresetTexture;
    /**
     * @returnParam TextureName 
     */
    readonly TextureName: string;
    /**
     * @returnParam TextureType 
     */
    readonly TextureType: Kso.MsoTextureType;
    /**
     * @returnParam Transparency 
     */
    Transparency: float;
    /**
     * @returnParam Type 
     */
    readonly Type: Kso.MsoFillType;
    /**
     * @returnParam Visible 
     */
    Visible: Kso.MsoTriState;
    /**
     * @returnParam GradientStops 
     */
    readonly GradientStops: Kso.GradientStops;
    /**
     * @returnParam TextureOffsetX 
     */
    TextureOffsetX: float;
    /**
     * @returnParam TextureOffsetY 
     */
    TextureOffsetY: float;
    /**
     * @returnParam TextureAlignment 
     */
    TextureAlignment: Kso.MsoTextureAlignment;
    /**
     * @returnParam HorizontalScale 
     */
    TextureHorizontalScale: float;
    /**
     * @returnParam VerticalScale 
     */
    TextureVerticalScale: float;
    /**
     * @returnParam TextureTile 
     */
    TextureTile: Kso.MsoTriState;
    /**
     * @returnParam RotateWithObject 
     */
    RotateWithObject: Kso.MsoTriState;
    /**
     * @returnParam PictureEffects 
     */
    readonly PictureEffects: Kso.PictureEffects;
    /**
     * @returnParam GradientAngle 
     */
    GradientAngle: float;
}

/**
 * @nativeInterfaceName IShape 
*/
declare interface Shape {
    Apply(): void;
    Delete(): void;
    Duplicate(): Shape;
    Flip(FlipCmd: Kso.MsoFlipCmd): void;
    IncrementLeft(Increment: float): void;
    IncrementRotation(Increment: float): void;
    IncrementTop(Increment: float): void;
    PickUp(): void;
    RerouteConnections(): void;
    ScaleHeight(Factor: float, RelativeToOriginalSize: Kso.MsoTriState, Scale?: any): void;
    ScaleWidth(Factor: float, RelativeToOriginalSize: Kso.MsoTriState, Scale?: any): void;
    Select(Replace?: any): void;
    SetShapesDefaultProperties(): void;
    Ungroup(): ShapeRange;
    ZOrder(ZOrderCmd: Kso.MsoZOrderCmd): void;
    readonly Adjustments: Adjustments;
    readonly TextFrame: TextFrame;
    AutoShapeType: Kso.MsoAutoShapeType;
    readonly ConnectionSiteCount: int4;
    readonly Connector: Kso.MsoTriState;
    readonly ConnectorFormat: ConnectorFormat;
    readonly Fill: FillFormat;
    readonly GroupItems: GroupShapes;
    Height: float;
    readonly HorizontalFlip: Kso.MsoTriState;
    Left: float;
    readonly Line: LineFormat;
    LockAspectRatio: Kso.MsoTriState;
    Name: string;
    readonly Nodes: ShapeNodes;
    Rotation: float;
    readonly PictureFormat: PictureFormat;
    readonly Shadow: ShadowFormat;
    readonly TextEffect: TextEffectFormat;
    readonly ThreeD: ThreeDFormat;
    Top: float;
    readonly Type: Kso.MsoShapeType;
    readonly VerticalFlip: Kso.MsoTriState;
    Visible: Kso.MsoTriState;
    Width: float;
    readonly Hyperlink: Hyperlink;
    OnAction: string;
    Locked: boolean;
    readonly TopLeftCell: Range;
    readonly BottomRightCell: Range;
    Placement: XlPlacement;
    Copy(): void;
    Cut(): void;
    CopyPicture(Appearance?: any, Format?: any): void;
    readonly ControlFormat: ControlFormat;
    readonly FormControlType: XlFormControl;
    AlternativeText: string;
    readonly Child: Kso.MsoTriState;
    readonly ParentGroup: Shape;
    readonly ID: int4;
    readonly Chart: Chart;
    readonly HasChart: Kso.MsoTriState;
    readonly TextFrame2: TextFrame2;
    readonly SoftEdge: Kso.SoftEdgeFormat;
    readonly Glow: Kso.GlowFormat;
    readonly Reflection: Kso.ReflectionFormat;
    Title: string;
}

declare interface Application {
    readonly Application: Application;
    readonly ActiveCell: Range;
    readonly ActiveChart: Chart;
    readonly ActiveSheet: Worksheet;
    readonly ActiveWorkbook: Workbook;
    /**
     * @needLCID  
     */
    Calculate(): void;
    readonly Cells: Range;
    readonly Charts: Sheets;
    readonly Columns: Range;
    /**
     * @needLCID  
     */
    Evaluate(Name: any): any;
    /**
     * @needLCID  
     */
    Intersect(Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
    readonly Names: Names;
    /**
     * @get 
     */
    Range(Cell1: any, Cell2?: any): Range;
    readonly Rows: Range;
    /**
     * @needLCID  
     */
    readonly Selection: IDispatch;
    readonly Sheets: Sheets;
    /**
     * @needLCID  
     */
    Union(Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
    readonly Workbooks: Workbooks;
    readonly WorksheetFunction: WorksheetFunction;
    readonly Worksheets: Sheets;
    /**
     * @needLCID  
     */
    AddCustomList(ListArray: any, ByRow?: any): void;
    /**
     * @needLCID  
     */
    Calculation: XlCalculation;
    /**
     * @needLCID  
     */
    CellDragAndDrop: boolean;
    /**
     * @needLCID  
     */
    CentimetersToPoints(Centimeters: double): double;
    /**
     * @needLCID  
     */
    CheckSpelling(Word: string, CustomDictionary?: any, IgnoreUppercase?: any): boolean;
    /**
     * @needLCID  
     * @get 
     */
    ClipboardFormats(Index?: any): any;
    /**
     * @needLCID  
     */
    ConvertFormula(Formula: any, FromReferenceStyle: XlReferenceStyle, ToReferenceStyle?: any, ToAbsolute?: any, RelativeTo?: any): any;
    /**
     * @needLCID  
     */
    readonly CustomListCount: int4;
    /**
     * @needLCID  
     */
    CutCopyMode: XlCutCopyMode;
    /**
     * @needLCID  
     */
    DeleteCustomList(ListNum: int4): void;
    /**
     * @needLCID  
     */
    FixedDecimal: boolean;
    /**
     * @needLCID  
     */
    FixedDecimalPlaces: int4;
    /**
     * @needLCID  
     */
    GetCustomListContents(ListNum: int4): any;
    /**
     * @needLCID  
     */
    GetCustomListNum(ListArray: any): int4;
    /**
     * @needLCID  
     */
    InchesToPoints(Inches: double): double;
    /**
     * @needLCID  
     * @get 
     */
    International(Index?: any): any;
    /**
     * @needLCID  
     */
    Iteration: boolean;
    /**
     * @needLCID  
     */
    MaxChange: double;
    readonly Name: string;
    PivotTableSelection: boolean;
    /**
     * @needLCID  
     */
    ReferenceStyle: XlReferenceStyle;
    /**
     * @needLCID  
     */
    Undo(): void;
    readonly Value: string;
    /**
     * @needLCID  
     */
    readonly Version: string;
    /**
     * @needLCID  
     */
    Volatile(Volatile?: any): void;
    ExtendList: boolean;
    readonly ProductCode: string;
    readonly LanguageSettings: Kso.LanguageSettings;
    CalculateFull(): void;
    readonly CalculationVersion: int4;
    /**
     * @putref 
     */
    FindFormat: CellFormat;
    /**
     * @putref 
     */
    ReplaceFormat: CellFormat;
    readonly CalculationState: XlCalculationState;
    CalculateFullRebuild(): void;
    GenerateGetPivotData: boolean;
    CheckAbort(KeepAbort?: any): void;
    DecimalSeparator: string;
    ThousandsSeparator: string;
    UseSystemSeparators: boolean;
    readonly IsSandboxed: boolean;
}

/**
 * @nativeInterfaceName IRange 
*/
declare interface Range {
    Activate(): any;
    AddIndent: any;
    /**
     * @needLCID  
     * @get 
     */
    Address(RowAbsolute?: any, ColumnAbsolute?: any, ReferenceStyle?: Default<XlReferenceStyle, 1>, External?: any, RelativeTo?: any): string;
    /**
     * @get 
     */
    AddressLocal(RowAbsolute?: any, ColumnAbsolute?: any, ReferenceStyle?: Default<XlReferenceStyle, 1>, External?: any, RelativeTo?: any): string;
    AdvancedFilter(Action: XlFilterAction, CriteriaRange?: any, CopyToRange?: any, Unique?: any): any;
    ApplyNames(Names?: any, IgnoreRelativeAbsolute?: any, UseRowColumnNames?: any, OmitColumn?: any, OmitRow?: any, Order?: Default<XlApplyNamesOrder, 1>, AppendLast?: any): any;
    ApplyOutlineStyles(): any;
    readonly Areas: Areas;
    AutoComplete(String: string): string;
    AutoFill(Destination: Range, Type?: Default<XlAutoFillType, 0>): any;
    AutoFilter(Field?: any, Criteria1?: any, Operator?: Default<XlAutoFilterOperator, 1>, Criteria2?: any, VisibleDropDown?: any): any;
    AutoFit(): any;
    AutoOutline(): any;
    readonly Borders: Borders;
    Calculate(): any;
    readonly Cells: Range;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    Clear(): any;
    ClearContents(): any;
    ClearFormats(): any;
    ClearNotes(): any;
    ClearOutline(): any;
    readonly Column: int4;
    ColumnDifferences(Comparison: any): Range;
    readonly Columns: Range;
    ColumnWidth: any;
    Consolidate(Sources?: any, Function?: any, TopRow?: any, LeftColumn?: any, CreateLinks?: any): any;
    Copy(Destination?: any): any;
    CopyPicture(Appearance?: Default<XlPictureAppearance, 1>, Format?: Default<XlCopyPictureFormat, -4147>): any;
    readonly Count: int4;
    CreateNames(Top?: any, Left?: any, Bottom?: any, Right?: any): any;
    readonly CurrentArray: Range;
    readonly CurrentRegion: Range;
    Cut(Destination?: any): any;
    DataSeries(Rowcol?: any, Type?: Default<XlDataSeriesType, -4132>, Date?: Default<XlDataSeriesDate, 1>, Step?: any, Stop?: any, Trend?: any): any;
    Delete(Shift?: any): any;
    readonly Dependents: Range;
    readonly DirectDependents: Range;
    readonly DirectPrecedents: Range;
    /**
     * @get 
     */
    End(Direction: XlDirection): Range;
    readonly EntireColumn: Range;
    readonly EntireRow: Range;
    FillDown(): any;
    FillLeft(): any;
    FillRight(): any;
    FillUp(): any;
    Find(What: any, After?: any, LookIn?: any, LookAt?: any, SearchOrder?: any, SearchDirection?: Default<XlSearchDirection, 1>, MatchCase?: any, MatchByte?: any, SearchFormat?: any): Range;
    FindNext(After?: any): Range;
    FindPrevious(After?: any): Range;
    readonly Font: Font;
    /**
     * @needLCID  
     */
    Formula: any;
    FormulaArray: any;
    FormulaHidden: any;
    FormulaLocal: any;
    /**
     * @needLCID  
     */
    FormulaR1C1: any;
    FormulaR1C1Local: any;
    Group(Start?: any, End?: any, By?: any, Periods?: any): any;
    readonly HasArray: any;
    readonly HasFormula: any;
    readonly Height: any;
    Hidden: any;
    HorizontalAlignment: any;
    IndentLevel: any;
    InsertIndent(InsertAmount: int4): void;
    Insert(Shift?: any, CopyOrigin?: any): any;
    readonly Interior: Interior;
    /**
     * @needLCID  
     * @put 
     */
    Item(RowIndex: any, ColumnIndex?: any, RHS?: any): void;
    /**
     * @needLCID  
     * @get 
     */
    Item(RowIndex: any, ColumnIndex?: any): any;
    readonly Left: any;
    readonly ListHeaderRows: int4;
    ListNames(): any;
    readonly LocationInTable: XlLocationInTable;
    Locked: any;
    Merge(Across?: any): void;
    UnMerge(): void;
    readonly MergeArea: Range;
    MergeCells: any;
    Name: any;
    readonly Next: Range;
    NoteText(Text?: any, Start?: any, Length?: any): string;
    NumberFormat: any;
    NumberFormatLocal: any;
    /**
     * @get 
     */
    Offset(RowOffset?: any, ColumnOffset?: any): Range;
    Orientation: any;
    OutlineLevel: any;
    Parse(ParseLine?: any, Destination?: any): any;
    readonly PivotField: PivotField;
    readonly PivotItem: PivotItem;
    readonly PivotTable: PivotTable;
    readonly Precedents: Range;
    readonly PrefixCharacter: any;
    readonly Previous: Range;
    /**
     * @get 
     */
    Range(Cell1: any, Cell2?: any): Range;
    RemoveSubtotal(): any;
    Replace(What: any, Replacement: any, LookAt?: any, SearchOrder?: any, MatchCase?: any, MatchByte?: any, SearchFormat?: any, ReplaceFormat?: any): boolean;
    /**
     * @get 
     */
    Resize(RowSize?: any, ColumnSize?: any): Range;
    readonly Row: int4;
    RowDifferences(Comparison: any): Range;
    RowHeight: any;
    readonly Rows: Range;
    Select(): any;
    ShowDetail: any;
    ShrinkToFit: any;
    Sort(Key1?: any, Order1?: Default<XlSortOrder, 1>, Key2?: any, Type?: any, Order2?: Default<XlSortOrder, 1>, Key3?: any, Order3?: Default<XlSortOrder, 1>, Header?: Default<XlYesNoGuess, 2>, OrderCustom?: any, MatchCase?: any, Orientation?: Default<XlSortOrientation, 2>, SortMethod?: Default<XlSortMethod, 1>, DataOption1?: Default<XlSortDataOption, 0>, DataOption2?: Default<XlSortDataOption, 0>, DataOption3?: Default<XlSortDataOption, 0>): any;
    SortSpecial(SortMethod?: Default<XlSortMethod, 1>, Key1?: any, Order1?: Default<XlSortOrder, 1>, Type?: any, Key2?: any, Order2?: Default<XlSortOrder, 1>, Key3?: any, Order3?: Default<XlSortOrder, 1>, Header?: Default<XlYesNoGuess, 2>, OrderCustom?: any, MatchCase?: any, Orientation?: Default<XlSortOrientation, 2>, DataOption1?: Default<XlSortDataOption, 0>, DataOption2?: Default<XlSortDataOption, 0>, DataOption3?: Default<XlSortDataOption, 0>): any;
    SpecialCells(Type: XlCellType, Value?: any): Range;
    Style: any;
    Subtotal(GroupBy: int4, Function: XlConsolidationFunction, TotalList: any, Replace?: any, PageBreaks?: any, SummaryBelowData?: Default<XlSummaryRow, 1>): any;
    readonly Text: any;
    TextToColumns(Destination?: any, DataType?: Default<XlTextParsingType, 1>, TextQualifier?: Default<XlTextQualifier, 1>, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, DecimalSeparator?: any, ThousandsSeparator?: any, TrailingMinusNumbers?: any): any;
    readonly Top: any;
    Ungroup(): any;
    UseStandardHeight: any;
    UseStandardWidth: any;
    readonly Validation: Validation;
    /**
     * @needLCID  
     * @put 
     */
    Value(RangeValueDataType?: any, RHS?: any): void;
    /**
     * @needLCID  
     * @get 
     */
    Value(RangeValueDataType?: any): any;
    /**
     * @needLCID  
     */
    Value2: any;
    VerticalAlignment: any;
    readonly Width: any;
    readonly Worksheet: Worksheet;
    WrapText: any;
    AddComment(Text?: any): Comment;
    readonly Comment: Comment;
    ClearComments(): void;
    readonly FormatConditions: FormatConditions;
    ReadingOrder: int4;
    readonly Hyperlinks: Hyperlinks;
    ID: string;
    readonly PivotCell: PivotCell;
    Dirty(): void;
    readonly Errors: Errors;
    PasteSpecial(Paste?: Default<XlPasteType, -4104>, Operation?: Default<XlPasteSpecialOperation, -4142>, SkipBlanks?: any, Transpose?: any): any;
    readonly AllowEdit: boolean;
    readonly ListObject: ListObject;
    RemoveDuplicates(Columns?: any, Header?: Default<XlYesNoGuess, 2>): void;
    readonly CountLarge: any;
    readonly SparklineGroups: SparklineGroups;
    ClearHyperlinks(): void;
    readonly DisplayFormat: DisplayFormat;
    BorderAround(LineStyle?: any, Weight?: Default<Kso.XlBorderWeight, 2>, ColorIndex?: Default<Kso.XlColorIndex, -4105>, Color?: any, ThemeColor?: any): any;
}

/**
 * @nativeInterfaceName IAreas 
*/
declare interface Areas {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: int4): Range;
}

/**
 * @nativeInterfaceName IBorders 
*/
declare interface Borders {
    Color: any;
    ColorIndex: any;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: XlBordersIndex): Border;
    LineStyle: any;
    Value: any;
    Weight: any;
    ThemeColor: any;
    TintAndShade: any;
}

/**
 * @nativeInterfaceName IBorder 
*/
declare interface Border {
    Color: any;
    ColorIndex: any;
    LineStyle: any;
    Weight: any;
    ThemeColor: any;
    TintAndShade: any;
}

/**
 * @nativeInterfaceName ICharacters 
*/
declare interface Characters {
    Caption: string;
    readonly Count: int4;
    Delete(): any;
    readonly Font: Font;
    Insert(String: string): any;
    Text: string;
    PhoneticCharacters: string;
}

/**
 * @nativeInterfaceName IFont 
*/
declare interface Font {
    Background: any;
    Bold: any;
    Color: any;
    ColorIndex: any;
    FontStyle: any;
    Italic: any;
    Name: any;
    Size: any;
    Strikethrough: any;
    Subscript: any;
    Superscript: any;
    Underline: any;
    ThemeColor: any;
    TintAndShade: any;
    ThemeFont: XlThemeFont;
}

/**
 * @nativeInterfaceName IInterior 
*/
declare interface Interior {
    Color: any;
    ColorIndex: any;
    InvertIfNegative: any;
    Pattern: any;
    PatternColor: any;
    PatternColorIndex: any;
    ThemeColor: any;
    TintAndShade: any;
    PatternThemeColor: any;
    PatternTintAndShade: any;
    readonly Gradient: IDispatch;
}

/**
 * @nativeInterfaceName IPivotField 
*/
declare interface PivotField {
    Calculation: XlPivotFieldCalculation;
    CurrentPage: any;
    readonly DataRange: Range;
    readonly DataType: XlPivotFieldDataType;
    Function: XlConsolidationFunction;
    readonly GroupLevel: any;
    /**
     * @get 
     */
    HiddenItems(Index?: any): any;
    Name: string;
    NumberFormat: string;
    Orientation: Kso.XlPivotFieldOrientation;
    ShowAllItems: boolean;
    PivotItems(Index?: any): any;
    Position: any;
    readonly SourceName: string;
    /**
     * @put 
     */
    Subtotals(Index?: any, RHS?: any): void;
    /**
     * @get 
     */
    Subtotals(Index?: any): any;
    BaseField: any;
    BaseItem: any;
    readonly TotalLevels: any;
    Value: string;
    /**
     * @get 
     */
    VisibleItems(Index?: any): any;
    CalculatedItems(): CalculatedItems;
    Delete(): void;
    Formula: string;
    readonly IsCalculated: boolean;
    readonly AutoSortOrder: int4;
    readonly AutoSortField: string;
    LayoutBlankLine: boolean;
    LayoutSubtotalLocation: XlSubtototalLocationType;
    LayoutPageBreak: boolean;
    LayoutForm: XlLayoutFormType;
    Caption: string;
    StandardFormula: string;
    EnableItemSelection: boolean;
    LayoutCompactRow: boolean;
    IncludeNewItemsInFilter: boolean;
    readonly PivotFilters: PivotFilters;
    EnableMultiplePageItems: boolean;
    readonly AllItemsVisible: boolean;
    ClearAllFilters(): void;
    ClearValueFilters(): void;
    ClearLabelFilters(): void;
    AutoSort(Order: int4, Field: string, PivotLine?: any, CustomSubtotal?: any): void;
    ShowDetail: boolean;
    RepeatLabels: boolean;
}

/**
 * @nativeInterfaceName ICalculatedItems 
*/
declare interface CalculatedItems {
    readonly Count: int4;
    Item(Index: any): PivotItem;
    Add(Name: string, Formula: string, UseStandardFormula?: any): PivotItem;
}

/**
 * @nativeInterfaceName IPivotItem 
*/
declare interface PivotItem {
    readonly Parent: PivotField;
    Name: string;
    Position: int4;
    ShowDetail: boolean;
    Value: string;
    Visible: boolean;
    Delete(): void;
    readonly IsCalculated: boolean;
    Formula: string;
    Caption: string;
    StandardFormula: string;
}

/**
 * @nativeInterfaceName IPivotFields 
*/
declare interface PivotFields {
    readonly Count: int4;
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName IPivotTable 
*/
declare interface PivotTable {
    AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AddToTable?: any): any;
    /**
     * @get 
     */
    ColumnFields(Index?: any): IDispatch;
    ColumnGrand: boolean;
    readonly DataBodyRange: Range;
    /**
     * @get 
     */
    DataFields(Index?: any): IDispatch;
    readonly DataLabelRange: Range;
    HasAutoFormat: boolean;
    InnerDetail: string;
    Name: string;
    /**
     * @get 
     */
    PageFields(Index?: any): IDispatch;
    readonly PageRange: Range;
    readonly PageRangeCells: Range;
    PivotFields(Index?: any): IDispatch;
    RefreshTable(): boolean;
    /**
     * @get 
     */
    RowFields(Index?: any): IDispatch;
    RowGrand: boolean;
    SourceData: any;
    readonly TableRange1: Range;
    readonly TableRange2: Range;
    Value: string;
    CacheIndex: int4;
    CalculatedFields(): CalculatedFields;
    DisplayErrorString: boolean;
    DisplayNullString: boolean;
    EnableDrilldown: boolean;
    ErrorString: string;
    ListFormulas(): void;
    MergeLabels: boolean;
    NullString: string;
    PivotCache(): PivotCache;
    readonly PivotFormulas: PivotFormulas;
    SubtotalHiddenPageItems: boolean;
    PageFieldOrder: int4;
    PageFieldWrapCount: int4;
    PreserveFormatting: boolean;
    GrandTotalName: string;
    PivotSelect(Name: string, Mode?: Default<XlPTSelectionMode, 0>, UseStandardName?: any): void;
    readonly DataPivotField: PivotField;
    AddDataField(Field: IDispatch, Caption?: any, Function?: any): PivotField;
    readonly Version: XlPivotTableVersionList;
    readonly PivotColumnAxis: PivotAxis;
    readonly PivotRowAxis: PivotAxis;
    ShowDrillIndicators: boolean;
    DisplayContextTooltips: boolean;
    ClearTable(): void;
    CompactRowIndent: int4;
    LayoutRowDefault: XlLayoutRowType;
    DisplayFieldCaptions: boolean;
    RowAxisLayout(RowLayout: XlLayoutRowType): void;
    SubtotalLocation(Location: XlSubtototalLocationType): void;
    readonly ActiveFilters: PivotFilters;
    InGridDropZones: boolean;
    ClearAllFilters(): void;
    TableStyle2: any;
    ShowTableStyleLastColumn: boolean;
    ShowTableStyleRowStripes: boolean;
    ShowTableStyleColumnStripes: boolean;
    ShowTableStyleRowHeaders: boolean;
    ShowTableStyleColumnHeaders: boolean;
    AllowMultipleFilters: boolean;
    CompactLayoutRowHeader: string;
    CompactLayoutColumnHeader: string;
    FieldListSortAscending: boolean;
    SortUsingCustomLists: boolean;
    ChangePivotCache(PivotCache: any): void;
    Location: string;
    RepeatAllLabels(Repeat: XlPivotFieldRepeatLabels): void;
    readonly Slicers: Slicers;
    ShowValuesRow: boolean;
}

/**
 * @nativeInterfaceName ICalculatedFields 
*/
declare interface CalculatedFields {
    readonly Count: int4;
    Item(Index: any): PivotField;
    Add(Name: string, Formula: string, UseStandardFormula?: any): PivotField;
}

/**
 * @nativeInterfaceName IPivotCache 
*/
declare interface PivotCache {
    readonly Index: int4;
    SourceData: any;
    CommandText: any;
    CommandType: XlCmdType;
    readonly QueryType: XlQueryType;
    CreatePivotTable(TableDestination: any, TableName?: any, ReadData?: any, DefaultVersion?: any): PivotTable;
    readonly IsConnected: boolean;
    readonly SourceType: XlPivotTableSourceType;
    MissingItemsLimit: XlPivotTableMissingItems;
    readonly Version: XlPivotTableVersionList;
}

/**
 * @nativeInterfaceName IRanges 
*/
declare interface Ranges {
    /**
     * @get 
     */
    Item(Index: any): Range;
    readonly Count: int4;
}

/**
 * @nativeInterfaceName IPivotFormulas 
*/
declare interface PivotFormulas {
    readonly Count: int4;
    Item(Index: any): PivotFormula;
    Add(Formula: string, UseStandardFormula?: any): PivotFormula;
}

/**
 * @nativeInterfaceName IPivotFormula 
*/
declare interface PivotFormula {
    Delete(): void;
    Formula: string;
    Value: string;
    Index: int4;
    StandardFormula: string;
}

/**
 * @nativeInterfaceName IPivotAxis 
*/
declare interface PivotAxis {
    readonly PivotLines: PivotLines;
}

/**
 * @nativeInterfaceName IPivotLines 
*/
declare interface PivotLines {
    /**
     * @get 
     */
    Item(Index: any): PivotLine;
    readonly Count: int4;
}

/**
 * @nativeInterfaceName IPivotLine 
*/
declare interface PivotLine {
    readonly LineType: XlPivotLineType;
    readonly Position: int4;
    readonly PivotLineCells: PivotLineCells;
    readonly PivotLineCellsFull: PivotLineCells;
}

/**
 * @nativeInterfaceName IPivotLineCells 
*/
declare interface PivotLineCells {
    /**
     * @get 
     */
    Item(Index: any): PivotCell;
    readonly Count: int4;
    readonly Full: boolean;
}

/**
 * @nativeInterfaceName IPivotCell 
*/
declare interface PivotCell {
    readonly PivotCellType: XlPivotCellType;
    readonly PivotTable: PivotTable;
    readonly DataField: PivotField;
    readonly PivotField: PivotField;
    readonly PivotItem: PivotItem;
    readonly RowItems: PivotItemList;
    readonly ColumnItems: PivotItemList;
    readonly Range: Range;
    readonly CustomSubtotalFunction: XlConsolidationFunction;
    readonly PivotRowLine: PivotLine;
    readonly PivotColumnLine: PivotLine;
}

/**
 * @nativeInterfaceName IPivotItemList 
*/
declare interface PivotItemList {
    readonly Count: int4;
    Item(Index: any): PivotItem;
}

/**
 * @nativeInterfaceName IPivotFilters 
*/
declare interface PivotFilters {
    /**
     * @get 
     */
    Item(Index: any): PivotFilter;
    readonly Count: int4;
    Add2(Type: XlPivotFilterType, DataField?: any, Value1?: any, Value2?: any, Order?: any, Name?: any, Description?: any, MemberPropertyField?: any, WholeDayFilter?: any): PivotFilter;
}

/**
 * @nativeInterfaceName IPivotFilter 
*/
declare interface PivotFilter {
    readonly FilterType: XlPivotFilterType;
    readonly Name: string;
    readonly Description: string;
    readonly Active: boolean;
    readonly PivotField: PivotField;
    readonly DataField: PivotField;
    readonly Value1: any;
    readonly Value2: any;
    readonly IsMemberPropertyFilter: boolean;
    WholeDayFilter: boolean;
}

/**
 * @nativeInterfaceName ISlicers 
*/
declare interface Slicers {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): Slicer;
    Add(SlicerDestination: any, Level?: any, Name?: any, Caption?: any, Top?: any, Left?: any, Width?: any, Height?: any): Slicer;
}

/**
 * @nativeInterfaceName ISlicer 
*/
declare interface Slicer {
    Name: string;
    Caption: string;
    Top: double;
    Left: double;
    DisableMoveResizeUI: boolean;
    Width: double;
    Height: double;
    RowHeight: double;
    ColumnWidth: double;
    NumberOfColumns: int4;
    DisplayHeader: boolean;
    Locked: boolean;
    readonly SlicerCache: SlicerCache;
    readonly Shape: Shape;
    Style: any;
    Delete(): void;
    readonly ActiveItem: SlicerItem;
    readonly SlicerCacheType: XlSlicerCacheType;
}

/**
 * @nativeInterfaceName ISlicerCache 
*/
declare interface SlicerCache {
    readonly Index: int4;
    readonly OLAP: boolean;
    readonly SourceType: XlPivotTableSourceType;
    readonly Slicers: Slicers;
    readonly PivotTables: SlicerPivotTables;
    Name: string;
    readonly VisibleSlicerItems: SlicerItems;
    readonly SlicerItems: SlicerItems;
    CrossFilterType: XlSlicerCrossFilterType;
    SortItems: XlSlicerSort;
    readonly SourceName: string;
    SortUsingCustomLists: boolean;
    ShowAllItems: boolean;
    ClearManualFilter(): void;
    Delete(): void;
    ClearAllFilters(): void;
    readonly SlicerCacheType: XlSlicerCacheType;
    readonly FilterCleared: boolean;
    readonly List: boolean;
    ClearDateFilter(): void;
}

/**
 * @nativeInterfaceName ISlicerPivotTables 
*/
declare interface SlicerPivotTables {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): PivotTable;
    AddPivotTable(PivotTable: PivotTable): void;
    RemovePivotTable(PivotTable: any): void;
}

/**
 * @nativeInterfaceName ISlicerItems 
*/
declare interface SlicerItems {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): SlicerItem;
}

/**
 * @nativeInterfaceName ISlicerItem 
*/
declare interface SlicerItem {
    readonly Parent: SlicerCache;
    readonly Caption: string;
    readonly Name: string;
    readonly SourceName: any;
    readonly SourceNameStandard: string;
    readonly Value: string;
    Selected: boolean;
    readonly HasData: boolean;
}

/**
 * @nativeInterfaceName IListObject 
*/
declare interface ListObject {
    Delete(): void;
    Resize(Range: Range): void;
    readonly Active: boolean;
    readonly DataBodyRange: Range;
    readonly DisplayRightToLeft: boolean;
    readonly HeaderRowRange: Range;
    readonly InsertRowRange: Range;
    readonly ListColumns: ListColumns;
    readonly ListRows: ListRows;
    Name: string;
    readonly Range: Range;
    ShowAutoFilter: boolean;
    ShowTotals: boolean;
    readonly SourceType: XlListObjectSourceType;
    readonly TotalsRowRange: Range;
    DisplayName: string;
    ShowHeaders: boolean;
    readonly AutoFilter: AutoFilter;
    TableStyle: any;
    ShowTableStyleFirstColumn: boolean;
    ShowTableStyleLastColumn: boolean;
    ShowTableStyleRowStripes: boolean;
    ShowTableStyleColumnStripes: boolean;
    readonly Sort: Sort;
    Comment: string;
    ShowAutoFilterDropDown: boolean;
}

/**
 * @nativeInterfaceName IListColumns 
*/
declare interface ListColumns {
    Add(Position?: any): ListColumn;
    /**
     * @get 
     */
    Item(Index: any): ListColumn;
    readonly Count: int4;
}

/**
 * @nativeInterfaceName IListColumn 
*/
declare interface ListColumn {
    Delete(): void;
    readonly Index: int4;
    Name: string;
    readonly Range: Range;
    TotalsCalculation: XlTotalsCalculation;
    readonly DataBodyRange: Range;
    readonly Total: Range;
}

/**
 * @nativeInterfaceName IListRows 
*/
declare interface ListRows {
    /**
     * @get 
     */
    Item(Index: any): ListRow;
    readonly Count: int4;
    Add(Position?: any, AlwaysInsert?: any): ListRow;
}

/**
 * @nativeInterfaceName IListRow 
*/
declare interface ListRow {
    Delete(): void;
    readonly Index: int4;
    readonly Range: Range;
}

/**
 * @nativeInterfaceName ISort 
*/
declare interface Sort {
    readonly Rng: Range;
    Header: XlYesNoGuess;
    MatchCase: boolean;
    Orientation: XlSortOrientation;
    SortMethod: XlSortMethod;
    readonly SortFields: SortFields;
    SetRange(Rng: Range): void;
    Apply(): void;
}

/**
 * @nativeInterfaceName ISortFields 
*/
declare interface SortFields {
    Add(Key: Range, SortOn?: any, Order?: any, CustomOrder?: any, DataOption?: any): SortField;
    /**
     * @get 
     */
    Item(Index: any): SortField;
    readonly Count: int4;
    Clear(): void;
}

/**
 * @nativeInterfaceName ISortField 
*/
declare interface SortField {
    SortOn: XlSortOn;
    readonly SortOnValue: IDispatch;
    readonly Key: Range;
    Order: XlSortOrder;
    CustomOrder: any;
    DataOption: XlSortDataOption;
    Priority: int4;
    Delete(): void;
    ModifyKey(Key: Range): void;
    SetIcon(Icon: Icon): void;
}

/**
 * @nativeInterfaceName IIcon 
*/
declare interface Icon {
    readonly Parent: IconSet;
    readonly Index: int4;
}

/**
 * @nativeInterfaceName IIconSet 
*/
declare interface IconSet {
    readonly ID: XlIconSet;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): Icon;
}

/**
 * @nativeInterfaceName IAutoFilter 
*/
declare interface AutoFilter {
    readonly Range: Range;
    readonly Filters: Filters;
    readonly FilterMode: boolean;
    readonly Sort: Sort;
    ApplyFilter(): void;
    ShowAllData(): void;
}

/**
 * @nativeInterfaceName IFilters 
*/
declare interface Filters {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: int4): Filter;
}

/**
 * @nativeInterfaceName IFilter 
*/
declare interface Filter {
    readonly On: boolean;
    readonly Criteria1: any;
    readonly Criteria2: any;
    Operator: XlAutoFilterOperator;
    readonly Count: int4;
}

/**
 * @nativeInterfaceName IValidation 
*/
declare interface Validation {
    Add(Type: XlDVType, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;
    readonly AlertStyle: int4;
    IgnoreBlank: boolean;
    IMEMode: int4;
    InCellDropdown: boolean;
    Delete(): void;
    ErrorMessage: string;
    ErrorTitle: string;
    InputMessage: string;
    InputTitle: string;
    readonly Formula1: string;
    readonly Formula2: string;
    Modify(Type?: any, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;
    readonly Operator: int4;
    ShowError: boolean;
    ShowInput: boolean;
    readonly Type: int4;
    readonly Value: boolean;
}

declare interface Worksheet {
    /**
     * @needLCID  
     */
    Activate(): void;
    /**
     * @needLCID  
     */
    Copy(Before?: any, After?: any): void;
    /**
     * @needLCID  
     */
    Delete(): void;
    readonly CodeName: string;
    /**
     * @needLCID  
     */
    readonly Index: int4;
    /**
     * @needLCID  
     */
    Move(Before?: any, After?: any): void;
    Name: string;
    readonly Next: IDispatch;
    readonly Previous: IDispatch;
    /**
     * @needLCID  
     */
    readonly ProtectContents: boolean;
    /**
     * @needLCID  
     */
    readonly ProtectDrawingObjects: boolean;
    /**
     * @needLCID  
     */
    readonly ProtectionMode: boolean;
    /**
     * @needLCID  
     */
    readonly ProtectScenarios: boolean;
    /**
     * @needLCID  
     */
    Select(Replace?: any): void;
    /**
     * @needLCID  
     */
    Unprotect(Password?: any): void;
    /**
     * @needLCID  
     */
    Visible: XlSheetVisibility;
    readonly Shapes: Shapes;
    /**
     * @needLCID  
     */
    TransitionExpEval: boolean;
    /**
     * @needLCID  
     */
    AutoFilterMode: boolean;
    /**
     * @needLCID  
     */
    Calculate(): void;
    EnableCalculation: boolean;
    readonly Cells: Range;
    /**
     * @needLCID  
     */
    ChartObjects(Index?: any): IDispatch;
    /**
     * @needLCID  
     */
    readonly CircularReference: Range;
    /**
     * @needLCID  
     */
    ClearArrows(): void;
    readonly Columns: Range;
    /**
     * @needLCID  
     */
    readonly ConsolidationFunction: XlConsolidationFunction;
    /**
     * @needLCID  
     */
    readonly ConsolidationOptions: any;
    /**
     * @needLCID  
     */
    readonly ConsolidationSources: any;
    /**
     * @needLCID  
     */
    EnableAutoFilter: boolean;
    EnableSelection: XlEnableSelection;
    /**
     * @needLCID  
     */
    EnableOutlining: boolean;
    /**
     * @needLCID  
     */
    EnablePivotTable: boolean;
    /**
     * @needLCID  
     */
    Evaluate(Name: any): any;
    /**
     * @needLCID  
     */
    readonly FilterMode: boolean;
    readonly Names: Names;
    readonly Outline: Outline;
    /**
     * @needLCID  
     */
    Paste(Destination?: any, Link?: any): void;
    /**
     * @needLCID  
     */
    PivotTables(Index?: any): IDispatch;
    /**
     * @needLCID  
     */
    PivotTableWizard(SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any, AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any): PivotTable;
    /**
     * @get 
     */
    Range(Cell1: any, Cell2?: any): Range;
    readonly Rows: Range;
    /**
     * @needLCID  
     */
    Scenarios(Index?: any): IDispatch;
    ScrollArea: string;
    /**
     * @needLCID  
     */
    ShowAllData(): void;
    /**
     * @needLCID  
     */
    readonly StandardHeight: double;
    /**
     * @needLCID  
     */
    StandardWidth: double;
    /**
     * @needLCID  
     */
    TransitionFormEntry: boolean;
    /**
     * @needLCID  
     */
    readonly Type: XlSheetType;
    /**
     * @needLCID  
     */
    readonly UsedRange: Range;
    readonly Comments: Comments;
    readonly Hyperlinks: Hyperlinks;
    ClearCircles(): void;
    CircleInvalid(): void;
    readonly AutoFilter: AutoFilter;
    /**
     * @needLCID  
     */
    DisplayRightToLeft: boolean;
    readonly Tab: Tab;
    readonly CustomProperties: CustomProperties;
    readonly Protection: Protection;
    /**
     * @needLCID  
     */
    PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any): void;
    Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any, AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any, AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;
    readonly ListObjects: ListObjects;
    EnableFormatConditionsCalculation: boolean;
    readonly Sort: Sort;
}

/**
 * @nativeInterfaceName IShapes 
*/
declare interface Shapes {
    readonly Count: int4;
    Item(Index: any): Shape;
    AddConnector(Type: Kso.MsoConnectorType, BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
    AddLabel(Orientation: Kso.MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
    AddLine(BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
    AddPolyline(SafeArrayOfPoints: any): Shape;
    AddShape(Type: Kso.MsoAutoShapeType, Left: float, Top: float, Width: float, Height: float): Shape;
    AddTextEffect(PresetTextEffect: Kso.MsoPresetTextEffect, Text: string, FontName: string, FontSize: float, FontBold: Kso.MsoTriState, FontItalic: Kso.MsoTriState, Left: float, Top: float): Shape;
    AddTextbox(Orientation: Kso.MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
    BuildFreeform(EditingType: Kso.MsoEditingType, X1: float, Y1: float): FreeformBuilder;
    /**
     * @get 
     */
    Range(Index: any): ShapeRange;
    SelectAll(): void;
    AddChart2(Style?: any, XlChartType?: any, Left?: any, Top?: any, Width?: any, Height?: any, NewLayout?: any): Shape;
}

/**
 * @nativeInterfaceName IFreeformBuilder 
*/
declare interface FreeformBuilder {
    AddNodes(SegmentType: Kso.MsoSegmentType, EditingType: Kso.MsoEditingType, X1: float, Y1: float, X2?: any, Y2?: any, X3?: any, Y3?: any): void;
    ConvertToShape(): Shape;
}

/**
 * @nativeInterfaceName IShapeRange 
*/
declare interface ShapeRange {
    readonly Count: int4;
    Item(Index: any): Shape;
    Align(AlignCmd: Kso.MsoAlignCmd, RelativeTo: Kso.MsoTriState): void;
    Apply(): void;
    Delete(): void;
    Distribute(DistributeCmd: Kso.MsoDistributeCmd, RelativeTo: Kso.MsoTriState): void;
    Duplicate(): ShapeRange;
    Flip(FlipCmd: Kso.MsoFlipCmd): void;
    IncrementLeft(Increment: float): void;
    IncrementRotation(Increment: float): void;
    IncrementTop(Increment: float): void;
    Group(): Shape;
    PickUp(): void;
    ScaleHeight(Factor: float, RelativeToOriginalSize: Kso.MsoTriState, Scale?: any): void;
    ScaleWidth(Factor: float, RelativeToOriginalSize: Kso.MsoTriState, Scale?: any): void;
    Select(Replace?: any): void;
    SetShapesDefaultProperties(): void;
    Ungroup(): ShapeRange;
    ZOrder(ZOrderCmd: Kso.MsoZOrderCmd): void;
    readonly Adjustments: Adjustments;
    readonly TextFrame: TextFrame;
    AutoShapeType: Kso.MsoAutoShapeType;
    readonly ConnectionSiteCount: int4;
    readonly Connector: Kso.MsoTriState;
    readonly ConnectorFormat: ConnectorFormat;
    readonly Fill: FillFormat;
    readonly GroupItems: GroupShapes;
    Height: float;
    readonly HorizontalFlip: Kso.MsoTriState;
    Left: float;
    readonly Line: LineFormat;
    LockAspectRatio: Kso.MsoTriState;
    Name: string;
    Rotation: float;
    readonly PictureFormat: PictureFormat;
    readonly Shadow: ShadowFormat;
    readonly TextEffect: TextEffectFormat;
    readonly ThreeD: ThreeDFormat;
    Top: float;
    readonly Type: Kso.MsoShapeType;
    readonly VerticalFlip: Kso.MsoTriState;
    Visible: Kso.MsoTriState;
    Width: float;
    readonly ZOrderPosition: int4;
    AlternativeText: string;
    readonly Child: Kso.MsoTriState;
    readonly ID: int4;
    readonly Chart: Chart;
    readonly HasChart: Kso.MsoTriState;
    readonly TextFrame2: TextFrame2;
    ShapeStyle: Kso.MsoShapeStyleIndex;
    readonly SoftEdge: Kso.SoftEdgeFormat;
    readonly Glow: Kso.GlowFormat;
    readonly Reflection: Kso.ReflectionFormat;
    Title: string;
}

/**
 * @nativeInterfaceName ITextFrame 
*/
declare interface TextFrame {
    MarginBottom: float;
    MarginLeft: float;
    MarginRight: float;
    MarginTop: float;
    Orientation: Kso.MsoTextOrientation;
    Characters(Start?: any, Length?: any): Characters;
    HorizontalAlignment: Kso.XlHAlign;
    VerticalAlignment: Kso.XlVAlign;
    AutoSize: boolean;
    ReadingOrder: int4;
    AutoMargins: boolean;
    VerticalOverflow: XlOartVerticalOverflow;
    HorizontalOverflow: XlOartHorizontalOverflow;
}

/**
 * @nativeInterfaceName IConnectorFormat 
*/
declare interface ConnectorFormat {
    BeginConnect(ConnectedShape: Shape, ConnectionSite: int4): void;
    BeginDisconnect(): void;
    EndConnect(ConnectedShape: Shape, ConnectionSite: int4): void;
    EndDisconnect(): void;
    readonly BeginConnected: Kso.MsoTriState;
    readonly BeginConnectedShape: Shape;
    readonly BeginConnectionSite: int4;
    readonly EndConnected: Kso.MsoTriState;
    readonly EndConnectedShape: Shape;
    readonly EndConnectionSite: int4;
    Type: Kso.MsoConnectorType;
}

/**
 * @nativeInterfaceName IGroupShapes 
*/
declare interface GroupShapes {
    readonly Count: int4;
    Item(Index: any): Shape;
    /**
     * @get 
     */
    Range(Index: any): ShapeRange;
}

declare interface Chart {
    /**
     * @needLCID  
     */
    Copy(Before?: any, After?: any): void;
    /**
     * @needLCID  
     */
    Delete(): void;
    readonly CodeName: string;
    /**
     * @needLCID  
     */
    readonly Index: int4;
    Name: string;
    readonly Next: IDispatch;
    readonly Previous: IDispatch;
    /**
     * @needLCID  
     */
    readonly ProtectContents: boolean;
    /**
     * @needLCID  
     */
    readonly ProtectDrawingObjects: boolean;
    /**
     * @needLCID  
     */
    readonly ProtectionMode: boolean;
    /**
     * @needLCID  
     */
    Select(Replace?: any): void;
    /**
     * @needLCID  
     */
    Unprotect(Password?: any): void;
    /**
     * @needLCID  
     */
    Visible: XlSheetVisibility;
    readonly Shapes: Shapes;
    /**
     * @needLCID  
     */
    AutoScaling: boolean;
    /**
     * @needLCID  
     */
    Axes(Type?: any, AxisGroup?: Default<Kso.XlAxisGroup, 1>): IDispatch;
    /**
     * @needLCID  
     */
    readonly ChartArea: ChartArea;
    /**
     * @needLCID  
     */
    ChartGroups(Index?: any): IDispatch;
    /**
     * @needLCID  
     */
    ChartObjects(Index?: any): IDispatch;
    /**
     * @needLCID  
     */
    readonly ChartTitle: ChartTitle;
    /**
     * @needLCID  
     */
    ChartWizard(Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any, ValueTitle?: any, ExtraTitle?: any): void;
    readonly DataTable: DataTable;
    /**
     * @needLCID  
     */
    DepthPercent: int4;
    /**
     * @needLCID  
     */
    DisplayBlanksAs: Kso.XlDisplayBlanksAs;
    /**
     * @needLCID  
     */
    Evaluate(Name: any): any;
    /**
     * @needLCID  
     * @put 
     */
    HasAxis(Index1?: any, Index2?: any, RHS?: any): void;
    /**
     * @needLCID  
     * @get 
     */
    HasAxis(Index1?: any, Index2?: any): any;
    HasDataTable: boolean;
    /**
     * @needLCID  
     */
    HasLegend: boolean;
    /**
     * @needLCID  
     */
    HasTitle: boolean;
    readonly Hyperlinks: Hyperlinks;
    /**
     * @needLCID  
     */
    readonly Legend: Legend;
    Location(Where: XlChartLocation, Name?: any): Chart;
    /**
     * @needLCID  
     */
    Paste(Type?: any): void;
    /**
     * @needLCID  
     */
    readonly PlotArea: PlotArea;
    /**
     * @needLCID  
     */
    PlotVisibleOnly: boolean;
    /**
     * @needLCID  
     */
    SeriesCollection(Index?: any): IDispatch;
    ChartType: Kso.XlChartType;
    PlotBy: Kso.XlRowCol;
    SetSourceData(Source: Range, PlotBy?: any): void;
    readonly PivotLayout: PivotLayout;
    readonly Tab: Tab;
    /**
     * @needLCID  
     */
    ApplyDataLabels(Type?: Default<Kso.XlDataLabelsType, 2>, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
    Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
    ApplyLayout(Layout: int4, ChartType?: any): void;
    SetElement(Element: Kso.MsoChartElementType): void;
    ShowDataLabelsOverMaximum: boolean;
    ApplyChartTemplate(Filename: string): void;
    ChartStyle: any;
    ClearToMatchStyle(): void;
    ShowReportFilterFieldButtons: boolean;
    ShowLegendFieldButtons: boolean;
    ShowAxisFieldButtons: boolean;
    ShowValueFieldButtons: boolean;
    ShowAllFieldButtons: boolean;
    /**
     * @needLCID  
     */
    FullSeriesCollection(Index?: any): IDispatch;
    ChartColor: any;
    ClearToMatchColorStyle(): void;
}

/**
 * @nativeInterfaceName IChartGroup 
*/
declare interface ChartGroup {
    AxisGroup: Kso.XlAxisGroup;
    DoughnutHoleSize: int4;
    readonly DownBars: DownBars;
    readonly DropLines: DropLines;
    FirstSliceAngle: int4;
    GapWidth: int4;
    HasDropLines: boolean;
    HasHiLoLines: boolean;
    HasRadarAxisLabels: boolean;
    HasSeriesLines: boolean;
    HasUpDownBars: boolean;
    readonly HiLoLines: HiLoLines;
    readonly Index: int4;
    Overlap: int4;
    readonly RadarAxisLabels: TickLabels;
    SeriesCollection(Index?: any): IDispatch;
    readonly SeriesLines: SeriesLines;
    readonly UpBars: UpBars;
    VaryByCategories: boolean;
    SizeRepresents: Kso.XlSizeRepresents;
    BubbleScale: int4;
    ShowNegativeBubbles: boolean;
    SplitType: Kso.XlChartSplitType;
    SplitValue: any;
    SecondPlotSize: int4;
    /**
     * @needLCID  
     */
    FullCategoryCollection(Index?: any): IDispatch;
    /**
     * @needLCID  
     */
    CategoryCollection(Index?: any): IDispatch;
}

/**
 * @nativeInterfaceName IDownBars 
*/
declare interface DownBars {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IChartFormat 
*/
declare interface ChartFormat {
    readonly Fill: FillFormat;
    readonly Glow: Kso.GlowFormat;
    readonly Line: LineFormat;
    readonly PictureFormat: PictureFormat;
    readonly Shadow: ShadowFormat;
    readonly SoftEdge: Kso.SoftEdgeFormat;
    readonly TextFrame2: TextFrame2;
    readonly ThreeD: ThreeDFormat;
    AutoShapeType: Kso.MsoAutoShapeType;
}

declare interface TextFrame2 extends Kso._IMsoDispObj {
    /**
     * @returnParam MarginBottom 
     */
    MarginBottom: float;
    /**
     * @returnParam MarginLeft 
     */
    MarginLeft: float;
    /**
     * @returnParam MarginRight 
     */
    MarginRight: float;
    /**
     * @returnParam MarginTop 
     */
    MarginTop: float;
    /**
     * @returnParam Orientation 
     */
    Orientation: Kso.MsoTextOrientation;
    /**
     * @returnParam HorizontalAnchor 
     */
    HorizontalAnchor: Kso.MsoHorizontalAnchor;
    /**
     * @returnParam VerticalAnchor 
     */
    VerticalAnchor: Kso.MsoVerticalAnchor;
    /**
     * @returnParam WarpFormat 
     */
    WarpFormat: Kso.MsoWarpFormat;
    /**
     * @returnParam WordArtformat 
     */
    WordArtformat: Kso.MsoPresetTextEffect;
    /**
     * @returnParam WordWrap 
     */
    WordWrap: Kso.MsoTriState;
    /**
     * @returnParam AutoSize 
     */
    AutoSize: Kso.MsoAutoSize;
    /**
     * @returnParam ThreeD 
     */
    readonly ThreeD: ThreeDFormat;
    /**
     * @returnParam pHasText 
     */
    readonly HasText: Kso.MsoTriState;
    /**
     * @returnParam Range 
     */
    readonly TextRange: Kso.TextRange2;
    /**
     * @returnParam Ruler 
     */
    readonly Ruler: Kso.Ruler2;
    DeleteText(): void;
    /**
     * @returnParam NoTextRotation 
     */
    NoTextRotation: Kso.MsoTriState;
}

/**
 * @nativeInterfaceName IDropLines 
*/
declare interface DropLines {
    readonly Name: string;
    Select(): any;
    readonly Border: Border;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IHiLoLines 
*/
declare interface HiLoLines {
    readonly Name: string;
    Select(): any;
    readonly Border: Border;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ITickLabels 
*/
declare interface TickLabels {
    Delete(): any;
    readonly Font: Font;
    readonly Name: string;
    NumberFormat: string;
    NumberFormatLinked: boolean;
    NumberFormatLocal: any;
    Orientation: Kso.XlTickLabelOrientation;
    Select(): any;
    readonly Depth: int4;
    Offset: int4;
    MultiLevel: boolean;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ISeriesLines 
*/
declare interface SeriesLines {
    readonly Name: string;
    Select(): any;
    readonly Border: Border;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IUpBars 
*/
declare interface UpBars {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IChartArea 
*/
declare interface ChartArea {
    readonly Name: string;
    Select(): any;
    Clear(): any;
    Shadow: boolean;
    ClearFormats(): any;
    Height: double;
    Left: double;
    Top: double;
    Width: double;
    readonly Format: ChartFormat;
    RoundedCorners: boolean;
}

/**
 * @nativeInterfaceName IChartTitle 
*/
declare interface ChartTitle {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    Caption: string;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    Left: double;
    Orientation: any;
    Shadow: boolean;
    Text: string;
    Top: double;
    IncludeInLayout: boolean;
    Position: Kso.XlChartElementPosition;
    readonly Format: ChartFormat;
    readonly Height: double;
    readonly Width: double;
    Formula: string;
    FormulaR1C1: string;
    FormulaLocal: string;
    FormulaR1C1Local: string;
}

/**
 * @nativeInterfaceName IDataTable 
*/
declare interface DataTable {
    ShowLegendKey: boolean;
    HasBorderHorizontal: boolean;
    HasBorderVertical: boolean;
    HasBorderOutline: boolean;
    readonly Border: Border;
    readonly Font: Font;
    Select(): void;
    Delete(): void;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IFloor 
*/
declare interface Floor {
    readonly Name: string;
    Select(): any;
    ClearFormats(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IHyperlinks 
*/
declare interface Hyperlinks {
    Add(Anchor: IDispatch, Address: string, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any): IDispatch;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): Hyperlink;
    Delete(): void;
}

/**
 * @nativeInterfaceName IHyperlink 
*/
declare interface Hyperlink {
    readonly Name: string;
    readonly Range: Range;
    readonly Shape: Shape;
    SubAddress: string;
    Address: string;
    readonly Type: int4;
    Delete(): void;
    EmailSubject: string;
    ScreenTip: string;
    TextToDisplay: string;
}

/**
 * @nativeInterfaceName ILegend 
*/
declare interface Legend {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    LegendEntries(Index?: any): IDispatch;
    Position: Kso.XlLegendPosition;
    Shadow: boolean;
    Clear(): any;
    Height: double;
    Left: double;
    Top: double;
    Width: double;
    IncludeInLayout: boolean;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IPlotArea 
*/
declare interface PlotArea {
    readonly Name: string;
    Select(): any;
    ClearFormats(): any;
    Height: double;
    Left: double;
    Top: double;
    Width: double;
    InsideLeft: double;
    InsideTop: double;
    InsideWidth: double;
    InsideHeight: double;
    Position: Kso.XlChartElementPosition;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IWalls 
*/
declare interface Walls {
    readonly Name: string;
    Select(): any;
    ClearFormats(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IPivotLayout 
*/
declare interface PivotLayout {
    readonly PivotTable: PivotTable;
}

/**
 * @nativeInterfaceName ITab 
*/
declare interface Tab {
    Color: any;
    ColorIndex: Kso.XlColorIndex;
    ThemeColor: XlThemeColor;
    TintAndShade: any;
}

/**
 * @nativeInterfaceName INames 
*/
declare interface Names {
    Add(Name?: any, RefersTo?: any, Visible?: any, MacroType?: any, ShortcutKey?: any, Category?: any, NameLocal?: any, RefersToLocal?: any, CategoryLocal?: any, RefersToR1C1?: any, RefersToR1C1Local?: any): Name;
    /**
     * @needLCID  
     */
    Item(Index?: any, IndexLocal?: any, RefersTo?: any): Name;
    readonly Count: int4;
}

/**
 * @nativeInterfaceName IName 
*/
declare interface Name {
    readonly Index: int4;
    /**
     * @needLCID  
     */
    Category: string;
    CategoryLocal: string;
    Delete(): void;
    /**
     * @needLCID  
     */
    Name: string;
    /**
     * @needLCID  
     */
    RefersTo: any;
    Value: string;
    Visible: boolean;
    NameLocal: string;
    RefersToLocal: any;
    /**
     * @needLCID  
     */
    RefersToR1C1: any;
    RefersToR1C1Local: any;
    readonly RefersToRange: Range;
    Comment: string;
    WorkbookParameter: boolean;
}

/**
 * @nativeInterfaceName IOutline 
*/
declare interface Outline {
    AutomaticStyles: boolean;
    ShowLevels(RowLevels?: any, ColumnLevels?: any): any;
    SummaryColumn: XlSummaryColumn;
    SummaryRow: XlSummaryRow;
}

/**
 * @nativeInterfaceName IComments 
*/
declare interface Comments {
    readonly Count: int4;
    Item(Index: int4): Comment;
}

/**
 * @nativeInterfaceName IComment 
*/
declare interface Comment {
    readonly Author: string;
    readonly Shape: Shape;
    Visible: boolean;
    Text(Text?: any, Start?: any, Overwrite?: any): string;
    Delete(): void;
    Next(): Comment;
    Previous(): Comment;
}

/**
 * @nativeInterfaceName ICustomProperties 
*/
declare interface CustomProperties {
    Add(Name: string, Value: any): CustomProperty;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): CustomProperty;
}

/**
 * @nativeInterfaceName ICustomProperty 
*/
declare interface CustomProperty {
    Name: string;
    Value: any;
    Delete(): void;
}

/**
 * @nativeInterfaceName IProtection 
*/
declare interface Protection {
    readonly AllowFormattingCells: boolean;
    readonly AllowFormattingColumns: boolean;
    readonly AllowFormattingRows: boolean;
    readonly AllowInsertingColumns: boolean;
    readonly AllowInsertingRows: boolean;
    readonly AllowInsertingHyperlinks: boolean;
    readonly AllowDeletingColumns: boolean;
    readonly AllowDeletingRows: boolean;
    readonly AllowSorting: boolean;
    readonly AllowFiltering: boolean;
    readonly AllowUsingPivotTables: boolean;
    readonly AllowEditRanges: AllowEditRanges;
}

/**
 * @nativeInterfaceName IAllowEditRanges 
*/
declare interface AllowEditRanges {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): AllowEditRange;
    Add(Title: string, Range: Range, Password?: any): AllowEditRange;
}

/**
 * @nativeInterfaceName IAllowEditRange 
*/
declare interface AllowEditRange {
    Title: string;
    /**
     * @putref 
     */
    Range: Range;
    ChangePassword(Password: string): void;
    Delete(): void;
    Unprotect(Password?: any): void;
}

/**
 * @nativeInterfaceName IUserAccessList 
*/
declare interface UserAccessList {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): UserAccess;
    Add(Name: string, AllowEdit: boolean): UserAccess;
    DeleteAll(): void;
}

/**
 * @nativeInterfaceName IUserAccess 
*/
declare interface UserAccess {
    readonly Name: string;
    AllowEdit: boolean;
    Delete(): void;
}

/**
 * @nativeInterfaceName IListObjects 
*/
declare interface ListObjects {
    /**
     * @get 
     */
    Item(Index: any): ListObject;
    readonly Count: int4;
    Add(SourceType?: Default<XlListObjectSourceType, 1>, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: Default<XlYesNoGuess, 0>, Destination?: any, TableStyleName?: any): ListObject;
}

/**
 * @nativeInterfaceName IFormatConditions 
*/
declare interface FormatConditions {
    readonly Count: int4;
    Item(Index: any): IDispatch;
    Add(Type: XlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any, String?: any, TextOperator?: any, DateOperator?: any, ScopeType?: any): IDispatch;
    Delete(): void;
    AddColorScale(ColorScaleType: int4): IDispatch;
    AddDatabar(): IDispatch;
    AddIconSetCondition(): IDispatch;
    AddTop10(): IDispatch;
    AddAboveAverage(): IDispatch;
    AddUniqueValues(): IDispatch;
}

/**
 * @nativeInterfaceName IErrors 
*/
declare interface Errors {
    /**
     * @get 
     */
    Item(Index: any): Error;
}

/**
 * @nativeInterfaceName IError 
*/
declare interface Error {
    readonly Value: boolean;
    Ignore: boolean;
}

/**
 * @nativeInterfaceName ISparklineGroups 
*/
declare interface SparklineGroups {
    Add(Type: XlSparkType, SourceData: string): SparklineGroup;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): SparklineGroup;
    Clear(): void;
    ClearGroups(): void;
    Group(Location: Range): void;
    Ungroup(): void;
}

/**
 * @nativeInterfaceName ISparklineGroup 
*/
declare interface SparklineGroup {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): Sparkline;
    /**
     * @putref 
     */
    Location: Range;
    SourceData: string;
    DateRange: string;
    ModifyLocation(Location: Range): void;
    ModifySourceData(SourceData: string): void;
    Modify(Location: Range, SourceData: string): void;
    ModifyDateRange(DateRange: string): void;
    Delete(): void;
    Type: XlSparkType;
    readonly SeriesColor: FormatColor;
    readonly Points: SparkPoints;
    readonly Axes: SparkAxes;
    DisplayBlanksAs: Kso.XlDisplayBlanksAs;
    DisplayHidden: boolean;
    LineWeight: any;
    PlotBy: XlSparklineRowCol;
}

/**
 * @nativeInterfaceName ISparkline 
*/
declare interface Sparkline {
    /**
     * @putref 
     */
    Location: Range;
    SourceData: string;
    ModifyLocation(Range: Range): void;
    ModifySourceData(Formula: string): void;
}

/**
 * @nativeInterfaceName IFormatColor 
*/
declare interface FormatColor {
    Color: any;
    ColorIndex: Kso.XlColorIndex;
    ThemeColor: any;
    TintAndShade: any;
}

/**
 * @nativeInterfaceName ISparkPoints 
*/
declare interface SparkPoints {
    readonly Negative: SparkColor;
    readonly Markers: SparkColor;
    readonly Highpoint: SparkColor;
    readonly Lowpoint: SparkColor;
    readonly Firstpoint: SparkColor;
    readonly Lastpoint: SparkColor;
}

/**
 * @nativeInterfaceName ISparkColor 
*/
declare interface SparkColor {
    Visible: boolean;
    readonly Color: FormatColor;
}

/**
 * @nativeInterfaceName ISparkAxes 
*/
declare interface SparkAxes {
    readonly Horizontal: SparkHorizontalAxis;
}

/**
 * @nativeInterfaceName ISparkHorizontalAxis 
*/
declare interface SparkHorizontalAxis {
    readonly Axis: SparkColor;
    readonly IsDateAxis: boolean;
    RightToLeftPlotOrder: boolean;
}

/**
 * @nativeInterfaceName IDisplayFormat 
*/
declare interface DisplayFormat {
    readonly Borders: Borders;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    readonly Font: Font;
    readonly Style: any;
    readonly AddIndent: any;
    readonly FormulaHidden: any;
    readonly HorizontalAlignment: any;
    readonly IndentLevel: any;
    readonly Interior: Interior;
    readonly Locked: any;
    readonly MergeCells: any;
    /**
     * @needLCID  
     */
    readonly NumberFormat: any;
    readonly NumberFormatLocal: any;
    readonly Orientation: any;
    readonly ReadingOrder: int4;
    readonly ShrinkToFit: any;
    readonly VerticalAlignment: any;
    readonly WrapText: any;
}

declare interface Sheets {
    /**
     * @needLCID  
     */
    Add(Before?: any, After?: any, Count?: any, Type?: any): IDispatch;
    /**
     * @needLCID  
     */
    Copy(Before?: any, After?: any): void;
    readonly Count: int4;
    /**
     * @needLCID  
     */
    Delete(): void;
    /**
     * @needLCID  
     */
    FillAcrossSheets(Range: Range, Type?: Default<XlFillWith, -4104>): void;
    /**
     * @get 
     */
    Item(Index: any): IDispatch;
    /**
     * @needLCID  
     */
    Move(Before?: any, After?: any): void;
    /**
     * @needLCID  
     */
    Select(Replace?: any): void;
    /**
     * @needLCID  
     */
    Visible: any;
}

/**
 * @nativeInterfaceName ISheetViews 
*/
declare interface SheetViews {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): IDispatch;
}

declare interface Workbook {
    readonly Application: Application;
    readonly ActiveChart: Chart;
    readonly ActiveSheet: Worksheet;
    ChangeHistoryDuration: int4;
    readonly BuiltinDocumentProperties: IDispatch;
    /**
     * @needLCID  
     */
    ChangeLink(Name: string, NewName: string, Type?: Default<XlLinkType, 1>): void;
    readonly Charts: Sheets;
    /**
     * @needLCID  
     */
    readonly CreateBackup: boolean;
    readonly CustomDocumentProperties: IDispatch;
    /**
     * @needLCID  
     */
    Date1904: boolean;
    /**
     * @needLCID  
     */
    DeleteNumberFormat(NumberFormat: string): void;
    /**
     * @needLCID  
     */
    readonly FileFormat: XlFileFormat;
    IsAddin: boolean;
    /**
     * @needLCID  
     */
    LinkInfo(Name: string, LinkInfo: XlLinkInfo, Type?: any, EditionRef?: any): any;
    /**
     * @needLCID  
     */
    LinkSources(Type?: any): any;
    /**
     * @needLCID  
     */
    readonly MultiUserEditing: boolean;
    readonly Name: string;
    readonly Names: Names;
    PivotCaches(): PivotCaches;
    readonly ProtectStructure: boolean;
    readonly ProtectWindows: boolean;
    /**
     * @needLCID  
     */
    readonly ReadOnly: boolean;
    /**
     * @needLCID  
     */
    readonly RevisionNumber: int4;
    /**
     * @needLCID  
     */
    Save(): void;
    readonly Sheets: Sheets;
    readonly Styles: Styles;
    /**
     * @needLCID  
     */
    Unprotect(Password?: any): void;
    UnprotectSharing(SharingPassword?: any): void;
    /**
     * @needLCID  
     */
    UpdateLink(Name?: any, Type?: any): void;
    /**
     * @needLCID  
     */
    readonly UserStatus: any;
    readonly Worksheets: Sheets;
    /**
     * @needLCID  
     */
    readonly WriteReserved: boolean;
    /**
     * @needLCID  
     */
    readonly WriteReservedBy: string;
    readonly IsInplace: boolean;
    readonly CalculationVersion: int4;
    UpdateLinks: XlUpdateLinks;
    ReadOnlyRecommended: boolean;
    Protect(Password?: any, Structure?: any, Windows?: any): void;
    readonly TableStyles: TableStyles;
    DefaultTableStyle: any;
    DefaultPivotTableStyle: any;
    CheckCompatibility: boolean;
    readonly HasVBProject: boolean;
    Final: boolean;
    ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;
    readonly IconSets: IconSets;
    ForceFullCalculation: boolean;
    ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any, FileFormat?: any): void;
    readonly SlicerCaches: SlicerCaches;
    readonly ActiveSlicer: Slicer;
    DefaultSlicerStyle: any;
}

/**
 * @nativeInterfaceName IPivotCaches 
*/
declare interface PivotCaches {
    readonly Count: int4;
    Item(Index: any): PivotCache;
    Create(SourceType: XlPivotTableSourceType, SourceData?: any, Version?: any): PivotCache;
}

/**
 * @nativeInterfaceName IStyles 
*/
declare interface Styles {
    Add(Name: string, BasedOn?: any): Style;
    readonly Count: int4;
    /**
     * @needLCID  
     * @get 
     */
    Item(Index: any): Style;
    Merge(Workbook: any): any;
}

/**
 * @nativeInterfaceName IStyle 
*/
declare interface Style {
    AddIndent: boolean;
    readonly Borders: Borders;
    Delete(): any;
    readonly Font: Font;
    FormulaHidden: boolean;
    HorizontalAlignment: Kso.XlHAlign;
    IncludeAlignment: boolean;
    IncludeBorder: boolean;
    IncludeFont: boolean;
    IncludeNumber: boolean;
    IncludePatterns: boolean;
    IncludeProtection: boolean;
    IndentLevel: int4;
    readonly Interior: Interior;
    Locked: boolean;
    MergeCells: any;
    /**
     * @needLCID  
     */
    readonly Name: string;
    NumberFormat: string;
    NumberFormatLocal: string;
    Orientation: XlOrientation;
    ShrinkToFit: boolean;
    /**
     * @needLCID  
     */
    readonly Value: string;
    VerticalAlignment: Kso.XlVAlign;
    WrapText: boolean;
    ReadingOrder: int4;
}

/**
 * @nativeInterfaceName ITableStyles 
*/
declare interface TableStyles {
    readonly Count: int4;
    Add(TableStyleName: string): TableStyle;
    Item(Index: any): TableStyle;
}

/**
 * @nativeInterfaceName ITableStyle 
*/
declare interface TableStyle {
    readonly Name: string;
    readonly NameLocal: string;
    readonly BuiltIn: boolean;
    readonly TableStyleElements: TableStyleElements;
    ShowAsAvailableTableStyle: boolean;
    ShowAsAvailablePivotTableStyle: boolean;
    Delete(): void;
    Duplicate(NewTableStyleName?: any): TableStyle;
    ShowAsAvailableSlicerStyle: boolean;
    ShowAsAvailableTimelineStyle: boolean;
}

/**
 * @nativeInterfaceName ITableStyleElements 
*/
declare interface TableStyleElements {
    readonly Count: int4;
    Item(Index: XlTableStyleElementType): TableStyleElement;
}

/**
 * @nativeInterfaceName ITableStyleElement 
*/
declare interface TableStyleElement {
    readonly HasFormat: boolean;
    readonly Interior: Interior;
    readonly Borders: Borders;
    readonly Font: Font;
    StripeSize: int4;
    Clear(): void;
}

/**
 * @nativeInterfaceName IIconSets 
*/
declare interface IconSets {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName ISlicerCaches 
*/
declare interface SlicerCaches {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): SlicerCache;
    Add2(Source: any, SourceField: any, Name?: any, SlicerCacheType?: any): SlicerCache;
}

declare interface Workbooks {
    /**
     * @needLCID  
     */
    Add(Template?: any): Workbook;
    /**
     * @needLCID  
     */
    Close(): void;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): Workbook;
}

/**
 * @nativeInterfaceName IWorksheetFunction 
*/
declare interface WorksheetFunction {
    Count(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    IsNA(Arg1: any): boolean;
    IsError(Arg1: any): boolean;
    Sum(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Average(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Min(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Max(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Npv(Arg1: double, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    StDev(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Dollar(Arg1: double, Arg2?: any): string;
    Fixed(Arg1: double, Arg2?: any, Arg3?: any): string;
    Pi(): double;
    Ln(Arg1: double): double;
    Log10(Arg1: double): double;
    Round(Arg1: double, Arg2: double): double;
    Lookup(Arg1: any, Arg2: any, Arg3?: any): any;
    Index(Arg1: any, Arg2: double, Arg3?: any, Arg4?: any): any;
    Rept(Arg1: string, Arg2: double): string;
    And(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
    Or(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
    DCount(Arg1: Range, Arg2: any, Arg3: any): double;
    DSum(Arg1: Range, Arg2: any, Arg3: any): double;
    DAverage(Arg1: Range, Arg2: any, Arg3: any): double;
    DMin(Arg1: Range, Arg2: any, Arg3: any): double;
    DMax(Arg1: Range, Arg2: any, Arg3: any): double;
    DStDev(Arg1: Range, Arg2: any, Arg3: any): double;
    Var(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    DVar(Arg1: Range, Arg2: any, Arg3: any): double;
    Text(Arg1: any, Arg2: string): string;
    LinEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
    Trend(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
    LogEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
    Growth(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
    Pv(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    Fv(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    NPer(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    Pmt(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    Rate(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any, Arg6?: any): double;
    MIrr(Arg1: any, Arg2: double, Arg3: double): double;
    Irr(Arg1: any, Arg2?: any): double;
    Match(Arg1: any, Arg2: any, Arg3?: any): double;
    Weekday(Arg1: any, Arg2?: any): double;
    Search(Arg1: string, Arg2: string, Arg3?: any): double;
    Transpose(Arg1: any): any;
    Atan2(Arg1: double, Arg2: double): double;
    Asin(Arg1: double): double;
    Acos(Arg1: double): double;
    Choose(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
    HLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
    VLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
    Log(Arg1: double, Arg2?: any): double;
    Proper(Arg1: string): string;
    Trim(Arg1: string): string;
    Replace(Arg1: string, Arg2: double, Arg3: double, Arg4: string): string;
    Substitute(Arg1: string, Arg2: string, Arg3: string, Arg4?: any): string;
    Find(Arg1: string, Arg2: string, Arg3?: any): double;
    IsErr(Arg1: any): boolean;
    IsText(Arg1: any): boolean;
    IsNumber(Arg1: any): boolean;
    Sln(Arg1: double, Arg2: double, Arg3: double): double;
    Syd(Arg1: double, Arg2: double, Arg3: double, Arg4: double): double;
    Ddb(Arg1: double, Arg2: double, Arg3: double, Arg4: double, Arg5?: any): double;
    Clean(Arg1: string): string;
    MDeterm(Arg1: any): double;
    MInverse(Arg1: any): any;
    MMult(Arg1: any, Arg2: any): any;
    Ipmt(Arg1: double, Arg2: double, Arg3: double, Arg4: double, Arg5?: any, Arg6?: any): double;
    Ppmt(Arg1: double, Arg2: double, Arg3: double, Arg4: double, Arg5?: any, Arg6?: any): double;
    CountA(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Product(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Fact(Arg1: double): double;
    DProduct(Arg1: Range, Arg2: any, Arg3: any): double;
    IsNonText(Arg1: any): boolean;
    StDevP(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    VarP(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    DStDevP(Arg1: Range, Arg2: any, Arg3: any): double;
    DVarP(Arg1: Range, Arg2: any, Arg3: any): double;
    IsLogical(Arg1: any): boolean;
    DCountA(Arg1: Range, Arg2: any, Arg3: any): double;
    USDollar(Arg1: double, Arg2: double): string;
    FindB(Arg1: string, Arg2: string, Arg3?: any): double;
    SearchB(Arg1: string, Arg2: string, Arg3?: any): double;
    ReplaceB(Arg1: string, Arg2: double, Arg3: double, Arg4: string): string;
    RoundUp(Arg1: double, Arg2: double): double;
    RoundDown(Arg1: double, Arg2: double): double;
    Rank(Arg1: double, Arg2: Range, Arg3?: any): double;
    Days360(Arg1: any, Arg2: any, Arg3?: any): double;
    Vdb(Arg1: double, Arg2: double, Arg3: double, Arg4: double, Arg5: double, Arg6?: any, Arg7?: any): double;
    Median(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    SumProduct(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Sinh(Arg1: double): double;
    Cosh(Arg1: double): double;
    Tanh(Arg1: double): double;
    Asinh(Arg1: double): double;
    Acosh(Arg1: double): double;
    Atanh(Arg1: double): double;
    DGet(Arg1: Range, Arg2: any, Arg3: any): any;
    Db(Arg1: double, Arg2: double, Arg3: double, Arg4: double, Arg5?: any): double;
    Frequency(Arg1: any, Arg2: any): any;
    AveDev(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    BetaDist(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    GammaLn(Arg1: double): double;
    BetaInv(Arg1: double, Arg2: double, Arg3: double, Arg4?: any, Arg5?: any): double;
    BinomDist(Arg1: double, Arg2: double, Arg3: double, Arg4: boolean): double;
    ChiDist(Arg1: double, Arg2: double): double;
    ChiInv(Arg1: double, Arg2: double): double;
    Combin(Arg1: double, Arg2: double): double;
    Confidence(Arg1: double, Arg2: double, Arg3: double): double;
    CritBinom(Arg1: double, Arg2: double, Arg3: double): double;
    Even(Arg1: double): double;
    ExponDist(Arg1: double, Arg2: double, Arg3: boolean): double;
    FDist(Arg1: double, Arg2: double, Arg3: double): double;
    FInv(Arg1: double, Arg2: double, Arg3: double): double;
    Fisher(Arg1: double): double;
    FisherInv(Arg1: double): double;
    Floor(Arg1: double, Arg2: double): double;
    GammaDist(Arg1: double, Arg2: double, Arg3: double, Arg4: boolean): double;
    GammaInv(Arg1: double, Arg2: double, Arg3: double): double;
    Ceiling(Arg1: double, Arg2: double): double;
    HypGeomDist(Arg1: double, Arg2: double, Arg3: double, Arg4: double): double;
    LogNormDist(Arg1: double, Arg2: double, Arg3: double): double;
    LogInv(Arg1: double, Arg2: double, Arg3: double): double;
    NegBinomDist(Arg1: double, Arg2: double, Arg3: double): double;
    NormDist(Arg1: double, Arg2: double, Arg3: double, Arg4: boolean): double;
    NormSDist(Arg1: double): double;
    NormInv(Arg1: double, Arg2: double, Arg3: double): double;
    NormSInv(Arg1: double): double;
    Standardize(Arg1: double, Arg2: double, Arg3: double): double;
    Odd(Arg1: double): double;
    Permut(Arg1: double, Arg2: double): double;
    Poisson(Arg1: double, Arg2: double, Arg3: boolean): double;
    TDist(Arg1: double, Arg2: double, Arg3: double): double;
    Weibull(Arg1: double, Arg2: double, Arg3: double, Arg4: boolean): double;
    SumXMY2(Arg1: any, Arg2: any): double;
    SumX2MY2(Arg1: any, Arg2: any): double;
    SumX2PY2(Arg1: any, Arg2: any): double;
    ChiTest(Arg1: any, Arg2: any): double;
    Correl(Arg1: any, Arg2: any): double;
    Covar(Arg1: any, Arg2: any): double;
    Forecast(Arg1: double, Arg2: any, Arg3: any): double;
    FTest(Arg1: any, Arg2: any): double;
    Intercept(Arg1: any, Arg2: any): double;
    Pearson(Arg1: any, Arg2: any): double;
    RSq(Arg1: any, Arg2: any): double;
    StEyx(Arg1: any, Arg2: any): double;
    Slope(Arg1: any, Arg2: any): double;
    TTest(Arg1: any, Arg2: any, Arg3: double, Arg4: double): double;
    Prob(Arg1: any, Arg2: any, Arg3: double, Arg4?: any): double;
    DevSq(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    GeoMean(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    HarMean(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    SumSq(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Kurt(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Skew(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    ZTest(Arg1: any, Arg2: double, Arg3?: any): double;
    Large(Arg1: any, Arg2: double): double;
    Small(Arg1: any, Arg2: double): double;
    Quartile(Arg1: any, Arg2: double): double;
    Percentile(Arg1: any, Arg2: double): double;
    PercentRank(Arg1: any, Arg2: double, Arg3?: any): double;
    Mode(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    TrimMean(Arg1: any, Arg2: double): double;
    TInv(Arg1: double, Arg2: double): double;
    Power(Arg1: double, Arg2: double): double;
    Radians(Arg1: double): double;
    Degrees(Arg1: double): double;
    Subtotal(Arg1: double, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    SumIf(Arg1: Range, Arg2: any, Arg3?: any): double;
    CountIf(Arg1: Range, Arg2: any): double;
    CountBlank(Arg1: Range): double;
    Ispmt(Arg1: double, Arg2: double, Arg3: double, Arg4: double): double;
    Roman(Arg1: double, Arg2?: any): string;
    Asc(Arg1: string): string;
    Phonetic(Arg1: Range): string;
    RTD(progID: any, server: any, topic1: any, topic2?: any, topic3?: any, topic4?: any, topic5?: any, topic6?: any, topic7?: any, topic8?: any, topic9?: any, topic10?: any, topic11?: any, topic12?: any, topic13?: any, topic14?: any, topic15?: any, topic16?: any, topic17?: any, topic18?: any, topic19?: any, topic20?: any, topic21?: any, topic22?: any, topic23?: any, topic24?: any, topic25?: any, topic26?: any, topic27?: any, topic28?: any): any;
    Hex2Bin(Arg1: any, Arg2?: any): string;
    Hex2Dec(Arg1: any): string;
    Hex2Oct(Arg1: any, Arg2?: any): string;
    Dec2Bin(Arg1: any, Arg2?: any): string;
    Dec2Hex(Arg1: any, Arg2?: any): string;
    Dec2Oct(Arg1: any, Arg2?: any): string;
    Oct2Bin(Arg1: any, Arg2?: any): string;
    Oct2Hex(Arg1: any, Arg2?: any): string;
    Oct2Dec(Arg1: any): string;
    Bin2Dec(Arg1: any): string;
    Bin2Oct(Arg1: any, Arg2?: any): string;
    Bin2Hex(Arg1: any, Arg2?: any): string;
    ImSub(Arg1: any, Arg2: any): string;
    ImDiv(Arg1: any, Arg2: any): string;
    ImPower(Arg1: any, Arg2: any): string;
    ImAbs(Arg1: any): string;
    ImSqrt(Arg1: any): string;
    ImLn(Arg1: any): string;
    ImLog2(Arg1: any): string;
    ImLog10(Arg1: any): string;
    ImSin(Arg1: any): string;
    ImCos(Arg1: any): string;
    ImExp(Arg1: any): string;
    ImArgument(Arg1: any): string;
    ImConjugate(Arg1: any): string;
    Imaginary(Arg1: any): double;
    ImReal(Arg1: any): double;
    Complex(Arg1: any, Arg2: any, Arg3?: any): string;
    ImSum(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
    ImProduct(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
    SeriesSum(Arg1: any, Arg2: any, Arg3: any, Arg4: any): double;
    FactDouble(Arg1: any): double;
    SqrtPi(Arg1: any): double;
    Quotient(Arg1: any, Arg2: any): double;
    Delta(Arg1: any, Arg2?: any): double;
    GeStep(Arg1: any, Arg2?: any): double;
    IsEven(Arg1: any): boolean;
    IsOdd(Arg1: any): boolean;
    MRound(Arg1: any, Arg2: any): double;
    Erf(Arg1: any, Arg2?: any): double;
    ErfC(Arg1: any): double;
    BesselJ(Arg1: any, Arg2: any): double;
    BesselK(Arg1: any, Arg2: any): double;
    BesselY(Arg1: any, Arg2: any): double;
    BesselI(Arg1: any, Arg2: any): double;
    Xirr(Arg1: any, Arg2: any, Arg3?: any): double;
    Xnpv(Arg1: any, Arg2: any): double;
    Price(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): double;
    CumPrinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): double;
    CumIPmt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): double;
    EDate(Arg1: any, Arg2: any): double;
    EoMonth(Arg1: any, Arg2: any): double;
    YearFrac(Arg1: any, Arg2: any, Arg3?: any): double;
    CoupDayBs(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): double;
    CoupDaysNc(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): double;
    RandBetween(Arg1: any, Arg2: any): double;
    WeekNum(Arg1: any, Arg2?: any): double;
    AmorDegrc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): double;
    AmorLinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): double;
    Convert(Arg1: any, Arg2: any, Arg3: any): double;
    AccrInt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): double;
    AccrIntM(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): double;
    WorkDay(Arg1: any, Arg2: any, Arg3?: any): double;
    NetworkDays(Arg1: any, Arg2: any, Arg3?: any): double;
    Gcd(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    MultiNomial(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    Lcm(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    SumIfs(Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): double;
    CountIfs(Arg1: Range, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    AverageIf(Arg1: Range, Arg2: any, Arg3?: any): double;
    AverageIfs(Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): double;
    IfError(Arg1: any, Arg2: any): any;
    Aggregate(Arg1: double, Arg2: double, Arg3: Range, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    StDev_S(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): double;
    GammaLn_Precise(Arg1: double): double;
    Unichar(Arg1: double): string;
    Unicode(Arg1: string): double;
    NumberValue(Arg1: string, Arg2: string, Arg3: string): double;
}

/**
 * @nativeInterfaceName ICellFormat 
*/
declare interface CellFormat {
    /**
     * @putref 
     */
    Borders: Borders;
    /**
     * @putref 
     */
    Font: Font;
    /**
     * @putref 
     */
    Interior: Interior;
    /**
     * @needLCID  
     */
    NumberFormat: any;
    NumberFormatLocal: any;
    IndentLevel: any;
    HorizontalAlignment: any;
    VerticalAlignment: any;
    Orientation: any;
    ShrinkToFit: any;
    WrapText: any;
    Locked: any;
    FormulaHidden: any;
    MergeCells: any;
    Clear(): void;
}

/**
 * @nativeInterfaceName ISpellingOptions 
*/
declare interface SpellingOptions {
    IgnoreCaps: boolean;
    IgnoreMixedDigits: boolean;
}

/**
 * @nativeInterfaceName IControlFormat 
*/
declare interface ControlFormat {
    AddItem(Text: string, Index?: any): void;
    RemoveAllItems(): void;
    RemoveItem(Index: int4, Count?: any): void;
    DropDownLines: int4;
    Enabled: boolean;
    LargeChange: int4;
    LinkedCell: string;
    List(Index?: any): any;
    ListCount: int4;
    ListFillRange: string;
    ListIndex: int4;
    LockedText: boolean;
    Max: int4;
    Min: int4;
    MultiSelect: int4;
    SmallChange: int4;
    Value: int4;
}

/**
 * @nativeInterfaceName ICharts 
*/
declare interface Charts {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName IPivotTables 
*/
declare interface PivotTables {
    readonly Count: int4;
    Item(Index: any): PivotTable;
    Add(PivotCache: PivotCache, TableDestination: any, TableName?: any, ReadData?: any, DefaultVersion?: any): PivotTable;
}

/**
 * @nativeInterfaceName IPivotItems 
*/
declare interface PivotItems {
    readonly Count: int4;
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName IWorksheets 
*/
declare interface Worksheets {
    /**
     * @needLCID  
     */
    Add(Before?: any, After?: any, Count?: any, Type?: any): IDispatch;
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName IChartObject 
*/
declare interface ChartObject {
    readonly BottomRightCell: Range;
    BringToFront(): any;
    Delete(): any;
    Height: double;
    readonly Index: int4;
    Left: double;
    Locked: boolean;
    Name: string;
    Placement: any;
    Select(Replace?: any): any;
    SendToBack(): any;
    Top: double;
    readonly TopLeftCell: Range;
    Visible: boolean;
    Width: double;
    readonly ZOrder: int4;
    readonly ShapeRange: ShapeRange;
    readonly Chart: Chart;
    RoundedCorners: boolean;
    Shadow: boolean;
}

/**
 * @nativeInterfaceName IChartObjects 
*/
declare interface ChartObjects {
    Cut(): any;
    Delete(): any;
    Height: double;
    Left: double;
    Locked: boolean;
    Placement: any;
    Select(Replace?: any): any;
    Top: double;
    Visible: boolean;
    Width: double;
    readonly ShapeRange: ShapeRange;
    Add(Left: double, Top: double, Width: double, Height: double): ChartObject;
    readonly Count: int4;
    Item(Index: any): IDispatch;
}

/**
 * @nativeInterfaceName IFormatCondition 
*/
declare interface FormatCondition {
    readonly Type: int4;
    readonly Operator: int4;
    readonly Formula1: string;
    readonly Formula2: string;
    readonly Interior: Interior;
    readonly Borders: Borders;
    readonly Font: Font;
    Delete(): void;
    Modify(Type: XlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any, String?: any, Operator2?: any): void;
    Text: string;
    TextOperator: XlContainsOperator;
    DateOperator: XlTimePeriods;
    NumberFormat: any;
    Priority: int4;
    StopIfTrue: boolean;
    readonly AppliesTo: Range;
    ModifyAppliesToRange(Range: Range): void;
    SetFirstPriority(): void;
    SetLastPriority(): void;
}

/**
 * @nativeInterfaceName IAxis 
*/
declare interface Axis {
    AxisBetweenCategories: boolean;
    readonly AxisGroup: Kso.XlAxisGroup;
    readonly AxisTitle: AxisTitle;
    readonly Border: Border;
    CategoryNames: any;
    Crosses: Kso.XlAxisCrosses;
    CrossesAt: double;
    Delete(): any;
    HasMajorGridlines: boolean;
    HasMinorGridlines: boolean;
    HasTitle: boolean;
    readonly MajorGridlines: Gridlines;
    MajorTickMark: Kso.XlTickMark;
    MajorUnit: double;
    MajorUnitIsAuto: boolean;
    MaximumScale: double;
    MaximumScaleIsAuto: boolean;
    MinimumScale: double;
    MinimumScaleIsAuto: boolean;
    readonly MinorGridlines: Gridlines;
    MinorTickMark: Kso.XlTickMark;
    MinorUnit: double;
    MinorUnitIsAuto: boolean;
    ReversePlotOrder: boolean;
    ScaleType: Kso.XlScaleType;
    Select(): any;
    TickLabelPosition: Kso.XlTickLabelPosition;
    readonly TickLabels: TickLabels;
    TickLabelSpacing: int4;
    TickMarkSpacing: int4;
    BaseUnit: Kso.XlTimeUnit;
    BaseUnitIsAuto: boolean;
    MajorUnitScale: Kso.XlTimeUnit;
    MinorUnitScale: Kso.XlTimeUnit;
    CategoryType: Kso.XlCategoryType;
    readonly Left: double;
    readonly Top: double;
    readonly Width: double;
    readonly Height: double;
    DisplayUnit: Kso.XlDisplayUnit;
    DisplayUnitCustom: double;
    HasDisplayUnitLabel: boolean;
    readonly DisplayUnitLabel: DisplayUnitLabel;
    LogBase: double;
    TickLabelSpacingIsAuto: boolean;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IAxisTitle 
*/
declare interface AxisTitle {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    Caption: string;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    HorizontalAlignment: any;
    Left: double;
    Orientation: any;
    Shadow: boolean;
    Text: string;
    Top: double;
    VerticalAlignment: any;
    ReadingOrder: int4;
    readonly Format: ChartFormat;
    readonly Height: double;
    readonly Width: double;
    Formula: string;
    FormulaR1C1: string;
    FormulaLocal: string;
    FormulaR1C1Local: string;
}

/**
 * @nativeInterfaceName IGridlines 
*/
declare interface Gridlines {
    readonly Name: string;
    Select(): any;
    readonly Border: Border;
    Delete(): any;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IDisplayUnitLabel 
*/
declare interface DisplayUnitLabel {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    Caption: string;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    Left: double;
    Orientation: any;
    Shadow: boolean;
    Text: string;
    Top: double;
    Position: Kso.XlChartElementPosition;
    readonly Format: ChartFormat;
    readonly Height: double;
    readonly Width: double;
    Formula: string;
    FormulaR1C1: string;
    FormulaLocal: string;
    FormulaR1C1Local: string;
}

/**
 * @nativeInterfaceName IChartGroups 
*/
declare interface ChartGroups {
    readonly Count: int4;
    Item(Index: any): ChartGroup;
}

/**
 * @nativeInterfaceName IAxes 
*/
declare interface Axes {
    readonly Count: int4;
    Item(Type: Kso.XlAxisType, AxisGroup?: Default<Kso.XlAxisGroup, 1>): Axis;
}

/**
 * @nativeInterfaceName IPoints 
*/
declare interface Points {
    readonly Count: int4;
    Item(Index: int4): Point;
}

/**
 * @nativeInterfaceName IPoint 
*/
declare interface Point {
    ClearFormats(): any;
    readonly DataLabel: DataLabel;
    Delete(): any;
    Explosion: int4;
    HasDataLabel: boolean;
    InvertIfNegative: boolean;
    MarkerBackgroundColor: int4;
    MarkerBackgroundColorIndex: Kso.XlColorIndex;
    MarkerForegroundColor: int4;
    MarkerForegroundColorIndex: Kso.XlColorIndex;
    MarkerSize: int4;
    MarkerStyle: Kso.XlMarkerStyle;
    PictureType: Kso.XlChartPictureType;
    Select(): any;
    ApplyPictToSides: boolean;
    ApplyPictToFront: boolean;
    ApplyPictToEnd: boolean;
    Shadow: boolean;
    SecondaryPlot: boolean;
    ApplyDataLabels(Type?: Default<Kso.XlDataLabelsType, 2>, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): any;
    Has3DEffect: boolean;
    PictureUnit2: double;
    readonly Format: ChartFormat;
    readonly Height: double;
    readonly Width: double;
    readonly Top: double;
    readonly Left: double;
    readonly Name: string;
}

/**
 * @nativeInterfaceName IDataLabel 
*/
declare interface DataLabel {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    Caption: string;
    /**
     * @get 
     */
    Characters(Start?: any, Length?: any): Characters;
    Left: double;
    Orientation: any;
    Shadow: boolean;
    Text: string;
    Top: double;
    AutoText: boolean;
    NumberFormat: string;
    NumberFormatLinked: boolean;
    NumberFormatLocal: any;
    ShowLegendKey: boolean;
    Position: Kso.XlDataLabelPosition;
    ShowSeriesName: boolean;
    ShowCategoryName: boolean;
    ShowValue: boolean;
    ShowPercentage: boolean;
    ShowBubbleSize: boolean;
    Separator: any;
    readonly Format: ChartFormat;
    Formula: string;
    FormulaR1C1: string;
    FormulaLocal: string;
    FormulaR1C1Local: string;
    ShowRange: boolean;
    Height: double;
    Width: double;
}

/**
 * @nativeInterfaceName ISeries 
*/
declare interface Series {
    AxisGroup: Kso.XlAxisGroup;
    ClearFormats(): any;
    DataLabels(Index?: any): IDispatch;
    Delete(): any;
    ErrorBar(Direction: Kso.XlErrorBarDirection, Include: Kso.XlErrorBarInclude, Type: Kso.XlErrorBarType, Amount?: any, MinusValues?: any): any;
    readonly ErrorBars: ErrorBars;
    Explosion: int4;
    Formula: string;
    FormulaLocal: string;
    FormulaR1C1: string;
    FormulaR1C1Local: string;
    HasDataLabels: boolean;
    HasErrorBars: boolean;
    InvertIfNegative: boolean;
    MarkerBackgroundColor: int4;
    MarkerBackgroundColorIndex: Kso.XlColorIndex;
    MarkerForegroundColor: int4;
    MarkerForegroundColorIndex: Kso.XlColorIndex;
    MarkerSize: int4;
    MarkerStyle: Kso.XlMarkerStyle;
    Name: string;
    PictureType: Kso.XlChartPictureType;
    PlotOrder: int4;
    Points(Index?: any): IDispatch;
    Select(): any;
    Smooth: boolean;
    Trendlines(Index?: any): IDispatch;
    ChartType: Kso.XlChartType;
    Values: any;
    XValues: any;
    BubbleSizes: any;
    ApplyPictToSides: boolean;
    ApplyPictToFront: boolean;
    ApplyPictToEnd: boolean;
    Has3DEffect: boolean;
    Shadow: boolean;
    HasLeaderLines: boolean;
    readonly LeaderLines: LeaderLines;
    ApplyDataLabels(Type?: Default<Kso.XlDataLabelsType, 2>, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): any;
    PictureUnit2: double;
    readonly Format: ChartFormat;
    InvertColor: int4;
    IsFiltered: boolean;
}

/**
 * @nativeInterfaceName IErrorBars 
*/
declare interface ErrorBars {
    readonly Name: string;
    Select(): any;
    readonly Border: Border;
    Delete(): any;
    ClearFormats(): any;
    EndStyle: Kso.XlEndStyleCap;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ILeaderLines 
*/
declare interface LeaderLines {
    readonly Border: Border;
    Delete(): void;
    Select(): void;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ISeriesCollection 
*/
declare interface SeriesCollection {
    readonly Count: int4;
    Item(Index: any): Series;
    NewSeries(): Series;
}

/**
 * @nativeInterfaceName IDataLabels 
*/
declare interface DataLabels {
    readonly Name: string;
    Select(): any;
    Delete(): any;
    Orientation: any;
    Shadow: boolean;
    AutoText: boolean;
    NumberFormat: string;
    NumberFormatLinked: boolean;
    NumberFormatLocal: any;
    ShowLegendKey: boolean;
    Position: Kso.XlDataLabelPosition;
    ShowSeriesName: boolean;
    ShowCategoryName: boolean;
    ShowValue: boolean;
    ShowPercentage: boolean;
    ShowBubbleSize: boolean;
    Separator: any;
    readonly Count: int4;
    Item(Index: any): DataLabel;
    readonly Format: ChartFormat;
    Propagate(Index: any): void;
    ShowRange: boolean;
}

/**
 * @nativeInterfaceName ILegendEntry 
*/
declare interface LegendEntry {
    Delete(): any;
    readonly Font: Font;
    readonly LegendKey: LegendKey;
    Select(): any;
    readonly Left: double;
    readonly Top: double;
    readonly Width: double;
    readonly Height: double;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ILegendKey 
*/
declare interface LegendKey {
    ClearFormats(): any;
    readonly Left: double;
    readonly Top: double;
    readonly Width: double;
    readonly Height: double;
    Shadow: boolean;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName ILegendEntries 
*/
declare interface LegendEntries {
    readonly Count: int4;
    Item(Index: any): LegendEntry;
}

/**
 * @nativeInterfaceName ITrendlines 
*/
declare interface Trendlines {
    Add(Type?: Default<Kso.XlTrendlineType, -4132>, Order?: any, Period?: any, Forward?: any, Backward?: any, Intercept?: any, DisplayEquation?: any, DisplayRSquared?: any, Name?: any): Trendline;
    readonly Count: int4;
    Item(Index?: any): Trendline;
}

/**
 * @nativeInterfaceName ITrendline 
*/
declare interface Trendline {
    readonly Border: Border;
    ClearFormats(): any;
    readonly DataLabel: DataLabel;
    Delete(): any;
    DisplayEquation: boolean;
    DisplayRSquared: boolean;
    readonly Index: int4;
    Intercept: double;
    InterceptIsAuto: boolean;
    Name: string;
    NameIsAuto: boolean;
    Order: int4;
    Period: int4;
    Select(): any;
    Type: Kso.XlTrendlineType;
    Backward2: double;
    Forward2: double;
    readonly Format: ChartFormat;
}

/**
 * @nativeInterfaceName IConditionValue 
*/
declare interface ConditionValue {
    Modify(newtype: XlConditionValueTypes, newvalue?: any): void;
    readonly Type: XlConditionValueTypes;
    readonly Value: any;
}

/**
 * @nativeInterfaceName IColorScale 
*/
declare interface ColorScale {
    Priority: int4;
    readonly StopIfTrue: boolean;
    readonly AppliesTo: Range;
    readonly Type: int4;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ModifyAppliesToRange(Range: Range): void;
    readonly ColorScaleCriteria: ColorScaleCriteria;
}

/**
 * @nativeInterfaceName IColorScaleCriteria 
*/
declare interface ColorScaleCriteria {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): ColorScaleCriterion;
}

/**
 * @nativeInterfaceName IColorScaleCriterion 
*/
declare interface ColorScaleCriterion {
    readonly Index: int4;
    Type: XlConditionValueTypes;
    Value: any;
    readonly FormatColor: FormatColor;
}

/**
 * @nativeInterfaceName IDatabar 
*/
declare interface Databar {
    Priority: int4;
    readonly StopIfTrue: boolean;
    readonly AppliesTo: Range;
    readonly MinPoint: ConditionValue;
    readonly MaxPoint: ConditionValue;
    PercentMin: int4;
    PercentMax: int4;
    readonly BarColor: IDispatch;
    ShowValue: boolean;
    readonly Type: int4;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ModifyAppliesToRange(Range: Range): void;
    Direction: int4;
    BarFillType: XlDataBarFillType;
    AxisPosition: XlDataBarAxisPosition;
    readonly AxisColor: IDispatch;
    readonly BarBorder: DataBarBorder;
    readonly NegativeBarFormat: NegativeBarFormat;
}

/**
 * @nativeInterfaceName IDataBarBorder 
*/
declare interface DataBarBorder {
    Type: XlDataBarBorderType;
    readonly Color: IDispatch;
}

/**
 * @nativeInterfaceName INegativeBarFormat 
*/
declare interface NegativeBarFormat {
    ColorType: XlDataBarNegativeColorType;
    BorderColorType: XlDataBarNegativeColorType;
    readonly Color: IDispatch;
    readonly BorderColor: IDispatch;
}

/**
 * @nativeInterfaceName IIconSetCondition 
*/
declare interface IconSetCondition {
    Priority: int4;
    readonly StopIfTrue: boolean;
    readonly AppliesTo: Range;
    readonly Type: int4;
    ModifyAppliesToRange(Range: Range): void;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ReverseOrder: boolean;
    PercentileValues: boolean;
    ShowIconOnly: boolean;
    IconSet: any;
    readonly IconCriteria: IconCriteria;
}

/**
 * @nativeInterfaceName IIconCriteria 
*/
declare interface IconCriteria {
    readonly Count: int4;
    /**
     * @get 
     */
    Item(Index: any): IconCriterion;
}

/**
 * @nativeInterfaceName IIconCriterion 
*/
declare interface IconCriterion {
    readonly Index: int4;
    Type: XlConditionValueTypes;
    Value: any;
    Operator: int4;
    Icon: XlIcon;
}

/**
 * @nativeInterfaceName ITop10 
*/
declare interface Top10 {
    Priority: int4;
    StopIfTrue: boolean;
    readonly AppliesTo: Range;
    TopBottom: XlTopBottom;
    Rank: int4;
    Percent: boolean;
    readonly Interior: Interior;
    readonly Borders: Borders;
    readonly Font: Font;
    readonly Type: int4;
    NumberFormat: any;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ModifyAppliesToRange(Range: Range): void;
}

/**
 * @nativeInterfaceName IAboveAverage 
*/
declare interface AboveAverage {
    Priority: int4;
    StopIfTrue: boolean;
    readonly AppliesTo: Range;
    AboveBelow: XlAboveBelow;
    readonly Interior: Interior;
    readonly Borders: Borders;
    readonly Font: Font;
    readonly Type: int4;
    NumberFormat: any;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ModifyAppliesToRange(Range: Range): void;
    NumStdDev: int4;
}

/**
 * @nativeInterfaceName IUniqueValues 
*/
declare interface UniqueValues {
    Priority: int4;
    StopIfTrue: boolean;
    readonly AppliesTo: Range;
    DupeUnique: XlDupeUnique;
    readonly Interior: Interior;
    readonly Borders: Borders;
    readonly Font: Font;
    readonly Type: int4;
    NumberFormat: any;
    SetFirstPriority(): void;
    SetLastPriority(): void;
    Delete(): void;
    ModifyAppliesToRange(Range: Range): void;
}

/**
 * @nativeInterfaceName IColorStop 
*/
declare interface ColorStop {
    Delete(): void;
    Color: any;
    ThemeColor: int4;
    TintAndShade: any;
    Position: double;
}

/**
 * @nativeInterfaceName IColorStops 
*/
declare interface ColorStops {
    readonly Count: int4;
    Add(Position: double): ColorStop;
    Item(Index: any): ColorStop;
    Clear(): void;
}

/**
 * @nativeInterfaceName ILinearGradient 
*/
declare interface LinearGradient {
    readonly ColorStops: ColorStops;
    Degree: double;
}

/**
 * @nativeInterfaceName IRectangularGradient 
*/
declare interface RectangularGradient {
    readonly ColorStops: ColorStops;
    RectangleTop: double;
    RectangleBottom: double;
    RectangleLeft: double;
    RectangleRight: double;
}

/**
 * @nativeInterfaceName IFullSeriesCollection 
*/
declare interface FullSeriesCollection {
    readonly Count: int4;
    Item(Index: any): Series;
}

/**
 * @nativeInterfaceName IChartCategory 
*/
declare interface ChartCategory {
    IsFiltered: boolean;
}

/**
 * @nativeInterfaceName ICategoryCollection 
*/
declare interface CategoryCollection {
    readonly Count: int4;
    Item(Index: any): ChartCategory;
}

type byte = number;
type ubyte = number;
type short = number;
type ushort = number;
type int = number;
type uint = number;
type int4 = number;
type uint4 = number;
type long = number;
type ulong = number;
type float = number;
type double = number;

type MsoRGBType = number;

declare type IUnknown = Object;
type IDispatch = Object;
type IPictureDisp = Object;

//鍙傛暟榛樿鍊肩被鍨嬶紝寮ヨˉd.ts鏃犳硶澹版槑鍙傛暟榛樿鍊奸棶棰?type Default<T, D> = T extends undefined ? D : T;


/// <reference path="base.d.ts" />

declare namespace Kso {
	enum MsoLineDashStyle {
		msoLineDashStyleMixed = -2,
		msoLineSolid = 1,
		msoLineSquareDot = 2,
		msoLineRoundDot = 3,
		msoLineDash = 4,
		msoLineDashDot = 5,
		msoLineDashDotDot = 6,
		msoLineLongDash = 7,
		msoLineLongDashDot = 8,
		msoLineLongDashDotDot = 9,
		msoLineSysDash = 10,
		msoLineSysDot = 11,
		msoLineSysDashDot = 12,
	}

	enum MsoLineStyle {
		msoLineStyleMixed = -2,
		msoLineSingle = 1,
		msoLineThinThin = 2,
		msoLineThinThick = 3,
		msoLineThickThin = 4,
		msoLineThickBetweenThin = 5,
	}

	enum MsoArrowheadStyle {
		msoArrowheadStyleMixed = -2,
		msoArrowheadNone = 1,
		msoArrowheadTriangle = 2,
		msoArrowheadOpen = 3,
		msoArrowheadStealth = 4,
		msoArrowheadDiamond = 5,
		msoArrowheadOval = 6,
	}

	enum MsoArrowheadWidth {
		msoArrowheadWidthMixed = -2,
		msoArrowheadNarrow = 1,
		msoArrowheadWidthMedium = 2,
		msoArrowheadWide = 3,
	}

	enum MsoArrowheadLength {
		msoArrowheadLengthMixed = -2,
		msoArrowheadShort = 1,
		msoArrowheadLengthMedium = 2,
		msoArrowheadLong = 3,
	}

	enum MsoFillType {
		msoFillMixed = -2,
		msoFillSolid = 1,
		msoFillPatterned = 2,
		msoFillGradient = 3,
		msoFillTextured = 4,
		msoFillBackground = 5,
		msoFillPicture = 6,
	}

	enum MsoGradientStyle {
		msoGradientMixed = -2,
		msoGradientHorizontal = 1,
		msoGradientVertical = 2,
		msoGradientDiagonalUp = 3,
		msoGradientDiagonalDown = 4,
		msoGradientFromCorner = 5,
		msoGradientFromTitle = 6,
		msoGradientFromCenter = 7,
	}

	enum MsoGradientColorType {
		msoGradientColorMixed = -2,
		msoGradientOneColor = 1,
		msoGradientTwoColors = 2,
		msoGradientPresetColors = 3,
		msoGradientMultiColor = 4,
	}

	enum MsoTextureType {
		msoTextureTypeMixed = -2,
		msoTexturePreset = 1,
		msoTextureUserDefined = 2,
	}

	enum MsoPresetTexture {
		msoPresetTextureMixed = -2,
		msoTexturePapyrus = 1,
		msoTextureCanvas = 2,
		msoTextureDenim = 3,
		msoTextureWovenMat = 4,
		msoTextureWaterDroplets = 5,
		msoTexturePaperBag = 6,
		msoTextureFishFossil = 7,
		msoTextureSand = 8,
		msoTextureGreenMarble = 9,
		msoTextureWhiteMarble = 10,
		msoTextureBrownMarble = 11,
		msoTextureGranite = 12,
		msoTextureNewsprint = 13,
		msoTextureRecycledPaper = 14,
		msoTextureParchment = 15,
		msoTextureStationery = 16,
		msoTextureBlueTissuePaper = 17,
		msoTexturePinkTissuePaper = 18,
		msoTexturePurpleMesh = 19,
		msoTextureBouquet = 20,
		msoTextureCork = 21,
		msoTextureWalnut = 22,
		msoTextureOak = 23,
		msoTextureMediumWood = 24,
	}

	enum MsoPatternType {
		msoPatternMixed = -2,
		msoPattern5Percent = 1,
		msoPattern10Percent = 2,
		msoPattern20Percent = 3,
		msoPattern25Percent = 4,
		msoPattern30Percent = 5,
		msoPattern40Percent = 6,
		msoPattern50Percent = 7,
		msoPattern60Percent = 8,
		msoPattern70Percent = 9,
		msoPattern75Percent = 10,
		msoPattern80Percent = 11,
		msoPattern90Percent = 12,
		msoPatternDarkHorizontal = 13,
		msoPatternDarkVertical = 14,
		msoPatternDarkDownwardDiagonal = 15,
		msoPatternDarkUpwardDiagonal = 16,
		msoPatternSmallCheckerBoard = 17,
		msoPatternTrellis = 18,
		msoPatternLightHorizontal = 19,
		msoPatternLightVertical = 20,
		msoPatternLightDownwardDiagonal = 21,
		msoPatternLightUpwardDiagonal = 22,
		msoPatternSmallGrid = 23,
		msoPatternDottedDiamond = 24,
		msoPatternWideDownwardDiagonal = 25,
		msoPatternWideUpwardDiagonal = 26,
		msoPatternDashedUpwardDiagonal = 27,
		msoPatternDashedDownwardDiagonal = 28,
		msoPatternNarrowVertical = 29,
		msoPatternNarrowHorizontal = 30,
		msoPatternDashedVertical = 31,
		msoPatternDashedHorizontal = 32,
		msoPatternLargeConfetti = 33,
		msoPatternLargeGrid = 34,
		msoPatternHorizontalBrick = 35,
		msoPatternLargeCheckerBoard = 36,
		msoPatternSmallConfetti = 37,
		msoPatternZigZag = 38,
		msoPatternSolidDiamond = 39,
		msoPatternDiagonalBrick = 40,
		msoPatternOutlinedDiamond = 41,
		msoPatternPlaid = 42,
		msoPatternSphere = 43,
		msoPatternWeave = 44,
		msoPatternDottedGrid = 45,
		msoPatternDivot = 46,
		msoPatternShingle = 47,
		msoPatternWave = 48,
		msoPatternHorizontal = 49,
		msoPatternVertical = 50,
		msoPatternCross = 51,
		msoPatternDownwardDiagonal = 52,
		msoPatternUpwardDiagonal = 53,
		msoPatternDiagonalCross = 54,
	}

	enum MsoPresetGradientType {
		msoPresetGradientMixed = -2,
		msoGradientEarlySunset = 1,
		msoGradientLateSunset = 2,
		msoGradientNightfall = 3,
		msoGradientDaybreak = 4,
		msoGradientHorizon = 5,
		msoGradientDesert = 6,
		msoGradientOcean = 7,
		msoGradientCalmWater = 8,
		msoGradientFire = 9,
		msoGradientFog = 10,
		msoGradientMoss = 11,
		msoGradientPeacock = 12,
		msoGradientWheat = 13,
		msoGradientParchment = 14,
		msoGradientMahogany = 15,
		msoGradientRainbow = 16,
		msoGradientRainbowII = 17,
		msoGradientGold = 18,
		msoGradientGoldII = 19,
		msoGradientBrass = 20,
		msoGradientChrome = 21,
		msoGradientChromeII = 22,
		msoGradientSilver = 23,
		msoGradientSapphire = 24,
	}

	enum MsoShadowType {
		msoShadowMixed = -2,
		msoShadow1 = 1,
		msoShadow2 = 2,
		msoShadow3 = 3,
		msoShadow4 = 4,
		msoShadow5 = 5,
		msoShadow6 = 6,
		msoShadow7 = 7,
		msoShadow8 = 8,
		msoShadow9 = 9,
		msoShadow10 = 10,
		msoShadow11 = 11,
		msoShadow12 = 12,
		msoShadow13 = 13,
		msoShadow14 = 14,
		msoShadow15 = 15,
		msoShadow16 = 16,
		msoShadow17 = 17,
		msoShadow18 = 18,
		msoShadow19 = 19,
		msoShadow20 = 20,
		msoShadow21 = 21,
		msoShadow22 = 22,
		msoShadow23 = 23,
		msoShadow24 = 24,
		msoShadow25 = 25,
		msoShadow26 = 26,
		msoShadow27 = 27,
		msoShadow28 = 28,
		msoShadow29 = 29,
		msoShadow30 = 30,
		msoShadow31 = 31,
		msoShadow32 = 32,
		msoShadow33 = 33,
		msoShadow34 = 34,
		msoShadow35 = 35,
		msoShadow36 = 36,
		msoShadow37 = 37,
		msoShadow38 = 38,
		msoShadow39 = 39,
		msoShadow40 = 40,
		msoShadow41 = 41,
		msoShadow42 = 42,
		msoShadow43 = 43,
	}

	enum MsoPresetTextEffect {
		msoTextEffectMixed = -2,
		msoTextEffect1 = 0,
		msoTextEffect2 = 1,
		msoTextEffect3 = 2,
		msoTextEffect4 = 3,
		msoTextEffect5 = 4,
		msoTextEffect6 = 5,
		msoTextEffect7 = 6,
		msoTextEffect8 = 7,
		msoTextEffect9 = 8,
		msoTextEffect10 = 9,
		msoTextEffect11 = 10,
		msoTextEffect12 = 11,
		msoTextEffect13 = 12,
		msoTextEffect14 = 13,
		msoTextEffect15 = 14,
		msoTextEffect16 = 15,
		msoTextEffect17 = 16,
		msoTextEffect18 = 17,
		msoTextEffect19 = 18,
		msoTextEffect20 = 19,
		msoTextEffect21 = 20,
		msoTextEffect22 = 21,
		msoTextEffect23 = 22,
		msoTextEffect24 = 23,
		msoTextEffect25 = 24,
		msoTextEffect26 = 25,
		msoTextEffect27 = 26,
		msoTextEffect28 = 27,
		msoTextEffect29 = 28,
		msoTextEffect30 = 29,
		msoTextEffect31 = 30,
		msoTextEffect32 = 31,
		msoTextEffect33 = 32,
		msoTextEffect34 = 33,
		msoTextEffect35 = 34,
		msoTextEffect36 = 35,
		msoTextEffect37 = 36,
		msoTextEffect38 = 37,
		msoTextEffect39 = 38,
		msoTextEffect40 = 39,
		msoTextEffect41 = 40,
		msoTextEffect42 = 41,
		msoTextEffect43 = 42,
		msoTextEffect44 = 43,
		msoTextEffect45 = 44,
		msoTextEffect46 = 45,
		msoTextEffect47 = 46,
		msoTextEffect48 = 47,
		msoTextEffect49 = 48,
		msoTextEffect50 = 49,
	}

	enum MsoPresetTextEffectShape {
		msoTextEffectShapeMixed = -2,
		msoTextEffectShapePlainText = 1,
		msoTextEffectShapeStop = 2,
		msoTextEffectShapeTriangleUp = 3,
		msoTextEffectShapeTriangleDown = 4,
		msoTextEffectShapeChevronUp = 5,
		msoTextEffectShapeChevronDown = 6,
		msoTextEffectShapeRingInside = 7,
		msoTextEffectShapeRingOutside = 8,
		msoTextEffectShapeArchUpCurve = 9,
		msoTextEffectShapeArchDownCurve = 10,
		msoTextEffectShapeCircleCurve = 11,
		msoTextEffectShapeButtonCurve = 12,
		msoTextEffectShapeArchUpPour = 13,
		msoTextEffectShapeArchDownPour = 14,
		msoTextEffectShapeCirclePour = 15,
		msoTextEffectShapeButtonPour = 16,
		msoTextEffectShapeCurveUp = 17,
		msoTextEffectShapeCurveDown = 18,
		msoTextEffectShapeCanUp = 19,
		msoTextEffectShapeCanDown = 20,
		msoTextEffectShapeWave1 = 21,
		msoTextEffectShapeWave2 = 22,
		msoTextEffectShapeDoubleWave1 = 23,
		msoTextEffectShapeDoubleWave2 = 24,
		msoTextEffectShapeInflate = 25,
		msoTextEffectShapeDeflate = 26,
		msoTextEffectShapeInflateBottom = 27,
		msoTextEffectShapeDeflateBottom = 28,
		msoTextEffectShapeInflateTop = 29,
		msoTextEffectShapeDeflateTop = 30,
		msoTextEffectShapeDeflateInflate = 31,
		msoTextEffectShapeDeflateInflateDeflate = 32,
		msoTextEffectShapeFadeRight = 33,
		msoTextEffectShapeFadeLeft = 34,
		msoTextEffectShapeFadeUp = 35,
		msoTextEffectShapeFadeDown = 36,
		msoTextEffectShapeSlantUp = 37,
		msoTextEffectShapeSlantDown = 38,
		msoTextEffectShapeCascadeUp = 39,
		msoTextEffectShapeCascadeDown = 40,
	}

	enum MsoTextEffectAlignment {
		msoTextEffectAlignmentMixed = -2,
		msoTextEffectAlignmentLeft = 1,
		msoTextEffectAlignmentCentered = 2,
		msoTextEffectAlignmentRight = 3,
		msoTextEffectAlignmentLetterJustify = 4,
		msoTextEffectAlignmentWordJustify = 5,
		msoTextEffectAlignmentStretchJustify = 6,
	}

	enum MsoPresetLightingDirection {
		msoPresetLightingDirectionMixed = -2,
		msoLightingTopLeft = 1,
		msoLightingTop = 2,
		msoLightingTopRight = 3,
		msoLightingLeft = 4,
		msoLightingNone = 5,
		msoLightingRight = 6,
		msoLightingBottomLeft = 7,
		msoLightingBottom = 8,
		msoLightingBottomRight = 9,
	}

	enum MsoPresetLightingSoftness {
		msoPresetLightingSoftnessMixed = -2,
		msoLightingDim = 1,
		msoLightingNormal = 2,
		msoLightingBright = 3,
	}

	enum MsoPresetMaterial {
		msoPresetMaterialMixed = -2,
		msoMaterialMatte = 1,
		msoMaterialPlastic = 2,
		msoMaterialMetal = 3,
		msoMaterialWireFrame = 4,
		msoMaterialMatte2 = 5,
		msoMaterialPlastic2 = 6,
		msoMaterialMetal2 = 7,
		msoMaterialWarmMatte = 8,
		msoMaterialTranslucentPowder = 9,
		msoMaterialPowder = 10,
		msoMaterialDarkEdge = 11,
		msoMaterialSoftEdge = 12,
		msoMaterialClear = 13,
		msoMaterialFlat = 14,
		msoMaterialSoftMetal = 15,
	}

	enum MsoPresetExtrusionDirection {
		msoPresetExtrusionDirectionMixed = -2,
		msoExtrusionBottomRight = 1,
		msoExtrusionBottom = 2,
		msoExtrusionBottomLeft = 3,
		msoExtrusionRight = 4,
		msoExtrusionNone = 5,
		msoExtrusionLeft = 6,
		msoExtrusionTopRight = 7,
		msoExtrusionTop = 8,
		msoExtrusionTopLeft = 9,
	}

	enum MsoPresetThreeDFormat {
		msoPresetThreeDFormatMixed = -2,
		msoThreeD1 = 1,
		msoThreeD2 = 2,
		msoThreeD3 = 3,
		msoThreeD4 = 4,
		msoThreeD5 = 5,
		msoThreeD6 = 6,
		msoThreeD7 = 7,
		msoThreeD8 = 8,
		msoThreeD9 = 9,
		msoThreeD10 = 10,
		msoThreeD11 = 11,
		msoThreeD12 = 12,
		msoThreeD13 = 13,
		msoThreeD14 = 14,
		msoThreeD15 = 15,
		msoThreeD16 = 16,
		msoThreeD17 = 17,
		msoThreeD18 = 18,
		msoThreeD19 = 19,
		msoThreeD20 = 20,
	}

	enum MsoExtrusionColorType {
		msoExtrusionColorTypeMixed = -2,
		msoExtrusionColorAutomatic = 1,
		msoExtrusionColorCustom = 2,
	}

	enum MsoAlignCmd {
		msoAlignLefts = 0,
		msoAlignCenters = 1,
		msoAlignRights = 2,
		msoAlignTops = 3,
		msoAlignMiddles = 4,
		msoAlignBottoms = 5,
	}

	enum MsoDistributeCmd {
		msoDistributeHorizontally = 0,
		msoDistributeVertically = 1,
	}

	enum MsoConnectorType {
		msoConnectorTypeMixed = -2,
		msoConnectorStraight = 1,
		msoConnectorElbow = 2,
		msoConnectorCurve = 3,
	}

	enum MsoHorizontalAnchor {
		msoHorizontalAnchorMixed = -2,
		msoAnchorNone = 1,
		msoAnchorCenter = 2,
	}

	enum MsoVerticalAnchor {
		msoVerticalAnchorMixed = -2,
		msoAnchorTop = 1,
		msoAnchorTopBaseline = 2,
		msoAnchorMiddle = 3,
		msoAnchorBottom = 4,
		msoAnchorBottomBaseLine = 5,
	}

	enum MsoOrientation {
		msoOrientationMixed = -2,
		msoOrientationHorizontal = 1,
		msoOrientationVertical = 2,
	}

	enum MsoZOrderCmd {
		msoBringToFront = 0,
		msoSendToBack = 1,
		msoBringForward = 2,
		msoSendBackward = 3,
		msoBringInFrontOfText = 4,
		msoSendBehindText = 5,
	}

	enum MsoSegmentType {
		msoSegmentLine = 0,
		msoSegmentCurve = 1,
	}

	enum MsoEditingType {
		msoEditingAuto = 0,
		msoEditingCorner = 1,
		msoEditingSmooth = 2,
		msoEditingSymmetric = 3,
	}

	enum MsoAutoShapeType {
		msoShapeMixed = -2,
		msoShapeRectangle = 1,
		msoShapeParallelogram = 2,
		msoShapeTrapezoid = 3,
		msoShapeDiamond = 4,
		msoShapeRoundedRectangle = 5,
		msoShapeOctagon = 6,
		msoShapeIsoscelesTriangle = 7,
		msoShapeRightTriangle = 8,
		msoShapeOval = 9,
		msoShapeHexagon = 10,
		msoShapeCross = 11,
		msoShapeRegularPentagon = 12,
		msoShapeCan = 13,
		msoShapeCube = 14,
		msoShapeBevel = 15,
		msoShapeFoldedCorner = 16,
		msoShapeSmileyFace = 17,
		msoShapeDonut = 18,
		msoShapeNoSymbol = 19,
		msoShapeBlockArc = 20,
		msoShapeHeart = 21,
		msoShapeLightningBolt = 22,
		msoShapeSun = 23,
		msoShapeMoon = 24,
		msoShapeArc = 25,
		msoShapeDoubleBracket = 26,
		msoShapeDoubleBrace = 27,
		msoShapePlaque = 28,
		msoShapeLeftBracket = 29,
		msoShapeRightBracket = 30,
		msoShapeLeftBrace = 31,
		msoShapeRightBrace = 32,
		msoShapeRightArrow = 33,
		msoShapeLeftArrow = 34,
		msoShapeUpArrow = 35,
		msoShapeDownArrow = 36,
		msoShapeLeftRightArrow = 37,
		msoShapeUpDownArrow = 38,
		msoShapeQuadArrow = 39,
		msoShapeLeftRightUpArrow = 40,
		msoShapeBentArrow = 41,
		msoShapeUTurnArrow = 42,
		msoShapeLeftUpArrow = 43,
		msoShapeBentUpArrow = 44,
		msoShapeCurvedRightArrow = 45,
		msoShapeCurvedLeftArrow = 46,
		msoShapeCurvedUpArrow = 47,
		msoShapeCurvedDownArrow = 48,
		msoShapeStripedRightArrow = 49,
		msoShapeNotchedRightArrow = 50,
		msoShapePentagon = 51,
		msoShapeChevron = 52,
		msoShapeRightArrowCallout = 53,
		msoShapeLeftArrowCallout = 54,
		msoShapeUpArrowCallout = 55,
		msoShapeDownArrowCallout = 56,
		msoShapeLeftRightArrowCallout = 57,
		msoShapeUpDownArrowCallout = 58,
		msoShapeQuadArrowCallout = 59,
		msoShapeCircularArrow = 60,
		msoShapeFlowchartProcess = 61,
		msoShapeFlowchartAlternateProcess = 62,
		msoShapeFlowchartDecision = 63,
		msoShapeFlowchartData = 64,
		msoShapeFlowchartPredefinedProcess = 65,
		msoShapeFlowchartInternalStorage = 66,
		msoShapeFlowchartDocument = 67,
		msoShapeFlowchartMultidocument = 68,
		msoShapeFlowchartTerminator = 69,
		msoShapeFlowchartPreparation = 70,
		msoShapeFlowchartManualInput = 71,
		msoShapeFlowchartManualOperation = 72,
		msoShapeFlowchartConnector = 73,
		msoShapeFlowchartOffpageConnector = 74,
		msoShapeFlowchartCard = 75,
		msoShapeFlowchartPunchedTape = 76,
		msoShapeFlowchartSummingJunction = 77,
		msoShapeFlowchartOr = 78,
		msoShapeFlowchartCollate = 79,
		msoShapeFlowchartSort = 80,
		msoShapeFlowchartExtract = 81,
		msoShapeFlowchartMerge = 82,
		msoShapeFlowchartStoredData = 83,
		msoShapeFlowchartDelay = 84,
		msoShapeFlowchartSequentialAccessStorage = 85,
		msoShapeFlowchartMagneticDisk = 86,
		msoShapeFlowchartDirectAccessStorage = 87,
		msoShapeFlowchartDisplay = 88,
		msoShapeExplosion1 = 89,
		msoShapeExplosion2 = 90,
		msoShape4pointStar = 91,
		msoShape5pointStar = 92,
		msoShape8pointStar = 93,
		msoShape16pointStar = 94,
		msoShape24pointStar = 95,
		msoShape32pointStar = 96,
		msoShapeUpRibbon = 97,
		msoShapeDownRibbon = 98,
		msoShapeCurvedUpRibbon = 99,
		msoShapeCurvedDownRibbon = 100,
		msoShapeVerticalScroll = 101,
		msoShapeHorizontalScroll = 102,
		msoShapeWave = 103,
		msoShapeDoubleWave = 104,
		msoShapeRectangularCallout = 105,
		msoShapeRoundedRectangularCallout = 106,
		msoShapeOvalCallout = 107,
		msoShapeCloudCallout = 108,
		msoShapeLineCallout1 = 109,
		msoShapeLineCallout2 = 110,
		msoShapeLineCallout3 = 111,
		msoShapeLineCallout4 = 112,
		msoShapeLineCallout1AccentBar = 113,
		msoShapeLineCallout2AccentBar = 114,
		msoShapeLineCallout3AccentBar = 115,
		msoShapeLineCallout4AccentBar = 116,
		msoShapeLineCallout1NoBorder = 117,
		msoShapeLineCallout2NoBorder = 118,
		msoShapeLineCallout3NoBorder = 119,
		msoShapeLineCallout4NoBorder = 120,
		msoShapeLineCallout1BorderandAccentBar = 121,
		msoShapeLineCallout2BorderandAccentBar = 122,
		msoShapeLineCallout3BorderandAccentBar = 123,
		msoShapeLineCallout4BorderandAccentBar = 124,
		msoShapeActionButtonCustom = 125,
		msoShapeActionButtonHome = 126,
		msoShapeActionButtonHelp = 127,
		msoShapeActionButtonInformation = 128,
		msoShapeActionButtonBackorPrevious = 129,
		msoShapeActionButtonForwardorNext = 130,
		msoShapeActionButtonBeginning = 131,
		msoShapeActionButtonEnd = 132,
		msoShapeActionButtonReturn = 133,
		msoShapeActionButtonDocument = 134,
		msoShapeActionButtonSound = 135,
		msoShapeActionButtonMovie = 136,
		msoShapeBalloon = 137,
		msoShapeNotPrimitive = 138,
		msoShapeFlowchartOfflineStorage = 139,
		msoShapeLeftRightRibbon = 140,
		msoShapeDiagonalStripe = 141,
		msoShapePie = 142,
		msoShapeNonIsoscelesTrapezoid = 143,
		msoShapeDecagon = 144,
		msoShapeHeptagon = 145,
		msoShapeDodecagon = 146,
		msoShape6pointStar = 147,
		msoShape7pointStar = 148,
		msoShape10pointStar = 149,
		msoShape12pointStar = 150,
		msoShapeRound1Rectangle = 151,
		msoShapeRound2SameRectangle = 152,
		msoShapeRound2DiagRectangle = 153,
		msoShapeSnipRoundRectangle = 154,
		msoShapeSnip1Rectangle = 155,
		msoShapeSnip2SameRectangle = 156,
		msoShapeSnip2DiagRectangle = 157,
		msoShapeFrame = 158,
		msoShapeHalfFrame = 159,
		msoShapeTear = 160,
		msoShapeChord = 161,
		msoShapeCorner = 162,
		msoShapeMathPlus = 163,
		msoShapeMathMinus = 164,
		msoShapeMathMultiply = 165,
		msoShapeMathDivide = 166,
		msoShapeMathEqual = 167,
		msoShapeMathNotEqual = 168,
		msoShapeCornerTabs = 169,
		msoShapeSquareTabs = 170,
		msoShapePlaqueTabs = 171,
		msoShapeGear6 = 172,
		msoShapeGear9 = 173,
		msoShapeFunnel = 174,
		msoShapePieWedge = 175,
		msoShapeLeftCircularArrow = 176,
		msoShapeLeftRightCircularArrow = 177,
		msoShapeSwooshArrow = 178,
		msoShapeCloud = 179,
		msoShapeChartX = 180,
		msoShapeChartStar = 181,
		msoShapeChartPlus = 182,
		msoShapeLineInverse = 183,
	}

	enum MsoShapeType {
		msoShapeTypeMixed = -2,
		msoAutoShape = 1,
		msoCallout = 2,
		msoChart = 3,
		msoComment = 4,
		msoFreeform = 5,
		msoGroup = 6,
		msoEmbeddedOLEObject = 7,
		msoFormControl = 8,
		msoLine = 9,
		msoLinkedOLEObject = 10,
		msoLinkedPicture = 11,
		msoOLEControlObject = 12,
		msoPicture = 13,
		msoPlaceholder = 14,
		msoTextEffect = 15,
		msoMedia = 16,
		msoTextBox = 17,
		msoScriptAnchor = 18,
		msoTable = 19,
		msoCanvas = 20,
		msoDiagram = 21,
		msoInk = 22,
		msoInkComment = 23,
		msoSmartArt = 24,
		msoSlicer = 25,
		msoWebVideo = 26,
	}

	enum MsoFlipCmd {
		msoFlipHorizontal = 0,
		msoFlipVertical = 1,
	}

	enum MsoTriState {
		msoTrue = -1,
		msoFalse = 0,
		msoCTrue = 1,
		msoTriStateToggle = -3,
		msoTriStateMixed = -2,
	}

	enum MsoColorType {
		msoColorTypeMixed = -2,
		msoColorTypeRGB = 1,
		msoColorTypeScheme = 2,
		msoColorTypeCMYK = 3,
		msoColorTypeCMS = 4,
		msoColorTypeInk = 5,
	}

	enum MsoPictureColorType {
		msoPictureMixed = -2,
		msoPictureAutomatic = 1,
		msoPictureGrayscale = 2,
		msoPictureBlackAndWhite = 3,
		msoPictureWatermark = 4,
	}

	enum MsoCalloutAngleType {
		msoCalloutAngleMixed = -2,
		msoCalloutAngleAutomatic = 1,
		msoCalloutAngle30 = 2,
		msoCalloutAngle45 = 3,
		msoCalloutAngle60 = 4,
		msoCalloutAngle90 = 5,
	}

	enum MsoCalloutDropType {
		msoCalloutDropMixed = -2,
		msoCalloutDropCustom = 1,
		msoCalloutDropTop = 2,
		msoCalloutDropCenter = 3,
		msoCalloutDropBottom = 4,
	}

	enum MsoCalloutType {
		msoCalloutMixed = -2,
		msoCalloutOne = 1,
		msoCalloutTwo = 2,
		msoCalloutThree = 3,
		msoCalloutFour = 4,
	}

	enum MsoBlackWhiteMode {
		msoBlackWhiteMixed = -2,
		msoBlackWhiteAutomatic = 1,
		msoBlackWhiteGrayScale = 2,
		msoBlackWhiteLightGrayScale = 3,
		msoBlackWhiteInverseGrayScale = 4,
		msoBlackWhiteGrayOutline = 5,
		msoBlackWhiteBlackTextAndLine = 6,
		msoBlackWhiteHighContrast = 7,
		msoBlackWhiteBlack = 8,
		msoBlackWhiteWhite = 9,
		msoBlackWhiteDontShow = 10,
	}

	enum MsoMixedType {
		msoIntegerMixed = 32768,
		msoSingleMixed = -2147483648,
	}

	enum MsoTextOrientation {
		msoTextOrientationMixed = -2,
		msoTextOrientationHorizontal = 1,
		msoTextOrientationUpward = 2,
		msoTextOrientationDownward = 3,
		msoTextOrientationVerticalFarEast = 4,
		msoTextOrientationVertical = 5,
		msoTextOrientationHorizontalRotatedFarEast = 6,
	}

	enum MsoScaleFrom {
		msoScaleFromTopLeft = 0,
		msoScaleFromMiddle = 1,
		msoScaleFromBottomRight = 2,
	}

	enum MsoBarPosition {
		msoBarLeft = 0,
		msoBarTop = 1,
		msoBarRight = 2,
		msoBarBottom = 3,
		msoBarFloating = 4,
		msoBarPopup = 5,
		msoBarMenuBar = 6,
	}

	enum MsoBarProtection {
		msoBarNoProtection = 0,
		msoBarNoCustomize = 1,
		msoBarNoResize = 2,
		msoBarNoMove = 4,
		msoBarNoChangeVisible = 8,
		msoBarNoChangeDock = 16,
		msoBarNoVerticalDock = 32,
		msoBarNoHorizontalDock = 64,
	}

	enum MsoBarType {
		msoBarTypeNormal = 0,
		msoBarTypeMenuBar = 1,
		msoBarTypePopup = 2,
	}

	enum MsoControlType {
		msoControlCustom = 0,
		msoControlButton = 1,
		msoControlEdit = 2,
		msoControlDropdown = 3,
		msoControlComboBox = 4,
		msoControlButtonDropdown = 5,
		msoControlSplitDropdown = 6,
		msoControlOCXDropdown = 7,
		msoControlGenericDropdown = 8,
		msoControlGraphicDropdown = 9,
		msoControlPopup = 10,
		msoControlGraphicPopup = 11,
		msoControlButtonPopup = 12,
		msoControlSplitButtonPopup = 13,
		msoControlSplitButtonMRUPopup = 14,
		msoControlLabel = 15,
		msoControlExpandingGrid = 16,
		msoControlSplitExpandingGrid = 17,
		msoControlGrid = 18,
		msoControlGauge = 19,
		msoControlGraphicCombo = 20,
		msoControlPane = 21,
		msoControlActiveX = 22,
		msoControlSpinner = 23,
		msoControlLabelEx = 24,
		msoControlWorkPane = 25,
		msoControlAutoCompleteCombo = 26,
	}

	enum MsoButtonState {
		msoButtonUp = 0,
		msoButtonDown = -1,
		msoButtonMixed = 2,
	}

	enum MsoControlOLEUsage {
		msoControlOLEUsageNeither = 0,
		msoControlOLEUsageServer = 1,
		msoControlOLEUsageClient = 2,
		msoControlOLEUsageBoth = 3,
	}

	enum MsoButtonStyleHidden {
		msoButtonWrapText = 4,
		msoButtonTextBelow = 8,
	}

	enum MsoButtonStyle {
		msoButtonAutomatic = 0,
		msoButtonIcon = 1,
		msoButtonCaption = 2,
		msoButtonIconAndCaption = 3,
		msoButtonIconAndWrapCaption = 7,
		msoButtonIconAndCaptionBelow = 11,
		msoButtonWrapCaption = 14,
		msoButtonIconAndWrapCaptionBelow = 15,
	}

	enum MsoComboStyle {
		msoComboNormal = 0,
		msoComboLabel = 1,
	}

	enum MsoOLEMenuGroup {
		msoOLEMenuGroupNone = -1,
		msoOLEMenuGroupFile = 0,
		msoOLEMenuGroupEdit = 1,
		msoOLEMenuGroupContainer = 2,
		msoOLEMenuGroupObject = 3,
		msoOLEMenuGroupWindow = 4,
		msoOLEMenuGroupHelp = 5,
	}

	enum MsoMenuAnimation {
		msoMenuAnimationNone = 0,
		msoMenuAnimationRandom = 1,
		msoMenuAnimationUnfold = 2,
		msoMenuAnimationSlide = 3,
	}

	enum MsoBarRow {
		msoBarRowFirst = 0,
		msoBarRowLast = -1,
	}

	enum MsoCommandBarButtonHyperlinkType {
		msoCommandBarButtonHyperlinkNone = 0,
		msoCommandBarButtonHyperlinkOpen = 1,
		msoCommandBarButtonHyperlinkInsertPicture = 2,
	}

	enum MsoHyperlinkType {
		msoHyperlinkRange = 0,
		msoHyperlinkShape = 1,
		msoHyperlinkInlineShape = 2,
	}

	enum MsoExtraInfoMethod {
		msoMethodGet = 0,
		msoMethodPost = 1,
	}

	enum MsoAnimationType {
		msoAnimationIdle = 1,
		msoAnimationGreeting = 2,
		msoAnimationGoodbye = 3,
		msoAnimationBeginSpeaking = 4,
		msoAnimationRestPose = 5,
		msoAnimationCharacterSuccessMajor = 6,
		msoAnimationGetAttentionMajor = 11,
		msoAnimationGetAttentionMinor = 12,
		msoAnimationSearching = 13,
		msoAnimationPrinting = 18,
		msoAnimationGestureRight = 19,
		msoAnimationWritingNotingSomething = 22,
		msoAnimationWorkingAtSomething = 23,
		msoAnimationThinking = 24,
		msoAnimationSendingMail = 25,
		msoAnimationListensToComputer = 26,
		msoAnimationDisappear = 31,
		msoAnimationAppear = 32,
		msoAnimationGetArtsy = 100,
		msoAnimationGetTechy = 101,
		msoAnimationGetWizardy = 102,
		msoAnimationCheckingSomething = 103,
		msoAnimationLookDown = 104,
		msoAnimationLookDownLeft = 105,
		msoAnimationLookDownRight = 106,
		msoAnimationLookLeft = 107,
		msoAnimationLookRight = 108,
		msoAnimationLookUp = 109,
		msoAnimationLookUpLeft = 110,
		msoAnimationLookUpRight = 111,
		msoAnimationSaving = 112,
		msoAnimationGestureDown = 113,
		msoAnimationGestureLeft = 114,
		msoAnimationGestureUp = 115,
		msoAnimationEmptyTrash = 116,
	}

	enum MsoButtonSetType {
		msoButtonSetNone = 0,
		msoButtonSetOK = 1,
		msoButtonSetCancel = 2,
		msoButtonSetOkCancel = 3,
		msoButtonSetYesNo = 4,
		msoButtonSetYesNoCancel = 5,
		msoButtonSetBackClose = 6,
		msoButtonSetNextClose = 7,
		msoButtonSetBackNextClose = 8,
		msoButtonSetRetryCancel = 9,
		msoButtonSetAbortRetryIgnore = 10,
		msoButtonSetSearchClose = 11,
		msoButtonSetBackNextSnooze = 12,
		msoButtonSetTipsOptionsClose = 13,
		msoButtonSetYesAllNoCancel = 14,
	}

	enum MsoIconType {
		msoIconNone = 0,
		msoIconAlert = 2,
		msoIconTip = 3,
		msoIconAlertInfo = 4,
		msoIconAlertWarning = 5,
		msoIconAlertQuery = 6,
		msoIconAlertCritical = 7,
	}

	enum MsoBalloonType {
		msoBalloonTypeButtons = 0,
		msoBalloonTypeBullets = 1,
		msoBalloonTypeNumbers = 2,
	}

	enum MsoModeType {
		msoModeModal = 0,
		msoModeAutoDown = 1,
		msoModeModeless = 2,
	}

	enum MsoBalloonErrorType {
		msoBalloonErrorNone = 0,
		msoBalloonErrorOther = 1,
		msoBalloonErrorTooBig = 2,
		msoBalloonErrorOutOfMemory = 3,
		msoBalloonErrorBadPictureRef = 4,
		msoBalloonErrorBadReference = 5,
		msoBalloonErrorButtonlessModal = 6,
		msoBalloonErrorButtonModeless = 7,
		msoBalloonErrorBadCharacter = 8,
		msoBalloonErrorCOMFailure = 9,
		msoBalloonErrorCharNotTopmostForModal = 10,
		msoBalloonErrorTooManyControls = 11,
	}

	enum MsoWizardActType {
		msoWizardActInactive = 0,
		msoWizardActActive = 1,
		msoWizardActSuspend = 2,
		msoWizardActResume = 3,
	}

	enum MsoWizardMsgType {
		msoWizardMsgLocalStateOn = 1,
		msoWizardMsgLocalStateOff = 2,
		msoWizardMsgShowHelp = 3,
		msoWizardMsgSuspending = 4,
		msoWizardMsgResuming = 5,
	}

	enum MsoBalloonButtonType {
		msoBalloonButtonYesToAll = -15,
		msoBalloonButtonOptions = -14,
		msoBalloonButtonTips = -13,
		msoBalloonButtonClose = -12,
		msoBalloonButtonSnooze = -11,
		msoBalloonButtonSearch = -10,
		msoBalloonButtonIgnore = -9,
		msoBalloonButtonAbort = -8,
		msoBalloonButtonRetry = -7,
		msoBalloonButtonNext = -6,
		msoBalloonButtonBack = -5,
		msoBalloonButtonNo = -4,
		msoBalloonButtonYes = -3,
		msoBalloonButtonCancel = -2,
		msoBalloonButtonOK = -1,
		msoBalloonButtonNull = 0,
	}

	enum DocProperties {
		offPropertyTypeNumber = 1,
		offPropertyTypeBoolean = 2,
		offPropertyTypeDate = 3,
		offPropertyTypeString = 4,
		offPropertyTypeFloat = 5,
	}

	enum MsoDocProperties {
		msoPropertyTypeNumber = 1,
		msoPropertyTypeBoolean = 2,
		msoPropertyTypeDate = 3,
		msoPropertyTypeString = 4,
		msoPropertyTypeFloat = 5,
	}

	enum MsoAppLanguageID {
		msoLanguageIDInstall = 1,
		msoLanguageIDUI = 2,
		msoLanguageIDHelp = 3,
		msoLanguageIDExeMode = 4,
		msoLanguageIDUIPrevious = 5,
	}

	enum MsoFarEastLineBreakLanguageID {
		MsoFarEastLineBreakLanguageJapanese = 1041,
		MsoFarEastLineBreakLanguageKorean = 1042,
		MsoFarEastLineBreakLanguageSimplifiedChinese = 2052,
		MsoFarEastLineBreakLanguageTraditionalChinese = 1028,
	}

	enum MsoFeatureInstall {
		msoFeatureInstallNone = 0,
		msoFeatureInstallOnDemand = 1,
		msoFeatureInstallOnDemandWithUI = 2,
	}

	enum MsoScriptLanguage {
		msoScriptLanguageJava = 1,
		msoScriptLanguageVisualBasic = 2,
		msoScriptLanguageASP = 3,
		msoScriptLanguageOther = 4,
	}

	enum MsoScriptLocation {
		msoScriptLocationInHead = 1,
		msoScriptLocationInBody = 2,
	}

	enum MsoFileFindOptions {
		msoOptionsNew = 1,
		msoOptionsAdd = 2,
		msoOptionsWithin = 3,
	}

	enum MsoFileFindView {
		msoViewFileInfo = 1,
		msoViewPreview = 2,
		msoViewSummaryInfo = 3,
	}

	enum MsoFileFindSortBy {
		msoFileFindSortbyAuthor = 1,
		msoFileFindSortbyDateCreated = 2,
		msoFileFindSortbyLastSavedBy = 3,
		msoFileFindSortbyDateSaved = 4,
		msoFileFindSortbyFileName = 5,
		msoFileFindSortbySize = 6,
		msoFileFindSortbyTitle = 7,
	}

	enum MsoFileFindListBy {
		msoListbyName = 1,
		msoListbyTitle = 2,
	}

	enum MsoLastModified {
		msoLastModifiedYesterday = 1,
		msoLastModifiedToday = 2,
		msoLastModifiedLastWeek = 3,
		msoLastModifiedThisWeek = 4,
		msoLastModifiedLastMonth = 5,
		msoLastModifiedThisMonth = 6,
		msoLastModifiedAnyTime = 7,
	}

	enum MsoSortBy {
		msoSortByFileName = 1,
		msoSortBySize = 2,
		msoSortByFileType = 3,
		msoSortByLastModified = 4,
		msoSortByNone = 5,
	}

	enum MsoSortOrder {
		msoSortOrderAscending = 1,
		msoSortOrderDescending = 2,
	}

	enum MsoConnector {
		msoConnectorAnd = 1,
		msoConnectorOr = 2,
	}

	enum MsoCondition {
		msoConditionFileTypeAllFiles = 1,
		msoConditionFileTypeOfficeFiles = 2,
		msoConditionFileTypeWordDocuments = 3,
		msoConditionFileTypeExcelWorkbooks = 4,
		msoConditionFileTypePowerPointPresentations = 5,
		msoConditionFileTypeBinders = 6,
		msoConditionFileTypeDatabases = 7,
		msoConditionFileTypeTemplates = 8,
		msoConditionIncludes = 9,
		msoConditionIncludesPhrase = 10,
		msoConditionBeginsWith = 11,
		msoConditionEndsWith = 12,
		msoConditionIncludesNearEachOther = 13,
		msoConditionIsExactly = 14,
		msoConditionIsNot = 15,
		msoConditionYesterday = 16,
		msoConditionToday = 17,
		msoConditionTomorrow = 18,
		msoConditionLastWeek = 19,
		msoConditionThisWeek = 20,
		msoConditionNextWeek = 21,
		msoConditionLastMonth = 22,
		msoConditionThisMonth = 23,
		msoConditionNextMonth = 24,
		msoConditionAnytime = 25,
		msoConditionAnytimeBetween = 26,
		msoConditionOn = 27,
		msoConditionOnOrAfter = 28,
		msoConditionOnOrBefore = 29,
		msoConditionInTheNext = 30,
		msoConditionInTheLast = 31,
		msoConditionEquals = 32,
		msoConditionDoesNotEqual = 33,
		msoConditionAnyNumberBetween = 34,
		msoConditionAtMost = 35,
		msoConditionAtLeast = 36,
		msoConditionMoreThan = 37,
		msoConditionLessThan = 38,
		msoConditionIsYes = 39,
		msoConditionIsNo = 40,
		msoConditionIncludesFormsOf = 41,
		msoConditionFreeText = 42,
		msoConditionFileTypeOutlookItems = 43,
		msoConditionFileTypeMailItem = 44,
		msoConditionFileTypeCalendarItem = 45,
		msoConditionFileTypeContactItem = 46,
		msoConditionFileTypeNoteItem = 47,
		msoConditionFileTypeJournalItem = 48,
		msoConditionFileTypeTaskItem = 49,
		msoConditionFileTypePhotoDrawFiles = 50,
		msoConditionFileTypeDataConnectionFiles = 51,
		msoConditionFileTypePublisherFiles = 52,
		msoConditionFileTypeProjectFiles = 53,
		msoConditionFileTypeDocumentImagingFiles = 54,
		msoConditionFileTypeVisioFiles = 55,
		msoConditionFileTypeDesignerFiles = 56,
		msoConditionFileTypeWebPages = 57,
		msoConditionEqualsLow = 58,
		msoConditionEqualsNormal = 59,
		msoConditionEqualsHigh = 60,
		msoConditionNotEqualToLow = 61,
		msoConditionNotEqualToNormal = 62,
		msoConditionNotEqualToHigh = 63,
		msoConditionEqualsNotStarted = 64,
		msoConditionEqualsInProgress = 65,
		msoConditionEqualsCompleted = 66,
		msoConditionEqualsWaitingForSomeoneElse = 67,
		msoConditionEqualsDeferred = 68,
		msoConditionNotEqualToNotStarted = 69,
		msoConditionNotEqualToInProgress = 70,
		msoConditionNotEqualToCompleted = 71,
		msoConditionNotEqualToWaitingForSomeoneElse = 72,
		msoConditionNotEqualToDeferred = 73,
	}

	enum MsoFileType {
		msoFileTypeAllFiles = 1,
		msoFileTypeOfficeFiles = 2,
		msoFileTypeWordDocuments = 3,
		msoFileTypeExcelWorkbooks = 4,
		msoFileTypePowerPointPresentations = 5,
		msoFileTypeBinders = 6,
		msoFileTypeDatabases = 7,
		msoFileTypeTemplates = 8,
		msoFileTypeOutlookItems = 9,
		msoFileTypeMailItem = 10,
		msoFileTypeCalendarItem = 11,
		msoFileTypeContactItem = 12,
		msoFileTypeNoteItem = 13,
		msoFileTypeJournalItem = 14,
		msoFileTypeTaskItem = 15,
		msoFileTypePhotoDrawFiles = 16,
		msoFileTypeDataConnectionFiles = 17,
		msoFileTypePublisherFiles = 18,
		msoFileTypeProjectFiles = 19,
		msoFileTypeDocumentImagingFiles = 20,
		msoFileTypeVisioFiles = 21,
		msoFileTypeDesignerFiles = 22,
		msoFileTypeWebPages = 23,
	}

	enum MsoLanguageID {
		msoLanguageIDMixed = -2,
		msoLanguageIDNone = 0,
		msoLanguageIDNoProofing = 1024,
		msoLanguageIDAfrikaans = 1078,
		msoLanguageIDAlbanian = 1052,
		msoLanguageIDAmharic = 1118,
		msoLanguageIDArabicAlgeria = 5121,
		msoLanguageIDArabicBahrain = 15361,
		msoLanguageIDArabicEgypt = 3073,
		msoLanguageIDArabicIraq = 2049,
		msoLanguageIDArabicJordan = 11265,
		msoLanguageIDArabicKuwait = 13313,
		msoLanguageIDArabicLebanon = 12289,
		msoLanguageIDArabicLibya = 4097,
		msoLanguageIDArabicMorocco = 6145,
		msoLanguageIDArabicOman = 8193,
		msoLanguageIDArabicQatar = 16385,
		msoLanguageIDArabic = 1025,
		msoLanguageIDArabicSyria = 10241,
		msoLanguageIDArabicTunisia = 7169,
		msoLanguageIDArabicUAE = 14337,
		msoLanguageIDArabicYemen = 9217,
		msoLanguageIDArmenian = 1067,
		msoLanguageIDAssamese = 1101,
		msoLanguageIDAzeriCyrillic = 2092,
		msoLanguageIDAzeriLatin = 1068,
		msoLanguageIDBasque = 1069,
		msoLanguageIDByelorussian = 1059,
		msoLanguageIDBengali = 1093,
		msoLanguageIDBosnian = 4122,
		msoLanguageIDBosnianBosniaHerzegovinaCyrillic = 8218,
		msoLanguageIDBosnianBosniaHerzegovinaLatin = 5146,
		msoLanguageIDBulgarian = 1026,
		msoLanguageIDBurmese = 1109,
		msoLanguageIDCatalan = 1027,
		msoLanguageIDChineseHongKongSAR = 3076,
		msoLanguageIDChineseMacaoSAR = 5124,
		msoLanguageIDSimplifiedChinese = 2052,
		msoLanguageIDChineseSingapore = 4100,
		msoLanguageIDTraditionalChinese = 1028,
		msoLanguageIDCherokee = 1116,
		msoLanguageIDCroatian = 1050,
		msoLanguageIDCzech = 1029,
		msoLanguageIDDanish = 1030,
		msoLanguageIDDivehi = 1125,
		msoLanguageIDBelgianDutch = 2067,
		msoLanguageIDDutch = 1043,
		msoLanguageIDDzongkhaBhutan = 2129,
		msoLanguageIDEdo = 1126,
		msoLanguageIDEnglishAUS = 3081,
		msoLanguageIDEnglishBelize = 10249,
		msoLanguageIDEnglishCanadian = 4105,
		msoLanguageIDEnglishCaribbean = 9225,
		msoLanguageIDEnglishIndonesia = 14345,
		msoLanguageIDEnglishIreland = 6153,
		msoLanguageIDEnglishJamaica = 8201,
		msoLanguageIDEnglishNewZealand = 5129,
		msoLanguageIDEnglishPhilippines = 13321,
		msoLanguageIDEnglishSouthAfrica = 7177,
		msoLanguageIDEnglishTrinidadTobago = 11273,
		msoLanguageIDEnglishUK = 2057,
		msoLanguageIDEnglishUS = 1033,
		msoLanguageIDEnglishZimbabwe = 12297,
		msoLanguageIDEstonian = 1061,
		msoLanguageIDFaeroese = 1080,
		msoLanguageIDFarsi = 1065,
		msoLanguageIDFilipino = 1124,
		msoLanguageIDFinnish = 1035,
		msoLanguageIDBelgianFrench = 2060,
		msoLanguageIDFrenchCameroon = 11276,
		msoLanguageIDFrenchCanadian = 3084,
		msoLanguageIDFrenchCotedIvoire = 12300,
		msoLanguageIDFrench = 1036,
		msoLanguageIDFrenchHaiti = 15372,
		msoLanguageIDFrenchLuxembourg = 5132,
		msoLanguageIDFrenchMali = 13324,
		msoLanguageIDFrenchMonaco = 6156,
		msoLanguageIDFrenchMorocco = 14348,
		msoLanguageIDFrenchReunion = 8204,
		msoLanguageIDFrenchSenegal = 10252,
		msoLanguageIDSwissFrench = 4108,
		msoLanguageIDFrenchWestIndies = 7180,
		msoLanguageIDFrenchZaire = 9228,
		msoLanguageIDFrenchCongoDRC = 9228,
		msoLanguageIDFrisianNetherlands = 1122,
		msoLanguageIDFulfulde = 1127,
		msoLanguageIDGaelicIreland = 2108,
		msoLanguageIDGaelicScotland = 1084,
		msoLanguageIDGalician = 1110,
		msoLanguageIDGeorgian = 1079,
		msoLanguageIDGermanAustria = 3079,
		msoLanguageIDGerman = 1031,
		msoLanguageIDGermanLiechtenstein = 5127,
		msoLanguageIDGermanLuxembourg = 4103,
		msoLanguageIDSwissGerman = 2055,
		msoLanguageIDGreek = 1032,
		msoLanguageIDGuarani = 1140,
		msoLanguageIDGujarati = 1095,
		msoLanguageIDHausa = 1128,
		msoLanguageIDHawaiian = 1141,
		msoLanguageIDHebrew = 1037,
		msoLanguageIDHindi = 1081,
		msoLanguageIDHungarian = 1038,
		msoLanguageIDIbibio = 1129,
		msoLanguageIDIcelandic = 1039,
		msoLanguageIDIgbo = 1136,
		msoLanguageIDIndonesian = 1057,
		msoLanguageIDInuktitut = 1117,
		msoLanguageIDItalian = 1040,
		msoLanguageIDSwissItalian = 2064,
		msoLanguageIDJapanese = 1041,
		msoLanguageIDKannada = 1099,
		msoLanguageIDKanuri = 1137,
		msoLanguageIDKashmiri = 1120,
		msoLanguageIDKashmiriDevanagari = 2144,
		msoLanguageIDKazakh = 1087,
		msoLanguageIDKhmer = 1107,
		msoLanguageIDKirghiz = 1088,
		msoLanguageIDKonkani = 1111,
		msoLanguageIDKorean = 1042,
		msoLanguageIDKyrgyz = 1088,
		msoLanguageIDLatin = 1142,
		msoLanguageIDLao = 1108,
		msoLanguageIDLatvian = 1062,
		msoLanguageIDLithuanian = 1063,
		msoLanguageIDMacedonian = 1071,
		msoLanguageIDMacedonianFYROM = 1071,
		msoLanguageIDMalaysian = 1086,
		msoLanguageIDMalayBruneiDarussalam = 2110,
		msoLanguageIDMalayalam = 1100,
		msoLanguageIDMaltese = 1082,
		msoLanguageIDManipuri = 1112,
		msoLanguageIDMaori = 1153,
		msoLanguageIDMarathi = 1102,
		msoLanguageIDMongolian = 1104,
		msoLanguageIDNepali = 1121,
		msoLanguageIDNorwegianBokmol = 1044,
		msoLanguageIDNorwegianNynorsk = 2068,
		msoLanguageIDOriya = 1096,
		msoLanguageIDOromo = 1138,
		msoLanguageIDPashto = 1123,
		msoLanguageIDPolish = 1045,
		msoLanguageIDBrazilianPortuguese = 1046,
		msoLanguageIDPortuguese = 2070,
		msoLanguageIDPunjabi = 1094,
		msoLanguageIDQuechuaBolivia = 1131,
		msoLanguageIDQuechuaEcuador = 2155,
		msoLanguageIDQuechuaPeru = 3179,
		msoLanguageIDRhaetoRomanic = 1047,
		msoLanguageIDRomanianMoldova = 2072,
		msoLanguageIDRomanian = 1048,
		msoLanguageIDRussianMoldova = 2073,
		msoLanguageIDRussian = 1049,
		msoLanguageIDSamiLappish = 1083,
		msoLanguageIDSanskrit = 1103,
		msoLanguageIDSepedi = 1132,
		msoLanguageIDSerbianBosniaHerzegovinaCyrillic = 7194,
		msoLanguageIDSerbianBosniaHerzegovinaLatin = 6170,
		msoLanguageIDSerbianCyrillic = 3098,
		msoLanguageIDSerbianLatin = 2074,
		msoLanguageIDSesotho = 1072,
		msoLanguageIDSindhi = 1113,
		msoLanguageIDSindhiPakistan = 2137,
		msoLanguageIDSinhalese = 1115,
		msoLanguageIDSlovak = 1051,
		msoLanguageIDSlovenian = 1060,
		msoLanguageIDSomali = 1143,
		msoLanguageIDSorbian = 1070,
		msoLanguageIDSpanishArgentina = 11274,
		msoLanguageIDSpanishBolivia = 16394,
		msoLanguageIDSpanishChile = 13322,
		msoLanguageIDSpanishColombia = 9226,
		msoLanguageIDSpanishCostaRica = 5130,
		msoLanguageIDSpanishDominicanRepublic = 7178,
		msoLanguageIDSpanishEcuador = 12298,
		msoLanguageIDSpanishElSalvador = 17418,
		msoLanguageIDSpanishGuatemala = 4106,
		msoLanguageIDSpanishHonduras = 18442,
		msoLanguageIDMexicanSpanish = 2058,
		msoLanguageIDSpanishNicaragua = 19466,
		msoLanguageIDSpanishPanama = 6154,
		msoLanguageIDSpanishParaguay = 15370,
		msoLanguageIDSpanishPeru = 10250,
		msoLanguageIDSpanishPuertoRico = 20490,
		msoLanguageIDSpanishModernSort = 3082,
		msoLanguageIDSpanish = 1034,
		msoLanguageIDSpanishUruguay = 14346,
		msoLanguageIDSpanishVenezuela = 8202,
		msoLanguageIDSutu = 1072,
		msoLanguageIDSwahili = 1089,
		msoLanguageIDSwedishFinland = 2077,
		msoLanguageIDSwedish = 1053,
		msoLanguageIDSyriac = 1114,
		msoLanguageIDTajik = 1064,
		msoLanguageIDTamil = 1097,
		msoLanguageIDTamazight = 1119,
		msoLanguageIDTamazightLatin = 2143,
		msoLanguageIDTatar = 1092,
		msoLanguageIDTelugu = 1098,
		msoLanguageIDThai = 1054,
		msoLanguageIDTibetan = 1105,
		msoLanguageIDTigrignaEthiopic = 1139,
		msoLanguageIDTigrignaEritrea = 2163,
		msoLanguageIDTsonga = 1073,
		msoLanguageIDTswana = 1074,
		msoLanguageIDTurkish = 1055,
		msoLanguageIDTurkmen = 1090,
		msoLanguageIDUkrainian = 1058,
		msoLanguageIDUrdu = 1056,
		msoLanguageIDUzbekCyrillic = 2115,
		msoLanguageIDUzbekLatin = 1091,
		msoLanguageIDVenda = 1075,
		msoLanguageIDVietnamese = 1066,
		msoLanguageIDWelsh = 1106,
		msoLanguageIDXhosa = 1076,
		msoLanguageIDYi = 1144,
		msoLanguageIDYiddish = 1085,
		msoLanguageIDYoruba = 1130,
		msoLanguageIDZulu = 1077,
	}

	enum MsoScreenSize {
		msoScreenSize544x376 = 0,
		msoScreenSize640x480 = 1,
		msoScreenSize720x512 = 2,
		msoScreenSize800x600 = 3,
		msoScreenSize1024x768 = 4,
		msoScreenSize1152x882 = 5,
		msoScreenSize1152x900 = 6,
		msoScreenSize1280x1024 = 7,
		msoScreenSize1600x1200 = 8,
		msoScreenSize1800x1440 = 9,
		msoScreenSize1920x1200 = 10,
	}

	enum MsoCharacterSet {
		msoCharacterSetArabic = 1,
		msoCharacterSetCyrillic = 2,
		msoCharacterSetEnglishWesternEuropeanOtherLatinScript = 3,
		msoCharacterSetGreek = 4,
		msoCharacterSetHebrew = 5,
		msoCharacterSetJapanese = 6,
		msoCharacterSetKorean = 7,
		msoCharacterSetMultilingualUnicode = 8,
		msoCharacterSetSimplifiedChinese = 9,
		msoCharacterSetThai = 10,
		msoCharacterSetTraditionalChinese = 11,
		msoCharacterSetVietnamese = 12,
	}

	enum MsoEncoding {
		msoEncodingThai = 874,
		msoEncodingJapaneseShiftJIS = 932,
		msoEncodingSimplifiedChineseGBK = 936,
		msoEncodingKorean = 949,
		msoEncodingTraditionalChineseBig5 = 950,
		msoEncodingUnicodeLittleEndian = 1200,
		msoEncodingUnicodeBigEndian = 1201,
		msoEncodingCentralEuropean = 1250,
		msoEncodingCyrillic = 1251,
		msoEncodingWestern = 1252,
		msoEncodingGreek = 1253,
		msoEncodingTurkish = 1254,
		msoEncodingHebrew = 1255,
		msoEncodingArabic = 1256,
		msoEncodingBaltic = 1257,
		msoEncodingVietnamese = 1258,
		msoEncodingAutoDetect = 50001,
		msoEncodingJapaneseAutoDetect = 50932,
		msoEncodingSimplifiedChineseAutoDetect = 50936,
		msoEncodingKoreanAutoDetect = 50949,
		msoEncodingTraditionalChineseAutoDetect = 50950,
		msoEncodingCyrillicAutoDetect = 51251,
		msoEncodingGreekAutoDetect = 51253,
		msoEncodingArabicAutoDetect = 51256,
		msoEncodingISO88591Latin1 = 28591,
		msoEncodingISO88592CentralEurope = 28592,
		msoEncodingISO88593Latin3 = 28593,
		msoEncodingISO88594Baltic = 28594,
		msoEncodingISO88595Cyrillic = 28595,
		msoEncodingISO88596Arabic = 28596,
		msoEncodingISO88597Greek = 28597,
		msoEncodingISO88598Hebrew = 28598,
		msoEncodingISO88599Turkish = 28599,
		msoEncodingISO885915Latin9 = 28605,
		msoEncodingISO88598HebrewLogical = 38598,
		msoEncodingISO2022JPNoHalfwidthKatakana = 50220,
		msoEncodingISO2022JPJISX02021984 = 50221,
		msoEncodingISO2022JPJISX02011989 = 50222,
		msoEncodingISO2022KR = 50225,
		msoEncodingISO2022CNTraditionalChinese = 50227,
		msoEncodingISO2022CNSimplifiedChinese = 50229,
		msoEncodingMacRoman = 10000,
		msoEncodingMacJapanese = 10001,
		msoEncodingMacTraditionalChineseBig5 = 10002,
		msoEncodingMacKorean = 10003,
		msoEncodingMacArabic = 10004,
		msoEncodingMacHebrew = 10005,
		msoEncodingMacGreek1 = 10006,
		msoEncodingMacCyrillic = 10007,
		msoEncodingMacSimplifiedChineseGB2312 = 10008,
		msoEncodingMacRomania = 10010,
		msoEncodingMacUkraine = 10017,
		msoEncodingMacLatin2 = 10029,
		msoEncodingMacIcelandic = 10079,
		msoEncodingMacTurkish = 10081,
		msoEncodingMacCroatia = 10082,
		msoEncodingEBCDICUSCanada = 37,
		msoEncodingEBCDICInternational = 500,
		msoEncodingEBCDICMultilingualROECELatin2 = 870,
		msoEncodingEBCDICGreekModern = 875,
		msoEncodingEBCDICTurkishLatin5 = 1026,
		msoEncodingEBCDICGermany = 20273,
		msoEncodingEBCDICDenmarkNorway = 20277,
		msoEncodingEBCDICFinlandSweden = 20278,
		msoEncodingEBCDICItaly = 20280,
		msoEncodingEBCDICLatinAmericaSpain = 20284,
		msoEncodingEBCDICUnitedKingdom = 20285,
		msoEncodingEBCDICJapaneseKatakanaExtended = 20290,
		msoEncodingEBCDICFrance = 20297,
		msoEncodingEBCDICArabic = 20420,
		msoEncodingEBCDICGreek = 20423,
		msoEncodingEBCDICHebrew = 20424,
		msoEncodingEBCDICKoreanExtended = 20833,
		msoEncodingEBCDICThai = 20838,
		msoEncodingEBCDICIcelandic = 20871,
		msoEncodingEBCDICTurkish = 20905,
		msoEncodingEBCDICRussian = 20880,
		msoEncodingEBCDICSerbianBulgarian = 21025,
		msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese = 50930,
		msoEncodingEBCDICUSCanadaAndJapanese = 50931,
		msoEncodingEBCDICKoreanExtendedAndKorean = 50933,
		msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese = 50935,
		msoEncodingEBCDICUSCanadaAndTraditionalChinese = 50937,
		msoEncodingEBCDICJapaneseLatinExtendedAndJapanese = 50939,
		msoEncodingOEMUnitedStates = 437,
		msoEncodingOEMGreek437G = 737,
		msoEncodingOEMBaltic = 775,
		msoEncodingOEMMultilingualLatinI = 850,
		msoEncodingOEMMultilingualLatinII = 852,
		msoEncodingOEMCyrillic = 855,
		msoEncodingOEMTurkish = 857,
		msoEncodingOEMPortuguese = 860,
		msoEncodingOEMIcelandic = 861,
		msoEncodingOEMHebrew = 862,
		msoEncodingOEMCanadianFrench = 863,
		msoEncodingOEMArabic = 864,
		msoEncodingOEMNordic = 865,
		msoEncodingOEMCyrillicII = 866,
		msoEncodingOEMModernGreek = 869,
		msoEncodingEUCJapanese = 51932,
		msoEncodingEUCChineseSimplifiedChinese = 51936,
		msoEncodingEUCKorean = 51949,
		msoEncodingEUCTaiwaneseTraditionalChinese = 51950,
		msoEncodingISCIIDevanagari = 57002,
		msoEncodingISCIIBengali = 57003,
		msoEncodingISCIITamil = 57004,
		msoEncodingISCIITelugu = 57005,
		msoEncodingISCIIAssamese = 57006,
		msoEncodingISCIIOriya = 57007,
		msoEncodingISCIIKannada = 57008,
		msoEncodingISCIIMalayalam = 57009,
		msoEncodingISCIIGujarati = 57010,
		msoEncodingISCIIPunjabi = 57011,
		msoEncodingArabicASMO = 708,
		msoEncodingArabicTransparentASMO = 720,
		msoEncodingKoreanJohab = 1361,
		msoEncodingTaiwanCNS = 20000,
		msoEncodingTaiwanTCA = 20001,
		msoEncodingTaiwanEten = 20002,
		msoEncodingTaiwanIBM5550 = 20003,
		msoEncodingTaiwanTeleText = 20004,
		msoEncodingTaiwanWang = 20005,
		msoEncodingIA5IRV = 20105,
		msoEncodingIA5German = 20106,
		msoEncodingIA5Swedish = 20107,
		msoEncodingIA5Norwegian = 20108,
		msoEncodingUSASCII = 20127,
		msoEncodingT61 = 20261,
		msoEncodingISO6937NonSpacingAccent = 20269,
		msoEncodingKOI8R = 20866,
		msoEncodingExtAlphaLowercase = 21027,
		msoEncodingKOI8U = 21866,
		msoEncodingEuropa3 = 29001,
		msoEncodingHZGBSimplifiedChinese = 52936,
		msoEncodingSimplifiedChineseGB18030 = 54936,
		msoEncodingUTF7 = 65000,
		msoEncodingUTF8 = 65001,
	}

	enum MsoHTMLProjectOpen {
		msoHTMLProjectOpenSourceView = 1,
		msoHTMLProjectOpenTextView = 2,
	}

	enum MsoHTMLProjectState {
		msoHTMLProjectStateDocumentLocked = 1,
		msoHTMLProjectStateProjectLocked = 2,
		msoHTMLProjectStateDocumentProjectUnlocked = 3,
	}

	enum MsoFileDialogType {
		msoFileDialogOpen = 1,
		msoFileDialogSaveAs = 2,
		msoFileDialogFilePicker = 3,
		msoFileDialogFolderPicker = 4,
	}

	enum MsoFileDialogView {
		msoFileDialogViewList = 1,
		msoFileDialogViewDetails = 2,
		msoFileDialogViewProperties = 3,
		msoFileDialogViewPreview = 4,
		msoFileDialogViewThumbnail = 5,
		msoFileDialogViewLargeIcons = 6,
		msoFileDialogViewSmallIcons = 7,
		msoFileDialogViewWebView = 8,
		msoFileDialogViewTiles = 9,
	}

	enum MsoAutomationSecurity {
		msoAutomationSecurityLow = 1,
		msoAutomationSecurityByUI = 2,
		msoAutomationSecurityForceDisable = 3,
	}

	enum MailFormat {
		mfPlainText = 1,
		mfHTML = 2,
		mfRTF = 3,
	}

	enum MsoAlertButtonType {
		msoAlertButtonOK = 0,
		msoAlertButtonOKCancel = 1,
		msoAlertButtonAbortRetryIgnore = 2,
		msoAlertButtonYesNoCancel = 3,
		msoAlertButtonYesNo = 4,
		msoAlertButtonRetryCancel = 5,
		msoAlertButtonYesAllNoCancel = 6,
	}

	enum MsoAlertIconType {
		msoAlertIconNoIcon = 0,
		msoAlertIconCritical = 1,
		msoAlertIconQuery = 2,
		msoAlertIconWarning = 3,
		msoAlertIconInfo = 4,
	}

	enum MsoAlertDefaultType {
		msoAlertDefaultFirst = 0,
		msoAlertDefaultSecond = 1,
		msoAlertDefaultThird = 2,
		msoAlertDefaultFourth = 3,
		msoAlertDefaultFifth = 4,
	}

	enum MsoAlertCancelType {
		msoAlertCancelDefault = -1,
		msoAlertCancelFirst = 0,
		msoAlertCancelSecond = 1,
		msoAlertCancelThird = 2,
		msoAlertCancelFourth = 3,
		msoAlertCancelFifth = 4,
	}

	enum MsoSearchIn {
		msoSearchInMyComputer = 0,
		msoSearchInOutlook = 1,
		msoSearchInMyNetworkPlaces = 2,
		msoSearchInCustom = 3,
	}

	enum MsoTargetBrowser {
		msoTargetBrowserV3 = 0,
		msoTargetBrowserV4 = 1,
		msoTargetBrowserIE4 = 2,
		msoTargetBrowserIE5 = 3,
		msoTargetBrowserIE6 = 4,
	}

	enum MsoOrgChartOrientation {
		msoOrgChartOrientationMixed = -2,
		msoOrgChartOrientationVertical = 1,
	}

	enum MsoOrgChartLayoutType {
		msoOrgChartLayoutMixed = -2,
		msoOrgChartLayoutStandard = 1,
		msoOrgChartLayoutBothHanging = 2,
		msoOrgChartLayoutLeftHanging = 3,
		msoOrgChartLayoutRightHanging = 4,
		msoOrgChartLayoutDefault = 5,
	}

	enum MsoRelativeNodePosition {
		msoBeforeNode = 1,
		msoAfterNode = 2,
		msoBeforeFirstSibling = 3,
		msoAfterLastSibling = 4,
	}

	enum MsoDiagramType {
		msoDiagramMixed = -2,
		msoDiagramOrgChart = 1,
		msoDiagramCycle = 2,
		msoDiagramRadial = 3,
		msoDiagramPyramid = 4,
		msoDiagramVenn = 5,
		msoDiagramTarget = 6,
	}

	enum MsoDiagramNodeType {
		msoDiagramNode = 1,
		msoDiagramAssistant = 2,
	}

	enum MsoMoveRow {
		msoMoveRowFirst = -4,
		msoMoveRowPrev = -3,
		msoMoveRowNext = -2,
		msoMoveRowNbr = -1,
	}

	enum MsoFilterComparison {
		msoFilterComparisonEqual = 0,
		msoFilterComparisonNotEqual = 1,
		msoFilterComparisonLessThan = 2,
		msoFilterComparisonGreaterThan = 3,
		msoFilterComparisonLessThanEqual = 4,
		msoFilterComparisonGreaterThanEqual = 5,
		msoFilterComparisonIsBlank = 6,
		msoFilterComparisonIsNotBlank = 7,
		msoFilterComparisonContains = 8,
		msoFilterComparisonNotContains = 9,
	}

	enum MsoFilterConjunction {
		msoFilterConjunctionAnd = 0,
		msoFilterConjunctionOr = 1,
	}

	enum MsoFileNewSection {
		msoOpenDocument = 0,
		msoNew = 1,
		msoNewfromExistingFile = 2,
		msoNewfromTemplate = 3,
		msoBottomSection = 4,
	}

	enum MsoFileNewAction {
		msoEditFile = 0,
		msoCreateNewFile = 1,
		msoOpenFile = 2,
	}

	enum MsoLanguageIDHidden {
		msoLanguageIDChineseHongKong = 3076,
		msoLanguageIDChineseMacao = 5124,
		msoLanguageIDEnglishTrinidad = 11273,
	}

	enum MsoSharedWorkspaceTaskStatus {
		msoSharedWorkspaceTaskStatusNotStarted = 1,
		msoSharedWorkspaceTaskStatusInProgress = 2,
		msoSharedWorkspaceTaskStatusCompleted = 3,
		msoSharedWorkspaceTaskStatusDeferred = 4,
		msoSharedWorkspaceTaskStatusWaiting = 5,
	}

	enum MsoSharedWorkspaceTaskPriority {
		msoSharedWorkspaceTaskPriorityHigh = 1,
		msoSharedWorkspaceTaskPriorityNormal = 2,
		msoSharedWorkspaceTaskPriorityLow = 3,
	}

	enum MsoSyncVersionType {
		msoSyncVersionLastViewed = 0,
		msoSyncVersionServer = 1,
	}

	enum MsoSyncConflictResolutionType {
		msoSyncConflictClientWins = 0,
		msoSyncConflictServerWins = 1,
		msoSyncConflictMerge = 2,
	}

	enum MsoSyncCompareType {
		msoSyncCompareAndMerge = 0,
		msoSyncCompareSideBySide = 1,
	}

	enum MsoSyncAvailableType {
		msoSyncAvailableNone = 0,
		msoSyncAvailableOffline = 1,
		msoSyncAvailableAnywhere = 2,
	}

	enum MsoSyncEventType {
		msoSyncEventDownloadInitiated = 0,
		msoSyncEventDownloadSucceeded = 1,
		msoSyncEventDownloadFailed = 2,
		msoSyncEventUploadInitiated = 3,
		msoSyncEventUploadSucceeded = 4,
		msoSyncEventUploadFailed = 5,
		msoSyncEventDownloadNoChange = 6,
		msoSyncEventOffline = 7,
	}

	enum MsoSyncErrorType {
		msoSyncErrorNone = 0,
		msoSyncErrorUnauthorizedUser = 1,
		msoSyncErrorCouldNotConnect = 2,
		msoSyncErrorOutOfSpace = 3,
		msoSyncErrorFileNotFound = 4,
		msoSyncErrorFileTooLarge = 5,
		msoSyncErrorFileInUse = 6,
		msoSyncErrorVirusUpload = 7,
		msoSyncErrorVirusDownload = 8,
		msoSyncErrorUnknownUpload = 9,
		msoSyncErrorUnknownDownload = 10,
		msoSyncErrorCouldNotOpen = 11,
		msoSyncErrorCouldNotUpdate = 12,
		msoSyncErrorCouldNotCompare = 13,
		msoSyncErrorCouldNotResolve = 14,
		msoSyncErrorNoNetwork = 15,
		msoSyncErrorUnknown = 16,
	}

	enum MsoSyncStatusType {
		msoSyncStatusNoSharedWorkspace = 0,
		msoSyncStatusNotRoaming = 0,
		msoSyncStatusLatest = 1,
		msoSyncStatusNewerAvailable = 2,
		msoSyncStatusLocalChanges = 3,
		msoSyncStatusConflict = 4,
		msoSyncStatusSuspended = 5,
		msoSyncStatusError = 6,
	}

	enum MsoPermission {
		msoPermissionView = 1,
		msoPermissionRead = 1,
		msoPermissionEdit = 2,
		msoPermissionSave = 4,
		msoPermissionExtract = 8,
		msoPermissionChange = 15,
		msoPermissionPrint = 16,
		msoPermissionObjModel = 32,
		msoPermissionFullControl = 64,
		msoPermissionAllCommon = 127,
	}

	enum MsoMetaPropertyType {
		msoMetaPropertyTypeUnknown = 0,
		msoMetaPropertyTypeBoolean = 1,
		msoMetaPropertyTypeChoice = 2,
		msoMetaPropertyTypeCalculated = 3,
		msoMetaPropertyTypeComputed = 4,
		msoMetaPropertyTypeCurrency = 5,
		msoMetaPropertyTypeDateTime = 6,
		msoMetaPropertyTypeFillInChoice = 7,
		msoMetaPropertyTypeGuid = 8,
		msoMetaPropertyTypeInteger = 9,
		msoMetaPropertyTypeLookup = 10,
		msoMetaPropertyTypeMultiChoiceLookup = 11,
		msoMetaPropertyTypeMultiChoice = 12,
		msoMetaPropertyTypeMultiChoiceFillIn = 13,
		msoMetaPropertyTypeNote = 14,
		msoMetaPropertyTypeNumber = 15,
		msoMetaPropertyTypeText = 16,
		msoMetaPropertyTypeUrl = 17,
		msoMetaPropertyTypeUser = 18,
		msoMetaPropertyTypeUserMulti = 19,
		msoMetaPropertyTypeBusinessData = 20,
		msoMetaPropertyTypeBusinessDataSecondary = 21,
		msoMetaPropertyTypeMax = 22,
	}

	enum MsoSignatureSubset {
		msoSignatureSubsetSignaturesAllSigs = 0,
		msoSignatureSubsetSignaturesNonVisible = 1,
		msoSignatureSubsetSignatureLines = 2,
		msoSignatureSubsetSignatureLinesSigned = 3,
		msoSignatureSubsetSignatureLinesUnsigned = 4,
		msoSignatureSubsetAll = 5,
	}

	enum MsoDocInspectorStatus {
		msoDocInspectorStatusDocOk = 0,
		msoDocInspectorStatusIssueFound = 1,
		msoDocInspectorStatusError = 2,
	}

	enum SignatureDetail {
		sigdetLocalSigningTime = 0,
		sigdetApplicationName = 1,
		sigdetApplicationVersion = 2,
		sigdetOfficeVersion = 3,
		sigdetWindowsVersion = 4,
		sigdetNumberOfMonitors = 5,
		sigdetHorizResolution = 6,
		sigdetVertResolution = 7,
		sigdetColorDepth = 8,
		sigdetSignedData = 9,
		sigdetDocPreviewImg = 10,
		sigdetIPFormHash = 11,
		sigdetIPCurrentView = 12,
		sigdetSignatureType = 13,
		sigdetHashAlgorithm = 14,
		sigdetShouldShowViewWarning = 15,
		sigdetDelSuggSigner = 16,
		sigdetDelSuggSignerSet = 17,
		sigdetDelSuggSignerLine2 = 18,
		sigdetDelSuggSignerLine2Set = 19,
		sigdetDelSuggSignerEmail = 20,
		sigdetDelSuggSignerEmailSet = 21,
	}

	enum CertificateDetail {
		certdetAvailable = 0,
		certdetSubject = 1,
		certdetIssuer = 2,
		certdetExpirationDate = 3,
		certdetThumbprint = 4,
	}

	enum ContentVerificationResults {
		contverresError = 0,
		contverresVerifying = 1,
		contverresUnverified = 2,
		contverresValid = 3,
		contverresModified = 4,
	}

	enum CertificateVerificationResults {
		certverresError = 0,
		certverresVerifying = 1,
		certverresUnverified = 2,
		certverresValid = 3,
		certverresInvalid = 4,
		certverresExpired = 5,
		certverresRevoked = 6,
		certverresUntrusted = 7,
	}

	enum SignatureLineImage {
		siglnimgSoftwareRequired = 0,
		siglnimgUnsigned = 1,
		siglnimgSignedValid = 2,
		siglnimgSignedInvalid = 3,
		siglnimgSigned = 4,
	}

	enum SignatureProviderDetail {
		sigprovdetUrl = 0,
		sigprovdetHashAlgorithm = 1,
		sigprovdetUIOnly = 2,
		sigprovdetUseOfficeUI = 3,
		sigprovdetUseOfficeStampUI = 4,
	}

	enum SignatureType {
		sigtypeUnknown = 0,
		sigtypeNonVisible = 1,
		sigtypeSignatureLine = 2,
		sigtypeMax = 3,
	}

	enum MsoCustomXMLNodeType {
		msoCustomXMLNodeElement = 1,
		msoCustomXMLNodeAttribute = 2,
		msoCustomXMLNodeText = 3,
		msoCustomXMLNodeCData = 4,
		msoCustomXMLNodeProcessingInstruction = 7,
		msoCustomXMLNodeComment = 8,
		msoCustomXMLNodeDocument = 9,
	}

	enum MsoCustomXMLValidationErrorType {
		msoCustomXMLValidationErrorSchemaGenerated = 0,
		msoCustomXMLValidationErrorAutomaticallyCleared = 1,
		msoCustomXMLValidationErrorManual = 2,
	}

	enum MsoTextureAlignment {
		msoTextureAlignmentMixed = -2,
		msoTextureTopLeft = 0,
		msoTextureTop = 1,
		msoTextureTopRight = 2,
		msoTextureLeft = 3,
		msoTextureCenter = 4,
		msoTextureRight = 5,
		msoTextureBottomLeft = 6,
		msoTextureBottom = 7,
		msoTextureBottomRight = 8,
	}

	enum MsoSoftEdgeType {
		msoSoftEdgeTypeMixed = -2,
		msoSoftEdgeTypeNone = 0,
		msoSoftEdgeType1 = 1,
		msoSoftEdgeType2 = 2,
		msoSoftEdgeType3 = 3,
		msoSoftEdgeType4 = 4,
		msoSoftEdgeType5 = 5,
		msoSoftEdgeType6 = 6,
	}

	enum MsoReflectionType {
		msoReflectionTypeMixed = -2,
		msoReflectionTypeNone = 0,
		msoReflectionType1 = 1,
		msoReflectionType2 = 2,
		msoReflectionType3 = 3,
		msoReflectionType4 = 4,
		msoReflectionType5 = 5,
		msoReflectionType6 = 6,
		msoReflectionType7 = 7,
		msoReflectionType8 = 8,
		msoReflectionType9 = 9,
	}

	enum MsoPresetCamera {
		msoPresetCameraMixed = -2,
		msoCameraLegacyObliqueTopLeft = 1,
		msoCameraLegacyObliqueTop = 2,
		msoCameraLegacyObliqueTopRight = 3,
		msoCameraLegacyObliqueLeft = 4,
		msoCameraLegacyObliqueFront = 5,
		msoCameraLegacyObliqueRight = 6,
		msoCameraLegacyObliqueBottomLeft = 7,
		msoCameraLegacyObliqueBottom = 8,
		msoCameraLegacyObliqueBottomRight = 9,
		msoCameraLegacyPerspectiveTopLeft = 10,
		msoCameraLegacyPerspectiveTop = 11,
		msoCameraLegacyPerspectiveTopRight = 12,
		msoCameraLegacyPerspectiveLeft = 13,
		msoCameraLegacyPerspectiveFront = 14,
		msoCameraLegacyPerspectiveRight = 15,
		msoCameraLegacyPerspectiveBottomLeft = 16,
		msoCameraLegacyPerspectiveBottom = 17,
		msoCameraLegacyPerspectiveBottomRight = 18,
		msoCameraOrthographicFront = 19,
		msoCameraIsometricTopUp = 20,
		msoCameraIsometricTopDown = 21,
		msoCameraIsometricBottomUp = 22,
		msoCameraIsometricBottomDown = 23,
		msoCameraIsometricLeftUp = 24,
		msoCameraIsometricLeftDown = 25,
		msoCameraIsometricRightUp = 26,
		msoCameraIsometricRightDown = 27,
		msoCameraIsometricOffAxis1Left = 28,
		msoCameraIsometricOffAxis1Right = 29,
		msoCameraIsometricOffAxis1Top = 30,
		msoCameraIsometricOffAxis2Left = 31,
		msoCameraIsometricOffAxis2Right = 32,
		msoCameraIsometricOffAxis2Top = 33,
		msoCameraIsometricOffAxis3Left = 34,
		msoCameraIsometricOffAxis3Right = 35,
		msoCameraIsometricOffAxis3Bottom = 36,
		msoCameraIsometricOffAxis4Left = 37,
		msoCameraIsometricOffAxis4Right = 38,
		msoCameraIsometricOffAxis4Bottom = 39,
		msoCameraObliqueTopLeft = 40,
		msoCameraObliqueTop = 41,
		msoCameraObliqueTopRight = 42,
		msoCameraObliqueLeft = 43,
		msoCameraObliqueRight = 44,
		msoCameraObliqueBottomLeft = 45,
		msoCameraObliqueBottom = 46,
		msoCameraObliqueBottomRight = 47,
		msoCameraPerspectiveFront = 48,
		msoCameraPerspectiveLeft = 49,
		msoCameraPerspectiveRight = 50,
		msoCameraPerspectiveAbove = 51,
		msoCameraPerspectiveBelow = 52,
		msoCameraPerspectiveAboveLeftFacing = 53,
		msoCameraPerspectiveAboveRightFacing = 54,
		msoCameraPerspectiveContrastingLeftFacing = 55,
		msoCameraPerspectiveContrastingRightFacing = 56,
		msoCameraPerspectiveHeroicLeftFacing = 57,
		msoCameraPerspectiveHeroicRightFacing = 58,
		msoCameraPerspectiveHeroicExtremeLeftFacing = 59,
		msoCameraPerspectiveHeroicExtremeRightFacing = 60,
		msoCameraPerspectiveRelaxed = 61,
		msoCameraPerspectiveRelaxedModerately = 62,
	}

	enum MsoBevelType {
		msoBevelTypeMixed = -2,
		msoBevelNone = 1,
		msoBevelRelaxedInset = 2,
		msoBevelCircle = 3,
		msoBevelSlope = 4,
		msoBevelCross = 5,
		msoBevelAngle = 6,
		msoBevelSoftRound = 7,
		msoBevelConvex = 8,
		msoBevelCoolSlant = 9,
		msoBevelDivot = 10,
		msoBevelRiblet = 11,
		msoBevelHardEdge = 12,
		msoBevelArtDeco = 13,
	}

	enum MsoLightRigType {
		msoLightRigMixed = -2,
		msoLightRigLegacyFlat1 = 1,
		msoLightRigLegacyFlat2 = 2,
		msoLightRigLegacyFlat3 = 3,
		msoLightRigLegacyFlat4 = 4,
		msoLightRigLegacyNormal1 = 5,
		msoLightRigLegacyNormal2 = 6,
		msoLightRigLegacyNormal3 = 7,
		msoLightRigLegacyNormal4 = 8,
		msoLightRigLegacyHarsh1 = 9,
		msoLightRigLegacyHarsh2 = 10,
		msoLightRigLegacyHarsh3 = 11,
		msoLightRigLegacyHarsh4 = 12,
		msoLightRigThreePoint = 13,
		msoLightRigBalanced = 14,
		msoLightRigSoft = 15,
		msoLightRigHarsh = 16,
		msoLightRigFlood = 17,
		msoLightRigContrasting = 18,
		msoLightRigMorning = 19,
		msoLightRigSunrise = 20,
		msoLightRigSunset = 21,
		msoLightRigChilly = 22,
		msoLightRigFreezing = 23,
		msoLightRigFlat = 24,
		msoLightRigTwoPoint = 25,
		msoLightRigGlow = 26,
		msoLightRigBrightRoom = 27,
	}

	enum MsoParagraphAlignment {
		msoAlignMixed = -2,
		msoAlignLeft = 1,
		msoAlignCenter = 2,
		msoAlignRight = 3,
		msoAlignJustify = 4,
		msoAlignDistribute = 5,
		msoAlignThaiDistribute = 6,
		msoAlignJustifyLow = 7,
	}

	enum MsoTextStrike {
		msoStrikeMixed = -2,
		msoNoStrike = 0,
		msoSingleStrike = 1,
		msoDoubleStrike = 2,
	}

	enum MsoTextCaps {
		msoCapsMixed = -2,
		msoNoCaps = 0,
		msoSmallCaps = 1,
		msoAllCaps = 2,
	}

	enum MsoTextUnderlineType {
		msoUnderlineMixed = -2,
		msoNoUnderline = 0,
		msoUnderlineWords = 1,
		msoUnderlineSingleLine = 2,
		msoUnderlineDoubleLine = 3,
		msoUnderlineHeavyLine = 4,
		msoUnderlineDottedLine = 5,
		msoUnderlineDottedHeavyLine = 6,
		msoUnderlineDashLine = 7,
		msoUnderlineDashHeavyLine = 8,
		msoUnderlineDashLongLine = 9,
		msoUnderlineDashLongHeavyLine = 10,
		msoUnderlineDotDashLine = 11,
		msoUnderlineDotDashHeavyLine = 12,
		msoUnderlineDotDotDashLine = 13,
		msoUnderlineDotDotDashHeavyLine = 14,
		msoUnderlineWavyLine = 15,
		msoUnderlineWavyHeavyLine = 16,
		msoUnderlineWavyDoubleLine = 17,
	}

	enum MsoTextTabAlign {
		msoTabAlignMixed = -2,
		msoTabAlignLeft = 0,
		msoTabAlignCenter = 1,
		msoTabAlignRight = 2,
		msoTabAlignDecimal = 3,
	}

	enum MsoTextCharWrap {
		msoCharWrapMixed = -2,
		msoNoCharWrap = 0,
		msoStandardCharWrap = 1,
		msoStrictCharWrap = 2,
		msoCustomCharWrap = 3,
	}

	enum MsoTextFontAlign {
		msoFontAlignMixed = -2,
		msoFontAlignAuto = 0,
		msoFontAlignTop = 1,
		msoFontAlignCenter = 2,
		msoFontAlignBaseline = 3,
		msoFontAlignBottom = 4,
	}

	enum MsoAutoSize {
		msoAutoSizeMixed = -2,
		msoAutoSizeNone = 0,
		msoAutoSizeShapeToFitText = 1,
		msoAutoSizeTextToFitShape = 2,
	}

	enum MsoPathFormat {
		msoPathTypeMixed = -2,
		msoPathTypeNone = 0,
		msoPathType1 = 1,
		msoPathType2 = 2,
		msoPathType3 = 3,
		msoPathType4 = 4,
	}

	enum MsoWarpFormat {
		msoWarpFormatMixed = -2,
		msoWarpFormat1 = 0,
		msoWarpFormat2 = 1,
		msoWarpFormat3 = 2,
		msoWarpFormat4 = 3,
		msoWarpFormat5 = 4,
		msoWarpFormat6 = 5,
		msoWarpFormat7 = 6,
		msoWarpFormat8 = 7,
		msoWarpFormat9 = 8,
		msoWarpFormat10 = 9,
		msoWarpFormat11 = 10,
		msoWarpFormat12 = 11,
		msoWarpFormat13 = 12,
		msoWarpFormat14 = 13,
		msoWarpFormat15 = 14,
		msoWarpFormat16 = 15,
		msoWarpFormat17 = 16,
		msoWarpFormat18 = 17,
		msoWarpFormat19 = 18,
		msoWarpFormat20 = 19,
		msoWarpFormat21 = 20,
		msoWarpFormat22 = 21,
		msoWarpFormat23 = 22,
		msoWarpFormat24 = 23,
		msoWarpFormat25 = 24,
		msoWarpFormat26 = 25,
		msoWarpFormat27 = 26,
		msoWarpFormat28 = 27,
		msoWarpFormat29 = 28,
		msoWarpFormat30 = 29,
		msoWarpFormat31 = 30,
		msoWarpFormat32 = 31,
		msoWarpFormat33 = 32,
		msoWarpFormat34 = 33,
		msoWarpFormat35 = 34,
		msoWarpFormat36 = 35,
		msoWarpFormat37 = 36,
	}

	enum MsoTextChangeCase {
		msoCaseSentence = 1,
		msoCaseLower = 2,
		msoCaseUpper = 3,
		msoCaseTitle = 4,
		msoCaseToggle = 5,
	}

	enum MsoDateTimeFormat {
		msoDateTimeFormatMixed = -2,
		msoDateTimeMdyy = 1,
		msoDateTimeddddMMMMddyyyy = 2,
		msoDateTimedMMMMyyyy = 3,
		msoDateTimeMMMMdyyyy = 4,
		msoDateTimedMMMyy = 5,
		msoDateTimeMMMMyy = 6,
		msoDateTimeMMyy = 7,
		msoDateTimeMMddyyHmm = 8,
		msoDateTimeMMddyyhmmAMPM = 9,
		msoDateTimeHmm = 10,
		msoDateTimeHmmss = 11,
		msoDateTimehmmAMPM = 12,
		msoDateTimehmmssAMPM = 13,
		msoDateTimeFigureOut = 14,
	}

	enum MsoThemeColorSchemeIndex {
		msoThemeDark1 = 1,
		msoThemeLight1 = 2,
		msoThemeDark2 = 3,
		msoThemeLight2 = 4,
		msoThemeAccent1 = 5,
		msoThemeAccent2 = 6,
		msoThemeAccent3 = 7,
		msoThemeAccent4 = 8,
		msoThemeAccent5 = 9,
		msoThemeAccent6 = 10,
		msoThemeHyperlink = 11,
		msoThemeFollowedHyperlink = 12,
	}

	enum MsoThemeColorIndex {
		msoThemeColorMixed = -2,
		msoNotThemeColor = 0,
		msoThemeColorDark1 = 1,
		msoThemeColorLight1 = 2,
		msoThemeColorDark2 = 3,
		msoThemeColorLight2 = 4,
		msoThemeColorAccent1 = 5,
		msoThemeColorAccent2 = 6,
		msoThemeColorAccent3 = 7,
		msoThemeColorAccent4 = 8,
		msoThemeColorAccent5 = 9,
		msoThemeColorAccent6 = 10,
		msoThemeColorHyperlink = 11,
		msoThemeColorFollowedHyperlink = 12,
		msoThemeColorText1 = 13,
		msoThemeColorBackground1 = 14,
		msoThemeColorText2 = 15,
		msoThemeColorBackground2 = 16,
	}

	enum MsoFontLanguageIndex {
		msoThemeLatin = 1,
		msoThemeComplexScript = 2,
		msoThemeEastAsian = 3,
	}

	enum MsoShapeStyleIndex {
		msoShapeStyleMixed = -2,
		msoShapeStyleNotAPreset = 0,
		msoShapeStylePreset1 = 1,
		msoShapeStylePreset2 = 2,
		msoShapeStylePreset3 = 3,
		msoShapeStylePreset4 = 4,
		msoShapeStylePreset5 = 5,
		msoShapeStylePreset6 = 6,
		msoShapeStylePreset7 = 7,
		msoShapeStylePreset8 = 8,
		msoShapeStylePreset9 = 9,
		msoShapeStylePreset10 = 10,
		msoShapeStylePreset11 = 11,
		msoShapeStylePreset12 = 12,
		msoShapeStylePreset13 = 13,
		msoShapeStylePreset14 = 14,
		msoShapeStylePreset15 = 15,
		msoShapeStylePreset16 = 16,
		msoShapeStylePreset17 = 17,
		msoShapeStylePreset18 = 18,
		msoShapeStylePreset19 = 19,
		msoShapeStylePreset20 = 20,
		msoShapeStylePreset21 = 21,
		msoShapeStylePreset22 = 22,
		msoShapeStylePreset23 = 23,
		msoShapeStylePreset24 = 24,
		msoShapeStylePreset25 = 25,
		msoShapeStylePreset26 = 26,
		msoShapeStylePreset27 = 27,
		msoShapeStylePreset28 = 28,
		msoShapeStylePreset29 = 29,
		msoShapeStylePreset30 = 30,
		msoShapeStylePreset31 = 31,
		msoShapeStylePreset32 = 32,
		msoShapeStylePreset33 = 33,
		msoShapeStylePreset34 = 34,
		msoShapeStylePreset35 = 35,
		msoShapeStylePreset36 = 36,
		msoShapeStylePreset37 = 37,
		msoShapeStylePreset38 = 38,
		msoShapeStylePreset39 = 39,
		msoShapeStylePreset40 = 40,
		msoShapeStylePreset41 = 41,
		msoShapeStylePreset42 = 42,
		msoLineStylePreset1 = 10001,
		msoLineStylePreset2 = 10002,
		msoLineStylePreset3 = 10003,
		msoLineStylePreset4 = 10004,
		msoLineStylePreset5 = 10005,
		msoLineStylePreset6 = 10006,
		msoLineStylePreset7 = 10007,
		msoLineStylePreset8 = 10008,
		msoLineStylePreset9 = 10009,
		msoLineStylePreset10 = 10010,
		msoLineStylePreset11 = 10011,
		msoLineStylePreset12 = 10012,
		msoLineStylePreset13 = 10013,
		msoLineStylePreset14 = 10014,
		msoLineStylePreset15 = 10015,
		msoLineStylePreset16 = 10016,
		msoLineStylePreset17 = 10017,
		msoLineStylePreset18 = 10018,
		msoLineStylePreset19 = 10019,
		msoLineStylePreset20 = 10020,
		msoLineStylePreset21 = 10021,
	}

	enum MsoBackgroundStyleIndex {
		msoBackgroundStyleMixed = -2,
		msoBackgroundStyleNotAPreset = 0,
		msoBackgroundStylePreset1 = 1,
		msoBackgroundStylePreset2 = 2,
		msoBackgroundStylePreset3 = 3,
		msoBackgroundStylePreset4 = 4,
		msoBackgroundStylePreset5 = 5,
		msoBackgroundStylePreset6 = 6,
		msoBackgroundStylePreset7 = 7,
		msoBackgroundStylePreset8 = 8,
		msoBackgroundStylePreset9 = 9,
		msoBackgroundStylePreset10 = 10,
		msoBackgroundStylePreset11 = 11,
		msoBackgroundStylePreset12 = 12,
	}

	enum MsoCTPDockPosition {
		msoCTPDockPositionLeft = 0,
		msoCTPDockPositionTop = 1,
		msoCTPDockPositionRight = 2,
		msoCTPDockPositionBottom = 3,
		msoCTPDockPositionFloating = 4,
	}

	enum MsoCTPDockPositionRestrict {
		msoCTPDockPositionRestrictNone = 0,
		msoCTPDockPositionRestrictNoChange = 1,
		msoCTPDockPositionRestrictNoHorizontal = 2,
		msoCTPDockPositionRestrictNoVertical = 3,
	}

	enum RibbonControlSize {
		RibbonControlSizeRegular = 0,
		RibbonControlSizeLarge = 1,
	}

	enum MsoShadowStyle {
		msoShadowStyleMixed = -2,
		msoShadowStyleInnerShadow = 1,
		msoShadowStyleOuterShadow = 2,
	}

	enum MsoTextDirection {
		msoTextDirectionMixed = -2,
		msoTextDirectionLeftToRight = 1,
		msoTextDirectionRightToLeft = 2,
	}

	enum XlChartType {
		xlColumnClustered = 51,
		xlColumnStacked = 52,
		xlColumnStacked100 = 53,
		xl3DColumnClustered = 54,
		xl3DColumnStacked = 55,
		xl3DColumnStacked100 = 56,
		xlBarClustered = 57,
		xlBarStacked = 58,
		xlBarStacked100 = 59,
		xl3DBarClustered = 60,
		xl3DBarStacked = 61,
		xl3DBarStacked100 = 62,
		xlLineStacked = 63,
		xlLineStacked100 = 64,
		xlLineMarkers = 65,
		xlLineMarkersStacked = 66,
		xlLineMarkersStacked100 = 67,
		xlPieOfPie = 68,
		xlPieExploded = 69,
		xl3DPieExploded = 70,
		xlBarOfPie = 71,
		xlXYScatterSmooth = 72,
		xlXYScatterSmoothNoMarkers = 73,
		xlXYScatterLines = 74,
		xlXYScatterLinesNoMarkers = 75,
		xlAreaStacked = 76,
		xlAreaStacked100 = 77,
		xl3DAreaStacked = 78,
		xl3DAreaStacked100 = 79,
		xlDoughnutExploded = 80,
		xlRadarMarkers = 81,
		xlRadarFilled = 82,
		xlSurface = 83,
		xlSurfaceWireframe = 84,
		xlSurfaceTopView = 85,
		xlSurfaceTopViewWireframe = 86,
		xlBubble = 15,
		xlBubble3DEffect = 87,
		xlStockHLC = 88,
		xlStockOHLC = 89,
		xlStockVHLC = 90,
		xlStockVOHLC = 91,
		xlCylinderColClustered = 92,
		xlCylinderColStacked = 93,
		xlCylinderColStacked100 = 94,
		xlCylinderBarClustered = 95,
		xlCylinderBarStacked = 96,
		xlCylinderBarStacked100 = 97,
		xlCylinderCol = 98,
		xlConeColClustered = 99,
		xlConeColStacked = 100,
		xlConeColStacked100 = 101,
		xlConeBarClustered = 102,
		xlConeBarStacked = 103,
		xlConeBarStacked100 = 104,
		xlConeCol = 105,
		xlPyramidColClustered = 106,
		xlPyramidColStacked = 107,
		xlPyramidColStacked100 = 108,
		xlPyramidBarClustered = 109,
		xlPyramidBarStacked = 110,
		xlPyramidBarStacked100 = 111,
		xlPyramidCol = 112,
		xl3DColumn = -4100,
		xlLine = 4,
		xl3DLine = -4101,
		xl3DPie = -4102,
		xlPie = 5,
		xlXYScatter = -4169,
		xl3DArea = -4098,
		xlArea = 1,
		xlDoughnut = -4120,
		xlRadar = -4151,
		xlCombo = -4152,
		xlComboColumnClusteredLine = 113,
		xlComboColumnClusteredLineSecondaryAxis = 114,
		xlComboAreaStackedColumnClustered = 115,
		xlOtherCombinations = 116,
		xlSuggestedChart = -2,
	}

	enum XlChartSplitType {
		xlSplitByPosition = 1,
		xlSplitByPercentValue = 3,
		xlSplitByCustomSplit = 4,
		xlSplitByValue = 2,
	}

	enum XlSizeRepresents {
		xlSizeIsWidth = 2,
		xlSizeIsArea = 1,
	}

	enum XlAxisGroup {
		xlPrimary = 1,
		xlSecondary = 2,
	}

	enum XlConstants {
		xlAutomatic = -4105,
		xlCombination = -4111,
		xlCustom = -4114,
		xlBar = 2,
		xlColumn = 3,
		xl3DBar = -4099,
		xl3DSurface = -4103,
		xlDefaultAutoFormat = -1,
		xlNone = -4142,
		xlAbove = 0,
		xlBelow = 1,
		xlBoth = 1,
		xlBottom = -4107,
		xlCenter = -4108,
		xlChecker = 9,
		xlCircle = 8,
		xlCorner = 2,
		xlCrissCross = 16,
		xlCross = 4,
		xlDiamond = 2,
		xlDistributed = -4117,
		xlFill = 5,
		xlFixedValue = 1,
		xlGeneral = 1,
		xlGray16 = 17,
		xlGray25 = -4124,
		xlGray50 = -4125,
		xlGray75 = -4126,
		xlGray8 = 18,
		xlGrid = 15,
		xlHigh = -4127,
		xlInside = 2,
		xlJustify = -4130,
		xlLeft = -4131,
		xlLightDown = 13,
		xlLightHorizontal = 11,
		xlLightUp = 14,
		xlLightVertical = 12,
		xlLow = -4134,
		xlMaximum = 2,
		xlMinimum = 4,
		xlMinusValues = 3,
		xlNextToAxis = 4,
		xlOpaque = 3,
		xlOutside = 3,
		xlPercent = 2,
		xlPlus = 9,
		xlPlusValues = 2,
		xlRight = -4152,
		xlScale = 3,
		xlSemiGray75 = 10,
		xlShowLabel = 4,
		xlShowLabelAndPercent = 5,
		xlShowPercent = 3,
		xlShowValue = 2,
		xlSingle = 2,
		xlSolid = 1,
		xlSquare = 1,
		xlStar = 5,
		xlStError = 4,
		xlTop = -4160,
		xlTransparent = 2,
		xlTriangle = 3,
	}

	enum XlReadingOrder {
		xlContext = -5002,
		xlLTR = -5003,
		xlRTL = -5004,
	}

	enum XlBorderWeight {
		xlHairline = 1,
		xlMedium = -4138,
		xlThick = 4,
		xlThin = 2,
	}

	enum XlLegendPosition {
		xlLegendPositionBottom = -4107,
		xlLegendPositionCorner = 2,
		xlLegendPositionLeft = -4131,
		xlLegendPositionRight = -4152,
		xlLegendPositionTop = -4160,
		xlLegendPositionCustom = -4161,
	}

	enum XlUnderlineStyle {
		xlUnderlineStyleDouble = -4119,
		xlUnderlineStyleDoubleAccounting = 5,
		xlUnderlineStyleNone = -4142,
		xlUnderlineStyleSingle = 2,
		xlUnderlineStyleSingleAccounting = 4,
	}

	enum XlColorIndex {
		xlColorIndexAutomatic = -4105,
		xlColorIndexNone = -4142,
	}

	enum XlMarkerStyle {
		xlMarkerStyleAutomatic = -4105,
		xlMarkerStyleCircle = 8,
		xlMarkerStyleDash = -4115,
		xlMarkerStyleDiamond = 2,
		xlMarkerStyleDot = -4118,
		xlMarkerStyleNone = -4142,
		xlMarkerStylePicture = -4147,
		xlMarkerStylePlus = 9,
		xlMarkerStyleSquare = 1,
		xlMarkerStyleStar = 5,
		xlMarkerStyleTriangle = 3,
		xlMarkerStyleX = -4168,
	}

	enum XlRowCol {
		xlColumns = 2,
		xlRows = 1,
	}

	enum XlDataLabelsType {
		xlDataLabelsShowNone = -4142,
		xlDataLabelsShowValue = 2,
		xlDataLabelsShowPercent = 3,
		xlDataLabelsShowLabel = 4,
		xlDataLabelsShowLabelAndPercent = 5,
		xlDataLabelsShowBubbleSizes = 6,
	}

	enum XlErrorBarInclude {
		xlErrorBarIncludeBoth = 1,
		xlErrorBarIncludeMinusValues = 3,
		xlErrorBarIncludeNone = -4142,
		xlErrorBarIncludePlusValues = 2,
	}

	enum XlErrorBarType {
		xlErrorBarTypeCustom = -4114,
		xlErrorBarTypeFixedValue = 1,
		xlErrorBarTypePercent = 2,
		xlErrorBarTypeStDev = -4155,
		xlErrorBarTypeStError = 4,
	}

	enum XlErrorBarDirection {
		xlChartX = -4168,
		xlChartY = 1,
	}

	enum XlChartPictureType {
		xlStackScale = 3,
		xlStack = 2,
		xlStretch = 1,
	}

	enum XlChartItem {
		xlDataLabel = 0,
		xlChartArea = 2,
		xlSeries = 3,
		xlChartTitle = 4,
		xlWalls = 5,
		xlCorners = 6,
		xlDataTable = 7,
		xlTrendline = 8,
		xlErrorBars = 9,
		xlXErrorBars = 10,
		xlYErrorBars = 11,
		xlLegendEntry = 12,
		xlLegendKey = 13,
		xlShape = 14,
		xlMajorGridlines = 15,
		xlMinorGridlines = 16,
		xlAxisTitle = 17,
		xlUpBars = 18,
		xlPlotArea = 19,
		xlDownBars = 20,
		xlAxis = 21,
		xlSeriesLines = 22,
		xlFloor = 23,
		xlLegend = 24,
		xlHiLoLines = 25,
		xlDropLines = 26,
		xlRadarAxisLabels = 27,
		xlNothing = 28,
		xlLeaderLines = 29,
		xlDisplayUnitLabel = 30,
		xlPivotChartFieldButton = 31,
		xlPivotChartDropZone = 32,
	}

	enum XlBarShape {
		xlBox = 0,
		xlPyramidToPoint = 1,
		xlPyramidToMax = 2,
		xlCylinder = 3,
		xlConeToPoint = 4,
		xlConeToMax = 5,
	}

	enum XlEndStyleCap {
		xlCap = 1,
		xlNoCap = 2,
	}

	enum XlTrendlineType {
		xlExponential = 5,
		xlLinear = -4132,
		xlLogarithmic = -4133,
		xlMovingAvg = 6,
		xlPolynomial = 3,
		xlPower = 4,
	}

	enum XlAxisType {
		xlCategory = 1,
		xlSeriesAxis = 3,
		xlValue = 2,
	}

	enum XlAxisCrosses {
		xlAxisCrossesAutomatic = -4105,
		xlAxisCrossesCustom = -4114,
		xlAxisCrossesMaximum = 2,
		xlAxisCrossesMinimum = 4,
	}

	enum XlTickMark {
		xlTickMarkCross = 4,
		xlTickMarkInside = 2,
		xlTickMarkNone = -4142,
		xlTickMarkOutside = 3,
	}

	enum XlScaleType {
		xlScaleLinear = -4132,
		xlScaleLogarithmic = -4133,
	}

	enum XlTickLabelPosition {
		xlTickLabelPositionHigh = -4127,
		xlTickLabelPositionLow = -4134,
		xlTickLabelPositionNextToAxis = 4,
		xlTickLabelPositionNone = -4142,
	}

	enum XlTimeUnit {
		xlDays = 0,
		xlMonths = 1,
		xlYears = 2,
	}

	enum XlCategoryType {
		xlCategoryScale = 2,
		xlTimeScale = 3,
		xlAutomaticScale = -4105,
	}

	enum XlDisplayUnit {
		xlHundreds = -2,
		xlThousands = -3,
		xlTenThousands = -4,
		xlHundredThousands = -5,
		xlMillions = -6,
		xlTenMillions = -7,
		xlHundredMillions = -8,
		xlThousandMillions = -9,
		xlMillionMillions = -10,
		xlDisplayUnitCustom = -4114,
		xlDisplayUnitNone = -4142,
	}

	enum XlChartOrientation {
		xlDownward = -4170,
		xlHorizontal = -4128,
		xlUpward = -4171,
		xlVertical = -4166,
	}

	enum XlTickLabelOrientation {
		xlTickLabelOrientationAutomatic = -4105,
		xlTickLabelOrientationDownward = -4170,
		xlTickLabelOrientationHorizontal = -4128,
		xlTickLabelOrientationUpward = -4171,
		xlTickLabelOrientationVertical = -4166,
	}

	enum XlDisplayBlanksAs {
		xlInterpolated = 3,
		xlNotPlotted = 1,
		xlZero = 2,
	}

	enum XlDataLabelPosition {
		xlLabelPositionCenter = -4108,
		xlLabelPositionAbove = 0,
		xlLabelPositionBelow = 1,
		xlLabelPositionLeft = -4131,
		xlLabelPositionRight = -4152,
		xlLabelPositionOutsideEnd = 2,
		xlLabelPositionInsideEnd = 3,
		xlLabelPositionInsideBase = 4,
		xlLabelPositionBestFit = 5,
		xlLabelPositionMixed = 6,
		xlLabelPositionCustom = 7,
	}

	enum XlPivotFieldOrientation {
		xlColumnField = 2,
		xlDataField = 4,
		xlHidden = 0,
		xlPageField = 3,
		xlRowField = 1,
	}

	enum XlHAlign {
		xlHAlignCenter = -4108,
		xlHAlignCenterAcrossSelection = 7,
		xlHAlignDistributed = -4117,
		xlHAlignFill = 5,
		xlHAlignGeneral = 1,
		xlHAlignJustify = -4130,
		xlHAlignLeft = -4131,
		xlHAlignRight = -4152,
	}

	enum XlVAlign {
		xlVAlignBottom = -4107,
		xlVAlignCenter = -4108,
		xlVAlignDistributed = -4117,
		xlVAlignJustify = -4130,
		xlVAlignTop = -4160,
	}

	enum XlChartElementPosition {
		xlChartElementPositionAutomatic = -4105,
		xlChartElementPositionCustom = -4114,
	}

	enum MsoChartElementType {
		msoElementChartTitleNone = 0,
		msoElementChartTitleCenteredOverlay = 1,
		msoElementChartTitleAboveChart = 2,
		msoElementLegendNone = 100,
		msoElementLegendRight = 101,
		msoElementLegendTop = 102,
		msoElementLegendLeft = 103,
		msoElementLegendBottom = 104,
		msoElementLegendRightOverlay = 105,
		msoElementLegendLeftOverlay = 106,
		msoElementDataLabelNone = 200,
		msoElementDataLabelShow = 201,
		msoElementDataLabelCenter = 202,
		msoElementDataLabelInsideEnd = 203,
		msoElementDataLabelInsideBase = 204,
		msoElementDataLabelOutSideEnd = 205,
		msoElementDataLabelLeft = 206,
		msoElementDataLabelRight = 207,
		msoElementDataLabelTop = 208,
		msoElementDataLabelBottom = 209,
		msoElementDataLabelBestFit = 210,
		msoElementDataLabelCallout = 211,
		msoElementPrimaryCategoryAxisTitleNone = 300,
		msoElementPrimaryCategoryAxisTitleAdjacentToAxis = 301,
		msoElementPrimaryCategoryAxisTitleBelowAxis = 302,
		msoElementPrimaryCategoryAxisTitleRotated = 303,
		msoElementPrimaryCategoryAxisTitleVertical = 304,
		msoElementPrimaryCategoryAxisTitleHorizontal = 305,
		msoElementPrimaryValueAxisTitleNone = 306,
		msoElementPrimaryValueAxisTitleAdjacentToAxis = 306,
		msoElementPrimaryValueAxisTitleBelowAxis = 308,
		msoElementPrimaryValueAxisTitleRotated = 309,
		msoElementPrimaryValueAxisTitleVertical = 310,
		msoElementPrimaryValueAxisTitleHorizontal = 311,
		msoElementSecondaryCategoryAxisTitleNone = 312,
		msoElementSecondaryCategoryAxisTitleAdjacentToAxis = 313,
		msoElementSecondaryCategoryAxisTitleBelowAxis = 314,
		msoElementSecondaryCategoryAxisTitleRotated = 315,
		msoElementSecondaryCategoryAxisTitleVertical = 316,
		msoElementSecondaryCategoryAxisTitleHorizontal = 317,
		msoElementSecondaryValueAxisTitleNone = 318,
		msoElementSecondaryValueAxisTitleAdjacentToAxis = 319,
		msoElementSecondaryValueAxisTitleBelowAxis = 320,
		msoElementSecondaryValueAxisTitleRotated = 321,
		msoElementSecondaryValueAxisTitleVertical = 322,
		msoElementSecondaryValueAxisTitleHorizontal = 323,
		msoElementSeriesAxisTitleNone = 324,
		msoElementSeriesAxisTitleRotated = 325,
		msoElementSeriesAxisTitleVertical = 326,
		msoElementSeriesAxisTitleHorizontal = 327,
		msoElementPrimaryValueGridLinesNone = 328,
		msoElementPrimaryValueGridLinesMinor = 329,
		msoElementPrimaryValueGridLinesMajor = 330,
		msoElementPrimaryValueGridLinesMinorMajor = 331,
		msoElementPrimaryCategoryGridLinesNone = 332,
		msoElementPrimaryCategoryGridLinesMinor = 333,
		msoElementPrimaryCategoryGridLinesMajor = 334,
		msoElementPrimaryCategoryGridLinesMinorMajor = 335,
		msoElementSecondaryValueGridLinesNone = 336,
		msoElementSecondaryValueGridLinesMinor = 337,
		msoElementSecondaryValueGridLinesMajor = 338,
		msoElementSecondaryValueGridLinesMinorMajor = 339,
		msoElementSecondaryCategoryGridLinesNone = 340,
		msoElementSecondaryCategoryGridLinesMinor = 341,
		msoElementSecondaryCategoryGridLinesMajor = 342,
		msoElementSecondaryCategoryGridLinesMinorMajor = 343,
		msoElementSeriesAxisGridLinesNone = 344,
		msoElementSeriesAxisGridLinesMinor = 345,
		msoElementSeriesAxisGridLinesMajor = 346,
		msoElementSeriesAxisGridLinesMinorMajor = 347,
		msoElementPrimaryCategoryAxisNone = 348,
		msoElementPrimaryCategoryAxisShow = 349,
		msoElementPrimaryCategoryAxisWithoutLabels = 350,
		msoElementPrimaryCategoryAxisReverse = 351,
		msoElementPrimaryValueAxisNone = 352,
		msoElementPrimaryValueAxisShow = 353,
		msoElementPrimaryValueAxisThousands = 354,
		msoElementPrimaryValueAxisMillions = 355,
		msoElementPrimaryValueAxisBillions = 356,
		msoElementPrimaryValueAxisLogScale = 357,
		msoElementSecondaryCategoryAxisNone = 358,
		msoElementSecondaryCategoryAxisShow = 359,
		msoElementSecondaryCategoryAxisWithoutLabels = 360,
		msoElementSecondaryCategoryAxisReverse = 361,
		msoElementSecondaryValueAxisNone = 362,
		msoElementSecondaryValueAxisShow = 363,
		msoElementSecondaryValueAxisThousands = 364,
		msoElementSecondaryValueAxisMillions = 365,
		msoElementSecondaryValueAxisBillions = 366,
		msoElementSecondaryValueAxisLogScale = 367,
		msoElementSeriesAxisNone = 368,
		msoElementSeriesAxisShow = 369,
		msoElementSeriesAxisWithoutLabeling = 370,
		msoElementSeriesAxisReverse = 371,
		msoElementPrimaryCategoryAxisThousands = 372,
		msoElementPrimaryCategoryAxisMillions = 373,
		msoElementPrimaryCategoryAxisBillions = 374,
		msoElementPrimaryCategoryAxisLogScale = 375,
		msoElementSecondaryCategoryAxisThousands = 376,
		msoElementSecondaryCategoryAxisMillions = 377,
		msoElementSecondaryCategoryAxisBillions = 378,
		msoElementSecondaryCategoryAxisLogScale = 379,
		msoElementDataTableNone = 500,
		msoElementDataTableShow = 501,
		msoElementDataTableWithLegendKeys = 502,
		msoElementTrendlineNone = 600,
		msoElementTrendlineAddLinear = 601,
		msoElementTrendlineAddExponential = 602,
		msoElementTrendlineAddLinearForecast = 603,
		msoElementTrendlineAddTwoPeriodMovingAverage = 604,
		msoElementErrorBarNone = 700,
		msoElementErrorBarStandardError = 701,
		msoElementErrorBarPercentage = 702,
		msoElementErrorBarStandardDeviation = 703,
		msoElementLineNone = 800,
		msoElementLineDropLine = 801,
		msoElementLineHiLoLine = 802,
		msoElementLineSeriesLine = 803,
		msoElementLineDropHiLoLine = 804,
		msoElementUpDownBarsNone = 900,
		msoElementUpDownBarsShow = 901,
		msoElementPlotAreaNone = 1000,
		msoElementPlotAreaShow = 1001,
		msoElementChartWallNone = 1100,
		msoElementChartWallShow = 1101,
		msoElementChartFloorNone = 1200,
		msoElementChartFloorShow = 1201,
	}

	enum MsoBulletType {
		msoBulletMixed = -2,
		msoBulletNone = 0,
		msoBulletUnnumbered = 1,
		msoBulletNumbered = 2,
		msoBulletPicture = 3,
	}

	enum MsoNumberedBulletStyle {
		msoBulletStyleMixed = -2,
		msoBulletAlphaLCPeriod = 0,
		msoBulletAlphaUCPeriod = 1,
		msoBulletArabicParenRight = 2,
		msoBulletArabicPeriod = 3,
		msoBulletRomanLCParenBoth = 4,
		msoBulletRomanLCParenRight = 5,
		msoBulletRomanLCPeriod = 6,
		msoBulletRomanUCPeriod = 7,
		msoBulletAlphaLCParenBoth = 8,
		msoBulletAlphaLCParenRight = 9,
		msoBulletAlphaUCParenBoth = 10,
		msoBulletAlphaUCParenRight = 11,
		msoBulletArabicParenBoth = 12,
		msoBulletArabicPlain = 13,
		msoBulletRomanUCParenBoth = 14,
		msoBulletRomanUCParenRight = 15,
		msoBulletSimpChinPlain = 16,
		msoBulletSimpChinPeriod = 17,
		msoBulletCircleNumDBPlain = 18,
		msoBulletCircleNumWDWhitePlain = 19,
		msoBulletCircleNumWDBlackPlain = 20,
		msoBulletTradChinPlain = 21,
		msoBulletTradChinPeriod = 22,
		msoBulletArabicAlphaDash = 23,
		msoBulletArabicAbjadDash = 24,
		msoBulletHebrewAlphaDash = 25,
		msoBulletKanjiKoreanPlain = 26,
		msoBulletKanjiKoreanPeriod = 27,
		msoBulletArabicDBPlain = 28,
		msoBulletArabicDBPeriod = 29,
		msoBulletThaiAlphaPeriod = 30,
		msoBulletThaiAlphaParenRight = 31,
		msoBulletThaiAlphaParenBoth = 32,
		msoBulletThaiNumPeriod = 33,
		msoBulletThaiNumParenRight = 34,
		msoBulletThaiNumParenBoth = 35,
		msoBulletHindiAlphaPeriod = 36,
		msoBulletHindiNumPeriod = 37,
		msoBulletKanjiSimpChinDBPeriod = 38,
		msoBulletHindiNumParenRight = 39,
		msoBulletHindiAlpha1Period = 40,
	}

	enum MsoTabStopType {
		msoTabStopMixed = -2,
		msoTabStopLeft = 1,
		msoTabStopCenter = 2,
		msoTabStopRight = 3,
		msoTabStopDecimal = 4,
	}

	enum MsoBaselineAlignment {
		msoBaselineAlignMixed = -2,
		msoBaselineAlignBaseline = 1,
		msoBaselineAlignTop = 2,
		msoBaselineAlignCenter = 3,
		msoBaselineAlignFarEast50 = 4,
		msoBaselineAlignAuto = 5,
	}

	enum EncryptionProviderDetail {
		encprovdetUrl = 0,
		encprovdetAlgorithm = 1,
		encprovdetBlockCipher = 2,
		encprovdetCipherBlockSize = 3,
		encprovdetCipherMode = 4,
	}

	enum EncryptionCipherMode {
		cipherModeECB = 0,
		cipherModeCBC = 1,
	}

	enum MsoClipboardFormat {
		msoClipboardFormatMixed = -2,
		msoClipboardFormatNative = 1,
		msoClipboardFormatHTML = 2,
		msoClipboardFormatRTF = 3,
		msoClipboardFormatPlainText = 4,
	}

	enum MsoBlogCategorySupport {
		msoBlogNoCategories = 0,
		msoBlogOneCategory = 1,
		msoBlogMultipleCategories = 2,
	}

	enum MsoBlogImageType {
		msoblogImageTypeJPEG = 1,
		msoblogImageTypeGIF = 2,
		msoblogImageTypePNG = 3,
	}

	enum XlPieSliceLocation {
		xlHorizontalCoordinate = 1,
		xlVerticalCoordinate = 2,
	}

	enum XlPieSliceIndex {
		xlOuterCounterClockwisePoint = 1,
		xlOuterCenterPoint = 2,
		xlOuterClockwisePoint = 3,
		xlMidClockwiseRadiusPoint = 4,
		xlCenterPoint = 5,
		xlMidCounterClockwiseRadiusPoint = 6,
		xlInnerClockwisePoint = 7,
		xlInnerCenterPoint = 8,
		xlInnerCounterClockwisePoint = 9,
	}

	enum MsoSmartArtNodePosition {
		msoSmartArtNodeDefault = 1,
		msoSmartArtNodeAfter = 2,
		msoSmartArtNodeBefore = 3,
		msoSmartArtNodeAbove = 4,
		msoSmartArtNodeBelow = 5,
	}

	enum MsoSmartArtNodeType {
		msoSmartArtNodeTypeDefault = 1,
		msoSmartArtNodeTypeAssistant = 2,
	}

	enum MsoPickerField {
		msoPickerFieldUnknown = 0,
		msoPickerFieldDateTime = 1,
		msoPickerFieldNumber = 2,
		msoPickerFieldText = 3,
		msoPickerFieldUser = 4,
		msoPickerFieldMax = 5,
	}

	enum MsoContactCardAddressType {
		msoContactCardAddressTypeUnknown = 0,
		msoContactCardAddressTypeOutlook = 1,
		msoContactCardAddressTypeSMTP = 2,
		msoContactCardAddressTypeIM = 3,
	}

	enum MsoContactCardType {
		msoContactCardTypeEnterpriseContact = 0,
		msoContactCardTypePersonalContact = 1,
		msoContactCardTypeUnknownContact = 2,
		msoContactCardTypeEnterpriseGroup = 3,
		msoContactCardTypePersonalDistributionList = 4,
	}

	enum MsoPictureEffectType {
		msoEffectNone = 0,
		msoEffectBackgroundRemoval = 1,
		msoEffectBlur = 2,
		msoEffectBrightnessContrast = 3,
		msoEffectCement = 4,
		msoEffectCrisscrossEtching = 5,
		msoEffectChalkSketch = 6,
		msoEffectColorTemperature = 7,
		msoEffectCutout = 8,
		msoEffectFilmGrain = 9,
		msoEffectGlass = 10,
		msoEffectGlowDiffused = 11,
		msoEffectGlowEdges = 12,
		msoEffectLightScreen = 13,
		msoEffectLineDrawing = 14,
		msoEffectMarker = 15,
		msoEffectMosiaicBubbles = 16,
		msoEffectPaintBrush = 17,
		msoEffectPaintStrokes = 18,
		msoEffectPastelsSmooth = 19,
		msoEffectPencilGrayscale = 20,
		msoEffectPencilSketch = 21,
		msoEffectPhotocopy = 22,
		msoEffectPlasticWrap = 23,
		msoEffectSaturation = 24,
		msoEffectSharpenSoften = 25,
		msoEffectTexturizer = 26,
		msoEffectWatercolorSponge = 27,
	}

	enum MsoIodGroup {
		msoIodGroupPIAs = 0,
		msoIodGroupVSTOR35Mgd = 1,
		msoIodGroupVSTOR40Mgd = 2,
	}

	enum BackstageGroupStyle {
		BackstageGroupStyleNormal = 0,
		BackstageGroupStyleWarning = 1,
		BackstageGroupStyleError = 2,
	}

	enum MsoFileValidationMode {
		msoFileValidationDefault = 0,
		msoFileValidationSkip = 1,
	}

	enum MsoContactCardStyle {
		msoContactCardHover = 0,
		msoContactCardFull = 1,
	}

	enum MsoMergeCmd {
		msoMergeUnion = 1,
		msoMergeCombine = 2,
		msoMergeIntersect = 3,
		msoMergeSubtract = 4,
		msoMergeFragment = 5,
	}

	enum MsoLineCapStyle {
		msoLineCapMixed = -2,
		msoLineCapSquare = 1,
		msoLineCapRound = 2,
		msoLineCapFlat = 3,
	}

	enum MsoLineJoinStyle {
		msoLineJoinMixed = -2,
		msoLineJoinRound = 1,
		msoLineJoinBevel = 2,
		msoLineJoinMiter = 3,
	}

	enum MsoLineFillType {
		msoLineFillMixed = -2,
		msoLineFillNone = 0,
		msoLineFillSolid = 1,
		msoLineFillPatterned = 2,
		msoLineFillGradient = 3,
		msoLineFillTextured = 4,
		msoLineFillBackground = 5,
		msoLineFillPicture = 6,
	}

	enum MsoChartFieldType {
		msoChartFieldBubbleSize = 1,
		msoChartFieldCategoryName = 2,
		msoChartFieldPercentage = 3,
		msoChartFieldSeriesName = 4,
		msoChartFieldValue = 5,
		msoChartFieldFormula = 6,
		msoChartFieldRange = 7,
	}

	enum MsoBroadcastState {
		NoBroadcast = 0,
		BroadcastStarted = 1,
		BroadcastPaused = 2,
	}

	enum MsoBroadcastCapabilities {
		BroadcastCapFileSizeLimited = 1,
		BroadcastCapSupportsMeetingNotes = 2,
		BroadcastCapSupportsUpdateDoc = 4,
	}

	enum MsoPictureCompress {
		msoPictureCompressDocDefault = -1,
		msoPictureCompressFalse = 0,
		msoPictureCompressTrue = 1,
	}

	enum XlCategoryLabelLevel {
		xlCategoryLabelLevelNone = -3,
		xlCategoryLabelLevelCustom = -2,
		xlCategoryLabelLevelAll = -1,
	}

	enum XlSeriesNameLevel {
		xlSeriesNameLevelNone = -3,
		xlSeriesNameLevelCustom = -2,
		xlSeriesNameLevelAll = -1,
	}

	interface IAccessible {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
	}

	interface _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
	}

	interface _IMsoOleAccDispObj extends IAccessible {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
	}

	interface _CommandBars extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppcbc 
		 */
		readonly ActionControl: CommandBarControl;
		/**
		 * @returnParam ppcb 
		 */
		readonly ActiveMenuBar: CommandBar;
		/**
		 * @returnParam ppcb 
		 */
		Add(Name?: any, Position?: any, MenuBar?: any, Temporary?: any): CommandBar;
		/**
		 * @returnParam pcToolbars 
		 */
		readonly Count: int;
		/**
		 * @returnParam pvarfDisplayTooltips 
		 */
		DisplayTooltips: boolean;
		/**
		 * @returnParam pvarfDisplayKeys 
		 */
		DisplayKeysInTooltips: boolean;
		/**
		 * @returnParam ppcbc 
		 */
		FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any): CommandBarControl;
		/**
		 * @get 
		 * @returnParam ppcb 
		 */
		Item(Index: any): CommandBar;
		/**
		 * @returnParam pvarfLargeButtons 
		 */
		LargeButtons: boolean;
		/**
		 * @returnParam pma 
		 */
		MenuAnimationStyle: MsoMenuAnimation;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		ReleaseFocus(): void;
		/**
		 * @returnParam pvarfAdaptiveMenus 
		 */
		AdaptiveMenus: boolean;
		/**
		 * @returnParam ppcbcs 
		 */
		FindControls(Type?: any, Id?: any, Tag?: any, Visible?: any): CommandBarControls;
		/**
		 * @returnParam ppcb 
		 */
		AddEx(TbidOrName?: any, Position?: any, MenuBar?: any, Temporary?: any, TbtrProtection?: any): CommandBar;
		/**
		 * @returnParam pvarfDisplayFonts 
		 */
		DisplayFonts: boolean;
		/**
		 * @returnParam pvarfDisableCustomize 
		 */
		DisableCustomize: boolean;
		/**
		 * @returnParam pvarfDisableAskAQuestionDropdown 
		 */
		DisableAskAQuestionDropdown: boolean;
		ExecuteMso(idMso: string): void;
		/**
		 * @returnParam Enabled 
		 */
		GetEnabledMso(idMso: string): boolean;
		/**
		 * @returnParam Visible 
		 */
		GetVisibleMso(idMso: string): boolean;
		/**
		 * @returnParam Pressed 
		 */
		GetPressedMso(idMso: string): boolean;
		/**
		 * @returnParam Label 
		 */
		GetLabelMso(idMso: string): string;
		/**
		 * @returnParam Screentip 
		 */
		GetScreentipMso(idMso: string): string;
		/**
		 * @returnParam Supertip 
		 */
		GetSupertipMso(idMso: string): string;
		/**
		 * @returnParam Image 
		 */
		GetImageMso(idMso: string, Width: int, Height: int): IPictureDisp;
		CommitRenderingTransaction(hwnd: int4): void;
		SetEnabledMso(idMso: string, Enabled: boolean): void;
		SetVisibleMso(idMso: string, Visible: boolean): void;
		ExecuteMsoEx(idMso: string, prop: any): void;
	}

	interface CommandBarControl extends _IMsoOleAccDispObj {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBeginGroup 
		 */
		BeginGroup: boolean;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrCaption 
		 */
		Caption: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Control: IDispatch;
		/**
		 * @returnParam ppcbc 
		 */
		Copy(Bar?: any, Before?: any): CommandBarControl;
		Delete(Temporary?: any): void;
		/**
		 * @returnParam pbstrText 
		 */
		DescriptionText: string;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		Execute(): void;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pid 
		 */
		HelpContextId: int;
		/**
		 * @returnParam pbstrFilename 
		 */
		HelpFile: string;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Move(Bar?: any, Before?: any): CommandBarControl;
		/**
		 * @returnParam px 
		 */
		readonly Left: int;
		/**
		 * @returnParam pcou 
		 */
		OLEUsage: MsoControlOLEUsage;
		/**
		 * @returnParam pbstrOnAction 
		 */
		OnAction: string;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
		/**
		 * @returnParam pbstrParam 
		 */
		Parameter: string;
		/**
		 * @returnParam pnPri 
		 */
		Priority: int;
		Reset(): void;
		SetFocus(): void;
		/**
		 * @returnParam pbstrTag 
		 */
		Tag: string;
		/**
		 * @returnParam pbstrTooltip 
		 */
		TooltipText: string;
		/**
		 * @returnParam py 
		 */
		readonly Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoControlType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfDropped 
		 */
		readonly IsPriorityDropped: boolean;
		Reserved1(): void;
		Reserved2(): void;
		Reserved3(): void;
		Reserved4(): void;
		Reserved5(): void;
		Reserved6(): void;
		Reserved7(): void;
	}

	interface CommandBar extends _IMsoOleAccDispObj {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrContext 
		 */
		Context: string;
		/**
		 * @returnParam ppcbcs 
		 */
		readonly Controls: CommandBarControls;
		Delete(): void;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		/**
		 * @returnParam ppcbc 
		 */
		FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any, Recursive?: any): CommandBarControl;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam pxpLeft 
		 */
		Left: int;
		/**
		 * @returnParam pbstrName 
		 */
		Name: string;
		/**
		 * @returnParam pbstrNameLocal 
		 */
		NameLocal: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppos 
		 */
		Position: MsoBarPosition;
		/**
		 * @returnParam piRow 
		 */
		RowIndex: int;
		/**
		 * @returnParam pprot 
		 */
		Protection: MsoBarProtection;
		Reset(): void;
		ShowPopup(x?: any, y?: any): void;
		/**
		 * @returnParam pypTop 
		 */
		Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoBarType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfAdaptiveMenu 
		 */
		AdaptiveMenu: boolean;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pvarPitb 
		 */
		readonly InstanceIdPtr: any;
	}

	interface CommandBarControls extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Add(Type?: any, Id?: any, Parameter?: any, Before?: any, Temporary?: any): CommandBarControl;
		/**
		 * @returnParam pcToolbarControls 
		 */
		readonly Count: int;
		/**
		 * @get 
		 * @returnParam ppcbc 
		 */
		Item(Index: any): CommandBarControl;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
	}

	interface _CommandBarButton extends CommandBarControl {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBeginGroup 
		 */
		BeginGroup: boolean;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrCaption 
		 */
		Caption: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Control: IDispatch;
		/**
		 * @returnParam ppcbc 
		 */
		Copy(Bar?: any, Before?: any): CommandBarControl;
		Delete(Temporary?: any): void;
		/**
		 * @returnParam pbstrText 
		 */
		DescriptionText: string;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		Execute(): void;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pid 
		 */
		HelpContextId: int;
		/**
		 * @returnParam pbstrFilename 
		 */
		HelpFile: string;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Move(Bar?: any, Before?: any): CommandBarControl;
		/**
		 * @returnParam px 
		 */
		readonly Left: int;
		/**
		 * @returnParam pcou 
		 */
		OLEUsage: MsoControlOLEUsage;
		/**
		 * @returnParam pbstrOnAction 
		 */
		OnAction: string;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
		/**
		 * @returnParam pbstrParam 
		 */
		Parameter: string;
		/**
		 * @returnParam pnPri 
		 */
		Priority: int;
		Reset(): void;
		SetFocus(): void;
		/**
		 * @returnParam pbstrTag 
		 */
		Tag: string;
		/**
		 * @returnParam pbstrTooltip 
		 */
		TooltipText: string;
		/**
		 * @returnParam py 
		 */
		readonly Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoControlType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfDropped 
		 */
		readonly IsPriorityDropped: boolean;
		Reserved1(): void;
		Reserved2(): void;
		Reserved3(): void;
		Reserved4(): void;
		Reserved5(): void;
		Reserved6(): void;
		Reserved7(): void;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		BuiltInFace: boolean;
		CopyFace(): void;
		/**
		 * @returnParam pid 
		 */
		FaceId: int;
		PasteFace(): void;
		/**
		 * @returnParam pbstrText 
		 */
		ShortcutText: string;
		/**
		 * @returnParam pstate 
		 */
		State: MsoButtonState;
		/**
		 * @returnParam pstyle 
		 */
		Style: MsoButtonStyle;
		/**
		 * @returnParam phlType 
		 */
		HyperlinkType: MsoCommandBarButtonHyperlinkType;
		/**
		 * @returnParam ppdispPicture 
		 */
		Picture: IPictureDisp;
		/**
		 * @returnParam ppipictdispMask 
		 */
		Mask: IPictureDisp;
		/**
		 * @returnParam pvarPic 
		 */
		readonly InstanceIdPtr: any;
	}

	interface CommandBarPopup extends CommandBarControl {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBeginGroup 
		 */
		BeginGroup: boolean;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrCaption 
		 */
		Caption: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Control: IDispatch;
		/**
		 * @returnParam ppcbc 
		 */
		Copy(Bar?: any, Before?: any): CommandBarControl;
		Delete(Temporary?: any): void;
		/**
		 * @returnParam pbstrText 
		 */
		DescriptionText: string;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		Execute(): void;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pid 
		 */
		HelpContextId: int;
		/**
		 * @returnParam pbstrFilename 
		 */
		HelpFile: string;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Move(Bar?: any, Before?: any): CommandBarControl;
		/**
		 * @returnParam px 
		 */
		readonly Left: int;
		/**
		 * @returnParam pcou 
		 */
		OLEUsage: MsoControlOLEUsage;
		/**
		 * @returnParam pbstrOnAction 
		 */
		OnAction: string;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
		/**
		 * @returnParam pbstrParam 
		 */
		Parameter: string;
		/**
		 * @returnParam pnPri 
		 */
		Priority: int;
		Reset(): void;
		SetFocus(): void;
		/**
		 * @returnParam pbstrTag 
		 */
		Tag: string;
		/**
		 * @returnParam pbstrTooltip 
		 */
		TooltipText: string;
		/**
		 * @returnParam py 
		 */
		readonly Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoControlType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfDropped 
		 */
		readonly IsPriorityDropped: boolean;
		Reserved1(): void;
		Reserved2(): void;
		Reserved3(): void;
		Reserved4(): void;
		Reserved5(): void;
		Reserved6(): void;
		Reserved7(): void;
		/**
		 * @returnParam ppcb 
		 */
		readonly CommandBar: CommandBar;
		/**
		 * @returnParam ppcbcs 
		 */
		readonly Controls: CommandBarControls;
		/**
		 * @returnParam pomg 
		 */
		OLEMenuGroup: MsoOLEMenuGroup;
		/**
		 * @returnParam pvarPic 
		 */
		readonly InstanceIdPtr: any;
	}

	interface _CommandBarComboBox extends CommandBarControl {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBeginGroup 
		 */
		BeginGroup: boolean;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrCaption 
		 */
		Caption: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Control: IDispatch;
		/**
		 * @returnParam ppcbc 
		 */
		Copy(Bar?: any, Before?: any): CommandBarControl;
		Delete(Temporary?: any): void;
		/**
		 * @returnParam pbstrText 
		 */
		DescriptionText: string;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		Execute(): void;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pid 
		 */
		HelpContextId: int;
		/**
		 * @returnParam pbstrFilename 
		 */
		HelpFile: string;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Move(Bar?: any, Before?: any): CommandBarControl;
		/**
		 * @returnParam px 
		 */
		readonly Left: int;
		/**
		 * @returnParam pcou 
		 */
		OLEUsage: MsoControlOLEUsage;
		/**
		 * @returnParam pbstrOnAction 
		 */
		OnAction: string;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
		/**
		 * @returnParam pbstrParam 
		 */
		Parameter: string;
		/**
		 * @returnParam pnPri 
		 */
		Priority: int;
		Reset(): void;
		SetFocus(): void;
		/**
		 * @returnParam pbstrTag 
		 */
		Tag: string;
		/**
		 * @returnParam pbstrTooltip 
		 */
		TooltipText: string;
		/**
		 * @returnParam py 
		 */
		readonly Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoControlType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfDropped 
		 */
		readonly IsPriorityDropped: boolean;
		Reserved1(): void;
		Reserved2(): void;
		Reserved3(): void;
		Reserved4(): void;
		Reserved5(): void;
		Reserved6(): void;
		Reserved7(): void;
		AddItem(Text: string, Index?: any): void;
		Clear(): void;
		/**
		 * @returnParam pcLines 
		 */
		DropDownLines: int;
		/**
		 * @returnParam pdx 
		 */
		DropDownWidth: int;
		/**
		 * @put 
		 */
		List(Index: int, pbstrItem: string): void;
		/**
		 * @get 
		 * @returnParam pbstrItem 
		 */
		List(Index: int): string;
		/**
		 * @returnParam pcItems 
		 */
		readonly ListCount: int;
		/**
		 * @returnParam pcItems 
		 */
		ListHeaderCount: int;
		/**
		 * @returnParam pi 
		 */
		ListIndex: int;
		RemoveItem(Index: int): void;
		/**
		 * @returnParam pstyle 
		 */
		Style: MsoComboStyle;
		/**
		 * @returnParam pbstrText 
		 */
		Text: string;
		/**
		 * @returnParam pvarPic 
		 */
		readonly InstanceIdPtr: any;
	}

	interface _CommandBarActiveX extends CommandBarControl {
		/**
		 * @returnParam ppdispParent 
		 */
		readonly accParent: IDispatch;
		/**
		 * @returnParam pcountChildren 
		 */
		readonly accChildCount: int4;
		/**
		 * @get 
		 * @returnParam ppdispChild 
		 */
		accChild(varChild: any): IDispatch;
		/**
		 * @put 
		 */
		accName(varChild?: any, pszName?: string): void;
		/**
		 * @get 
		 * @returnParam pszName 
		 */
		accName(varChild?: any): string;
		/**
		 * @put 
		 */
		accValue(varChild?: any, pszValue?: string): void;
		/**
		 * @get 
		 * @returnParam pszValue 
		 */
		accValue(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszDescription 
		 */
		accDescription(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pvarRole 
		 */
		accRole(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pvarState 
		 */
		accState(varChild?: any): any;
		/**
		 * @get 
		 * @returnParam pszHelp 
		 */
		accHelp(varChild?: any): string;
		/**
		 * @get 
		 * @returnParam pszKeyboardShortcut 
		 */
		accKeyboardShortcut(varChild?: any): string;
		/**
		 * @returnParam pvarChild 
		 */
		readonly accFocus: any;
		/**
		 * @returnParam pvarChildren 
		 */
		readonly accSelection: any;
		/**
		 * @get 
		 * @returnParam pszDefaultAction 
		 */
		accDefaultAction(varChild?: any): string;
		accSelect(flagsSelect: int4, varChild?: any): void;
		/** @paramList [pxLeft, pyTop, pcxWidth, pcyHeight, varChild] */
		accLocation(varChild?: any): {pxLeft: int4, pyTop: int4, pcxWidth: int4, pcyHeight: int4};
		/**
		 * @returnParam pvarEndUpAt 
		 */
		accNavigate(navDir: int4, varStart?: any): any;
		/**
		 * @returnParam pvarChild 
		 */
		accHitTest(xLeft: int4, yTop: int4): any;
		accDoDefaultAction(varChild?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarfBeginGroup 
		 */
		BeginGroup: boolean;
		/**
		 * @returnParam pvarfBuiltIn 
		 */
		readonly BuiltIn: boolean;
		/**
		 * @returnParam pbstrCaption 
		 */
		Caption: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Control: IDispatch;
		/**
		 * @returnParam ppcbc 
		 */
		Copy(Bar?: any, Before?: any): CommandBarControl;
		Delete(Temporary?: any): void;
		/**
		 * @returnParam pbstrText 
		 */
		DescriptionText: string;
		/**
		 * @returnParam pvarfEnabled 
		 */
		Enabled: boolean;
		Execute(): void;
		/**
		 * @returnParam pdy 
		 */
		Height: int;
		/**
		 * @returnParam pid 
		 */
		HelpContextId: int;
		/**
		 * @returnParam pbstrFilename 
		 */
		HelpFile: string;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		/**
		 * @returnParam pi 
		 */
		readonly Index: int;
		/**
		 * @returnParam pid 
		 */
		readonly InstanceId: int4;
		/**
		 * @returnParam ppcbc 
		 */
		Move(Bar?: any, Before?: any): CommandBarControl;
		/**
		 * @returnParam px 
		 */
		readonly Left: int;
		/**
		 * @returnParam pcou 
		 */
		OLEUsage: MsoControlOLEUsage;
		/**
		 * @returnParam pbstrOnAction 
		 */
		OnAction: string;
		/**
		 * @returnParam ppcb 
		 */
		readonly Parent: CommandBar;
		/**
		 * @returnParam pbstrParam 
		 */
		Parameter: string;
		/**
		 * @returnParam pnPri 
		 */
		Priority: int;
		Reset(): void;
		SetFocus(): void;
		/**
		 * @returnParam pbstrTag 
		 */
		Tag: string;
		/**
		 * @returnParam pbstrTooltip 
		 */
		TooltipText: string;
		/**
		 * @returnParam py 
		 */
		readonly Top: int;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoControlType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pdx 
		 */
		Width: int;
		/**
		 * @returnParam pvarfDropped 
		 */
		readonly IsPriorityDropped: boolean;
		Reserved1(): void;
		Reserved2(): void;
		Reserved3(): void;
		Reserved4(): void;
		Reserved5(): void;
		Reserved6(): void;
		Reserved7(): void;
		/**
		 * @returnParam pbstrClsid 
		 */
		ControlCLSID: string;
		/**
		 * @get 
		 * @returnParam ppUnk 
		 */
		QueryControlInterface(bstrIid: string): IUnknown;
		SetInnerObjectFactory(pUnk: IUnknown): void;
		EnsureControl(): void;
		set InitWith(arg1: IUnknown);
		/**
		 * @returnParam pvarPic 
		 */
		readonly InstanceIdPtr: any;
	}

	interface Adjustments extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @put 
		 */
		Item(Index: int, Val: float): void;
		/**
		 * @get 
		 * @returnParam Val 
		 */
		Item(Index: int): float;
	}

	interface CalloutFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		AutomaticLength(): void;
		CustomDrop(Drop: float): void;
		CustomLength(Length: float): void;
		PresetDrop(DropType: MsoCalloutDropType): void;
		/**
		 * @returnParam Accent 
		 */
		Accent: MsoTriState;
		/**
		 * @returnParam Angle 
		 */
		Angle: MsoCalloutAngleType;
		/**
		 * @returnParam AutoAttach 
		 */
		AutoAttach: MsoTriState;
		/**
		 * @returnParam AutoLength 
		 */
		readonly AutoLength: MsoTriState;
		/**
		 * @returnParam Border 
		 */
		Border: MsoTriState;
		/**
		 * @returnParam Drop 
		 */
		readonly Drop: float;
		/**
		 * @returnParam DropType 
		 */
		readonly DropType: MsoCalloutDropType;
		/**
		 * @returnParam Gap 
		 */
		Gap: float;
		/**
		 * @returnParam Length 
		 */
		readonly Length: float;
		/**
		 * @returnParam Type 
		 */
		Type: MsoCalloutType;
	}

	interface ColorFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam RGB 
		 */
		RGB: MsoRGBType;
		/**
		 * @returnParam SchemeColor 
		 */
		SchemeColor: int;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoColorType;
		/**
		 * @returnParam pValue 
		 */
		TintAndShade: float;
		/**
		 * @returnParam ObjectThemeColor 
		 */
		ObjectThemeColor: MsoThemeColorIndex;
		/**
		 * @returnParam Brightness 
		 */
		Brightness: float;
	}

	interface ConnectorFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		BeginConnect(ConnectedShape: Shape, ConnectionSite: int): void;
		BeginDisconnect(): void;
		EndConnect(ConnectedShape: Shape, ConnectionSite: int): void;
		EndDisconnect(): void;
		/**
		 * @returnParam BeginConnected 
		 */
		readonly BeginConnected: MsoTriState;
		/**
		 * @returnParam BeginConnectedShape 
		 */
		readonly BeginConnectedShape: Shape;
		/**
		 * @returnParam BeginConnectionSite 
		 */
		readonly BeginConnectionSite: int;
		/**
		 * @returnParam EndConnected 
		 */
		readonly EndConnected: MsoTriState;
		/**
		 * @returnParam EndConnectedShape 
		 */
		readonly EndConnectedShape: Shape;
		/**
		 * @returnParam EndConnectionSite 
		 */
		readonly EndConnectionSite: int;
		/**
		 * @returnParam Type 
		 */
		Type: MsoConnectorType;
	}

	interface Shape extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		Apply(): void;
		Delete(): void;
		/**
		 * @returnParam Duplicate 
		 */
		Duplicate(): Shape;
		Flip(FlipCmd: MsoFlipCmd): void;
		IncrementLeft(Increment: float): void;
		IncrementRotation(Increment: float): void;
		IncrementTop(Increment: float): void;
		PickUp(): void;
		RerouteConnections(): void;
		ScaleHeight(Factor: float, RelativeToOriginalSize: MsoTriState, fScale?: Default<MsoScaleFrom, 0>): void;
		ScaleWidth(Factor: float, RelativeToOriginalSize: MsoTriState, fScale?: Default<MsoScaleFrom, 0>): void;
		Select(Replace?: any): void;
		SetShapesDefaultProperties(): void;
		/**
		 * @returnParam Ungroup 
		 */
		Ungroup(): ShapeRange;
		ZOrder(ZOrderCmd: MsoZOrderCmd): void;
		/**
		 * @returnParam Adjustments 
		 */
		readonly Adjustments: Adjustments;
		/**
		 * @returnParam AutoShapeType 
		 */
		AutoShapeType: MsoAutoShapeType;
		/**
		 * @returnParam BlackWhiteMode 
		 */
		BlackWhiteMode: MsoBlackWhiteMode;
		/**
		 * @returnParam Callout 
		 */
		readonly Callout: CalloutFormat;
		/**
		 * @returnParam ConnectionSiteCount 
		 */
		readonly ConnectionSiteCount: int;
		/**
		 * @returnParam Connector 
		 */
		readonly Connector: MsoTriState;
		/**
		 * @returnParam ConnectorFormat 
		 */
		readonly ConnectorFormat: ConnectorFormat;
		/**
		 * @returnParam Fill 
		 */
		readonly Fill: FillFormat;
		/**
		 * @returnParam GroupItems 
		 */
		readonly GroupItems: GroupShapes;
		/**
		 * @returnParam Height 
		 */
		Height: float;
		/**
		 * @returnParam HorizontalFlip 
		 */
		readonly HorizontalFlip: MsoTriState;
		/**
		 * @returnParam Left 
		 */
		Left: float;
		/**
		 * @returnParam Line 
		 */
		readonly Line: LineFormat;
		/**
		 * @returnParam LockAspectRatio 
		 */
		LockAspectRatio: MsoTriState;
		/**
		 * @returnParam Name 
		 */
		Name: string;
		/**
		 * @returnParam Nodes 
		 */
		readonly Nodes: ShapeNodes;
		/**
		 * @returnParam Rotation 
		 */
		Rotation: float;
		/**
		 * @returnParam Picture 
		 */
		readonly PictureFormat: PictureFormat;
		/**
		 * @returnParam Shadow 
		 */
		readonly Shadow: ShadowFormat;
		/**
		 * @returnParam TextEffect 
		 */
		readonly TextEffect: TextEffectFormat;
		/**
		 * @returnParam TextFrame 
		 */
		readonly TextFrame: TextFrame;
		/**
		 * @returnParam ThreeD 
		 */
		readonly ThreeD: ThreeDFormat;
		/**
		 * @returnParam Top 
		 */
		Top: float;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoShapeType;
		/**
		 * @returnParam VerticalFlip 
		 */
		readonly VerticalFlip: MsoTriState;
		/**
		 * @returnParam Vertices 
		 */
		readonly Vertices: any;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		/**
		 * @returnParam Width 
		 */
		Width: float;
		/**
		 * @returnParam ZOrderPosition 
		 */
		readonly ZOrderPosition: int;
		/**
		 * @returnParam Script 
		 */
		readonly Script: Script;
		/**
		 * @returnParam AlternativeText 
		 */
		AlternativeText: string;
		/**
		 * @returnParam pHasDiagram 
		 */
		readonly HasDiagram: MsoTriState;
		/**
		 * @returnParam Diagram 
		 */
		readonly Diagram: IMsoDiagram;
		/**
		 * @returnParam pHasDiagram 
		 */
		readonly HasDiagramNode: MsoTriState;
		/**
		 * @returnParam DiagramNode 
		 */
		readonly DiagramNode: DiagramNode;
		/**
		 * @returnParam Child 
		 */
		readonly Child: MsoTriState;
		/**
		 * @returnParam Parent 
		 */
		readonly ParentGroup: Shape;
		/**
		 * @returnParam CanvasShapes 
		 */
		readonly CanvasItems: CanvasShapes;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		CanvasCropLeft(Increment: float): void;
		CanvasCropTop(Increment: float): void;
		CanvasCropRight(Increment: float): void;
		CanvasCropBottom(Increment: float): void;
		set RTF(arg1: string);
		/**
		 * @returnParam Frame 
		 */
		readonly TextFrame2: TextFrame2;
		Cut(): void;
		Copy(): void;
		/**
		 * @returnParam pHasChart 
		 */
		readonly HasChart: MsoTriState;
		/**
		 * @returnParam Chart 
		 */
		readonly Chart: IMsoChart;
		/**
		 * @returnParam ShapeStyle 
		 */
		ShapeStyle: MsoShapeStyleIndex;
		/**
		 * @returnParam BackgroundStyle 
		 */
		BackgroundStyle: MsoBackgroundStyleIndex;
		/**
		 * @returnParam SoftEdge 
		 */
		readonly SoftEdge: SoftEdgeFormat;
		/**
		 * @returnParam Glow 
		 */
		readonly Glow: GlowFormat;
		/**
		 * @returnParam Reflection 
		 */
		readonly Reflection: ReflectionFormat;
		/**
		 * @returnParam HasSmartArt 
		 */
		readonly HasSmartArt: MsoTriState;
		/**
		 * @returnParam SmartArt 
		 */
		readonly SmartArt: SmartArt;
		ConvertTextToSmartArt(Layout: SmartArtLayout): void;
		/**
		 * @returnParam Title 
		 */
		Title: string;
	}

	interface ShapeRange extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): Shape;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		Align(AlignCmd: MsoAlignCmd, RelativeTo: MsoTriState): void;
		Apply(): void;
		Delete(): void;
		Distribute(DistributeCmd: MsoDistributeCmd, RelativeTo: MsoTriState): void;
		/**
		 * @returnParam Duplicate 
		 */
		Duplicate(): ShapeRange;
		Flip(FlipCmd: MsoFlipCmd): void;
		IncrementLeft(Increment: float): void;
		IncrementRotation(Increment: float): void;
		IncrementTop(Increment: float): void;
		/**
		 * @returnParam Group 
		 */
		Group(): Shape;
		PickUp(): void;
		/**
		 * @returnParam Regroup 
		 */
		Regroup(): Shape;
		RerouteConnections(): void;
		ScaleHeight(Factor: float, RelativeToOriginalSize: MsoTriState, fScale?: Default<MsoScaleFrom, 0>): void;
		ScaleWidth(Factor: float, RelativeToOriginalSize: MsoTriState, fScale?: Default<MsoScaleFrom, 0>): void;
		Select(Replace?: any): void;
		SetShapesDefaultProperties(): void;
		/**
		 * @returnParam Ungroup 
		 */
		Ungroup(): ShapeRange;
		ZOrder(ZOrderCmd: MsoZOrderCmd): void;
		/**
		 * @returnParam Adjustments 
		 */
		readonly Adjustments: Adjustments;
		/**
		 * @returnParam AutoShapeType 
		 */
		AutoShapeType: MsoAutoShapeType;
		/**
		 * @returnParam BlackWhiteMode 
		 */
		BlackWhiteMode: MsoBlackWhiteMode;
		/**
		 * @returnParam Callout 
		 */
		readonly Callout: CalloutFormat;
		/**
		 * @returnParam ConnectionSiteCount 
		 */
		readonly ConnectionSiteCount: int;
		/**
		 * @returnParam Connector 
		 */
		readonly Connector: MsoTriState;
		/**
		 * @returnParam ConnectorFormat 
		 */
		readonly ConnectorFormat: ConnectorFormat;
		/**
		 * @returnParam Fill 
		 */
		readonly Fill: FillFormat;
		/**
		 * @returnParam GroupItems 
		 */
		readonly GroupItems: GroupShapes;
		/**
		 * @returnParam Height 
		 */
		Height: float;
		/**
		 * @returnParam HorizontalFlip 
		 */
		readonly HorizontalFlip: MsoTriState;
		/**
		 * @returnParam Left 
		 */
		Left: float;
		/**
		 * @returnParam Line 
		 */
		readonly Line: LineFormat;
		/**
		 * @returnParam LockAspectRatio 
		 */
		LockAspectRatio: MsoTriState;
		/**
		 * @returnParam Name 
		 */
		Name: string;
		/**
		 * @returnParam Nodes 
		 */
		readonly Nodes: ShapeNodes;
		/**
		 * @returnParam Rotation 
		 */
		Rotation: float;
		/**
		 * @returnParam Picture 
		 */
		readonly PictureFormat: PictureFormat;
		/**
		 * @returnParam Shadow 
		 */
		readonly Shadow: ShadowFormat;
		/**
		 * @returnParam TextEffect 
		 */
		readonly TextEffect: TextEffectFormat;
		/**
		 * @returnParam TextFrame 
		 */
		readonly TextFrame: TextFrame;
		/**
		 * @returnParam ThreeD 
		 */
		readonly ThreeD: ThreeDFormat;
		/**
		 * @returnParam Top 
		 */
		Top: float;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoShapeType;
		/**
		 * @returnParam VerticalFlip 
		 */
		readonly VerticalFlip: MsoTriState;
		/**
		 * @returnParam Vertices 
		 */
		readonly Vertices: any;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		/**
		 * @returnParam Width 
		 */
		Width: float;
		/**
		 * @returnParam ZOrderPosition 
		 */
		readonly ZOrderPosition: int;
		/**
		 * @returnParam Script 
		 */
		readonly Script: Script;
		/**
		 * @returnParam AlternativeText 
		 */
		AlternativeText: string;
		/**
		 * @returnParam pHasDiagram 
		 */
		readonly HasDiagram: MsoTriState;
		/**
		 * @returnParam Diagram 
		 */
		readonly Diagram: IMsoDiagram;
		/**
		 * @returnParam pHasDiagram 
		 */
		readonly HasDiagramNode: MsoTriState;
		/**
		 * @returnParam DiagramNode 
		 */
		readonly DiagramNode: DiagramNode;
		/**
		 * @returnParam Child 
		 */
		readonly Child: MsoTriState;
		/**
		 * @returnParam Parent 
		 */
		readonly ParentGroup: Shape;
		/**
		 * @returnParam CanvasShapes 
		 */
		readonly CanvasItems: CanvasShapes;
		/**
		 * @returnParam pid 
		 */
		readonly Id: int;
		CanvasCropLeft(Increment: float): void;
		CanvasCropTop(Increment: float): void;
		CanvasCropRight(Increment: float): void;
		CanvasCropBottom(Increment: float): void;
		set RTF(arg1: string);
		/**
		 * @returnParam Frame 
		 */
		readonly TextFrame2: TextFrame2;
		Cut(): void;
		Copy(): void;
		/**
		 * @returnParam pHasChart 
		 */
		readonly HasChart: MsoTriState;
		/**
		 * @returnParam Chart 
		 */
		readonly Chart: IMsoChart;
		/**
		 * @returnParam ShapeStyle 
		 */
		ShapeStyle: MsoShapeStyleIndex;
		/**
		 * @returnParam BackgroundStyle 
		 */
		BackgroundStyle: MsoBackgroundStyleIndex;
		/**
		 * @returnParam SoftEdge 
		 */
		readonly SoftEdge: SoftEdgeFormat;
		/**
		 * @returnParam Glow 
		 */
		readonly Glow: GlowFormat;
		/**
		 * @returnParam Reflection 
		 */
		readonly Reflection: ReflectionFormat;
		/**
		 * @returnParam Title 
		 */
		Title: string;
		MergeShapes(MergeCmd: MsoMergeCmd, PrimaryShape?: Default<Shape, null>): void;
	}

	interface FillFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		Background(): void;
		OneColorGradient(Style: MsoGradientStyle, Variant: int, Degree: float): void;
		Patterned(Pattern: MsoPatternType): void;
		PresetGradient(Style: MsoGradientStyle, Variant: int, PresetGradientType: MsoPresetGradientType): void;
		PresetTextured(PresetTexture: MsoPresetTexture): void;
		Solid(): void;
		TwoColorGradient(Style: MsoGradientStyle, Variant: int): void;
		UserPicture(PictureFile: string): void;
		UserTextured(TextureFile: string): void;
		/**
		 * @returnParam BackColor 
		 */
		BackColor: ColorFormat;
		/**
		 * @returnParam ForeColor 
		 */
		ForeColor: ColorFormat;
		/**
		 * @returnParam GradientColorType 
		 */
		readonly GradientColorType: MsoGradientColorType;
		/**
		 * @returnParam GradientDegree 
		 */
		readonly GradientDegree: float;
		/**
		 * @returnParam GradientStyle 
		 */
		readonly GradientStyle: MsoGradientStyle;
		/**
		 * @returnParam GradientVariant 
		 */
		readonly GradientVariant: int;
		/**
		 * @returnParam Pattern 
		 */
		readonly Pattern: MsoPatternType;
		/**
		 * @returnParam PresetGradientType 
		 */
		readonly PresetGradientType: MsoPresetGradientType;
		/**
		 * @returnParam PresetTexture 
		 */
		readonly PresetTexture: MsoPresetTexture;
		/**
		 * @returnParam TextureName 
		 */
		readonly TextureName: string;
		/**
		 * @returnParam TextureType 
		 */
		readonly TextureType: MsoTextureType;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoFillType;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		/**
		 * @returnParam GradientStops 
		 */
		readonly GradientStops: GradientStops;
		/**
		 * @returnParam TextureOffsetX 
		 */
		TextureOffsetX: float;
		/**
		 * @returnParam TextureOffsetY 
		 */
		TextureOffsetY: float;
		/**
		 * @returnParam TextureAlignment 
		 */
		TextureAlignment: MsoTextureAlignment;
		/**
		 * @returnParam HorizontalScale 
		 */
		TextureHorizontalScale: float;
		/**
		 * @returnParam VerticalScale 
		 */
		TextureVerticalScale: float;
		/**
		 * @returnParam TextureTile 
		 */
		TextureTile: MsoTriState;
		/**
		 * @returnParam RotateWithObject 
		 */
		RotateWithObject: MsoTriState;
		/**
		 * @returnParam PictureEffects 
		 */
		readonly PictureEffects: PictureEffects;
		/**
		 * @returnParam GradientAngle 
		 */
		GradientAngle: float;
	}

	interface GradientStops extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam Item 
		 */
		Item(Index: int): GradientStop;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		Delete(Index?: Default<int, -1>): void;
		Insert(RGB: MsoRGBType, Position: float, Transparency?: Default<float, 0.000000>, Index?: Default<int, -1>): void;
		Insert2(RGB: MsoRGBType, Position: float, Transparency?: Default<float, 0.000000>, Index?: Default<int, -1>, Brightness?: Default<float, 0.000000>): void;
	}

	interface GradientStop extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Color 
		 */
		readonly Color: ColorFormat;
		/**
		 * @returnParam Position 
		 */
		Position: float;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
	}

	interface PictureEffects extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam Item 
		 */
		Item(Index: int): PictureEffect;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Effect 
		 */
		Insert(EffectType: MsoPictureEffectType, Position?: Default<int, -1>): PictureEffect;
		Delete(Index?: Default<int, -1>): void;
	}

	interface PictureEffect extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam EffectType 
		 */
		readonly Type: MsoPictureEffectType;
		/**
		 * @returnParam Position 
		 */
		Position: int;
		Delete(): void;
		/**
		 * @returnParam EffectParameters 
		 */
		readonly EffectParameters: EffectParameters;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
	}

	interface EffectParameters extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam EffectParameter 
		 */
		Item(Index: any): EffectParameter;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface EffectParameter extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Value 
		 */
		Value: any;
	}

	interface GroupShapes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pnShapes 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): Shape;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Range 
		 */
		Range(Index: any): ShapeRange;
	}

	interface LineFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam BackColor 
		 */
		BackColor: ColorFormat;
		/**
		 * @returnParam BeginArrowheadLength 
		 */
		BeginArrowheadLength: MsoArrowheadLength;
		/**
		 * @returnParam BeginArrowheadStyle 
		 */
		BeginArrowheadStyle: MsoArrowheadStyle;
		/**
		 * @returnParam BeginArrowheadWidth 
		 */
		BeginArrowheadWidth: MsoArrowheadWidth;
		/**
		 * @returnParam DashStyle 
		 */
		DashStyle: MsoLineDashStyle;
		/**
		 * @returnParam EndArrowheadLength 
		 */
		EndArrowheadLength: MsoArrowheadLength;
		/**
		 * @returnParam EndArrowheadStyle 
		 */
		EndArrowheadStyle: MsoArrowheadStyle;
		/**
		 * @returnParam EndArrowheadWidth 
		 */
		EndArrowheadWidth: MsoArrowheadWidth;
		/**
		 * @returnParam ForeColor 
		 */
		ForeColor: ColorFormat;
		/**
		 * @returnParam Pattern 
		 */
		Pattern: MsoPatternType;
		/**
		 * @returnParam Style 
		 */
		Style: MsoLineStyle;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		/**
		 * @returnParam Weight 
		 */
		Weight: float;
		/**
		 * @returnParam InsetPen 
		 */
		InsetPen: MsoTriState;
	}

	interface ShapeNodes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): ShapeNode;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		Delete(Index: int): void;
		Insert(Index: int, SegmentType: MsoSegmentType, EditingType: MsoEditingType, X1: float, Y1: float, X2?: Default<float, 0.000000>, Y2?: Default<float, 0.000000>, X3?: Default<float, 0.000000>, Y3?: Default<float, 0.000000>): void;
		SetEditingType(Index: int, EditingType: MsoEditingType): void;
		SetPosition(Index: int, X1: float, Y1: float): void;
		SetSegmentType(Index: int, SegmentType: MsoSegmentType): void;
	}

	interface ShapeNode extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam EditingType 
		 */
		readonly EditingType: MsoEditingType;
		/**
		 * @returnParam Points 
		 */
		readonly Points: any;
		/**
		 * @returnParam SegmentType 
		 */
		readonly SegmentType: MsoSegmentType;
	}

	interface PictureFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		IncrementBrightness(Increment: float): void;
		IncrementContrast(Increment: float): void;
		/**
		 * @returnParam Brightness 
		 */
		Brightness: float;
		/**
		 * @returnParam ColorType 
		 */
		ColorType: MsoPictureColorType;
		/**
		 * @returnParam Contrast 
		 */
		Contrast: float;
		/**
		 * @returnParam CropBottom 
		 */
		CropBottom: float;
		/**
		 * @returnParam CropLeft 
		 */
		CropLeft: float;
		/**
		 * @returnParam CropRight 
		 */
		CropRight: float;
		/**
		 * @returnParam CropTop 
		 */
		CropTop: float;
		/**
		 * @returnParam TransparencyColor 
		 */
		TransparencyColor: MsoRGBType;
		/**
		 * @returnParam TransparentBackground 
		 */
		TransparentBackground: MsoTriState;
		/**
		 * @returnParam Crop 
		 */
		readonly Crop: Crop;
	}

	interface Crop extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam PictureOffsetX 
		 */
		PictureOffsetX: float;
		/**
		 * @returnParam PictureOffsetY 
		 */
		PictureOffsetY: float;
		/**
		 * @returnParam PictureWidth 
		 */
		PictureWidth: float;
		/**
		 * @returnParam PictureHeight 
		 */
		PictureHeight: float;
		/**
		 * @returnParam ShapeLeft 
		 */
		ShapeLeft: float;
		/**
		 * @returnParam ShapeTop 
		 */
		ShapeTop: float;
		/**
		 * @returnParam ShapeWidth 
		 */
		ShapeWidth: float;
		/**
		 * @returnParam ShapeHeight 
		 */
		ShapeHeight: float;
	}

	interface ShadowFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		IncrementOffsetX(Increment: float): void;
		IncrementOffsetY(Increment: float): void;
		/**
		 * @returnParam ForeColor 
		 */
		ForeColor: ColorFormat;
		/**
		 * @returnParam Obscured 
		 */
		Obscured: MsoTriState;
		/**
		 * @returnParam OffsetX 
		 */
		OffsetX: float;
		/**
		 * @returnParam OffsetY 
		 */
		OffsetY: float;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
		/**
		 * @returnParam Type 
		 */
		Type: MsoShadowType;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		/**
		 * @returnParam ShadowStyle 
		 */
		Style: MsoShadowStyle;
		/**
		 * @returnParam Blur 
		 */
		Blur: float;
		/**
		 * @returnParam Size 
		 */
		Size: float;
		/**
		 * @returnParam RotateWithShape 
		 */
		RotateWithShape: MsoTriState;
	}

	interface TextEffectFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		ToggleVerticalText(): void;
		/**
		 * @returnParam Alignment 
		 */
		Alignment: MsoTextEffectAlignment;
		/**
		 * @returnParam FontBold 
		 */
		FontBold: MsoTriState;
		/**
		 * @returnParam FontItalic 
		 */
		FontItalic: MsoTriState;
		/**
		 * @returnParam FontName 
		 */
		FontName: string;
		/**
		 * @returnParam FontSize 
		 */
		FontSize: float;
		/**
		 * @returnParam KernedPairs 
		 */
		KernedPairs: MsoTriState;
		/**
		 * @returnParam NormalizedHeight 
		 */
		NormalizedHeight: MsoTriState;
		/**
		 * @returnParam PresetShape 
		 */
		PresetShape: MsoPresetTextEffectShape;
		/**
		 * @returnParam Preset 
		 */
		PresetTextEffect: MsoPresetTextEffect;
		/**
		 * @returnParam RotatedChars 
		 */
		RotatedChars: MsoTriState;
		/**
		 * @returnParam Text 
		 */
		Text: string;
		/**
		 * @returnParam Tracking 
		 */
		Tracking: float;
	}

	interface TextFrame extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam MarginBottom 
		 */
		MarginBottom: float;
		/**
		 * @returnParam MarginLeft 
		 */
		MarginLeft: float;
		/**
		 * @returnParam MarginRight 
		 */
		MarginRight: float;
		/**
		 * @returnParam MarginTop 
		 */
		MarginTop: float;
		/**
		 * @returnParam Orientation 
		 */
		Orientation: MsoTextOrientation;
	}

	interface ThreeDFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		IncrementRotationX(Increment: float): void;
		IncrementRotationY(Increment: float): void;
		ResetRotation(): void;
		SetThreeDFormat(PresetThreeDFormat: MsoPresetThreeDFormat): void;
		SetExtrusionDirection(PresetExtrusionDirection: MsoPresetExtrusionDirection): void;
		/**
		 * @returnParam Depth 
		 */
		Depth: float;
		/**
		 * @returnParam ExtrusionColor 
		 */
		readonly ExtrusionColor: ColorFormat;
		/**
		 * @returnParam ExtrusionColorType 
		 */
		ExtrusionColorType: MsoExtrusionColorType;
		/**
		 * @returnParam Perspective 
		 */
		Perspective: MsoTriState;
		/**
		 * @returnParam PresetExtrusionDirection 
		 */
		readonly PresetExtrusionDirection: MsoPresetExtrusionDirection;
		/**
		 * @returnParam PresetLightingDirection 
		 */
		PresetLightingDirection: MsoPresetLightingDirection;
		/**
		 * @returnParam PresetLightingSoftness 
		 */
		PresetLightingSoftness: MsoPresetLightingSoftness;
		/**
		 * @returnParam PresetMaterial 
		 */
		PresetMaterial: MsoPresetMaterial;
		/**
		 * @returnParam PresetThreeDFormat 
		 */
		readonly PresetThreeDFormat: MsoPresetThreeDFormat;
		/**
		 * @returnParam RotationX 
		 */
		RotationX: float;
		/**
		 * @returnParam RotationY 
		 */
		RotationY: float;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
		SetPresetCamera(PresetCamera: MsoPresetCamera): void;
		IncrementRotationZ(Increment: float): void;
		IncrementRotationHorizontal(Increment: float): void;
		IncrementRotationVertical(Increment: float): void;
		/**
		 * @returnParam PresetLightRigType 
		 */
		PresetLighting: MsoLightRigType;
		/**
		 * @returnParam Z 
		 */
		Z: float;
		/**
		 * @returnParam BevelTopType 
		 */
		BevelTopType: MsoBevelType;
		/**
		 * @returnParam BevelTopInset 
		 */
		BevelTopInset: float;
		/**
		 * @returnParam BevelTopDepth 
		 */
		BevelTopDepth: float;
		/**
		 * @returnParam BevelBottomType 
		 */
		BevelBottomType: MsoBevelType;
		/**
		 * @returnParam BevelBottomInset 
		 */
		BevelBottomInset: float;
		/**
		 * @returnParam BevelBottomDepth 
		 */
		BevelBottomDepth: float;
		/**
		 * @returnParam PresetCamera 
		 */
		readonly PresetCamera: MsoPresetCamera;
		/**
		 * @returnParam RotationZ 
		 */
		RotationZ: float;
		/**
		 * @returnParam Width 
		 */
		ContourWidth: float;
		/**
		 * @returnParam ContourColor 
		 */
		readonly ContourColor: ColorFormat;
		/**
		 * @returnParam FOV 
		 */
		FieldOfView: float;
		/**
		 * @returnParam ProjectText 
		 */
		ProjectText: MsoTriState;
		/**
		 * @returnParam LightAngle 
		 */
		LightAngle: float;
	}

	interface Script extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Extended 
		 */
		Extended: string;
		/**
		 * @returnParam Id 
		 */
		Id: string;
		/**
		 * @returnParam Language 
		 */
		Language: MsoScriptLanguage;
		/**
		 * @returnParam Location 
		 */
		readonly Location: MsoScriptLocation;
		Delete(): void;
		/**
		 * @returnParam Object 
		 */
		readonly Shape: IDispatch;
		/**
		 * @returnParam Script 
		 */
		ScriptText: string;
	}

	interface IMsoDiagram extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Nodes 
		 */
		readonly Nodes: DiagramNodes;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoDiagramType;
		/**
		 * @returnParam AutoLayout 
		 */
		AutoLayout: MsoTriState;
		/**
		 * @returnParam Reverse 
		 */
		Reverse: MsoTriState;
		/**
		 * @returnParam AutoFormat 
		 */
		AutoFormat: MsoTriState;
		Convert(Type: MsoDiagramType): void;
		FitText(): void;
	}

	interface DiagramNodes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppdn 
		 */
		Item(Index: any): DiagramNode;
		SelectAll(): void;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam iDiagramNodes 
		 */
		readonly Count: int;
	}

	interface DiagramNode extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam NewNode 
		 */
		AddNode(Pos?: Default<MsoRelativeNodePosition, 2>, NodeType?: Default<MsoDiagramNodeType, 1>): DiagramNode;
		Delete(): void;
		MoveNode(TargetNode: DiagramNode, Pos: MsoRelativeNodePosition): void;
		ReplaceNode(TargetNode: DiagramNode): void;
		SwapNode(TargetNode: DiagramNode, SwapChildren?: Default<boolean, true>): void;
		/**
		 * @returnParam Node 
		 */
		CloneNode(CopyChildren: boolean, TargetNode: DiagramNode, Pos?: Default<MsoRelativeNodePosition, 2>): DiagramNode;
		TransferChildren(ReceivingNode: DiagramNode): void;
		/**
		 * @returnParam NextNode 
		 */
		NextNode(): DiagramNode;
		/**
		 * @returnParam PrevNode 
		 */
		PrevNode(): DiagramNode;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Children 
		 */
		readonly Children: DiagramNodeChildren;
		/**
		 * @returnParam Shape 
		 */
		readonly Shape: Shape;
		/**
		 * @returnParam Root 
		 */
		readonly Root: DiagramNode;
		/**
		 * @returnParam Diagram 
		 */
		readonly Diagram: IMsoDiagram;
		/**
		 * @returnParam Type 
		 */
		Layout: MsoOrgChartLayoutType;
		/**
		 * @returnParam Shape 
		 */
		readonly TextShape: Shape;
	}

	interface DiagramNodeChildren extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Node 
		 */
		Item(Index: any): DiagramNode;
		/**
		 * @returnParam NewNode 
		 */
		AddNode(Index?: Default<any, -1>, NodeType?: Default<MsoDiagramNodeType, 1>): DiagramNode;
		SelectAll(): void;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam iDiagramNodes 
		 */
		readonly Count: int;
		/**
		 * @returnParam First 
		 */
		readonly FirstChild: DiagramNode;
		/**
		 * @returnParam Last 
		 */
		readonly LastChild: DiagramNode;
	}

	interface CanvasShapes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): Shape;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Callout 
		 */
		AddCallout(Type: MsoCalloutType, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Connector 
		 */
		AddConnector(Type: MsoConnectorType, BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
		/**
		 * @returnParam Curve 
		 */
		AddCurve(SafeArrayOfPoints: any): Shape;
		/**
		 * @returnParam Label 
		 */
		AddLabel(Orientation: MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Line 
		 */
		AddLine(BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
		/**
		 * @returnParam Picture 
		 */
		AddPicture(FileName: string, LinkToFile: MsoTriState, SaveWithDocument: MsoTriState, Left: float, Top: float, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>): Shape;
		/**
		 * @returnParam Polyline 
		 */
		AddPolyline(SafeArrayOfPoints: any): Shape;
		/**
		 * @returnParam Shape 
		 */
		AddShape(Type: MsoAutoShapeType, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam TextEffect 
		 */
		AddTextEffect(PresetTextEffect: MsoPresetTextEffect, Text: string, FontName: string, FontSize: float, FontBold: MsoTriState, FontItalic: MsoTriState, Left: float, Top: float): Shape;
		/**
		 * @returnParam Textbox 
		 */
		AddTextbox(Orientation: MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam FreeformBuilder 
		 */
		BuildFreeform(EditingType: MsoEditingType, X1: float, Y1: float): FreeformBuilder;
		/**
		 * @returnParam Range 
		 */
		Range(Index: any): ShapeRange;
		SelectAll(): void;
		/**
		 * @returnParam Background 
		 */
		readonly Background: Shape;
	}

	interface FreeformBuilder extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		AddNodes(SegmentType: MsoSegmentType, EditingType: MsoEditingType, X1: float, Y1: float, X2?: Default<float, 0.000000>, Y2?: Default<float, 0.000000>, X3?: Default<float, 0.000000>, Y3?: Default<float, 0.000000>): void;
		/**
		 * @returnParam Freeform 
		 */
		ConvertToShape(): Shape;
	}

	interface TextFrame2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam MarginBottom 
		 */
		MarginBottom: float;
		/**
		 * @returnParam MarginLeft 
		 */
		MarginLeft: float;
		/**
		 * @returnParam MarginRight 
		 */
		MarginRight: float;
		/**
		 * @returnParam MarginTop 
		 */
		MarginTop: float;
		/**
		 * @returnParam Orientation 
		 */
		Orientation: MsoTextOrientation;
		/**
		 * @returnParam HorizontalAnchor 
		 */
		HorizontalAnchor: MsoHorizontalAnchor;
		/**
		 * @returnParam VerticalAnchor 
		 */
		VerticalAnchor: MsoVerticalAnchor;
		/**
		 * @returnParam PathFormat 
		 */
		PathFormat: MsoPathFormat;
		/**
		 * @returnParam WarpFormat 
		 */
		WarpFormat: MsoWarpFormat;
		/**
		 * @returnParam WordArtformat 
		 */
		WordArtformat: MsoPresetTextEffect;
		/**
		 * @returnParam WordWrap 
		 */
		WordWrap: MsoTriState;
		/**
		 * @returnParam AutoSize 
		 */
		AutoSize: MsoAutoSize;
		/**
		 * @returnParam ThreeD 
		 */
		readonly ThreeD: ThreeDFormat;
		/**
		 * @returnParam pHasText 
		 */
		readonly HasText: MsoTriState;
		/**
		 * @returnParam Range 
		 */
		readonly TextRange: TextRange2;
		/**
		 * @returnParam Column 
		 */
		readonly Column: TextColumn2;
		/**
		 * @returnParam Ruler 
		 */
		readonly Ruler: Ruler2;
		DeleteText(): void;
		/**
		 * @returnParam NoTextRotation 
		 */
		NoTextRotation: MsoTriState;
	}

	interface TextRange2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrText 
		 */
		Text: string;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): TextRange2;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Paragraphs(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Sentences(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Words(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Characters(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Lines(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		Runs(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @returnParam Format 
		 */
		readonly ParagraphFormat: ParagraphFormat2;
		/**
		 * @returnParam Font 
		 */
		readonly Font: Font2;
		/**
		 * @returnParam Length 
		 */
		readonly Length: int;
		/**
		 * @returnParam Start 
		 */
		readonly Start: int;
		/**
		 * @returnParam BoundLeft 
		 */
		readonly BoundLeft: float;
		/**
		 * @returnParam BoundTop 
		 */
		readonly BoundTop: float;
		/**
		 * @returnParam BoundWidth 
		 */
		readonly BoundWidth: float;
		/**
		 * @returnParam BoundHeight 
		 */
		readonly BoundHeight: float;
		/**
		 * @returnParam TrimText 
		 */
		TrimText(): TextRange2;
		/**
		 * @returnParam TextRange 
		 */
		InsertAfter(NewText?: Default<string, "">): TextRange2;
		/**
		 * @returnParam TextRange 
		 */
		InsertBefore(NewText?: Default<string, "">): TextRange2;
		/**
		 * @returnParam TextRange 
		 */
		InsertSymbol(FontName: string, CharNumber: int, Unicode?: Default<MsoTriState, 0>): TextRange2;
		Select(): void;
		Cut(): void;
		Copy(): void;
		Delete(): void;
		/**
		 * @returnParam TextRange 
		 */
		Paste(): TextRange2;
		/**
		 * @returnParam TextRange 
		 */
		PasteSpecial(Format: MsoClipboardFormat): TextRange2;
		ChangeCase(Type: MsoTextChangeCase): void;
		AddPeriods(): void;
		RemovePeriods(): void;
		/**
		 * @returnParam TextRange 
		 */
		Find(FindWhat: string, After?: Default<int, 0>, MatchCase?: Default<MsoTriState, 0>, WholeWords?: Default<MsoTriState, 0>): TextRange2;
		/**
		 * @returnParam TextRange 
		 */
		Replace(FindWhat: string, ReplaceWhat: string, After?: Default<int, 0>, MatchCase?: Default<MsoTriState, 0>, WholeWords?: Default<MsoTriState, 0>): TextRange2;
		/** @paramList [X1, Y1, X2, Y2, X3, Y3, x4, y4] */
		RotatedBounds(): {X1: float, Y1: float, X2: float, Y2: float, X3: float, Y3: float, x4: float, y4: float};
		/**
		 * @returnParam LanguageID 
		 */
		LanguageID: MsoLanguageID;
		RtlRun(): void;
		LtrRun(): void;
		/**
		 * @get 
		 * @returnParam Range 
		 */
		MathZones(Start?: Default<int, -1>, Length?: Default<int, -1>): TextRange2;
		/**
		 * @returnParam Range 
		 */
		InsertChartField(ChartFieldType: MsoChartFieldType, Formula?: Default<string, "">, Position?: Default<int, -1>): TextRange2;
	}

	interface ParagraphFormat2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Alignment 
		 */
		Alignment: MsoParagraphAlignment;
		/**
		 * @returnParam BaselineAlignment 
		 */
		BaselineAlignment: MsoBaselineAlignment;
		/**
		 * @returnParam Bullet 
		 */
		readonly Bullet: BulletFormat2;
		/**
		 * @returnParam Break 
		 */
		FarEastLineBreakLevel: MsoTriState;
		/**
		 * @returnParam Indent 
		 */
		FirstLineIndent: float;
		/**
		 * @returnParam Hanging 
		 */
		HangingPunctuation: MsoTriState;
		/**
		 * @returnParam Level 
		 */
		IndentLevel: int;
		/**
		 * @returnParam Indent 
		 */
		LeftIndent: float;
		/**
		 * @returnParam LineRule 
		 */
		LineRuleAfter: MsoTriState;
		/**
		 * @returnParam LineRule 
		 */
		LineRuleBefore: MsoTriState;
		/**
		 * @returnParam LineRule 
		 */
		LineRuleWithin: MsoTriState;
		/**
		 * @returnParam Indent 
		 */
		RightIndent: float;
		/**
		 * @returnParam Space 
		 */
		SpaceAfter: float;
		/**
		 * @returnParam Space 
		 */
		SpaceBefore: float;
		/**
		 * @returnParam Space 
		 */
		SpaceWithin: float;
		/**
		 * @returnParam TabStops 
		 */
		readonly TabStops: TabStops2;
		/**
		 * @returnParam Direction 
		 */
		TextDirection: MsoTextDirection;
		/**
		 * @returnParam WordWrap 
		 */
		WordWrap: MsoTriState;
	}

	interface BulletFormat2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Character 
		 */
		Character: int;
		/**
		 * @returnParam Font 
		 */
		readonly Font: Font2;
		/**
		 * @returnParam Number 
		 */
		readonly Number: int;
		Picture(FileName: string): void;
		/**
		 * @returnParam Size 
		 */
		RelativeSize: float;
		/**
		 * @returnParam Start 
		 */
		StartValue: int;
		/**
		 * @returnParam Style 
		 */
		Style: MsoNumberedBulletStyle;
		/**
		 * @returnParam Type 
		 */
		Type: MsoBulletType;
		/**
		 * @returnParam UseTextColor 
		 */
		UseTextColor: MsoTriState;
		/**
		 * @returnParam UseTextFont 
		 */
		UseTextFont: MsoTriState;
		/**
		 * @returnParam Visible 
		 */
		Visible: MsoTriState;
	}

	interface Font2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Bold 
		 */
		Bold: MsoTriState;
		/**
		 * @returnParam Italic 
		 */
		Italic: MsoTriState;
		/**
		 * @returnParam Strike 
		 */
		Strike: MsoTextStrike;
		/**
		 * @returnParam Caps 
		 */
		Caps: MsoTextCaps;
		/**
		 * @returnParam RotateNumbers 
		 */
		AutorotateNumbers: MsoTriState;
		/**
		 * @returnParam Offset 
		 */
		BaselineOffset: float;
		/**
		 * @returnParam KerningSize 
		 */
		Kerning: float;
		/**
		 * @returnParam Size 
		 */
		Size: float;
		/**
		 * @returnParam Spacing 
		 */
		Spacing: float;
		/**
		 * @returnParam Style 
		 */
		UnderlineStyle: MsoTextUnderlineType;
		/**
		 * @returnParam Allcaps 
		 */
		Allcaps: MsoTriState;
		/**
		 * @returnParam DoubleStrikeThrough 
		 */
		DoubleStrikeThrough: MsoTriState;
		/**
		 * @returnParam Equalize 
		 */
		Equalize: MsoTriState;
		/**
		 * @returnParam Fill 
		 */
		readonly Fill: FillFormat;
		/**
		 * @returnParam Glow 
		 */
		readonly Glow: GlowFormat;
		/**
		 * @returnParam Reflection 
		 */
		readonly Reflection: ReflectionFormat;
		/**
		 * @returnParam Line 
		 */
		readonly Line: LineFormat;
		/**
		 * @returnParam Shadow 
		 */
		readonly Shadow: ShadowFormat;
		/**
		 * @returnParam Highlight 
		 */
		readonly Highlight: ColorFormat;
		/**
		 * @returnParam UnderlineColor 
		 */
		readonly UnderlineColor: ColorFormat;
		/**
		 * @returnParam Smallcaps 
		 */
		Smallcaps: MsoTriState;
		/**
		 * @returnParam SoftEdgeFormat 
		 */
		SoftEdgeFormat: MsoSoftEdgeType;
		/**
		 * @returnParam StrikeThrough 
		 */
		StrikeThrough: MsoTriState;
		/**
		 * @returnParam Subscript 
		 */
		Subscript: MsoTriState;
		/**
		 * @returnParam Superscript 
		 */
		Superscript: MsoTriState;
		/**
		 * @returnParam WordArtformat 
		 */
		WordArtformat: MsoPresetTextEffect;
		/**
		 * @returnParam Embeddable 
		 */
		readonly Embeddable: MsoTriState;
		/**
		 * @returnParam Embedded 
		 */
		readonly Embedded: MsoTriState;
		/**
		 * @returnParam Name 
		 */
		Name: string;
		/**
		 * @returnParam NameAscii 
		 */
		NameAscii: string;
		/**
		 * @returnParam NameComplexScript 
		 */
		NameComplexScript: string;
		/**
		 * @returnParam NameFarEast 
		 */
		NameFarEast: string;
		/**
		 * @returnParam NameOther 
		 */
		NameOther: string;
	}

	interface GlowFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Radius 
		 */
		Radius: float;
		/**
		 * @returnParam Color 
		 */
		readonly Color: ColorFormat;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
	}

	interface ReflectionFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Type 
		 */
		Type: MsoReflectionType;
		/**
		 * @returnParam Transparency 
		 */
		Transparency: float;
		/**
		 * @returnParam Size 
		 */
		Size: float;
		/**
		 * @returnParam Offset 
		 */
		Offset: float;
		/**
		 * @returnParam Blur 
		 */
		Blur: float;
	}

	interface TabStops2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam TabStop 
		 */
		Item(Index: any): TabStop2;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam TabStop 
		 */
		Add(Type: MsoTabStopType, Position: float): TabStop2;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Spacing 
		 */
		DefaultSpacing: float;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface TabStop2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		Clear(): void;
		/**
		 * @returnParam Position 
		 */
		Position: float;
		/**
		 * @returnParam Type 
		 */
		Type: MsoTabStopType;
	}

	interface TextColumn2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Number 
		 */
		Number: int;
		/**
		 * @returnParam Spacing 
		 */
		Spacing: float;
		/**
		 * @returnParam Direction 
		 */
		TextDirection: MsoTextDirection;
	}

	interface Ruler2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam RulerLevels 
		 */
		readonly Levels: RulerLevels2;
		/**
		 * @returnParam TabStops 
		 */
		readonly TabStops: TabStops2;
	}

	interface RulerLevels2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam RulerLevel 
		 */
		Item(Index: any): RulerLevel2;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface RulerLevel2 extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam FirstMargin 
		 */
		FirstMargin: float;
		/**
		 * @returnParam LeftMargin 
		 */
		LeftMargin: float;
	}

	interface IMsoChart {
		readonly Parent: IDispatch;
		/**
		 * @returnParam fTitle 
		 */
		HasTitle: boolean;
		/**
		 * @returnParam pval 
		 */
		readonly ChartTitle: IMsoChartTitle;
		/**
		 * @returnParam pwDepthPercent 
		 */
		DepthPercent: int;
		/**
		 * @returnParam pwElevation 
		 */
		Elevation: int;
		/**
		 * @returnParam pwGapDepth 
		 */
		GapDepth: int;
		/**
		 * @returnParam pwHeightPercent 
		 */
		HeightPercent: int;
		/**
		 * @returnParam pwPerspective 
		 */
		Perspective: int;
		/**
		 * @returnParam pvarRightAngleAxes 
		 */
		RightAngleAxes: any;
		/**
		 * @returnParam pvarRotation 
		 */
		Rotation: any;
		/**
		 * @returnParam pres 
		 */
		DisplayBlanksAs: XlDisplayBlanksAs;
		/**
		 * @returnParam pres 
		 */
		ProtectData: boolean;
		/**
		 * @returnParam pres 
		 */
		ProtectFormatting: boolean;
		/**
		 * @returnParam pres 
		 */
		ProtectGoalSeek: boolean;
		/**
		 * @returnParam pres 
		 */
		ProtectSelection: boolean;
		/**
		 * @returnParam pres 
		 */
		ProtectChartObjects: boolean;
		UnProtect(Password?: any): void;
		Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
		/**
		 * @needLCID  
		 * @get 
		 */
		ChartGroups( /** @pointer */ pvarIndex?: any, varIgallery?: any): IDispatch;
		SeriesCollection(Index?: any): IDispatch;
		_ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
		SubType: int4;
		Type: int4;
		readonly Corners: IMsoCorners;
		ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
		ChartType: XlChartType;
		HasDataTable: boolean;
		ApplyCustomType(ChartType: XlChartType, TypeName?: any): void;
		/** @paramList [x, y, ElementID, Arg1, Arg2] */
		GetChartElement(x: int4, y: int4): {ElementID: int4, Arg1: int4, Arg2: int4};
		SetSourceData(Source: string, PlotBy?: any): void;
		/**
		 * @returnParam PlotBy 
		 */
		PlotBy: XlRowCol;
		HasLegend: boolean;
		readonly Legend: IMsoLegend;
		/**
		 * @returnParam ppAxes 
		 */
		Axes(Type?: any, AxisGroup?: Default<XlAxisGroup, 1>): IDispatch;
		/**
		 * @put 
		 */
		HasAxis(axisType?: any, AxisGroup?: any, pval?: any): void;
		/**
		 * @get 
		 * @returnParam pval 
		 */
		HasAxis(axisType?: any, AxisGroup?: any): any;
		/**
		 * @get 
		 * @returnParam ppwalls 
		 */
		Walls(fBackWall?: Default<boolean, true>): IMsoWalls;
		/**
		 * @returnParam ppfloor 
		 */
		readonly Floor: IMsoFloor;
		/**
		 * @returnParam ppplotarea 
		 */
		readonly PlotArea: IMsoPlotArea;
		PlotVisibleOnly: boolean;
		/**
		 * @returnParam ppchartarea 
		 */
		readonly ChartArea: IMsoChartArea;
		AutoFormat(rGallery: int4, varFormat?: any): void;
		/**
		 * @returnParam f 
		 */
		AutoScaling: boolean;
		SetBackgroundPicture(bstr: string): void;
		/**
		 * @needLCID  
		 */
		ChartWizard(varSource?: any, varGallery?: any, varFormat?: any, varPlotBy?: any, varCategoryLabels?: any, varSeriesLabels?: any, varHasLegend?: any, varTitle?: any, varCategoryTitle?: any, varValueTitle?: any, varExtraTitle?: any): void;
		/**
		 * @needLCID  
		 */
		CopyPicture(Appearance?: Default<int, 1>, Format?: Default<int, -4147>, Size?: Default<int, 2>): void;
		readonly DataTable: IMsoDataTable;
		/**
		 * @returnParam pvar 
		 */
		_Evaluate(varName: any, LocaleID: int4): any;
		/**
		 * @needLCID  
		 */
		Paste(varType?: any): void;
		/**
		 * @returnParam pShape 
		 */
		BarShape: XlBarShape;
		/**
		 * @returnParam f 
		 */
		Export(bstr: string, varFilterName?: any, varInteractive?: any): boolean;
		SetDefaultChart(varName: any): void;
		ApplyChartTemplate(bstrFileName: string): void;
		SaveChartTemplate(bstrFileName: string): void;
		readonly SideWall: IMsoWalls;
		readonly BackWall: IMsoWalls;
		ChartStyle: any;
		ClearToMatchStyle(): void;
		readonly PivotLayout: IDispatch;
		HasPivotFields: boolean;
		RefreshPivotTable(): void;
		/**
		 * @returnParam pRHS 
		 */
		ShowDataLabelsOverMaximum: boolean;
		ApplyLayout(Layout: int4, varChartType?: any): void;
		readonly Selection: IDispatch;
		Refresh(): void;
		SetElement(RHS: MsoChartElementType): void;
		/**
		 * @returnParam ppchartdata 
		 */
		readonly ChartData: IMsoChartData;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppShapes 
		 */
		readonly Shapes: Shapes;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @needLCID  
		 */
		readonly Area3DGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		AreaGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		readonly Bar3DGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		BarGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		readonly Column3DGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		ColumnGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		readonly Line3DGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		LineGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		readonly Pie3DGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		PieGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		DoughnutGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		RadarGroups(Index?: any): IDispatch;
		/**
		 * @needLCID  
		 */
		readonly SurfaceGroup: IMsoChartGroup;
		/**
		 * @needLCID  
		 */
		XYGroups(Index?: any): IDispatch;
		Delete(): any;
		Copy(): any;
		Select(Replace?: any): any;
		/**
		 * @returnParam res 
		 */
		ShowReportFilterFieldButtons: boolean;
		/**
		 * @returnParam res 
		 */
		ShowLegendFieldButtons: boolean;
		/**
		 * @returnParam res 
		 */
		ShowAxisFieldButtons: boolean;
		/**
		 * @returnParam res 
		 */
		ShowValueFieldButtons: boolean;
		/**
		 * @returnParam res 
		 */
		ShowAllFieldButtons: boolean;
		set ProtectChartSheetFormatting(arg1: boolean);
		FullSeriesCollection(Index?: any): IDispatch;
		/**
		 * @returnParam plevel 
		 */
		CategoryLabelLevel: XlCategoryLabelLevel;
		/**
		 * @returnParam plevel 
		 */
		SeriesNameLevel: XlSeriesNameLevel;
		/**
		 * @returnParam res 
		 */
		readonly HasHiddenContent: boolean;
		DeleteHiddenContent(): void;
		ChartColor: any;
		ClearToMatchColorStyle(): void;
	}

	interface IMsoChartTitle {
		/**
		 * @returnParam pbstr 
		 */
		Caption: string;
		/**
		 * @get 
		 */
		Characters(Start?: any, Length?: any): IMsoCharacters;
		/**
		 * @returnParam ppfont 
		 */
		readonly Font: ChartFont;
		/**
		 * @returnParam Val 
		 */
		HorizontalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		Left: double;
		/**
		 * @returnParam Val 
		 */
		Orientation: any;
		/**
		 * @returnParam pval 
		 */
		Shadow: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
		/**
		 * @returnParam pval 
		 */
		Top: double;
		/**
		 * @returnParam Val 
		 */
		VerticalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		ReadingOrder: int;
		/**
		 * @returnParam Val 
		 */
		AutoScaleFont: any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pval 
		 */
		Delete(): any;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pval 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppval 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pval 
		 */
		Select(): any;
		IncludeInLayout: boolean;
		/**
		 * @returnParam pval 
		 */
		Position: XlChartElementPosition;
		/**
		 * @returnParam ppval 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam pval 
		 */
		readonly Height: double;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pval 
		 */
		readonly Width: double;
		/**
		 * @returnParam pbstr 
		 */
		Formula: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaLocal: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1Local: string;
	}

	interface IMsoCharacters {
		readonly Parent: IDispatch;
		Caption: string;
		readonly Count: int4;
		Delete(): any;
		readonly Font: ChartFont;
		Insert(bstr: string): any;
		Text: string;
		PhoneticCharacters: string;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface ChartFont {
		/**
		 * @returnParam pval 
		 */
		Background: any;
		/**
		 * @returnParam pval 
		 */
		Bold: any;
		/**
		 * @returnParam pval 
		 */
		Color: any;
		/**
		 * @returnParam pval 
		 */
		ColorIndex: any;
		/**
		 * @returnParam pval 
		 */
		FontStyle: any;
		/**
		 * @returnParam pval 
		 */
		Italic: any;
		/**
		 * @returnParam pval 
		 */
		Name: any;
		/**
		 * @returnParam pval 
		 */
		OutlineFont: any;
		/**
		 * @returnParam pval 
		 */
		Shadow: any;
		/**
		 * @returnParam pval 
		 */
		Size: any;
		/**
		 * @returnParam pval 
		 */
		StrikeThrough: any;
		/**
		 * @returnParam pval 
		 */
		Subscript: any;
		/**
		 * @returnParam pval 
		 */
		Superscript: any;
		/**
		 * @returnParam pval 
		 */
		Underline: any;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface IMsoInterior {
		/**
		 * @returnParam pval 
		 */
		Color: any;
		/**
		 * @returnParam pval 
		 */
		ColorIndex: any;
		/**
		 * @returnParam pval 
		 */
		InvertIfNegative: any;
		/**
		 * @returnParam pval 
		 */
		Pattern: any;
		/**
		 * @returnParam pval 
		 */
		PatternColor: any;
		/**
		 * @returnParam pval 
		 */
		PatternColorIndex: any;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface ChartFillFormat {
		OneColorGradient(Style: int, Variant: int, Degree: float): void;
		TwoColorGradient(Style: int, Variant: int): void;
		PresetTextured(PresetTexture: int): void;
		Solid(): void;
		Patterned(Pattern: int): void;
		UserPicture(PictureFile: any, PictureFormat: any, PictureStackUnit: any, PicturePlacement: any): void;
		UserTextured(TextureFile: string): void;
		PresetGradient(Style: int, Variant: int, PresetGradientType: int): void;
		/**
		 * @returnParam pval 
		 */
		readonly BackColor: ChartColorFormat;
		/**
		 * @returnParam pval 
		 */
		readonly ForeColor: ChartColorFormat;
		/**
		 * @returnParam pval 
		 */
		readonly GradientColorType: int;
		/**
		 * @returnParam pval 
		 */
		readonly GradientDegree: float;
		/**
		 * @returnParam pval 
		 */
		readonly GradientStyle: int;
		/**
		 * @returnParam pval 
		 */
		readonly GradientVariant: int;
		/**
		 * @returnParam pval 
		 */
		readonly Pattern: int;
		/**
		 * @returnParam pval 
		 */
		readonly PresetGradientType: int;
		/**
		 * @returnParam pval 
		 */
		readonly PresetTexture: int;
		/**
		 * @returnParam pval 
		 */
		readonly TextureName: string;
		/**
		 * @returnParam pval 
		 */
		readonly TextureType: int;
		/**
		 * @returnParam pval 
		 */
		readonly Type: int;
		/**
		 * @returnParam pval 
		 */
		Visible: int;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface ChartColorFormat {
		readonly Parent: IDispatch;
		SchemeColor: int4;
		RGB: int4;
		readonly _Default: int4;
		readonly Type: int4;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoBorder {
		/**
		 * @returnParam pval 
		 */
		Color: any;
		/**
		 * @returnParam pval 
		 */
		ColorIndex: any;
		/**
		 * @returnParam pval 
		 */
		LineStyle: any;
		/**
		 * @returnParam pval 
		 */
		Weight: any;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface IMsoChartFormat {
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: FillFormat;
		/**
		 * @returnParam ppGlow 
		 */
		readonly Glow: GlowFormat;
		/**
		 * @returnParam ppline 
		 */
		readonly Line: LineFormat;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppPictureFormat 
		 */
		readonly PictureFormat: PictureFormat;
		/**
		 * @returnParam ppShadow 
		 */
		readonly Shadow: ShadowFormat;
		/**
		 * @returnParam ppSoftEdge 
		 */
		readonly SoftEdge: SoftEdgeFormat;
		/**
		 * @returnParam ppTextFrame 
		 */
		readonly TextFrame2: TextFrame2;
		/**
		 * @returnParam ppThreeD 
		 */
		readonly ThreeD: ThreeDFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppAdjustments 
		 */
		readonly Adjustments: Adjustments;
		/**
		 * @returnParam AutoShapeType 
		 */
		AutoShapeType: MsoAutoShapeType;
	}

	interface SoftEdgeFormat extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Type 
		 */
		Type: MsoSoftEdgeType;
		/**
		 * @returnParam Radius 
		 */
		Radius: float;
	}

	interface IMsoCorners {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): any;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoLegend {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): any;
		readonly Border: IMsoBorder;
		Delete(): any;
		readonly Font: ChartFont;
		LegendEntries(Index?: any): IDispatch;
		Position: XlLegendPosition;
		Shadow: boolean;
		Clear(): any;
		Height: double;
		readonly Interior: IMsoInterior;
		readonly Fill: ChartFillFormat;
		Left: double;
		Top: double;
		Width: double;
		AutoScaleFont: any;
		IncludeInLayout: boolean;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoWalls {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		ClearFormats(): any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pvar 
		 */
		PictureType: any;
		Paste(): void;
		/**
		 * @returnParam pvar 
		 */
		PictureUnit: any;
		Thickness: int4;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoFloor {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		ClearFormats(): any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pvar 
		 */
		PictureType: any;
		Paste(): void;
		Thickness: int4;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoPlotArea {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		ClearFormats(): any;
		/**
		 * @returnParam pd 
		 */
		Height: double;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pd 
		 */
		Left: double;
		/**
		 * @returnParam pd 
		 */
		Top: double;
		/**
		 * @returnParam pd 
		 */
		Width: double;
		/**
		 * @returnParam pd 
		 */
		InsideLeft: double;
		/**
		 * @returnParam pd 
		 */
		InsideTop: double;
		/**
		 * @returnParam pd 
		 */
		InsideWidth: double;
		/**
		 * @returnParam pd 
		 */
		InsideHeight: double;
		/**
		 * @returnParam pval 
		 */
		Position: XlChartElementPosition;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoChartArea {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		Clear(): any;
		/**
		 * @returnParam pvar 
		 */
		ClearContents(): any;
		/**
		 * @returnParam pvar 
		 */
		Copy(): any;
		/**
		 * @returnParam ppfont 
		 */
		readonly Font: ChartFont;
		/**
		 * @returnParam pf 
		 */
		Shadow: boolean;
		/**
		 * @returnParam pvar 
		 */
		ClearFormats(): any;
		/**
		 * @returnParam pd 
		 */
		Height: double;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pd 
		 */
		Left: double;
		/**
		 * @returnParam pd 
		 */
		Top: double;
		/**
		 * @returnParam pd 
		 */
		Width: double;
		/**
		 * @returnParam pvar 
		 */
		AutoScaleFont: any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam pval 
		 */
		RoundedCorners: boolean;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoDataTable {
		/**
		 * @returnParam pfVisible 
		 */
		ShowLegendKey: boolean;
		/**
		 * @returnParam pfVisible 
		 */
		HasBorderHorizontal: boolean;
		/**
		 * @returnParam pfVisible 
		 */
		HasBorderVertical: boolean;
		/**
		 * @returnParam pfVisible 
		 */
		HasBorderOutline: boolean;
		/**
		 * @returnParam ppline 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pfont 
		 */
		readonly Font: ChartFont;
		Select(): void;
		Delete(): void;
		/**
		 * @returnParam ppval 
		 */
		readonly Parent: IDispatch;
		AutoScaleFont: any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoChartData {
		/**
		 * @returnParam ppdispWorkbook 
		 */
		readonly Workbook: IDispatch;
		Activate(): void;
		/**
		 * @returnParam pfIsLinked 
		 */
		readonly IsLinked: boolean;
		BreakLink(): void;
		ActivateChartDataWindow(): void;
	}

	interface Shapes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): Shape;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Callout 
		 */
		AddCallout(Type: MsoCalloutType, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Connector 
		 */
		AddConnector(Type: MsoConnectorType, BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
		/**
		 * @returnParam Curve 
		 */
		AddCurve(SafeArrayOfPoints: any): Shape;
		/**
		 * @returnParam Label 
		 */
		AddLabel(Orientation: MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Line 
		 */
		AddLine(BeginX: float, BeginY: float, EndX: float, EndY: float): Shape;
		/**
		 * @returnParam Picture 
		 */
		AddPicture(FileName: string, LinkToFile: MsoTriState, SaveWithDocument: MsoTriState, Left: float, Top: float, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>): Shape;
		/**
		 * @returnParam Polyline 
		 */
		AddPolyline(SafeArrayOfPoints: any): Shape;
		/**
		 * @returnParam Shape 
		 */
		AddShape(Type: MsoAutoShapeType, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam TextEffect 
		 */
		AddTextEffect(PresetTextEffect: MsoPresetTextEffect, Text: string, FontName: string, FontSize: float, FontBold: MsoTriState, FontItalic: MsoTriState, Left: float, Top: float): Shape;
		/**
		 * @returnParam Textbox 
		 */
		AddTextbox(Orientation: MsoTextOrientation, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam FreeformBuilder 
		 */
		BuildFreeform(EditingType: MsoEditingType, X1: float, Y1: float): FreeformBuilder;
		/**
		 * @returnParam Range 
		 */
		Range(Index: any): ShapeRange;
		SelectAll(): void;
		/**
		 * @returnParam Background 
		 */
		readonly Background: Shape;
		/**
		 * @returnParam Default 
		 */
		readonly Default: Shape;
		/**
		 * @returnParam Diagram 
		 */
		AddDiagram(Type: MsoDiagramType, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Shape 
		 */
		AddCanvas(Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam Chart 
		 */
		AddChart(Type?: Default<XlChartType, -1>, Left?: Default<float, -1.000000>, Top?: Default<float, -1.000000>, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>): Shape;
		/**
		 * @returnParam Table 
		 */
		AddTable(NumRows: int, NumColumns: int, Left: float, Top: float, Width: float, Height: float): Shape;
		/**
		 * @returnParam SmartArt 
		 */
		AddSmartArt(Layout: SmartArtLayout, Left?: Default<float, -1.000000>, Top?: Default<float, -1.000000>, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>): Shape;
		/**
		 * @returnParam Chart 
		 */
		AddChart2(Style?: Default<int, -1>, Type?: Default<XlChartType, -1>, Left?: Default<float, -1.000000>, Top?: Default<float, -1.000000>, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>, NewLayout?: Default<boolean, true>): Shape;
		/**
		 * @returnParam Picture 
		 */
		AddPicture2(FileName: string, LinkToFile: MsoTriState, SaveWithDocument: MsoTriState, Left: float, Top: float, Width?: Default<float, -1.000000>, Height?: Default<float, -1.000000>, Compress?: Default<MsoPictureCompress, -1>): Shape;
	}

	interface SmartArtLayout extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam LayoutId 
		 */
		readonly Id: string;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Description 
		 */
		readonly Description: string;
		/**
		 * @returnParam Category 
		 */
		readonly Category: string;
	}

	interface IMsoChartGroup {
		/**
		 * @returnParam piGroup 
		 */
		AxisGroup: int;
		/**
		 * @returnParam pDoughnutHoleSize 
		 */
		DoughnutHoleSize: int;
		/**
		 * @returnParam ppdownbars 
		 */
		readonly DownBars: IMsoDownBars;
		/**
		 * @returnParam ppdroplines 
		 */
		readonly DropLines: IMsoDropLines;
		/**
		 * @returnParam pFirstSliceAngle 
		 */
		FirstSliceAngle: int;
		/**
		 * @returnParam pGapWidth 
		 */
		GapWidth: int;
		/**
		 * @returnParam pfHasDropLines 
		 */
		HasDropLines: boolean;
		/**
		 * @returnParam pfHasHiLoLines 
		 */
		HasHiLoLines: boolean;
		/**
		 * @returnParam pfHasRadarAxisLabels 
		 */
		HasRadarAxisLabels: boolean;
		/**
		 * @returnParam pfHasSeriesLines 
		 */
		HasSeriesLines: boolean;
		/**
		 * @returnParam pfHasUpDownBars 
		 */
		HasUpDownBars: boolean;
		/**
		 * @returnParam ppHiLoLines 
		 */
		readonly HiLoLines: IMsoHiLoLines;
		/**
		 * @returnParam pIndex 
		 */
		readonly Index: int;
		/**
		 * @returnParam pOverlap 
		 */
		Overlap: int;
		/**
		 * @returnParam ppRadarAxisLabels 
		 */
		readonly RadarAxisLabels: IDispatch;
		/**
		 * @returnParam ppSeriesCollection 
		 */
		SeriesCollection(Index?: any): IDispatch;
		/**
		 * @returnParam ppSeriesLines 
		 */
		readonly SeriesLines: IMsoSeriesLines;
		/**
		 * @returnParam pSubType 
		 */
		SubType: int;
		/**
		 * @returnParam ptype 
		 */
		Type: int;
		/**
		 * @returnParam ppUpBars 
		 */
		readonly UpBars: IMsoUpBars;
		/**
		 * @returnParam pfVaryByCategories 
		 */
		VaryByCategories: boolean;
		/**
		 * @returnParam pXlSizeRepresents 
		 */
		SizeRepresents: XlSizeRepresents;
		/**
		 * @returnParam pbubblescale 
		 */
		BubbleScale: int;
		/**
		 * @returnParam pfShowNegativeBubbles 
		 */
		ShowNegativeBubbles: boolean;
		/**
		 * @returnParam pChartSplitType 
		 */
		SplitType: XlChartSplitType;
		/**
		 * @returnParam pSplitValue 
		 */
		SplitValue: any;
		/**
		 * @returnParam pSecondPlotSize 
		 */
		SecondPlotSize: int;
		Has3DShading: boolean;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppcatcollection 
		 */
		CategoryCollection(Index?: any): IDispatch;
		/**
		 * @returnParam ppcatcollection 
		 */
		FullCategoryCollection(Index?: any): IDispatch;
	}

	interface IMsoDownBars {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		Delete(): any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoDropLines {
		readonly Name: string;
		Select(): void;
		readonly Parent: IDispatch;
		readonly Border: IMsoBorder;
		Delete(): void;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoHiLoLines {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): void;
		readonly Border: IMsoBorder;
		Delete(): void;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoSeriesLines {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		Delete(): any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoUpBars {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		Delete(): any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppfill 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface SmartArt extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Nodes 
		 */
		readonly AllNodes: SmartArtNodes;
		/**
		 * @returnParam Nodes 
		 */
		readonly Nodes: SmartArtNodes;
		/**
		 * @returnParam Layout 
		 */
		Layout: SmartArtLayout;
		/**
		 * @returnParam Style 
		 */
		QuickStyle: SmartArtQuickStyle;
		/**
		 * @returnParam ColorStyle 
		 */
		Color: SmartArtColor;
		/**
		 * @returnParam Reverse 
		 */
		Reverse: MsoTriState;
		Reset(): void;
	}

	interface SmartArtNodes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam SmartArtNode 
		 */
		Item(Index: any): SmartArtNode;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam NewNode 
		 */
		Add(): SmartArtNode;
	}

	interface SmartArtNode extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam NewNode 
		 */
		AddNode(Position?: Default<MsoSmartArtNodePosition, 1>, Type?: Default<MsoSmartArtNodeType, 1>): SmartArtNode;
		Delete(): void;
		Promote(): void;
		Demote(): void;
		/**
		 * @returnParam Type 
		 */
		OrgChartLayout: MsoOrgChartLayoutType;
		/**
		 * @returnParam Shape 
		 */
		readonly Shapes: ShapeRange;
		/**
		 * @returnParam Frame 
		 */
		readonly TextFrame2: TextFrame2;
		Larger(): void;
		Smaller(): void;
		/**
		 * @returnParam Level 
		 */
		readonly Level: int;
		/**
		 * @returnParam Hidden 
		 */
		readonly Hidden: MsoTriState;
		/**
		 * @returnParam Nodes 
		 */
		readonly Nodes: SmartArtNodes;
		/**
		 * @returnParam Node 
		 */
		readonly ParentNode: SmartArtNode;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoSmartArtNodeType;
		ReorderUp(): void;
		ReorderDown(): void;
	}

	interface SmartArtQuickStyle extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam StyleId 
		 */
		readonly Id: string;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Description 
		 */
		readonly Description: string;
		/**
		 * @returnParam Category 
		 */
		readonly Category: string;
	}

	interface SmartArtColor extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ColorStyleId 
		 */
		readonly Id: string;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Description 
		 */
		readonly Description: string;
		/**
		 * @returnParam Category 
		 */
		readonly Category: string;
	}

	interface Scripts extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam Item 
		 */
		Item(Index: any): Script;
		/**
		 * @returnParam Add 
		 */
		Add(Anchor?: IDispatch, Location?: Default<MsoScriptLocation, 2>, Language?: Default<MsoScriptLanguage, 2>, Id?: Default<string, "">, Extended?: Default<string, "">, ScriptText?: Default<string, "">): Script;
		Delete(): void;
	}

	interface IMsoDispCagNotifySink {
		InsertClip(pClipMoniker: IUnknown, pItemMoniker: IUnknown): void;
		WindowIsClosing(): void;
	}

	interface Balloon extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Checkboxes: IDispatch;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Labels: IDispatch;
		/**
		 * @returnParam pbty 
		 */
		BalloonType: MsoBalloonType;
		/**
		 * @returnParam picn 
		 */
		Icon: MsoIconType;
		/**
		 * @returnParam pbstr 
		 */
		Heading: string;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
		/**
		 * @returnParam pmd 
		 */
		Mode: MsoModeType;
		/**
		 * @returnParam pfca 
		 */
		Animation: MsoAnimationType;
		/**
		 * @returnParam psbs 
		 */
		Button: MsoButtonSetType;
		/**
		 * @returnParam pbstr 
		 */
		Callback: string;
		/**
		 * @returnParam plPrivate 
		 */
		Private: int4;
		SetAvoidRectangle(Left: int, Top: int, Right: int, Bottom: int): void;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pibtn 
		 */
		Show(): MsoBalloonButtonType;
		Close(): void;
	}

	interface BalloonCheckboxes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): IDispatch;
		/**
		 * @returnParam pccbx 
		 */
		Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface BalloonCheckbox extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Item: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pvarfChecked 
		 */
		Checked: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
	}

	interface BalloonLabels extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): IDispatch;
		/**
		 * @returnParam pcwz 
		 */
		Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface BalloonLabel extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Item: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
	}

	interface AnswerWizardFiles extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @get 
		 * @returnParam pbstr 
		 */
		Item(Index: int): string;
		/**
		 * @returnParam pCount 
		 */
		readonly Count: int;
		Add(FileName: string): void;
		Delete(FileName: string): void;
	}

	interface AnswerWizard extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Files 
		 */
		readonly Files: AnswerWizardFiles;
		ClearFileList(): void;
		ResetFileList(): void;
	}

	interface Assistant extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		Move(xLeft: int, yTop: int): void;
		/**
		 * @returnParam pyTop 
		 */
		Top: int;
		/**
		 * @returnParam pxLeft 
		 */
		Left: int;
		Help(): void;
		/**
		 * @returnParam plWizID 
		 */
		StartWizard(On: boolean, Callback: string, PrivateX: int4, Animation?: any, CustomTeaser?: any, Top?: any, Left?: any, Bottom?: any, Right?: any): int4;
		EndWizard(WizardID: int4, varfSuccess: boolean, Animation?: any): void;
		ActivateWizard(WizardID: int4, act: MsoWizardActType, Animation?: any): void;
		ResetTips(): void;
		/**
		 * @returnParam ppibal 
		 */
		readonly NewBalloon: Balloon;
		/**
		 * @returnParam pbne 
		 */
		readonly BalloonError: MsoBalloonErrorType;
		/**
		 * @returnParam pvarfVisible 
		 */
		Visible: boolean;
		/**
		 * @returnParam pfca 
		 */
		Animation: MsoAnimationType;
		/**
		 * @returnParam pvarfReduced 
		 */
		Reduced: boolean;
		/**
		 * @returnParam pvarfAssistWithHelp 
		 */
		AssistWithHelp: boolean;
		/**
		 * @returnParam pvarfAssistWithWizards 
		 */
		AssistWithWizards: boolean;
		/**
		 * @returnParam pvarfAssistWithAlerts 
		 */
		AssistWithAlerts: boolean;
		/**
		 * @returnParam pvarfMove 
		 */
		MoveWhenInTheWay: boolean;
		/**
		 * @returnParam pvarfSounds 
		 */
		Sounds: boolean;
		/**
		 * @returnParam pvarfFeatures 
		 */
		FeatureTips: boolean;
		/**
		 * @returnParam pvarfMouse 
		 */
		MouseTips: boolean;
		/**
		 * @returnParam pvarfKeyboardShortcuts 
		 */
		KeyboardShortcutTips: boolean;
		/**
		 * @returnParam pvarfHighPriorityTips 
		 */
		HighPriorityTips: boolean;
		/**
		 * @returnParam pvarfTipOfDay 
		 */
		TipOfDay: boolean;
		/**
		 * @returnParam pvarfGuessHelp 
		 */
		GuessHelp: boolean;
		/**
		 * @returnParam pvarfSearchInProgram 
		 */
		SearchWhenProgramming: boolean;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Item: string;
		/**
		 * @returnParam pbstr 
		 */
		FileName: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvarfOn 
		 */
		On: boolean;
		/**
		 * @returnParam pibtn 
		 */
		DoAlert(bstrAlertTitle: string, bstrAlertText: string, alb: MsoAlertButtonType, alc: MsoAlertIconType, ald: MsoAlertDefaultType, alq: MsoAlertCancelType, varfSysAlert: boolean): int;
	}

	interface DocumentProperty {
		/**
		 * @noHRESULT 
		 */
		readonly Parent: IDispatch;
		Delete(): void;
		/**
		 * @needLCID  
		 * @returnParam pbstrRetVal 
		 */
		Name: string;
		/**
		 * @needLCID  
		 * @returnParam pvargRetVal 
		 */
		Value: any;
		/**
		 * @needLCID  
		 * @returnParam ptypeRetVal 
		 */
		Type: MsoDocProperties;
		/**
		 * @returnParam pfLinkRetVal 
		 */
		LinkToContent: boolean;
		/**
		 * @returnParam pbstrSourceRetVal 
		 */
		LinkSource: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
	}

	interface DocumentProperties {
		/**
		 * @noHRESULT 
		 */
		readonly Parent: IDispatch;
		/**
		 * @needLCID  
		 * @get 
		 * @returnParam ppIDocProp 
		 */
		Item(Index: any): DocumentProperty;
		/**
		 * @returnParam pc 
		 */
		readonly Count: int4;
		/**
		 * @needLCID  
		 * @returnParam ppIDocProp 
		 */
		Add(Name: string, LinkToContent: boolean, Type?: any, Value?: any, LinkSource?: any): DocumentProperty;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
	}

	interface IFoundFiles {
		/**
		 * @get 
		 * @returnParam pbstr 
		 */
		Item(Index: int): string;
		/**
		 * @returnParam pCount 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface IFind {
		/**
		 * @returnParam pbstr 
		 */
		SearchPath: string;
		/**
		 * @returnParam pbstr 
		 */
		Name: string;
		/**
		 * @returnParam retval 
		 */
		SubDir: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Title: string;
		/**
		 * @returnParam pbstr 
		 */
		Author: string;
		/**
		 * @returnParam pbstr 
		 */
		Keywords: string;
		/**
		 * @returnParam pbstr 
		 */
		Subject: string;
		/**
		 * @returnParam penmOptions 
		 */
		Options: MsoFileFindOptions;
		/**
		 * @returnParam retval 
		 */
		MatchCase: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
		/**
		 * @returnParam retval 
		 */
		PatternMatch: boolean;
		/**
		 * @returnParam pdatSavedFrom 
		 */
		DateSavedFrom: any;
		/**
		 * @returnParam pdatSavedTo 
		 */
		DateSavedTo: any;
		/**
		 * @returnParam pbstr 
		 */
		SavedBy: string;
		/**
		 * @returnParam pdatCreatedFrom 
		 */
		DateCreatedFrom: any;
		/**
		 * @returnParam pdatCreatedTo 
		 */
		DateCreatedTo: any;
		/**
		 * @returnParam penmView 
		 */
		View: MsoFileFindView;
		/**
		 * @returnParam penmSortBy 
		 */
		SortBy: MsoFileFindSortBy;
		/**
		 * @returnParam penmListBy 
		 */
		ListBy: MsoFileFindListBy;
		/**
		 * @returnParam pintSelectedFile 
		 */
		SelectedFile: int;
		/**
		 * @returnParam pdisp 
		 */
		readonly Results: IFoundFiles;
		/**
		 * @returnParam pRows 
		 */
		Show(): int;
		Execute(): void;
		Load(bstrQueryName: string): void;
		Save(bstrQueryName: string): void;
		Delete(bstrQueryName: string): void;
		/**
		 * @returnParam plFileType 
		 */
		FileType: int4;
	}

	interface FoundFiles extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @needLCID  
		 * @get 
		 * @returnParam pbstrFile 
		 */
		Item(Index: int): string;
		/**
		 * @returnParam pc 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface PropertyTest extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrRetVal 
		 */
		readonly Name: string;
		/**
		 * @returnParam pConditionRetVal 
		 */
		readonly Condition: MsoCondition;
		/**
		 * @returnParam pvargRetVal 
		 */
		readonly Value: any;
		/**
		 * @returnParam pvargRetVal2 
		 */
		readonly SecondValue: any;
		/**
		 * @returnParam pConnector 
		 */
		readonly Connector: MsoConnector;
	}

	interface PropertyTests extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @needLCID  
		 * @get 
		 * @returnParam ppIDocProp 
		 */
		Item(Index: int): PropertyTest;
		/**
		 * @returnParam pc 
		 */
		readonly Count: int4;
		Add(Name: string, Condition: MsoCondition, Value?: any, SecondValue?: any, Connector?: Default<MsoConnector, 1>): void;
		Remove(Index: int): void;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface FileSearch extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam SearchSubFoldersRetVal 
		 */
		SearchSubFolders: boolean;
		/**
		 * @returnParam MatchTextRetVal 
		 */
		MatchTextExactly: boolean;
		/**
		 * @returnParam MatchAllWordFormsRetVal 
		 */
		MatchAllWordForms: boolean;
		/**
		 * @returnParam FileNameRetVal 
		 */
		FileName: string;
		/**
		 * @returnParam FileTypeRetVal 
		 */
		FileType: MsoFileType;
		/**
		 * @returnParam LastModifiedRetVal 
		 */
		LastModified: MsoLastModified;
		/**
		 * @returnParam TextOrProperty 
		 */
		TextOrProperty: string;
		/**
		 * @returnParam LookInRetVal 
		 */
		LookIn: string;
		/**
		 * @returnParam pRet 
		 */
		Execute(SortBy?: Default<MsoSortBy, 1>, SortOrder?: Default<MsoSortOrder, 1>, AlwaysAccurate?: Default<boolean, true>): int;
		NewSearch(): void;
		/**
		 * @returnParam FoundFilesRet 
		 */
		readonly FoundFiles: FoundFiles;
		/**
		 * @returnParam PropTestsRet 
		 */
		readonly PropertyTests: PropertyTests;
		/**
		 * @returnParam SearchScopesRet 
		 */
		readonly SearchScopes: SearchScopes;
		/**
		 * @returnParam SearchFoldersRet 
		 */
		readonly SearchFolders: SearchFolders;
		/**
		 * @returnParam FileTypesRet 
		 */
		readonly FileTypes: FileTypes;
		RefreshScopes(): void;
	}

	interface SearchScopes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam SearchScopeRet 
		 */
		Item(Index: int): SearchScope;
		/**
		 * @returnParam iCountRetVal 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface SearchScope extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam MsoSearchInRetVal 
		 */
		readonly Type: MsoSearchIn;
		/**
		 * @returnParam ScopeFolderRet 
		 */
		readonly ScopeFolder: ScopeFolder;
	}

	interface ScopeFolder extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrPath 
		 */
		readonly Path: string;
		/**
		 * @returnParam ScopeFoldersRet 
		 */
		readonly ScopeFolders: ScopeFolders;
		AddToSearchFolders(): void;
	}

	interface ScopeFolders extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ScopeFolderRet 
		 */
		Item(Index: int): ScopeFolder;
		/**
		 * @returnParam iCountRetVal 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface SearchFolders extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ScopeFolderRet 
		 */
		Item(Index: int): ScopeFolder;
		/**
		 * @returnParam iCountRetVal 
		 */
		readonly Count: int;
		Add(ScopeFolder: ScopeFolder): void;
		Remove(Index: int): void;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface FileTypes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam MsoFileTypeRet 
		 */
		Item(Index: int): MsoFileType;
		/**
		 * @returnParam iCountRetVal 
		 */
		readonly Count: int;
		Add(FileType: MsoFileType): void;
		Remove(Index: int): void;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface COMAddIn extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam RetValue 
		 */
		Description: string;
		/**
		 * @returnParam RetValue 
		 */
		readonly ProgId: string;
		/**
		 * @returnParam RetValue 
		 */
		readonly Guid: string;
		/**
		 * @returnParam RetValue 
		 */
		Connect: boolean;
		/**
		 * @returnParam RetValue 
		 */
		Object: IDispatch;
		/**
		 * @returnParam retval 
		 */
		readonly Parent: IDispatch;
	}

	interface COMAddIns extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam RetValue 
		 */
		Item( /** @pointer */ Index: any): COMAddIn;
		/**
		 * @returnParam RetValue 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		Update(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		SetAppModal(varfModal: boolean): void;
	}

	interface LanguageSettings extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam plid 
		 */
		LanguageID(Id: MsoAppLanguageID): int;
		/**
		 * @get 
		 * @returnParam pf 
		 */
		LanguagePreferredForEditing(lid: MsoLanguageID): boolean;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	/**
	 * @coclass
	*/
	type CommandBarComboBox = _CommandBarComboBox;
	/**
	 * @coclass
	*/
	type CommandBarButton = _CommandBarButton;
	interface WebPageFont extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pstr 
		 */
		ProportionalFont: string;
		/**
		 * @returnParam pf 
		 */
		ProportionalFontSize: float;
		/**
		 * @returnParam pstr 
		 */
		FixedWidthFont: string;
		/**
		 * @returnParam pf 
		 */
		FixedWidthFontSize: float;
	}

	interface WebPageFonts extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @get 
		 * @returnParam Item 
		 */
		Item(Index: MsoCharacterSet): WebPageFont;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface HTMLProjectItem extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam RetValue 
		 */
		readonly Name: string;
		/**
		 * @returnParam RetValue 
		 */
		readonly IsOpen: boolean;
		LoadFromFile(FileName: string): void;
		Open(OpenKind?: Default<MsoHTMLProjectOpen, 0>): void;
		SaveCopyAs(FileName: string): void;
		/**
		 * @returnParam Text 
		 */
		Text: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface HTMLProjectItems extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam RetValue 
		 */
		Item( /** @pointer */ Index: any): HTMLProjectItem;
		/**
		 * @returnParam RetValue 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface HTMLProject extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam State 
		 */
		readonly State: MsoHTMLProjectState;
		RefreshProject(Refresh?: Default<boolean, true>): void;
		RefreshDocument(Refresh?: Default<boolean, true>): void;
		/**
		 * @returnParam HTMLProjectItems 
		 */
		readonly HTMLProjectItems: HTMLProjectItems;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		Open(OpenKind?: Default<MsoHTMLProjectOpen, 0>): void;
	}

	interface MsoDebugOptions extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam puintFeatureReports 
		 */
		FeatureReports: int;
		/**
		 * @returnParam pvarfOutputToDebugger 
		 */
		OutputToDebugger: boolean;
		/**
		 * @returnParam pvarfOutputToFile 
		 */
		OutputToFile: boolean;
		/**
		 * @returnParam pvarfOutputToMessageBox 
		 */
		OutputToMessageBox: boolean;
		/**
		 * @returnParam ppMsoUnitTestManager 
		 */
		readonly UnitTestManager: IUnknown;
		AddIgnoredAssertTag(bstrTagToIgnore: string): void;
		RemoveIgnoredAssertTag(bstrTagToIgnore: string): void;
	}

	interface FileDialogSelectedItems extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam pcFiles 
		 */
		readonly Count: int4;
		/**
		 * @returnParam Item 
		 */
		Item(Index: int): string;
	}

	interface FileDialogFilter extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Extensions 
		 */
		readonly Extensions: string;
		/**
		 * @returnParam Description 
		 */
		readonly Description: string;
	}

	interface FileDialogFilters extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam pcFilters 
		 */
		readonly Count: int4;
		/**
		 * @returnParam Item 
		 */
		Item(Index: int): FileDialogFilter;
		Delete(filter?: any): void;
		Clear(): void;
		/**
		 * @returnParam Add 
		 */
		Add(Description: string, Extensions: string, Position?: any): FileDialogFilter;
	}

	interface FileDialog extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Filters 
		 */
		readonly Filters: FileDialogFilters;
		/**
		 * @returnParam FilterIndex 
		 */
		FilterIndex: int;
		/**
		 * @returnParam Title 
		 */
		Title: string;
		/**
		 * @returnParam ButtonName 
		 */
		ButtonName: string;
		/**
		 * @returnParam pvarfAllowMultiSelect 
		 */
		AllowMultiSelect: boolean;
		/**
		 * @returnParam pinitialview 
		 */
		InitialView: MsoFileDialogView;
		/**
		 * @returnParam InitialFileName 
		 */
		InitialFileName: string;
		/**
		 * @returnParam Files 
		 */
		readonly SelectedItems: FileDialogSelectedItems;
		/**
		 * @returnParam pdialogtype 
		 */
		readonly DialogType: MsoFileDialogType;
		/**
		 * @returnParam Name 
		 */
		readonly Item: string;
		/**
		 * @returnParam rval 
		 */
		Show(): int;
		Execute(): void;
	}

	interface SignatureSet extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam pcSig 
		 */
		readonly Count: int;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(iSig: int): Signature;
		/**
		 * @returnParam ppidisp 
		 */
		Add(): Signature;
		Commit(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppidisp 
		 */
		AddNonVisibleSignature(varSigProv?: any): Signature;
		/**
		 * @returnParam pvarfCanAddSigLine 
		 */
		readonly CanAddSignatureLine: boolean;
		/**
		 * @returnParam ppidisp 
		 */
		AddSignatureLine(varSigProv?: any): Signature;
		/**
		 * @returnParam psubset 
		 */
		Subset: MsoSignatureSubset;
		set ShowSignaturesPane(arg1: boolean);
	}

	interface Signature extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstr 
		 */
		readonly Signer: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly Issuer: string;
		/**
		 * @returnParam pvarDate 
		 */
		readonly ExpireDate: any;
		/**
		 * @returnParam pvarfValid 
		 */
		readonly IsValid: boolean;
		/**
		 * @returnParam pvarfAttach 
		 */
		AttachCertificate: boolean;
		Delete(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pvarfExpired 
		 */
		readonly IsCertificateExpired: boolean;
		/**
		 * @returnParam pvarfRevoked 
		 */
		readonly IsCertificateRevoked: boolean;
		/**
		 * @returnParam pvarDate 
		 */
		readonly SignDate: any;
		/**
		 * @returnParam pvarfSigned 
		 */
		readonly IsSigned: boolean;
		Sign(varSigImg?: any, varDelSuggSigner?: any, varDelSuggSignerLine2?: any, varDelSuggSignerEmail?: any): void;
		/**
		 * @returnParam ppsiginfo 
		 */
		readonly Details: SignatureInfo;
		ShowDetails(): void;
		/**
		 * @returnParam pvarfCanSetup 
		 */
		readonly CanSetup: boolean;
		/**
		 * @returnParam ppsigsetup 
		 */
		readonly Setup: SignatureSetup;
		/**
		 * @returnParam pvarfSignatureLine 
		 */
		readonly IsSignatureLine: boolean;
		/**
		 * @returnParam ppidispShape 
		 */
		readonly SignatureLineShape: IDispatch;
		/**
		 * @returnParam plSortHint 
		 */
		readonly SortHint: int4;
	}

	interface SignatureInfo extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarf 
		 */
		readonly ReadOnly: boolean;
		/**
		 * @returnParam pbstrSigProv 
		 */
		readonly SignatureProvider: string;
		/**
		 * @returnParam pbstr 
		 */
		SignatureText: string;
		/**
		 * @returnParam ppipictdisp 
		 */
		SignatureImage: IPictureDisp;
		/**
		 * @returnParam pbstr 
		 */
		SignatureComment: string;
		/**
		 * @returnParam pvar 
		 */
		GetSignatureDetail(sigdet: SignatureDetail): any;
		/**
		 * @returnParam pvar 
		 */
		GetCertificateDetail(certdet: CertificateDetail): any;
		/**
		 * @returnParam pcontverres 
		 */
		readonly ContentVerificationResults: ContentVerificationResults;
		/**
		 * @returnParam pcertverres 
		 */
		readonly CertificateVerificationResults: CertificateVerificationResults;
		/**
		 * @returnParam pvarfValid 
		 */
		readonly IsValid: boolean;
		/**
		 * @returnParam pvarfExpired 
		 */
		readonly IsCertificateExpired: boolean;
		/**
		 * @returnParam pvarfRevoked 
		 */
		readonly IsCertificateRevoked: boolean;
		/**
		 * @returnParam pvarfUntrusted 
		 */
		readonly IsCertificateUntrusted: boolean;
		ShowSignatureCertificate(ParentWindow: IUnknown): void;
		SelectSignatureCertificate(ParentWindow: IUnknown): void;
		SelectCertificateDetailByThumbprint(bstrThumbprint: string): void;
	}

	interface SignatureSetup extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarf 
		 */
		readonly ReadOnly: boolean;
		/**
		 * @returnParam pbstr 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstrSigProv 
		 */
		readonly SignatureProvider: string;
		/**
		 * @returnParam pbstr 
		 */
		SuggestedSigner: string;
		/**
		 * @returnParam pbstr 
		 */
		SuggestedSignerLine2: string;
		/**
		 * @returnParam pbstr 
		 */
		SuggestedSignerEmail: string;
		/**
		 * @returnParam pbstr 
		 */
		SigningInstructions: string;
		/**
		 * @returnParam pvarf 
		 */
		AllowComments: boolean;
		/**
		 * @returnParam pvarf 
		 */
		ShowSignDate: boolean;
		/**
		 * @returnParam pbstr 
		 */
		AdditionalXml: string;
	}

	interface IMsoEnvelopeVB {
		/**
		 * @returnParam pbstrIntro 
		 */
		Introduction: string;
		/**
		 * @returnParam ppdisp 
		 */
		readonly Item: IDispatch;
		/**
		 * @returnParam ppdisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppdisp 
		 */
		readonly CommandBars: IDispatch;
	}

	interface OfficeDataSourceObject {
		/**
		 * @returnParam pbstrConnect 
		 */
		ConnectString: string;
		/**
		 * @returnParam pbstrTable 
		 */
		Table: string;
		/**
		 * @returnParam pbstrSrc 
		 */
		DataSource: string;
		/**
		 * @returnParam ppColumns 
		 */
		readonly Columns: IDispatch;
		/**
		 * @returnParam pcRows 
		 */
		readonly RowCount: int4;
		/**
		 * @returnParam ppFilters 
		 */
		readonly Filters: IDispatch;
		/**
		 * @returnParam rval 
		 */
		Move(MsoMoveRow: MsoMoveRow, RowNbr?: Default<int, 1>): int;
		Open(bstrSrc?: Default<string, "">, bstrConnect?: Default<string, "">, bstrTable?: Default<string, "">, fOpenExclusive?: Default<int4, 0>, fNeverPrompt?: Default<int4, 1>): void;
		SetSortOrder(SortField1: string, SortAscending1?: Default<boolean, true>, SortField2?: Default<string, "">, SortAscending2?: Default<boolean, true>, SortField3?: Default<string, "">, SortAscending3?: Default<boolean, true>): void;
		ApplyFilter(): void;
	}

	interface ODSOColumn extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam plIndex 
		 */
		readonly Index: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrValue 
		 */
		readonly Value: string;
	}

	interface ODSOColumns extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @returnParam ppParentOdso 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppColumn 
		 */
		Item(varIndex: any): IDispatch;
	}

	interface ODSOFilter extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam plIndex 
		 */
		readonly Index: int4;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrCol 
		 */
		Column: string;
		/**
		 * @returnParam pComparison 
		 */
		Comparison: MsoFilterComparison;
		/**
		 * @returnParam pbstrCompareTo 
		 */
		CompareTo: string;
		/**
		 * @returnParam pConjunction 
		 */
		Conjunction: MsoFilterConjunction;
	}

	interface ODSOFilters extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @returnParam ppParentOdso 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppColumn 
		 */
		Item(Index: int4): IDispatch;
		Add(Column: string, Comparison: MsoFilterComparison, Conjunction: MsoFilterConjunction, bstrCompareTo?: Default<string, "">, DeferUpdate?: Default<boolean, false>): void;
		Delete(Index: int4, DeferUpdate?: Default<boolean, false>): void;
	}

	interface NewFile extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarf 
		 */
		Add(FileName: string, Section?: any, DisplayName?: any, Action?: any): boolean;
		/**
		 * @returnParam pvarf 
		 */
		Remove(FileName: string, Section?: any, DisplayName?: any, Action?: any): boolean;
	}

	interface WebComponent {
		/**
		 * @returnParam RetValue 
		 */
		readonly Shape: IDispatch;
		/**
		 * @returnParam RetValue 
		 */
		URL: string;
		/**
		 * @returnParam RetValue 
		 */
		HTML: string;
		/**
		 * @returnParam RetValue 
		 */
		Name: string;
		/**
		 * @returnParam RetValue 
		 */
		Width: int4;
		/**
		 * @returnParam RetValue 
		 */
		Height: int4;
		SetPlaceHolderGraphic(PlaceHolderGraphic: string): void;
		Commit(): void;
		Revert(): void;
	}

	interface WebComponentWindowExternal {
		/**
		 * @returnParam RetValue 
		 */
		readonly InterfaceVersion: int4;
		/**
		 * @returnParam RetValue 
		 */
		readonly ApplicationName: string;
		/**
		 * @returnParam RetValue 
		 */
		readonly ApplicationVersion: int4;
		/**
		 * @returnParam RetValue 
		 */
		readonly Application: IDispatch;
		CloseWindow(): void;
		/**
		 * @returnParam RetValue 
		 */
		readonly WebComponent: WebComponent;
	}

	interface WebComponentFormat {
		/**
		 * @returnParam RetValue 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam RetValue 
		 */
		URL: string;
		/**
		 * @returnParam RetValue 
		 */
		HTML: string;
		/**
		 * @returnParam RetValue 
		 */
		Name: string;
		/**
		 * @returnParam RetValue 
		 */
		Width: int4;
		/**
		 * @returnParam RetValue 
		 */
		Height: int4;
		/**
		 * @returnParam retval 
		 */
		PreviewGraphic: string;
		LaunchPropertiesWindow(): void;
	}

	interface ILicWizExternal {
		PrintHtmlDocument(punkHtmlDoc: IUnknown): void;
		InvokeDateTimeApplet(): void;
		/**
		 * @returnParam pDateString 
		 */
		FormatDate(date: Date, pFormat?: Default<string, "">): string;
		ShowHelp( /** @pointer */ pvarId?: any): void;
		Terminate(): void;
		DisableVORWReminder(BPC: int4): void;
		/**
		 * @returnParam pbstrPath 
		 */
		SaveReceipt(bstrReceipt: string): string;
		OpenInDefaultBrowser(bstrUrl: string): void;
		/**
		 * @returnParam plRet 
		 */
		MsoAlert(bstrText: string, bstrButtons: string, bstrIcon: string): int4;
		/**
		 * @returnParam plRet 
		 */
		DepositPidKey(bstrKey: string, fMORW: int): int4;
		WriteLog(bstrMessage: string): void;
		ResignDpc(bstrProductCode: string): void;
		ResetPID(): void;
		SetDialogSize(dx: int4, dy: int4): void;
		/**
		 * @returnParam plRet 
		 */
		VerifyClock(lMode: int4): int4;
		SortSelectOptions(pdispSelect: IDispatch): void;
		InternetDisconnect(): void;
		/**
		 * @returnParam pfConnected 
		 */
		GetConnectedState(): int;
		/**
		 * @returnParam plwctx 
		 */
		readonly Context: int4;
		/**
		 * @returnParam ppdispValidator 
		 */
		readonly Validator: IDispatch;
		/**
		 * @returnParam ppdispLicAgent 
		 */
		readonly LicAgent: IDispatch;
		/**
		 * @returnParam pbstrUrl 
		 */
		readonly CountryInfo: string;
		set WizardVisible(arg1: int);
		set WizardTitle(arg1: string);
		/**
		 * @returnParam fEnabled 
		 */
		readonly AnimationEnabled: int;
		set CurrentHelpId(arg1: int4);
		/**
		 * @returnParam bstrUrl 
		 */
		readonly OfficeOnTheWebUrl: string;
	}

	interface ILicValidator {
		/**
		 * @returnParam pVariant 
		 */
		readonly Products: any;
		/**
		 * @returnParam piSel 
		 */
		Selection: int;
	}

	interface ILicAgent {
		/**
		 * @returnParam pdwRetCode 
		 */
		Initialize(dwBPC: uint4, dwMode: uint4, bstrLicSource: string): uint4;
		/**
		 * @returnParam pbstrVal 
		 */
		GetFirstName(): string;
		SetFirstName(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetLastName(): string;
		SetLastName(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetOrgName(): string;
		SetOrgName(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetEmail(): string;
		SetEmail(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetPhone(): string;
		SetPhone(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetAddress1(): string;
		SetAddress1(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetCity(): string;
		SetCity(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetState(): string;
		SetState(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetCountryCode(): string;
		SetCountryCode(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetCountryDesc(): string;
		SetCountryDesc(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetZip(): string;
		SetZip(bstrNewVal: string): void;
		/**
		 * @returnParam pdwVal 
		 */
		GetIsoLanguage(): uint4;
		SetIsoLanguage(dwNewVal: uint4): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetMSUpdate(): string;
		SetMSUpdate(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetMSOffer(): string;
		SetMSOffer(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetOtherOffer(): string;
		SetOtherOffer(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetAddress2(): string;
		SetAddress2(bstrNewVal: string): void;
		/**
		 * @returnParam pdwRetCode 
		 */
		CheckSystemClock(): uint4;
		/**
		 * @returnParam pDateVal 
		 */
		GetExistingExpiryDate(): Date;
		/**
		 * @returnParam pDateVal 
		 */
		GetNewExpiryDate(): Date;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingFirstName(): string;
		SetBillingFirstName(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingLastName(): string;
		SetBillingLastName(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingPhone(): string;
		SetBillingPhone(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingAddress1(): string;
		SetBillingAddress1(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingAddress2(): string;
		SetBillingAddress2(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingCity(): string;
		SetBillingCity(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingState(): string;
		SetBillingState(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingCountryCode(): string;
		SetBillingCountryCode(bstrNewVal: string): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetBillingZip(): string;
		SetBillingZip(bstrNewVal: string): void;
		/**
		 * @returnParam pdwRetVal 
		 */
		SaveBillingInfo(bSave: int): uint4;
		/**
		 * @returnParam pbRetVal 
		 */
		IsCCRenewalCountry(bstrCountryCode: string): int;
		/**
		 * @returnParam pbstrVATLabel 
		 */
		GetVATLabel(bstrCountryCode: string): string;
		/**
		 * @returnParam pDateVal 
		 */
		GetCCRenewalExpiryDate(): Date;
		SetVATNumber(bstrVATNumber: string): void;
		SetCreditCardType(bstrCCCode: string): void;
		SetCreditCardNumber(bstrCCNumber: string): void;
		SetCreditCardExpiryYear(dwCCYear: uint4): void;
		SetCreditCardExpiryMonth(dwCCMonth: uint4): void;
		/**
		 * @returnParam pdwCount 
		 */
		GetCreditCardCount(): uint4;
		/**
		 * @returnParam pbstrCode 
		 */
		GetCreditCardCode(dwIndex: uint4): string;
		/**
		 * @returnParam pbstrName 
		 */
		GetCreditCardName(dwIndex: uint4): string;
		/**
		 * @returnParam pbstrVATNumber 
		 */
		GetVATNumber(): string;
		/**
		 * @returnParam pbstrCCCode 
		 */
		GetCreditCardType(): string;
		/**
		 * @returnParam pbstrCCNumber 
		 */
		GetCreditCardNumber(): string;
		/**
		 * @returnParam pdwCCYear 
		 */
		GetCreditCardExpiryYear(): uint4;
		/**
		 * @returnParam pdwCCMonth 
		 */
		GetCreditCardExpiryMonth(): uint4;
		/**
		 * @returnParam pbRetVal 
		 */
		GetDisconnectOption(): int;
		SetDisconnectOption(bNewVal: int): void;
		AsyncProcessHandshakeRequest(bReviseCustInfo: int): void;
		AsyncProcessNewLicenseRequest(): void;
		AsyncProcessReissueLicenseRequest(): void;
		AsyncProcessRetailRenewalLicenseRequest(): void;
		AsyncProcessReviseCustInfoRequest(): void;
		AsyncProcessCCRenewalPriceRequest(): void;
		AsyncProcessCCRenewalLicenseRequest(): void;
		/**
		 * @returnParam pdwRetCode 
		 */
		GetAsyncProcessReturnCode(): uint4;
		/**
		 * @returnParam pbUpgradeAvailable 
		 */
		IsUpgradeAvailable(): int;
		WantUpgrade(bWantUpgrade: int): void;
		AsyncProcessDroppedLicenseRequest(): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GenerateInstallationId(): string;
		/**
		 * @returnParam pdwRetCode 
		 */
		DepositConfirmationId(bstrVal: string): uint4;
		/**
		 * @returnParam pbValue 
		 */
		VerifyCheckDigits(bstrCIDIID: string): int;
		/**
		 * @returnParam pDateVal 
		 */
		GetCurrentExpiryDate(): Date;
		CancelAsyncProcessRequest(bIsLicenseRequest: int): void;
		/**
		 * @returnParam pbstrVal 
		 */
		GetCurrencyDescription(dwCurrencyIndex: uint4): string;
		/**
		 * @returnParam pdwCount 
		 */
		GetPriceItemCount(): uint4;
		/**
		 * @returnParam pbstrVal 
		 */
		GetPriceItemLabel(dwIndex: uint4): string;
		/**
		 * @returnParam pbstrVal 
		 */
		GetPriceItemValue(dwCurrencyIndex: uint4, dwIndex: uint4): string;
		/**
		 * @returnParam pNewVal 
		 */
		GetInvoiceText(): string;
		/**
		 * @returnParam pbstrErrMsg 
		 */
		GetBackendErrorMsg(): string;
		/**
		 * @returnParam dwCurrencyOption 
		 */
		GetCurrencyOption(): uint4;
		SetCurrencyOption(dwCurrencyOption: uint4): void;
		/**
		 * @returnParam pbstrHtmlText 
		 */
		GetEndOfLifeHtmlText(): string;
		/**
		 * @returnParam dwRetCode 
		 */
		DisplaySSLCert(): uint4;
	}

	interface IMsoEServicesDialog {
		Close(ApplyWebComponentChanges?: Default<boolean, false>): void;
		AddTrustedDomain(Domain: string): void;
		/**
		 * @returnParam retval 
		 */
		readonly ApplicationName: string;
		/**
		 * @returnParam ppdisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam ppdisp 
		 */
		readonly WebComponent: IDispatch;
		/**
		 * @returnParam ppdisp 
		 */
		readonly ClipArt: IDispatch;
	}

	interface WebComponentProperties {
		/**
		 * @returnParam RetValue 
		 */
		readonly Shape: IDispatch;
		/**
		 * @returnParam RetValue 
		 */
		Name: string;
		/**
		 * @returnParam RetValue 
		 */
		URL: string;
		/**
		 * @returnParam RetValue 
		 */
		HTML: string;
		/**
		 * @returnParam RetValue 
		 */
		PreviewGraphic: string;
		/**
		 * @returnParam RetValue 
		 */
		PreviewHTML: string;
		/**
		 * @returnParam RetValue 
		 */
		Width: int4;
		/**
		 * @returnParam RetValue 
		 */
		Height: int4;
		/**
		 * @returnParam RetValue 
		 */
		Tag: string;
	}

	interface SmartDocument extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrID 
		 */
		SolutionID: string;
		/**
		 * @returnParam pbstrUrl 
		 */
		SolutionURL: string;
		PickSolution(ConsiderAllSchemas?: Default<boolean, false>): void;
		RefreshPane(): void;
	}

	interface SharedWorkspaceMember extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrDomainName 
		 */
		readonly DomainName: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrEmail 
		 */
		readonly Email: string;
		Delete(): void;
		/**
		 * @returnParam Id 
		 */
		readonly Id: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface SharedWorkspaceMembers extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): SharedWorkspaceMember;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppMember 
		 */
		Add(Email: string, DomainName: string, DisplayName: string, Role?: any): SharedWorkspaceMember;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pf 
		 */
		readonly ItemCountExceeded: boolean;
	}

	interface SharedWorkspaceTask extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Title 
		 */
		Title: string;
		/**
		 * @returnParam AssignedTo 
		 */
		AssignedTo: string;
		/**
		 * @returnParam Status 
		 */
		Status: MsoSharedWorkspaceTaskStatus;
		/**
		 * @returnParam Priority 
		 */
		Priority: MsoSharedWorkspaceTaskPriority;
		/**
		 * @returnParam Description 
		 */
		Description: string;
		/**
		 * @returnParam DueDate 
		 */
		DueDate: any;
		/**
		 * @returnParam CreatedBy 
		 */
		readonly CreatedBy: string;
		/**
		 * @returnParam CreatedDate 
		 */
		readonly CreatedDate: any;
		/**
		 * @returnParam ModifiedBy 
		 */
		readonly ModifiedBy: string;
		/**
		 * @returnParam ModifiedDate 
		 */
		readonly ModifiedDate: any;
		Save(): void;
		Delete(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface SharedWorkspaceTasks extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): SharedWorkspaceTask;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppTask 
		 */
		Add(Title: string, Status?: any, Priority?: any, Assignee?: any, Description?: any, DueDate?: any): SharedWorkspaceTask;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pf 
		 */
		readonly ItemCountExceeded: boolean;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface SharedWorkspaceFile extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrFilename 
		 */
		readonly URL: string;
		/**
		 * @returnParam pbstrCreatedBy 
		 */
		readonly CreatedBy: string;
		/**
		 * @returnParam CreatedDate 
		 */
		readonly CreatedDate: any;
		/**
		 * @returnParam pbstrModifiedBy 
		 */
		readonly ModifiedBy: string;
		/**
		 * @returnParam ModifiedDate 
		 */
		readonly ModifiedDate: any;
		Delete(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface SharedWorkspaceFiles extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): SharedWorkspaceFile;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppFile 
		 */
		Add(FileName: string, ParentFolder?: any, OverwriteIfFileAlreadyExists?: any, KeepInSync?: any): SharedWorkspaceFile;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pf 
		 */
		readonly ItemCountExceeded: boolean;
	}

	interface SharedWorkspaceFolder extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam FolderName 
		 */
		readonly FolderName: string;
		Delete(DeleteEventIfFolderContainsFiles?: any): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface SharedWorkspaceFolders extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): SharedWorkspaceFolder;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppFolder 
		 */
		Add(FolderName: string, ParentFolder?: any): SharedWorkspaceFolder;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pf 
		 */
		readonly ItemCountExceeded: boolean;
	}

	interface SharedWorkspaceLink extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam URL 
		 */
		URL: string;
		/**
		 * @returnParam Description 
		 */
		Description: string;
		/**
		 * @returnParam Notes 
		 */
		Notes: string;
		/**
		 * @returnParam CreatedBy 
		 */
		readonly CreatedBy: string;
		/**
		 * @returnParam CreatedDate 
		 */
		readonly CreatedDate: any;
		/**
		 * @returnParam ModifiedBy 
		 */
		readonly ModifiedBy: string;
		/**
		 * @returnParam ModifiedDate 
		 */
		readonly ModifiedDate: any;
		Save(): void;
		Delete(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface SharedWorkspaceLinks extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): SharedWorkspaceLink;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppLink 
		 */
		Add(URL: string, Description?: any, Notes?: any): SharedWorkspaceLink;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pf 
		 */
		readonly ItemCountExceeded: boolean;
	}

	interface SharedWorkspace extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Name 
		 */
		Name: string;
		/**
		 * @returnParam ppMembers 
		 */
		readonly Members: SharedWorkspaceMembers;
		/**
		 * @returnParam ppTasks 
		 */
		readonly Tasks: SharedWorkspaceTasks;
		/**
		 * @returnParam ppFiles 
		 */
		readonly Files: SharedWorkspaceFiles;
		/**
		 * @returnParam ppFolders 
		 */
		readonly Folders: SharedWorkspaceFolders;
		/**
		 * @returnParam ppLinks 
		 */
		readonly Links: SharedWorkspaceLinks;
		Refresh(): void;
		CreateNew(URL?: any, Name?: any): void;
		Delete(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrUrl 
		 */
		readonly URL: string;
		/**
		 * @returnParam pfConnected 
		 */
		readonly Connected: boolean;
		/**
		 * @returnParam pvarLastRefreshed 
		 */
		readonly LastRefreshed: any;
		/**
		 * @returnParam pbstrSourceURL 
		 */
		SourceURL: string;
		RemoveDocument(): void;
		Disconnect(): void;
	}

	interface Sync extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pStatusType 
		 */
		readonly Status: MsoSyncStatusType;
		/**
		 * @returnParam pbstrWorkspaceLastChangedBy 
		 */
		readonly WorkspaceLastChangedBy: string;
		/**
		 * @returnParam pdatSavedTo 
		 */
		readonly LastSyncTime: any;
		/**
		 * @returnParam pErrorType 
		 */
		readonly ErrorType: MsoSyncErrorType;
		GetUpdate(): void;
		PutUpdate(): void;
		OpenVersion(SyncVersionType: MsoSyncVersionType): void;
		ResolveConflict(SyncConflictResolution: MsoSyncConflictResolutionType): void;
		Unsuspend(): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface DocumentLibraryVersion extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarDate 
		 */
		readonly Modified: any;
		/**
		 * @returnParam lIndex 
		 */
		readonly Index: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam userName 
		 */
		readonly ModifiedBy: string;
		/**
		 * @returnParam Comments 
		 */
		readonly Comments: string;
		Delete(): void;
		/**
		 * @returnParam ppdispOpened 
		 */
		Open(): IDispatch;
		/**
		 * @returnParam ppdispOpened 
		 */
		Restore(): IDispatch;
	}

	interface DocumentLibraryVersions extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(lIndex: int4): DocumentLibraryVersion;
		/**
		 * @returnParam lCount 
		 */
		readonly Count: int4;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pvarfVersioningOn 
		 */
		readonly IsVersioningEnabled: boolean;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface UserPermission extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam UserId 
		 */
		readonly UserId: string;
		/**
		 * @returnParam Permission 
		 */
		Permission: int4;
		/**
		 * @returnParam ExpirationDate 
		 */
		ExpirationDate: any;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		Remove(): void;
	}

	interface Permission extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam UserPerm 
		 */
		Item(Index: any): UserPermission;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int4;
		/**
		 * @returnParam Enable 
		 */
		EnableTrustedBrowser: boolean;
		/**
		 * @returnParam UserPerm 
		 */
		Add(UserId: string, Permission?: any, ExpirationDate?: any): UserPermission;
		ApplyPolicy(FileName: string): void;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		RemoveAll(): void;
		/**
		 * @returnParam Enabled 
		 */
		Enabled: boolean;
		/**
		 * @returnParam Contact 
		 */
		RequestPermissionURL: string;
		/**
		 * @returnParam PolicyName 
		 */
		readonly PolicyName: string;
		/**
		 * @returnParam PolicyDescription 
		 */
		readonly PolicyDescription: string;
		/**
		 * @returnParam Enabled 
		 */
		StoreLicenses: boolean;
		/**
		 * @returnParam Author 
		 */
		DocumentAuthor: string;
		/**
		 * @returnParam FromPolicy 
		 */
		readonly PermissionFromPolicy: boolean;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface MsoDebugOptions_UTRunResult extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Passed 
		 */
		readonly Passed: boolean;
		/**
		 * @returnParam Error 
		 */
		readonly ErrorString: string;
	}

	interface MsoDebugOptions_UT extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrColName 
		 */
		readonly CollectionName: string;
		/**
		 * @returnParam ppRunResult 
		 */
		Run(): MsoDebugOptions_UTRunResult;
	}

	interface MsoDebugOptions_UTs extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppUnitTest 
		 */
		Item(Index: int): MsoDebugOptions_UT;
		/**
		 * @returnParam iCountRetVal 
		 */
		readonly Count: int;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam MsoDebugOptions_UTs 
		 */
		GetUnitTestsInCollection(bstrCollectionName: string): MsoDebugOptions_UTs;
		/**
		 * @returnParam MsoDebugOptions_UT 
		 */
		GetUnitTest(bstrCollectionName: string, bstrUnitTestName: string): MsoDebugOptions_UT;
		/**
		 * @returnParam MsoDebugOptions_UTs 
		 */
		GetMatchingUnitTestsInCollection(bstrCollectionName: string, bstrUnitTestNameFilter: string): MsoDebugOptions_UTs;
	}

	interface MsoDebugOptions_UTManager extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppMsoUnitTests 
		 */
		readonly UnitTests: MsoDebugOptions_UTs;
		NotifyStartOfTestSuiteRun(): void;
		NotifyEndOfTestSuiteRun(): void;
		/**
		 * @returnParam pfReportErrors 
		 */
		ReportErrors: boolean;
	}

	interface MetaProperty extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pvarValue 
		 */
		Value: any;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrID 
		 */
		readonly Id: string;
		/**
		 * @returnParam pfReadOnly 
		 */
		readonly IsReadOnly: boolean;
		/**
		 * @returnParam pfRequired 
		 */
		readonly IsRequired: boolean;
		/**
		 * @returnParam ptype 
		 */
		readonly Type: MsoMetaPropertyType;
		/**
		 * @returnParam pbstrError 
		 */
		Validate(): string;
		/**
		 * @returnParam pbstr 
		 */
		readonly ValidationError: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface MetaProperties extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppmp 
		 */
		Item(Index: any): MetaProperty;
		/**
		 * @returnParam ppmp 
		 */
		GetItemByInternalName(InternalName: string): MetaProperty;
		/**
		 * @returnParam pc 
		 */
		readonly Count: int4;
		/**
		 * @returnParam pbstrError 
		 */
		Validate(): string;
		/**
		 * @returnParam pbstr 
		 */
		readonly ValidationError: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstr 
		 */
		readonly SchemaXml: string;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface PolicyItem extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstrID 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrDescription 
		 */
		readonly Description: string;
		/**
		 * @returnParam pbstrStatement 
		 */
		readonly Data: string;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface ServerPolicy extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam pppi 
		 */
		Item(Index: any): PolicyItem;
		/**
		 * @returnParam pbstrID 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstrDescription 
		 */
		readonly Description: string;
		/**
		 * @returnParam pbstrStatement 
		 */
		readonly Statement: string;
		/**
		 * @returnParam pc 
		 */
		readonly Count: int4;
		/**
		 * @returnParam pfBlockPreview 
		 */
		readonly BlockPreview: boolean;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface DocumentInspector extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Description 
		 */
		readonly Description: string;
		/** @paramList [Status, Results] */
		Inspect(): {Status: MsoDocInspectorStatus, Results: string};
		/** @paramList [Status, Results] */
		Fix(): {Status: MsoDocInspectorStatus, Results: string};
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface DocumentInspectors extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam ppidisp 
		 */
		Item(Index: int): DocumentInspector;
		/**
		 * @returnParam pcItems 
		 */
		readonly Count: int;
		/**
		 * @returnParam ppidisp 
		 */
		readonly Parent: IDispatch;
	}

	interface WorkflowTask extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstr 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly ListID: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly WorkflowID: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly Description: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly AssignedTo: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly CreatedBy: string;
		/**
		 * @returnParam pdate 
		 */
		readonly DueDate: Date;
		/**
		 * @returnParam pdate 
		 */
		readonly CreatedDate: Date;
		/**
		 * @returnParam pRet 
		 */
		Show(): int;
	}

	interface WorkflowTasks extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppret 
		 */
		Item(Index: int4): WorkflowTask;
		/**
		 * @returnParam pCount 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface WorkflowTemplate extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pbstr 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly Description: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly DocumentLibraryName: string;
		/**
		 * @returnParam pbstr 
		 */
		readonly DocumentLibraryURL: string;
		/**
		 * @returnParam pRet 
		 */
		Show(): int;
	}

	interface WorkflowTemplates extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam ppret 
		 */
		Item(Index: int4): WorkflowTemplate;
		/**
		 * @returnParam pCount 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface CustomXMLPrefixMapping extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrPrefix 
		 */
		readonly Prefix: string;
		/**
		 * @returnParam pbstrNamespaceURI 
		 */
		readonly NamespaceURI: string;
	}

	interface CustomXMLPrefixMappings extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 * @returnParam ppPrefixMapping 
		 */
		Item(Index: any): CustomXMLPrefixMapping;
		AddNamespace(Prefix: string, NamespaceURI: string): void;
		/**
		 * @returnParam pbstrNamespaceURI 
		 */
		LookupNamespace(Prefix: string): string;
		/**
		 * @returnParam pbstrPrefix 
		 */
		LookupPrefix(NamespaceURI: string): string;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface CustomXMLSchema extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrLocation 
		 */
		readonly Location: string;
		/**
		 * @returnParam pbstrNamespaceURI 
		 */
		readonly NamespaceURI: string;
		Delete(): void;
		Reload(): void;
	}

	interface _CustomXMLSchemaCollection extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 * @returnParam ppSchema 
		 */
		Item(Index: any): CustomXMLSchema;
		/**
		 * @get 
		 * @returnParam pbstrNamespaceURI 
		 */
		NamespaceURI(Index: int4): string;
		/**
		 * @returnParam ppSchema 
		 */
		Add(NamespaceURI?: Default<string, "">, Alias?: Default<string, "">, FileName?: Default<string, "">, InstallForAllUsers?: Default<boolean, false>): CustomXMLSchema;
		AddCollection(SchemaCollection: CustomXMLSchemaCollection): void;
		/**
		 * @returnParam pfResult 
		 */
		Validate(): boolean;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	/**
	 * @coclass
	*/
	type CustomXMLSchemaCollection = _CustomXMLSchemaCollection;
	interface CustomXMLNodes extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 * @returnParam ppNode 
		 */
		Item(Index: int4): CustomXMLNode;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface CustomXMLNode extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppAttributes 
		 */
		readonly Attributes: CustomXMLNodes;
		/**
		 * @returnParam pbstrBaseName 
		 */
		readonly BaseName: string;
		/**
		 * @returnParam ppChildNodes 
		 */
		readonly ChildNodes: CustomXMLNodes;
		/**
		 * @returnParam ppFirstChild 
		 */
		readonly FirstChild: CustomXMLNode;
		/**
		 * @returnParam ppLastChild 
		 */
		readonly LastChild: CustomXMLNode;
		/**
		 * @returnParam pbstrNamespaceURI 
		 */
		readonly NamespaceURI: string;
		/**
		 * @returnParam ppNextSibling 
		 */
		readonly NextSibling: CustomXMLNode;
		/**
		 * @returnParam pNodeType 
		 */
		readonly NodeType: MsoCustomXMLNodeType;
		/**
		 * @returnParam pbstrNodeValue 
		 */
		NodeValue: string;
		/**
		 * @returnParam ppdispDoc 
		 */
		readonly OwnerDocument: IDispatch;
		/**
		 * @returnParam ppOwnerPart 
		 */
		readonly OwnerPart: CustomXMLPart;
		/**
		 * @returnParam ppPreviousSibling 
		 */
		readonly PreviousSibling: CustomXMLNode;
		/**
		 * @returnParam ppParentNode 
		 */
		readonly ParentNode: CustomXMLNode;
		/**
		 * @returnParam pbstrText 
		 */
		Text: string;
		/**
		 * @returnParam pbstrXPath 
		 */
		readonly XPath: string;
		/**
		 * @returnParam pbstrXML 
		 */
		readonly XML: string;
		AppendChildNode(Name?: Default<string, "">, NamespaceURI?: Default<string, "">, NodeType?: Default<MsoCustomXMLNodeType, 1>, NodeValue?: Default<string, "">): void;
		AppendChildSubtree(XML: string): void;
		Delete(): void;
		/**
		 * @returnParam pfHasChildNodes 
		 */
		HasChildNodes(): boolean;
		InsertNodeBefore(Name?: Default<string, "">, NamespaceURI?: Default<string, "">, NodeType?: Default<MsoCustomXMLNodeType, 1>, NodeValue?: Default<string, "">, NextSibling?: Default<CustomXMLNode, null>): void;
		InsertSubtreeBefore(XML: string, NextSibling?: Default<CustomXMLNode, null>): void;
		RemoveChild(Child: CustomXMLNode): void;
		ReplaceChildNode(OldNode: CustomXMLNode, Name?: Default<string, "">, NamespaceURI?: Default<string, "">, NodeType?: Default<MsoCustomXMLNodeType, 1>, NodeValue?: Default<string, "">): void;
		ReplaceChildSubtree(XML: string, OldNode: CustomXMLNode): void;
		/**
		 * @returnParam ppNodes 
		 */
		SelectNodes(XPath: string): CustomXMLNodes;
		/**
		 * @returnParam ppNode 
		 */
		SelectSingleNode(XPath: string): CustomXMLNode;
	}

	/**
	 * @coclass
	*/
	type CustomXMLPart = _CustomXMLPart;
	interface _CustomXMLPart extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppDocumentElement 
		 */
		readonly DocumentElement: CustomXMLNode;
		/**
		 * @returnParam pbstrID 
		 */
		readonly Id: string;
		/**
		 * @returnParam pbstrNamespaceURI 
		 */
		readonly NamespaceURI: string;
		/**
		 * @returnParam ppSchemaCollection 
		 */
		SchemaCollection: CustomXMLSchemaCollection;
		/**
		 * @returnParam ppPrefixMappings 
		 */
		readonly NamespaceManager: CustomXMLPrefixMappings;
		/**
		 * @returnParam pbstrXML 
		 */
		readonly XML: string;
		AddNode(Parent: CustomXMLNode, Name?: Default<string, "">, NamespaceURI?: Default<string, "">, NextSibling?: Default<CustomXMLNode, null>, NodeType?: Default<MsoCustomXMLNodeType, 1>, NodeValue?: Default<string, "">): void;
		Delete(): void;
		/**
		 * @returnParam pfRet 
		 */
		Load(FilePath: string): boolean;
		/**
		 * @returnParam pfRet 
		 */
		LoadXML(XML: string): boolean;
		/**
		 * @returnParam ppNodes 
		 */
		SelectNodes(XPath: string): CustomXMLNodes;
		/**
		 * @returnParam ppNode 
		 */
		SelectSingleNode(XPath: string): CustomXMLNode;
		/**
		 * @returnParam ppErrors 
		 */
		readonly Errors: CustomXMLValidationErrors;
		/**
		 * @returnParam pfRet 
		 */
		readonly BuiltIn: boolean;
	}

	interface CustomXMLValidationErrors extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 * @returnParam ppError 
		 */
		Item(Index: int4): CustomXMLValidationError;
		Add(Node: CustomXMLNode, ErrorName: string, ErrorText?: Default<string, "">, ClearedOnUpdate?: Default<boolean, true>): void;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface CustomXMLValidationError extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstrName 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppNode 
		 */
		readonly Node: CustomXMLNode;
		/**
		 * @returnParam pbstrText 
		 */
		readonly Text: string;
		/**
		 * @returnParam pErrorType 
		 */
		readonly Type: MsoCustomXMLValidationErrorType;
		Delete(): void;
		/**
		 * @returnParam plErrorCode 
		 */
		readonly ErrorCode: int4;
	}

	interface _CustomXMLParts extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam plCount 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 * @returnParam ppPart 
		 */
		Item(Index: any): CustomXMLPart;
		/**
		 * @returnParam ppPart 
		 */
		Add(XML?: Default<string, "">, SchemaCollection?: any): CustomXMLPart;
		/**
		 * @returnParam ppPart 
		 */
		SelectByID(Id: string): CustomXMLPart;
		/**
		 * @returnParam ppParts 
		 */
		SelectByNamespace(NamespaceURI: string): CustomXMLParts;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	/**
	 * @coclass
	*/
	type CustomXMLParts = _CustomXMLParts;
	interface ThemeColor extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam RGB 
		 */
		RGB: MsoRGBType;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pValue 
		 */
		readonly ThemeColorSchemeIndex: MsoThemeColorSchemeIndex;
	}

	interface ThemeColorScheme extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Color 
		 */
		Colors(Index: MsoThemeColorSchemeIndex): ThemeColor;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		Load(FileName: string): void;
		Save(FileName: string): void;
		/**
		 * @returnParam CustomColor 
		 */
		GetCustomColor(Name: string): MsoRGBType;
	}

	interface ThemeFont extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Val 
		 */
		Name: string;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
	}

	interface ThemeFonts extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
		/**
		 * @returnParam Val 
		 */
		Item(Index: MsoFontLanguageIndex): ThemeFont;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface ThemeFontScheme extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		Load(FileName: string): void;
		Save(FileName: string): void;
		/**
		 * @returnParam MinorFont 
		 */
		readonly MinorFont: ThemeFonts;
		/**
		 * @returnParam MajorFont 
		 */
		readonly MajorFont: ThemeFonts;
	}

	interface ThemeEffectScheme extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		Load(FileName: string): void;
	}

	interface OfficeTheme extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ThemeColorScheme 
		 */
		readonly ThemeColorScheme: ThemeColorScheme;
		/**
		 * @returnParam ThemeFontScheme 
		 */
		readonly ThemeFontScheme: ThemeFontScheme;
		/**
		 * @returnParam ThemeEffectScheme 
		 */
		readonly ThemeEffectScheme: ThemeEffectScheme;
	}

	interface _CustomTaskPane {
		/**
		 * @returnParam prop 
		 */
		readonly Title: string;
		/**
		 * @returnParam prop 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam prop 
		 */
		readonly Window: IDispatch;
		/**
		 * @returnParam prop 
		 */
		Visible: boolean;
		/**
		 * @returnParam prop 
		 */
		readonly ContentControl: IDispatch;
		/**
		 * @returnParam prop 
		 */
		Height: int;
		/**
		 * @returnParam prop 
		 */
		Width: int;
		/**
		 * @returnParam prop 
		 */
		DockPosition: MsoCTPDockPosition;
		/**
		 * @returnParam prop 
		 */
		DockPositionRestrict: MsoCTPDockPositionRestrict;
		Delete(): void;
	}

	interface ICTPFactory {
		/**
		 * @returnParam CTPInst 
		 */
		CreateCTP(CTPAxID: string, CTPTitle: string, CTPParentWindow?: any): CustomTaskPane;
	}

	interface ICustomTaskPaneConsumer {
		CTPFactoryAvailable(CTPFactoryInst: ICTPFactory): void;
	}

	interface IRibbonUI {
		Invalidate(): void;
		InvalidateControl(ControlID: string): void;
		InvalidateControlMso(ControlID: string): void;
		ActivateTab(ControlID: string): void;
		ActivateTabMso(ControlID: string): void;
		ActivateTabQ(ControlID: string, Namespace: string): void;
	}

	interface IRibbonControl {
		/**
		 * @returnParam Id 
		 */
		readonly Id: string;
		/**
		 * @returnParam Context 
		 */
		readonly Context: IDispatch;
		/**
		 * @returnParam Tag 
		 */
		readonly Tag: string;
	}

	interface IRibbonExtensibility {
		/**
		 * @returnParam RibbonXml 
		 */
		GetCustomUI(RibbonID: string): string;
	}

	interface IAssistance {
		ShowHelp(HelpId?: Default<string, "">, Scope?: Default<string, "">): void;
		SearchHelp(Query: string, Scope?: Default<string, "">): void;
		SetDefaultContext(HelpId: string): void;
		ClearDefaultContext(HelpId: string): void;
	}

	interface IMsoLeaderLines {
		Select(): void;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		Delete(): void;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface GridLines {
		/**
		 * @returnParam bstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pvar 
		 */
		Select(): any;
		/**
		 * @returnParam ppParent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pvar 
		 */
		Delete(): any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface LegendEntries {
		readonly Parent: IDispatch;
		readonly Count: int4;
		Item(Index: any): LegendEntry;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: any): LegendEntry;
	}

	interface LegendEntry {
		readonly Parent: IDispatch;
		Delete(): any;
		readonly Font: ChartFont;
		readonly Index: int4;
		readonly LegendKey: IMsoLegendKey;
		Select(): any;
		AutoScaleFont: any;
		readonly Left: double;
		readonly Top: double;
		readonly Width: double;
		readonly Height: double;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoLegendKey {
		readonly Parent: IDispatch;
		readonly Border: IMsoBorder;
		ClearFormats(): any;
		Delete(): any;
		readonly Interior: IMsoInterior;
		readonly Fill: ChartFillFormat;
		InvertIfNegative: boolean;
		MarkerBackgroundColor: int4;
		MarkerBackgroundColorIndex: XlColorIndex;
		MarkerForegroundColor: int4;
		MarkerForegroundColorIndex: XlColorIndex;
		MarkerSize: int4;
		MarkerStyle: XlMarkerStyle;
		PictureType: int4;
		PictureUnit: double;
		Select(): any;
		Smooth: boolean;
		readonly Left: double;
		readonly Top: double;
		readonly Width: double;
		readonly Height: double;
		Shadow: boolean;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		PictureUnit2: double;
	}

	interface SeriesCollection {
		readonly Parent: IDispatch;
		Add(Source: any, Rowcol?: Default<XlRowCol, 2>, SeriesLabels?: any, CategoryLabels?: any, Replace?: any): IMsoSeries;
		readonly Count: int4;
		Extend(Source: any, Rowcol?: any, CategoryLabels?: any): any;
		Item(Index: any): IMsoSeries;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		Paste(Rowcol?: Default<XlRowCol, 2>, SeriesLabels?: any, CategoryLabels?: any, Replace?: any, NewSeries?: any): any;
		NewSeries(): IMsoSeries;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: any): IMsoSeries;
	}

	interface IMsoSeries {
		readonly Parent: IDispatch;
		_ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any): any;
		AxisGroup: XlAxisGroup;
		readonly Border: IMsoBorder;
		ClearFormats(): any;
		Copy(): any;
		DataLabels(Index?: any): IDispatch;
		Delete(): any;
		ErrorBar(Direction: XlErrorBarDirection, Include: XlErrorBarInclude, Type: XlErrorBarType, Amount?: any, MinusValues?: any): any;
		readonly ErrorBars: IMsoErrorBars;
		Explosion: int4;
		Formula: string;
		FormulaLocal: string;
		FormulaR1C1: string;
		FormulaR1C1Local: string;
		HasDataLabels: boolean;
		HasErrorBars: boolean;
		readonly Interior: IMsoInterior;
		readonly Fill: ChartFillFormat;
		InvertIfNegative: boolean;
		MarkerBackgroundColor: int4;
		MarkerBackgroundColorIndex: XlColorIndex;
		MarkerForegroundColor: int4;
		MarkerForegroundColorIndex: XlColorIndex;
		MarkerSize: int4;
		MarkerStyle: XlMarkerStyle;
		Name: string;
		Paste(): any;
		PictureType: XlChartPictureType;
		PictureUnit: double;
		PlotOrder: int4;
		Points(Index?: any): IDispatch;
		Select(): any;
		Smooth: boolean;
		Trendlines(Index?: any): IDispatch;
		Type: int4;
		ChartType: XlChartType;
		ApplyCustomType(ChartType: XlChartType): void;
		Values: any;
		XValues: any;
		BubbleSizes: any;
		BarShape: XlBarShape;
		ApplyPictToSides: boolean;
		ApplyPictToFront: boolean;
		ApplyPictToEnd: boolean;
		Has3DEffect: boolean;
		Shadow: boolean;
		HasLeaderLines: boolean;
		readonly LeaderLines: IMsoLeaderLines;
		ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		PictureUnit2: double;
		readonly PlotColorIndex: int4;
		InvertColor: int4;
		InvertColorIndex: XlColorIndex;
		IsFiltered: boolean;
	}

	interface IMsoErrorBars {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): any;
		readonly Border: IMsoBorder;
		Delete(): any;
		ClearFormats(): any;
		EndStyle: XlEndStyleCap;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoTrendline {
		readonly Parent: IDispatch;
		Backward: double;
		readonly Border: IMsoBorder;
		ClearFormats(): any;
		readonly DataLabel: IMsoDataLabel;
		Delete(): any;
		DisplayEquation: boolean;
		DisplayRSquared: boolean;
		Forward: double;
		readonly Index: int4;
		Intercept: double;
		InterceptIsAuto: boolean;
		Name: string;
		NameIsAuto: boolean;
		Order: int4;
		Period: int4;
		Select(): any;
		Type: XlTrendlineType;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		Backward2: double;
		Forward2: double;
	}

	interface IMsoDataLabel {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): any;
		readonly Border: IMsoBorder;
		Delete(): any;
		readonly Interior: IMsoInterior;
		readonly Fill: ChartFillFormat;
		Caption: string;
		/**
		 * @get 
		 */
		Characters(Start?: any, Length?: any): IMsoCharacters;
		readonly Font: ChartFont;
		HorizontalAlignment: any;
		Left: double;
		Orientation: any;
		Shadow: boolean;
		Text: string;
		Top: double;
		VerticalAlignment: any;
		ReadingOrder: int4;
		AutoScaleFont: any;
		AutoText: boolean;
		NumberFormat: string;
		NumberFormatLinked: boolean;
		NumberFormatLocal: any;
		ShowLegendKey: boolean;
		Type: any;
		Position: XlDataLabelPosition;
		ShowSeriesName: boolean;
		ShowCategoryName: boolean;
		ShowValue: boolean;
		ShowPercentage: boolean;
		ShowBubbleSize: boolean;
		Separator: any;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam pval 
		 */
		readonly _Height: double;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pval 
		 */
		readonly _Width: double;
		/**
		 * @returnParam pbstr 
		 */
		Formula: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaLocal: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1Local: string;
		ShowRange: boolean;
		/**
		 * @returnParam pHeight 
		 */
		Height: double;
		/**
		 * @returnParam pWidth 
		 */
		Width: double;
	}

	interface Trendlines {
		readonly Parent: IDispatch;
		Add(Type?: Default<XlTrendlineType, -4132>, Order?: any, Period?: any, Forward?: any, Backward?: any, Intercept?: any, DisplayEquation?: any, DisplayRSquared?: any, Name?: any): IMsoTrendline;
		readonly Count: int4;
		Item(Index?: any): IMsoTrendline;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index?: any): IMsoTrendline;
	}

	interface IMsoDataLabels {
		readonly Parent: IDispatch;
		readonly Name: string;
		Select(): any;
		readonly Border: IMsoBorder;
		Delete(): any;
		readonly Interior: IMsoInterior;
		readonly Fill: ChartFillFormat;
		/**
		 * @get 
		 */
		Characters(Start?: any, Length?: any): IMsoCharacters;
		readonly Font: ChartFont;
		HorizontalAlignment: any;
		Orientation: any;
		Shadow: boolean;
		VerticalAlignment: any;
		ReadingOrder: int4;
		AutoScaleFont: any;
		AutoText: boolean;
		NumberFormat: string;
		NumberFormatLinked: boolean;
		NumberFormatLocal: any;
		ShowLegendKey: boolean;
		Type: any;
		Position: XlDataLabelPosition;
		ShowSeriesName: boolean;
		ShowCategoryName: boolean;
		ShowValue: boolean;
		ShowPercentage: boolean;
		ShowBubbleSize: boolean;
		Separator: any;
		readonly Count: int4;
		Item(Index: any): IMsoDataLabel;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: any): IMsoDataLabel;
		Propagate(Index: any): void;
		ShowRange: boolean;
	}

	interface Points {
		readonly Parent: IDispatch;
		readonly Count: int4;
		Item(Index: int4): ChartPoint;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: int4): ChartPoint;
	}

	interface ChartPoint {
		readonly Parent: IDispatch;
		_ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any): any;
		readonly Border: IMsoBorder;
		ClearFormats(): any;
		Copy(): any;
		readonly DataLabel: IMsoDataLabel;
		Delete(): any;
		Explosion: int4;
		HasDataLabel: boolean;
		readonly Interior: IMsoInterior;
		InvertIfNegative: boolean;
		MarkerBackgroundColor: int4;
		MarkerBackgroundColorIndex: XlColorIndex;
		MarkerForegroundColor: int4;
		MarkerForegroundColorIndex: XlColorIndex;
		MarkerSize: int4;
		MarkerStyle: XlMarkerStyle;
		Paste(): any;
		PictureType: XlChartPictureType;
		PictureUnit: double;
		Select(): any;
		ApplyPictToSides: boolean;
		ApplyPictToFront: boolean;
		ApplyPictToEnd: boolean;
		Shadow: boolean;
		SecondaryPlot: boolean;
		readonly Fill: ChartFillFormat;
		ApplyDataLabels(Type?: Default<XlDataLabelsType, 2>, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any, ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): any;
		Has3DEffect: boolean;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		PictureUnit2: double;
		readonly Name: string;
		/**
		 * @returnParam pval 
		 */
		readonly Height: double;
		/**
		 * @returnParam pval 
		 */
		readonly Width: double;
		/**
		 * @returnParam pval 
		 */
		readonly Left: double;
		/**
		 * @returnParam pval 
		 */
		readonly Top: double;
		/**
		 * @returnParam pval 
		 */
		PieSliceLocation(loc: XlPieSliceLocation, Index?: Default<XlPieSliceIndex, 2>): double;
	}

	interface Axes {
		/**
		 * @returnParam pval 
		 */
		readonly Count: int4;
		/**
		 * @get 
		 */
		Item(Type: XlAxisType, AxisGroup?: Default<XlAxisGroup, 1>): IMsoAxis;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Type: XlAxisType, AxisGroup?: Default<XlAxisGroup, 1>): IMsoAxis;
		readonly Parent: IDispatch;
	}

	interface IMsoAxis {
		/**
		 * @returnParam pval 
		 */
		AxisBetweenCategories: boolean;
		/**
		 * @returnParam pval 
		 */
		readonly AxisGroup: XlAxisGroup;
		/**
		 * @returnParam pval 
		 */
		readonly AxisTitle: IMsoAxisTitle;
		/**
		 * @returnParam pval 
		 */
		CategoryNames: any;
		/**
		 * @returnParam pval 
		 */
		Crosses: XlAxisCrosses;
		/**
		 * @returnParam pval 
		 */
		CrossesAt: double;
		/**
		 * @returnParam pval 
		 */
		Delete(): any;
		/**
		 * @returnParam pval 
		 */
		HasMajorGridlines: boolean;
		/**
		 * @returnParam pval 
		 */
		HasMinorGridlines: boolean;
		/**
		 * @returnParam pval 
		 */
		HasTitle: boolean;
		/**
		 * @returnParam ppval 
		 */
		readonly MajorGridlines: GridLines;
		/**
		 * @returnParam pval 
		 */
		MajorTickMark: XlTickMark;
		/**
		 * @returnParam pval 
		 */
		MajorUnit: double;
		/**
		 * @returnParam pval 
		 */
		LogBase: double;
		/**
		 * @returnParam pval 
		 */
		TickLabelSpacingIsAuto: boolean;
		/**
		 * @returnParam pval 
		 */
		MajorUnitIsAuto: boolean;
		/**
		 * @returnParam pval 
		 */
		MaximumScale: double;
		/**
		 * @returnParam pval 
		 */
		MaximumScaleIsAuto: boolean;
		/**
		 * @returnParam pval 
		 */
		MinimumScale: double;
		/**
		 * @returnParam pval 
		 */
		MinimumScaleIsAuto: boolean;
		/**
		 * @returnParam ppval 
		 */
		readonly MinorGridlines: GridLines;
		/**
		 * @returnParam pval 
		 */
		MinorTickMark: XlTickMark;
		/**
		 * @returnParam pval 
		 */
		MinorUnit: double;
		/**
		 * @returnParam pval 
		 */
		MinorUnitIsAuto: boolean;
		/**
		 * @returnParam pval 
		 */
		ReversePlotOrder: boolean;
		/**
		 * @returnParam pval 
		 */
		ScaleType: XlScaleType;
		/**
		 * @returnParam pval 
		 */
		Select(): any;
		/**
		 * @returnParam pval 
		 */
		TickLabelPosition: XlTickLabelPosition;
		/**
		 * @returnParam pval 
		 */
		readonly TickLabels: IMsoTickLabels;
		/**
		 * @returnParam pval 
		 */
		TickLabelSpacing: int;
		/**
		 * @returnParam pval 
		 */
		TickMarkSpacing: int;
		/**
		 * @returnParam pval 
		 */
		Type: XlAxisType;
		/**
		 * @returnParam pval 
		 */
		BaseUnit: XlTimeUnit;
		/**
		 * @returnParam pval 
		 */
		BaseUnitIsAuto: boolean;
		/**
		 * @returnParam pval 
		 */
		MajorUnitScale: XlTimeUnit;
		/**
		 * @returnParam pval 
		 */
		MinorUnitScale: XlTimeUnit;
		/**
		 * @returnParam pval 
		 */
		CategoryType: XlCategoryType;
		/**
		 * @returnParam pval 
		 */
		readonly Left: double;
		/**
		 * @returnParam pval 
		 */
		readonly Top: double;
		/**
		 * @returnParam pval 
		 */
		readonly Width: double;
		/**
		 * @returnParam pval 
		 */
		readonly Height: double;
		/**
		 * @returnParam pval 
		 */
		DisplayUnit: XlDisplayUnit;
		/**
		 * @returnParam pval 
		 */
		DisplayUnitCustom: double;
		/**
		 * @returnParam pval 
		 */
		HasDisplayUnitLabel: boolean;
		/**
		 * @returnParam pval 
		 */
		readonly DisplayUnitLabel: IMsoDisplayUnitLabel;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pbstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		readonly Parent: IDispatch;
	}

	interface IMsoAxisTitle extends IMsoChartTitle {
		/**
		 * @returnParam pbstr 
		 */
		Caption: string;
		/**
		 * @get 
		 */
		Characters(Start?: any, Length?: any): IMsoCharacters;
		/**
		 * @returnParam ppfont 
		 */
		readonly Font: ChartFont;
		/**
		 * @returnParam Val 
		 */
		HorizontalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		Left: double;
		/**
		 * @returnParam Val 
		 */
		Orientation: any;
		/**
		 * @returnParam pval 
		 */
		Shadow: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
		/**
		 * @returnParam pval 
		 */
		Top: double;
		/**
		 * @returnParam Val 
		 */
		VerticalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		ReadingOrder: int;
		/**
		 * @returnParam Val 
		 */
		AutoScaleFont: any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pval 
		 */
		Delete(): any;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pval 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppval 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pval 
		 */
		Select(): any;
		IncludeInLayout: boolean;
		/**
		 * @returnParam pval 
		 */
		Position: XlChartElementPosition;
		/**
		 * @returnParam ppval 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam pval 
		 */
		readonly Height: double;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pval 
		 */
		readonly Width: double;
		/**
		 * @returnParam pbstr 
		 */
		Formula: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaLocal: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1Local: string;
	}

	interface IMsoTickLabels {
		/**
		 * @returnParam ppval 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pval 
		 */
		Delete(): any;
		/**
		 * @returnParam ppval 
		 */
		readonly Font: ChartFont;
		/**
		 * @returnParam pval 
		 */
		readonly Name: string;
		/**
		 * @returnParam pval 
		 */
		NumberFormat: string;
		/**
		 * @returnParam pval 
		 */
		NumberFormatLinked: boolean;
		/**
		 * @returnParam pval 
		 */
		NumberFormatLocal: any;
		/**
		 * @returnParam pval 
		 */
		Orientation: XlTickLabelOrientation;
		/**
		 * @returnParam pval 
		 */
		Select(): any;
		/**
		 * @returnParam pval 
		 */
		ReadingOrder: int;
		/**
		 * @returnParam pval 
		 */
		AutoScaleFont: any;
		/**
		 * @returnParam pval 
		 */
		readonly Depth: int;
		/**
		 * @returnParam pval 
		 */
		Offset: int;
		/**
		 * @returnParam pval 
		 */
		Alignment: int;
		/**
		 * @returnParam pval 
		 */
		MultiLevel: boolean;
		/**
		 * @returnParam ppChartFormat 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface IMsoDisplayUnitLabel extends IMsoChartTitle {
		/**
		 * @returnParam pbstr 
		 */
		Caption: string;
		/**
		 * @get 
		 */
		Characters(Start?: any, Length?: any): IMsoCharacters;
		/**
		 * @returnParam ppfont 
		 */
		readonly Font: ChartFont;
		/**
		 * @returnParam Val 
		 */
		HorizontalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		Left: double;
		/**
		 * @returnParam Val 
		 */
		Orientation: any;
		/**
		 * @returnParam pval 
		 */
		Shadow: boolean;
		/**
		 * @returnParam pbstr 
		 */
		Text: string;
		/**
		 * @returnParam pval 
		 */
		Top: double;
		/**
		 * @returnParam Val 
		 */
		VerticalAlignment: any;
		/**
		 * @returnParam pval 
		 */
		ReadingOrder: int;
		/**
		 * @returnParam Val 
		 */
		AutoScaleFont: any;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Interior: IMsoInterior;
		/**
		 * @returnParam ppinterior 
		 */
		readonly Fill: ChartFillFormat;
		/**
		 * @returnParam pval 
		 */
		Delete(): any;
		/**
		 * @returnParam ppborder 
		 */
		readonly Border: IMsoBorder;
		/**
		 * @returnParam pval 
		 */
		readonly Name: string;
		/**
		 * @returnParam ppval 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam pval 
		 */
		Select(): any;
		IncludeInLayout: boolean;
		/**
		 * @returnParam pval 
		 */
		Position: XlChartElementPosition;
		/**
		 * @returnParam ppval 
		 */
		readonly Format: IMsoChartFormat;
		/**
		 * @returnParam pval 
		 */
		readonly Height: double;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pval 
		 */
		readonly Width: double;
		/**
		 * @returnParam pbstr 
		 */
		Formula: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaLocal: string;
		/**
		 * @returnParam pbstr 
		 */
		FormulaR1C1Local: string;
	}

	interface IMsoHyperlinks {
	}

	interface ChartGroups {
		readonly Parent: IDispatch;
		readonly Count: int4;
		Item(Index: any): IMsoChartGroup;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
	}

	interface SmartArtLayouts extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam SmartArtLayout 
		 */
		Item(Index: any): SmartArtLayout;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
	}

	interface SmartArtQuickStyles extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam Style 
		 */
		Item(Index: any): SmartArtQuickStyle;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
	}

	interface SmartArtColors extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @get 
		 * @returnParam SmartArtColor 
		 */
		Item(Index: any): SmartArtColor;
		/**
		 * @returnParam Parent 
		 */
		readonly Parent: IDispatch;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int;
	}

	interface PickerField extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Name 
		 */
		readonly Name: string;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoPickerField;
		/**
		 * @returnParam IsHidden 
		 */
		readonly IsHidden: boolean;
	}

	interface PickerFields extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam Field 
		 */
		Item(Index: int): PickerField;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int4;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface PickerProperty extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Id 
		 */
		readonly Id: string;
		/**
		 * @returnParam Value 
		 */
		readonly Value: any;
		/**
		 * @returnParam Type 
		 */
		readonly Type: MsoPickerField;
	}

	interface PickerProperties extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam prop 
		 */
		Item(Index: int): PickerProperty;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int4;
		/**
		 * @returnParam prop 
		 */
		Add(Id: string, Value: string, Type: MsoPickerField): PickerProperty;
		Remove(Id: string): void;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface PickerResult extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Id 
		 */
		readonly Id: string;
		/**
		 * @returnParam DisplayName 
		 */
		DisplayName: string;
		/**
		 * @returnParam Type 
		 */
		Type: string;
		/**
		 * @returnParam SIPId 
		 */
		SIPId: string;
		/**
		 * @returnParam ItemData 
		 */
		ItemData: any;
		/**
		 * @returnParam SubItems 
		 */
		SubItems: any;
		/**
		 * @returnParam DuplicateResults 
		 */
		readonly DuplicateResults: any;
		/**
		 * @returnParam Fields 
		 */
		Fields: PickerFields;
	}

	interface PickerResults extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 * @returnParam Result 
		 */
		Item(Index: int): PickerResult;
		/**
		 * @returnParam Count 
		 */
		readonly Count: int4;
		/**
		 * @returnParam Result 
		 */
		Add(Id: string, DisplayName: string, Type: string, SIPId?: Default<string, "">, ItemData?: any, SubItems?: any): PickerResult;
		//_NewEnum
		/**
		 * @get 
		*/
		[Symbol.iterator](): IterableIterator<any>;
	}

	interface PickerDialog extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam Id 
		 */
		DataHandlerId: string;
		/**
		 * @returnParam Title 
		 */
		Title: string;
		/**
		 * @returnParam Props 
		 */
		readonly Properties: PickerProperties;
		/**
		 * @returnParam Results 
		 */
		CreatePickerResults(): PickerResults;
		/**
		 * @returnParam Results 
		 */
		Show(IsMultiSelect?: Default<boolean, true>, ExistingResults?: Default<PickerResults, null>): PickerResults;
		/**
		 * @returnParam Results 
		 */
		Resolve(TokenText: string, duplicateDlgMode: int): PickerResults;
	}

	interface IMsoContactCard extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		/**
		 * @returnParam pAddress 
		 */
		readonly Address: string;
		/**
		 * @returnParam pAddressType 
		 */
		readonly AddressType: MsoContactCardAddressType;
		/**
		 * @returnParam pCardType 
		 */
		readonly CardType: MsoContactCardType;
		/**
		 * @returnParam ppdispParent 
		 */
		readonly Parent: IDispatch;
	}

	interface ContactCard extends _IMsoDispObj {
		/**
		 * @returnParam ppidisp 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam plCreator 
		 */
		readonly Creator: int4;
		Close(): void;
		Show(CardStyle: MsoContactCardStyle, RectangleLeft: int4, RectangleRight: int4, RectangleTop: int4, RectangleBottom: int4, HorizontalPosition: int4, ShowWithDelay?: Default<boolean, false>): void;
	}

	interface FullSeriesCollection {
		readonly Parent: IDispatch;
		readonly Count: int4;
		Item(Index: any): IMsoSeries;
		//_NewEnum
		[Symbol.iterator](): IterableIterator<any>;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: any): IMsoSeries;
	}

	interface IMsoCategory {
		readonly Parent: IDispatch;
		/**
		 * @returnParam pbstr 
		 */
		readonly Name: string;
		/**
		 * @returnParam pfIsFiltered 
		 */
		IsFiltered: boolean;
	}

	interface CategoryCollection {
		readonly Parent: IDispatch;
		/**
		 * @returnParam cCategory 
		 */
		readonly Count: int4;
		/**
		 * @returnParam ppcategory 
		 */
		Item(Index: any): IMsoCategory;
		/**
		 * @returnParam ppval 
		 */
		readonly Application: IDispatch;
		/**
		 * @returnParam pval 
		 */
		readonly Creator: int4;
		/**
		 * @get 
		 */
		_Default(Index: any): IMsoCategory;
	}

	/**
	 * @coclass
	*/
	type CommandBars = _CommandBars;
	/**
	 * @coclass
	*/
	type MsoEnvelope = IMsoEnvelopeVB;
	/**
	 * @coclass
	*/
	type CustomTaskPane = _CustomTaskPane;
}

declare interface Console {
  error(...data: any[]): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  warn(...data: any[]): void;
}
/**
 * 鎺у埗鍙板璞? */
declare const console: Console;

declare interface Session {
	getActiveUser(): { id: string; name: string; };
}

declare const Session: Session;

declare enum JSMsgBoxButtonStyle {
    jsOKOnly,
    jsOKCancel,
    jsAbortRetryIgnore,
    jsYesNoCancel,
    jsYesNo,
    jsRetryCancel,
}

declare enum JSMsgBoxResult {
    jsResultOK = 0,
    jsResultCancel = 2,
    jsResultAbort,
    jsResultRetry,
    jsResultIgnore,
    jsResultYes,
    jsResultNo,
}

declare function MsgBox(Prompt: string, Buttons?: JSMsgBoxButtonStyle, Title?: string): JSMsgBoxResult;
declare function InputBox(Prompt: string, Title?: string, Default?: string, XPos?: number, YPos?: number): string;
declare function alert(Prompt: string): void;
declare function prompt(Prompt: string, Default?: string): string;
declare function confirm(Prompt: string): boolean;
interface Option {
  method: "GET" | "POST" | "PUT" | "DELETE";
  timeout?: number;
  headers?: {
    [key: string]: any;
  };
  body?: {
    [key: string]: any;
  };
}
interface Res {
  status(): number;
  statusText(): string;
  text(): string;
  json(): any;
  binary(): Buffer;
}

declare interface HTTP {
  fetch: (path: string, option: Option) => Res;
  get: (path: string) => Res;
  post: (
    path: string,
    body?: {
      [key: string]: any;
    }
  ) => Res;
}

/**
 * 缃戠粶鏈嶅姟
 */
declare const HTTP: HTTP;

interface File {
  Application: Application;
  close: () => void;
}
interface FileInfo {
  fileName: string;
  fileId: string;
}
interface IWholeFileInfo {
  id: string;
  name: string;
  size: number;
  ext: string;
  creator: {
    avatar: string;
    id: string;
    name: string;
  }
}
declare interface KSDrive {
  openFile: (fileId: URL | FileInfo) => File;
  listFiles: (data: { dirUrl: string; offset: number; count: number }) => {
    nextOffset: number;
    files: File[];
  };
  getFileInfoById: (fileId: string) => IWholeFileInfo;
}

/**
 * 浜戞枃妗ｆ湇鍔? */
declare const KSDrive: KSDrive;


