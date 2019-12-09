import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers/index'
import middleware from './middleware/index'

import { BrowserRouter } from 'react-router-dom'
import * as Sentry from '@sentry/browser'
const SENTRY_DNS = process.env.SENTRY_DNS
Sentry.init({
  dsn: SENTRY_DNS,
  maxBreadcrumbs: 50
})

const store = createStore(reducer, middleware)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
