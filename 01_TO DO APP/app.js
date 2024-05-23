document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', handleTodoClick);
  
    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText === '') return;
  
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
        <span class="todo-text">${todoText}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      `;
  
      todoList.appendChild(li);
      todoInput.value = '';
    }
  
    function handleTodoClick(event) {
      if (event.target.classList.contains('delete-btn')) {
        deleteTodo(event.target.parentElement);
      } else if (event.target.classList.contains('edit-btn')) {
        editTodo(event.target.parentElement);
      }
    }
  
    function deleteTodo(todoItem) {
      todoList.removeChild(todoItem);
    }
  
    function editTodo(todoItem) {
      const todoText = todoItem.querySelector('.todo-text').textContent;
      const newTodoText = prompt('Edit your task', todoText);
      if (newTodoText !== null) {
        todoItem.querySelector('.todo-text').textContent = newTodoText;
      }
    }
  });
  