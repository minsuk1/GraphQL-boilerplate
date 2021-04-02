import * as express from 'express';
import * as ctrl from './user.ctrl';

const router = express.Router();


router.get('/:id', ctrl.find);

router.post('/user', ctrl.insert);


export default router;


