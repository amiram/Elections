var getParties = function () {

  var likud = new party('ליכוד', 931886);
  var yeshatid = new party('יש עתיד', 535329);
  var shas = new party('שס', 281931);
  var kachollavan = new party('כחול לבן', 255263);
  var yamina = new party('ימינה', 226438);
  var avoda = new party('עבודה', 226005);
  var yahadut = new party('יהדות התורה', 225806);
  var betenu = new party('ישראל ביתנו', 213666);
  var meshutefet = new party('הרשימה המשותפת', 192801);
  var tziyonutdatit = new party('הציונות הדתית', 191158);
  var tikva = new party('תקוה חדשה', 180640);
  var meretz = new party('מרצ', 174824);
  var aravitmeuhedet = new party('ערבית מאוחדת', 154965);
  var kakalitchadasha = new party('הכלכלית החדשה זליכה', 29909);
  var rapeh = new party('רפא', 15512);
  var ani = new party('אני ואתה', 1232);
  var tikvaleshinuy = new party('תקוה לשינוי', 1011);
  var piratim = new party('הפיראטים', 848);
  var lev = new party('הלב היהודי', 753);
  var mapatz = new party('המפץ החברתי גמלאים', 711);
  var kama = new party('קמ"ה', 643);
  var tzedek = new party('משפט צדק', 610);
  var zomet = new party('צומת', 604);
  var amshalem = new party('עם שלם', 496);
  var seder = new party('סדר חדש', 446);
  var brit = new party('ברית השותפות', 404);
  var gush = new party('הגוש התנכי', 374);
  var olamchadash = new party('עולם חדש', 357);
  var biltiefshari = new party('בלתי אפשרי', 349);
  var israelim = new party('הישראלים', 346);
  var atzmenu = new party('עצמנו', 345);
  var anachnu = new party('אנחנו', 314);
  var daam = new party('דעם כלכלה ירוקה', 311);
  var shema = new party('שמע', 311);
  var manhigut = new party('מנהיגות חברתית', 222);
  var maan = new party('מען', 203);
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
