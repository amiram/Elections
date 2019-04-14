var getParties = function () {

  var likud = new party("ליכוד", 1139816);
  var kacholavan = new party("כחול לבן", 1125667);
  var shas = new party("שס", 258024);
  var yahadut = new party("יהדות התורה", 248443);
  var chadash = new party("חדש-תעל", 193462);
  var avoda = new party("עבודה", 191450);
  var betenu = new party("ישראל ביתנו", 173248);
  var bait = new party("איחוד מפלגות הימין", 159413);
  var meretz = new party("מרצ", 156421);
  var cachlon = new party("כולנו", 152712);
  var raam = new party("רעם-בלד", 143684);
  var yaminchadash = new party("הימין החדש", 138556);
  var zehut = new party("זהות", 117969);
  var gesher = new party("גשר", 74667);
  var betach = new party("בטח", 4618);
  var aravit = new party("הרשימה הערבית", 4239);
  var tzedek = new party("צדק חברתי", 3843);
  var magen = new party("מגן", 3415);
  var tzedeklakol = new party("צדק לכל", 3281);
  var tzomet = new party("צומת", 2431);
  var yashar = new party("ישר", 1444);
  var zchuyot = new party("זכויותינו בקולנו", 1319);
  var vatikim = new party("האזרחים הותיקים", 1174);
  var achim = new party("כל ישראל אחים", 1141);
  var piratim = new party("הפיראטים", 819);
  var pashut = new party("פשוט אהבה", 733);
  var eretz = new party("ארץ ישראל שלנו", 700);
  var mehatchala = new party("מהתחלה", 665);
  var nanach = new party("נ נח", 624);
  var tikva = new party("התקוה לשינוי", 561);
  var kalkala = new party("כלכלה ירוקה", 556);
  var chinuch = new party("חינוך", 518);
  var achrayut = new party("אחריות למייסדים", 428);
  var kvod = new party("כבוד האדם", 420);
  var shavim = new party("שווים", 401);
  var manhigut = new party("מנהיגות חברתית", 385);
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
