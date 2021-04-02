import merge from 'lodash.merge';
import Example, {queries} from './controllers';

export default merge(
    Example.queries,
    Example.Userresolvers,
);
