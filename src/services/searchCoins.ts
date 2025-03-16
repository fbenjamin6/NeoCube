import { API_OPTIONS } from '../utils/constants'

interface CoinFromAPI {
  id: string
  image: string
  name: string
  symbol: string
  current_price: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
}

export async function searchCoins(query: string) {
  const IDCoins = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${query}`,
    API_OPTIONS
  )
    .then((res) => res.json())
    .then((res) =>
      res.coins
        .slice(0, 10)
        .map(({ id }: { id: string }) => id)
        .join(', ')
    )
    .catch((err) => console.error(err))

  const coins = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${IDCoins}`,
    API_OPTIONS
  )
    .then((res) => res.json())
    .then((coins) => {
      return coins.map((coin: CoinFromAPI) => {
        const imageURL = coin.image.replace('/large/', '/small/')
        return {
          id: coin.id,
          image: imageURL,
          coinName: coin.name,
          symbol: coin.symbol,
          price: coin.current_price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'usd',
          }),
          percentage_24hs: coin.market_cap_change_percentage_24h.toFixed(2),
          rank: coin.market_cap_rank,
        }
      })
    })
    .catch((err) => console.error(err))

  return coins
}
