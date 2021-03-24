var getParties = function () {

  var likud = new party('ליכוד', 948236);
  var yeshatid = new party('יש עתיד', 545100);
  var shas = new party('שס', 288186);
  var kachollavan = new party('כחול לבן', 259972);
  var yahadut = new party('יהדות התורה', 233086);
  var yamina = new party('ימינה', 231298);
  var avoda = new party('עבודה', 229772);
  var betenu = new party('ישראל ביתנו', 216747);
  var tziyonutdatit = new party('הציונות הדתית', 196209);
  var meshutefet = new party('הרשימה המשותפת', 195113);
  var tikva = new party('תקוה חדשה', 183928);
  var meretz = new party('מרצ', 177744);
  var aravitmeuhedet = new party('ערבית מאוחדת', 156746);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 30442);
  var rapeh = new party('רפא', 15776);
  var ani = new party('אני ואתה', 1238);
  var tikvaleshinuy = new party('תקוה לשינוי', 1026);
  var piratim = new party('הפיראטים', 860);
  var lev = new party('הלב היהודי', 822);
  var mapatz = new party('המפץ החברתי גמלאים', 731);
  var kama = new party('קמ"ה', 648);
  var tzedek = new party('משפט צדק', 616);
  var zomet = new party('צומת', 613);
  var amshalem = new party('עם שלם', 509);
  var seder = new party('סדר חדש', 450);
  var brit = new party('ברית השותפות', 409);
  var gush = new party('הגוש התנכי', 382);
  var olamchadash = new party('עולם חדש', 363);
  var israelim = new party('הישראלים', 354);
  var atzmenu = new party('עצמנו', 351);
  var biltiefshari = new party('בלתי אפשרי', 349);
  var anachnu = new party('אנחנו', 315);
  var shema = new party('שמע', 315);
  var daam = new party('דעם כלכלה ירוקה', 315);
  var manhigut = new party('מנהיגות חברתית', 225);
  var maan = new party('מען', 208);
  var chetz = new party('חץ', 188);
  var kvod = new party('כבוד האדם', 162);
  var demokratia = new party('דמוקרטיה', 28);

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
