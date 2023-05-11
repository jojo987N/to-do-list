import { addNewTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';

describe('Add item function', () => {

  it('add first item and display into the dom', () => {
    // data = [];
    let task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    // expect(data).toEqual([task1]);

    display();
  });

  it('add second item and display into the Dom', () => {

    let task2 = {
        description: 'task 2',
        completed: false,
        index: 2,
      };

    addNewTask(task2);
    console.log(data)
     
     

    // expect(data).toEqual([task1, task2]);
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
