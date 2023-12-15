import { useState, useCallback } from 'react'
import Link from 'next/link'
import type { HeaderCategoryProps } from './HeaderCategory.types'
import styles from './headerCategory.module.scss'

export function HeaderCategory({ categories, text, seo }: HeaderCategoryProps) {
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
      {isCategoryOpen && (
        <div className={styles.subMenuContainer}>
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
      )}
    </div>
  )
}
