import { ProductCardProps } from '@/app/components/ProductCard/ProductCard.types'

export async function fetchProducts(): Promise<ProductCardProps[]> {
  const url = 'https://run.mocky.io/v3/337043ac-6807-4c5a-a303-4ab9a232a6e1'

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const data = await response.json()

    // Assuming the structure of the response is as expected
    const products: ProductCardProps[] = data.products

    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
