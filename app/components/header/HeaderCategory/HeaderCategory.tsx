import { useCallback } from 'react'
import { CaretDownIcon } from '@/app/assets/header/icons'
import Link from 'next/link'
import {
  useDispatch,
  desktopHeaderSlice,
  selectDesktopHeader,
  useSelector,
} from '@/lib/redux'
import type { HeaderCategoryProps } from './HeaderCategory.types'
import styles from './headerCategory.module.scss'

export function HeaderCategory({ categories, text, seo }: HeaderCategoryProps) {
  const isCategoryOpen = useSelector(selectDesktopHeader)
  const dispatch = useDispatch()

  const handleClickCategory = useCallback(() => {
    dispatch(desktopHeaderSlice.actions.toggle())
  }, [])

  return (
    <li className={styles.headerCategoryContainer}>
      <input
        type="checkbox"
        id={text + '-checkbox'}
        checked={isCategoryOpen}
        onChange={handleClickCategory}
      />
      <label
        htmlFor={text + '-checkbox'}
        className={`${styles.headerCategoryContainer_label} ${
          isCategoryOpen ? styles.headerCategoryContainer_label_selected : ''
        }`}>
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
        className={`${styles.subMenuContainer} ${
          isCategoryOpen ? '' : styles.subMenuContainer_closed
        }`}>
        <div className={styles.subMenuInnerWrapper}>
          <h2 className={styles.categorySeo}>{seo}</h2>

          <div className={styles.subCategoriesContainer}>
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.subCategory}>
                <h3>{category?.title}</h3>

                <ul className={styles.subCategoriesLinks}>
                  {category.subCategories?.map(
                    (subCategory, subCategoryIndex) => (
                      <li
                        key={subCategoryIndex}
                        className={styles.subCategoryLink}>
                        {subCategory?.icon}
                        {subCategory?.enabled ? (
                          <Link href={String(subCategory?.link)}>
                            {subCategory?.text}
                          </Link>
                        ) : (
                          subCategory.text
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}
