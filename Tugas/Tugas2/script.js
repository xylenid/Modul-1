let tasks = [];

function addTask() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    
    if (task !== "") {
        tasks.push(task);
        renderTasks();
        input.value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}
