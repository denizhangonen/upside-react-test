import React from "react";

import Aux from "../../../hoc/Auxlry/Auxlry";
import Button from "../../UI/Button/Button";

const orderSuccess = props => {
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
      <h3>Order Confirmed!</h3>
      <p>
        Your delicious pizza with the following ingredients is being prepared!
      </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>What do you want to do now?</p>
      <Button btnType="danger" clicked={props.goToMainPage}>
        Main page
      </Button>
      <Button btnType="success" clicked={props.goToOrdersPage}>
        Orders
      </Button>
    </Aux>
  );
};

export default orderSuccess;
