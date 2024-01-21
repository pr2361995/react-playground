
const leafNode = [
    React.createElement("h1",{className:"heading"},"hello javascript"),
    React.createElement("h2",{className:"sub-heading"},"hello javascript"),
];
const child = React.createElement("div",{},[
    React.createElement("div",{id:"child1"},leafNode),
    React.createElement("div",{id:"child2"},leafNode)
]);
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root);
root.render(child);
