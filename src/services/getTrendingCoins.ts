import { API_OPTIONS } from '../utils/constants'

export async function getTrendingCoins() {
  return await fetch('/api/v3/search/trending', API_OPTIONS)
    .then((res) => res.json())
    .then(({ coins }) => {
      return coins.map(({ item: coin }) => {
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
