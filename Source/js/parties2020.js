var getParties = function () {

  var likud = new party('ליכוד', 1302138);
  var kacholavan = new party('כחול לבן', 1173252);
  var meshutefet = new party('הרשימה המשותפת', 569661);
  var shas = new party('שס', 341482);
  var yahadut = new party('יהדות התורה', 267890);
  var betenu = new party('ישראל ביתנו', 257453);
  var avoda = new party('עבודה מרצ', 256304);
  var yamina = new party('ימינה', 227428);
  var otzma = new party('עוצמה יהודית', 18518);
  var otzmakalkalit = new party('עוצמה כלכלית', 3527);
  var nashim = new party('קול הנשים', 2667);
  var tzedek = new party('משפט צדק', 1343);
  var piratim = new party('הפיראטים', 1284);
  var zchuyot = new party('זכויותינו בקולנו', 948);
  var ani = new party('אני ואתה', 793);
  var hakoach = new party('הכח להשפיע', 665);
  var ichud = new party('איחוד הברית', 661);
  var seder = new party('סדר חדש', 659);
  var mitkademet = new party('מתקדמת', 614);
  var daam = new party('דעם כלכלה ירוקה', 594);
  var lev = new party('הלב היהודי', 490);
  var shema = new party('שמע', 437);
  var gush = new party('הגוש התנכי', 378);
  var kama = new party('קמ"ה', 344);
  var adomlavan = new party('אדום לבן', 324);
  var chazon = new party('החזון', 323);
  var manhigut = new party('מנהיגות חברתית', 257);
  var kvod = new party('כבוד האדם', 215);
  var peula = new party('פעולה לישראל', 204);

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
