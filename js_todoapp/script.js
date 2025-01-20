document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => reanderTasks(task));
  console.log(tasks);

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      complited: false,
    };
    tasks.push(newTask);
    saveTasks();
    reanderTasks(newTask);
    todoInput.value = "";
  });

  function reanderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.complited) li.classList.add("complited");
    li.innerHTML = `
<span>${task.text}</span>
<button>Delet</button>
`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        task.complited = !task.complited;
        li.classList.toggle("completed");
        saveTasks();
      }
    });
    li.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation();
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove();
        saveTasks();
      });
      
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
