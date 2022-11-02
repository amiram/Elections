var getParties = function () {

    var likud = new party('ליכוד', 941446);
    var yeshatid = new party('יש עתיד', 726872);
    var tziyonutdatit = new party('הציונות הדתית', 418466);
    var mamlachti = new party('המחנה הממלכתי', 361527);
    var shas = new party('שס', 341137);
    var yahadut = new party('יהדות התורה', 252400);
    var betenu = new party('ישראל ביתנו', 175800);
    var aravitmeuhedet = new party('ערבית מאוחדת', 176561);
    var chadashtaal = new party('חדש-תעל', 159078);
    var avoda = new party('עבודה', 144657);
    var meretz = new party('מרצ', 130022);
    var balad = new party('בלד', 123742);
    var baityehudi = new party('הבית היהודי', 47367);
    var beometz = new party('באומץ בשבילך', 13004);
    var chofeshkalkali = new party('חופש כלכלי', 11589);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 11418);
    var tzeirim = new party('צעירים בוערים', 6288);
    var daat = new party('דעת טוב ורע', 1318);
    var kolhasviva = new party('קול הסביבה', 1283);
    var ani = new party('אני ואתה', 1135);
    var nativ = new party('נתיב', 1140);
    var piratim = new party('הפיראטים', 1122);
    var kolkol = new party('כל קול קובע', 1101);
    var chofshit = new party('ישראל חופשית', 960);
    var seder = new party('סדר חדש', 928);
    var yeshkivun = new party('יש כיוון', 887);
    var atzmaim = new party('העצמאים החדשים', 870);
    var shloshim = new party('שלושים ארבעים', 835);
    var manhigut = new party('מנהיגות חברתית', 834);
    var kvod = new party('כבוד האדם', 470);
    var shachar = new party('שחר כוח חברתי', 462);
    var anachnu = new party('אנחנו', 351);
    var zomet = new party('צומת', 325);
    var gush = new party('הגוש התנכי', 372);
    var lev = new party('הלב היהודי', 333);
    var shema = new party('שמע', 222);
    var ichudbrit = new party('איחוד בני הברית', 194);
    var tzav = new party('צו השעה', 220);
    var kama = new party('קמ"ה', 181);
    var koach = new party('כח להשפיע', 125);

    var parties = [
        likud,
        yeshatid,
        shas,
        mamlachti,
        baityehudi,
        avoda,
        yahadut,
        betenu,
        tziyonutdatit,
        chadashtaal,
        meretz,
        aravitmeuhedet,
        balad,
        chofeshkalkali,
        shachar,
        koach,
        kama,
        zomet,
        chofshit,
        ichudbrit,
        kakalitchadasha,
        gush,
        tzav,
        ani,
        kvod,
        nativ,
        yeshkivun,
        anachnu,
        shema,
        atzmaim,
        piratim,
        tzeirim,
        manhigut,
        kolhasviva,
        lev,
        kolkol,
        seder,
        beometz,
        shloshim,
        daat,
    ];

    var partyConnections = [
        new partyConnection(mamlachti, yeshatid),
        new partyConnection(yeshkivun, piratim),
        new partyConnection(likud, tziyonutdatit),
        new partyConnection(avoda, meretz),
        new partyConnection(shas, yahadut),
    ];

    return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
