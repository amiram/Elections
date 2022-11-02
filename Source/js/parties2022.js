var getParties = function () {

    var likud = new party('ליכוד', 963968);
    var yeshatid = new party('יש עתיד', 743052);
    var tziyonutdatit = new party('הציונות הדתית', 426772);
    var mamlachti = new party('המחנה הממלכתי', 369698);
    var shas = new party('שס', 347559);
    var yahadut = new party('יהדות התורה', 254616);
    var betenu = new party('ישראל ביתנו', 179607);
    var aravitmeuhedet = new party('ערבית מאוחדת', 177031);
    var chadashtaal = new party('חדש-תעל', 159843);
    var avoda = new party('עבודה', 147520);
    var meretz = new party('מרצ', 132063);
    var balad = new party('בלד', 124249);
    var baityehudi = new party('הבית היהודי', 48337);
    var beometz = new party('באומץ בשבילך', 13257);
    var chofeshkalkali = new party('חופש כלכלי', 11881);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 11720);
    var tzeirim = new party('צעירים בוערים', 6443);
    var daat = new party('דעת טוב ורע', 1335);
    var kolhasviva = new party('קול הסביבה', 1306);
    var nativ = new party('נתיב', 1173);
    var piratim = new party('הפיראטים', 1151);
    var ani = new party('אני ואתה', 1140);
    var kolkol = new party('כל קול קובע', 1120);
    var chofshit = new party('ישראל חופשית', 985);
    var seder = new party('סדר חדש', 944);
    var yeshkivun = new party('יש כיוון', 908);
    var atzmaim = new party('העצמאים החדשים', 885);
    var shloshim = new party('שלושים ארבעים', 848);
    var manhigut = new party('מנהיגות חברתית', 847);
    var kvod = new party('כבוד האדם', 477);
    var shachar = new party('שחר כוח חברתי', 465);
    var gush = new party('הגוש התנכי', 377);
    var anachnu = new party('אנחנו', 361);
    var lev = new party('הלב היהודי', 338);
    var zomet = new party('צומת', 329);
    var shema = new party('שמע', 227);
    var tzav = new party('צו השעה', 227);
    var ichudbrit = new party('איחוד בני הברית', 194);
    var kama = new party('קמ"ה', 183);
    var koach = new party('כח להשפיע', 130);

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
