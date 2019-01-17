import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import socket from 'socket.io-client'
import socketMiddleware from 'redux-socket.io-middleware'

import combinedReducers from '../reducers'

const loggerMiddleware = createLogger()
const io = socket.connect('http://www.tosp.net.au:3008')
// const io = socket.connect('http://localhost:3008')

const enhancer = compose(
  applyMiddleware(loggerMiddleware, socketMiddleware(io))
)

export default initialState => {
  return createStore(combinedReducers, initialState, enhancer)
}
