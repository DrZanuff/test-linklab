import {
  MobileMenuButtonIcon,
  MobileMenuCloseButtonIcon,
} from '@/app/assets/header/icons'
import styles from './mobileMenuButton.module.scss'

export function MobileMenuButton() {
  return (
    <button className={styles.mobileMenuButtonContainer}>
      <MobileMenuButtonIcon />
    </button>
  )
}
