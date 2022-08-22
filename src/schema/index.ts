import 'graphql-import-node';
import typeDefs from './schema.graphql';
import resolvers from './../resolvers/resolversMap';

const schema = {
    typeDefs,
    resolvers
};

export default schema;
