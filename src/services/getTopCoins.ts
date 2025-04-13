import { API_OPTIONS } from '../utils/constants'

interface CoinFromAPI {
  id: string
  image: string
  name: string
  symbol: string
  current_price: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  price_change_percentage_24h: number
  total_volume: number
  market_cap: number
}

export async function getTopCoins() {
  console.log('request')
  return await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
    API_OPTIONS
  )
    .then((res) => res.json())
    .then((coins) => {
      const newCoins = coins.slice(0, 15)
      return newCoins.map((coin: CoinFromAPI) => {
        const imageURL = coin.image.replace('/large/', '/small/')

        return {
          id: coin.id,
          rank: coin.market_cap_rank,
          coin_name: coin.name,
          image: imageURL,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          percentage_24hs: coin.price_change_percentage_24h,
          total_volume: coin.total_volume.toLocaleString('en-US', {
            style: 'currency',
            currency: 'usd',
          }),
          market_cap: coin.market_cap.toLocaleString('en-US', {
            style: 'currency',
            currency: 'usd',
          }),
        }
      })
    })
    .catch((err) => console.error(err))
}
