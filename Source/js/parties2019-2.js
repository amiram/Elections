var getParties = function () {

  var kacholavan = new party("כחול לבן", 1103713);
  var likud = new party("ליכוד", 1071564);
  var meshutefet = new party("הרשימה המשותפת", 451746);
  var shas = new party("שס", 318373);
  var betenu = new party("ישראל ביתנו", 299801);
  var yahadut = new party("יהדות התורה", 259801);
  var yamina = new party("ימינה", 248390);
  var avoda = new party("עבודה", 204655);
  var meretz = new party("המחנה הדמוקרטי", 184677);
  var otzma = new party("עוצמה יהודית", 79782);
  var tzomet = new party("צומת", 14255);
  var achdut = new party("האחדות העממית", 5755);
  var adomlavan = new party("אדום לבן", 3938);
  var tzedek = new party("צדק", 2859);
  var ron = new party("רון קובי", 2308);
  var kavod = new party("כבוד ושוויון", 1481);
  var zchuyot = new party("זכויותינו בקולנו", 1412);
  var otzmakalkalit = new party("עוצמה כלכלית", 1161);
  var piratim = new party("הפיראטים", 1143);
  var noam = new party("נעם", 1088);
  var mitkademet = new party("מתקדמת", 1042);
  var kama = new party("קמ\"ה", 944);
  var seder = new party("סדר חדש", 898);
  var demokratura = new party("הדמוקראטורה", 705);
  var tzafon = new party("צפון", 702);
  var notzrit = new party("נוצרית ליברלית", 585);
  var daam = new party("דעם כלכלה ירוקה", 565);
  var kvod = new party("כבוד האדם", 514);
  var gush = new party("הגוש התנכי", 475);
  var manhigut = new party("מנהיגות חברתית", 419);
  var achim = new party("כל ישראל אחים", 66);
  var zehut = new party("זהות", 26);

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
