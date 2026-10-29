var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1152059);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 901840);
    var joint = new party('הרשימה המשותפת', 496878);
    var together = new party('ביחד בראשות נפתלי בנט', 522094);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 310067);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 332713);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 361756);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 320700);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 295889);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 283329);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 333546);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 152180);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 93688);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 10377);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 9641);
    var black = new party('צבע שחור - מגן עולם התורה', 11106);
    var tzomet = new party('צומת בית ישראל', 5649);
    var partnership = new party('השותפות לכולם', 4263);
    var chain = new party('שרשר לאהבה ואחדות העם', 2052);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1450);
    var first = new party('ישראל תחילה בראשות שרן השכל', 948);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 920);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 1063);
    var pirates = new party('הפיראטים - צפים לטוב', 1026);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 911);
    var people = new party('אני ואתה מפלגת העם הישראלית', 856);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 733);
    var justice = new party('משפט צדק', 759);
    var women = new party('קול הנשים', 700);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 894);
    var revival = new party('תקומה', 571);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 501);
    var listen = new party('שמע בראשות נפתלי גולדמן', 780);
    var bible = new party('גה"ת - גוש התנ"כי', 405);
    var security = new party('ביטחון אישי', 470);
    var covenant = new party('ברית עולם לגאולת ישראל', 252);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 49);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 41);

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
