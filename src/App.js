import classes from "./App.css";

// import TableElement from "./Components/Table/TableElement";
import TheadElement from "./Components/Table/TheadElement/TheadElement";
import TBodyElement from "./Components/Table/TBodyElement/TBodyElement";

//data import
import allCountryScores from "./data/scores";

//this is narrow copy so it has no sense basically, because deep nested object still going
//to be referred to the same "memory place"
const dataAllCountryScores = [...allCountryScores];
const modifiedDataCountryScores = [...allCountryScores];
modifiedDataCountryScores.forEach((item) => {
  item.name = item.name;
  item.scores.forEach((itemNested) => {
    itemNested.n = itemNested.n.toUpperCase();
    itemNested.s = itemNested.s;
  });
});

console.log(modifiedDataCountryScores);

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
