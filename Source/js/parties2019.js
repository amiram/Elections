var getParties = function () {

  var likud = new party("ליכוד", 1139606);
  var kacholavan = new party("כחול לבן", 1125340);
  var shas = new party("שס", 257990);
  var yahadut = new party("יהדות התורה", 248535);
  var chadash = new party("חדש-תעל", 193296);
  var avoda = new party("עבודה", 191562);
  var betenu = new party("ישראל ביתנו", 173190);
  var bait = new party("איחוד מפלגות הימין", 159398);
  var meretz = new party("מרצ", 156435);
  var cachlon = new party("כולנו", 152673);
  var raam = new party("רעם-בלד", 143756);
  var yaminchadash = new party("הימין החדש", 138523);
  var zehut = new party("זהות", 117825);
  var gesher = new party("גשר", 74630);
  var betach = new party("בטח", 4673);
  var aravit = new party("הרשימה הערבית", 4239);
  var tzedek = new party("צדק חברתי", 3843);
  var magen = new party("מגן", 3439);
  var tzedeklakol = new party("צדק לכל", 3281);
  var tzomet = new party("צומת", 2430);
  var yashar = new party("ישר", 1444);
  var zchuyot = new party("זכויותינו בקולנו", 1319);
  var vatikim = new party("האזרחים הותיקים", 1203);
  var achim = new party("כל ישראל אחים", 1141);
  var piratim = new party("הפיראטים", 820);
  var pashut = new party("פשוט אהבה", 733);
  var eretz = new party("ארץ ישראל שלנו", 700);
  var mehatchala = new party("מהתחלה", 664);
  var nanach = new party("נ נח", 624);
  var tikva = new party("התקוה לשינוי", 596);
  var kalkala = new party("כלכלה ירוקה", 555);
  var chinuch = new party("חינוך", 516);
  var manhigut = new party("מנהיגות חברתית", 505);
  var kvod = new party("כבוד האדם", 481);
  var achrayut = new party("אחריות למייסדים", 428);
  var shavim = new party("שווים", 401);
  var gush = new party("הגוש התנכי", 380);
  var ani = new party("אני ואתה", 368);
  var ichud = new party("איחוד בני הברית", 265);
  var brit = new party("ברית עולם", 216);
  var reform = new party("הרפורמה", 142);
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
