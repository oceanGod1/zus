import "./App.css";
import LandingNavigation from "./Cmp/LandingNavigation";
import Column from "./Components/Column";
function App() {
  return (
    <>
      <div className="App">
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />
      </div>
      {/* <LandingNavigation /> */}
    </>
  );
}

export default App;
