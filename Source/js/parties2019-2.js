var getParties = function () {

  var kacholavan = new party("כחול לבן", 1030777);
  var likud = new party("ליכוד", 1005565);
  var meshutefet = new party("הרשימה המשותפת", 432505);
  var shas = new party("שס", 303764);
  var betenu = new party("ישראל ביתנו", 286097);
  var yahadut = new party("יהדות התורה", 250562);
  var yamina = new party("ימינה", 230071);
  var avoda = new party("עבודה", 193342);
  var meretz = new party("המחנה הדמוקרטי", 172790);
  var otzma = new party("עוצמה יהודית", 75033);
  var tzomet = new party("צומת", 13612);
  var achdut = new party("האחדות העממית", 5529);
  var adomlavan = new party("אדום לבן", 3176);
  var tzedek = new party("צדק", 2413);
  var ron = new party("רון קובי", 2158);
  var kavod = new party("כבוד ושוויון", 1401);
  var zchuyot = new party("זכויותינו בקולנו", 1315);
  var otzmakalkalit = new party("עוצמה כלכלית", 1083);
  var mitkademet = new party("מתקדמת", 988);
  var piratim = new party("הפיראטים", 944);
  var noam = new party("נעם", 920);
  var kama = new party("קמ\"ה", 872);
  var seder = new party("סדר חדש", 847);
  var demokratura = new party("הדמוקראטורה", 662);
  var tzafon = new party("צפון", 643);
  var notzrit = new party("נוצרית ליברלית", 530);
  var daam = new party("דעם כלכלה ירוקה", 507);
  var gush = new party("הגוש התנכי", 460);
  var kvod = new party("כבוד האדם", 457);
  var manhigut = new party("מנהיגות חברתית", 376);
  var achim = new party("כל ישראל אחים", 59);
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
