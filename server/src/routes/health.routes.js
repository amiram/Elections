"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
function routes() {
    const router = express.Router();
    router.get('/', (req, res, next) => {
        res.sendStatus(200);
    });
    return router;
}
exports.default = routes;
//# sourceMappingURL=health.routes.js.map