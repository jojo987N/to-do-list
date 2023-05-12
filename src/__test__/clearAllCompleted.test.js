import { addNewTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';
import { clearAllCompleted, updateStatus } from '../modules/status.js';

describe('Clear all completed items function', () => {
  it('Clear unique completed item and check Dom', () => {
    const task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    display();

    const input = document.querySelector('.complete');

    input.checked = true;

    updateStatus(input);

    display();

    clearAllCompleted();

    display();

    expect(document.querySelector('.complete')).toBe(null);
  });

  it('Clear one completed item among 10 and check Dom', () => {
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

    clearAllCompleted();

    display();

    expect(document.querySelectorAll('.complete')).toHaveLength(9);
  });

  it('Clear four completed items among 10 and check Dom', () => {
    data = [];
    localStorage.store = {};

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
    input[2].checked = true;
    input[6].checked = true;
    input[1].checked = true;

    updateStatus(input[8]);
    updateStatus(input[2]);
    updateStatus(input[6]);
    updateStatus(input[1]);

    display();

    clearAllCompleted();

    display();

    expect(document.querySelectorAll('.complete')).toHaveLength(6);
  });

  it('Check local storage after clear all completed', () => {
    expect(JSON.parse(localStorage.getItem('list'))).toHaveLength(6);
  });
});
