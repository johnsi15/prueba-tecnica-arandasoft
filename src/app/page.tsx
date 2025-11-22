import { Hero } from '@/components/common/hero'
import { RecipeGrid } from '@/components/recipes/recipe-grid'
import { Banner } from '@/components/common/banner'
import styles from './page.module.scss'

const sampleRecipes = [
  { id: '1', name: 'Ojingeo', subname: 'Muchim', image: '/assets/ic_ojingeo_muchim.png', portionSize: '4 raciones', prepTime: '10 minutos', difficulty: 'fácil' },
  { id: '2', name: 'Cola', subname: 'Chicken', image: '/assets/ic_cola_chicken.png', portionSize: '4 raciones', prepTime: '15 minutos', difficulty: 'medio' },
  { id: '3', name: 'Roasted', subname: 'Carrot', image: '/assets/ic_roasted_carrot.png', portionSize: '2 raciones', prepTime: '20 minutos', difficulty: 'fácil' },
  { id: '4', name: 'Sweet', subname: 'Cherries', image: '/assets/ic_cherries.png', portionSize: '6 raciones', prepTime: '5 minutos', difficulty: 'fácil' },
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
