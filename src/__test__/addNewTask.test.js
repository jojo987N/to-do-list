import { addNewTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';

describe('Add item function', () => {

  it('add first item and display into the dom', () => {
    
    let task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    display();

    const list = document.querySelectorAll('.item');

    expect(list).toHaveLength(1);

  });

  it('add second item and display into the Dom', () => {

    let task2 = {
        description: 'task 2',
        completed: false,
        index: 2,
      };

    addNewTask(task2);

    display();

    const list = document.querySelectorAll('.item');

    

    expect(list).toHaveLength(2);

  });

  it('data is added into local storage', () => {

    expect(JSON.parse(localStorage.getItem('list'))).toHaveLength(2);
  });
});
