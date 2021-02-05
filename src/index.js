import React from "react";
import ReactDOM from "react-dom";

function importBuildTarget() {
  // DefinePlugin in webpack.config.js will substitute
  // process.env.REACT_APP_BUILD_TARGET with it's value at build time.
  // https://webpack.js.org/plugins/define-plugin/

  // TerserPlugin in webpack.config.js will eliminate dead code
  // ...if we make it easy enough (no maps or switches, etc).
  // https://webpack.js.org/plugins/terser-webpack-plugin/

  if (process.env.REACT_APP_BUILD_TARGET === "app") {
    return import("./app.js");
  } else if (process.env.REACT_APP_BUILD_TARGET === "test") {
    return import("./test.js");
  } else {
    return Promise.reject(
      new Error("No such build target: " + process.env.REACT_APP_BUILD_TARGET)
    );
  }
}

// Import the entry point and render it's default export
importBuildTarget().then(({ default: Environment }) =>
  ReactDOM.render(
    <React.StrictMode>
      <Environment />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
