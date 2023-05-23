import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BattleTested from "./components/BattleTested";
import Derivatives from "./components/Derivatives";
import Algo from "./components/Trading";
import Features from "./components/Features";
// import Exchange from "./components/Exchange";
import Investors from "./components/Investors";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Trading from "./components/Trading";
import BuyAlgo from "./components/BuyAlgo";
import Roadmap from "./components/Roadmap";
import Email from "./components/Email";

function App() {
  const [dailyVolume, setDailyVolume] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [dailyCount, setDailyCount] = useState(0);
  const [algoPrice, setAlgoPrice] = useState(0);
  const [percentChange, setPercentChange] = useState(0);

  let dailyVolumeAPI =
    "https://api.mainnet.fxdx.exchange/api/volumes/daily_and_total/";

  let dailyCountAPI =
    "https://api.mainnet.fxdx.exchange/api/actions/trade_stats/?format=json";

  let algoPriceAPI = "https://api.mainnet.fxdx.exchange/api/prices/algo";

  const getData = () => {};

  useEffect(() => {
    setInterval(() => {
      const requestOne = axios.get(dailyVolumeAPI);
      const requestTwo = axios.get(dailyCountAPI);
      const requestThree = axios.get(algoPriceAPI);
      axios
        .all([requestOne, requestTwo, requestThree], {
          headers: {
            "Cache-Control": "no-cache",
          },
        })
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responseThree = responses[2];
            // use/access the results

            setDailyVolume(responseOne.data && responseOne.data.dailyVolume);
            setTotalVolume(responseOne.data && responseOne.data.totalVolume);
            setDailyCount(responseTwo.data && responseTwo.data.total_trades);
            setAlgoPrice(
              responseThree.data && responseThree.data.current_price
            );
            setPercentChange(
              responseThree.data && responseThree.data.percentage_change
            );
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    }, 15 * 1000);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Email/>
      <BattleTested dailyCount={dailyCount} totalVolume={totalVolume} />
      <Derivatives />
      <Trading />
      <Features />
      <Roadmap />
      <Investors />
      <Footer />
    </div>
  );
}

export default App;
