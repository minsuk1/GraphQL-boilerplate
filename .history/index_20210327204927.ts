import * as express from "express"
import {Request, Response, NextFunction, application} from 'express'
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet';

dotenv.config()
const app = express();

app.use(hpp())
app.use(helmet())
app.use(morgan('dev'));

app.get('/', (req,res,next)=>{
    res.send('minsuk')
})

app.listen(4000,()=>console.log("start"));