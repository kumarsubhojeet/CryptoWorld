import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/CryptoDetail.css";
import { Typography , Col ,Row , Statistic} from "antd";
import {SafetyOutlined,ExclamationCircleOutlined,LineChartOutlined,CloseOutlined,CheckOutlined,MoneyCollectOutlined,BarChartOutlined,RiseOutlined, DollarOutlined , InfoOutlined } from "@ant-design/icons";
import approx from "approximate-number"
import CHat from '../Compo/Chat'

const { Title } = Typography;

export default function CryptoDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [high, sethigh] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY

  var Options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  const Coin = async () => {
    try {
      const res = await axios.request(Options);
      setCoin(res.data.data.coin);
      sethigh(res.data.data.coin.allTimeHigh);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Coin();
  }, []);

  return (
    <div>
      <div className="CryptoDetail_main">
        <div className="heading_CD">
          <Title level={3}>
            {" "}
            {coin.name} (<span>{coin.slug}</span>){" "}
          </Title>
          <Title level={5}>
            {" "}
            {coin.name} live price in US dollars. View value statistics, market
            cap and supply.
          </Title>
        </div>

        <div className="chat">
          <CHat />
        </div>

        <div className="CD_stats">
          <div className="left">
            <Title level={4}>
              {" "}
              {coin.name} <span>Value Statistics</span>{" "}
            </Title>
            <p>An overview showing the stats of {coin.name}</p>

            <div className="CD_left_details">
              <div className="det">
                <div className="det_left">
                  <InfoOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Rank
                </div>

                <div className="det_right"><Title level={5}>{coin.rank}</Title></div>
              </div>

              <div className="det">
                <div className="det_left">
                  <RiseOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  MarketCap
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(coin.marketCap)}
                  />
                </div>
              </div>

              <div className="det">
                <div className="det_left">
                  <BarChartOutlined style={{fontSize:'18px' , paddingRight:'6px'}} />
                  24h Volume
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(coin.volume)}
                   
                  />
                </div>
              </div>

              <div className="det">
                <div className="det_left">
                  <MoneyCollectOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  All-time-high(daily avg.)
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(high.price)}
                   
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="center"></div>

          <div className="right">
          <Title level={4}>
              <span>Other Statistics</span>{" "}
            </Title>
            <p>An overview showing the stats of all crpytocurrencies.</p>

            <div className="CD_left_details">
              <div className="det">
                <div className="det_left">
                  <LineChartOutlined   style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Number Of Markets
                </div>

                <div className="det_right"><Title level={5}>{coin.numberOfMarkets}</Title></div>
              </div>

              <div className="det">
                <div className="det_left">
                  <RiseOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Number Of Exchanges
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(coin.numberOfExchanges)}
                   
                  />
                </div>
              </div>

              <div className="det">
                <div className="det_left">
                  <ExclamationCircleOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Aprroved Supply
                </div>

                <div className="det_right">
                 {coin.approvedSupply === true ? <CheckOutlined /> : <CloseOutlined />}
                </div>
              </div>

              <div className="det">
                <div className="det_left">
                  <SafetyOutlined   style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Total Supply
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(coin.totalSupply)}
                  
                  />
                </div>
              </div>

              <div className="det">
                <div className="det_left">
                  <SafetyOutlined  style={{fontSize:'18px' , paddingRight:'6px'}} />
                  Circulating Supply
                </div>

                <div className="det_right">
                  <Statistic
                    value={approx(coin.circulatingSupply)}
                   
                  />
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="long_text">
        
        <div className="long_left">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">What is {coin.name}?</Title>
          <div dangerouslySetInnerHTML={{ __html: coin.description }} />
        </Row>
        </div>

        <div className="long_center">
            
        </div>
        
       <div className="long_right">
       <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{coin.name} Links</Title>
          {coin.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
       </div>
  
        </div>
      </div>
    </div>
  );
}
