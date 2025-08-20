const inputTodo = document.querySelector('#todo-input');
const todobtn = document.querySelector('button');
const todoItems = document.querySelector('ul');

window.addEventListener('load', loadTodos);

todobtn.addEventListener('click', function (e) {
  e.preventDefault();
  const todoText = inputTodo.value.trim();

  if (todoText === '') {
    alert('Please enter a task');
  } else {
    const todoList = document.createElement('li');
    const todoSpan = document.createElement('span');

    todoList.textContent = todoText;
    todoList.appendChild(todoSpan);
    todoItems.appendChild(todoList);

    inputTodo.value = '';
    saveTodos();
  }
});

todoItems.addEventListener('click', function (e) {
  setTimeout(() => {
    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveTodos();
    }
  }, 250);

  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
    saveTodos();
  }
});
function saveTodos() {
  localStorage.setItem('DataTodo', todoItems.innerHTML);
}
function loadTodos() {
  const saved = localStorage.getItem('DataTodo');
  if (saved) {
    todoItems.innerHTML = saved;
  }
}
