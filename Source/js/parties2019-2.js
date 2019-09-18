var getParties = function () {

  var kacholavan = new party("כחול לבן", 1009436);
  var likud = new party("ליכוד", 984244);
  var meshutefet = new party("הרשימה המשותפת", 324597);
  var shas = new party("שס", 295963);
  var betenu = new party("ישראל ביתנו", 278215);
  var yahadut = new party("יהדות התורה", 247855);
  var yamina = new party("ימינה", 226713);
  var avoda = new party("עבודה", 187870);
  var meretz = new party("המחנה הדמוקרטי", 168641);
  var otzma = new party("עוצמה יהודית", 73817);
  var tzomet = new party("צומת", 12892);
  var achdut = new party("האחדות העממית", 3823);
  var adomlavan = new party("אדום לבן", 3088);
  var tzedek = new party("צדק", 2347);
  var ron = new party("רון קובי", 2097);
  var zchuyot = new party("זכויותינו בקולנו", 1203);
  var kavod = new party("כבוד ושוויון", 1056);
  var otzmakalkalit = new party("עוצמה כלכלית", 1052);
  var mitkademet = new party("מתקדמת", 923);
  var piratim = new party("הפיראטים", 906);
  var noam = new party("נעם", 865);
  var kama = new party("קמ\"ה", 765);
  var seder = new party("סדר חדש", 744);
  var demokratura = new party("הדמוקראטורה", 610);
  var tzafon = new party("צפון", 592);
  var notzrit = new party("נוצרית ליברלית", 472);
  var daam = new party("דעם כלכלה ירוקה", 466);
  var gush = new party("הגוש התנכי", 415);
  var kvod = new party("כבוד האדם", 403);
  var manhigut = new party("מנהיגות חברתית", 356);
  var achim = new party("כל ישראל אחים", 53);
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
