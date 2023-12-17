import { MainContent } from './components/MainContent'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { fetchProducts } from './requests/fetchProducts'

export default async function IndexPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainContent />
    </HydrationBoundary>
  )
}

export const metadata = {
  title: 'Halogenn',
}
