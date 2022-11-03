var getParties = function () {

    var likud = new party('ליכוד', 1115049);
    var yeshatid = new party('יש עתיד', 847145);
    var tziyonutdatit = new party('הציונות הדתית', 516146);
    var mamlachti = new party('המחנה הממלכתי', 432376);
    var shas = new party('שס', 392644);
    var yahadut = new party('יהדות התורה', 280125);
    var betenu = new party('ישראל ביתנו', 213655);
    var aravitmeuhedet = new party('ערבית מאוחדת', 193916);
    var chadashtaal = new party('חדש-תעל', 178661);
    var avoda = new party('עבודה', 175922);
    var meretz = new party('מרצ', 150696);
    var balad = new party('בלד', 138093);
    var baityehudi = new party('הבית היהודי', 56793);
    var chofeshkalkali = new party('חופש כלכלי', 15817);
    var beometz = new party('באומץ בשבילך', 14781);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 13991);
    var tzeirim = new party('צעירים בוערים', 8794);
    var piratim = new party('הפיראטים', 1728);
    var daat = new party('דעת טוב ורע', 1669);
    var kolhasviva = new party('קול הסביבה', 1619);
    var nativ = new party('נתיב', 1344);
    var ani = new party('אני ואתה', 1321);
    var kolkol = new party('כל קול קובע', 1292);
    var yeshkivun = new party('יש כיוון', 1213);
    var chofshit = new party('ישראל חופשית', 1156);
    var seder = new party('סדר חדש', 1078);
    var atzmaim = new party('העצמאים החדשים', 1018);
    var manhigut = new party('מנהיגות חברתית', 982);
    var shloshim = new party('שלושים ארבעים', 948);
    var kvod = new party('כבוד האדם', 533);
    var shachar = new party('שחר כוח חברתי', 530);
    var gush = new party('הגוש התנכי', 425);
    var anachnu = new party('אנחנו', 413);
    var lev = new party('הלב היהודי', 412);
    var zomet = new party('צומת', 377);
    var tzav = new party('צו השעה', 265);
    var shema = new party('שמע', 256);
    var ichudbrit = new party('איחוד בני הברית', 234);
    var kama = new party('קמ"ה', 205);
    var koach = new party('כח להשפיע', 152);

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
