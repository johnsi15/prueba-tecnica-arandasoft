import Image from 'next/image'
import Link from 'next/link'
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

      <ul className={styles.categories}>
        <li>
          <Link href='/vegetarianos'>
            <Image src='/assets/ic_vegetarianos.svg' alt='Vegetarianos' width={50} height={50} />
            <span>Vegetarianos</span>
          </Link>
        </li>
        <li>
          <Link href='/platos-principales'>
            <Image src='/assets/ic_principales.svg' alt='Platos Principales' width={50} height={50} />
            <span>Principales</span>
          </Link>
        </li>
        <li>
          <Link href='/tortas'>
            <Image src='/assets/ic_tortas.svg' alt='Tortas' width={50} height={50} />
            <span>Tortas</span>
          </Link>
        </li>
        <li>
          <Link href='/comida-rapida'>
            <Image src='/assets/ic_rapida.svg' alt='Comida Rápida' width={50} height={50} />
            <span>Rápida</span>
          </Link>
        </li>
        <li>
          <Link href='/menu-ninos'>
            <Image src='/assets/ic_menu_ninos.svg' alt='Menú Niños' width={50} height={50} />
            <span>Menú Niños</span>
          </Link>
        </li>
        <li>
          <Link href='/sopas'>
            <Image src='/assets/ic_sopas.svg' alt='Sopas' width={50} height={50} />
            <span>Sopas</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
