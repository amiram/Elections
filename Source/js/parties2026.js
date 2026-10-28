var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1006726);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 786109);
    var joint = new party('הרשימה המשותפת', 446240);
    var together = new party('ביחד בראשות נפתלי בנט', 436588);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 276498);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 289291);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 316161);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 269385);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 257898);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 231703);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 283615);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 127844);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 78377);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9029);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 7530);
    var black = new party('צבע שחור - מגן עולם התורה', 9502);
    var tzomet = new party('צומת בית ישראל', 4951);
    var partnership = new party('השותפות לכולם', 3606);
    var chain = new party('שרשר לאהבה ואחדות העם', 1733);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1241);
    var first = new party('ישראל תחילה בראשות שרן השכל', 857);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 831);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 829);
    var pirates = new party('הפיראטים - צפים לטוב', 784);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 804);
    var people = new party('אני ואתה מפלגת העם הישראלית', 719);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 632);
    var justice = new party('משפט צדק', 622);
    var women = new party('קול הנשים', 589);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 846);
    var revival = new party('תקומה', 479);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 385);
    var listen = new party('שמע בראשות נפתלי גולדמן', 698);
    var bible = new party('גה"ת - גוש התנ"כי', 344);
    var security = new party('ביטחון אישי', 385);
    var covenant = new party('ברית עולם לגאולת ישראל', 219);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 47);
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
