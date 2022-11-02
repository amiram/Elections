var getParties = function () {

    var likud = new party('ליכוד', 998261);
    var yeshatid = new party('יש עתיד', 764002);
    var tziyonutdatit = new party('הציונות הדתית', 441387);
    var mamlachti = new party('המחנה הממלכתי', 380675);
    var shas = new party('שס', 357951);
    var yahadut = new party('יהדות התורה', 260642);
    var betenu = new party('ישראל ביתנו', 186017);
    var aravitmeuhedet = new party('ערבית מאוחדת', 185278);
    var chadashtaal = new party('חדש-תעל', 169764);
    var avoda = new party('עבודה', 1515664);
    var meretz = new party('מרצ', 135742);
    var balad = new party('בלד', 130178);
    var baityehudi = new party('הבית היהודי', 49717);
    var beometz = new party('באומץ בשבילך', 13630);
    var chofeshkalkali = new party('חופש כלכלי', 12235);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 12085);
    var tzeirim = new party('צעירים בוערים', 6688);
    var daat = new party('דעת טוב ורע', 1367);
    var kolhasviva = new party('קול הסביבה', 1352);
    var nativ = new party('נתיב', 1202);
    var piratim = new party('הפיראטים', 1181);
    var ani = new party('אני ואתה', 1171);
    var kolkol = new party('כל קול קובע', 1162);
    var chofshit = new party('ישראל חופשית', 1019);
    var seder = new party('סדר חדש', 982);
    var yeshkivun = new party('יש כיוון', 939);
    var atzmaim = new party('העצמאים החדשים', 916);
    var manhigut = new party('מנהיגות חברתית', 894);
    var shloshim = new party('שלושים ארבעים', 889);
    var kvod = new party('כבוד האדם', 493);
    var shachar = new party('שחר כוח חברתי', 475);
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
