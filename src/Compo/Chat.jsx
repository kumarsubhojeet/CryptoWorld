import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useParams } from "react-router-dom";
import approx from "approximate-number";
import { Select } from "antd";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const { Option } = Select;
const time = ["24h", "7d", "30d", "1y", "2y", "5y"];

export default function Chat() {
  const { id } = useParams();

  const [chat, setchat] = useState([]);
  const [timeperiod, setTimeperiod] = useState("7d");

  var Options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}/history/${timeperiod}`,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8",
    },
  };

  const ChATAPI = async () => {
    try {
      const res = await axios.request(Options);
      setchat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ChATAPI();
  }, [timeperiod]);

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < chat?.data?.history?.length; i += 1) {
    coinPrice.push(chat?.data?.history[i].price);
  }

  for (let i = 0; i < chat?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(chat?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <Line options={options} data={data} />
    </div>
  );
}
