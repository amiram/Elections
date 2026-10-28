var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1059246);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 830231);
    var joint = new party('הרשימה המשותפת', 471292);
    var together = new party('ביחד בראשות נפתלי בנט', 462446);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 290010);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 304385);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 333800);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 283577);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 271682);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 241123);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 310620);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 134751);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 82196);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9284);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 7767);
    var black = new party('צבע שחור - מגן עולם התורה', 10012);
    var tzomet = new party('צומת בית ישראל', 5170);
    var partnership = new party('השותפות לכולם', 3814);
    var chain = new party('שרשר לאהבה ואחדות העם', 1837);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1308);
    var first = new party('ישראל תחילה בראשות שרן השכל', 884);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 861);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 924);
    var pirates = new party('הפיראטים - צפים לטוב', 838);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 849);
    var people = new party('אני ואתה מפלגת העם הישראלית', 761);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 669);
    var justice = new party('משפט צדק', 676);
    var women = new party('קול הנשים', 624);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 859);
    var revival = new party('תקומה', 513);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 407);
    var listen = new party('שמע בראשות נפתלי גולדמן', 728);
    var bible = new party('גה"ת - גוש התנ"כי', 369);
    var security = new party('ביטחון אישי', 402);
    var covenant = new party('ברית עולם לגאולת ישראל', 227);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 48);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 5);

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
