import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            Recipe <span className={styles['text-app']}>App</span>
          </Link>
        </div>
        <Link href='/' className={styles.homeIcon}>
          <Image src='/assets/ic_home.png' alt='Home' width={24} height={24} />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/vegetarianos'>Vegetarianos</Link>
            </li>
            <li>
              <Link href='/platos-principales'>Platos Principales</Link>
            </li>
            <li>
              <Link href='/tortas'>Tortas</Link>
            </li>
            <li>
              <Link href='/comida-rapida'>Comida Rápida</Link>
            </li>
            <li>
              <Link href='/menu-ninos'>Menú Niños</Link>
            </li>
            <li>
              <Link href='/sopas'>Sopas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
