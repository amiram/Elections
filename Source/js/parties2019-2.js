var getParties = function () {

  var kacholavan = new party("כחול לבן", 1080647);
  var likud = new party("ליכוד", 1050628);
  var meshutefet = new party("הרשימה המשותפת", 448492);
  var shas = new party("שס", 313125);
  var betenu = new party("ישראל ביתנו", 296175);
  var yahadut = new party("יהדות התורה", 256171);
  var yamina = new party("ימינה", 241255);
  var avoda = new party("עבודה", 201008);
  var meretz = new party("המחנה הדמוקרטי", 180884);
  var otzma = new party("עוצמה יהודית", 77931);
  var tzomet = new party("צומת", 14011);
  var achdut = new party("האחדות העממית", 5727);
  var adomlavan = new party("אדום לבן", 3638);
  var tzedek = new party("צדק", 2697);
  var ron = new party("רון קובי", 2264);
  var kavod = new party("כבוד ושוויון", 1457);
  var zchuyot = new party("זכויותינו בקולנו", 1386);
  var otzmakalkalit = new party("עוצמה כלכלית", 1138);
  var piratim = new party("הפיראטים", 1069);
  var mitkademet = new party("מתקדמת", 1030);
  var noam = new party("נעם", 1026);
  var kama = new party("קמ\"ה", 930);
  var seder = new party("סדר חדש", 892);
  var demokratura = new party("הדמוקראטורה", 697);
  var tzafon = new party("צפון", 683);
  var notzrit = new party("נוצרית ליברלית", 576);
  var daam = new party("דעם כלכלה ירוקה", 544);
  var kvod = new party("כבוד האדם", 505);
  var gush = new party("הגוש התנכי", 475);
  var manhigut = new party("מנהיגות חברתית", 407);
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
