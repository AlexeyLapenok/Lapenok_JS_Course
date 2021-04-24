// Search by letter of task
const search = document.querySelector('.header_input');
const list = document.querySelector('.list-container_task-list');
search.addEventListener('input', (evt) => {
  list.childNodes.forEach((node) => {
    if (node.querySelector('p').innerHTML.includes(evt.target.value)) {
      // eslint-disable-next-line no-param-reassign
      node.style.display = 'flex';
    } else {
      // eslint-disable-next-line no-param-reassign
      node.style.display = 'none';
    }
  });
});
