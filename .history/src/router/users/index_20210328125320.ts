import * as express from 'express';
const router = express.Router();

const ctrl = require('./accounts.ctrl');


router.get('/login', ctrl.get_login);


export default router;