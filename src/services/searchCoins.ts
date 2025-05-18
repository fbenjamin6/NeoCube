import { API_OPTIONS } from '../utils/constants'
import { searchMultipleCoins } from './searchMultipleCoins'

interface CoinFromAPI {
  id: string
  image: string
  name: string
  symbol: string
  current_price: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
}

export async function searchCoinsByQuery(query: string) {
  const IDCoins = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${query}`,
    API_OPTIONS
  )
    .then((res) => res.json())
    .then((res) => res.coins.slice(0, 10).map(({ id }: { id: string }) => id))
    .catch((err) => console.error(err))

  if (!IDCoins) return undefined

  const coins = await searchMultipleCoins(IDCoins)

  return coins
}
