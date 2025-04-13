import { GitHubIcon, LinkedinIcon } from './Icons'

export function Footer() {
  return (
    <footer
      id='footer'
      className='pt-28 pb-8 max-lg:px-5 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent  '
    >
      <div className='flex max-w-[1200px] m-auto justify-between  items-end'>
        <div className=' flex  flex-col h-full items-start justify-end gap-4 md:gap-5 '>
          <ul className='flex gap-4'>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/federicobenjamin/'
                className='hover:text-[#3168ce] transition-colors duration-300'
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://github.com/fbenjamin6'
                className='hover:text-[#3168ce] transition-colors duration-300'
              >
                <GitHubIcon />
              </a>
            </li>
          </ul>
          <span className='text-customGray max-sm:text-sm'>
            Hecho con 💙. 2024 Federico Benjamín
          </span>
        </div>
        <a
          href='https://www.coingecko.com/'
          target='#blank'
          className='flex items-center gap-2 '
        >
          <span className='text-gray-300 '>Data powered by</span>
          <img
            src='src/assets/coinGeckoAttribution.svg'
            alt=''
          />
        </a>
      </div>
    </footer>
  )
}

// 00403F

// 181E54

// 361250
