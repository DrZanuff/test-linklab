/* Components */
import { Providers } from '@/lib/providers'
import { HeaderContainer } from './components/header/HeaderContainer'
import { DM_Sans, Roboto } from 'next/font/google'
import styles from './styles/layout.module.scss'
import './styles/layout.module.scss'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
  display: 'swap',
})

const roboto = Roboto({
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="pt-BR" className={`${dmSans.variable} ${roboto.variable}`}>
        <body className={styles.app}>
          <section className={styles.container}>
            <HeaderContainer />
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
