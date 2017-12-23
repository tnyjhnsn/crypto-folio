const initialState = {
  isLoggedIn: false,
  user: {},
  coinsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth/AUTH_SUCCESS':
    case 'auth/REGISTER_SUCCESS':
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.user
      })
    case 'market/MARKET_SUCCESS': {
      return {
        ...state,
        user: {
          ...state.user,
          portfolio: action.portfolio
        }
      }
    }
    case 'market/COINS_LIST_SUCCESS': {
      return {
        ...state,
        coinsList: [...action.coinsList]
      }
    }
    default:
      return state
  }
}
