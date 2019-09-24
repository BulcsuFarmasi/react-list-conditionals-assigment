import React from "react";

import "./Char.css";

export const Char = props => {
  return (
    <p class="Char" onClick={props.deleteChar}>
      {props.char}
    </p>
  );
};
