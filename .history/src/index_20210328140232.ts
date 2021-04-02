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
import * as middleware from "./middleware";
import { sequelize } from './models';


import v1Router from './router/index';

dotenv.config()
const app = express();

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((e: Error) => {
    console.error(e);
  });

app.use(hpp())
app.use(helmet())
app.use(morgan('dev'));


app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  secret: 'depro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2000 * 60 * 60 //지속시간 2시간
  },
  name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session());


// app.get('/', (req,res,next)=>{
//     res.send('minsuk')
// })

app.use(v1Router);
app.use(middlewares.notFoundCreator);

app.listen(4000,()=>console.log("start"));