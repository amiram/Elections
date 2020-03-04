var getParties = function () {

  var likud = new party('ליכוד', 1349171);
  var kacholavan = new party('כחול לבן', 1217101);
  var meshutefet = new party('הרשימה המשותפת', 577355);
  var shas = new party('שס', 352443);
  var yahadut = new party('יהדות התורה', 273900);
  var avoda = new party('עבודה מרצ', 267362);
  var betenu = new party('ישראל ביתנו', 262840);
  var yamina = new party('ימינה', 240162);
  var otzma = new party('עוצמה יהודית', 19334);
  var otzmakalkalit = new party('עוצמה כלכלית', 3783);
  var nashim = new party('קול הנשים', 2777);
  var piratim = new party('הפיראטים', 1466);
  var tzedek = new party('משפט צדק', 1371);
  var zchuyot = new party('זכויותינו בקולנו', 976);
  var ani = new party('אני ואתה', 811);
  var hakoach = new party('הכח להשפיע', 694);
  var seder = new party('סדר חדש', 675);
  var ichud = new party('איחוד הברית', 675);
  var mitkademet = new party('מתקדמת', 626);
  var daam = new party('דעם כלכלה ירוקה', 612);
  var lev = new party('הלב היהודי', 511);
  var shema = new party('שמע', 441);
  var gush = new party('הגוש התנכי', 388);
  var kama = new party('קמ"ה', 354);
  var adomlavan = new party('אדום לבן', 341);
  var chazon = new party('החזון', 331);
  var manhigut = new party('מנהיגות חברתית', 271);
  var peula = new party('פעולה לישראל', 270);
  var kvod = new party('כבוד האדם', 220);

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
