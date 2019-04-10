var getParties = function () {

  var likud = new party("ליכוד", 984966);
  var avoda = new party("המחנה הציוני", 786075);
  var meshutefet = new party("הרשימה המשותפת", 443837);
  var atid = new party("יש עתיד", 370850);
  var cachlon = new party("כולנו", 315202);
  var bait = new party("הבית היהודי", 283559);
  var shas = new party("שס", 241200);
  var betenu = new party("ישראל ביתנו", 215083);
  var yahadut = new party("יהדות התורה", 211826);
  var meretz = new party("מרצ", 165292);
  var otzma = new party("יחד", 125106);
  var ale = new party("עלה ירוק", 47156);
  var arab = new party("הרשימה הערבית", 4537);
  var yerukim = new party("הירוקים", 3429);
  var kulanu = new party("כולנו חברים נ נח", 2502);
  var bizchutan = new party("ובזכותן", 1977);
  var tikva = new party("התקוה לשינוי", 1519);
  var kalkala = new party("כלכלה", 1050);
  var perach = new party("פרח", 943);
  var piratim = new party("הפיראטים", 941);
  var nivcheret = new party("נבחרת העם", 886);
  var chaim = new party("שכירות בכבוד", 562);
  var orr = new party("אור", 503);
  var democratura = new party("תומכי מפלגת הדמוקראטורה", 243);
  var manhigut = new party("מנהיגות חברתית", 223);

  var parties = [
    likud,
    avoda,
    meshutefet,
    atid,
    cachlon,
    bait,
    shas,
    betenu,
    yahadut,
    meretz,
    otzma,
    ale,
    arab,
    yerukim,
    kulanu,
    bizchutan,
    tikva,
    kalkala,
    perach,
    piratim,
    nivcheret,
    chaim,
    orr,
    democratura,
    manhigut
  ];

  var partyConnections = [
    new partyConnection(avoda, meretz),
    new partyConnection(cachlon, betenu),
    new partyConnection(likud, bait),
    new partyConnection(shas, yahadut)];

  return { parties: parties, partyConnections: partyConnections };
};

var percent = 0.0325;
