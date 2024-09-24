// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from localStorage
    function loadTasks() {
        // Get tasks from localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Loop through the tasks and display them on the page
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to create a new task element and append it to the task list
    function createTaskElement(taskText) {
        // Create a new list item (li) element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Set up the remove button to delete the task
        removeBtn.onclick = function () {
            // Remove task from the DOM
            taskList.removeChild(li);

            // Update localStorage by removing the task
            removeTaskFromStorage(taskText);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);
    }

    // Function to add a task
    function addTask() {
        // Get the task text from the input field and trim whitespace
        const taskText = taskInput.value.trim();
        
        // Check if the input field is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new task element and append it to the list
        createTaskElement(taskText);

        // Save the task to localStorage
        saveTaskToStorage(taskText);

        // Clear the input field
        taskInput.value = "";
    }

    // Function to save a task to localStorage
    function saveTaskToStorage(taskText) {
        // Get the current tasks from localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Add the new task to the array
        tasks.push(taskText);

        // Save the updated tasks array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove a task from localStorage
    function removeTaskFromStorage(taskText) {
        // Get the current tasks from localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Filter out the task to be removed
        const updatedTasks = tasks.filter(task => task !== taskText);

        // Save the updated tasks array back to localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the user presses the "Enter" key inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from localStorage when the page loads
    loadTasks();
});



    // Load tasks from localStorage when the page loads
    loadTasks();
});
