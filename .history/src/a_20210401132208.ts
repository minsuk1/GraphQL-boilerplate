import {Request, Response} from 'express';
import express = require('express');


// db
import {sequelize} from './models';

// middleware
import * as middleware from './middleware';
import hpp = require('hpp')
import helmet = require('helmet')
import morgan = require('morgan')
import cors = require('cors')

// cookie, session
import cookieParser = require('cookie-parser')
import session = require('express-session')

// passport
import passport = require('passport')
import * as dotenv from 'dotenv';

// router
import Router from './router/index';

// apollo
import {ApolloServer} from 'apollo-server-express';
import _resolvers from './_resolvers';
import _typedefs from './_typedefs';


dotenv.config();


export const server: ApolloServer = new ApolloServer({
  typeDefs: _typedefs,
  resolvers: _resolvers,
  playground: true,
  introspection: true,
  });


class App {
    public app : express.Application;
    constructor() {
        this.app = express();

        // apollo
        this.apollo(app);

        // db 접속
        this.dbConnection();

        // 세션 셋팅
        this.setSession();

        // 미들웨어 셋팅
        this.setMiddleWare();

        // 정적 디렉토리 추가
        this.setStatic();

        // 라우팅
        this.getRouting();

        this.status404();

        this.errorHandler();
      }

      apollo(app : express.Application) {
        server.applyMiddleware({this.app});
      }


      dbConnection() {
        sequelize.sync({force: false})
        .then(() => {
        console.log('데이터베이스 연결 성공');
        })
        .catch((e: Error) => {
        console.error(e);
        });
      }

      setSession() {
        this.app.use(cookieParser(process.env.COOKIE_SECRET));
        this.app.use(session({
            secret: 'depro',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 2000 * 60 * 60, // 지속시간 2시간
            },
            name: 'rnbck',
            }));
      }


      setMiddleWare() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(hpp());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
      }


      setStatic() {
        this.app.use('/', express.static('uploads'));
      }

      getRouting() {
        this.app.use(Router);
      }

      status404() {
        this.app.use(middleware.notFound);
      }

      errorHandler() {
          this.app.use(middleware.errorHandler);
      }
}


const app = new App().app;


const PORT = 4000;

app.listen({port: PORT}, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);

