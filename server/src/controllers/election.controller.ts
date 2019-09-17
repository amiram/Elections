import { ElectionDocumentModel } from '../models/election-document.model';
import Election from '../models/election-document.model';

export async function createElection(election: ElectionDocumentModel) {
    const el = new Election(election);
    const created = await el.save();
    return created.toJSON();
}
