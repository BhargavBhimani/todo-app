const btn = document.getElementById('btn');
btn.addEventListener('click', addTask);


function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
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
}
