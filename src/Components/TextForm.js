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
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container">
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
            className="btn btn-info mt-3 mx-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-4">
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
      <div className="container my-4 mb-10">
        <h2 className="main-heading">Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
