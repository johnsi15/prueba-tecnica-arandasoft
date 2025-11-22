import { Hero } from '@/components/common/hero'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <h1>Main Page</h1>
    </div>
  )
}
