import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from 'reducers'
import middlewares from 'middlewares'

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : (fn => fn),
)(createStore)

export default (initialState) => finalCreateStore(rootReducer, initialState)
