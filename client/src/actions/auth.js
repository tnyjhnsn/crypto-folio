export const register = (credentials) => {
  return {
    type: 'auth/REGISTER',
    meta: { remote: true },
    credentials
  }
}

export const login = (credentials) => {
  return {
    type: 'auth/LOGIN',
    meta: { remote: true },
    credentials
  }
}

export const addCoin = (coinData) => {
  return {
    type: 'auth/ADD_COIN',
    meta: { remote: true },
    coinData
  }
}

export const editCoin = (coinData) => {
  return {
    type: 'auth/EDIT_COIN',
    meta: { remote: true },
    coinData
  }
}

export const deleteCoin = (coinData) => {
  return {
    type: 'auth/DELETE_COIN',
    meta: { remote: true },
    coinData
  }
}
