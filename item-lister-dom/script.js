let form = document.getElementById("addForm");
let itemsList = document.querySelector("ul");

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();

    // Get an input value from variable form
    let newItem = document.getElementById("item").value;

    // Create new li
    let li = document.createElement("li");

    // Add class to li
    li.className = "list-group-item";

    // Apppend li with value from variable form
    li.appendChild(document.createTextNode(newItem));

    // Append new item into ul
    itemsList.appendChild(li);

    // Add delete to newItems
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "X";
    buttonDelete.className = "btn btn-danger btn-sm float-right delete ";
    li.appendChild(buttonDelete);

}

