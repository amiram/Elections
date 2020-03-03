var getParties = function () {

  var likud = new party('ליכוד', 940223);
  var kacholavan = new party('כחול לבן', 869676);
  var meshutefet = new party('הרשימה המשותפת', 455473);
  var shas = new party('שס', 258294);
  var yahadut = new party('יהדות התורה', 221490);
  var avoda = new party('עבודה מרצ', 192856);
  var betenu = new party('ישראל ביתנו', 184083);
  var yamina = new party('ימינה', 164701);
  var otzma = new party('עוצמה יהודית', 13595);
  var otzmakalkalit = new party('עוצמה כלכלית', 2498);
  var nashim = new party('קול הנשים', 1975);
  var tzedek = new party('משפט צדק', 1000);
  var piratim = new party('הפיראטים', 795);
  var zchuyot = new party('זכויותינו בקולנו', 688);
  var ani = new party('אני ואתה', 576);
  var ichud = new party('איחוד הברית', 516);
  var hakoach = new party('הכח להשפיע', 489);
  var mitkademet = new party('מתקדמת', 451);
  var seder = new party('סדר חדש', 449);
  var daam = new party('דעם כלכלה ירוקה', 438);
  var lev = new party('הלב היהודי', 367);
  var shema = new party('שמע', 306);
  var gush = new party('הגוש התנכי', 273);
  var kama = new party('קמ"ה', 236);
  var chazon = new party('החזון', 226);
  var adomlavan = new party('אדום לבן', 220);
  var manhigut = new party('מנהיגות חברתית', 194);
  var kvod = new party('כבוד האדם', 163);
  var peula = new party('פעולה לישראל', 135);

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
