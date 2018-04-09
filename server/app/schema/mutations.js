import graphql,  { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import UserType                                                   from './types/user_type'
import AuthService                                                from '../services/auth'
import BetService                                                 from '../services/wolfram'
import BetType                                                    from './types//bet_type'
import AuthUserType                                                   from './types//auth_user_type'



const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLInt },
        nBets: { type: GraphQLInt },
        wBets: { type: GraphQLInt },
      },
      resolve(parentValue, { name, password, role }, context) {
        return AuthService.signup({ name, password, role,  context })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, context) {
        const { user } = context
        context.request.logout()
        return user
      }
    },
    login: {
      type: AuthUserType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { name, password }, context) {
        return AuthService.login({ name, password, context })
      }
    },
    getBet: {
      type: BetType, 
      args: {}, 
      resolve(parentValue, args, context) {
       return BetService.coinFlip()
      }
    },
    updateBets: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        nBets: { type: GraphQLInt },
        wBets: { type: GraphQLInt }
      },
      resolve(parentValue, {name, nBets, wBets}, context) {
        return AuthService.update({ name, nBets, wBets, context })
      }
    }
  }
})

module.exports = mutation