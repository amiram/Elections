var getParties = function () {

  var likud = new party('ליכוד', 1210939);
  var kacholavan = new party('כחול לבן', 1085932);
  var meshutefet = new party('הרשימה המשותפת', 536028);
  var shas = new party('שס', 320999);
  var yahadut = new party('יהדות התורה', 255159);
  var betenu = new party('ישראל ביתנו', 242218);
  var avoda = new party('עבודה מרצ', 235934);
  var yamina = new party('ימינה', 208638);
  var otzma = new party('עוצמה יהודית', 17222);
  var otzmakalkalit = new party('עוצמה כלכלית', 3092);
  var nashim = new party('קול הנשים', 2447);
  var tzedek = new party('משפט צדק', 1261);
  var piratim = new party('הפיראטים', 1002);
  var zchuyot = new party('זכויותינו בקולנו', 871);
  var ani = new party('אני ואתה', 726);
  var hakoach = new party('הכח להשפיע', 612);
  var ichud = new party('איחוד הברית', 611);
  var seder = new party('סדר חדש', 601);
  var mitkademet = new party('מתקדמת', 562);
  var daam = new party('דעם כלכלה ירוקה', 547);
  var lev = new party('הלב היהודי', 444);
  var shema = new party('שמע', 404);
  var gush = new party('הגוש התנכי', 350);
  var kama = new party('קמ"ה', 306);
  var chazon = new party('החזון', 303);
  var adomlavan = new party('אדום לבן', 273);
  var manhigut = new party('מנהיגות חברתית', 244);
  var kvod = new party('כבוד האדם', 204);
  var peula = new party('פעולה לישראל', 187);

  var parties = [
    likud,
    kacholavan,
    shas,
    yahadut,
    meshutefet,
    avoda,
    betenu,
    yamina,
    tzedek,
    zchuyot,
    manhigut,
    piratim,
    kvod,
    gush,
    adomlavan,
    otzmakalkalit,
    otzma,
    mitkademet,
    daam,
    seder,
    kama,
    chazon,
    lev,
    peula,
    shema,
    hakoach,
    ani,
    nashim,
    ichud
  ];

  var partyConnections = [
    new partyConnection(kacholavan, avoda),
    new partyConnection(likud, yamina),
    new partyConnection(shas, yahadut),
  ];

  return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
