const container = document.querySelector('#container');

const para = document.createElement("p");
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.cssText = 'color: red';

container.appendChild(para);

const heading = document.createElement("h3");
heading.classList.add('heading');
heading.textContent = "I'm a blue H3!";
heading.style.cssText = 'color: blue';

container.appendChild(heading);

const blackPink = document.createElement("div");
blackPink.classList.add('blackPink');
blackPink.setAttribute('style','border: 2px solid; border-color: black; background: pink');


const headingTwo = document.createElement("h1");
headingTwo.classList.add('headingTwo');
headingTwo.textContent = "I'm in a div!";
blackPink.appendChild(headingTwo);

const divPara = document.createElement("div");
divPara.classList.add('divPara');
divPara.textContent = "ME TOO!";
blackPink.appendChild(divPara);

container.appendChild(blackPink);