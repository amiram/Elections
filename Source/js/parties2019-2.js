var getParties = function () {

  var likud = new party("ליכוד", 973520);
  var kacholavan = new party("כחול לבן", 960766);
  var shas = new party("שס", 288678);
  var betenu = new party("ישראל ביתנו", 267563);
  var yahadut = new party("יהדות התורה", 244787);
  var yamina = new party("ימינה", 222274);
  var avoda = new party("עבודה", 181660);
  var meshutefet = new party("הרשימה המשותפת", 165678);
  var meretz = new party("המחנה הדמוקרטי", 158200);
  var otzma = new party("עוצמה יהודית", 72279);
  var tzomet = new party("צומת", 12490);
  var adomlavan = new party("אדום לבן", 2973);
  var tzedek = new party("צדק", 2247);
  var achdut = new party("האחדות העממית", 2044);
  var ron = new party("רון קובי", 2005);
  var zchuyot = new party("זכויותינו בקולנו", 1037);
  var otzmakalkalit = new party("עוצמה כלכלית", 1007);
  var mitkademet = new party("מתקדמת", 859);
  var piratim = new party("הפיראטים", 850);
  var noam = new party("נעם", 809);
  var kama = new party("קמ\"ה", 626);
  var seder = new party("סדר חדש", 611);
  var demokratura = new party("הדמוקראטורה", 562);
  var kavod = new party("כבוד ושוויון", 556);
  var tzafon = new party("צפון", 506);
  var notzrit = new party("נוצרית ליברלית", 416);
  var daam = new party("דעם כלכלה ירוקה", 403);
  var gush = new party("הגוש התנכי", 365);
  var manhigut = new party("מנהיגות חברתית", 326);
  var kvod = new party("כבוד האדם", 313);
  var achim = new party("כל ישראל אחים", 49);
  var zehut = new party("זהות", 18);

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
