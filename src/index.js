import './style.scss';

const data = [
  {
    description: 'Double-tap to edit',
    completed: false,
    index: 0,
  },
  {
    description: "Drag 'n drop to reorder your list",
    completed: false,
    index: 1,
  },
  {
    description: 'Manage all your lists in one place',
    completed: true,
    index: 2,
  },
  {
    description: 'Resync to clear out the old',
    completed: false,
    index: 3,
  },
];

const listHead = `<ul>
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
</li>
<li><hr></li>`;

const listFooter = `</ul>
<div class="button-container">
  <button type="button">Clear all completed</button>
</div>`;

document.querySelector('.content-1-1').innerHTML = listHead + data.map((item) => listItem(item)).join('') + listFooter;
