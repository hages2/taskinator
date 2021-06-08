var createTaskHandler = function () {
    var tasksToDoEl = document.querySelector("#tasks-to-do");
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

var buttonEl = document.querySelector("#save-task");
buttonEl.addEventListener("click", createTaskHandler);