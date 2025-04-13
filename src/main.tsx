import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import { HomePage } from './pages/HomePage.tsx'
import { FavoriteContextProvider } from './context/FavoritesContextProvider.tsx'
import { FavoritesPage } from './pages/FavoritesPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/favorites'
            element={<FavoritesPage />}
          />
        </Routes>
      </BrowserRouter>
    </FavoriteContextProvider>
  </StrictMode>
)
