import "./App.css";
import Intro from "./components/intro";
import Particle from "./components/particle";

function App() {
  return (
    <>
      <Particle />
      <div className="font-poppins main">
        <Intro />
      </div>
    </>
  );
}

export default App;
