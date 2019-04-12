var getParties = function () {

  var likud = new party("ליכוד", 1139079);
  var kacholavan = new party("כחול לבן", 1124805);
  var shas = new party("שס", 257949);
  var yahadut = new party("יהדות התורה", 248528);
  var chadash = new party("חדש-תעל", 193293);
  var avoda = new party("עבודה", 191461);
  var betenu = new party("ישראל ביתנו", 172958);
  var bait = new party("איחוד מפלגות הימין", 159373);
  var meretz = new party("מרצ", 156362);
  var cachlon = new party("כולנו", 152613);
  var raam = new party("רעם-בלד", 143863);
  var yaminchadash = new party("הימין החדש", 138491);
  var zehut = new party("זהות", 117670);
  var gesher = new party("גשר", 74603);
  var betach = new party("בטח", 4669);
  var aravit = new party("הרשימה הערבית", 4239);
  var tzedek = new party("צדק חברתי", 3842);
  var magen = new party("מגן", 3439);
  var tzedeklakol = new party("צדק לכל", 3281);
  var tzomet = new party("צומת", 2430);
  var yashar = new party("ישר", 1443);
  var zchuyot = new party("זכויותינו בקולנו", 1315);
  var vatikim = new party("האזרחים הותיקים", 1203);
  var achim = new party("כל ישראל אחים", 1139);
  var piratim = new party("הפיראטים", 819);
  var pashut = new party("פשוט אהבה", 733);
  var eretz = new party("ארץ ישראל שלנו", 700);
  var mehatchala = new party("מהתחלה", 664);
  var nanach = new party("נ נח", 624);
  var tikva = new party("התקוה לשינוי", 596);
  var kalkala = new party("כלכלה ירוקה", 555);
  var chinuch = new party("חינוך", 516);
  var manhigut = new party("מנהיגות חברתית", 505);
  var kvod = new party("כבוד האדם", 481);
  var achrayut = new party("אחריות למייסדים", 427);
  var shavim = new party("שווים", 401);
  var gush = new party("הגוש התנכי", 380);
  var ani = new party("אני ואתה", 368);
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
