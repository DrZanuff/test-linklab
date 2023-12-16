import type { ProductCardProps } from './ProductCard.types'
import Image from 'next/image'
import styles from './productCard.module.scss'

export function ProductCard({
  imageUrl,
  name,
  price,
  rating,
  imageAlt,
}: ProductCardProps) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productImageContainer}>
        <Image
          src={imageUrl}
          alt={imageAlt || 'Product Image'}
          fill
          objectFit="cover"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productDetails}>
          <span className={styles.productFont}>{name}</span>
          <span className={styles.productRating}>Nota:&nbsp;{rating}</span>
        </div>

        <span className={styles.productFont}>${price}</span>
      </div>
    </div>
  )
}
