import React from "react";

const ThElement = (props) => {
  console.log(props.countryName);
  return (
    <th colSpan={props.columnSpan ? props.columnSpan : 1}>
      {props.countryName}
    </th>
  );
};

export default ThElement;
