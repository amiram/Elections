var getParties = function () {

  var likud = new party('ליכוד', 1206692);
  var kacholavan = new party('כחול לבן', 1082970);
  var meshutefet = new party('הרשימה המשותפת', 530978);
  var shas = new party('שס', 320246);
  var yahadut = new party('יהדות התורה', 254945);
  var betenu = new party('ישראל ביתנו', 241322);
  var avoda = new party('עבודה מרצ', 234933);
  var yamina = new party('ימינה', 207737);
  var otzma = new party('עוצמה יהודית', 17153);
  var otzmakalkalit = new party('עוצמה כלכלית', 3084);
  var nashim = new party('קול הנשים', 2437);
  var tzedek = new party('משפט צדק', 1253);
  var piratim = new party('הפיראטים', 998);
  var zchuyot = new party('זכויותינו בקולנו', 866);
  var ani = new party('אני ואתה', 723);
  var hakoach = new party('הכח להשפיע', 609);
  var ichud = new party('איחוד הברית', 602);
  var seder = new party('סדר חדש', 594);
  var mitkademet = new party('מתקדמת', 559);
  var daam = new party('דעם כלכלה ירוקה', 539);
  var lev = new party('הלב היהודי', 439);
  var shema = new party('שמע', 402);
  var gush = new party('הגוש התנכי', 349);
  var kama = new party('קמ"ה', 305);
  var chazon = new party('החזון', 300);
  var adomlavan = new party('אדום לבן', 272);
  var manhigut = new party('מנהיגות חברתית', 244);
  var kvod = new party('כבוד האדם', 202);
  var peula = new party('פעולה לישראל', 185);

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
