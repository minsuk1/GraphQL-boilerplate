import * as express from 'express';
import {RequestHandler} from 'express';
import User from '../models/user';


const typedefs = gql`
  type Query {
    hello: String!
    users: [user]
  }

  type user {
    id: Int
    nickname: String
    userId: String
    password: String
    createdAt: String
    updatedAt: String
}

`;