import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '@/store/favorites/favorites-slice'
import { RootState } from '@/store'

export const useFavorites = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.ids)

  const isFavorite = (id: number) => favorites.includes(id)
  const handleToggle = (id: number) => dispatch(toggleFavorite(id))

  return { isFavorite, handleToggle }
}
