import { addNewTask, removeTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';

describe('Remove  item function', () => {
  it('Remove unique item and check Dom', () => {
    const task1 = {
      description: 'task 1',
      completed: false,
      index: 1,
    };

    addNewTask(task1);

    display();

    const input = document.querySelector('.value');

    input.click();

    removeTask(0);
    display();

    const list = document.querySelectorAll('.item');

    expect(list).toHaveLength(0);
  });

  it('Remove one item out of 10 and check Dom', () => {
    [...Array(10).keys()].map((i) => i + 1).forEach((v) => addNewTask(
      {
        description: `task ${v}`,
        completed: false,
        index: v + 1,
      },
    ));

    display();

    const input = document.querySelectorAll('.value');

    input[8].click();

    removeTask(8);

    display();

    const list = document.querySelectorAll('.item');

    expect(list).toHaveLength(9);
  });

  it('data is removed into local storage', () => {
    expect(JSON.parse(localStorage.getItem('list'))).toHaveLength(9);
  });
});