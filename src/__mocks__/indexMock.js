import { JSDOM } from 'jsdom';
import Item from '../modules/item.js';
import List from '../modules/list.js';
import ContentMock from './contentMock.js';
import LocalStorageMock from './localStorageMock.js';

const dom = new JSDOM();
global.document = dom.window.document;

global.localStorage = new LocalStorageMock();

global.data = JSON.parse(localStorage.getItem('list')) || [];

const display = () => {
//   console.log(data);

  document.body.innerHTML = ContentMock.render();

  const list = new List();

  data.map((item) => list.add(new Item(item).content));

  document.querySelector('.content-1-1').innerHTML = list.body();

  document.querySelectorAll('.value').forEach((input) => {
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
      icons[0].addEventListener('onclick', (event) => {
        event.parentElement.setAttribute('draggable', true);
      });
      icons[1].onclick = () => {
        display();
      };
    };
  });
};

// display()

export default display;