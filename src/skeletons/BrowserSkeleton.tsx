const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-gray-800/30 before:to-transparent relative overflow-hidden'

export function BrowserSkeleton() {
  return (
    <ul className='overflow-hidden w-full'>
      {Array.from(Array(10).keys()).map((n) => {
        return <TinyCoinRow key={n} />
      })}
    </ul>
  )
}

function TinyCoinRow() {
  return (
    <li
      className={`flex items-center justify-between border-b border-neutral-600/20 px-2 py-3`}
    >
      <div className={`flex items-center gap-2 `}>
        <div
          aria-label='star'
          className={`${shimmer} h-6.5 w-6.5 bg-neutral-900/80 rounded-full`}
        ></div>
        <div
          aria-label='image'
          className={`${shimmer} h-7 w-7 bg-neutral-900/80 rounded-full`}
        ></div>
        <div
          aria-label='coinName'
          className={`${shimmer} h-7 w-[130px] bg-neutral-900/80 rounded`}
        ></div>
        <div
          aria-label='symbol'
          className={`${shimmer} h-7 w-8.5 bg-neutral-900/80 rounded`}
        ></div>
        <div
          aria-label='rank'
          className={`${shimmer} h-7 w-10 bg-neutral-900/80 rounded`}
        ></div>
      </div>

      <div className='flex items-center gap-2'>
        <div
          aria-label='percentage'
          className={`${shimmer} h-7 w-[80px] bg-neutral-900/80 rounded`}
        ></div>
        <div
          aria-label='price'
          className={`${shimmer} h-7 w-[70px] bg-neutral-900/80 rounded`}
        ></div>
      </div>
    </li>
  )
}
