var getParties = function () {

  var kacholavan = new party("כחול לבן", 1139038);
  var likud = new party("ליכוד", 1104050);
  var meshutefet = new party("הרשימה המשותפת", 457984);
  var shas = new party("שס", 328132);
  var betenu = new party("ישראל ביתנו", 306393);
  var yahadut = new party("יהדות התורה", 268231);
  var yamina = new party("ימינה", 259149);
  var avoda = new party("עבודה", 210851);
  var meretz = new party("המחנה הדמוקרטי", 190504);
  var otzma = new party("עוצמה יהודית", 82813);
  var tzomet = new party("צומת", 14627);
  var achdut = new party("האחדות העממית", 5813);
  var adomlavan = new party("אדום לבן", 4315);
  var tzedek = new party("צדק", 3014);
  var ron = new party("רון קובי", 2382);
  var kavod = new party("כבוד ושוויון", 1504);
  var zchuyot = new party("זכויותינו בקולנו", 1454);
  var piratim = new party("הפיראטים", 1242);
  var otzmakalkalit = new party("עוצמה כלכלית", 1208);
  var noam = new party("נעם", 1099);
  var mitkademet = new party("מתקדמת", 1066);
  var kama = new party("קמ\"ה", 973);
  var seder = new party("סדר חדש", 915);
  var tzafon = new party("צפון", 723);
  var demokratura = new party("הדמוקראטורה", 725);
  var notzrit = new party("נוצרית ליברלית", 595);
  var daam = new party("דעם כלכלה ירוקה", 587);
  var kvod = new party("כבוד האדם", 535);
  var gush = new party("הגוש התנכי", 489);
  var manhigut = new party("מנהיגות חברתית", 430);
  var achim = new party("כל ישראל אחים", 71);
  var zehut = new party("זהות", 28);

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
