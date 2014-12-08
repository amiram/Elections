/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
var elections;
(function (elections) {
    

    var party = (function () {
        function party(_name, _votes) {
            this.partyName = _name;
            this.votes = _votes;
            this.mandatesByVotes = 0;
            this.connected = false;
            this.spareMandates = 0;
            this.mandatesByConnection = 0;
            this.votesToLoseMandate = 0;
            this.missingVotesForOneMandate = 0;
        }
        party.prototype.votesMethod = function () {
            return this.votes;
        };

        party.prototype.totalMandates = function () {
            return this.mandatesByVotes + this.mandatesByConnection + this.spareMandates;
        };

        party.prototype.votesPerMandate = function () {
            var tm = this.totalMandates();
            return tm > 0 ? Math.round(this.votes / tm) : 0;
        };
        return party;
    })();
    elections.party = party;

    var partyConnection = (function () {
        function partyConnection(_party1, _party2) {
            this.party1 = _party1;
            this.party2 = _party2;
            this.mandatesByVotes = 0;
            this.party1.connected = true;
            this.party2.connected = true;
            this.spareMandates = 0;
        }
        partyConnection.prototype.votesMethod = function () {
            return this.party1.votes + this.party2.votes;
        };
        return partyConnection;
    })();
    elections.partyConnection = partyConnection;

    var calcResults = (function () {
        function calcResults() {
        }
        return calcResults;
    })();
    elections.calcResults = calcResults;

    var partiesView = (function () {
        function partiesView() {
        }
        partiesView.prototype.calcAll = function () {
            var data = this.getParties();

            var primaryResult = this.calcMandates(data.parties, data.partyConnections);
            primaryResult.parties = data.parties;

            for (var index = 0; index < data.parties.length; index++) {
                var p = data.parties[index];

                if (!p.aboveBlockPercent)
                    continue;

                var votesDelta = primaryResult.generalMeasure;
                var deltaChange = votesDelta;
                var lastDeltaLostMandate = 0;

                do {
                    var tempParties = this.getParties();
                    var tempp = tempParties.parties[index];
                    tempp.votes -= votesDelta;

                    this.calcMandates(tempParties.parties, tempParties.partyConnections);

                    if (deltaChange < 2)
                        break;

                    deltaChange = Math.floor(deltaChange / 2);

                    if (tempp.totalMandates() < p.totalMandates()) {
                        lastDeltaLostMandate = votesDelta;
                        votesDelta -= deltaChange;
                    } else if (tempp.totalMandates() == p.totalMandates()) {
                        votesDelta += deltaChange;
                    }
                } while(true);

                var tempParties = this.getParties();
                var tempp = tempParties.parties[index];
                tempp.votes -= lastDeltaLostMandate;
                this.calcMandates(tempParties.parties, tempParties.partyConnections);

                p.votesToLoseMandate = lastDeltaLostMandate;

                for (var jindex = 0; jindex < tempParties.parties.length; jindex++) {
                    if (jindex != index && data.parties[jindex].totalMandates() < tempParties.parties[jindex].totalMandates()) {
                        p.partyEarningMandate = data.parties[jindex];
                        break;
                    }
                }
            }

            for (var index = 0; index < data.parties.length; index++) {
                var p = data.parties[index];

                if (!p.aboveBlockPercent)
                    continue;

                var votesDelta = primaryResult.generalMeasure;
                var deltaChange = votesDelta;
                var lastDeltaEarnMandate = 0;

                do {
                    var tempParties = this.getParties();
                    var tempp = tempParties.parties[index];
                    tempp.votes += votesDelta;

                    this.calcMandates(tempParties.parties, tempParties.partyConnections);

                    if (deltaChange < 2)
                        break;

                    deltaChange = Math.floor(deltaChange / 2);

                    if (tempp.totalMandates() > p.totalMandates()) {
                        lastDeltaEarnMandate = votesDelta;
                        votesDelta -= deltaChange;
                    } else if (tempp.totalMandates() == p.totalMandates()) {
                        votesDelta += deltaChange;
                    }
                } while(true);

                var tempParties = this.getParties();
                var tempp = tempParties.parties[index];
                tempp.votes += lastDeltaEarnMandate;
                this.calcMandates(tempParties.parties, tempParties.partyConnections);

                p.missingVotesForOneMandate = lastDeltaEarnMandate;

                for (var jindex = 0; jindex < tempParties.parties.length; jindex++) {
                    if (jindex != index && data.parties[jindex].totalMandates() > tempParties.parties[jindex].totalMandates()) {
                        p.partyLosingMandate = data.parties[jindex];
                        break;
                    }
                }
            }

            return primaryResult;
        };

        partiesView.prototype.calcMandates = function (_parties, _partyConnections) {
            var totalVotes = 0;
            var blockPercent;

            for (var i = 0; i < _parties.length; i++) {
                var p = _parties[i];
                totalVotes += p.votes;
            }

            blockPercent = Math.round(totalVotes * 0.02);
            var totalVotesAboveBlock = 0;

            for (var i = 0; i < _parties.length; i++) {
                var p = _parties[i];
                p.aboveBlockPercent = p.votes >= blockPercent;
                if (p.aboveBlockPercent) {
                    totalVotesAboveBlock += p.votes;
                }
            }

            var generalMeasure = Math.round(totalVotesAboveBlock / 120);
            var totalMandatesByVotes = 0;

            for (var i = 0; i < _parties.length; i++) {
                var p = _parties[i];

                if (p.aboveBlockPercent) {
                    p.mandatesByVotes = Math.floor(p.votes / generalMeasure);
                    totalMandatesByVotes += p.mandatesByVotes;
                }
            }

            var partiesForSpare = [];

            var applicablePartyConnections = [];

            for (var i = 0; i < _partyConnections.length; i++) {
                var pi = _partyConnections[i];

                if (!pi.party1.aboveBlockPercent || !pi.party2.aboveBlockPercent) {
                    pi.party1.connected = false;
                    pi.party2.connected = false;
                } else {
                    pi.mandatesByVotes = pi.party1.mandatesByVotes + pi.party2.mandatesByVotes;
                    partiesForSpare.push(pi);
                    applicablePartyConnections.push(pi);
                }
            }

            _partyConnections = applicablePartyConnections;

            for (var i = 0; i < _parties.length; i++) {
                var p = _parties[i];

                if (!p.connected && p.aboveBlockPercent)
                    partiesForSpare.push(p);
            }

            var spareMandates = 120 - totalMandatesByVotes;

            for (var i = 0; i < spareMandates; i++) {
                var maxPartyMeasure = 0;
                var partyWithMaxMeasure;

                for (var j = 0; j < partiesForSpare.length; j++) {
                    var ip = partiesForSpare[j];

                    var measure = ip.votesMethod() / (ip.mandatesByVotes + ip.spareMandates + 1);

                    if (measure > maxPartyMeasure) {
                        maxPartyMeasure = measure;
                        partyWithMaxMeasure = ip;
                    }
                }
                partyWithMaxMeasure.spareMandates++;
            }

            for (var i = 0; i < _partyConnections.length; i++) {
                var pi = _partyConnections[i];
                var connectionMeasure = Math.floor(pi.votesMethod() / (pi.mandatesByVotes + pi.spareMandates));
                var party1Mandates = Math.floor(pi.party1.votes / connectionMeasure);
                var party2Mandates = Math.floor(pi.party2.votes / connectionMeasure);

                pi.party1.mandatesByConnection = party1Mandates - pi.party1.mandatesByVotes;
                pi.party2.mandatesByConnection = party2Mandates - pi.party2.mandatesByVotes;

                if (party1Mandates + party2Mandates < pi.mandatesByVotes + pi.spareMandates) {
                    var party1Measure = pi.party1.votes / (party1Mandates + 1);
                    var party2Measure = pi.party2.votes / (party2Mandates + 1);

                    if (party1Measure > party2Measure)
                        pi.party1.spareMandates = 1;
                    else
                        pi.party2.spareMandates = 1;
                }

                partiesForSpare.splice(partiesForSpare.indexOf(pi));
            }

            var result = new calcResults();
            result.totalVotes = totalVotes;
            result.blockPercent = blockPercent;
            result.totalVotesAboveBlock = totalVotesAboveBlock;
            result.generalMeasure = generalMeasure;
            result.totalMandatesByVotes = totalMandatesByVotes;
            return result;
        };

        partiesView.prototype.show = function (content) {
            var result = this.calcAll();

            $(content).html("");
            $(content).append("<table><tr>" + "<th>מפלגה</th>" + "<th>קולות</th>" + "<th>מנדטים מקולות</th>" + "<th>מנדטים מהסכמי עודפים</th>" + "<th>מנדטים מעודפים</th>" + "<th>סך הכל מנדטים</th>" + "<th>עלות מנדט</th>" + "<th>קולות לאיבוד מנדט</th>" + "<th>מרויחה מאיבוד מנדט</th>" + "<th>קולות לתוספת מנדט</th>" + "<th>מפסידה מרווח מנדט</th>" + "</tr>");

            var blockPercentLineAdded = false;

            for (var i = 0; i < result.parties.length; i++) {
                var p = result.parties[i];

                if (!p.aboveBlockPercent && !blockPercentLineAdded) {
                    $(content).append("<tr><td>--------</td><td>--------</td><td>-------</td><td>------</td><td>-------</td><td>------</td><td>-------</td><td>------</td><td>-------</td><td>------</td><td>-------</td></tr>");
                    blockPercentLineAdded = true;
                }
                $(content).append("<tr><td>" + p.partyName + "</td><td>" + p.votes + "</td><td>" + p.mandatesByVotes + "</td><td>" + p.mandatesByConnection + "</td><td>" + p.spareMandates + "</td><td>" + p.totalMandates() + "</td><td>" + p.votesPerMandate() + "</td><td>" + p.votesToLoseMandate + "</td><td>" + (p.partyEarningMandate != null ? p.partyEarningMandate.partyName : "---") + "</td><td>" + p.missingVotesForOneMandate + "</td><td>" + (p.partyLosingMandate != null ? p.partyLosingMandate.partyName : "---") + "</td></tr>");
            }

            $(content).append("</table>");
            $(content).append("סך הכל קולות: " + result.totalVotes + "<br/>");
            $(content).append("אחוז החסימה: " + result.blockPercent + "<br/>");
            $(content).append("קולות מעל אחוז החסימה: " + result.totalVotesAboveBlock + "<br/>");
            $(content).append("מודד כללי: " + result.generalMeasure + "<br/>");
            $(content).append("מנדטים לפני חלוקת עודפים: " + result.totalMandatesByVotes + "<br/>");
        };

        partiesView.prototype.getParties = function () {
            var likud = new party("ליכוד ישראל ביתנו", 884631);
            var atid = new party("יש עתיד", 543280);
            var avoda = new party("העבודה", 432083);
            var bait = new party("הבית היהודי", 345935);
            var shas = new party("שס", 331800);
            var yahadut = new party("יהדות התורה", 196038);
            var tnua = new party("התנועה", 189168);
            var meretz = new party("מרצ", 172382);
            var raam = new party("רעמ", 138362);
            var chadash = new party("חדש", 113610);
            var balad = new party("בלד", 96926);
            var kadima = new party("קדימה", 79487);
            var otzma = new party("עוצמה לישראל", 66840);
            var amshalem = new party("עם שלם", 45691);
            var ale = new party("עלה ירוק", 43725);
            var eretz = new party("ארץ חדשה", 28082);
            var koach = new party("כח להשפיע", 28048);
            var israelim = new party("הישראלים", 18970);
            var yerukim = new party("הירוקים והצעירים", 8190);
            var dor = new party("דור בוני הארץ", 6027);
            var chaim = new party("חיים בכבוד", 3639);
            var daam = new party("דעמ", 3550);
            var achim = new party("אחים אנחנו", 2900);
            var tzedek = new party("צדק חברתי", 2877);
            var kulanu = new party("כולנו חברים", 2179);
            var piratim = new party("הפיראטים", 2326);
            var kalkala = new party("כלכלה", 1972);
            var mitkademet = new party("מתקדמת ליברלית", 1568);
            var orr = new party("אור", 1027);
            var brit = new party("ברית עולם", 761);
            var tikva = new party("התקוה לשינוי", 650);
            var moreshet = new party("מורשת אבות", 461);

            var parties = [
                likud,
                atid,
                avoda,
                bait,
                shas,
                yahadut,
                tnua,
                meretz,
                raam,
                chadash,
                balad,
                kadima,
                otzma,
                amshalem,
                ale,
                eretz,
                koach,
                israelim,
                yerukim,
                dor,
                chaim,
                daam,
                achim,
                tzedek,
                kulanu,
                piratim,
                kalkala,
                mitkademet,
                orr,
                brit,
                tikva,
                moreshet
            ];

            var partyConnections = [
                new partyConnection(avoda, atid),
                new partyConnection(chadash, balad),
                new partyConnection(likud, bait),
                new partyConnection(tnua, meretz),
                new partyConnection(shas, yahadut),
                new partyConnection(amshalem, tzedek)];

            return { parties: parties, partyConnections: partyConnections };
        };
        return partiesView;
    })();
    elections.partiesView = partiesView;
})(elections || (elections = {}));

window.onload = function () {
    var el = document.getElementById('content');
    var view = new elections.partiesView();
    view.show(el);
};
//# sourceMappingURL=elections.js.map
