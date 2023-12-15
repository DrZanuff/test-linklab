import { BudgetButton } from '../BudgetButton'
import { Category } from '../Category'
import { MobileMenuButton } from '../MobileMenuButton'
import { HalogennLogoWhite } from '@/app/assets/header/HalogennLogoWhite'
import { headerLinks } from '../headerLinks'
import { useSelector, selectMobileHeader } from '@/lib/redux'
import styles from './mobileHeader.module.scss'
import Link from 'next/link'

export function MobileHeader() {
  const isMobileMenuOpen = useSelector(selectMobileHeader)

  const mainLinks = headerLinks.filter((links) => {
    return !links.categories
  })

  const subCategories = headerLinks.filter((links) => {
    return !!links.categories
  })

  const renderLinks = () =>
    mainLinks.map((category, index) => (
      <li key={index} className={styles.mobileLinksListContainer_li}>
        {category?.enabled ? (
          <Link href={String(category?.link)}>{String(category?.text)}</Link>
        ) : (
          <>{String(category?.text)}</>
        )}
      </li>
    ))

  const renderCategories = () =>
    subCategories.map((category, index) => (
      <Category
        key={index}
        categories={category.categories || []}
        seo={category.seo}
      />
    ))

  return (
    <>
      <header className={styles.mobileHeaderContainer}>
        <div className={styles.mobileHeaderInnerWrapper}>
          <HalogennLogoWhite className={styles.mobileLogo} />
          <div className={styles.mobileHeaderButtons}>
            <BudgetButton type="mobile" />
            <MobileMenuButton />
          </div>
        </div>
      </header>
      <section
        className={`${styles.mobileMenuBody} ${
          isMobileMenuOpen
            ? styles.mobileMenuBody_open
            : styles.mobileMenuBody_close
        }`}>
        <h2
          className={`${styles.mobileMenuTitle} ${styles.mobileMenuTitle_compact}`}>
          Navegue por nosso site
        </h2>
        <ul className={styles.mobileLinksListContainer}>{renderLinks()}</ul>
        <div>{renderCategories()}</div>
      </section>
    </>
  )
}
