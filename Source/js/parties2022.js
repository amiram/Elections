var getParties = function () {

    var likud = new party('ליכוד', 947795);
    var yeshatid = new party('יש עתיד', 730869);
    var tziyonutdatit = new party('הציונות הדתית', 420849);
    var mamlachti = new party('המחנה הממלכתי', 363759);
    var shas = new party('שס', 342566);
    var yahadut = new party('יהדות התורה', 252662);
    var betenu = new party('ישראל ביתנו', 176695);
    var aravitmeuhedet = new party('ערבית מאוחדת', 176690);
    var chadashtaal = new party('חדש-תעל', 159457);
    var avoda = new party('עבודה', 145540);
    var meretz = new party('מרצ', 130599);
    var balad = new party('בלד', 124095);
    var baityehudi = new party('הבית היהודי', 47555);
    var beometz = new party('באומץ בשבילך', 13075);
    var chofeshkalkali = new party('חופש כלכלי', 11668);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 11504);
    var tzeirim = new party('צעירים בוערים', 6332);
    var daat = new party('דעת טוב ורע', 1322);
    var kolhasviva = new party('קול הסביבה', 1288);
    var ani = new party('אני ואתה', 1136);
    var nativ = new party('נתיב', 1151);
    var piratim = new party('הפיראטים', 1127);
    var kolkol = new party('כל קול קובע', 1106);
    var chofshit = new party('ישראל חופשית', 967);
    var seder = new party('סדר חדש', 931);
    var yeshkivun = new party('יש כיוון', 898);
    var atzmaim = new party('העצמאים החדשים', 875);
    var manhigut = new party('מנהיגות חברתית', 841);
    var shloshim = new party('שלושים ארבעים', 839);
    var kvod = new party('כבוד האדם', 471);
    var shachar = new party('שחר כוח חברתי', 463);
    var gush = new party('הגוש התנכי', 376);
    var anachnu = new party('אנחנו', 353);
    var lev = new party('הלב היהודי', 333);
    var zomet = new party('צומת', 325);
    var shema = new party('שמע', 224);
    var tzav = new party('צו השעה', 222);
    var ichudbrit = new party('איחוד בני הברית', 194);
    var kama = new party('קמ"ה', 181);
    var koach = new party('כח להשפיע', 127);

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
