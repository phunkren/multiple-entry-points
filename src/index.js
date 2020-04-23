import React from "react";
import ReactDOM from "react-dom";

if (process.env.REACT_APP_BUILD_TARGET === "app") {
  import(`./app.js`).then(({ default: App }) => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
}

if (process.env.REACT_APP_BUILD_TARGET === "test") {
  import(`./test.js`).then(({ default: Test }) => {
    ReactDOM.render(
      <React.StrictMode>
        <Test />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
}
