var getParties = function () {

  var likud = new party('ליכוד', 954483);
  var yeshatid = new party('יש עתיד', 550844);
  var shas = new party('שס', 289711);
  var kachollavan = new party('כחול לבן', 262769);
  var yahadut = new party('יהדות התורה', 234205);
  var avoda = new party('עבודה', 233019);
  var yamina = new party('ימינה', 232320);
  var betenu = new party('ישראל ביתנו', 218845);
  var meshutefet = new party('הרשימה המשותפת', 199986);
  var tziyonutdatit = new party('הציונות הדתית', 196903);
  var tikva = new party('תקוה חדשה', 185430);
  var meretz = new party('מרצ', 180751);
  var aravitmeuhedet = new party('ערבית מאוחדת', 159234);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 30739);
  var rapeh = new party('רפא', 15893);
  var ani = new party('אני ואתה', 1244);
  var tikvaleshinuy = new party('תקוה לשינוי', 1034);
  var piratim = new party('הפיראטים', 862);
  var lev = new party('הלב היהודי', 824);
  var mapatz = new party('המפץ החברתי גמלאים', 733);
  var kama = new party('קמ"ה', 651);
  var tzedek = new party('משפט צדק', 619);
  var zomet = new party('צומת', 619);
  var amshalem = new party('עם שלם', 512);
  var seder = new party('סדר חדש', 452);
  var brit = new party('ברית השותפות', 418);
  var gush = new party('הגוש התנכי', 382);
  var olamchadash = new party('עולם חדש', 367);
  var atzmenu = new party('עצמנו', 359);
  var israelim = new party('הישראלים', 357);
  var biltiefshari = new party('בלתי אפשרי', 353);
  var shema = new party('שמע', 318);
  var anachnu = new party('אנחנו', 317);
  var daam = new party('דעם כלכלה ירוקה', 315);
  var manhigut = new party('מנהיגות חברתית', 225);
  var maan = new party('מען', 210);
  var chetz = new party('חץ', 190);
  var kvod = new party('כבוד האדם', 165);
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
