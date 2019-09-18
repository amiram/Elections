var getParties = function () {

  var likud = new party("ליכוד", 589134);
  var kacholavan = new party("כחול לבן", 554977);
  var shas = new party("שס", 183493);
  var yahadut = new party("יהדות התורה", 174334);
  var betenu = new party("ישראל ביתנו", 163004);
  var yamina = new party("ימינה", 138561);
  var avoda = new party("עבודה", 105845);
  var meretz = new party("המחנה הדמוקרטי", 92948);
  var otzma = new party("עוצמה יהודית", 46400);
  var meshutefet = new party("הרשימה המשותפת", 36641);
  var tzomet = new party("צומת", 6289);
  var adomlavan = new party("אדום לבן", 1755);
  var ron = new party("רון קובי", 1460);
  var tzedek = new party("צדק", 1354);
  var zchuyot = new party("זכויותינו בקולנו", 614);
  var otzmakalkalit = new party("עוצמה כלכלית", 604);
  var achdut = new party("האחדות העממית", 603);
  var noam = new party("נעם", 562);
  var mitkademet = new party("מתקדמת", 538);
  var piratim = new party("הפיראטים", 530);
  var tzafon = new party("צפון", 375);
  var kama = new party("קמ\"ה", 360);
  var seder = new party("סדר חדש", 349);
  var kavod = new party("כבוד ושוויון", 344);
  var demokratura = new party("הדמוקראטורה", 336);
  var daam = new party("דעם כלכלה ירוקה", 229);
  var notzrit = new party("נוצרית ליברלית", 219);
  var gush = new party("הגוש התנכי", 211);
  var manhigut = new party("מנהיגות חברתית", 192);
  var kvod = new party("כבוד האדם", 170);
  var achim = new party("כל ישראל אחים", 29);
  var zehut = new party("זהות", 15);

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
