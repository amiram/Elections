export interface ElectionModel {
    createdOn: Date;
    name: string;
    year: number;
    knesset: number;
    blockPercent: number;
    totalSeats: number;

    parties: {
        name: string;
        letters?: string;
        votes: number;
    }[];
    spareAgreements: {
        party1: string;
        party2: string;
        disabled?: boolean;
    }[];
}
