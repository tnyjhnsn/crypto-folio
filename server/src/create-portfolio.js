const createPortfolio = (portfolio, prices) => {
  const coins = portfolio.map((coin) => {
    const { _id, name, amount } = coin
    const index = prices.findIndex(price => price.name === name)
    const { AUD, USD, BTC } = prices[index]
    return {
      _id,
      name,
      amount,
      AUD: AUD * amount,
      USD: USD * amount,
      BTC: BTC * amount
    }
  }).sort((a, b) => a.AUD < b.AUD)
  return {
    totalAUD: coins.reduce((a, b) => a + b.AUD, 0),
    totalUSD: coins.reduce((a, b) => a + b.USD, 0),
    totalBTC: coins.reduce((a, b) => a + b.BTC, 0),
    coins
  }
}

module.exports = createPortfolio
