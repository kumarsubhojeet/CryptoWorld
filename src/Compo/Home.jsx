import React , {useState  , useEffect} from "react";
import "../CSS/Home.css";
import axios from "axios";
import {Link} from 'react-router-dom'
import CryptoCurrency from '../Compo/Cryptocurrency'
import { Typography, Row, Col, Statistic } from "antd";
import Newss from '../Compo/News'
import approx from "approximate-number"

const { Title } = Typography;


export default function Home() {

    const [stats , setstats] = useState([])
    const [coins , setcoins] = useState([])
    const [news , setnews] = useState([])

    const NEWS_KEY = process.env.REACT_APP_NEWS_KEY
    const API_KEY = process.env.REACT_APP_API_KEY

    const Options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins?limit=10',
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': API_KEY
        }
      };

      
    const News = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {q: 'Crypto', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': NEWS_KEY
      }
    };
      
    
      const Stats = async() =>{
          try {
            const res = await axios.request(Options)
            setstats(res.data.data.stats);
          } catch (error) {
              console.log(error);
          }
      }

      const Coins = async() =>{
        try {
          const res = await axios.request(Options)
          setcoins(res.data.data.coins);
        } catch (error) {
            console.log(error);
        }
    }


    const NAPI = async() =>{
      try {
        const res = await axios.request(News)
        setnews(res.data.value);
        console.log(res.data.value);
      } catch (error) {
          console.log(error);
      }
  }

      useEffect(() => {
        Stats()
        Coins()
        NAPI()
      }, [])
      
     

  return (
    <div>
      <div className="home_main">
        <Title level={2}>Global Crypto Stats</Title>

        <div className="stats">
          <Row gutter={0}>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={approx(stats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={approx(stats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={approx(stats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={approx(stats.totalMarkets)} /></Col>
          </Row>
        </div>

        <div className="home_heading_container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={4} className="show-more"><Link to="/AllCryptoCurrencies">Show more</Link></Title>
      </div>

      <CryptoCurrency  coins={coins} />

      <Title level={4} className="show-more2"><Link to="/AllCryptoCurrencies">Show more</Link></Title>
      
      
      <div className="home_heading_container">
        <Title level={2} className="home-title">Cryptos World News</Title>
        <Title level={4} className="show-more"><Link to="/AllCryptoCurrencies">Show more</Link></Title>
      </div>

      <Newss  news={news}  />

      <Title level={4} className="show-more2"><Link to="/NewsDetail">Show more</Link></Title>
      
      </div>

      


    </div>
  );
}
