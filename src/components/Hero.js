import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <h2>
         <span className="green-gradient"> 0-Trading Fee</span><br></br>
          <br></br> Perpetual Futures
          <br></br> Decentralized Exchange
        </h2>
        <p className="section-paragraph">
          FXDX aims to build derivatives products by bringing together all the
          liquidity sources across multiple blockchains into a single platform,
          enabling unlimited liquidity and providing best trade execution at
          fastest speed and lowest cost.
        </p>
        <div className="hero-social hero-row">
          <a href="https://twitter.com/fxdxdex" target="_blank">
            <img src="/twitter.svg" height={55} width={55} />
          </a>
          <a href="https://t.me/fxdxdex" target="_blank">
            <img src="/telegram.svg" height={55} width={55} />
          </a>
          <a href="https://discord.gg/pp8xW24pxb" target="_blank">
            <img src="/discord.svg" height={55} width={55} />
          </a>
          <a href="https://t.me/fxdxannouncement" target="_blank">
            <img src="/telegram.svg" height={55} width={55} />
          </a>
          <a href="https://github.com/fxdxdex" target="_blank">
            <img src="/github.svg" height={55} width={55} />
          </a>
          <a href="https://fxdxdex.medium.com/" target="_blank">
            <img src="/medium.svg" height={55} width={55} />
          </a>
        </div>
      </div>
      <img className="purple-gradient" src="./purple.png" alt="" />
    </div>
  );
};

export default Hero;
