const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const targetTodo = event.target.parentNode;
  targetTodo.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(targetTodo.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);
if (savedTodo !== null) {
  const parseTodo = JSON.parse(savedTodo);
  todos = parseTodo;
  parseTodo.forEach(paintTodo);
}
