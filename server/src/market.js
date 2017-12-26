const axios = require('axios')
const User = require('./models/user')
const createPortfolio = require('./create-portfolio')

module.exports = {
  async refreshPrices(socket, _id) {
    const query = User.findById({ _id })
    const user = await query.exec()
    if (!user) {
      return socket.emit('action', { type: 'market/USER_NOT_FOUND', error: 'That user not found' })
    }
    const fsyms = user.portfolio.map(coin => coin.name)
    const prices = await axios({
      url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fsyms}&tsyms=BTC,USD,AUD`,
      method: 'get'
    })
    const coins = Object.entries(prices.data).map((price) => {
      const { AUD, USD, BTC } = price[1]
      return {
        name: price[0],
        AUD,
        USD,
        BTC
      }
    })
    const portfolio = createPortfolio(user.portfolio, coins)
    return socket.emit('action', { type: 'market/MARKET_SUCCESS', portfolio })
  },

  async refreshCoinsList(socket) {
    const coins = await axios({
      url: 'https://min-api.cryptocompare.com/data/all/coinlist',
      method: 'get'
    })
    const coinsList = Object.entries(coins.data.Data).map((coin) => {
      const { Symbol, CoinName, ImageUrl } = coin[1]
      return {
        symbol: Symbol,
        name: CoinName,
        imageUrl: ImageUrl
      }
    })
    return socket.emit(
      'action',
      {
        type: 'market/COINS_LIST_SUCCESS',
        coinsList: coinsList.sort((a, b) => {
          const nA = a.name.toLowerCase()
          const nB = b.name.toLowerCase()
          if (nA < nB) return -1
          if (nA > nB) return 1
          return 0
        })
      }
    )
  }
}
