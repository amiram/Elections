"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const routes_1 = require("./routes");
const db_1 = require("./db");
const bodyParser = require('body-parser');
db_1.default();
const app = express();
app.use(bodyParser.json());
routes_1.default.forEach(r => app.use(r()));
app.listen(config_1.config.port, () => {
    console.log(`Server is listening on port ${config_1.config.port}`);
});
//# sourceMappingURL=app.js.map