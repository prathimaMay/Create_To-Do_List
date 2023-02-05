//Variables

const inputTask = document.getElementById("input-task");
const taskAddBtn = document.getElementById("task-add-btn");
const taskContainer = document.getElementById("task-container");

// Event Listener for Add task button

taskAddBtn.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  console.log(inputTask.value);
  task.appendChild(li);

  let checkTask = document.createElement("button");
  checkTask.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkTask.classList.add("check-btn");
  task.appendChild(checkTask);

  let removeTask = document.createElement("button");
  removeTask.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  removeTask.classList.add("remove-btn");
  task.appendChild(removeTask);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkTask.addEventListener("click", function () {
    checkTask.parentElement.style.textDecoration = "line-through";
  });

  removeTask.addEventListener("click", function (e) {
    console.log(e.target);
    let target = e.target;
    target.parentElement.parentElement.remove();
    console.log(target.parentElement.parentElement);
    console.log(inputTask.value);
    console.log(e.target);
  });
});
