import type { ReduxState } from '@/lib/redux'

export const selectMobileHeader = (state: ReduxState) => state.mobileHeader.open
