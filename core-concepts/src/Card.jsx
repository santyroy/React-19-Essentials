import React from "react";

// With JSX - clean and readable
export const Card = () => {
  return (
    <div id="card">
      <h2>Welcome</h2>
      <p>
        This is a <span id="highlight">paragraph</span> with text
      </p>
      <button>Click me</button>
    </div>
  );
};

// JSX --> Transpiler converts --> React.createElement() syntax

// Without JSX - messy!
export const CartWithoutJSX = () => {
  const buttonEl = React.createElement("button", null, "Click me");
  const spanEl = React.createElement("span", { id: "highlight" }, "paragraph");
  const h2El = React.createElement("h2", null, "Welcome");
  const paraEl = React.createElement(
    "p",
    null,
    "This is a",
    spanEl,
    " with text"
  );

  return React.createElement("div", { id: "card" }, h2El, paraEl, buttonEl);
};
