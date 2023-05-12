import { addNewTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';
import { updateStatus } from '../modules/status.js';

describe('Update item status function', () => {
  it('Update unique item status and check Dom', () => {
    const task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    display();

    const input = document.querySelector('.complete');

    // console.log(input.value)
    // input.click();

    input.checked = true;

    updateStatus(input);

    display();

    expect(document.querySelector('.complete').checked).toBe(true);
  });

  it('Update one item status among 10 and check Dom', () => {
    [...Array(10).keys()].map((i) => i + 1).forEach((v) => addNewTask(
      {
        description: `task ${v}`,
        completed: false,
        index: v + 1,
      },
    ));
    display();
    const input = document.querySelectorAll('.complete');
    input[8].checked = true;
    updateStatus(input[8]);
    display();
    expect(document.querySelectorAll('.complete')[8].checked).toBe(true);
  });
  it('Check if status is saved into local storage', () => {
    expect(JSON.parse(localStorage.getItem('list'))[8].completed).toBe(true);
  });
});