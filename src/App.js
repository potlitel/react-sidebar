import "./App.css";
import Sidenav from "./components/shared/Sidenav";
import DarkModeToggle from "./components/shared/DarkModeToggle";
import "./styles.scss";

function App() {
  return (
    <>
      {/* <div className="navbar">
        <DarkModeToggle />
      </div> */}
      <Sidenav></Sidenav>;
    </>
  );
}

export default App;
