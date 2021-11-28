import React from "react";
import "../CSS/Cryptocurrency.css";
import { Typography, Avatar, Row, Col, Card } from "antd";
import approx from "approximate-number"
import {Link} from 'react-router-dom'



const { Title } = Typography;


export default function Cryptocurrency({ coins }) {
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
