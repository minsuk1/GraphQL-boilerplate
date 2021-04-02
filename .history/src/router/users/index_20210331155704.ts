import * as express from 'express';
import * as ctrl from './user.ctrl';

const router = express.Router();


router.get('/:uid', ctrl.find);

router.post('/user', ctrl.insert);


export default router;


