function Todo() {
    // read todos from localStorage or init to to be []
    let todos = [];

    if (localStorage.getItem("todos")) {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    function saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function getTodos() {
        return todos;
    }

    function getNewTodos() {
        return todos.filter((todo) => {
            return todo.completed === false;
        })
    }

    function getCompletedTodos() {
        return todos.filter((todo) => {
            return todo.completed === true;
        })
    }

    function addTodo(text) {
        let todoObj = {
            id: cuid(),
            text,
            completed: false
        }
        todos = [todoObj, ...todos];
        saveToLocalStorage();
    }

    function deleteTodo(id) {
        todos = todos.filter((item) => {
            return item.id !== id;
        })
        saveToLocalStorage();
    }

    function toggleTodo(id) {
        let todo = todos.find((item) => {
            return item.id === id;
        })
        todo.completed = !todo.completed;
        saveToLocalStorage();
    }

    return {
        getTodos, addTodo, deleteTodo, toggleTodo, getNewTodos, getCompletedTodos
    }
}

export default Todo;