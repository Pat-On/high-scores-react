import "./App.css";
import TBodyElement from "./Components/Table/ScoreTableCreator/ScoreTableCreator";
import React from "react";
//data import
import allCountryScores from "./data/scores";
import Aux from "./hoc/auxilliary";

//this is narrow copy so it has no sense basically, because deep nested object still going
//to be referred to the same "memory place"
// const dataAllCountryScores = [...allCountryScores];
const modifiedDataCountryScores = [...allCountryScores];

modifiedDataCountryScores.forEach((item) => {
  item.name = item.name;
  item.scores.forEach((itemNested) => {
    itemNested.n = itemNested.n.toUpperCase();
    itemNested.s = itemNested.s;
  });
  //sorting the array
  item.scores.sort((a, b) => {
    if (a.s < b.s) return 1;
    if (a.s > b.s) return -1;
    else return 0;
  });
});

modifiedDataCountryScores.sort((a, b) => {
  if (a.name[0] < b.name[0]) return -1;
  if (a.name[0] > b.name[0]) return 1;
  else return 0;
});

const personalScores = [{ name: "Personal Scores", scores: [] }];
modifiedDataCountryScores.map((item) =>
  personalScores[0].scores.push(...item.scores)
);

let controllerCountries = true;
let controllerScores = true;

function App() {
  const [dataCountryScore, dataCountryScoreHandler] = React.useState(
    modifiedDataCountryScores
  );

  const [countryPersonalScores, countryPersonalScoresHandler] = React.useState(
    false
  );

  const personalCountriesHandler = () => {
    if (countryPersonalScores) {
      dataCountryScoreHandler(modifiedDataCountryScores);
      countryPersonalScoresHandler(false);
    } else {
      dataCountryScoreHandler(personalScores);
      countryPersonalScoresHandler(true);
    }
  };

  const sortResultsPersonsHandler = () => {
    if (!controllerScores) {
      const dataSort = [...personalScores];
      dataSort.forEach((item) => {
        //sorting the array
        item.scores.sort((a, b) => {
          if (a.s < b.s) return 1;
          if (a.s > b.s) return -1;
          else return 0;
        });
      });
      controllerScores = !controllerScores;
      return dataCountryScoreHandler(dataSort);
    } else {
      const dataSort = [...personalScores];
      dataSort.forEach((item) => {
        //sorting the array
        item.scores.sort((a, b) => {
          if (a.s < b.s) return -1;
          if (a.s > b.s) return 1;
          else return 0;
        });
      });
      controllerScores = !controllerScores;
      return dataCountryScoreHandler(dataSort);
    }
  };

  const sortCountriesHandler = (e) => {
    if (!controllerCountries) {
      const dataSort = [...dataCountryScore];
      dataSort.sort((a, b) => {
        if (a.name[0] < b.name[0]) return -1;
        if (a.name[0] > b.name[0]) return 1;
        else return 0;
      });
      controllerCountries = !controllerCountries;
      return dataCountryScoreHandler(dataSort);
    } else {
      const dataSort = [...dataCountryScore];
      dataSort.sort((a, b) => {
        if (a.name[0] < b.name[0]) return 1;
        if (a.name[0] > b.name[0]) return -1;
        else return 0;
      });
      controllerCountries = !controllerCountries;
      return dataCountryScoreHandler(dataSort);
    }
  };

  const sortResultsHandler = () => {
    if (controllerScores) {
      const dataSort = [...dataCountryScore];
      dataSort.forEach((item) => {
        //sorting the array
        item.scores.sort((a, b) => {
          if (a.s < b.s) return 1;
          if (a.s > b.s) return -1;
          else return 0;
        });
      });
      controllerScores = !controllerScores;
      return dataCountryScoreHandler(dataSort);
    } else {
      const dataSort = [...dataCountryScore];
      dataSort.forEach((item) => {
        //sorting the array
        item.scores.sort((a, b) => {
          if (a.s < b.s) return -1;
          if (a.s > b.s) return 1;
          else return 0;
        });
      });
      controllerScores = !controllerScores;
      return dataCountryScoreHandler(dataSort);
    }
  };

  let buttons = null;

  if (countryPersonalScores) {
    buttons = (
      <button
        className={`btn__sort__countries myButton`}
        onClick={sortResultsPersonsHandler}
      >
        Sort Personal Results
      </button>
    );
  } else {
    buttons = (
      <Aux>
        <button
          className={`btn__sort__countries myButton`}
          onClick={sortCountriesHandler}
        >
          Sort By Countries
        </button>
        <button
          className={`btn__sort__countries myButton`}
          onClick={sortResultsHandler}
        >
          Sort By Scores
        </button>
      </Aux>
    );
  }

  return (
    <div className="App">
      <header className="">
        <h1>High Score Tables (React)</h1>
      </header>
      <div className={`blueBorder`}>
        {buttons}
        <button className={`myButton`} onClick={personalCountriesHandler}>
          Countries/Personal
        </button>

        <h2>High Scores per Country</h2>
        <TBodyElement dataScoresPlayers={dataCountryScore} />
        {/* {scores} */}

        {/* </main> */}
      </div>
    </div>
  );
}

export default App;

//why it is not counting commitments?
