var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1040170);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 814385);
    var joint = new party('הרשימה המשותפת', 461963);
    var together = new party('ביחד בראשות נפתלי בנט', 453607);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 284992);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 298575);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 327457);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 278623);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 267134);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 238378);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 297366);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 132400);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 80775);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 9201);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 7698);
    var black = new party('צבע שחור - מגן עולם התורה', 9831);
    var tzomet = new party('צומת בית ישראל', 5104);
    var partnership = new party('השותפות לכולם', 3727);
    var chain = new party('שרשר לאהבה ואחדות העם', 1796);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1284);
    var first = new party('ישראל תחילה בראשות שרן השכל', 873);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 851);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 914);
    var pirates = new party('הפיראטים - צפים לטוב', 817);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 834);
    var people = new party('אני ואתה מפלגת העם הישראלית', 746);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 654);
    var justice = new party('משפט צדק', 657);
    var women = new party('קול הנשים', 605);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 855);
    var revival = new party('תקומה', 503);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 403);
    var listen = new party('שמע בראשות נפתלי גולדמן', 713);
    var bible = new party('גה"ת - גוש התנ"כי', 358);
    var security = new party('ביטחון אישי', 394);
    var covenant = new party('ברית עולם לגאולת ישראל', 223);
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
