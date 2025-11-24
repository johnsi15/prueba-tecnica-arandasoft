import Image from 'next/image'
import { useFavorites } from '@/hooks/use-favorites'
import type { RecipeCardData } from '@/types/recipe.types'
import styles from './recipe-card.module.scss'

interface RecipeCardProps {
  recipe: RecipeCardData
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { isFavorite, handleToggle } = useFavorites()

  const { name, subname, image, portionSize, prepTime, difficulty, rating } = recipe

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} width={200} height={150} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>
          {name}
          <span>{subname}</span>
        </h3>
        <div className={styles.details}>
          <div className={styles.detail}>
            Tamaño de la porción
            <span>{portionSize}</span>
          </div>
          <div className={styles.detail}>
            Tiempo de preparación
            <span>{prepTime}</span>
          </div>
          <div className={styles.detail}>
            Dificultad
            <span>{difficulty}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.starContainer}>
            <Image src='/assets/ic_star.svg' alt='Estrella' width={23} height={23} className={styles.icon} />
            <span>{rating}</span>
          </div>
          <button onClick={() => handleToggle(recipe.id)} className={styles.favoriteButton}>
            <Image
              src='/assets/ic_heart.svg'
              alt='Favorito'
              width={19}
              height={17}
              className={`${styles.icon} ${isFavorite(recipe.id) ? styles.favoriteActive : styles.favoriteInactive}`}
            />
          </button>
        </div>
      </div>
    </article>
  )
}
