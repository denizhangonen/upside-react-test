import React from "react";

import pizzaLogo from "../../../assets/images/pizza-logo.png";
import "./Logo.scss";

const logo = () => (
  <div className="logo" style={{height: 40}}>
    <img src={pizzaLogo} alt="upsidePizza" />
  </div>
);

export default logo;
