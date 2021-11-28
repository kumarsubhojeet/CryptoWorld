import React from 'react'
import {Switch , Route} from 'react-router-dom'

import Nav from './Compo/Nav.jsx'
import Home from './Compo/Home.jsx'
import Footer from './Compo/Footer.jsx'
import CryptoDetail from './Compo/CryptoDetail.jsx'
import AllCryptoCurrencies from './Compo/AllCryptoCurrencies.jsx'
import Exchanges from './Compo/Exchanges.jsx'
import NewsDetail from './Compo/NewsDetail.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/Exchanges">
          <Exchanges/>
        </Route>


        <Route exact path="/AllCryptoCurrencies">
          <AllCryptoCurrencies/>
        </Route>

        <Route exact path="/NewsDetail">
          <NewsDetail/>
        </Route>

        <Route path='/CryptoDetaiils/:id' children={<CryptoDetail />}></Route>


      </Switch>
      <Footer />
    </>
  )
}

export default App
