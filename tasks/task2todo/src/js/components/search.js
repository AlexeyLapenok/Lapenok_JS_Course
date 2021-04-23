// Search by letter of task(doesn't work with checked tasks)
const search = document.querySelector('.header_input');
const list = document.querySelector('.list-container_task-list');
search.addEventListener('input', (evt) => {
  list.childNodes.forEach((node) => {
    if (node.querySelector('p').innerHTML.includes(evt.target.value)) {
      node.style.display = 'flex';
    } else {
      node.style.display = 'none';
    }
  });
});
