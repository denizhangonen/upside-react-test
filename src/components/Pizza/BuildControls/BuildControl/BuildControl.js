import React from "react";

import "./BuildControl.scss";

const buildControl = props => (
  <div className="buildControl">
    <div className="label">{props.label}</div>
    <button
      className="less"
      onClick={props.removed}
      disabled={!props.ingExists}
    >
      Remove
    </button>
    <button className="more" onClick={props.added} disabled={props.ingExists}>
      Add
    </button>
  </div>
);

export default buildControl;
