const today = new Date().getDate();

// todo
const $todo = document.querySelector(".todo");
$todo.innerHTML = `
  <header class="todo-header">
    <h2>Day ${today}</h2>
    <button class="create-btn"><i class="fa-solid fa-square-plus"></i></button>
  </header>
  <form class="create-form">
    <input type="text" />
    <button>+</button>
  </form>
  <ul class="todo-list"></ul>
`;
export const $todoDate = document.querySelector(".todo h2");
const $createForm = document.querySelector('.create-form');
const $createInput = $createForm.querySelector('input');
const $todos = document.querySelector('.todo-list')
let todos = [];


$createForm.addEventListener('submit', e => {
  e.preventDefault();
  let todo = $createInput.value;
  let todoListTag = `<li>
    <button class="todo-check"><i class="fa-regular fa-square"></i></button>
    <span>${todo}</span>
    <button class="todo-edit"><i class="fa-solid fa-pen"></i></button>
    <button class="todo-delete"><i class="fa-solid fa-trash-can"></i></button>
  </li>`
  todos.push(todoListTag);
  $todos.innerHTML = todos.join('');
  console.log(todos);
  $createInput.value = '';

  const $todoList = document.querySelectorAll(".todo-list li");
  for (const list of $todoList) {
    const check = list.querySelector(".todo-check");
    const text = list.querySelector("span");
    const edit = list.querySelector(".todo-edit");
    check.addEventListener("click", (e) => {
      e.target.classList.toggle("fa-square-check");
      text.classList.toggle("todo-checked");
    });
  }

})