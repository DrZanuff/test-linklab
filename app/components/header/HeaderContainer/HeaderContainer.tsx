'use client'

import { DesktopHeader } from '../DesktopHeader'
import { MobileHeader } from '../MobileHeader'
import { useViewport } from '@/app/hooks/useViewport'
import type { HeaderContainerProps } from './HeaderContainer.types'
import styles from './headerContainer.module.scss'

export function HeaderContainer({ value }: HeaderContainerProps) {
  const viewport = useViewport()

  return (
    <div className={styles.headerContainerContainer}>
      {viewport === 'desktop' ? <DesktopHeader /> : <MobileHeader />}
    </div>
  )
}
