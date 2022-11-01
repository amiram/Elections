var getParties = function () {

    var likud = new party('ליכוד', 0);
    var yeshatid = new party('יש עתיד', 0);
    var shas = new party('שס', 0);
    var mamlachti = new party('המחנה הממלכתי', 0);
    var baityehudi = new party('הבית היהודי', 0);
    var avoda = new party('עבודה', 0);
    var yahadut = new party('יהדות התורה', 0);
    var betenu = new party('ישראל ביתנו', 0);
    var tziyonutdatit = new party('הציונות הדתית', 0);
    var chadashtaal = new party('חדש-תעל', 0);
    var meretz = new party('מרצ', 0);
    var aravitmeuhedet = new party('ערבית מאוחדת', 0);
    var balad = new party('בלד', 0);
    var chofeshkalkali = new party('חופש כלכלי', 0);
    var shachar = new party('שחר כוח חברתי', 0);
    var koach = new party('כח להשפיע', 0);
    var kama = new party('קמ"ה', 0);
    var zomet = new party('צומת', 0);
    var chofshit = new party('ישראל חופשית', 0);
    var ichudbrit = new party('איחוד בני הברית', 0);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 0);
    var gush = new party('הגוש התנכי', 0);
    var tzav = new party('צו השעה', 0);
    var ani = new party('אני ואתה', 0);
    var kvod = new party('כבוד האדם', 0);
    var nativ = new party('נתיב', 0);
    var yeshkivun = new party('יש כיוון', 0);
    var anachnu = new party('אנחנו', 0);
    var shema = new party('שמע', 0);
    var atzmaim = new party('העצמאים החדשים', 0);
    var piratim = new party('הפיראטים', 0);
    var tzeirim = new party('צעירים בוערים', 0);
    var manhigut = new party('מנהיגות חברתית', 0);
    var kolhasviva = new party('קול הסביבה', 0);
    var lev = new party('הלב היהודי', 0);
    var kolkol = new party('כל קול קובע', 0);
    var seder = new party('סדר חדש', 0);
    var beometz = new party('באומץ בשבילך', 0);
    var shloshim = new party('שלושים ארבעים', 0);
    var daat = new party('דעת טוב ורע', 0);

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
