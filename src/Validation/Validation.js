import React from "react";

export const Validation = props => {
  const validationText =
    props.textLength >= 10 ? "Text long enough" : "Text too short";

  return <p>{validationText}</p>;
};
