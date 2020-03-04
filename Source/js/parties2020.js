var getParties = function () {

  var likud = new party('ליכוד', 1257624);
  var kacholavan = new party('כחול לבן', 1131780);
  var meshutefet = new party('הרשימה המשותפת', 560912);
  var shas = new party('שס', 331271);
  var yahadut = new party('יהדות התורה', 261765);
  var betenu = new party('ישראל ביתנו', 251922);
  var avoda = new party('עבודה מרצ', 245792);
  var yamina = new party('ימינה', 216017);
  var otzma = new party('עוצמה יהודית', 17783);
  var otzmakalkalit = new party('עוצמה כלכלית', 3247);
  var nashim = new party('קול הנשים', 2541);
  var tzedek = new party('משפט צדק', 1297);
  var piratim = new party('הפיראטים', 1098);
  var zchuyot = new party('זכויותינו בקולנו', 912);
  var ani = new party('אני ואתה', 769);
  var ichud = new party('איחוד הברית', 648);
  var hakoach = new party('הכח להשפיע', 641);
  var seder = new party('סדר חדש', 641);
  var mitkademet = new party('מתקדמת', 587);
  var daam = new party('דעם כלכלה ירוקה', 569);
  var lev = new party('הלב היהודי', 462);
  var shema = new party('שמע', 421);
  var gush = new party('הגוש התנכי', 367);
  var kama = new party('קמ"ה', 326);
  var chazon = new party('החזון', 315);
  var adomlavan = new party('אדום לבן', 295);
  var manhigut = new party('מנהיגות חברתית', 252);
  var kvod = new party('כבוד האדם', 209);
  var peula = new party('פעולה לישראל', 196);

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
