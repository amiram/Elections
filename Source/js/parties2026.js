var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1066982);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 834653);
    var joint = new party('הרשימה המשותפת', 474446);
    var together = new party('ביחד בראשות נפתלי בנט', 464828);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 291001);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 306209);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 335244);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 285954);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 273708);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 242185);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 316981);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 135574);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 82651);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9310);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 7852);
    var black = new party('צבע שחור - מגן עולם התורה', 10022);
    var tzomet = new party('צומת בית ישראל', 5202);
    var partnership = new party('השותפות לכולם', 3832);
    var chain = new party('שרשר לאהבה ואחדות העם', 1849);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1317);
    var first = new party('ישראל תחילה בראשות שרן השכל', 886);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 865);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 927);
    var pirates = new party('הפיראטים - צפים לטוב', 853);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 858);
    var people = new party('אני ואתה מפלגת העם הישראלית', 764);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 671);
    var justice = new party('משפט צדק', 681);
    var women = new party('קול הנשים', 629);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 860);
    var revival = new party('תקומה', 519);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 415);
    var listen = new party('שמע בראשות נפתלי גולדמן', 729);
    var bible = new party('גה"ת - גוש התנ"כי', 377);
    var security = new party('ביטחון אישי', 407);
    var covenant = new party('ברית עולם לגאולת ישראל', 228);
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
