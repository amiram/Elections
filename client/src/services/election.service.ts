import { ElectionModel } from '../../../shared/models/election.model';

export function getElection() {
    return {
        parties: [
            { name: 'ליכוד', votes: 1000000},
            { name: 'איחוד מפלגות הימין', votes: 100000},
            { name: 'הימין החדש', votes: 10000},
            { name: 'העבודה', votes: 20000},
            { name: 'כחול לבן', votes: 900000},
            { name: 'מרצ', votes: 15000},
        ],
        blockPercent: 3.25,
        createdOn: new Date(),
        knesset: 21,
        name: 'כנסת 21 2019',
        spareAgreements: [
            { party1: 'ליכוד', party2: 'איחוד מפלגות הימין'}
        ],
        year: 2019
    } as ElectionModel;
}
