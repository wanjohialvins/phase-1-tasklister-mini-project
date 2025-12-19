document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Select input safely
    const taskInput = document.querySelector('#new-task-description').value.trim();

    if (taskInput) {
      buildToDo(taskInput);
    }

    // Clear the input
    document.querySelector('#new-task-description').value = '';
  });

  function buildToDo(task) {
    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }
});
