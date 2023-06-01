import "./App.css";
import Hero from "./compononents/Hero/Hero";
import Slider from "./compononents/Slider/Slider";
import Header from "./compononents/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
