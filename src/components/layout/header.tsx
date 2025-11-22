import Link from 'next/link'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Recipe <span className={styles['text-app']}>App</span>
        </div>
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
