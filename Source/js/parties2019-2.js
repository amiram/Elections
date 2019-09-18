var getParties = function () {

  var kacholavan = new party("כחול לבן", 1029333);
  var likud = new party("ליכוד", 1004004);
  var meshutefet = new party("הרשימה המשותפת", 429485);
  var shas = new party("שס", 303367);
  var betenu = new party("ישראל ביתנו", 285311);
  var yahadut = new party("יהדות התורה", 250571);
  var yamina = new party("ימינה", 229840);
  var avoda = new party("עבודה", 193074);
  var meretz = new party("המחנה הדמוקרטי", 172545);
  var otzma = new party("עוצמה יהודית", 74961);
  var tzomet = new party("צומת", 13595);
  var achdut = new party("האחדות העממית", 5511);
  var adomlavan = new party("אדום לבן", 3167);
  var tzedek = new party("צדק", 2405);
  var ron = new party("רון קובי", 2156);
  var kavod = new party("כבוד ושוויון", 1395);
  var zchuyot = new party("זכויותינו בקולנו", 1311);
  var otzmakalkalit = new party("עוצמה כלכלית", 1082);
  var mitkademet = new party("מתקדמת", 986);
  var piratim = new party("הפיראטים", 940);
  var noam = new party("נעם", 920);
  var kama = new party("קמ\"ה", 868);
  var seder = new party("סדר חדש", 844);
  var demokratura = new party("הדמוקראטורה", 661);
  var tzafon = new party("צפון", 640);
  var notzrit = new party("נוצרית ליברלית", 528);
  var daam = new party("דעם כלכלה ירוקה", 506);
  var gush = new party("הגוש התנכי", 458);
  var kvod = new party("כבוד האדם", 456);
  var manhigut = new party("מנהיגות חברתית", 374);
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
