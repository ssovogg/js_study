const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const addBtn = todoForm.querySelector("button");
const todoList = document.getElementById("todo-list");
let todoListArr = [];

todoForm.addEventListener("submit", submitTodo);

function submitTodo(event){
  event.preventDefault();
  const todoListItem = {
    "id": Date.now(),
    "list" : todoInput.value
  }
  todoInput.value = "";
  todoListArr.push(todoListItem);

  localStorage.setItem("todos", JSON.stringify(todoListArr));
  paintTodo(todoListItem);
}

function paintTodo(todoListItem){
  const li = document.createElement("li");
  li.id = todoListItem.id
  const input = document.createElement("input");
  input.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = todoListItem.list;
  const button = document.createElement("button");
  button.innerText = "-"
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  input.addEventListener("change", checkTodo);
  button.addEventListener("click", deleteTodo);
}

function checkTodo(event){
  const li = event.target.parentElement;
  if (li.className !== "complete"){
    li.classList.add("complete")
  } else (
    li.classList.remove("complete")
  )
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  // todoListArr = todoListArr.filter((li) => li.id !== parseInt(li.id));
  // localStorage.setItem("todos", JSON.stringify(todoListArr));
}

const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null){
  const parsedToDos = JSON.parse(savedTodos);
  todoListArr = parsedToDos;
  todoListArr.forEach(paintTodo);
}