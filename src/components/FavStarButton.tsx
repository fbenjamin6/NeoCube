import { useFavorites } from '../hooks/useFavorites'
import { StarIcon, StarIconFilled } from './Icons'

export function FavStarButton({ id }: { id: string }) {
  const { isInFavorites, removeFavorite, addFavorite } = useFavorites()

  const isFavorited = isInFavorites(id)
  return (
    <button
      onClick={() => {
        return isFavorited ? removeFavorite(id) : addFavorite(id)
      }}
      className='relative cursor-pointer w-5 h-5 flex'
    >
      <StarIcon isFavorited={isFavorited} />
      <StarIconFilled isFavorited={isFavorited} />
    </button>
  )
}
