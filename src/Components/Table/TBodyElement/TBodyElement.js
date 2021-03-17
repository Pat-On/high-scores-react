import React from "react";
import TrElement from "../TrElement/TrElement";
import Aux from "../../../hoc/auxilliary";

const TBodyElement = (props) => {
  return (
    <tbody>
      {props.dataScoresPlayers.map((item, index) => {
        return (
          <table className="green">
            <table>
              <TrElement
                key={index + Math.random()}
                titleHeader={true}
                columnSpan={2}
                countryName={item.name}
              />
              {console.log(item.scores)}
              <table className="black">
                {item.scores.map((item, index) => {
                  return (
                    <TrElement
                      className={`blackBorder`}
                      key={index + Math.random()}
                      titleHeader={false}
                      personObject={item}
                    />
                  );
                })}
              </table>
            </table>
          </table>
        );
      })}
    </tbody>
  );
};

export default TBodyElement;
