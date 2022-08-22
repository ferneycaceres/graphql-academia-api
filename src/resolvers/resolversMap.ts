import mutation from './mutation';
import query from './query';
import type from './type';

const resolversMap =  {
   ...query,
   ...type,
   ...mutation

}

export default resolversMap;