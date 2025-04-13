import { createContext } from 'react'
import { ContextFavoriteType } from '../types/types'

export const FavoritesContext = createContext<ContextFavoriteType | undefined>(
  undefined
)
