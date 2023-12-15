'use client'

import { useViewport } from '@/app/hooks/useViewport'
import { HeroBanner } from '../HeroBanner'
import styles from './mainContent.module.scss'
import { ProductsList } from '../ProductsList'

export function MainContent() {
  const viewport = useViewport()

  return (
    <section className={styles.mainContentContainer}>
      {viewport === 'mobile' && <HeroBanner />}
      <ProductsList />
    </section>
  )
}
