import merge from 'lodash.merge';
import Example from './controllers';

export default merge(
    Example.queries,
    Example.Userresolvers,
);
