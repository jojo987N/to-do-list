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

//   console.log(document.querySelector('.item5'))
};

// display()

export default display;