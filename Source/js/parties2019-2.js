var getParties = function () {

  var likud = new party("ליכוד", 961137);
  var kacholavan = new party("כחול לבן", 954797);
  var shas = new party("שס", 286015);
  var betenu = new party("ישראל ביתנו", 264358);
  var yahadut = new party("יהדות התורה", 243573);
  var yamina = new party("ימינה", 220957);
  var avoda = new party("עבודה", 178124);
  var meretz = new party("המחנה הדמוקרטי", 155799);
  var meshutefet = new party("הרשימה המשותפת", 105745);
  var otzma = new party("עוצמה יהודית", 71946);
  var tzomet = new party("צומת", 12477);
  var adomlavan = new party("אדום לבן", 2950);
  var tzedek = new party("צדק", 2225);
  var ron = new party("רון קובי", 1975);
  var achdut = new party("האחדות העממית", 1335);
  var otzmakalkalit = new party("עוצמה כלכלית", 993);
  var zchuyot = new party("זכויותינו בקולנו", 989);
  var mitkademet = new party("מתקדמת", 848);
  var piratim = new party("הפיראטים", 837);
  var noam = new party("נעם", 809);
  var kama = new party("קמ\"ה", 586);
  var seder = new party("סדר חדש", 562);
  var demokratura = new party("הדמוקראטורה", 543);
  var kavod = new party("כבוד ושוויון", 518);
  var tzafon = new party("צפון", 469);
  var daam = new party("דעם כלכלה ירוקה", 387);
  var notzrit = new party("נוצרית ליברלית", 374);
  var gush = new party("הגוש התנכי", 326);
  var manhigut = new party("מנהיגות חברתית", 316);
  var kvod = new party("כבוד האדם", 294);
  var achim = new party("כל ישראל אחים", 48);
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
