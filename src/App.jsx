import xoLogo from "/xo.svg";
import Game from "./components/GAME.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex w-[100vw] justify-center">
        <div>
          <div className="flex justify-center ">
            <img className="w-14 m-3" src={xoLogo} alt="xo" />
          </div>
          <Game />
        </div>
      </div>
    </>
  );
}

export default App;
