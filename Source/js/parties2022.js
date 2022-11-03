var getParties = function () {

    var likud = new party('ליכוד', 1102965);
    var yeshatid = new party('יש עתיד', 838169);
    var tziyonutdatit = new party('הציונות הדתית', 509356);
    var mamlachti = new party('המחנה הממלכתי', 427163);
    var shas = new party('שס', 388753);
    var yahadut = new party('יהדות התורה', 278185);
    var betenu = new party('ישראל ביתנו', 210454);
    var aravitmeuhedet = new party('ערבית מאוחדת', 192660);
    var chadashtaal = new party('חדש-תעל', 177233);
    var avoda = new party('עבודה', 173156);
    var meretz = new party('מרצ', 148819);
    var balad = new party('בלד', 136761);
    var baityehudi = new party('הבית היהודי', 56102);
    var chofeshkalkali = new party('חופש כלכלי', 15463);
    var beometz = new party('באומץ בשבילך', 14627);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 13720);
    var tzeirim = new party('צעירים בוערים', 8622);
    var piratim = new party('הפיראטים', 1683);
    var daat = new party('דעת טוב ורע', 1643);
    var kolhasviva = new party('קול הסביבה', 1598);
    var nativ = new party('נתיב', 1322);
    var ani = new party('אני ואתה', 1303);
    var kolkol = new party('כל קול קובע', 1279);
    var yeshkivun = new party('יש כיוון', 1178);
    var chofshit = new party('ישראל חופשית', 1139);
    var seder = new party('סדר חדש', 1063);
    var atzmaim = new party('העצמאים החדשים', 1004);
    var manhigut = new party('מנהיגות חברתית', 958);
    var shloshim = new party('שלושים ארבעים', 931);
    var kvod = new party('כבוד האדם', 529);
    var shachar = new party('שחר כוח חברתי', 517);
    var gush = new party('הגוש התנכי', 423);
    var lev = new party('הלב היהודי', 407);
    var anachnu = new party('אנחנו', 406);
    var zomet = new party('צומת', 369);
    var tzav = new party('צו השעה', 259);
    var shema = new party('שמע', 253);
    var ichudbrit = new party('איחוד בני הברית', 230);
    var kama = new party('קמ"ה', 202);
    var koach = new party('כח להשפיע', 151);

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
