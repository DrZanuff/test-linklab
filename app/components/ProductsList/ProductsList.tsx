import { Stamp } from '@/app/assets/site/Stamp'
import styles from './productsList.module.scss'

export function ProductsList() {
  return (
    <section className={styles.productsListContainer}>
      <h2 className={styles.productsListTitle}>Produtos</h2>
      <div className={styles.productList}>
        <div className={styles.placeHolder}></div>
        <div className={styles.placeHolder}></div>
        <div className={styles.placeHolder}></div>
      </div>
      <div className={styles.mobileStampContainer}>
        <Stamp />
      </div>
    </section>
  )
}
