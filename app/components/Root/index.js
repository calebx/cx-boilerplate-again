import React from 'react'
import { Provider } from 'react-redux'
import Page from 'components/page'

module.exports = ({ store }) => (
  <Provider store={store} >
    <Page />
  </Provider>
)
