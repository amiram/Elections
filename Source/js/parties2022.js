var getParties = function () {

    var likud = new party('ליכוד', 979036);
    var yeshatid = new party('יש עתיד', 752682);
    var tziyonutdatit = new party('הציונות הדתית', 432797);
    var mamlachti = new party('המחנה הממלכתי', 374527);
    var shas = new party('שס', 352230);
    var yahadut = new party('יהדות התורה', 257028);
    var betenu = new party('ישראל ביתנו', 182683);
    var aravitmeuhedet = new party('ערבית מאוחדת', 181987);
    var chadashtaal = new party('חדש-תעל', 163949);
    var avoda = new party('עבודה', 149482);
    var meretz = new party('מרצ', 134043);
    var balad = new party('בלד', 126708);
    var baityehudi = new party('הבית היהודי', 48870);
    var beometz = new party('באומץ בשבילך', 13413);
    var chofeshkalkali = new party('חופש כלכלי', 12053);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 11880);
    var tzeirim = new party('צעירים בוערים', 6551);
    var daat = new party('דעת טוב ורע', 1345);
    var kolhasviva = new party('קול הסביבה', 1325);
    var nativ = new party('נתיב', 1186);
    var piratim = new party('הפיראטים', 1164);
    var ani = new party('אני ואתה', 1152);
    var kolkol = new party('כל קול קובע', 1140);
    var chofshit = new party('ישראל חופשית', 1003);
    var seder = new party('סדר חדש', 956);
    var yeshkivun = new party('יש כיוון', 921);
    var atzmaim = new party('העצמאים החדשים', 902);
    var manhigut = new party('מנהיגות חברתית', 868);
    var shloshim = new party('שלושים ארבעים', 866);
    var kvod = new party('כבוד האדם', 487);
    var shachar = new party('שחר כוח חברתי', 467);
    var gush = new party('הגוש התנכי', 380);
    var anachnu = new party('אנחנו', 366);
    var lev = new party('הלב היהודי', 346);
    var zomet = new party('צומת', 334);
    var tzav = new party('צו השעה', 234);
    var shema = new party('שמע', 232);
    var ichudbrit = new party('איחוד בני הברית', 195);
    var kama = new party('קמ"ה', 187);
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
