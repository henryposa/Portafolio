import bebidas from '../assets/bebidas.png'
import seguros from '../assets/seguros.png'
import veterinaria from '../assets/veterinaria.png'
import omniquimica from '../assets/omniquimica.png'
import React from 'react'

const Portafolio = () => {
    const portafolios = [
        {
            id: 1,
            src: bebidas,
            titulo: 'Buscador de bebidas',
            href: 'https://voluble-shortbread-15ac12.netlify.app/',
        },
        {
            id: 2,
            src: seguros,
            titulo: 'Cotizador de seguros',
            href: 'https://lambent-nasturtium-0cfb54.netlify.app',
        },
        {
            id: 3,
            src: veterinaria,
            titulo: 'Veterinaria',
            href: 'https://paginaveterinaria.netlify.app',
        },
        {
            id: 4,
            src: omniquimica,
            titulo: 'Omniquimica',
            href: 'https://omniquimica.netlify.app',
        },
    ]
    return (
        <div name="Portafolio" className='color-nav text-white w-full 
        md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
            justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
                    <p className='py-6'>Chequea mis proyectos aquí</p>
                </div>
                {/* cards */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portafolios.map(({ id, src, href, titulo }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                                <img
                                    src={src}
                                    alt=""
                                    className='rounded-md duration-200 hover:scale-105' />
                                <a
                                    href={href}>
                                        <h1 className='text-3xl text-center'>{titulo}</h1>
                                    <div className='flex items-center justify-center'>
                                        
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Vista previa</button>
                                    </div>
                                </a>
                            </div>
                        ))}
                </div >
            </div >
        </div>
        //
    )
}

export default Portafolio
