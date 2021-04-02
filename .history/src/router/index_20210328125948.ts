import * as express from 'express';
import usres from './users';

const router = express.Router();

router.use('/sample', sampleRouter);

export default router;