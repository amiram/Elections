var getParties = function () {

  var likud = new party('ליכוד', 1352449);
  var kacholavan = new party('כחול לבן', 1220381);
  var meshutefet = new party('הרשימה המשותפת', 581507);
  var shas = new party('שס', 352853);
  var yahadut = new party('יהדות התורה', 274437);
  var avoda = new party('עבודה מרצ', 267480);
  var betenu = new party('ישראל ביתנו', 263365);
  var yamina = new party('ימינה', 240689);
  var otzma = new party('עוצמה יהודית', 19402);
  var otzmakalkalit = new party('עוצמה כלכלית', 3781);
  var nashim = new party('קול הנשים', 2773);
  var piratim = new party('הפיראטים', 1473);
  var tzedek = new party('משפט צדק', 1375);
  var zchuyot = new party('זכויותינו בקולנו', 980);
  var ani = new party('אני ואתה', 812);
  var ichud = new party('איחוד הברית', 677);
  var seder = new party('סדר חדש', 677);
  var hakoach = new party('הכח להשפיע', 667);
  var mitkademet = new party('מתקדמת', 622);
  var daam = new party('דעם כלכלה ירוקה', 612);
  var lev = new party('הלב היהודי', 516);
  var shema = new party('שמע', 442);
  var gush = new party('הגוש התנכי', 389);
  var kama = new party('קמ"ה', 350);
  var adomlavan = new party('אדום לבן', 342);
  var chazon = new party('החזון', 308);
  var manhigut = new party('מנהיגות חברתית', 271);
  var kvod = new party('כבוד האדם', 222);
  var peula = new party('פעולה לישראל', 210);

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
