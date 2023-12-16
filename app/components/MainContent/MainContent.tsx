import styles from './mainContent.module.scss'
import { ProductsList } from '../ProductsList'
import { MobileSection } from '../MobileSection'

export function MainContent() {
  return (
    <section className={styles.mainContentContainer}>
      <MobileSection />
      <ProductsList />
    </section>
  )
}
