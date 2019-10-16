import { fillTodosUl } from './utils.js';
import Todo from './Todo.js';

let todo = Todo();
let tabSelected = 0; // 0: uncompleted; 1: completed

// show the todos for the first time

renderUncompletedTodo();

// controllers

function todoUlClickHandler(e) {
    switch (e.target.className) {
        case "delete": {
            let id = e.target.parentNode.dataset.id;
            todo.deleteTodo(id);
            rerenderBaseOnTabSelected();
            break;
        }
        case "list-group-item": { // toggle
            let id = e.target.dataset.id;
            todo.toggleTodo(id);
            rerenderBaseOnTabSelected();
            break;
        }

    }

}

function renderUncompletedTodo() {
    tabSelected = 0;
    fillTodosUl("list-group", todo.getNewTodos(), todoUlClickHandler);
    resetButtonStyles();
    document.getElementById("uncompleted").classList.add("btn-success");
}

function renderCompletedTodo() {
    tabSelected = 1;
    fillTodosUl("list-group", todo.getCompletedTodos(), todoUlClickHandler);
    resetButtonStyles();
    document.getElementById("completed").classList.add("btn-success");
}

function rerenderBaseOnTabSelected() {
    if (tabSelected === 0) {
        renderUncompletedTodo();
    } else if (tabSelected === 1) {
        renderCompletedTodo();
    }
}

// event listeners

document.getElementById("uncompleted").addEventListener('click', (e) => {
    renderUncompletedTodo();
})

document.getElementById("completed").addEventListener('click', (e) => {
    renderCompletedTodo();
})

function resetButtonStyles () {
    document.getElementById("completed").classList.remove("btn-success");
    document.getElementById("uncompleted").classList.remove("btn-success");
}

function addTodoHandler(e) {
    // get the new todo text
    let todoText = document.getElementById("new-todo").value;
    todo.addTodo(todoText);
    // clear the input
    document.getElementById("new-todo").value = "";
    rerenderBaseOnTabSelected();
}

document.getElementById("add-todo").addEventListener('click', addTodoHandler);
document.getElementById("new-todo").addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        addTodoHandler(e);
    }
});
