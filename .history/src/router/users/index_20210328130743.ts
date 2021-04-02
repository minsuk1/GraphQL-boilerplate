import * as express from 'express';
const router = express.Router();
import * as ctrl from './user.ctrl'




router.get('/user', ctrl.login);


export default router;


  






router.get('/:id', SampleController.getOne);

