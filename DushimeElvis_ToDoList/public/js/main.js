import {
  create_BasisStructure,
  create_TaskOnClickEnter,
  addBackgroundOnCheckedBox,
  actionDeleteAndEditOnclikIcon,
  displayTaskAccordingBtnFilter,
  clearTask,
} from "./function.js";

create_BasisStructure();
let inputTaskName = document.querySelector("input");
inputTaskName.addEventListener("keyup", (e) => {
  create_TaskOnClickEnter(e);
});

let container_CreatedTask = document.querySelector(".container_CreatedTask");

container_CreatedTask.addEventListener("click", (e) => {
  addBackgroundOnCheckedBox(e);
  actionDeleteAndEditOnclikIcon(e);
});
//Ecoute des boutons pour filtrer
let container_ButtonFilter = document.querySelector(".container_ButtonFilter");
let tab_BtnFilter = Array.from(container_ButtonFilter.children);
tab_BtnFilter.forEach((elt) => {
  elt.addEventListener("click", (e) => {
    displayTaskAccordingBtnFilter(e.target, tab_BtnFilter);
  });
});

//Action du bouton clear
let btn_Clear = document.querySelector(".btn_Clear");

btn_Clear.addEventListener("click", () => {
  clearTask(container_CreatedTask);
});
