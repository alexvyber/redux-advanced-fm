import { createAction, createReducer } from "@reduxjs/toolkit"

type CounterState = { count: number }

export const inc = createAction("INCREMENT", (amount: number) => ({
  payload: amount,
}))
export const dec = createAction("DECREMENT", (amount: number) => ({
  payload: amount,
}))
export const reset = createAction("RESET")

type CounterAction = ReturnType<typeof inc> | ReturnType<typeof dec> | ReturnType<typeof reset>

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === inc.type) {
    return { count: state.count + action.payload }
  }

  if (action.type === dec.type) {
    return { count: state.count - action.payload }
  }

  if (action.type === reset.type) {
    return { count: 0 }
  }

  return state
}

export const counterReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase(inc, (state, action) => {
    state.count += action.payload
  })

  builder.addCase(dec, (state, action) => {
    state.count -= action.payload
  })

  builder.addCase(reset, (state, action) => {
    state.count = 0
  })
})

