var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1085162);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 849121);
    var joint = new party('הרשימה המשותפת', 480551);
    var together = new party('ביחד בראשות נפתלי בנט', 476857);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 293990);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 311728);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 340562);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 292985);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 277689);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 250996);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 320288);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 139044);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 84926);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9524);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 8142);
    var black = new party('צבע שחור - מגן עולם התורה', 10157);
    var tzomet = new party('צומת בית ישראל', 5290);
    var partnership = new party('השותפות לכולם', 3896);
    var chain = new party('שרשר לאהבה ואחדות העם', 1894);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1340);
    var first = new party('ישראל תחילה בראשות שרן השכל', 900);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 877);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 961);
    var pirates = new party('הפיראטים - צפים לטוב', 885);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 867);
    var people = new party('אני ואתה מפלגת העם הישראלית', 791);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 685);
    var justice = new party('משפט צדק', 706);
    var women = new party('קול הנשים', 634);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 868);
    var revival = new party('תקומה', 528);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 434);
    var listen = new party('שמע בראשות נפתלי גולדמן', 738);
    var bible = new party('גה"ת - גוש התנ"כי', 385);
    var security = new party('ביטחון אישי', 423);
    var covenant = new party('ברית עולם לגאולת ישראל', 232);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 48);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 30);

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
