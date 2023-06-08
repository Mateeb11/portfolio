import "./App.scss";

import Background from "./background";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Background />
      <div className="app">
        <Header></Header>
      </div>
    </>
  );
}

export default App;
