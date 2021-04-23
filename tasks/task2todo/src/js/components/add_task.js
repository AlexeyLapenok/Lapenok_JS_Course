const list = document.querySelector('.list-container_task-list');
const input = document.querySelector('.add-container_task-form--input');
const form = document.querySelector('.add-container_task-form');
const emptyTask = document.querySelector('.empty-task');
const listTask = list.children;
// Saving to localStorage
window.onload = () => {
  list.innerHTML = localStorage.getItem('ToDo');
};
function updateLocalStorage() {
  localStorage.setItem('ToDo', list.innerHTML);
}

const toggleEmptyListMessage = function () {
  if (listTask.length === 0) {
    emptyTask.style.display = 'none';
  } else {
    emptyTask.style.display = 'none';
  }
};
toggleEmptyListMessage();

// create a task
form.onsubmit = addTaskItem;
function addTaskItem(evt) {
  evt.preventDefault();
  const newTask = document.createElement('li');
  newTask.classList.add('active');

  const taskText = document.createElement('p');

  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');

  const buttonImportant = document.createElement('button');
  buttonImportant.classList.add('flex-container_button-important');
  buttonImportant.innerHTML = 'MARK IMPORTANT';

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('flex-container_button-delete');

  taskText.textContent = input.value;
  list.prepend(newTask);
  newTask.append(taskText);
  newTask.appendChild(flexContainer);
  flexContainer.appendChild(buttonImportant);
  flexContainer.appendChild(buttonDelete);
  input.value = '';
  toggleEmptyListMessage();
  updateLocalStorage();
}

// adding a task by clicking on the enter
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    addTaskItem(evt);
    evt.preventDefault();
  }
});
