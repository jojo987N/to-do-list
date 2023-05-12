import { addNewTask, editTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';

describe('Edit item description function', () => {
  it('Edit unique item and check Dom', () => {
    const task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    display();

    const input = document.querySelector('.value');

    // console.log(input.value)
    // input.click();

    input.value = 'update task 1';

    editTask(input);

    display();

    expect(document.querySelector('.value').value).toBe('update task 1');
  });

  it('Edit one item among 10 and check Dom', () => {
    [...Array(10).keys()].map((i) => i + 1).forEach((v) => addNewTask(
      {
        description: `task ${v}`,
        completed: false,
        index: v + 1,
      },
    ));

    display();

    const input = document.querySelectorAll('.value');

    // input[8].click();

    input[8].value = 'update task 1';

    editTask(input[8]);

    display();

    expect(document.querySelectorAll('.value')[8].value).toBe('update task 1');
  });

  it('Check if description is saved into local storage', () => {
    expect(JSON.parse(localStorage.getItem('list'))[8].description).toBe('update task 1');
  });
});