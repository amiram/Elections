var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 1133834);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 887341);
    var joint = new party('הרשימה המשותפת', 493536);
    var together = new party('ביחד בראשות נפתלי בנט', 509399);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 305283);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 327298);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 355768);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 312644);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 290503);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 274252);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 330630);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 148553);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 91252);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 10145);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 9215);
    var black = new party('צבע שחור - מגן עולם התורה', 10775);
    var tzomet = new party('צומת בית ישראל', 5551);
    var partnership = new party('השותפות לכולם', 4175);
    var chain = new party('שרשר לאהבה ואחדות העם', 2018);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 1428);
    var first = new party('ישראל תחילה בראשות שרן השכל', 934);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 909);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 994);
    var pirates = new party('הפיראטים - צפים לטוב', 988);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 895);
    var people = new party('אני ואתה מפלגת העם הישראלית', 841);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 724);
    var justice = new party('משפט צדק', 748);
    var women = new party('קול הנשים', 684);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 886);
    var revival = new party('תקומה', 564);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 483);
    var listen = new party('שמע בראשות נפתלי גולדמן', 769);
    var bible = new party('גה"ת - גוש התנ"כי', 400);
    var security = new party('ביטחון אישי', 462);
    var covenant = new party('ברית עולם לגאולת ישראל', 248);
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
