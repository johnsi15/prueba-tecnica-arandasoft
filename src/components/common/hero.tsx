import Image from 'next/image'
import styles from './hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src='/assets/hero-image.webp'
        alt='Recetas para todos'
        className={styles.image}
        width={1200}
        height={416}
      />

      <div className={styles.text}>
        <h1>Recetas</h1>
        <span>para todos</span>
      </div>
    </section>
  )
}
