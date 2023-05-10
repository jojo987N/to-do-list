import { addNewTask } from "../utils";
import { LocalStorageMock } from "./localStorageMock";

global.localStorage = new LocalStorageMock;



describe("Add item function", () => {

    let data;
    let task;

    it("add item into data", () => {
        data = [];
        task = {
            description: "task 1",
            completed: false,
            index: 1,
        }

        addNewTask(task, data)

        expect(data).toEqual([task])

    })

    it("add multiple items into data", () => {
        data = [];
        task = {
            description: "task 1",
            completed: false,
            index: 1,
        }

        addNewTask(task, data)
        addNewTask(task, data)
        addNewTask(task, data)

        expect(data).toEqual([task, task, task])

    })

    it("data is added into local storage", () => {

        data = [];
        task = {
            description: "task 1",
            completed: false,
            index: 1,
        }


        addNewTask(task, data)

        expect(JSON.parse(localStorage.getItem('list'))).toEqual([task])

    })

})

