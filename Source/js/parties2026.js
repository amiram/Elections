var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 917371);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 723703);
    var joint = new party('הרשימה המשותפת', 400848);
    var together = new party('ביחד בראשות נפתלי בנט', 402265);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 266553);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 266200);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 292761);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 240905);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 240739);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 208499);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 208769);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 117490);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 71650);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 8748);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 6433);
    var black = new party('צבע שחור - מגן עולם התורה', 9308);
    var tzomet = new party('צומת בית ישראל', 4601);
    var partnership = new party('השותפות לכולם', 3262);
    var chain = new party('שרשר לאהבה ואחדות העם', 1572);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1109);
    var first = new party('ישראל תחילה בראשות שרן השכל', 804);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 729);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 776);
    var pirates = new party('הפיראטים - צפים לטוב', 696);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 707);
    var people = new party('אני ואתה מפלגת העם הישראלית', 638);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 572);
    var justice = new party('משפט צדק', 535);
    var women = new party('קול הנשים', 528);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 816);
    var revival = new party('תקומה', 429);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 355);
    var listen = new party('שמע בראשות נפתלי גולדמן', 651);
    var bible = new party('גה"ת - גוש התנ"כי', 304);
    var security = new party('ביטחון אישי', 332);
    var covenant = new party('ברית עולם לגאולת ישראל', 197);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 39);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 4);

    var parties = [
        likud,
        yashar,
        joint,
        together,
        utj,
        beytenu,
        democrats,
        otzma,
        shas,
        zionism,
        raam,
        reservists,
        amcha,
        haredi,
        noam,
        black,
        tzomet,
        partnership,
        chain,
        succeed,
        first,
        reform,
        kahal,
        pirates,
        order,
        people,
        dawn,
        justice,
        women,
        paradise,
        revival,
        welfare,
        listen,
        bible,
        security,
        covenant,
        brother,
        bluewhite,
    ];

    likud.group = 'ימין';
    utj.group = 'ימין';
    otzma.group = 'ימין';
    shas.group = 'ימין';
    zionism.group = 'ימין';
    yashar.group = 'שמאל';
    together.group = 'שמאל';
    beytenu.group = 'שמאל';
    democrats.group = 'שמאל';
    joint.group = 'ערבים';
    raam.group = 'ערבים';

    var partyConnections = [
        new partyConnection(together, beytenu),
        new partyConnection(joint, raam),
        new partyConnection(zionism, likud),
        new partyConnection(utj, shas),
        new partyConnection(democrats, yashar),
        new partyConnection(covenant, reform),
    ];

    return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
