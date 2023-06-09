import "./App.scss";

import Background from "./background";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  return (
    <>
      <Background />
      <div className="app">
        <Header></Header>
        <MainSection></MainSection>
      </div>
    </>
  );
}

export default App;
