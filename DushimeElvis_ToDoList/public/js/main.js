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
let tab_inputCheckBox = [];
inputTaskName.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    inputCheckBox = document.createElement("input");

    Object.assign(inputCheckBox, {
      type: "checkbox",
      id: `${inputTaskName.value}`,
      name: `${inputTaskName.value}`,
    });
    tab_inputCheckBox.push(inputCheckBox);
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

//Ecoute de l'élément cocher
container_CreatedTask.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
    // console.log("condition");
    // console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.classList.toggle("bg_grey");
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
let DisplayTaskAccordingBtnFilter = (elt) => {
  tab_task = Array.from(container_CreatedTask.children);
  //   console.log(tab_task);
  let input;
  if (elt == tab_BtnFilter[0]) {
    //   console.log(tab_task);
    console.log("mon Button 1");

    tab_task.forEach((elt) => {
      elt.classList.remove("invisible");
      //   elt.hidden = false;
    });
  } else if (elt == tab_BtnFilter[1]) {
    console.log("mon Button 2");
    tab_task.forEach((elt) => {
      input = elt.querySelector("input");
      //   console.log(input);
      if (input.checked) {
        elt.classList.remove("invisible");
        // elt.hidden = false;
      } else {
        // elt.hidden = true;
        elt.classList.add("invisible");
      }
    });
  } else {
    console.log("mon Button 3");

    tab_task.forEach((elt) => {
      input = elt.querySelector("input");
      //   console.log(input);
      if (input.checked) {
        // elt.hidden = true;
        elt.classList.add("invisible");
      } else {
        // elt.hidden = false;
        elt.classList.remove("invisible");
      }
    });
  }
  console.log(tab_task);
};
tab_BtnFilter.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    DisplayTaskAccordingBtnFilter(e.target);
  });
});
functManipIcon();
let btn_ClearList = document.createElement("button");
btn_ClearList.textContent = "Clear list";
btn_ClearList.className = "btn_Clear";
btn_ClearList.addEventListener("click", () => {
  Array.from(container_CreatedTask.children).forEach((elt) => {
    elt.remove();
  });
});
console.log(btn_ClearList);
toDoListContent.append(container_CreatedTask, btn_ClearList);
document.body.appendChild(toDoListContent);
