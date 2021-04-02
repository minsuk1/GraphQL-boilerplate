import * as express from 'express';
const router = express.Router();
import ctrl from './user.ctrl'




router.get('/user', ctrl.get_login);


export default router;


  
import express from 'express';
import * as SampleController from './SampleController';

const router = new express.Router();

router.post('/', SampleController.createOne);

router.get('/:id', SampleController.getOne);

export default router;