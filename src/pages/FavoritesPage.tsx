import { useEffect, useState } from 'react'
import { BackgroundGradient } from '../components/BackgroundGradient'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useFavorites } from '../hooks/useFavorites'
import { searchMultipleCoins } from '../services/searchMultipleCoins'
import { CoinType } from '../types/types'
import { FavStarButton } from '../components/FavStarButton'

export function FavoritesPage() {
  const [coins, setCoins] = useState<CoinType[]>([])
  const { favorites } = useFavorites()

  useEffect(() => {
    searchMultipleCoins(favorites).then((newCoins) => setCoins(newCoins))
  }, [favorites])

  console.log(coins)
  return (
    <>
      <BackgroundGradient />
      <Header />
      <main>
        <section>
          <ul className='flex flex-col gap-2'>
            {coins?.map(({ id, image, coin_name, symbol }) => {
              return (
                <li
                  key={id}
                  className='py-2 px-2 border-b border-neutral-700/30'
                >
                  <div className='flex items-center gap-2 '>
                    <FavStarButton id={id} />
                    <img
                      src={image}
                      alt=''
                      className='w-[32px] h-[32px] rounded-full'
                    />
                    <p className='font-medium'>
                      {coin_name}
                      <span className='text-gray-400  ml-2'>
                        {symbol.toUpperCase()}
                      </span>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
