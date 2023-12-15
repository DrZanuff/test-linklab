import { useCallback, useState } from 'react'
import { CaretDownIcon } from '@/app/assets/header/icons'
import { Category } from '../Category'
import { useDispatch, desktopHeaderSlice } from '@/lib/redux'
import type { HeaderCategoryProps } from './HeaderCategory.types'
import styles from './headerCategory.module.scss'

export function HeaderCategory({ categories, text, seo }: HeaderCategoryProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const dispatch = useDispatch()

  const handleMouseEnterCategory = useCallback(() => {
    setIsCategoryOpen(true)
    dispatch(desktopHeaderSlice.actions.open())
  }, [])

  const handleMouseLeaveCategory = useCallback(() => {
    setIsCategoryOpen(false)
    dispatch(desktopHeaderSlice.actions.close())
  }, [])

  return (
    <li className={styles.headerCategoryContainer}>
      <input type="checkbox" id={text + '-checkbox'} checked={isCategoryOpen} />
      <label
        htmlFor={text + '-checkbox'}
        className={`${styles.headerCategoryContainer_label} ${
          isCategoryOpen ? styles.headerCategoryContainer_label_selected : ''
        }`}
        onMouseEnter={handleMouseEnterCategory}>
        {text}
        <CaretDownIcon
          className={`${styles.headerCategoryContainer_label_svg} ${
            isCategoryOpen
              ? styles.headerCategoryContainer_label_svg_selected
              : ''
          }`}
        />
      </label>

      <div
        className={`${styles.subMenuWrapper} ${
          isCategoryOpen ? '' : styles.subMenuWrapper_closed
        }`}
        onMouseLeave={handleMouseLeaveCategory}>
        <Category categories={categories} seo={seo} />
      </div>
    </li>
  )
}
