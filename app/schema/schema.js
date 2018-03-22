import graphql       from 'graphl'
import RootQueryType from '.types/root_query_type'
import mutation      from './mutations'


const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});