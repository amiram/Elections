var getParties = function () {

  var likud = new party('ליכוד', 1277097);
  var kacholavan = new party('כחול לבן', 1150141);
  var meshutefet = new party('הרשימה המשותפת', 564347);
  var shas = new party('שס', 336044);
  var yahadut = new party('יהדות התורה', 264770);
  var betenu = new party('ישראל ביתנו', 254162);
  var avoda = new party('עבודה מרצ', 250402);
  var yamina = new party('ימינה', 221237);
  var otzma = new party('עוצמה יהודית', 18135);
  var otzmakalkalit = new party('עוצמה כלכלית', 3376);
  var nashim = new party('קול הנשים', 2591);
  var tzedek = new party('משפט צדק', 1313);
  var piratim = new party('הפיראטים', 1178);
  var zchuyot = new party('זכויותינו בקולנו', 926);
  var ani = new party('אני ואתה', 775);
  var ichud = new party('איחוד הברית', 653);
  var hakoach = new party('הכח להשפיע', 648);
  var seder = new party('סדר חדש', 646);
  var mitkademet = new party('מתקדמת', 597);
  var daam = new party('דעם כלכלה ירוקה', 576);
  var lev = new party('הלב היהודי', 474);
  var shema = new party('שמע', 427);
  var gush = new party('הגוש התנכי', 371);
  var kama = new party('קמ"ה', 331);
  var chazon = new party('החזון', 318);
  var adomlavan = new party('אדום לבן', 302);
  var manhigut = new party('מנהיגות חברתית', 256);
  var kvod = new party('כבוד האדם', 210);
  var peula = new party('פעולה לישראל', 199);

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
