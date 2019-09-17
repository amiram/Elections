"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const election_controller_1 = require("../controllers/election.controller");
function default_1() {
    const router = express.Router();
    router.post('/election', async (req, res, next) => {
        const result = await election_controller_1.createElection(req.body);
        res.json(result);
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=election.routes.js.map