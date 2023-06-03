import { addTask, createTask, removeTask, taskReducer } from "./tasks-slice"

describe("tasksSlice", () => {
  const initialState = {
    entities: ["Some Task", "Other Task", "More Tasks"].map(item => createTask({ title: item })),
  }

  it(`should add task when the ${addTask}`, () => {
    const newTask = createTask({ title: "Profit" })
    const action = addTask(newTask)
    const newState = taskReducer(initialState, action)

    expect(newState.entities).toEqual([newTask, ...initialState.entities])
  })
})
