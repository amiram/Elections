var getParties = function () {

    var likud = new party('ליכוד', 1048820);
    var yeshatid = new party('יש עתיד', 798416);
    var tziyonutdatit = new party('הציונות הדתית', 474224);
    var mamlachti = new party('המחנה הממלכתי', 403459);
    var shas = new party('שס', 371459);
    var yahadut = new party('יהדות התורה', 268522);
    var betenu = new party('ישראל ביתנו', 196338);
    var aravitmeuhedet = new party('ערבית מאוחדת', 187517);
    var chadashtaal = new party('חדש-תעל', 172380);
    var avoda = new party('עבודה', 160655);
    var meretz = new party('מרצ', 140730);
    var balad = new party('בלד', 132207);
    var baityehudi = new party('הבית היהודי', 52818);
    var beometz = new party('באומץ בשבילך', 14050);
    var chofeshkalkali = new party('חופש כלכלי', 13882);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12773);
    var tzeirim = new party('צעירים בוערים', 7656);
    var daat = new party('דעת טוב ורע', 1476);
    var kolhasviva = new party('קול הסביבה', 1458);
    var piratim = new party('הפיראטים', 1439);
    var nativ = new party('נתיב', 1249);
    var ani = new party('אני ואתה', 1214);
    var kolkol = new party('כל קול קובע', 1206);
    var chofshit = new party('ישראל חופשית', 1067);
    var yeshkivun = new party('יש כיוון', 1058);
    var seder = new party('סדר חדש', 1005);
    var atzmaim = new party('העצמאים החדשים', 951);
    var manhigut = new party('מנהיגות חברתית', 919);
    var shloshim = new party('שלושים ארבעים', 918);
    var kvod = new party('כבוד האדם', 502);
    var shachar = new party('שחר כוח חברתי', 495);
    var gush = new party('הגוש התנכי', 407);
    var anachnu = new party('אנחנו', 385);
    var lev = new party('הלב היהודי', 376);
    var zomet = new party('צומת', 356);
    var tzav = new party('צו השעה', 243);
    var shema = new party('שמע', 242);
    var ichudbrit = new party('איחוד בני הברית', 209);
    var kama = new party('קמ"ה', 193);
    var koach = new party('כח להשפיע', 137);

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
