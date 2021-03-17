import "./App.css";

//data import
import allCountryScores from "./data/scores";

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>High Score Tables (React)</h1>
      </header>
      {/* <main> */}
      <table>
        <thead>
          <tr>
            <th colspan="2">High Scores per Country</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th colspan="2">Colombia</th>
          </tr>
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
