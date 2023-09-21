document.addEventListener('DOMContentLoaded', init);

function init() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


    const viewAll = document.getElementById('viewAll');
    viewAll.addEventListener('click', loadTasks);
    viewAll.addEventListener('click', function (event) {
        if (event) {
            viewAll.style.display = 'none'
        }
    })
}

const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const div = document.createElement('div');
        div.className = "space-x-12 m-2 bg-slate-100 px-2 flex flex-row items-center";

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.onchange = function () {
            completeTask(this);
        };

        const span = document.createElement('span');
        span.className = "text-2xl w-[200px] text-orange-500";
        span.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = "X";
        button.onclick = function () {
            removeTask(this);
        };

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(button);
        taskItem.appendChild(div);
        taskList.appendChild(taskItem);
        taskInput.value = '';

        saveTask(taskText);
    }
}

function completeTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();

    const taskText = taskItem.querySelector('span').textContent;
    removeTaskFromLocalStorage(taskText);
}

function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(taskText);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function (taskText) {
        const taskItem = document.createElement('li');
        const div = document.createElement('div');
        div.className = "space-x-12 m-2 bg-slate-100 px-2 flex flex-row items-center";

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.onchange = function () {
            completeTask(this);
        };

        const span = document.createElement('span');
        span.className = "text-2xl w-[200px] text-orange-500";
        span.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = "X";
        button.onclick = function () {
            removeTask(this);
        };

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(button);
        taskItem.appendChild(div);
        taskList.appendChild(taskItem);
    });
}

function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const index = tasks.indexOf(taskText);
    // console.log(index);
    if (index !== -1) {
        tasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
