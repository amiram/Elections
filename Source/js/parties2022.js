var getParties = function () {

    var likud = new party('ליכוד', 1021444);
    var yeshatid = new party('יש עתיד', 779555);
    var tziyonutdatit = new party('הציונות הדתית', 455612);
    var mamlachti = new party('המחנה הממלכתי', 390455);
    var shas = new party('שס', 364417);
    var yahadut = new party('יהדות התורה', 264505);
    var betenu = new party('ישראל ביתנו', 191426);
    var aravitmeuhedet = new party('ערבית מאוחדת', 186472);
    var chadashtaal = new party('חדש-תעל', 171402);
    var avoda = new party('עבודה', 155369);
    var meretz = new party('מרצ', 137919);
    var balad = new party('בלד', 131355);
    var baityehudi = new party('הבית היהודי', 51070);
    var beometz = new party('באומץ בשבילך', 13821);
    var chofeshkalkali = new party('חופש כלכלי', 12886);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12339);
    var tzeirim = new party('צעירים בוערים', 7048);
    var daat = new party('דעת טוב ורע', 1426);
    var kolhasviva = new party('קול הסביבה', 1393);
    var piratim = new party('הפיראטים', 1274);
    var nativ = new party('נתיב', 1221);
    var ani = new party('אני ואתה', 1189);
    var kolkol = new party('כל קול קובע', 1186);
    var chofshit = new party('ישראל חופשית', 1043);
    var seder = new party('סדר חדש', 991);
    var yeshkivun = new party('יש כיוון', 989);
    var atzmaim = new party('העצמאים החדשים', 931);
    var shloshim = new party('שלושים ארבעים', 905);
    var manhigut = new party('מנהיגות חברתית', 903);
    var kvod = new party('כבוד האדם', 495);
    var shachar = new party('שחר כוח חברתי', 483);
    var gush = new party('הגוש התנכי', 398);
    var anachnu = new party('אנחנו', 380);
    var lev = new party('הלב היהודי', 365);
    var zomet = new party('צומת', 353);
    var tzav = new party('צו השעה', 241);
    var shema = new party('שמע', 238);
    var ichudbrit = new party('איחוד בני הברית', 204);
    var kama = new party('קמ"ה', 192);
    var koach = new party('כח להשפיע', 136);

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
