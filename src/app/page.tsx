import { Hero } from '@/components/common/hero'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { Banner } from '@/components/common/banner'
import styles from './page.module.scss'

const sampleRecipes = [
  { id: '1', name: 'Ojingeo', subname: 'Muchim', image: '/assets/ic_ojingeo_muchim.png' },
  { id: '2', name: 'Cola', subname: 'Chicken', image: '/assets/ic_cola_chicken.png' },
  { id: '3', name: 'Roasted', subname: 'Carrot', image: '/assets/ic_roasted_carrot.png' },
  { id: '4', name: 'Sweet', subname: 'Cherries', image: '/assets/ic_cherries.png' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <RecipeGrid recipes={sampleRecipes} />
      <Banner />
    </div>
  )
}
