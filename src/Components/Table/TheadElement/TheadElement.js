import React from "react";
import ThElement from "../ThElement/ThElement";

const TheadElement = (props) => {
  return (
    <thead>
      <ThElement
        mainHeader={true}
        columnSpan={props.columnSpan}
        countryName={props.title}
      />
    </thead>
  );
};

export default TheadElement;
