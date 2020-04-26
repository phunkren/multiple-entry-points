import React from "react";
import ReactDOM from "react-dom";

const ENVIRONMENTS = [
  {
    name: "app",
    path: "./app.js",
  },
  {
    name: "test",
    path: "./test.js",
  },
];

// Determine which entry point to import
const { path } = ENVIRONMENTS.find(
  ({ name }) => process.env.REACT_APP_BUILD_TARGET === name
);

// Import the entry point and render it's default export
import(`${path}`).then(({ default: Environment }) =>
  ReactDOM.render(
    <React.StrictMode>
      <Environment />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
