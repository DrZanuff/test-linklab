'use client'

import { DesktopHeader } from '../DesktopHeader'
import { MobileHeader } from '../MobileHeader'
import { useViewport } from '@/app/hooks/useViewport'
import styles from './headerContainer.module.scss'

export function HeaderContainer() {
  const viewport = useViewport()

  console.log('DBG:', { viewport })

  return (
    <div className={styles.headerContainerContainer}>
      {viewport === 'desktop' ? <DesktopHeader /> : <MobileHeader />}
    </div>
  )
}
