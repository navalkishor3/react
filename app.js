//document.getElementById("root").innerText = "Hello World";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hellow World from React!"),
    React.createElement("h2", {}, "hellow h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hellow World from React!"),
    React.createElement("h2", {}, "hellow h2"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hellow World from React!"
);
//heading.innerHTML = "Hellow World";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
