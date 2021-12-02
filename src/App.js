import React from 'react'
import {Switch , Route} from 'react-router-dom'

import Nav from './Compo/Nav.jsx'
import Home from './Compo/Home.jsx'
import Footer from './Compo/Footer.jsx'
import CryptoDetail from './Compo/CryptoDetail.jsx'
import AllCryptoCurrencies from './Compo/AllCryptoCurrencies.jsx'
import Exchanges from './Compo/Exchanges.jsx'
import NewsDetail from './Compo/NewsDetail.jsx'
import { BackTop } from 'antd';

import {
  ArrowUpOutlined
} from '@ant-design/icons';

const App = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 40,
    backgroundColor: '#003a8c',
    color: '#fff',
    textAlign: 'center',
    fontSize: 19,
  };

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

      <BackTop duration={2000} >
      <div style={style}><ArrowUpOutlined /></div>
    </BackTop>
    </>
  )
}

export default App
