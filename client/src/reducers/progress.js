const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'progress/PROGRESS':
      return true
    case 'market/MARKET_SUCCESS':
      return false
    default: return state
  }
}