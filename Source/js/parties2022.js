var getParties = function () {

    var likud = new party('ליכוד', 816605);
    var yeshatid = new party('יש עתיד', 598307);
    var tziyonutdatit = new party('הציונות הדתית', 369700);
    var shas = new party('שס', 306627);
    var mamlachti = new party('המחנה הממלכתי', 304673);
    var yahadut = new party('יהדות התורה', 233217);
    var betenu = new party('ישראל ביתנו', 150358);
    var aravitmeuhedet = new party('ערבית מאוחדת', 132422);
    var avoda = new party('עבודה', 119543);
    var chadashtaal = new party('חדש-תעל', 114315);
    var meretz = new party('מרצ', 104670);
    var balad = new party('בלד', 92230);
    var baityehudi = new party('הבית היהודי', 40251);
    var beometz = new party('באומץ בשבילך', 10933);
    var chofeshkalkali = new party('חופש כלכלי', 9830);
    var kakalitchadasha = new party('הכלכלית החדשה זליכה', 9684);
    var tzeirim = new party('צעירים בוערים', 5435);
    var daat = new party('דעת טוב ורע', 1128);
    var kolhasviva = new party('קול הסביבה', 1097);
    var kolkol = new party('כל קול קובע', 953);
    var nativ = new party('נתיב', 976);
    var piratim = new party('הפיראטים', 956);
    var ani = new party('אני ואתה', 797);
    var chofshit = new party('ישראל חופשית', 757);
    var seder = new party('סדר חדש', 794);
    var yeshkivun = new party('יש כיוון', 768);
    var atzmaim = new party('העצמאים החדשים', 724);
    var shloshim = new party('שלושים ארבעים', 670);
    var manhigut = new party('מנהיגות חברתית', 661);
    var shachar = new party('שחר כוח חברתי', 417);
    var anachnu = new party('אנחנו', 308);
    var zomet = new party('צומת', 276);
    var gush = new party('הגוש התנכי', 305);
    var lev = new party('הלב היהודי', 285);
    var kvod = new party('כבוד האדם', 412);
    var shema = new party('שמע', 188);
    var ichudbrit = new party('איחוד בני הברית', 172);
    var tzav = new party('צו השעה', 173);
    var kama = new party('קמ"ה', 144);
    var koach = new party('כח להשפיע', 108);

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
