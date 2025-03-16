import { FormEvent, useState } from 'react'
import { searchCoins } from '../services/searchCoins'
import { CaretDown, CaretUp, StarIcon } from './Icons'
import { Coin } from '../types/types'

export function Browser() {
  const [query, setQuery] = useState('')
  const [coins, setCoins] = useState([])

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    searchCoins(query).then((coins) => setCoins(coins))
  }

  return (
    <div className='max-w-[600px] w-full '>
      <form
        action=''
        className='border border-neutral-600/30 flex justify-between w-full rounded-full mb-12'
        onSubmit={handleSearch}
      >
        <input
          type='text'
          placeholder='Ethereum...'
          className='w-full px-5 py-2.5 rounded-l-full text-xl'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type='submit'
          className='border-l border-neutral-600/30 px-5 py-2.5 font-medium cursor-pointer rounded-r-full bg-gradient-to-r from-[#00403f]/40 via-[#181e54]/40 to-[#361250]/40'
        >
          SEARCH
        </button>
      </form>

      <div
        className='asd px-2.5 border border-neutral-600/20 bg-linear-35 from-[#00403f]/15 via-[#361250]/15 to-[#181e54]/15  max-h-[260px] overflow-scroll shadow-[0_0_6px_0_black] rounded-xl'
        style={{ scrollbarWidth: 'none' }}
      >
        <ul className='flex flex-col '>
          {coins?.map(
            ({
              id,
              image,
              coinName,
              symbol,
              price,
              percentage_24hs,
              rank,
            }: Coin) => {
              return (
                <li
                  key={id}
                  className='flex items-center justify-between text-lg border-b border-neutral-600/20 px-2 py-3'
                >
                  <div className='flex items-center gap-2 font-normal'>
                    <StarIcon />
                    <img
                      className='w-6.5'
                      src={image}
                      alt={`Icon of ${coinName} cryptocurrency`}
                    />
                    <p className='text-white max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap'>
                      {coinName}
                    </p>
                    <span className='text-gray-400'>
                      {symbol.toUpperCase()}
                    </span>
                    <span className='text-sm py-1 px-2 rounded-md bg-gray-700/20 text-gray-300'>
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
      </div>
    </div>
  )
}
