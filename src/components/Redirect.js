import React, { useEffect } from "react";
import "./Redirect.css";

const Redirect = () => {
  useEffect(() => {
    window.location.href = "https://app.fxdx.exchange/buy/?ref=fxdx";
  }, []);
  return (
    <div className="redirect-wrapper">
      <p>Redirecting you to Mainnet App</p>
    </div>
  );
};

export default Redirect;
