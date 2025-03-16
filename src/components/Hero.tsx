import { Browser } from './Browser'

export function Hero() {
  return (
    <section className='flex flex-col items-center justify-items-center text-center mt-32 gap-12 '>
      <div>
        <h1 className='text-5xl font-medium mb-3.5'>Explora el mundo cripto</h1>
        <h2 className='text-2xl text-gray-400'>
          Busca, descubre y explora las mas populares
        </h2>
      </div>

      <Browser />
    </section>
  )
}
