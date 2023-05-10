import { LocalStorageMock } from "./localStorageMock";
import { addNewTask } from "../src/utils";

global.localStorage = new LocalStorageMock;

describe("Add item function", () => {

    it("add item into data", () => {
        let data = [];
        const task = {
            description: "task 1",
            completed: false,
            index: 1,
        }

        addNewTask(task, data)

        expect(data).toEqual([task])

    })

    it("add multiple items into data", () => {
        let data = [];
        const task = {
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

        let data = [];
        const task = {
            description: "task 1",
            completed: false,
            index: 1,
        }


        addNewTask(task, data)

        expect(JSON.parse(localStorage.getItem('list'))).toEqual([task])

    })

})

