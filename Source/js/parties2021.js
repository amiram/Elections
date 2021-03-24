var getParties = function () {

  var likud = new party('ליכוד', 942377);
  var yeshatid = new party('יש עתיד', 541697);
  var shas = new party('שס', 285616);
  var kachollavan = new party('כחול לבן', 258223);
  var yahadut = new party('יהדות התורה', 229298);
  var yamina = new party('ימינה', 229220);
  var avoda = new party('עבודה', 228186);
  var betenu = new party('ישראל ביתנו', 215657);
  var meshutefet = new party('הרשימה המשותפת', 194284);
  var tziyonutdatit = new party('הציונות הדתית', 193841);
  var tikva = new party('תקוה חדשה', 182635);
  var meretz = new party('מרצ', 176409);
  var aravitmeuhedet = new party('ערבית מאוחדת', 156348);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 30224);
  var rapeh = new party('רפא', 15676);
  var ani = new party('אני ואתה', 1230);
  var tikvaleshinuy = new party('תקוה לשינוי', 1021);
  var piratim = new party('הפיראטים', 852);
  var lev = new party('הלב היהודי', 810);
  var mapatz = new party('המפץ החברתי גמלאים', 724);
  var kama = new party('קמ"ה', 647);
  var tzedek = new party('משפט צדק', 615);
  var zomet = new party('צומת', 610);
  var amshalem = new party('עם שלם', 504);
  var seder = new party('סדר חדש', 450);
  var brit = new party('ברית השותפות', 408);
  var gush = new party('הגוש התנכי', 378);
  var olamchadash = new party('עולם חדש', 359);
  var biltiefshari = new party('בלתי אפשרי', 349);
  var israelim = new party('הישראלים', 348);
  var atzmenu = new party('עצמנו', 348);
  var anachnu = new party('אנחנו', 315);
  var shema = new party('שמע', 314);
  var daam = new party('דעם כלכלה ירוקה', 313);
  var manhigut = new party('מנהיגות חברתית', 223);
  var maan = new party('מען', 206);
  var chetz = new party('חץ', 188);
  var kvod = new party('כבוד האדם', 161);
  var demokratia = new party('דמוקרטיה', 27);

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
