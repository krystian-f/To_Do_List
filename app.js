import { addNewTask } from "./src/new_task.js";
import { displayTasks } from "./src/display_tasks.js";
import { deleteTask } from "./src/delete_task.js";

document.addEventListener('DOMContentLoaded', () => {
  addNewTask();
  displayTasks();
  deleteTask();
})