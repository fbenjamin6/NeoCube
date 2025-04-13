import { CATEGORIES } from '../utils/constants'
import { TopIcon, TrendingIcon } from './Icons'

export function TableControl({
  handleCategory,
  category,
}: {
  handleCategory: (e: React.MouseEvent<HTMLButtonElement>) => void
  category: string
}) {
  return (
    <div className='flex gap-4 '>
      <button
        onClick={handleCategory}
        aria-label={CATEGORIES.TOP}
        className={`flex items-center gap-2 rounded-xl py-2 px-3 transition-colors duration-300 cursor-pointer ${
          category === CATEGORIES.TOP
            ? 'bg-[#31CECC]/10 text-[#31CECC]'
            : ' text-gray-300'
        } `}
      >
        <TopIcon />
        Top
      </button>
      <button
        onClick={handleCategory}
        aria-label={CATEGORIES.TRENDING}
        className={`flex items-center gap-2 rounded-xl py-2 px-3 transition-colors duration-300 cursor-pointer ${
          category === CATEGORIES.TRENDING
            ? 'bg-[#31CECC]/10 text-[#31CECC]'
            : ' text-gray-300'
        } `}
      >
        <TrendingIcon />
        Trending
      </button>
    </div>
  )
}
