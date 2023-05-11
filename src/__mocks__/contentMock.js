export default class ContentMock {
  static render() {
    return `<div class="content-1-1">
        <ul>
          <li class="item1">Today's To Do <i class="material-icons">sync</i></li>
          <li>
            <hr>
          </li>
          <li class="item3"><input class="enter" type="text" placeholder="Add to your list..."><i
              class="material-icons">subdirectory_arrow_left</i></li>
          <li>
            <hr>
          </li>
          <li class="item5">
            <div>
              <input class="complete" type="checkbox" name="checkbox-checked" />

              <label>Drag 'n drop to reorder your list</label>
            </div>
            <i class="material-icons">more_vert</i>
          </li>
          <li>
            <hr>
          </li>
        </ul>
        <div class="button-container">
          <button type="button">Clear all completed</button>
        </div>

      </div>`;
  }
}