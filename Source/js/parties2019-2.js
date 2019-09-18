var getParties = function () {

  var likud = new party("ליכוד", 792966);
  var kacholavan = new party("כחול לבן", 775656);
  var shas = new party("שס", 236714);
  var betenu = new party("ישראל ביתנו", 218124);
  var yahadut = new party("יהדות התורה", 206391);
  var yamina = new party("ימינה", 190151);
  var avoda = new party("עבודה", 143677);
  var meretz = new party("המחנה הדמוקרטי", 121207);
  var otzma = new party("עוצמה יהודית", 61230);
  var meshutefet = new party("הרשימה המשותפת", 40675);
  var tzomet = new party("צומת", 10080);
  var adomlavan = new party("אדום לבן", 2409);
  var tzedek = new party("צדק", 1869);
  var ron = new party("רון קובי", 1762);
  var otzmakalkalit = new party("עוצמה כלכלית", 805);
  var zchuyot = new party("זכויותינו בקולנו", 780);
  var achdut = new party("האחדות העממית", 751);
  var noam = new party("נעם", 744);
  var mitkademet = new party("מתקדמת", 697);
  var piratim = new party("הפיראטים", 694);
  var kama = new party("קמ\"ה", 458);
  var seder = new party("סדר חדש", 448);
  var kavod = new party("כבוד ושוויון", 427);
  var demokratura = new party("הדמוקראטורה", 427);
  var tzafon = new party("צפון", 418);
  var daam = new party("דעם כלכלה ירוקה", 298);
  var notzrit = new party("נוצרית ליברלית", 276);
  var gush = new party("הגוש התנכי", 274);
  var manhigut = new party("מנהיגות חברתית", 259);
  var kvod = new party("כבוד האדם", 217);
  var achim = new party("כל ישראל אחים", 38);
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
