import * as express from 'express';
import {Request, Response, NextFunction, application} from 'express';

//apollo
import { ApolloServer } from 'apollo-server-express';

import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as middleware from './middleware';
import {sequelize} from './models';


import Router from './router/index';

import _resolvers from './_resolvers';
import _typedefs from './_typedefs';

dotenv.config();
const app = express();

//graphQL
export const server: ApolloServer = new ApolloServer({
  typeDefs: _typedefs,
  resolvers: _resolvers,
  playground: true,
  introspection: true
});
server.applyMiddleware({ app });

sequelize.sync({force: false})
    .then(() => {
      console.log('데이터베이스 연결 성공');
    })
    .catch((e: Error) => {
      console.error(e);
    });

app.use(hpp());
app.use(helmet());
app.use(morgan('dev'));


app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  secret: 'depro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2000 * 60 * 60, // 지속시간 2시간
  },
  name: 'rnbck',
}));
app.use(passport.initialize());
app.use(passport.session());


// app.get('/', (req,res,next)=>{
//     res.send('minsuk')
// })

app.use(Router);
app.use(middleware.errorHandler);

app.listen(4000, ()=>console.log('start'));
