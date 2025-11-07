import React from "react";

export const Hello = () => {
  return (
    <div id="container">
      <h1>Hello Sougata</h1>
    </div>
  );
};

export const HelloWithoutJSX = () => {
  console.log(React.createElement("p", { id: "para", className: "container" }, "Hello"));

  return React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", null, "Hello Sougata")
  );
};
