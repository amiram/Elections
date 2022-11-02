var getParties = function () {

    var likud = new party('ליכוד', 884758);
    var yeshatid = new party('יש עתיד', 690770);
    var tziyonutdatit = new party('הציונות הדתית', 394483);
    var mamlachti = new party('המחנה הממלכתי', 343252);
    var shas = new party('שס', 324240);
    var yahadut = new party('יהדות התורה', 244789);
    var betenu = new party('ישראל ביתנו', 163928);
    var aravitmeuhedet = new party('ערבית מאוחדת', 163277);
    var chadashtaal = new party('חדש-תעל', 151244);
    var avoda = new party('עבודה', 138160);
    var meretz = new party('מרצ', 124137);
    var balad = new party('בלד', 117892);
    var baityehudi = new party('הבית היהודי', 45026);
    var beometz = new party('באומץ בשבילך', 12329);
    var chofeshkalkali = new party('חופש כלכלי', 10997);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 10699);
    var tzeirim = new party('צעירים בוערים', 5955);
    var daat = new party('דעת טוב ורע', 1244);
    var kolhasviva = new party('קול הסביבה', 1205);
    var ani = new party('אני ואתה', 1109);
    var nativ = new party('נתיב', 1071);
    var piratim = new party('הפיראטים', 1051);
    var kolkol = new party('כל קול קובע', 1033);
    var chofshit = new party('ישראל חופשית', 910);
    var seder = new party('סדר חדש', 884);
    var yeshkivun = new party('יש כיוון', 841);
    var atzmaim = new party('העצמאים החדשים', 820);
    var shloshim = new party('שלושים ארבעים', 729);
    var manhigut = new party('מנהיגות חברתית', 797);
    var shachar = new party('שחר כוח חברתי', 442);
    var anachnu = new party('אנחנו', 332);
    var zomet = new party('צומת', 305);
    var gush = new party('הגוש התנכי', 342);
    var lev = new party('הלב היהודי', 308);
    var kvod = new party('כבוד האדם', 442);
    var shema = new party('שמע', 205);
    var ichudbrit = new party('איחוד בני הברית', 186);
    var tzav = new party('צו השעה', 206);
    var kama = new party('קמ"ה', 166);
    var koach = new party('כח להשפיע', 119);

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
