export interface SpareAgreementModel {
    party1: string;
    party2: string;
    votes: number;
    seatsByVotes: number;
    spareSeats: number;
    disabled?: boolean;
}
