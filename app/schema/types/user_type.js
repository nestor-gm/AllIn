import graphql       from 'graphl'
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    nBets: { type: GraphQLInt },
    wBets: { type: GraphQLInt }
  }
})

module.exports = UserType