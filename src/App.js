import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";

import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor =
        "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor =
        "#192724";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3 mt-5">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
