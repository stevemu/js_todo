import { fillTodosUl } from './utils.js';
import Todo from './Todo.js';

let todo = Todo();

// show the todos for the first time

renderTodo();

// controllers

function todoUlClickHandler(e) {
    switch (e.target.className) {
        case "delete": {
            let id = e.target.parentNode.dataset.id;
            todo.deleteTodo(id);
            renderTodo();
            break;
        }

        case "todo-text": {
            let id = e.target.parentNode.dataset.id;
            todo.toggleTodo(id);
            renderTodo();
            break;
        }

    }

}

function renderTodo() {
    fillTodosUl("list-group", todo.getNewTodos(), todoUlClickHandler);
}

// event listeners

document.getElementById("uncompleted").addEventListener('click', (e) => {
    fillTodosUl("list-group", todo.getNewTodos(), todoUlClickHandler);

})

document.getElementById("completed").addEventListener('click', (e) => {
    fillTodosUl("list-group", todo.getCompletedTodos(), todoUlClickHandler);

})

function addTodoHandler(e) {
    // get the new todo text
    let todoText = document.getElementById("new-todo").value;
    todo.addTodo(todoText);
    // clear the input
    document.getElementById("new-todo").value = "";
    renderTodo();
}

document.getElementById("add-todo").addEventListener('click', addTodoHandler);
document.getElementById("new-todo").addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        addTodoHandler(e);
    }
});
