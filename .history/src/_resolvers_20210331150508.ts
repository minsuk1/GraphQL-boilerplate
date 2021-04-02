import merge from 'lodash.merge';
import Example from './Schema';

export default merge(
    Example.commentResolvers, Example.userResolvers,
);
