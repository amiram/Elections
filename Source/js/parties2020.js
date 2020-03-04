var getParties = function () {

  var likud = new party('ליכוד', 1341096);
  var kacholavan = new party('כחול לבן', 1209115);
  var meshutefet = new party('הרשימה המשותפת', 575505);
  var shas = new party('שס', 351134);
  var yahadut = new party('יהדות התורה', 273696);
  var avoda = new party('עבודה מרצ', 265372);
  var betenu = new party('ישראל ביתנו', 261856);
  var yamina = new party('ימינה', 238246);
  var otzma = new party('עוצמה יהודית', 19232);
  var otzmakalkalit = new party('עוצמה כלכלית', 3739);
  var nashim = new party('קול הנשים', 2759);
  var piratim = new party('הפיראטים', 1426);
  var tzedek = new party('משפט צדק', 1365);
  var zchuyot = new party('זכויותינו בקולנו', 970);
  var ani = new party('אני ואתה', 809);
  var hakoach = new party('הכח להשפיע', 691);
  var seder = new party('סדר חדש', 673);
  var ichud = new party('איחוד הברית', 669);
  var mitkademet = new party('מתקדמת', 623);
  var daam = new party('דעם כלכלה ירוקה', 609);
  var lev = new party('הלב היהודי', 504);
  var shema = new party('שמע', 441);
  var gush = new party('הגוש התנכי', 385);
  var kama = new party('קמ"ה', 354);
  var adomlavan = new party('אדום לבן', 335);
  var chazon = new party('החזון', 330);
  var peula = new party('פעולה לישראל', 270);
  var manhigut = new party('מנהיגות חברתית', 269);
  var kvod = new party('כבוד האדם', 218);

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
