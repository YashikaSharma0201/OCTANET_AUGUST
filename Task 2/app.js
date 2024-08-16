document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = createTaskItem(taskText);
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    }

    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', listItem.textContent);
            if (newTaskText !== null) {
                listItem.firstChild.textContent = newTaskText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }
});
