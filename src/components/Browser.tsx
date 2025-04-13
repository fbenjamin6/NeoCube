import { useBrowser } from '../hooks/useBrowser'
import { BrowserSkeleton } from '../skeletons/BrowserSkeleton'
import { BrowserResults } from './BrowserResults'

export function Browser() {
  const { handleSearch, handleQuery, query, loading, coins, firstSearch } =
    useBrowser()

  console.log(coins)

  return (
    <div className='max-w-[600px] min-h-[500px] w-full '>
      <form
        action=''
        className={`${
          firstSearch.current ? '' : 'my-20'
        } ease-in border border-neutral-600/30 flex justify-between w-full rounded-full mb-12 shadow-[0_0_4px_0_black]`}
        onSubmit={handleSearch}
      >
        <input
          type='text'
          placeholder='Ethereum...'
          className='w-full px-5 py-2.5 rounded-l-full text-xl focus:outline-0'
          value={query}
          onChange={handleQuery}
        />
        <button
          type='submit'
          className='border-l border-neutral-600/30 px-5 py-2.5 font-medium cursor-pointer rounded-r-full bg-gradient-to-r from-[#00403f]/40 via-[#181e54]/40 to-[#361250]/40'
        >
          SEARCH
        </button>
      </form>

      <div
        className={`${
          firstSearch.current
            ? 'opacity-100'
            : 'opacity-100 pointer-events-none '
        } transition-all duration-700 px-2.5 border border-neutral-600/20 bg-linear-35 from-[#00403f]/15 via-[#361250]/15 to-[#181e54]/15  h-[260px] overflow-scroll shadow-[0_0_6px_0_black] rounded-xl flex w-full`}
        style={{ scrollbarWidth: 'none' }}
      >
        {loading ? <BrowserSkeleton /> : <BrowserResults coins={coins} />}
      </div>
    </div>
  )
}
