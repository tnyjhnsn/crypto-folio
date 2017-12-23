const initialState = {
  isError: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'auth/USER_NOT_FOUND':
    case 'auth/AUTH_FAIL':
    case 'auth/PASSWORD_FAIL':
    case 'auth/CREATE_FAIL':
    case 'auth/USER_TAKEN': {
      return Object.assign({}, state, {
        isError: true,
        error: action.error
      })
    }
    case 'auth/AUTH_SUCCESS':
    case 'auth/REGISTER_SUCCESS':
    case 'error/ERROR_CLEARED': {
      return Object.assign({}, initialState)
    }
    default:
      return state
  }
}
