import * as express from 'express';
import * as ctrl from './user.ctrl'

const router = express.Router();


router.get('/find', ctrl.find);


export default router;


  






