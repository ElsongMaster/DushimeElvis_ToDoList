export let create_BasisStructure = () => {
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
  let container_CreatedTask = document.createElement("div");
  container_CreatedTask.className = "container_CreatedTask";
  let btn_ClearList = document.createElement("button");
  btn_ClearList.textContent = "Clear list";
  btn_ClearList.className = "btn_Clear";
  toDoListContent.append(
    title,
    container_inputAndButton,
    container_CreatedTask,
    btn_ClearList
  );
  document.body.appendChild(toDoListContent);
};

export let create_TaskOnClickEnter = (e) => {
  let taskNode;
  let inputCheckBox;
  let labelInput;
  let div_InputTask;

  let div_Icon;
  let icon_Trash;
  let container_CreatedTask = document.querySelector(".container_CreatedTask");
  let icon_Edit;
  let tab_inputCheckBox = [];
  if (e.key == "Enter") {
    inputCheckBox = document.createElement("input");

    Object.assign(inputCheckBox, {
      type: "checkbox",
      id: `${e.target.value}`,
      name: `${e.target.value}`,
    });
    tab_inputCheckBox.push(inputCheckBox);
    labelInput = document.createElement("label");
    labelInput.setAttribute("for", `${e.target.value}`);
    labelInput.textContent = `${e.target.value}`;
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
    e.target.value = "";
  }
};

export let addBackgroundOnCheckedBox = (e) => {
  if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
    e.target.parentElement.parentElement.classList.toggle("bg_grey");
  }
};

export let actionDeleteAndEditOnclikIcon = (e) => {
  let tab_IconDelete;
  let tab_IconEdit;
  tab_IconDelete = Array.from(document.querySelectorAll(".fa-trash-alt"));
  tab_IconEdit = Array.from(document.querySelectorAll(".fa-edit"));
  if (tab_IconDelete.includes(e.target)) {
    e.target.parentElement.parentElement.remove();
  } else if (tab_IconEdit.includes(e.target)) {
    let container_INode = e.target.parentElement;
    container_INode.classList.toggle("invisible");

    let labelNode = e.target.parentElement.parentElement.querySelector("label");
    labelNode.classList.toggle("invisible");
    labelNode.hidden = true;

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
};

export let displayTaskAccordingBtnFilter = (elt, tab_BtnFilter) => {
  let container_CreatedTask = document.querySelector(".container_CreatedTask");
  let tab_task = Array.from(container_CreatedTask.children);
  let input;
  if (elt == tab_BtnFilter[0]) {
    tab_task.forEach((elt) => {
      elt.classList.remove("invisible");
    });
  } else if (elt == tab_BtnFilter[1]) {
    tab_task.forEach((elt) => {
      input = elt.querySelector("input");
      if (input.checked) {
        elt.classList.remove("invisible");
      } else {
        elt.classList.add("invisible");
      }
    });
  } else {
    tab_task.forEach((elt) => {
      input = elt.querySelector("input");
      if (input.checked) {
        elt.classList.add("invisible");
      } else {
        elt.classList.remove("invisible");
      }
    });
  }
};

export let clearTask = (container_CreatedTask) => {
  Array.from(container_CreatedTask.children).forEach((elt) => {
    elt.remove();
  });
};
