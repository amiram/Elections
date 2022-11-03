var getParties = function () {

    var likud = new party('ליכוד', 1067881);
    var yeshatid = new party('יש עתיד', 810737);
    var tziyonutdatit = new party('הציונות הדתית', 486454);
    var mamlachti = new party('המחנה הממלכתי', 411214);
    var shas = new party('שס', 377045);
    var yahadut = new party('יהדות התורה', 271467);
    var betenu = new party('ישראל ביתנו', 200964);
    var aravitmeuhedet = new party('ערבית מאוחדת', 188728);
    var chadashtaal = new party('חדש-תעל', 173694);
    var avoda = new party('עבודה', 164311);
    var meretz = new party('מרצ', 142854);
    var balad = new party('בלד', 133313);
    var baityehudi = new party('הבית היהודי', 53917);
    var chofeshkalkali = new party('חופש כלכלי', 14380);
    var beometz = new party('באומץ בשבילך', 14182);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 13064);
    var tzeirim = new party('צעירים בוערים', 8022);
    var daat = new party('דעת טוב ורע', 1536);
    var piratim = new party('הפיראטים', 1535);
    var kolhasviva = new party('קול הסביבה', 1515);
    var nativ = new party('נתיב', 1275);
    var ani = new party('אני ואתה', 1239);
    var kolkol = new party('כל קול קובע', 1228);
    var yeshkivun = new party('יש כיוון', 1104);
    var chofshit = new party('ישראל חופשית', 1092);
    var seder = new party('סדר חדש', 1025);
    var atzmaim = new party('העצמאים החדשים', 969);
    var manhigut = new party('מנהיגות חברתית', 934);
    var shloshim = new party('שלושים ארבעים', 933);
    var kvod = new party('כבוד האדם', 512);
    var shachar = new party('שחר כוח חברתי', 503);
    var gush = new party('הגוש התנכי', 413);
    var anachnu = new party('אנחנו', 392);
    var lev = new party('הלב היהודי', 388);
    var zomet = new party('צומת', 364);
    var tzav = new party('צו השעה', 248);
    var shema = new party('שמע', 244);
    var ichudbrit = new party('איחוד בני הברית', 216);
    var kama = new party('קמ"ה', 196);
    var koach = new party('כח להשפיע', 138);

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
