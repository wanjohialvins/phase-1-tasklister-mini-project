document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = event.target["new-task-description"].value.trim();
    // Only add if input is not empty
    if (taskInput) {
      buildToDo(taskInput);
    }
    // Reset the form
    event.target.reset();
  });
  // Build To-Do Item
  function buildToDo(task) {
    const taskList = document.getElementById("tasks");
    // Create list item
    const li = document.createElement("li");
    // Create span for task text
    const span = document.createElement("span");
    span.textContent = task;
    // Toggle done
    span.addEventListener("click", () => li.classList.toggle("done"));

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "task-btn";
    deleteBtn.addEventListener("click", () => {
      li.style.transform = "translateX(100%)";
      li.style.opacity = 0;
      setTimeout(() => li.remove(), 300);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
