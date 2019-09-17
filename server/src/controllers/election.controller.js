"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const election_document_model_1 = require("../models/election-document.model");
async function createElection(election) {
    const el = new election_document_model_1.default(election);
    const created = await el.save();
    return created.toJSON();
}
exports.createElection = createElection;
//# sourceMappingURL=election.controller.js.map