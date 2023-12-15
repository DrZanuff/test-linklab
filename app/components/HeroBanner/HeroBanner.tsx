import { BottleBannerIcon } from '@/app/assets/banner/BottleBannerIcon'
import { GlassBannerIcon } from '@/app/assets/banner/GlassBannerIcon'
import { ToolsIcons } from '@/app/assets/banner/ToolsIcons'
import { Stamp } from '@/app/assets/site/Stamp'
import styles from './heroBanner.module.scss'

export function HeroBanner() {
  return (
    <section className={styles.heroBannerContainer}>
      <div className={`${styles.heroBanner} ${styles.bannerSmall}`}>
        <h4>Produtos</h4>

        <div className={styles.heroBannerdetails}>
          <div className={styles.iconContainer}>
            <GlassBannerIcon />
          </div>

          <h3>Vidrarias e Equipamentos</h3>
        </div>
      </div>

      <div className={`${styles.heroBanner} ${styles.bannerCenter}`}>
        <h4>Químicos</h4>

        <div className={styles.heroBannerdetails}>
          <div className={styles.iconContainer}>
            <BottleBannerIcon />
          </div>

          <h3>Materiais Químicos</h3>
        </div>
      </div>

      <div className={`${styles.heroBanner} ${styles.bannerSmall}`}>
        <h4>Laboratórios</h4>

        <div className={styles.heroBannerdetails}>
          <div className={styles.iconContainer}>
            <ToolsIcons />
          </div>

          <h3>Ferramentas e utensílios</h3>
        </div>
      </div>

      <div className={styles.stamp}>
        <Stamp />
      </div>
    </section>
  )
}
