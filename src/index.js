import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import { Global } from './style'
import { Header, Home, Blogs, Gallery, About, Footer } from './components'
import { ScrollToTop } from './hooks'

const App = () => {
  let [hide, setHide] = useState(localStorage.getItem('hide') === 'true')
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Global />
        <Header hide={hide}/>
        <Route exact path='/' component={Home} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/gallery' component={() => <Gallery setHide={setHide} hide={hide}/>} />
        <Route path='/about' component={About} />
        <Footer hide={hide}/>
      </>
    </BrowserRouter>
  )
}







ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
