import Link from 'next/link'
import type { CategoryProps } from './Category.types'
import styles from './category.module.scss'

export function Category({ categories, seo }: CategoryProps) {
  return (
    <section className={styles.subMenuContainer}>
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
    </section>
  )
}
