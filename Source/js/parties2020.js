var getParties = function () {

  var likud = new party('ליכוד', 807815);
  var kacholavan = new party('כחול לבן', 698536);
  var meshutefet = new party('הרשימה המשותפת', 432282);
  var shas = new party('שס', 218717);
  var yahadut = new party('יהדות התורה', 187603);
  var betenu = new party('ישראל ביתנו', 160114);
  var avoda = new party('עבודה מרצ', 153462);
  var yamina = new party('ימינה', 151283);
  var otzma = new party('עוצמה יהודית', 12053);
  var otzmakalkalit = new party('עוצמה כלכלית', 2039);
  var nashim = new party('קול הנשים', 1695);
  var tzedek = new party('משפט צדק', 910);
  var piratim = new party('הפיראטים', 676);
  var zchuyot = new party('זכויותינו בקולנו', 591);
  var ani = new party('אני ואתה', 497);
  var ichud = new party('איחוד הברית', 485);
  var hakoach = new party('הכח להשפיע', 420);
  var mitkademet = new party('מתקדמת', 418);
  var seder = new party('סדר חדש', 393);
  var daam = new party('דעם כלכלה ירוקה', 389);
  var lev = new party('הלב היהודי', 326);
  var shema = new party('שמע', 272);
  var gush = new party('הגוש התנכי', 240);
  var kama = new party('קמ"ה', 210);
  var adomlavan = new party('אדום לבן', 199);
  var chazon = new party('החזון', 194);
  var manhigut = new party('מנהיגות חברתית', 167);
  var kvod = new party('כבוד האדם', 149);
  var peula = new party('פעולה לישראל', 114);

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
