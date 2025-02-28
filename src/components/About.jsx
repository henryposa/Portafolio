import React from 'react'

const About = () => {
    return (
        <div name="Sobre mí" className='w-full h-screen color-nav text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mí</p>
                </div>

                <p>
                    Soy una persona apasionada por el entorno digital y los proyectos que me inspiran a asesorar a las personas, desarrollando e integrando mi consciencia y capacidades.
                    Disfruto el trabajo en equipo y me gusta aplicar la metodología SCRUM para lograr una colaboración eficiente y organizada.

                </p>
                <br></br>
                <p>
                    Cuento con 1 año de experiencia en soporte a infraestructuras de TI, operador, digitador y administré bases de datos de varios departamentos de Colombia, 6 meses como desarrollador web con ReactJS y 1 año y 7 meses como agente bilingüe.
                    Tengo conocimientos en desarrollo backend con Node.js y Express, incluyendo APIs REST, autenticación con JWT y manejo de bases de datos como MongoDB, MySQL y SQL Server.
                    También tengo conocimientos básicos en PHP, Python, Java y .NET.

                </p>
                <br />
            </div>
        </div>
    )
}

export default About
