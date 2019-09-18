var getParties = function () {

  var likud = new party("ליכוד", 763874);
  var kacholavan = new party("כחול לבן", 728725);
  var shas = new party("שס", 231694);
  var betenu = new party("ישראל ביתנו", 211159);
  var yahadut = new party("יהדות התורה", 205183);
  var yamina = new party("ימינה", 184749);
  var avoda = new party("עבודה", 136220);
  var meretz = new party("המחנה הדמוקרטי", 113022);
  var otzma = new party("עוצמה יהודית", 59590);
  var meshutefet = new party("הרשימה המשותפת", 40216);
  var tzomet = new party("צומת", 9643);
  var adomlavan = new party("אדום לבן", 2271);
  var tzedek = new party("צדק", 1734);
  var ron = new party("רון קובי", 1703);
  var otzmakalkalit = new party("עוצמה כלכלית", 774);
  var zchuyot = new party("זכויותינו בקולנו", 752);
  var achdut = new party("האחדות העממית", 733);
  var noam = new party("נעם", 708);
  var mitkademet = new party("מתקדמת", 679);
  var piratim = new party("הפיראטים", 656);
  var seder = new party("סדר חדש", 434);
  var kama = new party("קמ\"ה", 434);
  var kavod = new party("כבוד ושוויון", 416);
  var tzafon = new party("צפון", 413);
  var demokratura = new party("הדמוקראטורה", 410);
  var daam = new party("דעם כלכלה ירוקה", 289);
  var notzrit = new party("נוצרית ליברלית", 268);
  var gush = new party("הגוש התנכי", 265);
  var manhigut = new party("מנהיגות חברתית", 248);
  var kvod = new party("כבוד האדם", 212);
  var achim = new party("כל ישראל אחים", 37);
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
