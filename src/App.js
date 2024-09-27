import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About us"
      />
      <Hero />
    </>
  );
}

export default App;
