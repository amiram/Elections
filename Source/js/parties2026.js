var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1167458);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 913502);
    var joint = new party('הרשימה המשותפת', 500147);
    var together = new party('ביחד בראשות נפתלי בנט', 531476);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 312604);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 337413);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 366352);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 326624);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 299506);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 290451);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 337253);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 154995);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 95663);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 10594);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 9923);
    var black = new party('צבע שחור - מגן עולם התורה', 11274);
    var tzomet = new party('צומת בית ישראל', 5712);
    var partnership = new party('השותפות לכולם', 4294);
    var chain = new party('שרשר לאהבה ואחדות העם', 2084);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1465);
    var first = new party('ישראל תחילה בראשות שרן השכל', 955);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 929);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 1011);
    var pirates = new party('הפיראטים - צפים לטוב', 1050);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 919);
    var people = new party('אני ואתה מפלגת העם הישראלית', 872);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 747);
    var justice = new party('משפט צדק', 774);
    var women = new party('קול הנשים', 712);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 902);
    var revival = new party('תקומה', 581);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 508);
    var listen = new party('שמע בראשות נפתלי גולדמן', 787);
    var bible = new party('גה"ת - גוש התנ"כי', 412);
    var security = new party('ביטחון אישי', 481);
    var covenant = new party('ברית עולם לגאולת ישראל', 255);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 0);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 0);

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
