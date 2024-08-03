document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    // Load tasks from Local Storage
    loadTasks();

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');

        const taskTextNode = document.createTextNode(taskText);
        listItem.appendChild(taskTextNode);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-task');
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            saveTasks();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        newTaskInput.value = '';

        saveTasks();
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            const listItem = document.createElement('li');

            const taskTextNode = document.createTextNode(taskText);
            listItem.appendChild(taskTextNode);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-task');
            removeButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
                saveTasks();
            });

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    }

    // Event listener for adding a task
    addTaskButton.addEventListener('click', addTask);

    // Event listener for adding a task by pressing Enter key
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
