import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"
import { removeUser } from "./users-slice"

type TaskDraft = RequiredByKeys<Partial<Task>, "title">
type TaskState = {
  entities: Task[]
  loading?: boolean
}

export const createTask = (taskDraft: TaskDraft): Task => ({ id: nanoid(), ...taskDraft })

const initialState: TaskState = {
  entities: [],
  loading: false,
}

export const fetchTasks = createAsyncThunk("taks/fetchtasks", async () => {
  const res = await fetch("/api/tasks").then(res => res.json())
  return res.tasks as Task[]
})

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskDraft>) => {
      state.entities.unshift(createTask(action.payload))
    },
    removeTask: (state, action: PayloadAction<Prettify<Pick<Task, "id">>>) => {
      const index = state.entities.findIndex(item => item.id === action.payload.id)
      state.entities.splice(index, 1)
    },
  },
  extraReducers: builder => {
    builder.addCase(removeUser, (state, action) => {
      for (const task of state.entities) {
        if (task.user === action.payload.id) {
          task.user = undefined
        }
      }
    })

    builder.addCase(fetchTasks.pending, state => {
      state.loading = true
    })

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.entities = action.payload
      state.loading = false
    })
  },
})

export const taskReducer = tasksSlice.reducer
export const { addTask, removeTask } = tasksSlice.actions
