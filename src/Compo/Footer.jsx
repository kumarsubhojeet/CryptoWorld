import React from "react";
import { Typography, Avatar } from "antd";
import '../CSS/footer.css'
const { Title } = Typography;


export default function Footer() {
  return (
    <div>
      <div className="footermain">
        <div className="footer_details">
          <Title className="nav_heading" style={{ color: "white" }} level={3}>
            CryptoVerse
          </Title>
          <p  style={{ color: "white" }} > All rights reserverd</p>
        </div>
      </div>
    </div>
  );
}
