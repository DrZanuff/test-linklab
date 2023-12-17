'use client'

import { ProductCard } from '../ProductCard'
import { Stamp } from '@/app/assets/site/Stamp'
import styles from './productsList.module.scss'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/app/requests/fetchProducts'

export function ProductsList() {
  const { data } = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

  const products = data || []

  return (
    <section className={styles.productsListContainer}>
      <h2 className={styles.productsListTitle}>Produtos</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            rating={product.rating}
            imageAlt={product.imageAlt}
          />
        ))}
      </div>
      <div className={styles.mobileStampContainer}>
        <Stamp />
      </div>
    </section>
  )
}
