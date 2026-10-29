var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1104055);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 864323);
    var joint = new party('הרשימה המשותפת', 484083);
    var together = new party('ביחד בראשות נפתלי בנט', 489995);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 299052);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 317770);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 346632);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 300676);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 282835);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 260264);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 322775);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 142768);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 87440);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9797);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 8580);
    var black = new party('צבע שחור - מגן עולם התורה', 10461);
    var tzomet = new party('צומת בית ישראל', 5409);
    var partnership = new party('השותפות לכולם', 3979);
    var chain = new party('שרשר לאהבה ואחדות העם', 1944);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1382);
    var first = new party('ישראל תחילה בראשות שרן השכל', 910);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 884);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 972);
    var pirates = new party('הפיראטים - צפים לטוב', 921);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 876);
    var people = new party('אני ואתה מפלגת העם הישראלית', 811);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 698);
    var justice = new party('משפט צדק', 719);
    var women = new party('קול הנשים', 649);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 877);
    var revival = new party('תקומה', 537);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 448);
    var listen = new party('שמע בראשות נפתלי גולדמן', 744);
    var bible = new party('גה"ת - גוש התנ"כי', 389);
    var security = new party('ביטחון אישי', 441);
    var covenant = new party('ברית עולם לגאולת ישראל', 238);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 49);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 32);

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
