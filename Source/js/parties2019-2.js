var getParties = function () {

  var likud = new party("ליכוד", 1369);
  var kacholavan = new party("כחול לבן", 937);
  var shas = new party("שס", 224);
  var yahadut = new party("יהדות התורה", 59);
  var meshutefet = new party("הרשימה המשותפת", 7);
  var avoda = new party("עבודה", 293);
  var betenu = new party("ישראל ביתנו", 112);
  var yamina = new party("ימינה", 834);
  var meretz = new party("המחנה הדמוקרטי", 145);
  var otzma = new party("עוצמה יהודית", 217);
  var tzedek = new party("צדק", 1);
  var tzomet = new party("צומת", 58);
  var zchuyot = new party("זכויותינו בקולנו", 1);
  var piratim = new party("הפיראטים", 1);
  var kvod = new party("כבוד האדם", 0);
  var manhigut = new party("מנהיגות חברתית", 1);
  var gush = new party("הגוש התנכי", 0);
  var demokratura = new party("הדמוקראטורה", 0);
  var adomlavan = new party("אדום לבן", 2);
  var achdut = new party("האחדות העממית", 0);
  var kavod = new party("כבוד ושוויון", 0);
  var otzmakalkalit = new party("עוצמה כלכלית", 2);
  var notzrit = new party("נוצרית ליברלית", 0);
  var mitkademet = new party("מתקדמת", 2);
  var daam = new party("דעם כלכלה ירוקה", 0);
  var tzafon = new party("צפון", 2);
  var seder = new party("סדר חדש", 1);
  var ron = new party("רון קובי", 7);
  var kama = new party("קמ\"ה", 1);

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
