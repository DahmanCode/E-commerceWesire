import "./App.css";
import Hero from "./compononents/Hero/Hero";
import Slider from "./compononents/Slider/Slider";
import Header from "./compononents/header/Header";
import Virtual from "./compononents/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
    </div>
  );
}

export default App;
