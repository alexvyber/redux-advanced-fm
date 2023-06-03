import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { AppDispatch, AppState } from "./store"
import { useMemo } from "react"

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export const useTasks = () => {
  const { entities: tasks, loading } = useAppSelector(state => state.tasks)

  return useMemo(() => ({ tasks, loading }), [tasks, loading])
}
