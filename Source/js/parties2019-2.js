var getParties = function () {

  var kacholavan = new party("כחול לבן", 1136180);
  var likud = new party("ליכוד", 1101482);
  var meshutefet = new party("הרשימה המשותפת", 457721);
  var shas = new party("שס", 327074);
  var betenu = new party("ישראל ביתנו", 305570);
  var yahadut = new party("יהדות התורה", 266857);
  var yamina = new party("ימינה", 258598);
  var avoda = new party("עבודה", 210341);
  var meretz = new party("המחנה הדמוקרטי", 190044);
  var otzma = new party("עוצמה יהודית", 82650);
  var tzomet = new party("צומת", 14605);
  var achdut = new party("האחדות העממית", 5810);
  var adomlavan = new party("אדום לבן", 4306);
  var tzedek = new party("צדק", 3005);
  var ron = new party("רון קובי", 2379);
  var kavod = new party("כבוד ושוויון", 1502);
  var zchuyot = new party("זכויותינו בקולנו", 1449);
  var piratim = new party("הפיראטים", 1239);
  var otzmakalkalit = new party("עוצמה כלכלית", 1204);
  var noam = new party("נעם", 1098);
  var mitkademet = new party("מתקדמת", 1065);
  var kama = new party("קמ\"ה", 972);
  var seder = new party("סדר חדש", 911);
  var tzafon = new party("צפון", 723);
  var demokratura = new party("הדמוקראטורה", 722);
  var notzrit = new party("נוצרית ליברלית", 594);
  var daam = new party("דעם כלכלה ירוקה", 586);
  var kvod = new party("כבוד האדם", 534);
  var gush = new party("הגוש התנכי", 485);
  var manhigut = new party("מנהיגות חברתית", 430);
  var achim = new party("כל ישראל אחים", 71);
  var zehut = new party("זהות", 28);

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
