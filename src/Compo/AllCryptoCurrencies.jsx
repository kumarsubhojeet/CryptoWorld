import React , {useState  , useEffect} from "react";
import "../CSS/Cryptocurrency.css";
import { Typography, Avatar, Row, Col } from "antd";
import approx from "approximate-number"
import {Link} from 'react-router-dom'
import axios from "axios";



const { Title } = Typography;


export default function AllCryptoCurrencies() {

    const [coins , setcoins] = useState([])
    const API_KEY = process.env.REACT_APP_API_KEY
    const Options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins?limit=100',
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': API_KEY
        }
      };
      

    const Coins = async() =>{
        try {
          const res = await axios.request(Options)
          setcoins(res.data.data.coins);
        } catch (error) {
            console.log(error);
        }
    }

      useEffect(() => {
        Coins()
      }, [])
      

  return (
    <div>
      <div className="Cryptocurrency_main">
        <Row gutter={0}>
          {coins.map((coins) => (
            <Col className="gutter-row" span={6} xs={24} md={8}>
             <Link to={`/CryptoDetaiils/${coins.id}`}>
             <div className="card">
                  <div className="card_top">
                  <Avatar src={coins.iconUrl} size="large" alt="Error" />
                  <Title level={4}>{coins.name}</Title>
                  </div>

                  <div className="card_body">
                  <Title level={5}>Rank: {coins.rank}</Title>  
                  <Title level={5}>Price: {approx(coins.price)}</Title>
                  <Title level={5}>Market cap: {approx(coins.marketCap)}</Title>
                  <Title level={5}>Exchanges: {approx(coins.numberOfExchanges)}</Title>
                  </div>
              </div>
             </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
<Col className="gutter-row" span={6} xs={24} md={4}></Col>;
