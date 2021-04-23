const list = document.querySelector('.list-container_task-list');
// Saving to localStorage
window.onload = () => {
  list.innerHTML = localStorage.getItem('ToDo');
};
function updateLocalStorage() {
  localStorage.setItem('ToDo', list.innerHTML);
}
// deleting a task
list.addEventListener('click', (e) => {
  const buttonDelete = e.target.closest('.flex-container_button-delete');
  if (buttonDelete) {
    const task = buttonDelete.closest('li');
    list.removeChild(task);
    toggleEmptyListMessage();
    updateLocalStorage();
  }
});
// task completion mark
list.addEventListener('click', (e) => {
  const taskText = e.target.closest('p');
  if (taskText) {
    const listItem = taskText.closest('li');
    if (listItem) {
      taskText.classList.toggle('is-done');
      listItem.classList.toggle('active');
      if (taskText.classList.contains('is-done')) {
        const importantButton = listItem.querySelector('.flex-container_button-important');
        importantButton.classList.add('none');
        list.append(listItem);
      } else {
        const importantButton = listItem.querySelector('.flex-container_button-important');
        importantButton.classList.remove('none');
        list.prepend(listItem);
      }
      updateLocalStorage();
    }
  }
});
// task importance mark
list.addEventListener('click', (e) => {
  const importantButton = e.target.closest('.flex-container_button-important');
  if (importantButton) {
    const task = importantButton.closest('li');
    if (task) {
      const taskText = task.querySelector('p');
      if (taskText) {
        if (taskText.classList.contains('is-important')) {
          importantButton.classList.remove('not-important');
          importantButton.innerHTML = 'MARK IMPORTANT';
        } else {
          importantButton.classList.add('not-important');
          importantButton.innerHTML = 'NOT IMPORTANT';
        }
        taskText.classList.toggle('is-important');
        taskText.classList.remove('is-done');
        task.classList.add('active');
        updateLocalStorage();
      }
    }
  }
});
const emptyTask = document.querySelector('.empty-task');
const toggleEmptyListMessage = function () {
  const listTask = list.children;
  if (listTask.length === 0) {
    emptyTask.style.display = 'flex';
  } else {
    emptyTask.style.display = 'none';
  }
};
