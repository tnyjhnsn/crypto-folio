import { combineReducers } from 'redux'

import auth from './auth'
import error from './error'
import progress from './progress'

const reducers = {
  auth,
  error,
  progress
}

export default combineReducers(reducers)
