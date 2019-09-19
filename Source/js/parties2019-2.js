var getParties = function () {

  var kacholavan = new party("כחול לבן", 1122180);
  var likud = new party("ליכוד", 1088353);
  var meshutefet = new party("הרשימה המשותפת", 454687);
  var shas = new party("שס", 323029);
  var betenu = new party("ישראל ביתנו", 302738);
  var yahadut = new party("יהדות התורה", 263331);
  var yamina = new party("ימינה", 254535);
  var avoda = new party("עבודה", 207781);
  var meretz = new party("המחנה הדמוקרטי", 187868);
  var otzma = new party("עוצמה יהודית", 81572);
  var tzomet = new party("צומת", 14437);
  var achdut = new party("האחדות העממית", 5787);
  var adomlavan = new party("אדום לבן", 4182);
  var tzedek = new party("צדק", 2960);
  var ron = new party("רון קובי", 2354);
  var kavod = new party("כבוד ושוויון", 1495);
  var zchuyot = new party("זכויותינו בקולנו", 1434);
  var piratim = new party("הפיראטים", 1220);
  var otzmakalkalit = new party("עוצמה כלכלית", 1191);
  var noam = new party("נעם", 1091);
  var mitkademet = new party("מתקדמת", 1051);
  var kama = new party("קמ\"ה", 953);
  var seder = new party("סדר חדש", 904);
  var tzafon = new party("צפון", 719);
  var demokratura = new party("הדמוקראטורה", 712);
  var notzrit = new party("נוצרית ליברלית", 591);
  var daam = new party("דעם כלכלה ירוקה", 580);
  var kvod = new party("כבוד האדם", 522);
  var gush = new party("הגוש התנכי", 482);
  var manhigut = new party("מנהיגות חברתית", 424);
  var achim = new party("כל ישראל אחים", 69);
  var zehut = new party("זהות", 27);

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
