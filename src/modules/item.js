export default class Item {
  constructor(item) {
    this.content = `<li class="item5" draggable="false" id="${item.index}">
            <div>
                <input class="complete" type="checkbox" name="checkbox-checked" ${!item.completed || 'checked'}/>
                
                <input class="value ${!item.completed || 'line'}" type='text' value="${item.description}"/>
            </div>
            <i class="material-icons more" >more_vert</i>
            <i class="material-icons hide">delete</i>
        </li>
        <li><hr></li>`;
  }
}