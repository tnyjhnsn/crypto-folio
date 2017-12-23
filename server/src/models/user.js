const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const { Schema } = mongoose

const User = new Schema({
  username: { type: String, required: true },
  portfolio: [
    {
      name: { type: String },
      amount: { type: Number, default: 0 }
    }
  ]
}, {
  versionKey: false
})

User.plugin(passportLocalMongoose)
User.statics.findOrCreate = require('find-or-create')

module.exports = mongoose.model('User', User)
