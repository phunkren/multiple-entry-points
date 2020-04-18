import React from "react";
import ReactDOM from "react-dom";

function Test() {
  return (
    <div>
      <h1>Test</h1>
      <p>This is an example container for the test application</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
