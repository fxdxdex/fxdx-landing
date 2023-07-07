import React from "react";
import "../App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import BattleTested from "./BattleTested";
import Derivatives from "./Derivatives";
import Features from "./Features";
// import Exchange from "./components/Exchange";
import Investors from "./Investors";
import Footer from "./Footer";
import {  useState } from "react";
import Trading from "./Trading";
import Roadmap from "./Roadmap";
import Email from "./Email";

const MainApp = () => {

    const [totalVolume, setTotalVolume] = useState(0);
    const [dailyCount, setDailyCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Email />
      <BattleTested dailyCount={dailyCount} totalVolume={totalVolume} />
      <Derivatives />
      <Trading />
      <Features />
      <Roadmap />
      <Investors />
      <Footer />
    </div>
  );
};

export default MainApp;