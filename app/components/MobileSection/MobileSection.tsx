'use client'

import { useViewport } from '@/app/hooks/useViewport'
import { HeroBanner } from '../HeroBanner'
import styles from './mobileSection.module.scss'

export function MobileSection() {
  const viewport = useViewport()

  if (viewport !== 'mobile') return <></>

  return (
    <div className={styles.mobileSectionContainer}>
      <HeroBanner />
    </div>
  )
}
