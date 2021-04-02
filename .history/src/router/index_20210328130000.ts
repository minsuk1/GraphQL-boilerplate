import * as express from 'express';
import users from './users';

const router = express.Router();

router.use('/sample', users);

export default router;