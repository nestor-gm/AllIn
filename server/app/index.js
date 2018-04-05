import express           from 'express'
import session           from 'express-session'
import mongoose          from 'mongoose'
import expressGraphQL    from 'express-graphql'
import passport          from 'passport'
import passportConfig    from './services/auth'
import UserModel         from './models/user'
import schema            from './schema/schema'
import cors              from 'cors'




const app = express()
mongoose.connect('mongodb://localhost/allin')

app.use(cors())
app.use(session({resave: true, saveUninitialized: true , secret: 'cryptull'}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/graphql', expressGraphQL({schema, graphiql: true }))

module.exports = app