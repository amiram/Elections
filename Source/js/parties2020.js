var getParties = function () {

  var likud = new party('ליכוד', 1271416);
  var kacholavan = new party('כחול לבן', 1144575);
  var meshutefet = new party('הרשימה המשותפת', 562728);
  var shas = new party('שס', 334169);
  var yahadut = new party('יהדות התורה', 263483);
  var betenu = new party('ישראל ביתנו', 253498);
  var avoda = new party('עבודה מרצ', 248827);
  var yamina = new party('ימינה', 219580);
  var otzma = new party('עוצמה יהודית', 18024);
  var otzmakalkalit = new party('עוצמה כלכלית', 3326);
  var nashim = new party('קול הנשים', 2573);
  var tzedek = new party('משפט צדק', 1307);
  var piratim = new party('הפיראטים', 1168);
  var zchuyot = new party('זכויותינו בקולנו', 921);
  var ani = new party('אני ואתה', 774);
  var ichud = new party('איחוד הברית', 651);
  var seder = new party('סדר חדש', 644);
  var hakoach = new party('הכח להשפיע', 643);
  var mitkademet = new party('מתקדמת', 593);
  var daam = new party('דעם כלכלה ירוקה', 575);
  var lev = new party('הלב היהודי', 470);
  var shema = new party('שמע', 426);
  var gush = new party('הגוש התנכי', 369);
  var kama = new party('קמ"ה', 330);
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
