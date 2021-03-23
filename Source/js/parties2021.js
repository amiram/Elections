var getParties = function () {

  var likud = new party('ליכוד', 26441);
  var yeshatid = new party('יש עתיד', 9307);
  var shas = new party('שס', 7434);
  var betenu = new party('ישראל ביתנו', 6610);
  var yamina = new party('ימינה', 6066);
  var tziyonutdatit = new party('הציונות הדתית', 6000);
  var kachollavan = new party('כחול לבן', 4969);
  var avoda = new party('עבודה', 4732);
  var yahadut = new party('יהדות התורה', 4604);
  var meshutefet = new party('הרשימה המשותפת', 4043);
  var tikva = new party('תקוה חדשה', 3780);
  var aravitmeuhedet = new party('ערבית מאוחדת', 3703);
  var meretz = new party('מרצ', 2876);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 635);
  var rapeh = new party('רפא', 459);
  var anachnu = new party('אנחנו', 0);
  var ani = new party('אני ואתה', 0);
  var brit = new party('ברית השותפות', 0);
  var daam = new party('דעם כלכלה ירוקה', 0);
  var israelim = new party('הישראלים', 0);
  var lev = new party('הלב היהודי', 0);
  var mapatz = new party('המפץ החברתי גמלאים', 0);
  var piratim = new party('הפיראטים', 0);
  var tikvaleshinuy = new party('תקוה לשינוי', 0);
  var kvod = new party('כבוד האדם', 0);
  var manhigut = new party('מנהיגות חברתית', 0);
  var maan = new party('מען', 0);
  var gush = new party('הגוש התנכי', 0);
  var amshalem = new party('עם שלם', 0);
  var shema = new party('שמע', 0);
  var tzedek = new party('משפט צדק', 0);
  var biltiefshari = new party('בלתי אפשרי', 0);
  var seder = new party('סדר חדש', 0);
  var olamchadash = new party('עולם חדש', 0);
  var atzmenu = new party('עצמנו', 0);
  var zomet = new party('צומת', 0);
  var kama = new party('קמ"ה', 0);

  var parties = [
    likud,
    yeshatid,
    kachollavan,
    shas,
    yahadut,
    meshutefet,
    avoda,
    betenu,
    yamina,
    tzedek,
    manhigut,
    tziyonutdatit,
    piratim,
    anachnu,
    brit,
    tikva,
    kvod,
    israelim,
    kakalitchadasha,
    gush,
    mapatz,
    daam,
    aravitmeuhedet,
    tikvaleshinuy,
    seder,
    kama,
    maan,
    lev,
    amshalem,
    shema,
    ani,
    biltiefshari,
    meretz,
    olamchadash,
    atzmenu,
    zomet,
    rapeh,
  ];

  var partyConnections = [
    new partyConnection(tikva, yamina),
    new partyConnection(betenu, yeshatid),
    new partyConnection(likud, tziyonutdatit),
    new partyConnection(kakalitchadasha, kachollavan),
    new partyConnection(avoda, meretz),
    new partyConnection(shas, yahadut),
  ];

  return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
