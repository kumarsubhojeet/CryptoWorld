import React, { useState } from "react";
import "../CSS/nav.css";
import logo from "../img/cryptocurrency.png";
import {Link} from 'react-router-dom'
import { Typography, Avatar } from "antd";

import { AlignRightOutlined , HomeOutlined , FundOutlined , MoneyCollectOutlined , BulbOutlined} from "@ant-design/icons";
import { Drawer, Button } from "antd";

const { Title } = Typography;

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <duv className="nav_main">
        <div className="nav_wrapper">
         <Link to="/">
         <div className="nav_left">
            <Avatar src={logo} size="large" alt="Error" />
            <Title className="nav_heading" style={{ color: "white" }} level={3}>
              CryptoWorld
            </Title>
          </div>
         </Link>

          <div className="nav_right">
          <AlignRightOutlined  className="nav_hanburger" onClick={showDrawer} />
            <Drawer
              title="close"
              placement="right"
              className="drawer"
              onClose={onClose}
              visible={visible}
              width="270"
            >
              <div className="nav-ul">
              <Link onClick={onClose} to="/" className="nav_Links" ><HomeOutlined /><span className="nav_title">Home</span></Link>
              <Link onClick={onClose} to="/AllCryptoCurrencies" className="nav_Links"><FundOutlined /><span className="nav_title">Crypto Currencies</span></Link>
              <Link onClick={onClose} to="/Exchanges" className="nav_Links"><MoneyCollectOutlined  /><span className="nav_title">Exchanges</span></Link>
              <Link onClick={onClose} to="/NewsDetail" className="nav_Links"><BulbOutlined /><span className="nav_title">News</span></Link>
              </div>

            </Drawer>
            
          </div>
        </div>
      </duv>
    </div>
  );
}
