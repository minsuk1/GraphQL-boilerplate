import * as express from 'express';
import usres from './users';

const router = express.Router();

router.use('/sample', usres);

export default router;