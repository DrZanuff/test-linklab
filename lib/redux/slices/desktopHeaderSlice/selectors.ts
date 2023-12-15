import type { ReduxState } from '@/lib/redux'

export const selectDesktopHeader = (state: ReduxState) =>
  state.desktopHeader.open
