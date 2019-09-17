import * as express from 'express';
import { config } from './config';
import routes from './routes';
import db from './db';

const bodyParser = require('body-parser');

db();
const app = express();

app.use(bodyParser.json());
routes.forEach(r => app.use(r()));

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});
