import type { DesktopHeaderProps } from './DesktopHeader.types'
import styles from './desktopHeader.module.scss'

export function DesktopHeader({ value }: DesktopHeaderProps) {
  return (
    <header className={styles.desktopHeaderContainer}>
      <h1>DesktopHeader</h1>
      <h2>{value}</h2>
    </header>
  )
}
