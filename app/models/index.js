// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blogs } = initSchema(schema);

export {
  Blogs
};