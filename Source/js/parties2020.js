var getParties = function () {

  var likud = new party('ליכוד', 526388);
  var kacholavan = new party('כחול לבן', 421322);
  var meshutefet = new party('הרשימה המשותפת', 222026);
  var shas = new party('שס', 161015);
  var yahadut = new party('יהדות התורה', 155844);
  var yamina = new party('ימינה', 109055);
  var avoda = new party('עבודה מרצ', 101751);
  var betenu = new party('ישראל ביתנו', 98459);
  var otzma = new party('עוצמה יהודית', 8946);
  var otzmakalkalit = new party('עוצמה כלכלית', 1348);
  var nashim = new party('קול הנשים', 1086);
  var tzedek = new party('משפט צדק', 564);
  var piratim = new party('הפיראטים', 451);
  var zchuyot = new party('זכויותינו בקולנו', 374);
  var ani = new party('אני ואתה', 307);
  var hakoach = new party('הכח להשפיע', 275);
  var seder = new party('סדר חדש', 261);
  var daam = new party('דעם כלכלה ירוקה', 239);
  var ichud = new party('איחוד הברית', 235);
  var mitkademet = new party('מתקדמת', 233);
  var lev = new party('הלב היהודי', 228);
  var gush = new party('הגוש התנכי', 166);
  var shema = new party('שמע', 166);
  var kama = new party('קמ"ה', 135);
  var chazon = new party('החזון', 129);
  var adomlavan = new party('אדום לבן', 127);
  var manhigut = new party('מנהיגות חברתית', 111);
  var kvod = new party('כבוד האדם', 81);
  var peula = new party('פעולה לישראל', 75);

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
