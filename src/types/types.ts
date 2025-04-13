export type CoinType = {
  id: string
  rank: number
  image: string
  coin_name: string
  symbol: string
  price: number
  percentage_24hs: number
  total_volume: string | null
  market_cap: string | null
  sparkline: string | null
}

export type ContextFavoriteType = {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  isInFavorites: (id: string) => boolean
} | null
