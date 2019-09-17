import * as express from 'express';
import { createElection } from '../controllers/election.controller';

export default function () {
    const router = express.Router();

    router.post('/election',async  (req, res, next) => {
        const result = await createElection(req.body);
        res.json(result);
    });

    return router;
}
