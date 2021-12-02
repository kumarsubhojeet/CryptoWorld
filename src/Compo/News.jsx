import React from "react";
import { Row, Col, Card, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import "../CSS/News.css";

const { Title } = Typography;

export default function News({ news }) {
  const { Meta } = Card;

  return (
    <div>
      <div className="news_main">
        <Row gutter={0}>
          {news.map((coins) => (
            <Col className="gutter" xs={24} md={6}>
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
