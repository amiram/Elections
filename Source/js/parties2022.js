var getParties = function () {

    var likud = new party('ליכוד', 1063942);
    var yeshatid = new party('יש עתיד', 808157);
    var tziyonutdatit = new party('הציונות הדתית', 483842);
    var mamlachti = new party('המחנה הממלכתי', 409480);
    var shas = new party('שס', 375911);
    var yahadut = new party('יהדות התורה', 270901);
    var betenu = new party('ישראל ביתנו', 200421);
    var aravitmeuhedet = new party('ערבית מאוחדת', 188577);
    var chadashtaal = new party('חדש-תעל', 173522);
    var avoda = new party('עבודה', 163530);
    var meretz = new party('מרצ', 142452);
    var balad = new party('בלד', 133163);
    var baityehudi = new party('הבית היהודי', 53693);
    var chofeshkalkali = new party('חופש כלכלי', 14235);
    var beometz = new party('באומץ בשבילך', 14155);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 13007);
    var tzeirim = new party('צעירים בוערים', 7927);
    var daat = new party('דעת טוב ורע', 1529);
    var piratim = new party('הפיראטים', 1516);
    var kolhasviva = new party('קול הסביבה', 1507);
    var nativ = new party('נתיב', 1271);
    var ani = new party('אני ואתה', 1236);
    var kolkol = new party('כל קול קובע', 1226);
    var yeshkivun = new party('יש כיוון', 1095);
    var chofshit = new party('ישראל חופשית', 1091);
    var seder = new party('סדר חדש', 1021);
    var atzmaim = new party('העצמאים החדשים', 969);
    var manhigut = new party('מנהיגות חברתית', 932);
    var shloshim = new party('שלושים ארבעים', 930);
    var kvod = new party('כבוד האדם', 510);
    var shachar = new party('שחר כוח חברתי', 501);
    var gush = new party('הגוש התנכי', 411);
    var anachnu = new party('אנחנו', 389);
    var lev = new party('הלב היהודי', 388);
    var zomet = new party('צומת', 364);
    var tzav = new party('צו השעה', 248);
    var shema = new party('שמע', 244);
    var ichudbrit = new party('איחוד בני הברית', 214);
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
