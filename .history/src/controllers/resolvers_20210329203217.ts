import * as express from 'express';
import {RequestHandler} from 'express';
import User from '../models/user';

// const resolvers = {
//   Query: {
//     finduser: async (parent: any, _args: any, context: any) => {
//       const user = await User.findAll({});
//       return user;
//     },
//   },
// };


const resolvers = {
  Query: {
    finduser: async (parent: any, _args: any, context: any) => {
     try {
        const user = await User.findAll({});
        return user;
     } catch (err) {
        next(err);
     }
    },
  },
};

export default resolvers;


