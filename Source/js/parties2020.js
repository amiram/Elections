var getParties = function () {

  var likud = new party('ליכוד', 1267040);
  var kacholavan = new party('כחול לבן', 1140332);
  var meshutefet = new party('הרשימה המשותפת', 561950);
  var shas = new party('שס', 333183);
  var yahadut = new party('יהדות התורה', 262904);
  var betenu = new party('ישראל ביתנו', 252971);
  var avoda = new party('עבודה מרצ', 247788);
  var yamina = new party('ימינה', 218535);
  var otzma = new party('עוצמה יהודית', 17946);
  var otzmakalkalit = new party('עוצמה כלכלית', 3306);
  var nashim = new party('קול הנשים', 2562);
  var tzedek = new party('משפט צדק', 1305);
  var piratim = new party('הפיראטים', 1150);
  var zchuyot = new party('זכויותינו בקולנו', 917);
  var ani = new party('אני ואתה', 772);
  var ichud = new party('איחוד הברית', 651);
  var seder = new party('סדר חדש', 643);
  var hakoach = new party('הכח להשפיע', 642);
  var mitkademet = new party('מתקדמת', 591);
  var daam = new party('דעם כלכלה ירוקה', 572);
  var lev = new party('הלב היהודי', 467);
  var shema = new party('שמע', 423);
  var gush = new party('הגוש התנכי', 369);
  var kama = new party('קמ"ה', 329);
  var chazon = new party('החזון', 317);
  var adomlavan = new party('אדום לבן', 301);
  var manhigut = new party('מנהיגות חברתית', 253);
  var kvod = new party('כבוד האדם', 210);
  var peula = new party('פעולה לישראל', 197);

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
