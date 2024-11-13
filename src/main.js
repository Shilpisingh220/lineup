import "./index.css";

import { formEl, inputEl, yearEl } from "./domSelection.js";

const tasks =[];

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (!inputEl.value){
  return;
}
  tasks.push({title : inputEl.value, iscompleted : false, id: crypto.randomUUID()});
  console.log(tasks);

  inputEl.value = "";
});


// IIFE
(function () {
  const year = new Date().getFullYear();

  // MARK: DOM update
  yearEl.textContent = `${year}`;
})();
