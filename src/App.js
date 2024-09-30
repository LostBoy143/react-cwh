import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";

import React, { useState } from "react";

import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor =
        "white";
      showAlert(
        "Light mode has been enabled",
        "success"
      );
      document.title = "textUtils-DarkMode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor =
        "#192724";
      showAlert(
        "Dark mode has been enabled",
        "success"
      );
      document.title = "textUtils-LightMode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3 mt-5">
          <Routes>
            <Route
              path="/about"
              element={<About />}
            ></Route>

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
