import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,

} from "react-router-dom";
import Redirect from "./components/Redirect";
import MainApp from "./components/MainApp";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/buy"
          exact
          element={<Redirect />}
        />
        <Route path="*" element={<MainApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//http://localhost:3000/liquidity