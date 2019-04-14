var getParties = function () {

  var likud = new party("ליכוד", 1139807);
  var kacholavan = new party("כחול לבן", 1125491);
  var shas = new party("שס", 258034);
  var yahadut = new party("יהדות התורה", 248425);
  var chadash = new party("חדש-תעל", 193460);
  var avoda = new party("עבודה", 191567);
  var betenu = new party("ישראל ביתנו", 173209);
  var bait = new party("איחוד מפלגות הימין", 159389);
  var meretz = new party("מרצ", 156416);
  var cachlon = new party("כולנו", 152712);
  var raam = new party("רעם-בלד", 143709);
  var yaminchadash = new party("הימין החדש", 138554);
  var zehut = new party("זהות", 117861);
  var gesher = new party("גשר", 74637);
  var betach = new party("בטח", 4618);
  var aravit = new party("הרשימה הערבית", 4239);
  var tzedek = new party("צדק חברתי", 3843);
  var magen = new party("מגן", 3415);
  var tzedeklakol = new party("צדק לכל", 3282);
  var tzomet = new party("צומת", 2431);
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
  var kalkala = new party("כלכלה ירוקה", 556);
  var chinuch = new party("חינוך", 516);
  var manhigut = new party("מנהיגות חברתית", 505);
  var kvod = new party("כבוד האדם", 481);
  var achrayut = new party("אחריות למייסדים", 428);
  var shavim = new party("שווים", 401);
  var ani = new party("אני ואתה", 368);
  var gush = new party("הגוש התנכי", 367);
  var ichud = new party("איחוד בני הברית", 265);
  var brit = new party("ברית עולם", 216);
  var reform = new party("הרפורמה", 0);
  var ofek = new party("אופק חדש", 0);
  var yachad = new party("יחד", 0);

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
