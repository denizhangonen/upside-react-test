import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PizzaIngredient.scss";

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;
    console.log(this.props)

    // Get specific ingredient layout for every single ingredient
    switch (this.props.type) {
      case "pepperoni":
        ingredient = <div className="pepperoni"></div>;
        break;
      case "sausage":
        ingredient = <div className="sausage"></div>;
        break;
      case "mushroom":
        ingredient = <div className="mushroom"></div>;
        break;
      case "olive":
        ingredient = <div className="olive"></div>;
        break;
      case "pepper":
        ingredient = <div className="pepper"></div>;
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
