import React from "react";
import TrElement from "../TrElement/TrElement";
import Aux from "../../../hoc/auxilliary";

const TBodyElement = (props) => {
  return (
    <div>
      {props.dataScoresPlayers.map((item, index) => {
        return (
          <div className="green">
            <h2>High Scores: {item.name}</h2>

            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default TBodyElement;
