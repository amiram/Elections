var getParties = function () {

  var likud = new party('ליכוד', 1337539);
  var kacholavan = new party('כחול לבן', 1205185);
  var meshutefet = new party('הרשימה המשותפת', 574690);
  var shas = new party('שס', 350095);
  var yahadut = new party('יהדות התורה', 273095);
  var avoda = new party('עבודה מרצ', 264410);
  var betenu = new party('ישראל ביתנו', 261399);
  var yamina = new party('ימינה', 237274);
  var otzma = new party('עוצמה יהודית', 19155);
  var otzmakalkalit = new party('עוצמה כלכלית', 3716);
  var nashim = new party('קול הנשים', 2745);
  var piratim = new party('הפיראטים', 1414);
  var tzedek = new party('משפט צדק', 1362);
  var zchuyot = new party('זכויותינו בקולנו', 966);
  var ani = new party('אני ואתה', 807);
  var hakoach = new party('הכח להשפיע', 687);
  var seder = new party('סדר חדש', 671);
  var ichud = new party('איחוד הברית', 669);
  var mitkademet = new party('מתקדמת', 622);
  var daam = new party('דעם כלכלה ירוקה', 608);
  var lev = new party('הלב היהודי', 503);
  var shema = new party('שמע', 440);
  var gush = new party('הגוש התנכי', 385);
  var kama = new party('קמ"ה', 351);
  var adomlavan = new party('אדום לבן', 333);
  var chazon = new party('החזון', 330);
  var peula = new party('פעולה לישראל', 268);
  var manhigut = new party('מנהיגות חברתית', 267);
  var kvod = new party('כבוד האדם', 218);

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
