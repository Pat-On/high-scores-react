import classes from "./App.css";
import TBodyElement from "./Components/Table/ScoreTableCreator/ScoreTableCreator";

//data import
import allCountryScores from "./data/scores";

//this is narrow copy so it has no sense basically, because deep nested object still going
//to be referred to the same "memory place"
// const dataAllCountryScores = [...allCountryScores];
const modifiedDataCountryScores = [...allCountryScores];
console.log(modifiedDataCountryScores);

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

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>High Score Tables (React)</h1>
      </header>
      <div className={`blueBorder`}>
        <h2>High Scores per Country</h2>

        <TBodyElement dataScoresPlayers={modifiedDataCountryScores} />

        {/* </main> */}
      </div>
    </div>
  );
}

export default App;
