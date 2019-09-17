"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    createdOn: { type: Date, default: () => new Date() },
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
exports.default = mongoose.model('Election', schema);
//# sourceMappingURL=election-document.model.js.map