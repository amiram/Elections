var getParties = function () {

  var kacholavan = new party("כחול לבן", 1131276);
  var likud = new party("ליכוד", 1097555);
  var meshutefet = new party("הרשימה המשותפת", 455840);
  var shas = new party("שס", 325776);
  var betenu = new party("ישראל ביתנו", 304488);
  var yahadut = new party("יהדות התורה", 265459);
  var yamina = new party("ימינה", 257132);
  var avoda = new party("עבודה", 209423);
  var meretz = new party("המחנה הדמוקרטי", 189258);
  var otzma = new party("עוצמה יהודית", 82352);
  var tzomet = new party("צומת", 14584);
  var achdut = new party("האחדות העממית", 5802);
  var adomlavan = new party("אדום לבן", 4290);
  var tzedek = new party("צדק", 2997);
  var ron = new party("רון קובי", 2377);
  var kavod = new party("כבוד ושוויון", 1499);
  var zchuyot = new party("זכויותינו בקולנו", 1445);
  var piratim = new party("הפיראטים", 1236);
  var otzmakalkalit = new party("עוצמה כלכלית", 1201);
  var noam = new party("נעם", 1092);
  var mitkademet = new party("מתקדמת", 1059);
  var kama = new party("קמ\"ה", 964);
  var seder = new party("סדר חדש", 910);
  var tzafon = new party("צפון", 722);
  var demokratura = new party("הדמוקראטורה", 721);
  var notzrit = new party("נוצרית ליברלית", 593);
  var daam = new party("דעם כלכלה ירוקה", 585);
  var kvod = new party("כבוד האדם", 531);
  var gush = new party("הגוש התנכי", 484);
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
