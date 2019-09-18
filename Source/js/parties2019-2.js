var getParties = function () {

  var kacholavan = new party("כחול לבן", 1035624);
  var likud = new party("ליכוד", 1010237);
  var meshutefet = new party("הרשימה המשותפת", 432741);
  var shas = new party("שס", 305712);
  var betenu = new party("ישראל ביתנו", 287305);
  var yahadut = new party("יהדות התורה", 251645);
  var yamina = new party("ימינה", 230907);
  var avoda = new party("עבודה", 194211);
  var meretz = new party("המחנה הדמוקרטי", 173374);
  var otzma = new party("עוצמה יהודית", 75301);
  var tzomet = new party("צומת", 13622);
  var achdut = new party("האחדות העממית", 5531);
  var adomlavan = new party("אדום לבן", 3193);
  var tzedek = new party("צדק", 2423);
  var ron = new party("רון קובי", 2163);
  var kavod = new party("כבוד ושוויון", 1401);
  var zchuyot = new party("זכויותינו בקולנו", 1317);
  var otzmakalkalit = new party("עוצמה כלכלית", 1088);
  var mitkademet = new party("מתקדמת", 991);
  var piratim = new party("הפיראטים", 948);
  var noam = new party("נעם", 922);
  var kama = new party("קמ\"ה", 874);
  var seder = new party("סדר חדש", 849);
  var demokratura = new party("הדמוקראטורה", 665);
  var tzafon = new party("צפון", 644);
  var notzrit = new party("נוצרית ליברלית", 531);
  var daam = new party("דעם כלכלה ירוקה", 508);
  var gush = new party("הגוש התנכי", 462);
  var kvod = new party("כבוד האדם", 461);
  var manhigut = new party("מנהיגות חברתית", 378);
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
