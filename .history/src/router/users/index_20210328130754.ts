import * as express from 'express';
import * as ctrl from './user.ctrl'

const router = express.Router();


router.get('/user', ctrl.login);


export default router;


  






