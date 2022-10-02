// 1 creamos NavBar.jsx en components
import React from 'react'
// 4 -
import { FaBars, FaTimes } from 'react-icons/fa';


// 6 
const links = [
    {
        id: 1,
        link: 'Inicio'
    },
    {
        id: 2,
        link: 'Sobre mí'
    },
    {
        id: 3,
        link: 'portafolio'
    },
    {
        id: 4,
        link: 'experiencia'
    },
    {
        id: 5,
        link: 'contacto'
    },
]

const NavBar = () => {
    return (
        // 5
        // w-full es ocupar todo el rectangulo de la barra a la pagina, h-20 ensancha 
        // px-4 crea un padin en el eje x, osea separa de la izquierda el luis posada
        <div className='flex justify-between items-center w-full h-20 color-nav text-white fixed
        px-4' >
            {/* ml: margin left */}
            <div div className='text-4xl font-signature ml-2'>
                Luis Posada
            </div>
            {/* hidden md:flex se esconde al disminuir la pantalla */}
            <ul className='hidden md:flex'>
                {/* Se desestructura id, link separado */}
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium
                text-gray-500 hover:scale-105 duration-200'
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div className='cursor-pointer pr-4 z-10 text-gray-500'>
                <FaBars size="30" />
            </div>
        </div >
        //
    )
}

export default NavBar
