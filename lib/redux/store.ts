/* Core */
import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import {
  counterSlice,
  desktopHeaderSlice,
  mobileHeaderSlice,
} from './rootReducer'

export const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    desktopHeader: desktopHeaderSlice.reducer,
    mobileHeader: mobileHeaderSlice.reducer,
  },
})
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
