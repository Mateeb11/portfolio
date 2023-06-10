import "./App.scss";

import Background from "./background";

import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Background />
      <div className="app">
        <div>
          {/*for removing the global gap*/}
          <Header />
          <MainSection />
        </div>

        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
