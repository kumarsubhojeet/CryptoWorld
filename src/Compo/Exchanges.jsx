import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Avatar } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import NumberFormat from "react-number-format";

import "../CSS/Exchanges.css";

const { Title } = Typography;

export default function Exchanges() {
  const [exc, setexc] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY

  var Options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/exchanges",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": API_KEY
    },
  };

  const Exchange = async () => {
    try {
      const res = await axios.request(Options);
      setexc(res.data.data.exchanges);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Exchange();
  }, []);

  return (
    <div>
      <div className="Exchanges_main">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Exchanges</th>
                <th scope="col">Verified</th>
                <th scope="col">Market Share</th>
                <th scope="col">No. of Market</th>
              </tr>
            </thead>
            {exc.map((data) => (
              <tbody>
                <tr>
                  <td>{data.rank}</td>
                  <td>
                    <span>
                      <Avatar size="medium" src={data.iconUrl} alt="Error" />
                    </span>{" "}
                    {data.name}
                  </td>
                  <td>
                    {data.verified === true ? (
                      <CheckOutlined />
                    ) : (
                      <CloseOutlined />
                    )}
                  </td>
                  <td>
                    {" "}
                    <NumberFormat
                      value={data.marketShare}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                  <td>{data.numberOfMarkets}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
