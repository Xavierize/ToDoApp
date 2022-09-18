let addToDoButton = document.getElementById("addToDo");
let ToDoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

//Fix the add.EventListener bug//
addToDoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p")
    paragraph.innerText = inputField.value;
    ToDoContainer.apprendChild(paragraph);
})
