var getParties = function () {

  var kacholavan = new party('כחול לבן', 0);
  var likud = new party('ליכוד', 0);
  var meshutefet = new party('הרשימה המשותפת', 0);
  var shas = new party('שס', 0);
  var betenu = new party('ישראל ביתנו', 0);
  var yahadut = new party('יהדות התורה', 0);
  var yamina = new party('ימינה', 0);
  var avoda = new party('עבודה מרצ', 0);
  var otzma = new party('עוצמה יהודית', 0);
  var adomlavan = new party('אדום לבן', 0);
  var tzedek = new party('משפט צדק', 0);
  var zchuyot = new party('זכויותינו בקולנו', 0);
  var piratim = new party('הפיראטים', 0);
  var otzmakalkalit = new party('עוצמה כלכלית', 0);
  var mitkademet = new party('מתקדמת', 0);
  var kama = new party('קמ"ה', 0);
  var seder = new party('סדר חדש', 0);
  var daam = new party('דעם כלכלה ירוקה', 0);
  var kvod = new party('כבוד האדם', 0);
  var gush = new party('הגוש התנכי', 0);
  var manhigut = new party('מנהיגות חברתית', 0);
  var chazon = new party('החזון', 0);
  var lev = new party('הלב היהודי', 0);
  var peula = new party('פעולה לישראל', 0);
  var shema = new party('שמע', 0);
  var hakoach = new party('הכח להשפיע', 0);
  var ani = new party('אני ואתה', 0);
  var nashim = new party('קול הנשים', 0);
  var ichud = new party('איחוד הברית', 0);

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
