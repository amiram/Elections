var getParties = function () {

  var likud = new party("ליכוד ישראל ביתנו", 884631);
  var atid = new party("יש עתיד", 543280);
  var avoda = new party("העבודה", 432083);
  var bait = new party("הבית היהודי", 345935);
  var shas = new party("שס", 331800);
  var yahadut = new party("יהדות התורה", 196038);
  var tnua = new party("התנועה", 189168);
  var meretz = new party("מרצ", 172382);
  var raam = new party("רעמ", 138362);
  var chadash = new party("חדש", 113610);
  var balad = new party("בלד", 96926);
  var kadima = new party("קדימה", 79487);
  var otzma = new party("עוצמה לישראל", 66840);
  var amshalem = new party("עם שלם", 45691);
  var ale = new party("עלה ירוק", 43725);
  var eretz = new party("ארץ חדשה", 28082);
  var koach = new party("כח להשפיע", 28048);
  var israelim = new party("הישראלים", 18970);
  var yerukim = new party("הירוקים והצעירים", 8190);
  var dor = new party("דור בוני הארץ", 6027);
  var chaim = new party("חיים בכבוד", 3639);
  var daam = new party("דעמ", 3550);
  var achim = new party("אחים אנחנו", 2900);
  var tzedek = new party("צדק חברתי", 2877);
  var kulanu = new party("כולנו חברים", 2179);
  var piratim = new party("הפיראטים", 2326);
  var kalkala = new party("כלכלה", 1972);
  var mitkademet = new party("מתקדמת ליברלית", 1568);
  var orr = new party("אור", 1027);
  var brit = new party("ברית עולם", 761);
  var tikva = new party("התקוה לשינוי", 650);
  var moreshet = new party("מורשת אבות", 461);

  var parties = [
    likud,
    atid,
    avoda,
    bait,
    shas,
    yahadut,
    tnua,
    meretz,
    raam,
    chadash,
    balad,
    kadima,
    otzma,
    amshalem,
    ale,
    eretz,
    koach,
    israelim,
    yerukim,
    dor,
    chaim,
    daam,
    achim,
    tzedek,
    kulanu,
    piratim,
    kalkala,
    mitkademet,
    orr,
    brit,
    tikva,
    moreshet
  ];

  var partyConnections = [
    new partyConnection(avoda, atid),
    new partyConnection(chadash, balad),
    new partyConnection(likud, bait),
    new partyConnection(tnua, meretz),
    new partyConnection(shas, yahadut),
    new partyConnection(amshalem, tzedek)];

  return { parties: parties, partyConnections: partyConnections };
};

var percent = 0.02;
