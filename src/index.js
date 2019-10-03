import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import { Global } from './style'
import { Header, Home, Blogs, Gallery, Footer } from './components'
import { ScrollToTop } from './hooks'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Global />
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/gallery' component={Gallery} />
        <Footer />
      </>
    </BrowserRouter>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
