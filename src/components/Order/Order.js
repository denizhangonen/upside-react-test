import React from "react";

import "./Order.scss";

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    if (props.ingredients[ingredientName]) {
      ingredients.push({
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      });
    }
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name}
      </span>
    );
  });

  return (
    <div className="order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>£ {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
