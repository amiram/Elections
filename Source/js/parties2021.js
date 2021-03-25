var getParties = function () {

  var likud = new party('ליכוד', 1065270);
  var yeshatid = new party('יש עתיד', 612547);
  var shas = new party('שס', 315617);
  var kachollavan = new party('כחול לבן', 291006);
  var yamina = new party('ימינה', 273283);
  var avoda = new party('עבודה', 268181);
  var yahadut = new party('יהדות התורה', 248534);
  var betenu = new party('ישראל ביתנו', 248273);
  var tziyonutdatit = new party('הציונות הדתית', 225017);
  var meshutefet = new party('הרשימה המשותפת', 211885);
  var tikva = new party('תקוה חדשה', 208820);
  var meretz = new party('מרצ', 201840);
  var aravitmeuhedet = new party('ערבית מאוחדת', 167055);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 34796);
  var rapeh = new party('רפא', 17315);
  var ani = new party('אני ואתה', 1392);
  var piratim = new party('הפיראטים', 1364);
  var tikvaleshinuy = new party('תקוה לשינוי', 1187);
  var lev = new party('הלב היהודי', 1022);
  var mapatz = new party('המפץ החברתי גמלאים', 819);
  var kama = new party('קמ"ה', 748);
  var tzedek = new party('משפט צדק', 729);
  var zomet = new party('צומת', 717);
  var amshalem = new party('עם שלם', 591);
  var seder = new party('סדר חדש', 514);
  var biltiefshari = new party('בלתי אפשרי', 463);
  var brit = new party('ברית השותפות', 458);
  var israelim = new party('הישראלים', 447);
  var atzmenu = new party('עצמנו', 439);
  var olamchadash = new party('עולם חדש', 429);
  var gush = new party('הגוש התנכי', 428);
  var shema = new party('שמע', 395);
  var daam = new party('דעם כלכלה ירוקה', 384);
  var anachnu = new party('אנחנו', 364);
  var manhigut = new party('מנהיגות חברתית', 256);
  var maan = new party('מען', 253);
  var chetz = new party('חץ', 226);
  var kvod = new party('כבוד האדם', 196);
  var demokratia = new party('דמוקרטיה', 59);

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
    chetz,
    demokratia,
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
