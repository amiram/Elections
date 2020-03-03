var getParties = function () {

  var likud = new party('ליכוד', 1096446);
  var kacholavan = new party('כחול לבן', 954568);
  var meshutefet = new party('הרשימה המשותפת', 464258);
  var shas = new party('שס', 301056);
  var yahadut = new party('יהדות התורה', 238177);
  var betenu = new party('ישראל ביתנו', 221737);
  var avoda = new party('עבודה מרצ', 210654);
  var yamina = new party('ימינה', 183539);
  var otzma = new party('עוצמה יהודית', 15509);
  var otzmakalkalit = new party('עוצמה כלכלית', 2766);
  var nashim = new party('קול הנשים', 2213);
  var tzedek = new party('משפט צדק', 1110);
  var piratim = new party('הפיראטים', 890);
  var zchuyot = new party('זכויותינו בקולנו', 788);
  var ani = new party('אני ואתה', 658);
  var hakoach = new party('הכח להשפיע', 544);
  var ichud = new party('איחוד הברית', 527);
  var seder = new party('סדר חדש', 513);
  var mitkademet = new party('מתקדמת', 485);
  var daam = new party('דעם כלכלה ירוקה', 481);
  var lev = new party('הלב היהודי', 403);
  var shema = new party('שמע', 355);
  var gush = new party('הגוש התנכי', 317);
  var chazon = new party('החזון', 275);
  var kama = new party('קמ"ה', 264);
  var adomlavan = new party('אדום לבן', 241);
  var manhigut = new party('מנהיגות חברתית', 224);
  var kvod = new party('כבוד האדם', 179);
  var peula = new party('פעולה לישראל', 163);

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
