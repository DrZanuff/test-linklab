/* Components */
import { Providers } from '@/lib/providers'
import { HeaderContainer } from './components/header/HeaderContainer'

/* Instruments */
import styles from './styles/layout.module.scss'
import './styles/layout.module.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={styles.app}>
          <section className={styles.container}>
            <HeaderContainer value="Redux" />
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
