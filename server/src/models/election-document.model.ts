import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { ElectionModel } from '../../../shared/models/election.model';

export interface ElectionDocumentModel extends ElectionModel, Document {
}

const schema: Schema = new Schema<ElectionDocumentModel>({
    createdOn: {type: Date, default: () => new Date()},
    name: String,
    year: Number,
    knesset: Number,
    parties: [{
        name: String,
        letters: String,
        votes: Number
    }],
    spareAgreements: [{
        party1: String,
        party2: String
    }]
});


export default mongoose.model<ElectionDocumentModel>('Election', schema);
