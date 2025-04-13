import { Link } from 'react-router'

export function Header() {
  return (
    <header className='h-[70px] bg-neutral-950/50 border-b border-neutral-800 flex justify-center'>
      <nav className='max-w-[1200px] w-full flex justify-between'>
        <Link
          to='/'
          className='flex items-center gap-3'
        >
          <img
            className='w-10'
            src='logo.png'
            alt=''
          />
          <h3 className='text-2xl'>NeoCube</h3>
        </Link>
        <ul className='flex items-center gap-12 text-lg text-gray-300'>
          <li>
            <Link
              to={'/'}
              className='hover:text-white transition-colors duration-300'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/favorites'}
              className='hover:text-white transition-colors duration-300'
            >
              Favorites
            </Link>
          </li>
          <li>
            <a
              href='#footer'
              className='hover:text-white transition-colors duration-300'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
