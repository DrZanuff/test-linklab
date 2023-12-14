/* Components */
import { Providers } from '@/lib/providers'
import { DesktopHeader } from './components/DesktopHeader'

/* Instruments */
import styles from './styles/layout.module.scss'
import './styles/layout.module.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className={styles.app}>
          <section className={styles.container}>
            <DesktopHeader value="Redux" />
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
