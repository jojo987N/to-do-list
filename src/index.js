import './style.scss';
import { addNewTask, editTask, removeTask } from './utils.js';

let data = JSON.parse(localStorage.getItem('list')) || [];

const listHead = `<ul class="list">
<li class="item1">Today's To Do <i class="material-icons">sync</i></li>
<li>
  <hr>
</li>
<li class="item3"><input class="enter" type="text" placeholder="Add to your list..."><i
    class="material-icons arrow-left">subdirectory_arrow_left</i></li>
<li>
  <hr>
</li>`;

const listItem = (item) => `<li class="item5">
  <div>
    <input class="complete" type="checkbox" name="checkbox-checked" />
    
    <input class="value" type='text' value="${item.description}"/>
  </div>
  <i class="material-icons more">more_vert</i>
  <i class="material-icons hide">delete</i>
</li>
<li><hr></li>`;

const listFooter = `</ul>
<div class="button-container">
  <button type="button">Clear all completed</button>
</div>`;

const display = () => {
  document.querySelector('.content-1-1').innerHTML = listHead + data.map((item) => listItem(item)).join('') + listFooter;

  document.querySelectorAll('.value').forEach((input, i) => {
    input.onclick = (e) => {
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
};

display();
