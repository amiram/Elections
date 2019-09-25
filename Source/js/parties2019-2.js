var getParties = function () {

  var kacholavan = new party("כחול לבן", 1151214);
  var likud = new party("ליכוד", 1113617);
  var meshutefet = new party("הרשימה המשותפת", 470211);
  var shas = new party("שס", 330199);
  var betenu = new party("ישראל ביתנו", 310154);
  var yahadut = new party("יהדות התורה", 268775);
  var yamina = new party("ימינה", 260655);
  var avoda = new party("עבודה", 212782);
  var meretz = new party("המחנה הדמוקרטי", 192495);
  var otzma = new party("עוצמה יהודית", 83609);
  var tzomet = new party("צומת", 14805);
  var achdut = new party("האחדות העממית", 5946);
  var adomlavan = new party("אדום לבן", 4358);
  var tzedek = new party("צדק", 3053);
  var ron = new party("רון קובי", 2395);
  var kavod = new party("כבוד ושוויון", 1545);
  var zchuyot = new party("זכויותינו בקולנו", 1473);
  var piratim = new party("הפיראטים", 1236);
  var otzmakalkalit = new party("עוצמה כלכלית", 1193);
  var mitkademet = new party("מתקדמת", 1033);
  var kama = new party("קמ\"ה", 994);
  var seder = new party("סדר חדש", 928);
  var demokratura = new party("הדמוקראטורה", 736);
  var tzafon = new party("צפון", 725);
  var notzrit = new party("נוצרית ליברלית", 610);
  var daam = new party("דעם כלכלה ירוקה", 592);
  var kvod = new party("כבוד האדם", 542);
  var gush = new party("הגוש התנכי", 497);
  var manhigut = new party("מנהיגות חברתית", 434);
  var zehut = new party("זהות", 0);
  var achim = new party("כל ישראל אחים", 0);
  var noam = new party("נעם", 0);

  var parties = [
    likud,
    kacholavan,
    shas,
    yahadut,
    meshutefet,
    avoda,
    betenu,
    yamina,
    meretz,
    tzedek,
    tzomet,
    zchuyot,
    manhigut,
    piratim,
    kvod,
    gush,
    demokratura,
    adomlavan,
    achdut,
    kavod,
    otzmakalkalit,
    notzrit,
    otzma,
    mitkademet,
    daam,
    tzafon,
    seder,
    ron,
    kama,
    noam,
    achim,
    zehut
  ];

  var partyConnections = [
    new partyConnection(avoda, meretz),
    new partyConnection(kacholavan, betenu),
    new partyConnection(likud, yamina),
    new partyConnection(shas, yahadut),
  ];

  return { parties: parties, partyConnections: partyConnections };
};

var percent = 0.0325;
