import React , {useState  , useEffect} from "react";
import "../CSS/Home.css";
import axios from "axios";
import {Link} from 'react-router-dom'
import CryptoCurrency from '../Compo/Cryptocurrency'
import { Typography, Row, Col , Avatar } from "antd";
import Newss from '../Compo/News'
import "../CSS/News.css";

const { Title } = Typography;

export default function NewsDetail() {
    const [news , setnews] = useState([])
    const NEWS_KEY = process.env.REACT_APP_NEWS_KEY
  const News = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: 'Crypto' ,count: '50', safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': NEWS_KEY
    }
  };
    

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
   
    NAPI()
  }, [])
  
 

  return (
    <div>
      <div className="news_main">
        <Row gutter={0}>
          {news.map((coins) => (
            <Col className="gutter" span={6} xs={24} md={8}>
             <a href={coins.url} target="_blank" rel="noreferrer">
             <div className="card_news">
                <div className="card_top_news">
                  <div className="card_top_news_left">
                    <Title level={2}>{coins.name}</Title>
                  </div>
                  <div className="card_top_news_right">
                    <img
                      className="News_img"
                      src={coins?.image?.thumbnail?.contentUrl }
                      alt="error"
                    />
                  </div>
                </div>

                <div className="card_detail_news">
                  <p className="news_desc">{coins.description}</p>
                </div>

                <div className="news_about">
                 <Avatar size="medium" src={coins.provider[0]?.image?.thumbnail?.contentUrl} alt="Error" /> 
                  <h6>{coins.provider[0]?.name}</h6>
                </div>
              </div>
             </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
// src={}
