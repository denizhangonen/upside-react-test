import React from "react";

import "./Pizza.scss";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

const pizza = props => {
  console.log(props);

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

  return (
    <div className="pizza">
      {/* <div id="interface"> */}
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

      {/* <div id="toggleui">
          <div className="card-container">
            <div className="card" id="rotate">
              <div className="front">
                <h1>
                  ROTATE:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  ROTATE:<i>no</i>
                </h1>
              </div>
            </div>
          </div>

          <h1>Toppings</h1>

          <div className="card-container">
            <div className="card pep">
              <div className="front">
                <h1>
                  PEPPERONI:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  PEPPERONI:<i>no</i>
                </h1>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card sau">
              <div className="front">
                <h1>
                  SAUSAGE:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  SAUSAGE:<i>no</i>
                </h1>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card mus">
              <div className="front">
                <h1>
                  MUSHROOM:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  MUSHROOM:<i>no</i>
                </h1>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card oli">
              <div className="front">
                <h1>
                  OLIVES:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  OLIVES:<i>no</i>
                </h1>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card bel">
              <div className="front">
                <h1>
                  BELL PEPPER:<i>YES</i>
                </h1>
              </div>
              <div className="back">
                <h1>
                  BELL PEPPER:<i>NO</i>
                </h1>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default pizza;
