var getParties = function () {

  var likud = new party('ליכוד', 1351368);
  var kacholavan = new party('כחול לבן', 1219870);
  var meshutefet = new party('הרשימה המשותפת', 580044);
  var shas = new party('שס', 352674);
  var yahadut = new party('יהדות התורה', 274431);
  var avoda = new party('עבודה מרצ', 267909);
  var betenu = new party('ישראל ביתנו', 263240);
  var yamina = new party('ימינה', 240406);
  var otzma = new party('עוצמה יהודית', 19354);
  var otzmakalkalit = new party('עוצמה כלכלית', 3788);
  var nashim = new party('קול הנשים', 2783);
  var piratim = new party('הפיראטים', 1469);
  var tzedek = new party('משפט צדק', 1375);
  var zchuyot = new party('זכויותינו בקולנו', 980);
  var ani = new party('אני ואתה', 813);
  var hakoach = new party('הכח להשפיע', 695);
  var seder = new party('סדר חדש', 677);
  var ichud = new party('איחוד הברית', 675);
  var mitkademet = new party('מתקדמת', 627);
  var daam = new party('דעם כלכלה ירוקה', 612);
  var lev = new party('הלב היהודי', 514);
  var shema = new party('שמע', 442);
  var gush = new party('הגוש התנכי', 389);
  var kama = new party('קמ"ה', 354);
  var adomlavan = new party('אדום לבן', 341);
  var chazon = new party('החזון', 331);
  var manhigut = new party('מנהיגות חברתית', 272);
  var peula = new party('פעולה לישראל', 270);
  var kvod = new party('כבוד האדם', 222);

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
