// Getting the inputs from the html
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const selectAllBtn = document.getElementById("select-all-btn");
const deleteBtn = document.getElementById("delete-btn");
const markBtn = document.getElementById("mark-btn");
const unmarkBtn = document.getElementById("unmark-btn");

// Adding event listeners to the variables
addBtn.addEventListener("click", addTask);
selectAllBtn.addEventListener("click", selectAll);
deleteBtn.addEventListener("click", deleteTask);
markBtn.addEventListener("click", mark);
unmarkBtn.addEventListener("click", unmark);

// function for adding the task
function addTask(){
    const taskText = todoInput.value.trim();
    if(taskText === "") return alert("Please enter a task");

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.classList.add("todo-item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    taskItem.prepend(checkBox);

    document.getElementById("all-todos").appendChild(taskItem);
    todoInput.value = "";
}

// function for selecting all the tasks
function selectAll(){
    const checkboxes = document.querySelectorAll("#all-todos input[type = 'checkbox']");
    checkboxes.forEach(checkBox => checkBox.checked = true);
}

// function for deleting a task
function deleteTask(){
    const tasks = document.querySelectorAll("#all-todos .todo-item");

    tasks.forEach(task => {
        const checkBox = task.querySelector("input[type = 'checkbox']")
        if(checkBox.checked){
            task.remove();
        }
    });
}

// function for marking a task
function mark(){
    const tasks = document.querySelectorAll("#all-todos .todo-item");

    tasks.forEach(task => {
        const checkBox = document.querySelector("input[type = 'checkbox']")
        if(checkBox.checked){
            task.classList.add("completed");
        }
    });
}

// function for unmarking a task
function unmark(){
    const tasks = document.querySelectorAll("#all-todos .todo-item");
    tasks.forEach(task => task.classList.remove("completed"));
}