import {
  MobileMenuButtonIcon,
  MobileMenuCloseButtonIcon,
} from '@/app/assets/header/icons'
import {
  selectMobileHeader,
  mobileHeaderSlice,
  useDispatch,
  useSelector,
} from '@/lib/redux'
import styles from './mobileMenuButton.module.scss'

export function MobileMenuButton() {
  const isMobileMenuOpen = useSelector(selectMobileHeader)
  const dispatch = useDispatch()

  const handleButtonMenuClick = () => {
    dispatch(mobileHeaderSlice.actions.toggle())
  }

  return (
    <button
      className={styles.mobileMenuButtonContainer}
      onClick={handleButtonMenuClick}>
      {isMobileMenuOpen ? (
        <MobileMenuCloseButtonIcon
          className={`${styles.closeMobileButton} ${styles.mobileMenuButton}`}
        />
      ) : (
        <MobileMenuButtonIcon className={styles.mobileMenuButton} />
      )}
    </button>
  )
}
