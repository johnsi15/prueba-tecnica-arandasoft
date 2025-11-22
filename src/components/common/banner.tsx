import Image from 'next/image'
import styles from './banner.module.scss'

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <p>Con el Patrocinio de</p>
        <Image src='/assets/products.png' alt='Patrocinadores' width={536} height={248} />
      </div>
    </section>
  )
}
