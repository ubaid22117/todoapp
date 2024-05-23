document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', () => editTask(taskSpan));
    taskItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => deleteTask(taskItem));
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    document.getElementById('new-task').value = '';
}

function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task', taskSpan.textContent);
    if (newTaskText !== null && newTaskText !== '') {
        taskSpan.textContent = newTaskText;
    }
}

function deleteTask(taskItem) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(taskItem);
}
