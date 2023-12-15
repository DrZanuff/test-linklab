'use client'

import { DesktopHeader } from '../DesktopHeader'
import { MobileHeader } from '../MobileHeader'
import { Institutional } from '@/app/components/Institutional'
import { useViewport } from '@/app/hooks/useViewport'
import styles from './headerContainer.module.scss'
import { Decals } from '@/app/assets/site/Decals'
import { HeroBanner } from '../../HeroBanner'

export function HeaderContainer() {
  const viewport = useViewport()

  return (
    <div className={styles.headerContainerContainer}>
      {viewport === 'desktop' ? <DesktopHeader /> : <MobileHeader />}
      {viewport === 'mobile' ? (
        <>
          <Institutional />
          <div className={styles.mobileDecal}>
            <Decals />
          </div>
        </>
      ) : (
        <HeroBanner />
      )}
    </div>
  )
}
