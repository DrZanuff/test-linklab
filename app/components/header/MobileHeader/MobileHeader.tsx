import type { MobileHeaderProps } from './MobileHeader.types'
import styles from './mobileHeader.module.scss'

export function MobileHeader ( { value } : MobileHeaderProps ) {

  return (
     <div className={styles.mobileHeaderContainer}>
      <h1>MobileHeader</h1>
      <h2>{value}</h2>
    </div>
  )
}