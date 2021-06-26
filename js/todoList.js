const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(evnet) {
  const targetTodo = event.target.parentNode;
  targetTodo.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  // console.log(newTodo);
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);
if (savedTodo !== null) {
  const parseTodo = JSON.parse(savedTodo);
  todos = parseTodo;
  parseTodo.forEach(paintTodo);
}
