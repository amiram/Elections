import { ResultModel } from '../../../shared/models/result.model';
import { ElectionModel } from '../../../shared/models/election.model';

export function getResult(election: ElectionModel) {
    const totalVotes = election.parties.reduce((acc, p) => acc + p.votes, 0);
    console.log('total votes', totalVotes);

    const aboveBlockPercentVotes = Math.round(totalVotes * (election.blockPercent / 100));
    const totalVotesAboveBlockPercent = election.parties.reduce((acc, p) => acc + (p.votes >= aboveBlockPercentVotes ? p.votes : 0), 0);
    const generalMeasure = Math.round(totalVotesAboveBlockPercent / election.totalSeats);
    // const totalMandatesByVotes =

    return {
        votes: election.parties.reduce((acc, p) => acc + p.votes, 0),
        spareAgreements: [
            {
                party1: 'ליכוד',
                party2: 'איחוד מפלגות הימין',
                votes: election.parties.find(p => p.name === 'ליכוד').votes + election.parties.find(p => p.name === 'איחוד מפלגות הימין').votes,
                spareSeats: 1,
                seatsByVotes: 40,
                disabled: true
            }
        ],
        seatsBeforeSpare: 115,
        generalMeasure: 10000,
        aboveBlockPercentVotes: 2000000,
        parties: [
            {name: 'ליכוד', votes: 1000000},
            {name: 'איחוד מפלגות הימין', votes: 100000},
            {name: 'הימין החדש', votes: 10000},
            {name: 'העבודה', votes: 20000},
            {name: 'כחול לבן', votes: 900000},
            {name: 'מרצ', votes: 15000},
        ]
    } as ResultModel;
}
