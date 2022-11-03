var getParties = function () {

    var likud = new party('ליכוד', 1005557);
    var yeshatid = new party('יש עתיד', 768683);
    var tziyonutdatit = new party('הציונות הדתית', 444750);
    var mamlachti = new party('המחנה הממלכתי', 383085);
    var shas = new party('שס', 360577);
    var yahadut = new party('יהדות התורה', 262067);
    var betenu = new party('ישראל ביתנו', 187077);
    var aravitmeuhedet = new party('ערבית מאוחדת', 185835);
    var chadashtaal = new party('חדש-תעל', 170767);
    var avoda = new party('עבודה', 152387);
    var meretz = new party('מרצ', 136327);
    var balad = new party('בלד', 130800);
    var baityehudi = new party('הבית היהודי', 49989);
    var beometz = new party('באומץ בשבילך', 13706);
    var chofeshkalkali = new party('חופש כלכלי', 12310);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12156);
    var tzeirim = new party('צעירים בוערים', 6740);
    var daat = new party('דעת טוב ורע', 1373);
    var kolhasviva = new party('קול הסביבה', 1358);
    var nativ = new party('נתיב', 1208);
    var piratim = new party('הפיראטים', 1189);
    var ani = new party('אני ואתה', 1173);
    var kolkol = new party('כל קול קובע', 1165);
    var chofshit = new party('ישראל חופשית', 1023);
    var seder = new party('סדר חדש', 983);
    var yeshkivun = new party('יש כיוון', 942);
    var atzmaim = new party('העצמאים החדשים', 923);
    var manhigut = new party('מנהיגות חברתית', 898);
    var shloshim = new party('שלושים ארבעים', 891);
    var kvod = new party('כבוד האדם', 492);
    var shachar = new party('שחר כוח חברתי', 477);
    var gush = new party('הגוש התנכי', 391);
    var anachnu = new party('אנחנו', 373);
    var lev = new party('הלב היהודי', 357);
    var zomet = new party('צומת', 344);
    var tzav = new party('צו השעה', 240);
    var shema = new party('שמע', 237);
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
