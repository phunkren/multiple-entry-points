import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Application</h1>
      <p>This is an example container for the main application</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
