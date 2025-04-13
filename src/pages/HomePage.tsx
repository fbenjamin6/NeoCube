import { BackgroundGradient } from '../components/BackgroundGradient'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { RankTable } from '../components/RankTable'

export function HomePage() {
  return (
    <>
      <BackgroundGradient />
      <Header />
      <main>
        <Hero />
        <RankTable />
      </main>
      <Footer />
    </>
  )
}
