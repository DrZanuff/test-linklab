import { ProductCard } from '../ProductCard'
import { Stamp } from '@/app/assets/site/Stamp'
import styles from './productsList.module.scss'

export function ProductsList() {
  return (
    <section className={styles.productsListContainer}>
      <h2 className={styles.productsListTitle}>Produtos</h2>
      <div className={styles.productList}>
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1572884267966-02340ebc90ac"
          name="Produto"
          price={100}
          rating={7.5}
          imageAlt="Produto"
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1572884267966-02340ebc90ac"
          name="Produto"
          price={100}
          rating={7.5}
          imageAlt="Produto"
        />
        <ProductCard
          imageUrl="https://images.unsplash.com/photo-1572884267966-02340ebc90ac"
          name="Produto"
          price={100}
          rating={7.5}
          imageAlt="Produto"
        />
      </div>
      <div className={styles.mobileStampContainer}>
        <Stamp />
      </div>
    </section>
  )
}
