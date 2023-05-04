export default class List {
  constructor() {
    this.header = `<ul class="list">
            <li class="item1" draggagle="true">Today's To Do <i class="material-icons">sync</i></li>
            <li>
                <hr>
            </li>
            <li class="item3"><input class="enter" type="text" placeholder="Add to your list..."><i
                class="material-icons arrow-left">subdirectory_arrow_left</i></li>
            <li>
                <hr>
            </li>`;
    this.content = [];
    this.footer = `</ul>
            <div class="button-container">
            <button class="button" type="button">Clear all completed</button>
            </div>`;
  }

  add(item) {
    this.content.push(item);
  }

  body() {
    return this.header + this.content.join('') + this.footer;
  }
}