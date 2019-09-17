import { SpareAgreementModel } from './spare-agreement.model';

export interface ResultModel {
    votes: number;
    aboveBlockPercentVotes: number;
    generalMeasure: number;
    seatsBeforeSpare: number;

    spareAgreements: SpareAgreementModel[];
    parties: {
        name: string;
        votes: number;
        seatsByVotes: number;
        seatsBySpareAgreement: number;
        seatsBySpare: number;
        seatCost: number;
        votesToLoseSeat: number;
        partyEarningSeat: string;
        votesToEarnSeat: number;
        partyLosingSeat: string;
    }[];
}
