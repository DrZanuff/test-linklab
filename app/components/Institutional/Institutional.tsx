import styles from './institutional.module.scss'

export function Institutional() {
  return (
    <div className={styles.institutionalContainer}>
      <h1 className={styles.institutional}>
        Qualidade e expertise em produtos <b>químicos e acessórios</b>
      </h1>
      <p className={styles.institutionalParagraph}>
        Estamos preparados para te entender e atender da melhor forma para
        suprir todas as suas demandas em químicos e similares.
      </p>
    </div>
  )
}
