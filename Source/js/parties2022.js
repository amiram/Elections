var getParties = function () {

    var likud = new party('ליכוד', 547);
    var yeshatid = new party('יש עתיד', 1015);
    var shas = new party('שס', 83);
    var tziyonutdatit = new party('הציונות הדתית', 435);
    var mamlachti = new party('המחנה הממלכתי', 502);
    var baityehudi = new party('הבית היהודי', 92);
    var avoda = new party('עבודה', 328);
    var yahadut = new party('יהדות התורה', 205);
    var betenu = new party('ישראל ביתנו', 63);
    var chadashtaal = new party('חדש-תעל', 15);
    var meretz = new party('מרצ', 271);
    var aravitmeuhedet = new party('ערבית מאוחדת', 2);
    var balad = new party('בלד', 1);
    var chofeshkalkali = new party('חופש כלכלי', 11);
    var shachar = new party('שחר כוח חברתי', 1);
    var koach = new party('כח להשפיע', 0);
    var kama = new party('קמ"ה', 0);
    var zomet = new party('צומת', 0);
    var chofshit = new party('ישראל חופשית', 0);
    var ichudbrit = new party('איחוד בני הברית', 0);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 9);
    var gush = new party('הגוש התנכי', 0);
    var tzav = new party('צו השעה', 0);
    var ani = new party('אני ואתה', 0);
    var kvod = new party('כבוד האדם', 1);
    var nativ = new party('נתיב', 1);
    var yeshkivun = new party('יש כיוון', 2);
    var anachnu = new party('אנחנו', 1);
    var shema = new party('שמע', 0);
    var atzmaim = new party('העצמאים החדשים', 0);
    var piratim = new party('הפיראטים', 1);
    var tzeirim = new party('צעירים בוערים', 5);
    var manhigut = new party('מנהיגות חברתית', 1);
    var kolhasviva = new party('קול הסביבה', 4);
    var lev = new party('הלב היהודי', 1);
    var kolkol = new party('כל קול קובע', 1);
    var seder = new party('סדר חדש', 1);
    var beometz = new party('באומץ בשבילך', 27);
    var shloshim = new party('שלושים ארבעים', 0);
    var daat = new party('דעת טוב ורע', 5);

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
