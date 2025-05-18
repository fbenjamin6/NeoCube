import { useState, FormEvent, useRef } from 'react'
import { searchCoinsByQuery } from '../services/searchCoins'

export function useBrowser() {
  const [query, setQuery] = useState('')
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const firstSearch = useRef(false)

  function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (query.length < 3) return
    if (!firstSearch.current) firstSearch.current = true
    setLoading(true)
    searchCoinsByQuery(query).then((coins) => {
      setCoins(coins)
      setLoading(false)
    })
  }

  return { query, coins, loading, handleSearch, handleQuery, firstSearch }
}
