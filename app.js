import { addNewTask } from "./src/new_task.js";
import { displayTasks } from "./src/display_tasks.js";
import { deleteTask } from "./src/delete_task.js";
import { editTask } from "./src/edit_task.js";
// import { dragAndDrop } from "./src/drag_and_drop.js";


document.addEventListener('DOMContentLoaded', () => {
  addNewTask();
  displayTasks();
  deleteTask();
  editTask();
  // dragAndDrop();
})