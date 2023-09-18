function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<div class="space-x-12 m-2 bg-slate-100 px-2 flex flex-row items-center">
                    <input type="checkbox" onchange="completeTask(this)">
                    <span class="text-2xl w-[200px] text-orange-500">${taskText}</span>
                    <button onclick="removeTask(this)" class="">X</button>
                    </div>
                `;
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
    const taskItem = button.parentElement;
    taskItem.remove();
}
