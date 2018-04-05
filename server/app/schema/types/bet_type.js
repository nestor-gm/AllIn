import graphql,  { GraphQLObjectType, GraphQLString} from 'graphql'

const BetType = new GraphQLObjectType({
  name: 'BetType',
  fields: {
    result: { type: GraphQLString }
  }
})

module.exports = BetType