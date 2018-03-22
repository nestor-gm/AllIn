import express          from 'express'
import session          from 'express-session'
import mongoose         from 'mongoose'
import expressGraphQL   from 'express-graphql'
import passport         from 'passport'
import passportConfig   from './services/auth'
import UserModel        from './models/user'
import schema           from './schema/schema'

const app = express()
mongoose.connect('mongodb://localhost/allin')

app.use(session({secret: 'cryptull', resave: true, saveUninitialized: true }))
app.use('/graphql', expressGraphQL({schema, graphiql: true }))
app.use(passport.initialize())
app.use(passport.session())



module.exports = app