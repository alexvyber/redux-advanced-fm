import { configureStore } from "@reduxjs/toolkit"
import { itemApi } from "./services/api"

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware(getDefault) {
    return getDefault().concat(itemApi.middleware)
  },
})
