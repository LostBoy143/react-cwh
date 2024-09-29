import "./App.css";
import Navbar from "./Components/Navbar";

import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About us"
      />
      <div className="container my-3 mt-5">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
