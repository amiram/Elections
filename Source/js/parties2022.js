var getParties = function () {

    var likud = new party('ליכוד', 1000777);
    var yeshatid = new party('יש עתיד', 765930);
    var tziyonutdatit = new party('הציונות הדתית', 442395);
    var mamlachti = new party('המחנה הממלכתי', 381699);
    var shas = new party('שס', 358436);
    var yahadut = new party('יהדות התורה', 260940);
    var betenu = new party('ישראל ביתנו', 186447);
    var aravitmeuhedet = new party('ערבית מאוחדת', 185329);
    var chadashtaal = new party('חדש-תעל', 169920);
    var avoda = new party('עבודה', 151881);
    var meretz = new party('מרצ', 135916);
    var balad = new party('בלד', 130247);
    var baityehudi = new party('הבית היהודי', 49806);
    var beometz = new party('באומץ בשבילך', 13657);
    var chofeshkalkali = new party('חופש כלכלי', 12264);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12114);
    var tzeirim = new party('צעירים בוערים', 6720);
    var daat = new party('דעת טוב ורע', 1367);
    var kolhasviva = new party('קול הסביבה', 1355);
    var nativ = new party('נתיב', 1204);
    var piratim = new party('הפיראטים', 1184);
    var ani = new party('אני ואתה', 1171);
    var kolkol = new party('כל קול קובע', 1163);
    var chofshit = new party('ישראל חופשית', 1021);
    var seder = new party('סדר חדש', 982);
    var yeshkivun = new party('יש כיוון', 939);
    var atzmaim = new party('העצמאים החדשים', 918);
    var manhigut = new party('מנהיגות חברתית', 894);
    var shloshim = new party('שלושים ארבעים', 889);
    var kvod = new party('כבוד האדם', 493);
    var shachar = new party('שחר כוח חברתי', 476);
    var gush = new party('הגוש התנכי', 389);
    var anachnu = new party('אנחנו', 373);
    var lev = new party('הלב היהודי', 356);
    var zomet = new party('צומת', 341);
    var tzav = new party('צו השעה', 238);
    var shema = new party('שמע', 235);
    var ichudbrit = new party('איחוד בני הברית', 201);
    var kama = new party('קמ"ה', 190);
    var koach = new party('כח להשפיע', 133);

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
