// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

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
            taskList.removeChild(li);
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

        // Clear the input field
        taskInput.value = "";
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the user presses the "Enter" key inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

    // Load tasks from localStorage when the page loads
    loadTasks();
});
