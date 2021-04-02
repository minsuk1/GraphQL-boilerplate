import * as express from 'express';
import users from './users';

const router = express.Router();

router.use('/find', users);

export default router;