import React from 'react'
import Luis from '../assets/Luis.png'
import { HiChevronRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full color-nav">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row text-white"
      >
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl mt-20'>Soy desarrollador Web FrontEnd</h2>
          <p className='text-gray-500'>
            Tengo 1 año de experiencia contruyendo y diseñando paginas Web.
            Actualmente me gusta trabajar con las tecnologias HTML, CSS,
            Javascript, Tailwind y Next JS enfocado en React
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex
            items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
            cursor-pointer'>
              Portafolio
              <span className='group-hover:rotate-90 duration-300'>
                <HiChevronRight size={25}
                  className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Luis}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
