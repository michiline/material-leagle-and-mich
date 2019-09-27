import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import { Global } from './style'
import { Header, Home, Footer } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Global />
        <Header />
        <Route exact path='/' component={Home} />
        <Footer />
      </>
    </BrowserRouter>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
