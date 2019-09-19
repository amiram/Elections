var getParties = function () {

  var kacholavan = new party("כחול לבן", 1130400);
  var likud = new party("ליכוד", 1096858);
  var meshutefet = new party("הרשימה המשותפת", 455711);
  var shas = new party("שס", 325532);
  var betenu = new party("ישראל ביתנו", 304334);
  var yahadut = new party("יהדות התורה", 265276);
  var yamina = new party("ימינה", 256866);
  var avoda = new party("עבודה", 209282);
  var meretz = new party("המחנה הדמוקרטי", 189106);
  var otzma = new party("עוצמה יהודית", 82285);
  var tzomet = new party("צומת", 14573);
  var achdut = new party("האחדות העממית", 5802);
  var adomlavan = new party("אדום לבן", 4278);
  var tzedek = new party("צדק", 2996);
  var ron = new party("רון קובי", 2372);
  var kavod = new party("כבוד ושוויון", 1499);
  var zchuyot = new party("זכויותינו בקולנו", 1445);
  var piratim = new party("הפיראטים", 1234);
  var otzmakalkalit = new party("עוצמה כלכלית", 1199);
  var noam = new party("נעם", 1092);
  var mitkademet = new party("מתקדמת", 1059);
  var kama = new party("קמ\"ה", 963);
  var seder = new party("סדר חדש", 910);
  var tzafon = new party("צפון", 722);
  var demokratura = new party("הדמוקראטורה", 715);
  var notzrit = new party("נוצרית ליברלית", 593);
  var daam = new party("דעם כלכלה ירוקה", 585);
  var kvod = new party("כבוד האדם", 530);
  var gush = new party("הגוש התנכי", 483);
  var manhigut = new party("מנהיגות חברתית", 429);
  var achim = new party("כל ישראל אחים", 70);
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
