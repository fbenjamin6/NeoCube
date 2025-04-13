import { TableControl } from './TableControl'
import { CaretDown, CaretUp } from './Icons'
import { CATEGORIES } from '../utils/constants'
import { RankTableSkeleton } from '../skeletons/RankTableSkeleton'
import { CoinType } from '../types/types'
import { useRankTable } from '../hooks/useRankTable'
import { formatPrice } from '../utils/formatPrice'
import { FavStarButton } from './FavStarButton'

export function RankTable() {
  const { handleCategory, coins, category, loading } = useRankTable()

  console.log(loading)

  return (
    <section className='before:bg-amber-300 bg-gradient-to-r from-neutral-950/20 via-neutral-950/35 to-neutral-950/20 px-3 py-4 rounded-xl'>
      <TableControl
        handleCategory={handleCategory}
        category={category}
      />

      <table className='w-full text-lg mt-3 '>
        <thead>
          <tr className='border-y border-neutral-700/30'>
            <th
              scope='col'
              className='w-[32px] '
            ></th>
            <th
              scope='col'
              className='font-normal py-1.5'
            >
              #
            </th>
            <th
              scope='col'
              className='text-left font-normal'
            >
              Name
            </th>
            <th
              scope='col'
              className=' font-normal text-right'
            >
              Price
            </th>
            <th
              scope='col'
              className=' font-normal text-right'
            >
              1d %
            </th>
            <th
              scope='col'
              className=' font-normal text-right'
            >
              Total Volume
            </th>
            <th
              scope='col'
              className={`${
                category === CATEGORIES.TOP ? 'pr-3' : ''
              } font-normal text-right`}
            >
              Market Cap
            </th>
            <th
              scope='col'
              className='w-[170px] font-normal text-right pr-3 '
              style={{ display: category === CATEGORIES.TOP ? 'none' : '' }}
            >
              Last 7 days
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <RankTableSkeleton category={category} />
          ) : (
            coins?.map(
              ({
                id,
                rank,
                image,
                coin_name,
                symbol,
                price,
                percentage_24hs,
                sparkline,
                market_cap,
                total_volume,
              }: CoinType) => {
                return (
                  <tr
                    key={id}
                    className='border-b border-neutral-700/30 hover:bg-gradient-to-r hover:from-[#3542BA]/3 hover:via-[#181E54]/30 hover:to-[#3542BA]/3'
                  >
                    <td className='pl-3 py-5'>
                      <FavStarButton id={id} />
                    </td>
                    <td className='text-center px-1'>
                      <span>{rank}</span>
                    </td>
                    <td>
                      <p className='flex items-center gap-2 font-medium'>
                        <img
                          src={image}
                          alt=''
                          className='w-[32px] rounded-full'
                        />
                        {coin_name}
                        <span className='text-gray-400 font-normal'>
                          {symbol}
                        </span>
                      </p>
                    </td>
                    <td className='text-right'>{formatPrice(price)}</td>
                    <td className='pl-1'>
                      <div
                        className={`${
                          percentage_24hs >= 0
                            ? 'text-green-700'
                            : 'text-red-800'
                        } flex items-center justify-end`}
                      >
                        {percentage_24hs >= 0 ? <CaretUp /> : <CaretDown />}
                        <span>{percentage_24hs.toFixed(2)}%</span>
                      </div>
                    </td>
                    <td className='text-right pl-1'>{total_volume}</td>
                    <td
                      className={`${
                        category === CATEGORIES.TOP ? 'pr-3' : ''
                      } pl-1 text-right`}
                    >
                      {market_cap}
                    </td>
                    {sparkline ? (
                      <td className='text-right pr-3 flex items-center justify-end pl-1 py-1.5'>
                        <img
                          src={sparkline}
                          alt=''
                        />
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                )
              }
            )
          )}
        </tbody>
      </table>
    </section>
  )
}
