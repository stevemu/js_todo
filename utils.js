export function changeTextInNode(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

export let fillTodosUl = (ulId, todosArr, clickHandler) => {
    let ul = document.getElementById(ulId);
    ul.removeEventListener("click", clickHandler); // will this work?
    ul.addEventListener('click', clickHandler);
    ul.innerHTML = ""; // clear it

    for (let item of todosArr) {
        let {id, text} = item;
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.dataset.id = id;
        let textSpan = document.createElement("span");
        textSpan.className = "todo-text"
        textSpan.textContent = text;
        li.appendChild(textSpan);
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "X";
        li.appendChild(deleteButton);
        ul.appendChild(li);
    }
}