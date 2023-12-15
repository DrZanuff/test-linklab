import { BudgetIcon } from '@/app/assets/header/icons'
import type { BudgetButtonProps } from './BudgetButton.types'
import styles from './budgetButton.module.scss'

export function BudgetButton({ type }: BudgetButtonProps) {
  return (
    <button
      className={`${styles.budgetButtonContainer} ${
        type === 'desktop'
          ? styles.budgetButtonContainer_desktop
          : styles.budgetButtonContainer_mobile
      }`}>
      <BudgetIcon />
      {type === 'desktop' && 'Orçamento'}
    </button>
  )
}
