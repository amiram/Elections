var getParties = function () {

  var kacholavan = new party("כחול לבן", 1148700);
  var likud = new party("ליכוד", 1111535);
  var meshutefet = new party("הרשימה המשותפת", 470611);
  var shas = new party("שס", 329834);
  var betenu = new party("ישראל ביתנו", 309688);
  var yahadut = new party("יהדות התורה", 268688);
  var yamina = new party("ימינה", 260339);
  var avoda = new party("עבודה", 212529);
  var meretz = new party("המחנה הדמוקרטי", 192261);
  var otzma = new party("עוצמה יהודית", 83266);
  var tzomet = new party("צומת", 14817);
  var achdut = new party("האחדות העממית", 5905);
  var adomlavan = new party("אדום לבן", 4346);
  var tzedek = new party("צדק", 3039);
  var ron = new party("רון קובי", 2398);
  var kavod = new party("כבוד ושוויון", 1544);
  var zchuyot = new party("זכויותינו בקולנו", 1471);
  var piratim = new party("הפיראטים", 1251);
  var otzmakalkalit = new party("עוצמה כלכלית", 1215);
  var mitkademet = new party("מתקדמת", 1079);
  var kama = new party("קמ\"ה", 987);
  var seder = new party("סדר חדש", 928);
  var tzafon = new party("צפון", 733);
  var demokratura = new party("הדמוקראטורה", 732);
  var notzrit = new party("נוצרית ליברלית", 610);
  var daam = new party("דעם כלכלה ירוקה", 592);
  var kvod = new party("כבוד האדם", 541);
  var gush = new party("הגוש התנכי", 495);
  var manhigut = new party("מנהיגות חברתית", 432);
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
