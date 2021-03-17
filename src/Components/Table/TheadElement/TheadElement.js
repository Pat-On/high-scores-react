import React from "react";
import ThElement from "../ThElement/ThElement";

const TheadElement = (props) => {
  return (
    <thead>
      <ThElement columnSpan={props.columnSpan} title={props.title} />
    </thead>
  );
};

export default TheadElement;
