import { LocalStorageMock } from "../src/modules/localStorageMock";
import { addNewTask } from "../src/utils";

global.localStorage = new LocalStorageMock;

describe("Add item function", () => {

    let data = [];
        const task = {
            description: "task 1",
            completed: false,
            index: 1,
    }

    it("data is added into local storage", () => {
         
        addNewTask(task, data)
    
        expect(JSON.parse(localStorage.getItem('list'))).toEqual([task])
    
            })

     

})

