import React, { Component } from 'react'
import { Provider } from 'react-redux'
import persistedStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Route from './routers/router'
import Root from './components/Root'

export default class App extends Component {
  render() {
    const { store, persistor } = persistedStore()
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <Route />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}
