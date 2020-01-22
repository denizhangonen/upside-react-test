import React from "react";

import "./Pizza.scss";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const pizza = props => {
  // Get a separate ingredient component for each ingredient added.
  let transformedIngredients = props.ingredients.map(ing => {
    return <PizzaIngredient key={ing} type={ing} />;
  });

  // Check if any ingredient added
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className="add-ing-message">
        Let's add some ingredients to make a delicious Pizza!
      </p>
    );
  }

  return (
    <div className="pizza">
      <h1 id="header">PizzAppSide</h1>
      <div id="pizzacontainer">
        <div id="panhandle"></div>

        <div id="pizzapan">
          <div id="pizzashadow">
            <div id="pizza">
              <div id="tomatosauce">
                <div id="cheese">{transformedIngredients}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pizza;
