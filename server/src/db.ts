import * as mongoose from 'mongoose';
import { config } from './config';
// import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function () {
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

    mongoose.connect(config.db, mongooseOpts);

    mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
            mongoose.connect(config.db, mongooseOpts);
        }
        console.log(e);
    });

    mongoose.connection.once('open', () => {
        console.log(`MongoDB successfully connected to ${config.db}`);
    });

    // process.on('exit', () => mongoServer.stop());
}
