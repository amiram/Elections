var getParties = function () {

    var likud = new party('ליכוד', 1044314);
    var yeshatid = new party('יש עתיד', 795207);
    var tziyonutdatit = new party('הציונות הדתית', 471191);
    var mamlachti = new party('המחנה הממלכתי', 401388);
    var shas = new party('שס', 370191);
    var yahadut = new party('יהדות התורה', 267853);
    var betenu = new party('ישראל ביתנו', 195362);
    var aravitmeuhedet = new party('ערבית מאוחדת', 187218);
    var chadashtaal = new party('חדש-תעל', 172052);
    var avoda = new party('עבודה', 159742);
    var meretz = new party('מרצ', 140161);
    var balad = new party('בלד', 131939);
    var baityehudi = new party('הבית היהודי', 52480);
    var beometz = new party('באומץ בשבילך', 13996);
    var chofeshkalkali = new party('חופש כלכלי', 13733);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12704);
    var tzeirim = new party('צעירים בוערים', 7559);
    var daat = new party('דעת טוב ורע', 1463);
    var kolhasviva = new party('קול הסביבה', 1446);
    var piratim = new party('הפיראטים', 1419);
    var nativ = new party('נתיב', 1246);
    var ani = new party('אני ואתה', 1210);
    var kolkol = new party('כל קול קובע', 1199);
    var chofshit = new party('ישראל חופשית', 1065);
    var yeshkivun = new party('יש כיוון', 1050);
    var seder = new party('סדר חדש', 1002);
    var atzmaim = new party('העצמאים החדשים', 946);
    var manhigut = new party('מנהיגות חברתית', 916);
    var shloshim = new party('שלושים ארבעים', 915);
    var kvod = new party('כבוד האדם', 499);
    var shachar = new party('שחר כוח חברתי', 494);
    var gush = new party('הגוש התנכי', 406);
    var anachnu = new party('אנחנו', 383);
    var lev = new party('הלב היהודי', 373);
    var zomet = new party('צומת', 356);
    var tzav = new party('צו השעה', 243);
    var shema = new party('שמע', 241);
    var ichudbrit = new party('איחוד בני הברית', 209);
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
