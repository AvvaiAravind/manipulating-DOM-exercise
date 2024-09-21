const bodyElement = document.querySelector("body");
console.log(bodyElement);

const para = document.createElement("p");
para.classList.add("para");
para.style.color = "red";
para.textContent = "Hey I'm red!";
bodyElement.prepend(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
para.insertAdjacentElement("beforebegin", h3);

const content = document.createElement("div");
content.classList.toggle("content");
content.style.cssText =
  "color: blue; background-color: pink; border: 2px solid black";
bodyElement.appendChild(content);

const h1 = document.createElement("h1");
h1.style.color = "white";
h1.textContent = "I'm in div";
content.appendChild(h1);

const p = document.createElement("p");
p.style.color = "white";
p.textContent = "Me Too";
h1.insertAdjacentElement("afterend", p);
