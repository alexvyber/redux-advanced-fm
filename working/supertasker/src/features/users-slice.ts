import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import data from "../api/data.json"
import { nanoid } from "nanoid"

type UserDraft = RequiredByKeys<Partial<User>, "realName" | "alterEgo">
type UsersState = {
  entities: User[]
}

const initialState: UsersState = {
  entities: data.users,
}

function createUser(userDraft: UserDraft): User {
  return { id: nanoid(), tasks: [], ...userDraft }
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserDraft>) => {
      state.entities.unshift(createUser(action.payload))
    },
    removeUser: (state, action: PayloadAction<Prettify<Pick<User, "id">>>) => {
      const index = state.entities.findIndex(item => item.id === action.payload.id)
      state.entities.splice(index, 1)
    },
  },
})

const userReducer = usersSlice.reducer
const { addUser, removeUser } = usersSlice.actions

export { usersSlice, userReducer, addUser, removeUser }
