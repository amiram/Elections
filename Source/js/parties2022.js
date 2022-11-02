var getParties = function () {

    var likud = new party('ליכוד', 712175);
    var yeshatid = new party('יש עתיד', 538988);
    var tziyonutdatit = new party('הציונות הדתית', 314538);
    var shas = new party('שס', 273503);
    var mamlachti = new party('המחנה הממלכתי', 273309);
    var yahadut = new party('יהדות התורה', 217146);
    var betenu = new party('ישראל ביתנו', 133862);
    var avoda = new party('עבודה', 108009);
    var chadashtaal = new party('חדש-תעל', 101507);
    var meretz = new party('מרצ', 95176);
    var balad = new party('בלד', 82700);
    var aravitmeuhedet = new party('ערבית מאוחדת', 74027);
    var baityehudi = new party('הבית היהודי', 34948);
    var beometz = new party('באומץ בשבילך', 9735);
    var chofeshkalkali = new party('חופש כלכלי', 8688);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 8547);
    var tzeirim = new party('צעירים בוערים', 4712);
    var daat = new party('דעת טוב ורע', 968);
    var kolhasviva = new party('קול הסביבה', 961);
    var kolkol = new party('כל קול קובע', 855);
    var nativ = new party('נתיב', 854);
    var piratim = new party('הפיראטים', 816);
    var ani = new party('אני ואתה', 728);
    var chofshit = new party('ישראל חופשית', 686);
    var seder = new party('סדר חדש', 683);
    var yeshkivun = new party('יש כיוון', 639);
    var atzmaim = new party('העצמאים החדשים', 631);
    var shloshim = new party('שלושים ארבעים', 581);
    var manhigut = new party('מנהיגות חברתית', 576);
    var shachar = new party('שחר כוח חברתי', 392);
    var anachnu = new party('אנחנו', 283);
    var zomet = new party('צומת', 257);
    var gush = new party('הגוש התנכי', 248);
    var lev = new party('הלב היהודי', 233);
    var kvod = new party('כבוד האדם', 210);
    var shema = new party('שמע', 164);
    var ichudbrit = new party('איחוד בני הברית', 148);
    var tzav = new party('צו השעה', 138);
    var kama = new party('קמ"ה', 116);
    var koach = new party('כח להשפיע', 93);

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
