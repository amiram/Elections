var getParties = function () {

    var likud = new party('ליכוד', 1040808);
    var yeshatid = new party('יש עתיד', 792765);
    var tziyonutdatit = new party('הציונות הדתית', 468433);
    var mamlachti = new party('המחנה הממלכתי', 399673);
    var shas = new party('שס', 368910);
    var yahadut = new party('יהדות התורה', 266941);
    var betenu = new party('ישראל ביתנו', 194607);
    var aravitmeuhedet = new party('ערבית מאוחדת', 187046);
    var chadashtaal = new party('חדש-תעל', 171899);
    var avoda = new party('עבודה', 159039);
    var meretz = new party('מרצ', 139741);
    var balad = new party('בלד', 131820);
    var baityehudi = new party('הבית היהודי', 52220);
    var beometz = new party('באומץ בשבילך', 13954);
    var chofeshkalkali = new party('חופש כלכלי', 13614);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12627);
    var tzeirim = new party('צעירים בוערים', 7486);
    var daat = new party('דעת טוב ורע', 1458);
    var kolhasviva = new party('קול הסביבה', 1437);
    var piratim = new party('הפיראטים', 1401);
    var nativ = new party('נתיב', 1237);
    var ani = new party('אני ואתה', 1206);
    var kolkol = new party('כל קול קובע', 1196);
    var chofshit = new party('ישראל חופשית', 1062);
    var yeshkivun = new party('יש כיוון', 1045);
    var seder = new party('סדר חדש', 999);
    var atzmaim = new party('העצמאים החדשים', 942);
    var manhigut = new party('מנהיגות חברתית', 916);
    var shloshim = new party('שלושים ארבעים', 914);
    var kvod = new party('כבוד האדם', 498);
    var shachar = new party('שחר כוח חברתי', 492);
    var gush = new party('הגוש התנכי', 405);
    var anachnu = new party('אנחנו', 383);
    var lev = new party('הלב היהודי', 372);
    var zomet = new party('צומת', 356);
    var tzav = new party('צו השעה', 243);
    var shema = new party('שמע', 240);
    var ichudbrit = new party('איחוד בני הברית', 208);
    var kama = new party('קמ"ה', 193);
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
