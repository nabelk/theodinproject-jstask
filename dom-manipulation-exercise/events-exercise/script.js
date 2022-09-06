// Events exercise

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// Button(s) container
const button = document.querySelector(".button");
button.setAttribute("style", "display:flex; gap: 10px; height: 21px;")

// 2nd method for the button (not allow multiple event listener)
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");
btn.onclick = alertFunction;

// 3rd method for the button (can allow multiple event listener)
const thirdbtn = document.querySelector("#thirdbtn");
thirdbtn.addEventListener ("click", () => {
    alert ("Hello World!")
  });
thirdbtn.addEventListener("click", alertFunction);

thirdbtn.addEventListener('click', function (e) {
    console.log(e);
  });

// Print on console where is the html element of the button
thirdbtn.addEventListener('click', function (e) {
    console.log(e.target);
  });

// Set attributes by clicking
thirdbtn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  }); 

/*
// Attaching Listeners to Groups of Nodes
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
});
*/