import { CATEGORIES } from '../utils/constants'

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-gray-800/30 before:to-transparent relative overflow-hidden'

export function RankTableSkeleton({ category }: { category: string }) {
  const isThereASparkline = category !== CATEGORIES.TOP
  return (
    <>
      {Array.from(Array(15).keys()).map((n) => {
        return (
          <RankTableRowSkeleton
            key={n}
            isThereASparkline={isThereASparkline}
          />
        )
      })}
    </>
  )
}

function RankTableRowSkeleton({
  isThereASparkline,
}: {
  isThereASparkline: boolean
}) {
  return (
    <tr className='border-b border-neutral-700/30 '>
      <td
        className='pl-3 py-5'
        aria-label='star'
      >
        <div
          className={`${shimmer} w-[20px] h-[20px] bg-neutral-900/80  rounded-full`}
        ></div>
      </td>

      <td
        className='text-center px-1'
        aria-label='rank'
      >
        <div
          className={`${shimmer} w-[16px] h-[28px] bg-neutral-900/80 rounded-md`}
        ></div>
      </td>

      <td
        aria-label='img name symbol'
        className=''
      >
        <div className='flex items-center gap-2'>
          <div
            className={`${shimmer} w-[32px] h-[32px] bg-neutral-900/80 inline-block rounded-full`}
          ></div>
          <div
            className={`${shimmer} w-[90px] h-[28px] bg-neutral-900/80 rounded-md inline-block`}
          ></div>
          <div
            className={`${shimmer} w-[34px] h-[28px] bg-neutral-900/80 rounded-md inline-block`}
          ></div>
        </div>
      </td>

      <td
        className='text-right'
        aria-label='price'
      >
        <div
          className={`${shimmer} w-[80px] h-[28px] bg-neutral-900/80 rounded-md ml-auto`}
        ></div>
      </td>

      <td
        className='pl-1'
        aria-label='percentage'
      >
        <div
          className={`${shimmer} w-[120px] h-[28px] bg-neutral-900/80 rounded-md ml-auto`}
        ></div>
      </td>

      <td
        className='text-right pl-1'
        aria-label='total volume'
      >
        <div
          className={`${shimmer} w-[135px] h-[28px] bg-neutral-900/80 rounded-md ml-auto`}
        >
          {' '}
        </div>
      </td>
      <td
        className='text-right pl-1'
        aria-label='market cap'
      >
        <div
          className={`${shimmer} w-[170px] h-[28px] bg-neutral-900/80 rounded-md ml-auto`}
        ></div>
      </td>

      {isThereASparkline ? (
        <td
          className='text-right pr-3 flex items-center justify-end pl-1 ml-auto'
          aria-label='sparkline'
        >
          <div
            className={`${shimmer} w-[135px] h-[50px] bg-neutral-900/80 rounded-md my-1`}
          ></div>
        </td>
      ) : (
        <></>
      )}
    </tr>
  )
}
