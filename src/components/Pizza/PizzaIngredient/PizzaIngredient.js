import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PizzaIngredient.scss";

import Pepperoni from "./Pepperoni/Pepperoni";
import Sausage from "./Sausage/Sausage";
import Olive from "./Olive/Olive";
import Pepper from "./Pepper/Pepper";
import Mushroom from "./Mushroom/Mushroom";

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    // Get specific ingredient layout for every single ingredient
    switch (this.props.type) {
      case "pepperoni":
        ingredient = <Pepperoni />;
        break;
      case "sausage":
        ingredient = <Sausage />;
        break;
      case "mushroom":
        ingredient = <Mushroom />;
        break;
      case "olive":
        ingredient = <Olive />;
        break;
      case "pepper":
        ingredient = <Pepper />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

PizzaIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default PizzaIngredient;
