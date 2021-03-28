var getParties = function () {

  var likud = new party('ליכוד', 1066669);
  var yeshatid = new party('יש עתיד', 613810);
  var shas = new party('שס', 315953);
  var kachollavan = new party('כחול לבן', 291815);
  var yamina = new party('ימינה', 273876);
  var avoda = new party('עבודה', 268687);
  var yahadut = new party('יהדות התורה', 248605);
  var betenu = new party('ישראל ביתנו', 248340);
  var tziyonutdatit = new party('הציונות הדתית', 225539);
  var meshutefet = new party('הרשימה המשותפת', 212188);
  var tikva = new party('תקוה חדשה', 209114);
  var meretz = new party('מרצ', 202153);
  var aravitmeuhedet = new party('ערבית מאוחדת', 167028);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 34857);
  var rapeh = new party('רפא', 17345);
  var piratim = new party('הפיראטים', 1369);
  var ani = new party('אני ואתה', 1328);
  var tikvaleshinuy = new party('תקוה לשינוי', 1189);
  var mapatz = new party('המפץ החברתי גמלאים', 819);
  var lev = new party('הלב היהודי', 769);
  var tzedek = new party('משפט צדק', 729);
  var zomet = new party('צומת', 690);
  var amshalem = new party('עם שלם', 592);
  var kama = new party('קמ"ה', 556);
  var seder = new party('סדר חדש', 514);
  var biltiefshari = new party('בלתי אפשרי', 463);
  var atzmenu = new party('עצמנו', 440);
  var gush = new party('הגוש התנכי', 429);
  var olamchadash = new party('עולם חדש', 429);
  var israelim = new party('הישראלים', 419);
  var brit = new party('ברית השותפות', 408);
  var shema = new party('שמע', 394);
  var daam = new party('דעם כלכלה ירוקה', 385);
  var manhigut = new party('מנהיגות חברתית', 256);
  var maan = new party('מען', 253);
  var chetz = new party('חץ', 226);
  var anachnu = new party('אנחנו', 220);
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
