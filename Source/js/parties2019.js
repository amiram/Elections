var getParties = function () {

  var likud = new party("ליכוד", 1064987);
  var kacholavan = new party("כחול לבן", 1051707);
  var shas = new party("שס", 247324);
  var yahadut = new party("יהדות התורה", 239603);
  var chadash = new party("חדש-תעל", 187852);
  var avoda = new party("עבודה", 180792);
  var betenu = new party("ישראל ביתנו", 168070);
  var bait = new party("איחוד מפלגות הימין", 148294);
  var meretz = new party("מרצ", 147488);
  var cachlon = new party("כולנו", 144122);
  var raam = new party("רעם-בלד", 140184);
  var yaminchadash = new party("הימין החדש", 127405);
  var zehut = new party("זהות", 101685);
  var gesher = new party("גשר", 70649);
  var betach = new party("בטח", 4352);
  var aravit = new party("הרשימה הערבית", 4083);
  var tzedek = new party("צדק חברתי", 3621);
  var magen = new party("מגן", 3289);
  var tzedeklakol = new party("צדק לכל", 3062);
  var tzomet = new party("צומת", 2288);
  var zchuyot = new party("זכויותינו בקולנו", 1425);
  var yashar = new party("ישר", 1305);
  var vatikim = new party("האזרחים הותיקים", 1099);
  var achim = new party("כל ישראל אחים", 1075);
  var manhigut = new party("מנהיגות חברתית", 805);
  var piratim = new party("הפיראטים", 708);
  var pashut = new party("פשוט אהבה", 676);
  var eretz = new party("ארץ ישראל שלנו", 638);
  var mehatchala = new party("מהתחלה", 633);
  var tikva = new party("התקוה לשינוי", 608);
  var nanach = new party("נ נח", 593);
  var kalkala = new party("כלכלה ירוקה", 510);
  var chinuch = new party("חינוך", 464);
  var kvod = new party("כבוד האדם", 448);
  var achrayut = new party("אחריות למייסדים", 400);
  var shavim = new party("שווים", 375);
  var gush = new party("הגוש התנכי", 367);
  var ani = new party("אני ואתה", 334);
  var ichud = new party("איחוד בני הברית", 244);
  var brit = new party("ברית עולם", 194);
  var reform = new party("הרפורמה", 137);
  var ofek = new party("אופק חדש", 50);
  var yachad = new party("יחד", 23);

  var parties = [
    likud,
    kacholavan,
    shas,
    yahadut,
    chadash,
    avoda,
    betenu,
    bait,
    meretz,
    cachlon,
    raam,
    yaminchadash,
    zehut,
    gesher,
    betach,
    aravit,
    tzedek,
    magen,
    tzedeklakol,
    tzomet,
    zchuyot,
    yashar,
    vatikim,
    achim,
    manhigut,
    piratim,
    pashut,
    eretz,
    mehatchala,
    tikva,
    nanach,
    kalkala,
    chinuch,
    kvod,
    achrayut,
    shavim,
    gush,
    ani,
    ichud,
    brit,
    reform,
    ofek,
    yachad
  ];

  var partyConnections = [
    new partyConnection(avoda, meretz),
    new partyConnection(yaminchadash, betenu),
    new partyConnection(chadash, raam),
    new partyConnection(likud, bait),
    new partyConnection(shas, yahadut),
    new partyConnection(nanach, piratim)];

  return { parties: parties, partyConnections: partyConnections };
};

var percent = 0.0325;
