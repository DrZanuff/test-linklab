import { useState, useCallback } from 'react'
import type { HeaderCategoryProps } from './HeaderCategory.types'
import styles from './headerCategory.module.scss'

export function HeaderCategory({ categories, text }: HeaderCategoryProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const handleClickCategory = useCallback(() => {
    setIsCategoryOpen((prev) => !prev)
  }, [])

  return (
    <div className={styles.headerCategoryContainer}>
      <input
        type="checkbox"
        id={text + '-checkbox'}
        checked={isCategoryOpen}
        onChange={handleClickCategory}
      />
      <label htmlFor={text + '-checkbox'}>{text}</label>
      {isCategoryOpen && <div className={styles.subMenu}></div>}
    </div>
  )
}
