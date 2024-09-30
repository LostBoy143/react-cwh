import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("your text is here");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(
      "Converted to uppercase!",
      "success"
    );
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(
      "Converted to lowercase!",
      "success"
    );
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(
      "Cleared the text area",
      "success"
    );
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen the text", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(
      "Text copied to clipboard",
      "success"
    );
  };
  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(
      "Removed extra spaces",
      "success"
    );
  };
  return (
    <>
      <div
        className="container my-3 mt-5"
        style={{
          color:
            props.mode === "light"
              ? "black"
              : "white",
        }}
      >
        <h1 className="main-heading">
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="7"
            onChange={handleChange}
            style={{
              backgroundColor:
                props.mode === "light"
                  ? "white"
                  : "#242124",
              color:
                props.mode === "light"
                  ? "black"
                  : "white",
            }}
          ></textarea>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-danger mt-3"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-1 mt-3"
          >
            Speak
          </button>
          <button
            className="btn btn-info mt-3 mx-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button
            className="btn btn-danger mt-3 mx-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-1"
            onClick={removeSpace}
          >
            Remove extra spaces
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{
          color:
            props.mode === "light"
              ? "black"
              : "white",
        }}
      >
        <h2 className="main-heading">
          Your Text Summary
        </h2>
        <p>
          {" "}
          {text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes
          read
        </p>
      </div>
      <div
        className="container my-4 mb-5"
        style={{
          color:
            props.mode === "light"
              ? "black"
              : "white",
        }}
      >
        <h2 className="main-heading">Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text to preview"}
        </p>
      </div>
    </>
  );
}
