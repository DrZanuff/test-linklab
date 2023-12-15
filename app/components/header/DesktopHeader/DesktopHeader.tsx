import { useState } from 'react'
import { HalogennLogo } from '@/app/assets/header/HalogennLogo'
import { HalogennLogoWhite } from '@/app/assets/header/HalogennLogoWhite'
import { HeaderCategory } from '../HeaderCategory'
import Link from 'next/link'
import { headerLinks } from '../headerLinks'
import type { DesktopHeaderProps } from './DesktopHeader.types'
import styles from './desktopHeader.module.scss'

export function DesktopHeader({ value }: DesktopHeaderProps) {
  const renderLinks = () => {
    return headerLinks.map((headerLink, linkIndex) => {
      if (headerLink?.categories) {
        return (
          <HeaderCategory
            categories={headerLink?.categories}
            text={String(headerLink?.text)}
            seo={String(headerLink?.seo)}
          />
        )
      }

      return (
        <li key={linkIndex}>
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
      <div className={styles.desktopHeaderInnerWrapper}>
        <div className={styles.headerNavContainer}>
          <HalogennLogoWhite />
          <nav className={styles.navContainer}>
            <ul>{renderLinks()}</ul>
          </nav>
        </div>
        <div>Orçamentos</div>
      </div>
    </header>
  )
}
