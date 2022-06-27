const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

// [1-2] newTodoObj 값을 브라우저에 저장하기
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// [3] todo list 삭제하기
function deleteTodo(event) {
  // 클릭된 버튼의 target(HTML element) 찾아서 활용하기
  const li = event.target.parentElement;
  // HTML 화면에 보이는 리스트 삭제
  li.remove();
  // localStorage에 저장된 정보 삭제 : toDos(배열)에 삭제된(필터링된) 배열 업데이트
  // * li.id : string, toDo.id : number
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodos(); 
};

// [2] todo list 화면에 보이기 < HTML >
function paintTodo(newTodo) {
  const li = document.createElement("li"); // <li> 
  li.id = newTodo.id; // <li id="">
  const span = document.createElement("span"); // <span>
  span.innerText = newTodo.text;
  const button = document.createElement("button"); // <button>
  button.innerText = "X";
  li.appendChild(span);     // li > span
  li.appendChild(button);   // li > button
  todoList.appendChild(li); // ul > li

  button.addEventListener("click", deleteTodo); // -> [3] todo list 삭제하기
}

// [1] submit
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // typeof(newTodo):string
  const newTodoObj = {
    "text": newTodo,
    "id": Date.now(),
  }
  todoInput.value = ""; // submit 할때 입력값 사라지게 하기
  toDos.push(newTodoObj); // => 배열에 입력값, id 저장하기
  paintTodo(newTodoObj); // => [2] HTML에 보이기
  saveTodos(); // => [1-2] localStorage에 배열 저장하기
}

todoForm.addEventListener("submit", handleToDoSubmit);


// [1-3] 저장한 todos 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // savedToDos : string => 배열 형태로 바꾸기(parse) => parsedToDos : array
  const parsedToDos = JSON.parse(savedToDos);
  // toDos(배열)에 저장되있는 배열로 업데이트 (안하면 빈배열로 시작함)
  toDos = parsedToDos;
  // array의 각각의 item을 화면에 보여주기
  parsedToDos.forEach(paintTodo);
}