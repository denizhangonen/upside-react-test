import React from "react";

import "./Pizza.scss";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const pizza = props => {
  console.log(props)

  // Get a separate ingredient component for each ingredient added.
  let transformedIngredients = props.ingredients.map(ing => {
    return <PizzaIngredient key={ing} type={ing} />;
  });

  // Check if any ingredient added
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Let's add some ingredients to make a delicious Pizza!</p>
    );
  }

  return <div className="pizza">{transformedIngredients}</div>;
};

export default pizza;
