import "./App.scss";

import Background from "./background";

import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Background />
      <Header />
      <div className="app">
        <MainSection />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
