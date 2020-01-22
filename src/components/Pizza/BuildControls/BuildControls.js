import React from "react";

import "./BuildControls.scss";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Sausage", type: "sausage" },
  { label: "Mushroom", type: "mushroom" },
  { label: "Olive", type: "olive" },
  { label: "Pepper", type: "pepper" }
];

const buildControls = props => {  
  return (
    <div className="buildControls">
      <p>
        Current Price: {" "}
        <strong>£ {props.price ? props.price.toFixed(2) : 0}</strong>
      </p>

      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}            
            ingExists={props.curIngredients[ctrl.type]}
          />
        );
      })}
      
      <button
        className="orderButton"
        onClick={props.ordered}
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
