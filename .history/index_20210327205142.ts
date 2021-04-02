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


app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET!,
  cookie: {
    httpOnly: true,
    secure: false, // https를 쓸 때 true
    domain: prod ? '.nodebird.com' : undefined,
  },
  name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req,res,next)=>{
    res.send('minsuk')
})

app.listen(4000,()=>console.log("start"));