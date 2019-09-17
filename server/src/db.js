"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("./config");
// import { MongoMemoryServer } from 'mongodb-memory-server';
async function default_1() {
    // const mongoServer = new MongoMemoryServer({
    //     instance: {
    //         port: 27017,
    //         dbName: 'elections',
    //         dbPath: './data'
    //     },
    //     debug: true
    // });
    //
    // const mongoUri = await mongoServer.getConnectionString();
    const mongooseOpts = {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useNewUrlParser: true
    };
    mongoose.connect(config_1.config.db, mongooseOpts);
    mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
            mongoose.connect(config_1.config.db, mongooseOpts);
        }
        console.log(e);
    });
    mongoose.connection.once('open', () => {
        console.log(`MongoDB successfully connected to ${config_1.config.db}`);
    });
    // process.on('exit', () => mongoServer.stop());
}
exports.default = default_1;
//# sourceMappingURL=db.js.map