import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface DesktopHeaderState {
  open: boolean
}

const initialState: DesktopHeaderState = {
  open: false,
}

export const desktopHeaderSlice = createSlice({
  name: 'desktopHeader',
  initialState,
  reducers: {
    open: (state) => {
      state.open = true
    },
    close: (state) => {
      state.open = false
    },
    toggle: (state) => {
      state.open = !state.open
    },
  },
})
