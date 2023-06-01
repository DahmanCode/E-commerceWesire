import "./App.css";
import Hero from "./compononents/Hero/Hero";
import Slider from "./compononents/Slider/Slider";
import Header from "./compononents/header/Header";
import Virtual from "./compononents/Virtual/Virtual";
import Products from "./compononents/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;
