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
import passport = require('passport')

import * as dotenv from 'dotenv';
import * as middleware from './middleware';
import {sequelize} from './models';

import {notFound} from './middleware/';
import Router from './router/index';

import _resolvers from './_resolvers';
import _typedefs from './_typedefs';
dotenv.config();

class App {
    constructor () {
        this.app = express();
        
        // apollo 서버
        this.apolloServer();

        // db 접속
        this.dbConnection();


        // 세션 셋팅
        this.setSession();

        // 미들웨어 셋팅
        this.setMiddleWare();

        // 라우팅
        this.getRouting();

        this.status404();

        this.errorHandler();
    }


    apolloServer(){
        export const server: ApolloServer = new ApolloServer({
            typeDefs: _typedefs,
            resolvers: _resolvers,
            playground: true,
            introspection: true,
          });
          server.applyMiddleware({app});
    


    dbConnection(){
        sequelize.sync({force: false})
        .then(() => {
          console.log('데이터베이스 연결 성공');
        })
        .catch((e: Error) => {
          console.error(e);
        });
    

    setMiddleWare (){
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(morgan('dev'));

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        this.app.use(passport.initialize());
        this.app.use(passport.session());
        }



}







app.use('/', express.static('uploads'));

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
app.use(middleware.notFound);
app.use(middleware.errorHandler);


const PORT = 4000;

app.listen({port: PORT}, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);



module.exports = new App().app;