import dragAndDrop from './modules/draganddrop.js';
import Item from './modules/item.js';
import List from './modules/list.js';
import { clearAllCompleted, updateStatus } from './modules/status.js';
import './style.scss';
import { addNewTask, editTask, removeTask } from './utils.js';

let data = JSON.parse(localStorage.getItem('list')) || [];

const display = () => {
  const list = new List();

  data.map((item) => list.add(new Item(item).content));

  document.querySelector('.content-1-1').innerHTML = list.body();

  let dragged;
  document.querySelectorAll('.value').forEach((input, i) => {
    const listItem = input.parentElement.parentElement;

    listItem.ondragstart = (e) => {
      dragged = listItem;
      e.dataTransfer.setData('text', listItem.innerHTML);
      listItem.classList.add('dragged');
    };

    listItem.ondragover = (e) => {
      e.preventDefault();
    };

    listItem.ondragenter = () => {
      listItem.classList.add('dropHover');
    };

    listItem.ondragleave = () => {
      listItem.classList.remove('dropHover');
    };

    listItem.ondragend = () => {
      listItem.classList.remove('dragged');
    };

    listItem.ondrop = (e) => {
      e.preventDefault();

      listItem.setAttribute('draggable', true);

      data = dragAndDrop(data, dragged, listItem);

      display();
    };

    const icons = [...input.parentElement.parentElement.childNodes].filter((icon) => icon.innerHTML === 'more_vert' || icon.innerHTML === 'delete');

    icons[0].onmousedown = () => {
      icons[0].parentElement.setAttribute('draggable', true);
    };
    input.onclick = (e) => {
      input.parentElement.parentElement.setAttribute('draggable', false);

      const activeElement = document.querySelector('.active');

      if (activeElement) {
        const icons = [...activeElement.childNodes].filter((icon) => icon.innerHTML === 'more_vert' || icon.innerHTML === 'delete');

        icons[0].classList.remove('hide');
        icons[1].classList.add('hide');

        activeElement.classList.remove('active');
      }
      e.target.parentElement.parentElement.classList.add('active');
      const icons = [...e.target.parentElement.parentElement.childNodes].filter((icon) => icon.innerHTML === 'more_vert' || icon.innerHTML === 'delete');
      icons[0].classList.add('hide');
      icons[1].classList.remove('hide');

      icons[0].addEventListener('onclick', (event) => {
        event.parentElement.setAttribute('draggable', true);
      });

      icons[1].onclick = () => {
        data = removeTask(i, data);

        display();
      };

      e.target.onkeypress = (event) => {
        if (event.key === 'Enter') {
          e.target.parentElement.parentElement.classList.remove('active');
          document.activeElement.blur();
          icons[0].classList.remove('hide');
          icons[1].classList.add('hide');

          editTask(input, i, data);
        }
      };
    };

    const checkbox = [...input.parentElement.children].filter((child) => child.className === 'complete')[0];

    checkbox.onchange = (e) => {
      data = updateStatus(e, i, data);
      display();
    };
  });

  const enter = document.querySelector('.enter');
  enter.onkeypress = (e) => {
    if (e.key === 'Enter') {
      if (!enter.value) return;

      addNewTask({
        description: enter.value,
        completed: false,
        index: data.length + 1,
      }, data);

      display();

      enter.value = '';
    }
  };

  const button = document.querySelector('.button');
  button.onclick = () => {
    data = clearAllCompleted(data);

    display();
  };
};

display();
