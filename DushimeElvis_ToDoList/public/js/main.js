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

let container_CreatedTask = document.createElement("div");
container_CreatedTask.className = "container_CreatedTask";
let taskNode;
let inputCheckBox;
let labelInput;
let div_InputTask;

let div_Icon;
let icon_Trash;

let icon_Edit;

inputTaskName.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    inputCheckBox = document.createElement("input");
    Object.assign(inputCheckBox, {
      type: "checkbox",
      id: `${inputTaskName.value}`,
      name: `${inputTaskName.value}`,
    });
    labelInput = document.createElement("label");
    labelInput.setAttribute("for", `${inputTaskName.value}`);
    labelInput.textContent = `${inputTaskName.value}`;
    taskNode = document.createElement("div");
    taskNode.className = "taskNode";
    div_InputTask = document.createElement("div");
    div_InputTask.append(inputCheckBox, labelInput);
    div_Icon = document.createElement("div");
    icon_Trash = document.createElement("i");
    icon_Trash.className = "fas fa-trash-alt";
    icon_Edit = document.createElement("i");
    icon_Edit.className = "fas fa-edit";
    div_Icon.append(icon_Edit, icon_Trash);
    div_Icon.className = "div_Icon";
    taskNode.append(div_InputTask, div_Icon);
    container_CreatedTask.appendChild(taskNode);
    inputTaskName.value = "";
  }
});

toDoListContent.appendChild(container_CreatedTask);
document.body.appendChild(toDoListContent);
