import "./App.css";

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

      <table>
        <TheadElement columnSpan={2} title={"High Scores per Country"} />

        <TBodyElement dataScoresPlayers={dataAllCountryScores} />
        <tbody>
          {/* 
          <tr>
            <th colspan="2">Colombia</th>
          </tr> */}

          <tr>
            <td>Ali: </td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Maria: </td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Ali: </td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Maria: </td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
      {/* </main> */}
    </div>
  );
}

export default App;
