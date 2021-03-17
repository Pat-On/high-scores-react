import React from "react";
import TrElement from "../TrElement/TrElement";
import Aux from "../../../hoc/auxilliary";

const TBodyElement = (props) => {
  return (
    <Aux>
      {props.dataScoresPlayers.map((item, index) => {
        return (
          <Aux>
            <TrElement
              key={index}
              titleHeader={true}
              columnSpan={2}
              countryName={item.name}
            />
            {console.log(item.scores)}
            {item.scores.map((item, index) => {
              return (
                <TrElement
                  key={index}
                  titleHeader={false}
                  personObject={item}
                />
              );
            })}
          </Aux>
        );
      })}
    </Aux>
  );
};

export default TBodyElement;
