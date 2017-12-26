const market = require('./market')
const auth = require('./auth')

const connections = {
  number: 0
}

module.exports = (io) => {
  io.on('connection', (socket) => {
    connections.number += 1
    socket.on('action', (action) => {
      switch (action.type) {
        case 'auth/REGISTER':
          return auth.register(socket, action.credentials)
        case 'auth/LOGIN':
          return auth.login(socket, action.credentials)
        case 'auth/ADD_COIN':
          return auth.addCoin(socket, action.coinData)
        case 'auth/EDIT_COIN':
          return auth.editCoin(socket, action.coinData)
        case 'auth/DELETE_COIN':
          return auth.deleteCoin(socket, action.coinData)
        case 'market/REFRESH_PRICES':
          return market.refreshPrices(socket, action._id)
        case 'market/REFRESH_COINS_LIST':
          return market.refreshCoinsList(socket)
        default:
          break
      }
      return 'OK'
    })
    socket.on('disconnect', () => {
      connections.number -= 1
    })
  })
}
