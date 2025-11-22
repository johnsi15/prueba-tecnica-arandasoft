import Image from 'next/image'
import styles from './recipe-card.module.scss'

interface RecipeCardProps {
  name: string
  subname: string
  image: string
}

export function RecipeCard({ name, subname, image }: RecipeCardProps) {
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
        <div className={styles.actions}>
          <div className={styles.starContainer}>
            <Image src='/assets/ic_star.svg' alt='Estrella' width={23} height={23} className={styles.icon} />
            <span className=''>5.0</span>
          </div>
          <Image src='/assets/ic_heart.svg' alt='Corazón' width={19} height={17} className={styles.icon} />
        </div>
      </div>
    </article>
  )
}
