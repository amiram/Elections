var getParties = function () {

  var likud = new party('ליכוד', 935117);
  var yeshatid = new party('יש עתיד', 538123);
  var shas = new party('שס', 282567);
  var kachollavan = new party('כחול לבן', 256520);
  var yamina = new party('ימינה', 227434);
  var avoda = new party('עבודה', 226980);
  var yahadut = new party('יהדות התורה', 225892);
  var betenu = new party('ישראל ביתנו', 214253);
  var meshutefet = new party('הרשימה המשותפת', 193497);
  var tziyonutdatit = new party('הציונות הדתית', 191780);
  var tikva = new party('תקוה חדשה', 181365);
  var meretz = new party('מרצ', 175619);
  var aravitmeuhedet = new party('ערבית מאוחדת', 155279);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 20032);
  var rapeh = new party('רפא', 15556);
  var ani = new party('אני ואתה', 1237);
  var tikvaleshinuy = new party('תקוה לשינוי', 1017);
  var piratim = new party('הפיראטים', 850);
  var lev = new party('הלב היהודי', 753);
  var mapatz = new party('המפץ החברתי גמלאים', 717);
  var kama = new party('קמ"ה', 645);
  var tzedek = new party('משפט צדק', 610);
  var zomet = new party('צומת', 606);
  var amshalem = new party('עם שלם', 503);
  var seder = new party('סדר חדש', 447);
  var brit = new party('ברית השותפות', 404);
  var gush = new party('הגוש התנכי', 374);
  var olamchadash = new party('עולם חדש', 357);
  var biltiefshari = new party('בלתי אפשרי', 349);
  var israelim = new party('הישראלים', 347);
  var atzmenu = new party('עצמנו', 347);
  var anachnu = new party('אנחנו', 315);
  var shema = new party('שמע', 313);
  var daam = new party('דעם כלכלה ירוקה', 311);
  var manhigut = new party('מנהיגות חברתית', 222);
  var maan = new party('מען', 204);
  var chetz = new party('חץ', 187);
  var kvod = new party('כבוד האדם', 159);
  var demokratia = new party('דמוקרטיה', 26);

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
