import mongoose from 'mongoose'
import bcrypt  from 'bcrypt-nodejs'
import crypto   from 'crypto'


const Schema = mongoose.Schema

const User = new Schema({
  name: { type: String, unique: true, lowercase: true },
  password: { type: String},
  role: {type: Number},
  nBets: Number, 
  wBets: Number,
})

User.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

User.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

module.exports = mongoose.model('User', User)