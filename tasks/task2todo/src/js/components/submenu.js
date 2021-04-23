// Switch between tabs
const submenu = document.querySelector('.submenu-container_submenu');
const submenuAll = document.querySelector('.submenu-container_submenu_all');
const submenuActive = document.querySelector('.submenu-container_submenu_active');
const submenuDone = document.querySelector('.submenu-container_submenu_done');
const inputAdd = document.querySelector('.add-container_task-form');
const listTask = document.querySelector('.list-container_task-list');

submenu.addEventListener('click', (e) => {
  const all = e.target.closest('.submenu-container_submenu_all');
  const active = e.target.closest('.submenu-container_submenu_active');
  const done = e.target.closest('.submenu-container_submenu_done');
  if (active) {
    submenuDone.classList.remove('select');
    submenuAll.classList.remove('select');
    submenuActive.classList.add('select');
    inputAdd.classList.remove('none');
    const taskLi = listTask.children;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < taskLi.length; i++) {
      if (taskLi[i].classList.contains('active')) {
        taskLi[i].classList.remove('none');
      }
      if (taskLi[i]) {
        const taskText = taskLi[i].querySelector('p');
        if (taskText.classList.contains('is-done')) {
          taskLi[i].classList.add('none');
        }
      }
    }
  }
  if (all) {
    submenuDone.classList.remove('select');
    submenuActive.classList.remove('select');
    submenuAll.classList.add('select');
    inputAdd.classList.remove('none');
    const taskLi = listTask.children;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < taskLi.length; i++) {
      if (taskLi[i].classList.contains('active') || taskLi[i].classList.contains('none')) {
        taskLi[i].classList.remove('none');
      }
    }
  }
  if (done) {
    submenuAll.classList.remove('select');
    submenuActive.classList.remove('select');
    submenuDone.classList.add('select');
    inputAdd.classList.add('none');
    const task = done.closest('main');
    const taskLi = listTask.children;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < taskLi.length; i++) {
      if (taskLi[i].classList.contains('active')) {
        taskLi[i].classList.add('none');
      } else if (taskLi[i].classList.contains('none')) {
        taskLi[i].classList.remove('none');
      }
    }
    if (task) {
      const list = task.querySelector('.list-container_task-list li');
      if (list) {
        const taskText = list.querySelector('p');
        if (taskText.classList.contains('is-done')) {
          listTask.append(list);
        }
      }
    }
  }
});
