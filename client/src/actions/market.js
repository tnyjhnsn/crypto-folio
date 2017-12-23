export const refreshPrices = (_id) => {
  return {
    type: 'market/REFRESH_PRICES',
    meta: { remote: true },
    _id
  }
}

export const refreshCoinsList = () => {
  return {
    type: 'market/REFRESH_COINS_LIST',
    meta: { remote: true }
  }
}
