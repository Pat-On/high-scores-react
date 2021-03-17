import React from "react";
import ThElement from "../ThElement/ThElement";
import TdElement from "../TdElement/TdElement";

const TrElement = (props) => {
  if (props.titleHeader) {
    return (
      <tr className={"headerTabelRow"}>
        <ThElement
          columnSpan={props.columnSpan}
          countryName={props.countryName}
          columnSpan={props.columnSpan}
        />
      </tr>
    );
  }
  return (
    <tr className={props.className}>
      {Object.values(props.personObject).map((value, index) => {
        return <TdElement key={index} name={value} />;
      })}
    </tr>
  );
};

export default TrElement;
