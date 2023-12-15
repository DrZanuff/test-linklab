import { createSlice } from '@reduxjs/toolkit'

export interface MobileHeaderState {
  open: boolean
}

const initialState: MobileHeaderState = {
  open: false,
}

export const mobileHeaderSlice = createSlice({
  name: 'mobileHeaderSlice',
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
