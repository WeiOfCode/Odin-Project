const container = document.querySelector("body");
const div = document.createElement("div");
const p = document.createElement("p");
p.textContent = "I am Red";
p.style.color = "blue";
p.style.cssText = "color: blue; background: white;"
div.appendChild(p);

const h1 = document.createElement("h1");
h1.textContent = "I am blue";
h1.setAttribute("style", "color: red; cssText: red");
div.appendChild(h1);
container.appendChild(div);

div.style.border = "thick solid black";