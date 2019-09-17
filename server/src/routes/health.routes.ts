import * as express from 'express';

export default function routes() {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        res.sendStatus(200);
    });

    return router;
}
