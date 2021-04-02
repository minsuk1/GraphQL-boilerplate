import {Request, Response} from 'express';
import express = require('express');

// apollo
import {ApolloServer} from 'apollo-server-express';

import hpp = require('hpp')
import helmet = require('helmet')
import morgan = require('morgan')
import cors = require('cors')
import cookieParser = require('cookie-parser')
import session = require('express-session')


import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as middleware from './middleware';
import {sequelize} from './models';


import Router from './router/index';

import _resolvers from './_resolvers';
import _typedefs from './_typedefs';

dotenv.config();
const app = express();

// graphQL
export const server: ApolloServer = new ApolloServer({
  typeDefs: _typedefs,
  resolvers: _resolvers,
  playground: true,
  introspection: true,
});
server.applyMiddleware({app});


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
app.use(session({
  secret: 'depro',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2000 * 60 * 60, // 지속시간 2시간
  },
  name: 'rnbck',
}));



// app.get('/', (req,res,next)=>{
//     res.send('minsuk')
// })

app.use(Router);
app.use(middleware.errorHandler);


const PORT = 4000;

app.listen({port: PORT}, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
