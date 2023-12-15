import { BudgetButton } from '../BudgetButton'
import { HalogennLogoWhite } from '@/app/assets/header/HalogennLogoWhite'
import styles from './mobileHeader.module.scss'

export function MobileHeader() {
  return (
    <header className={styles.mobileHeaderContainer}>
      <div className={styles.mobileHeaderInnerWrapper}>
        <HalogennLogoWhite className={styles.mobileLogo} />
        <div className={styles.mobileHeaderButtons}>
          <BudgetButton type="mobile" />
        </div>
      </div>
    </header>
  )
}
