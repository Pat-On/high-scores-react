import classes from "./App.css";

// import TableElement from "./Components/Table/TableElement";
import TheadElement from "./Components/Table/TheadElement/TheadElement";
import TBodyElement from "./Components/Table/TBodyElement/TBodyElement";

//data import
import allCountryScores from "./data/scores";

const dataAllCountryScores = [...allCountryScores];

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>High Score Tables (React)</h1>
      </header>
      {/* <main> */}

      <table className={`blueBorder`}>
        <TheadElement columnSpan={2} title={"High Scores per Country"} />
        <TBodyElement dataScoresPlayers={dataAllCountryScores} />
      </table>
      {/* </main> */}
    </div>
  );
}

export default App;
