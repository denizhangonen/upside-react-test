import React from "react";

import "./BuildControl.scss";

const buildControl = props => (
  <div className="buildControl">
    <div className="label">{props.label}</div>
    <button className="less" onClick={props.removed} > {/* add a disable or enable logic */} 
      Remove
    </button>
    <button className="more" onClick={props.added}>
      Add
    </button>
  </div>
);

export default buildControl;
