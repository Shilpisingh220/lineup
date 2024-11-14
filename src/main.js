import "./index.css";

import { formEl, inputEl, taskListEl, yearEl } from "./domSelection.js";
import Task from "./components/Task";

const tasks = [];

function renderTasks() {
  taskListEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.iscompleted);
    fragment.appendChild(taskEl);
  });

  taskListEl.appendChild(fragment);
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputEl.value) {
    return;
  }
  tasks.unshift({
    id: crypto.randomUUID(),
    value: inputEl.value,
    iscompleted: false,
  });
  console.log(tasks);

  renderTasks();

  inputEl.value = "";
});

// IIFE
(function () {
  const year = new Date().getFullYear();

  // MARK: DOM update
  yearEl.textContent = `${year}`;
})();
