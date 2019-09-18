var getParties = function () {

  var kacholavan = new party("כחול לבן", 1026414);
  var likud = new party("ליכוד", 999959);
  var meshutefet = new party("הרשימה המשותפת", 416749);
  var shas = new party("שס", 301059);
  var betenu = new party("ישראל ביתנו", 284128);
  var yahadut = new party("יהדות התורה", 249676);
  var yamina = new party("ימינה", 229117);
  var avoda = new party("עבודה", 192215);
  var meretz = new party("המחנה הדמוקרטי", 172078);
  var otzma = new party("עוצמה יהודית", 74622);
  var tzomet = new party("צומת", 13514);
  var achdut = new party("האחדות העממית", 5371);
  var adomlavan = new party("אדום לבן", 3161);
  var tzedek = new party("צדק", 2393);
  var ron = new party("רון קובי", 2152);
  var kavod = new party("כבוד ושוויון", 1369);
  var zchuyot = new party("זכויותינו בקולנו", 1298);
  var otzmakalkalit = new party("עוצמה כלכלית", 1074);
  var mitkademet = new party("מתקדמת", 955);
  var piratim = new party("הפיראטים", 935);
  var noam = new party("נעם", 865);
  var kama = new party("קמ\"ה", 858);
  var seder = new party("סדר חדש", 834);
  var demokratura = new party("הדמוקראטורה", 652);
  var tzafon = new party("צפון", 639);
  var notzrit = new party("נוצרית ליברלית", 521);
  var daam = new party("דעם כלכלה ירוקה", 499);
  var gush = new party("הגוש התנכי", 454);
  var kvod = new party("כבוד האדם", 450);
  var manhigut = new party("מנהיגות חברתית", 372);
  var achim = new party("כל ישראל אחים", 58);
  var zehut = new party("זהות", 19);

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
