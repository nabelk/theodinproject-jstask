let form = document.getElementById("addForm");
let itemsList = document.querySelector("ul");
let searchFilter = document.getElementById("filter")

form.addEventListener("submit", addItem);
itemsList.addEventListener("click", removeItem)
searchFilter.addEventListener("keyup", filterItems)

// Function to add item
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

// Function to remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if (confirm("Are you sure to delete? It can't be revert")){
            let li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}

// Function to filter item
function filterItems(e){
    // console.log(e.target.value);
    let search = e.target.value.toLowerCase();
    // console.log(search);
    let li = document.querySelectorAll("li");
    li.forEach(item =>{
    (item.textContent.toLowerCase().indexOf(search) !== -1) 
    ? item.style.display = "block" : item.style.display = "none";
    })
}