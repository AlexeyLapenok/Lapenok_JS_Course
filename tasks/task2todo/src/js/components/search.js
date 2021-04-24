// Search by letter of task(doesn't work with complited tasks)
const search = document.querySelector('.header_input');
const list = document.querySelector('.list-container_task-list');
search.addEventListener('input', (evt) => {
  list.childNodes.forEach((node) => {
    const text = node.querySelectorAll('.is-done');
    console.log(text);
    if (node.querySelector('p').innerHTML.includes(evt.target.value)) {
      // eslint-disable-next-line no-param-reassign
      node.style.display = 'flex';
    } else {
      // eslint-disable-next-line no-param-reassign
      node.style.display = 'none';
    }
  });
});
