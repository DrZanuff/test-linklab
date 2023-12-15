import { HalogennLogo } from '@/app/assets/header/HalogennLogo'
import { HalogennLogoWhite } from '@/app/assets/header/HalogennLogoWhite'
import { Decals } from '@/app/assets/site/Decals'
import { HeaderCategory } from '../HeaderCategory'
import { BudgetButton } from '../BudgetButton'
import Link from 'next/link'
import { selectDesktopHeader, useSelector } from '@/lib/redux'
import { headerLinks } from '../headerLinks'
import styles from './desktopHeader.module.scss'

export function DesktopHeader() {
  const isDesktopOpen = useSelector(selectDesktopHeader)

  const renderLinks = () => {
    return headerLinks.map((headerLink, linkIndex) => {
      if (headerLink?.categories) {
        return (
          <HeaderCategory
            categories={headerLink?.categories}
            text={String(headerLink?.text)}
            seo={String(headerLink?.seo)}
            key={linkIndex}
          />
        )
      }

      return (
        <li key={linkIndex} className={styles.navContaine_li}>
          {headerLink.enabled && headerLink.link ? (
            <Link href={headerLink.link}>{headerLink?.text}</Link>
          ) : (
            headerLink?.text
          )}
        </li>
      )
    })
  }

  return (
    <header className={styles.desktopHeaderContainer}>
      <div className={styles.decalContainer}>
        <Decals className={styles.decal} />
      </div>
      <div className={styles.desktopHeaderInnerWrapper}>
        <div className={styles.headerNavContainer}>
          {isDesktopOpen ? (
            <HalogennLogo className={styles.headerNavContainer_svg} />
          ) : (
            <HalogennLogoWhite className={styles.headerNavContainer_svg} />
          )}
          <nav className={styles.navContainer}>
            <ul className={styles.navContaine_ul}>{renderLinks()}</ul>
          </nav>
        </div>
        <BudgetButton type="desktop" />
      </div>
    </header>
  )
}
