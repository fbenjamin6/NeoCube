import { BackgroundGradient } from '../components/BackgroundGradient'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export function HomePage() {
  return (
    <>
      <BackgroundGradient />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
