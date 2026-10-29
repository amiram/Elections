var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1113916);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 871828);
    var joint = new party('הרשימה המשותפת', 487472);
    var together = new party('ביחד בראשות נפתלי בנט', 496469);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 301487);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 321049);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 349488);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 304809);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 285598);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 265109);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 325192);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 144766);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 88718);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9929);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 8788);
    var black = new party('צבע שחור - מגן עולם התורה', 10629);
    var tzomet = new party('צומת בית ישראל', 5446);
    var partnership = new party('השותפות לכולם', 4014);
    var chain = new party('שרשר לאהבה ואחדות העם', 1952);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1395);
    var first = new party('ישראל תחילה בראשות שרן השכל', 920);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 891);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 979);
    var pirates = new party('הפיראטים - צפים לטוב', 946);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 880);
    var people = new party('אני ואתה מפלגת העם הישראלית', 816);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 703);
    var justice = new party('משפט צדק', 729);
    var women = new party('קול הנשים', 659);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 881);
    var revival = new party('תקומה', 542);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 463);
    var listen = new party('שמע בראשות נפתלי גולדמן', 748);
    var bible = new party('גה"ת - גוש התנ"כי', 393);
    var security = new party('ביטחון אישי', 450);
    var covenant = new party('ברית עולם לגאולת ישראל', 241);
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
