import { API_OPTIONS } from '../utils/constants'

interface CoinFromAPI {
  id: string
  image: string
  name: string
  symbol: string
  small: string
  current_price: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  data: {
    total_volume: number
    price: number
    market_cap: number
    price_change_percentage_24h: { btc: number }
    sparkline: string
  }
}

export async function getTrendingCoins() {
  return await fetch(
    'https://api.coingecko.com/api/v3/search/trending',
    API_OPTIONS
  )
    .then((res) => res.json())
    .then(({ coins }) => {
      return coins.map(({ item: coin }: { item: CoinFromAPI }) => {
        return {
          id: coin.id,
          rank: coin.market_cap_rank,
          coin_name: coin.name,
          image: coin.small,
          symbol: coin.symbol,
          price: coin.data.price,
          percentage_24hs: coin.data.price_change_percentage_24h.btc,
          total_volume: coin.data.total_volume,
          market_cap: coin.data.market_cap,
          sparkline: coin.data.sparkline,
        }
      })
    })
    .catch((err) => console.error(err))
}
