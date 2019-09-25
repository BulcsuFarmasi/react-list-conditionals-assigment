import React from "react";

import "./Char.css";

export const Char = props => {
  return (
    <p className="Char" onClick={props.deleteChar}>
      {props.char}
    </p>
  );
};
