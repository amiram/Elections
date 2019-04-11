var getParties = function () {

  var likud = new party("ליכוד", 1135135);
  var kacholavan = new party("כחול לבן", 1119930);
  var shas = new party("שס", 257314);
  var yahadut = new party("יהדות התורה", 247639);
  var chadash = new party("חדש-תעל", 192027);
  var avoda = new party("עבודה", 191838);
  var betenu = new party("ישראל ביתנו", 172538);
  var bait = new party("איחוד מפלגות הימין", 159090);
  var meretz = new party("מרצ", 155542);
  var cachlon = new party("כולנו", 152066);
  var raam = new party("רעם-בלד", 142958);
  var yaminchadash = new party("הימין החדש", 138101);
  var zehut = new party("זהות", 117392);
  var gesher = new party("גשר", 74219);
  var betach = new party("בטח", 4714);
  var aravit = new party("הרשימה הערבית", 4228);
  var tzedek = new party("צדק חברתי", 3828);
  var magen = new party("מגן", 3432);
  var tzedeklakol = new party("צדק לכל", 3270);
  var tzomet = new party("צומת", 2426);
  var zchuyot = new party("זכויותינו בקולנו", 1505);
  var yashar = new party("ישר", 1433);
  var vatikim = new party("האזרחים הותיקים", 1185);
  var achim = new party("כל ישראל אחים", 1132);
  var manhigut = new party("מנהיגות חברתית", 828);
  var piratim = new party("הפיראטים", 816);
  var pashut = new party("פשוט אהבה", 728);
  var eretz = new party("ארץ ישראל שלנו", 699);
  var mehatchala = new party("מהתחלה", 661);
  var nanach = new party("נ נח", 623);
  var tikva = new party("התקוה לשינוי", 594);
  var kalkala = new party("כלכלה ירוקה", 553);
  var chinuch = new party("חינוך", 510);
  var kvod = new party("כבוד האדם", 481);
  var achrayut = new party("אחריות למייסדים", 425);
  var shavim = new party("שווים", 398);
  var gush = new party("הגוש התנכי", 379);
  var ani = new party("אני ואתה", 367);
  var ichud = new party("איחוד בני הברית", 265);
  var brit = new party("ברית עולם", 216);
  var reform = new party("הרפורמה", 143);
  var ofek = new party("אופק חדש", 54);
  var yachad = new party("יחד", 25);

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
