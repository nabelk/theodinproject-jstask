const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey, I'm red!";
container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”
const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";
container.appendChild(heading3);

// a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");
div.setAttribute("style", "background-color: pink; border-color: black; border-style: solid;")
container.appendChild(div);

// another <h1> that says “I’m in a div”
const heading1 =  document.createElement("h1");
heading1.textContent = "I'm in a div.";
div.appendChild(heading1);

// a <p> that says “ME TOO!”
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
div.appendChild(para2); 

//Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

container.appendChild(div);





