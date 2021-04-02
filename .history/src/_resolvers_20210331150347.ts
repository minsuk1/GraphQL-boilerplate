import merge from 'lodash.merge';
import Example from './controllers';

export default merge(
    Example.commentResolvers, Example.userResolvers,
);
