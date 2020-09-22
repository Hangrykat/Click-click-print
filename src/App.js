import React from "react";
import "./shared-styles.css";
import Main from "./components/Main/Main";
import PrintPreview from "./components/Main/PrintPreview/PrintPreview";

function App() {
  return (
    <div className="App">
      <PrintPreview />
      <Main />
    </div>
  );
}

export default App;
