import "./App.scss";

import Background from "./background";

import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Background />
      <Header />
      <div className="app">
        <MainSection />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
