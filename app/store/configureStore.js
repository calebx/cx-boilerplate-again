import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from 'reducers'
import middlewares from 'middlewares'

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : fn => fn,
)(createStore)

export default (initialState) => {
  const store = finalCreateStore(rootReducer, initialState)
  return store
}
