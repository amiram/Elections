var getParties = function () {

  var likud = new party("ליכוד", 624948);
  var kacholavan = new party("כחול לבן", 592445);
  var shas = new party("שס", 192868);
  var yahadut = new party("יהדות התורה", 180633);
  var betenu = new party("ישראל ביתנו", 176591);
  var yamina = new party("ימינה", 144418);
  var avoda = new party("עבודה", 111837);
  var meretz = new party("המחנה הדמוקרטי", 97375);
  var otzma = new party("עוצמה יהודית", 48492);
  var meshutefet = new party("הרשימה המשותפת", 36795);
  var tzomet = new party("צומת", 6929);
  var adomlavan = new party("אדום לבן", 1862);
  var ron = new party("רון קובי", 1516);
  var tzedek = new party("צדק", 1416);
  var zchuyot = new party("זכויותינו בקולנו", 641);
  var otzmakalkalit = new party("עוצמה כלכלית", 636);
  var achdut = new party("האחדות העממית", 621);
  var noam = new party("נעם", 585);
  var mitkademet = new party("מתקדמת", 564);
  var piratim = new party("הפיראטים", 553);
  var tzafon = new party("צפון", 377);
  var kama = new party("קמ\"ה", 372);
  var seder = new party("סדר חדש", 364);
  var kavod = new party("כבוד ושוויון", 354);
  var demokratura = new party("הדמוקראטורה", 350);
  var daam = new party("דעם כלכלה ירוקה", 243);
  var notzrit = new party("נוצרית ליברלית", 231);
  var gush = new party("הגוש התנכי", 222);
  var manhigut = new party("מנהיגות חברתית", 202);
  var kvod = new party("כבוד האדם", 178);
  var achim = new party("כל ישראל אחים", 31);
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
