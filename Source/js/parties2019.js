var getParties = function () {

  var likud = new party("ליכוד", 1140283);
  var kacholavan = new party("כחול לבן", 1125820);
  var shas = new party("שס", 258245);
  var yahadut = new party("יהדות התורה", 249047);
  var chadash = new party("חדש-תעל", 193462);
  var avoda = new party("עבודה", 190872);
  var betenu = new party("ישראל ביתנו", 173095);
  var bait = new party("איחוד מפלגות הימין", 159451);
  var meretz = new party("מרצ", 156477);
  var cachlon = new party("כולנו", 152751);
  var raam = new party("רעם-בלד", 143666);
  var yaminchadash = new party("הימין החדש", 138596);
  var zehut = new party("זהות", 118000);
  var gesher = new party("גשר", 74679);
  var betach = new party("בטח", 4619);
  var aravit = new party("הרשימה הערבית", 4135);
  var tzedek = new party("צדק חברתי", 3843);
  var magen = new party("מגן", 3410);
  var tzedeklakol = new party("צדק לכל", 3281);
  var tzomet = new party("צומת", 2417);
  var yashar = new party("ישר", 1445);
  var zchuyot = new party("זכויותינו בקולנו", 1316);
  var vatikim = new party("האזרחים הותיקים", 1174);
  var achim = new party("כל ישראל אחים", 1141);
  var piratim = new party("הפיראטים", 819);
  var pashut = new party("פשוט אהבה", 733);
  var eretz = new party("ארץ ישראל שלנו", 700);
  var nanach = new party("נ נח", 624);
  var mehatchala = new party("מהתחלה", 603);
  var tikva = new party("התקוה לשינוי", 562);
  var kalkala = new party("כלכלה ירוקה", 556);
  var chinuch = new party("חינוך", 518);
  var achrayut = new party("אחריות למייסדים", 428);
  var kvod = new party("כבוד האדם", 404);
  var shavim = new party("שווים", 401);
  var manhigut = new party("מנהיגות חברתית", 385);
  var ani = new party("אני ואתה", 368);
  var gush = new party("הגוש התנכי", 353);
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
