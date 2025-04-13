import { useState, useEffect, useRef } from 'react'
import { getTopCoins } from '../services/getTopCoins'
import { getTrendingCoins } from '../services/getTrendingCoins'
import { CoinType } from '../types/types'
import { CATEGORIES } from '../utils/constants'

export function useRankTable() {
  const [coins, setCoins] = useState<CoinType[]>([])
  const [category, setCategory] = useState(CATEGORIES.TOP)
  const [loading, setLoading] = useState(true)
  const intervalID = useRef<NodeJS.Timeout | number>(0)

  useEffect(() => {
    function handleSetCoins() {
      setLoading(true)
      if (category === CATEGORIES.TOP) {
        getTopCoins().then((newCoins) => {
          setCoins(newCoins)
          setLoading(false)
        })
      }
      if (category === CATEGORIES.TRENDING) {
        getTrendingCoins().then((newCoins) => {
          setCoins(newCoins)
          setLoading(false)
        })
      }
    }
    handleSetCoins()

    intervalID.current = setInterval(handleSetCoins, 900000) // 15 min
    return () => {
      clearInterval(intervalID.current)
    }
  }, [category])

  function handleCategory(e: React.MouseEvent<HTMLButtonElement>) {
    const newCategory = e.currentTarget.ariaLabel
    if (newCategory === category) return
    if (newCategory === CATEGORIES.TOP) setCategory(CATEGORIES.TOP)
    if (newCategory === CATEGORIES.TRENDING) setCategory(CATEGORIES.TRENDING)
  }

  return { handleCategory, coins, loading, category }
}
