import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import middlewares from 'middlewares'
import sagas from 'sagas'

const Root = require('./components/Root')
const store = configureStore()
const [sagaMiddleware] = middlewares

sagaMiddleware.run(sagas)

render(
  <Root store={store} />,
  document.getElementById('root')
)
