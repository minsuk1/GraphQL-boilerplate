import * as express from 'express';
const router = express.Router();
import ctrl from './user.ctrl'




router.get('/login', ctrl.get_login);


export default router;