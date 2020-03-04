var getParties = function () {

  var likud = new party('ליכוד', 1264479);
  var kacholavan = new party('כחול לבן', 1137956);
  var meshutefet = new party('הרשימה המשותפת', 561530);
  var shas = new party('שס', 332437);
  var yahadut = new party('יהדות התורה', 262283);
  var betenu = new party('ישראל ביתנו', 252712);
  var avoda = new party('עבודה מרצ', 247246);
  var yamina = new party('ימינה', 217765);
  var otzma = new party('עוצמה יהודית', 17893);
  var otzmakalkalit = new party('עוצמה כלכלית', 3288);
  var nashim = new party('קול הנשים', 2559);
  var tzedek = new party('משפט צדק', 1302);
  var piratim = new party('הפיראטים', 1134);
  var zchuyot = new party('זכויותינו בקולנו', 917);
  var ani = new party('אני ואתה', 771);
  var ichud = new party('איחוד הברית', 651);
  var seder = new party('סדר חדש', 643);
  var hakoach = new party('הכח להשפיע', 642);
  var mitkademet = new party('מתקדמת', 589);
  var daam = new party('דעם כלכלה ירוקה', 569);
  var lev = new party('הלב היהודי', 466);
  var shema = new party('שמע', 422);
  var gush = new party('הגוש התנכי', 368);
  var kama = new party('קמ"ה', 328);
  var chazon = new party('החזון', 317);
  var adomlavan = new party('אדום לבן', 299);
  var manhigut = new party('מנהיגות חברתית', 253);
  var kvod = new party('כבוד האדם', 210);
  var peula = new party('פעולה לישראל', 197);

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
