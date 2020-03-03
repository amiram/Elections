var getParties = function () {

  var likud = new party('ליכוד', 1237684);
  var kacholavan = new party('כחול לבן', 1115860);
  var meshutefet = new party('הרשימה המשותפת', 551358);
  var shas = new party('שס', 327778);
  var yahadut = new party('יהדות התורה', 260263);
  var betenu = new party('ישראל ביתנו', 248964);
  var avoda = new party('עבודה מרצ', 242254);
  var yamina = new party('ימינה', 212337);
  var otzma = new party('עוצמה יהודית', 17546);
  var otzmakalkalit = new party('עוצמה כלכלית', 3152);
  var nashim = new party('קול הנשים', 2502);
  var tzedek = new party('משפט צדק', 1279);
  var piratim = new party('הפיראטים', 1021);
  var zchuyot = new party('זכויותינו בקולנו', 890);
  var ani = new party('אני ואתה', 749);
  var ichud = new party('איחוד הברית', 630);
  var hakoach = new party('הכח להשפיע', 625);
  var seder = new party('סדר חדש', 619);
  var mitkademet = new party('מתקדמת', 576);
  var daam = new party('דעם כלכלה ירוקה', 554);
  var lev = new party('הלב היהודי', 451);
  var shema = new party('שמע', 410);
  var gush = new party('הגוש התנכי', 360);
  var kama = new party('קמ"ה', 315);
  var chazon = new party('החזון', 310);
  var adomlavan = new party('אדום לבן', 284);
  var manhigut = new party('מנהיגות חברתית', 246);
  var kvod = new party('כבוד האדם', 208);
  var peula = new party('פעולה לישראל', 189);

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
