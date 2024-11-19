import "./index.css";
import { formEl, inputEl, taskListEl, yearEl } from "./domSelection";
import Task from "./components/Task";

const tasks = [];

function toggleTask(id) {
  // this toggles the isCompleted property of the task
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });

  // show uncompleted tasks first
  tasks.sort((a, b) => a.isCompleted - b.isCompleted);
}

function renderTasks() {
  taskListEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted, task.id);
    fragment.appendChild(taskEl);
  });

  // Render on real DOM
  taskListEl.appendChild(fragment);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the page from reloading

  //  Checking for empty input
  if (!inputEl.value) {
    return;
  }

  tasks.unshift({
    id: crypto.randomUUID(),
    value: inputEl.value,
    isCompleted: false,
  });

  console.log(tasks);

  renderTasks();

  //  Empty the input field
  inputEl.value = "";
});

taskListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    console.log(e.target.closest("label").id);
    toggleTask(e.target.closest("label").id);
    renderTasks();
    
  }
});

// IIFE
(function () {
  const year = new Date().getFullYear();

  // MARK: Update the DOM
  yearEl.textContent = `${year}`;
})();