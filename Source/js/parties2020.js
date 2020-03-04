var getParties = function () {

  var likud = new party('ליכוד', 1339772);
  var kacholavan = new party('כחול לבן', 1207577);
  var meshutefet = new party('הרשימה המשותפת', 575215);
  var shas = new party('שס', 350804);
  var yahadut = new party('יהדות התורה', 273519);
  var avoda = new party('עבודה מרצ', 265021);
  var betenu = new party('ישראל ביתנו', 261680);
  var yamina = new party('ימינה', 237934);
  var otzma = new party('עוצמה יהודית', 19214);
  var otzmakalkalit = new party('עוצמה כלכלית', 3729);
  var nashim = new party('קול הנשים', 2745);
  var piratim = new party('הפיראטים', 1419);
  var tzedek = new party('משפט צדק', 1364);
  var zchuyot = new party('זכויותינו בקולנו', 969);
  var ani = new party('אני ואתה', 808);
  var hakoach = new party('הכח להשפיע', 689);
  var seder = new party('סדר חדש', 672);
  var ichud = new party('איחוד הברית', 669);
  var mitkademet = new party('מתקדמת', 622);
  var daam = new party('דעם כלכלה ירוקה', 609);
  var lev = new party('הלב היהודי', 504);
  var shema = new party('שמע', 440);
  var gush = new party('הגוש התנכי', 385);
  var kama = new party('קמ"ה', 352);
  var adomlavan = new party('אדום לבן', 334);
  var chazon = new party('החזון', 330);
  var peula = new party('פעולה לישראל', 269);
  var manhigut = new party('מנהיגות חברתית', 267);
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
