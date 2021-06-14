let toDoListContent = document.createElement("div");
toDoListContent.className = "toDoListContent";
let title = document.createElement("h1");
title.textContent = "Todo list";
title.className = "title";
let inputTaskName = document.createElement("input");
inputTaskName.placeholder = "Task Name";
let btnAll = document.createElement("button");
btnAll.id = "All";
btnAll.textContent = "All";
let btnDone = document.createElement("button");
btnDone.textContent = "Done";
btnDone.id = "Done";
let btnToDo = document.createElement("button");
btnToDo.id = "toDo";
btnToDo.textContent = "to Do";
let container_input = document.createElement("div");
container_input.className = "container_input";
container_input.appendChild(inputTaskName);

let container_ButtonFilter = document.createElement("div");
container_ButtonFilter.className = "container_ButtonFilter";
container_ButtonFilter.append(btnAll, btnDone, btnToDo);
let container_inputAndButton = document.createElement("div");
container_inputAndButton.className = "container_inputAndButton";
container_inputAndButton.append(container_input, container_ButtonFilter);

toDoListContent.append(title, container_inputAndButton);

document.body.appendChild(toDoListContent);
