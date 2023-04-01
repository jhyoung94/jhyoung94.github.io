const todoFrm = document.querySelector("#todo-frm");
const todoInput = todoFrm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODO_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "🗑️";
  btn.addEventListener("click", deleteTodo);

  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id;

  li.appendChild(btn);
  li.appendChild(span);
  todoList.append(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoFrm.addEventListener("submit", handleToDoSubmit);

const localTodos = localStorage.getItem(TODO_KEY);

if (!isEmpty(localTodos)) {
  toDos = JSON.parse(localTodos);
  toDos.forEach(paintTodo);
}
