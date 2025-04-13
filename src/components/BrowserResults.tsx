import { CoinType } from '../types/types'
import { FavStarButton } from './FavStarButton'
import { CaretUp, CaretDown } from './Icons'

export function BrowserResults({ coins }: { coins: CoinType[] }) {
  return (
    <>
      {coins ? (
        <ul className='flex flex-col w-full'>
          {coins?.map(
            ({
              id,
              image,
              coin_name,
              symbol,
              price,
              percentage_24hs,
              rank,
            }: CoinType) => {
              return (
                <li
                  key={id}
                  className='flex items-center justify-between text-lg border-b border-neutral-600/20 px-2 py-3 hover:bg-gradient-to-r hover:from-[#3542BA]/3 hover:via-[#181E54]/30 hover:to-[#3542BA]/3'
                >
                  <div className='flex items-center gap-2 font-normal'>
                    <FavStarButton id={id} />
                    <img
                      className='w-6.5'
                      src={image}
                      alt={`Icon of ${coin_name} cryptocurrency`}
                    />
                    <p className='text-white max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap'>
                      {coin_name}
                    </p>
                    <span className='text-gray-400'>
                      {symbol.toUpperCase()}
                    </span>
                    <span
                      className='text-sm py-1 px-2 rounded-md bg-gray-700/20 text-gray-300'
                      style={{ display: rank ? '' : 'none' }}
                    >
                      #{rank}
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <div
                      className={`${
                        percentage_24hs >= 0 ? 'text-green-700' : 'text-red-800'
                      } flex items-center`}
                    >
                      {percentage_24hs >= 0 ? <CaretUp /> : <CaretDown />}{' '}
                      <span>{percentage_24hs}%</span>
                    </div>
                    <p>{price}</p>
                  </div>
                </li>
              )
            }
          )}
        </ul>
      ) : (
        <p className=' text-xl m-auto flex'> No se encontraron resultados </p>
      )}
    </>
  )
}
