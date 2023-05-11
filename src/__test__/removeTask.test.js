import { addNewTask, removeTask } from '../utils.js';
import display from '../__mocks__/indexMock.js';
  
describe( "Remove first item function", () => {
   it("  ", () => {
      
       let task1 = {
           description: 'task 1',
           completed: false,
           index: 1,
         };
    
       addNewTask(task1);
    
       display();
       const input = document.querySelector('.value');
        input.click()
        removeTask(0)
        console.log(data)
        display()
      
   })
   describe

})