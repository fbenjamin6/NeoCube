import { useEffect, useState } from 'react'
import { FavoritesContext } from './FavoritesContext'

export function FavoriteContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (window !== undefined) {
      const favoriteLocalStorage = window.localStorage.getItem('favorites')
      return favoriteLocalStorage ? JSON.parse(favoriteLocalStorage) : []
    }
    return []
  })

  useEffect(() => {
    const updatedFavorites = JSON.stringify(favorites)
    window.localStorage.setItem('favorites', updatedFavorites)
  }, [favorites])

  function addFavorite(id: string) {
    if (favorites.includes(id)) return
    setFavorites((prevFavorites) => [...prevFavorites, id])
  }

  function removeFavorite(id: string) {
    if (!favorites.includes(id)) return
    const favIndex = favorites.findIndex((i) => i === id)
    const newFavorites = favorites.toSpliced(favIndex, 1)
    setFavorites(newFavorites)
  }

  function isInFavorites(id: string) {
    return favorites.includes(id)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isInFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
