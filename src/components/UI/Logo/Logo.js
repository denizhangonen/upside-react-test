import React from "react";

import pizzaLogo from "../../../assets/images/pizza-logo.png";
import "./Logo.scss";

const logo = props => (
  <div className="logo">
    <img src={pizzaLogo} alt="upsidePizza" />
  </div>
);

export default logo;
