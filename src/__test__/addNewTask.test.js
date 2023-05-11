import { addNewTask } from '../utils.js';
import LocalStorageMock from '../__mocks__/localStorageMock.js';
import display from '../__mocks__/indexMock.js';

global.localStorage = new LocalStorageMock();

// global.data = [1]

describe('Add item function', () => {
  let task;

  it('add item and display into the dom', () => {
    // data = [];
    task = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task, data);

    expect(data).toEqual([task]);

    display();
  });

  it('display item into the Dom', () => {

    // display

  });

  it('add multiple items into data', () => {
    data = [];
    task = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task, data);
    addNewTask(task, data);
    addNewTask(task, data);

    expect(data).toEqual([task, task, task]);
  });

  it('data is added into local storage', () => {
    data = [];
    task = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task, data);

    expect(JSON.parse(localStorage.getItem('list'))).toEqual([task]);
  });
});
