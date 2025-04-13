import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import { ContextFavoriteType } from '../types/types'

export function useFavorites() {
  const context = useContext<ContextFavoriteType | undefined>(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites esta fuera del ContextProvider')
  }

  const { favorites, addFavorite, removeFavorite, isInFavorites } = context

  return { favorites, addFavorite, removeFavorite, isInFavorites }
}
