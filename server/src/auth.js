const User = require('./models/user')
const passport = require('passport')
const market = require('./market')

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const createUser = ({ _id, username, portfolio }) => (
  { _id, username, portfolio: { coins: portfolio } }
)

module.exports = {
  async login(socket, { username, password }) {
    const query = User.findOne({ username })
    const foundUser = await query.exec()
    if (!foundUser) {
      return socket.emit('action', { type: 'auth/USER_NOT_FOUND', error: 'That user not found' })
    }
    return foundUser.authenticate(password, (error, user) => {
      if (error) {
        return socket.emit('action', { type: 'auth/AUTH_FAIL', error: 'General authentication failure' })
      }
      if (!user) {
        return socket.emit('action', { type: 'auth/PASSWORD_FAIL', error: 'Incorrect password' })
      }
      socket.emit('action', { type: 'auth/AUTH_SUCCESS', user: createUser(user) })
      return market.refreshPrices(socket, user._id)
    })
  },

  async register(socket, { username, password }) {
    const query = User.findOne({ username })
    const foundUser = await query.exec()
    if (foundUser) {
      return socket.emit('action', { type: 'auth/USER_TAKEN', error: 'That username is already taken' })
    }
    const newUser = new User({ username, password })
    return User.register(newUser, password, (err, user) => {
      if (err) {
        return socket.emit('action', { type: 'auth/CREATE_FAIL', error: 'General creation failure' })
      }
      socket.emit('action', { type: 'auth/REGISTER_SUCCESS', user: createUser(user) })
      return market.refreshPrices(socket, user._id)
    })
  },

  async addCoin(socket, { _id, name, amount }) {
    await User.findByIdAndUpdate(
      { _id },
      { $push: { portfolio: { name, amount } } },
      { new: true, upsert: true, setDefaultsOnInsert: true }, (error, user) => {
        if (error) {
          return socket.emit('action', { type: 'auth/ADD_COIN_FAIL', error })
        }
        return market.refreshPrices(socket, user._id)
      }
    )
  },

  async editCoin(socket, { _id, name, amount }) {
    await User.findOneAndUpdate(
      { 'portfolio._id': _id },
      { $set: { 'portfolio.$.name': name, 'portfolio.$.amount': amount } },
      { new: true, upsert: true }, (error, user) => {
        if (error) {
          return socket.emit('action', { type: 'auth/EDIT_COIN_FAIL', error })
        }
        return market.refreshPrices(socket, user._id)
      }
    )
  },

  async deleteCoin(socket, { _id, name }) {
    await User.findByIdAndUpdate(
      { _id },
      { $pull: { portfolio: { name } } },
      { new: true, upsert: true }, (error, user) => {
        if (error) {
          return socket.emit('action', { type: 'auth/DELETE_COIN_FAIL', error })
        }
        return market.refreshPrices(socket, user._id)
      }
    )
  }

}
