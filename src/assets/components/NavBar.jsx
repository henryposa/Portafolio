import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    // 2
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Inicio',
        },
        {
            id: 2,
            link: 'Sobre mí',
        },
        {
            id: 3,
            link: 'portafolio',
        },
        {
            id: 4,
            link: 'experiencia',
        },
        {
            id: 5,
            link: 'contacto',
        },
    ]
    return (
        // w-full es ocupar todo el rectangulo de la barra a la pagina, h-20 ensancha
        // px-4 crea un padin en el eje x, osea separa de la izquierda el luis posada
        <div
            className="flex justify-between items-center w-full h-20 color-nav text-white fixed
        px-4"
        >
            {/* ml: margin left */}
            <div div className="text-4xl font-signature ml-2">
                Luis Posada
            </div>
            {/* hidden md:flex se esconde al disminuir la pantalla */}
            <ul className="hidden md:flex">
                {/* Se desestructura id, link separado */}
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium
                text-gray-200 hover:scale-105 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>
            {/* 1 */}
            {/* FaBar barra, FaTimes cruz */}
            {/* al abrir la pagina está en false, osea mostrando la barra, al hacer click
            cambia a verdadero, osea muestra la cruz, si nav es verdadero muestra la cruz 
            y si es false muestra la barra*/}
            <div
                onClick={() => setNav(!nav)}
                // md:hidden: oculta la barra en medium
                className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Si nav es true, muestra home, about, portafolio, experien */}
            {nav && (
                // 3
                <ul
                    className="flex flex-col justify-center items-center
                 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
                 to-gray-800"
                >
                    {/* 4 */}
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            {link}
                        </li>
                    ))}
                </ul>
                //
            )}
        </div>
        //
    )
}

export default NavBar
