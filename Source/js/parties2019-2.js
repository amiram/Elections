var getParties = function () {

  var likud = new party("ליכוד", 0)
  var kacholavan = new party("כחול לבן", 0);
  var shas = new party("שס", 0);
  var yahadut = new party("יהדות התורה", 0);
  var meshutefet = new party("הרשימה המשותפת", 0);
  var avoda = new party("עבודה", 0);
  var betenu = new party("ישראל ביתנו", 0);
  var yamina = new party("ימינה", 0);
  var meretz = new party("המחנה הדמוקרטי", 0);
  var tzedek = new party("צדק", 0);
  var tzomet = new party("צומת", 0);
  var zchuyot = new party("זכויותינו בקולנו", 0);
  var piratim = new party("הפיראטים", 0);
  var kvod = new party("כבוד האדם", 0);
  var manhigut = new party("מנהיגות חברתית", 0);
  var gush = new party("הגוש התנכי", 0);
  var demokratura = new party("הדמוקראטורה", 0);
  var adomlavan = new party("אדום לבן", 0);
  var achdut = new party("האחדות העממית", 0);
  var kavod = new party("כבוד ושוויון", 0);
  var otzmakalkalit = new party("עוצמה כלכלית", 0);
  var notzrit = new party("נוצרית ליברלית", 0);
  var otzma = new party("עוצמה יהודית", 0);
  var mitkademet = new party("מתקדמת", 0);
  var daam = new party("דעם כלכלה ירוקה", 0);
  var tzafon = new party("צפון", 0);
  var seder = new party("סדר חדש", 0);
  var ron = new party("רון קובי", 0);
  var kama = new party("קמ\"ה", 0);

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
    kama
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
