import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {

  // Construct a list of ingredients
  const ingredientSummary = props.ingredients.map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your delicious pizza with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Do you want to place the order?</p>
      <Button btnType="danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={props.purchaseContinued}>
        PLACE ORDER
      </Button>
    </Aux>
  );
};

export default orderSummary;
