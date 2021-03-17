import React from "react";
import ThElement from "../ThElement/ThElement";

const TheadElement = (props) => {
  return (
    <thead>
      <tr>
        <ThElement
          mainHeader={true}
          columnSpan={props.columnSpan}
          countryName={props.title}
        />
      </tr>
    </thead>
  );
};

export default TheadElement;
