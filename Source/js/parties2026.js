var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1164494);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 911796);
    var joint = new party('הרשימה המשותפת', 499878);
    var together = new party('ביחד בראשות נפתלי בנט', 530253);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 312241);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 336838);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 365733);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 325650);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 298881);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 289181);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 336275);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 154585);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 95288);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 10563);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 9876);
    var black = new party('צבע שחור - מגן עולם התורה', 11255);
    var tzomet = new party('צומת בית ישראל', 5701);
    var partnership = new party('השותפות לכולם', 4303);
    var chain = new party('שרשר לאהבה ואחדות העם', 2076);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1464);
    var first = new party('ישראל תחילה בראשות שרן השכל', 953);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 926);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 1070);
    var pirates = new party('הפיראטים - צפים לטוב', 1047);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 917);
    var people = new party('אני ואתה מפלגת העם הישראלית', 870);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 745);
    var justice = new party('משפט צדק', 769);
    var women = new party('קול הנשים', 712);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 901);
    var revival = new party('תקומה', 576);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 507);
    var listen = new party('שמע בראשות נפתלי גולדמן', 787);
    var bible = new party('גה"ת - גוש התנ"כי', 411);
    var security = new party('ביטחון אישי', 479);
    var covenant = new party('ברית עולם לגאולת ישראל', 255);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 53);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 43);

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
