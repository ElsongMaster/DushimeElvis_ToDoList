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
    //Ecoute de l'élément cocher
    inputCheckBox.addEventListener("click", () => {
      taskNode.classList.toggle("bg_grey");
    });
  }
});

let functManipIcon = () => {
  let tab_IconDelete;
  let tab_IconEdit;
  container_CreatedTask.addEventListener("click", (e) => {
    tab_IconDelete = Array.from(document.querySelectorAll(".fa-trash-alt"));
    tab_IconEdit = Array.from(document.querySelectorAll(".fa-edit"));
    if (tab_IconDelete.includes(e.target)) {
      e.target.parentElement.parentElement.remove();
    } else if (tab_IconEdit.includes(e.target)) {
      let container_INode = e.target.parentElement;
      container_INode.classList.toggle("invisible");

      let labelNode =
        e.target.parentElement.parentElement.querySelector("label");
      labelNode.classList.toggle("invisible");
      labelNode.hidden = true;
      console.log(labelNode);

      let inputTmp = document.createElement("input");
      labelNode.parentElement.insertBefore(inputTmp, labelNode);
      inputTmp.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
          labelNode.textContent = inputTmp.value;
          labelNode.parentElement.insertBefore(labelNode, inputTmp);
          container_INode.classList.toggle("invisible");
          labelNode.classList.toggle("invisible");
          inputTmp.remove();
        }
      });
    }
  });
};

let tab_BtnFilter = Array.from(container_ButtonFilter.children);
console.log(tab_BtnFilter);
let tab_task;
let DisplayTaskAccordingBtnFilter = () => {
  if (tab_BtnFilter.includes(e.target)) {
    tab_task = Array.from(container_CreatedTask.children);
    if (e.target == tab_BtnFilter[0]) {
      tab_task.forEach((elt) => {
        elt.display = "flex";
      });
    } else if (e.target == tab_BtnFilter[0]) {
      tab_task.forEach((elt) => {
        if (elt.querySelector("input").checked) {
          elt.display = "flex";
        } else {
          elt.display = "none";
        }
      });
    } else {
      tab_task.forEach((elt) => {
        if (elt.querySelector("input").checked) {
          elt.display = "none";
        } else {
          elt.display = "flex";
        }
      });
    }
  }
};
tab_BtnFilter.forEach((elt) => {
  elt.addEventListener("click", DisplayTaskAccordingBtnFilter);
});
functManipIcon();
toDoListContent.appendChild(container_CreatedTask);
document.body.appendChild(toDoListContent);
