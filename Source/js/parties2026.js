var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1121743);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 877516);
    var joint = new party('הרשימה המשותפת', 489421);
    var together = new party('ביחד בראשות נפתלי בנט', 501049);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 303277);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 323415);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 351700);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 307881);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 287518);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 268578);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 327588);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 146247);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 89642);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 10004);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 8967);
    var black = new party('צבע שחור - מגן עולם התורה', 10709);
    var tzomet = new party('צומת בית ישראל', 5480);
    var partnership = new party('השותפות לכולם', 4050);
    var chain = new party('שרשר לאהבה ואחדות העם', 1975);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1407);
    var first = new party('ישראל תחילה בראשות שרן השכל', 921);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 900);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 985);
    var pirates = new party('הפיראטים - צפים לטוב', 965);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 885);
    var people = new party('אני ואתה מפלגת העם הישראלית', 824);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 707);
    var justice = new party('משפט צדק', 736);
    var women = new party('קול הנשים', 668);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 882);
    var revival = new party('תקומה', 549);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 473);
    var listen = new party('שמע בראשות נפתלי גולדמן', 755);
    var bible = new party('גה"ת - גוש התנ"כי', 396);
    var security = new party('ביטחון אישי', 456);
    var covenant = new party('ברית עולם לגאולת ישראל', 243);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 49);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 33);

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
