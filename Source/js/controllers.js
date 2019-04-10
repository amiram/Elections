var electionsApp = angular.module('electionsApp', []);

var log = function (text) {
    console.log(text);
};

var party = (function () {

    function party(_name, _votes) {
        this.partyName = _name;
        this.votes = _votes;
        this.connected = false;
        this.reset();
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

    party.prototype.reset = function () {
        this.mandatesByVotes = 0;
        this.spareMandates = 0;
        this.mandatesByConnection = 0;
        this.votesToLoseMandate = 0;
        this.missingVotesForOneMandate = 0;
        this.partyLosingMandate = {};
        this.partyEarningMandate = {};
    };

    party.prototype.clone = function () {
        return new party(this.partyName, this.votes);
    };

    return party;
})();

var partyConnection = (function () {
    function partyConnection(_party1, _party2) {
        this.party1 = _party1;
        this.party2 = _party2;
        this.party1.connected = true;
        this.party2.connected = true;
        this.partyName = _party1.partyName + " - " + _party2.partyName;
        this.reset();
    }
    partyConnection.prototype.votesMethod = function () {
        return this.party1.votes + this.party2.votes;
    };

    partyConnection.prototype.reset = function () {
        this.mandatesByVotes = 0;
        this.spareMandates = 0;
    };
    return partyConnection;
})();

var calcMandates = function (_parties, _partyConnections) {
    var totalVotes = 0;
    var blockPercent;

    for (var i = 0; i < _parties.length; i++) {
        var p = _parties[i];
        totalVotes += p.votes;
    }

    log("Total votes: " + totalVotes);

    blockPercent = Math.round(totalVotes * percent);
    log("Block percent: " + blockPercent + " according to percent of " + (percent * 100));

    var totalVotesAboveBlock = 0;

    for (var i = 0; i < _parties.length; i++) {
        var p = _parties[i];
        p.aboveBlockPercent = p.votes >= blockPercent;
        if (p.aboveBlockPercent) {
            totalVotesAboveBlock += p.votes;
            log("Party " + p.partyName + " above block percent with " + p.votes + " votes");
        }
        else {
            log("Party " + p.partyName + " below block percent with " + p.votes + " votes");
        }
    }

    log("Total votes above block percent: " + totalVotesAboveBlock);

    var generalMeasure = Math.round(totalVotesAboveBlock / 120);
    log("General measure: " + generalMeasure);

    var totalMandatesByVotes = 0;

    for (var i = 0; i < _parties.length; i++) {
        var p = _parties[i];

        if (p.aboveBlockPercent) {
            p.mandatesByVotes = Math.floor(p.votes / generalMeasure);
            totalMandatesByVotes += p.mandatesByVotes;
        }
    }

    log("Total mandates by votes: " + totalMandatesByVotes);

    var partiesForSpare = [];

    var applicablePartyConnections = [];

    for (var i = 0; i < _partyConnections.length; i++) {
        var pi = _partyConnections[i];

        if (!pi.party1.aboveBlockPercent || !pi.party2.aboveBlockPercent) {
            pi.party1.connected = false;
            pi.party2.connected = false;
            log("Connection between " + pi.party1.partyName + " and " + pi.party2.partyName + " is not valid");
        } else {
            pi.mandatesByVotes = pi.party1.mandatesByVotes + pi.party2.mandatesByVotes;
            partiesForSpare.push(pi);
            applicablePartyConnections.push(pi);
            log("Connection between " + pi.party1.partyName + " and " + pi.party2.partyName + " is valid");
        }
    }

    _partyConnections = applicablePartyConnections;

    for (var i = 0; i < _parties.length; i++) {
        var p = _parties[i];

        if (!p.connected && p.aboveBlockPercent)
            partiesForSpare.push(p);
    }

    var spareMandates = 120 - totalMandatesByVotes;

    log("Total spare mandates: " + spareMandates);

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
        log("Party " + partyWithMaxMeasure.partyName + " got a spare mandate. Measure: " + maxPartyMeasure);
    }

    for (var i = 0; i < _partyConnections.length; i++) {
        var pi = _partyConnections[i];
        if (pi.spareMandates == 0)
            continue;

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

    var result = {};
    result.totalVotes = totalVotes;
    result.blockPercent = blockPercent;
    result.totalVotesAboveBlock = totalVotesAboveBlock;
    result.generalMeasure = generalMeasure;
    result.totalMandatesByVotes = totalMandatesByVotes;
    return result;
};

var cloneParties = function (parties, partyConnections) {

    var clonedParties = [];

    parties.forEach(function (party) { clonedParties.push(party.clone()); });

    var clonedPartyConnections = [];

    partyConnections.forEach(function (pc) {
        clonedPartyConnections.push(
            new partyConnection(
            $.grep(clonedParties, function (p) { return p.partyName == pc.party1.partyName; })[0],
            $.grep(clonedParties, function (p) { return p.partyName == pc.party2.partyName; })[0]));
    });

    return { parties: clonedParties, partyConnections: clonedPartyConnections };
};

var calcAll = function ($scope) {

    $scope.parties.forEach(function (party) { party.reset(); });
    $scope.partyConnections.forEach(function (pc) { pc.reset(); });

    var primaryResult = calcMandates($scope.parties, $scope.partyConnections);
    primaryResult.parties = $scope.parties;

    for (var index = 0; index < $scope.parties.length; index++) {
        var p = $scope.parties[index];

        if (!p.aboveBlockPercent)
            continue;

        var votesDelta = primaryResult.generalMeasure;
        var deltaChange = votesDelta;
        var lastDeltaLostMandate = 0;

        do {
            var tempParties = cloneParties($scope.parties, $scope.partyConnections);
            var tempp = tempParties.parties[index];
            tempp.votes -= votesDelta;

            calcMandates(tempParties.parties, tempParties.partyConnections);

            if (deltaChange < 2)
                break;

            deltaChange = Math.floor(deltaChange / 2);

            if (tempp.totalMandates() < p.totalMandates()) {
                lastDeltaLostMandate = votesDelta;
                votesDelta -= deltaChange;
            } else if (tempp.totalMandates() == p.totalMandates()) {
                votesDelta += deltaChange;
            }
        } while (true);

        var tempParties = cloneParties($scope.parties, $scope.partyConnections);
        var tempp = tempParties.parties[index];
        tempp.votes -= lastDeltaLostMandate;
        calcMandates(tempParties.parties, tempParties.partyConnections);

        p.votesToLoseMandate = lastDeltaLostMandate;

        for (var jindex = 0; jindex < tempParties.parties.length; jindex++) {
            if (jindex != index && $scope.parties[jindex].totalMandates() < tempParties.parties[jindex].totalMandates()) {
                p.partyEarningMandate = $scope.parties[jindex];
                break;
            }
        }
    }

    for (var index = 0; index < $scope.parties.length; index++) {
        var p = $scope.parties[index];

        if (!p.aboveBlockPercent)
            continue;

        var votesDelta = primaryResult.generalMeasure;
        var deltaChange = votesDelta;
        var lastDeltaEarnMandate = 0;

        do {
            var tempParties = cloneParties($scope.parties, $scope.partyConnections);
            var tempp = tempParties.parties[index];
            tempp.votes += votesDelta;

            calcMandates(tempParties.parties, tempParties.partyConnections);

            if (deltaChange < 2)
                break;

            deltaChange = Math.floor(deltaChange / 2);

            if (tempp.totalMandates() > p.totalMandates()) {
                lastDeltaEarnMandate = votesDelta;
                votesDelta -= deltaChange;
            } else if (tempp.totalMandates() == p.totalMandates()) {
                votesDelta += deltaChange;
            }
        } while (true);

        var tempParties = cloneParties($scope.parties, $scope.partyConnections);
        var tempp = tempParties.parties[index];
        tempp.votes += lastDeltaEarnMandate;
        calcMandates(tempParties.parties, tempParties.partyConnections);

        p.missingVotesForOneMandate = lastDeltaEarnMandate;

        for (var jindex = 0; jindex < tempParties.parties.length; jindex++) {
            if (jindex != index && $scope.parties[jindex].totalMandates() > tempParties.parties[jindex].totalMandates()) {
                p.partyLosingMandate = $scope.parties[jindex];
                break;
            }
        }
    }

    primaryResult.totalMandates = 0;
    primaryResult.parties.forEach(function (party) { primaryResult.totalMandates += party.totalMandates(); });

    return primaryResult;
};

electionsApp.controller('ElectionsCtrl', function ($scope) {

    var data = getParties();
    $scope.parties = data.parties;
    $scope.partyConnections = data.partyConnections;
    $scope.calcResults = calcAll($scope);

    $scope.calcAll = function () {
        $scope.calcResults = calcAll($scope);
    };

    $(function () {
        $('td').hover(function () {
            var text = $(this).text();
            $(this).closest('table').find('td').each(function () {
                var thisText = $(this).text();
                $(this).toggleClass('warning', text == thisText);
            });
        });
    });
});
