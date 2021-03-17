import React from "react";

const ThElement = (props) => {
  console.log(props.countryName);
  return (
    <th
      className={props.mainHeader ? "mainTH" : null}
      colSpan={props.columnSpan ? props.columnSpan : 1}
    >
      {props.mainHeader
        ? props.countryName
        : `HIGH SCORES: ${props.countryName}`}
    </th>
  );
};

export default ThElement;
