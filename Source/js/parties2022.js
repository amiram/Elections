var getParties = function () {

    var likud = new party('ליכוד', 983366);
    var yeshatid = new party('יש עתיד', 755338);
    var tziyonutdatit = new party('הציונות הדתית', 434592);
    var mamlachti = new party('המחנה הממלכתי', 376004);
    var shas = new party('שס', 353572);
    var yahadut = new party('יהדות התורה', 258274);
    var betenu = new party('ישראל ביתנו', 183694);
    var aravitmeuhedet = new party('ערבית מאוחדת', 182828);
    var chadashtaal = new party('חדש-תעל', 165521);
    var avoda = new party('עבודה', 149960);
    var meretz = new party('מרצ', 134402);
    var balad = new party('בלד', 127627);
    var baityehudi = new party('הבית היהודי', 49037);
    var beometz = new party('באומץ בשבילך', 13475);
    var chofeshkalkali = new party('חופש כלכלי', 12097);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 11927);
    var tzeirim = new party('צעירים בוערים', 6582);
    var daat = new party('דעת טוב ורע', 1350);
    var kolhasviva = new party('קול הסביבה', 1334);
    var nativ = new party('נתיב', 1189);
    var piratim = new party('הפיראטים', 1167);
    var ani = new party('אני ואתה', 1157);
    var kolkol = new party('כל קול קובע', 1149);
    var chofshit = new party('ישראל חופשית', 1008);
    var seder = new party('סדר חדש', 960);
    var yeshkivun = new party('יש כיוון', 923);
    var atzmaim = new party('העצמאים החדשים', 910);
    var manhigut = new party('מנהיגות חברתית', 877);
    var shloshim = new party('שלושים ארבעים', 869);
    var kvod = new party('כבוד האדם', 513);
    var shachar = new party('שחר כוח חברתי', 470);
    var gush = new party('הגוש התנכי', 383);
    var anachnu = new party('אנחנו', 367);
    var lev = new party('הלב היהודי', 348);
    var zomet = new party('צומת', 338);
    var tzav = new party('צו השעה', 234);
    var shema = new party('שמע', 232);
    var ichudbrit = new party('איחוד בני הברית', 197);
    var kama = new party('קמ"ה', 188);
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
