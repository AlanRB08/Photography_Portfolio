import React from 'react'
import {motion} from 'framer-motion';
import pau_bl1 from '../assets/pau_profile/pau_bl1.webp';
const Info = () => {
  return (
    <div 
    id='experiencia'
    className='w-screen grid md:grid-cols-2 grid-cols-1'>
        <div className='h-[60vh] landscape:h-[120vh] w-full md:w-[45vw] md:h-full'>
            <img src={pau_bl1} alt="" className='h-full w-full object-cover object-center custom-object-position'/>
        </div>
        <div className='md:h-screen m-10 flex flex-col justify-evenly'>
            <div className='font-extralight italic underline mb-7'>
                <p>Paulina Seade</p>
            </div>
            <div className='mr-10 md:text-xl font-thin text-base'>
                <p>
                La creatividad siempre ha sido parte de mi vida, y con el tiempo descubrí en la fotografía una forma de expresarme a través de la luz. Lo que comenzó como un pasatiempo se ha convertido en mi trabajo y en mi mayor pasión.
Me especializo en <strong>fotografía gastronómica y de producto</strong>, creando imágenes profesionales y vibrantes. Mi enfoque es capturar fotos bonitas, llamativas y bien pensadas para que mis clientes tengan imágenes que realmente destaquen.
Cuento historias a través de la luz, el color y la composición. ¡Será un placer ayudarte a llevar tu marca al siguiente nivel con imágenes que enamoren! ✨📸
                </p>
                <div className='flex gap-10 font-semibold justify-start text-base mt-10'>
                <div>
                <a 
          href="mailto:pauseade@.gmail.com?subject=Cotización&body=Hola Pau, me gustaria cotizar una sesión fotografica."
          target='_blank'
          rel="noopener noreferrer"
          aria-label='gmail-link'>
            <motion.svg 
            whileHover={{scale:1.2}} 
            initial={{scale:1}}
            transition={{duration:.5}}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
            </motion.svg>
          </a>
                    <a 
          href="https://www.instagram.com/seadesin.photo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='linkedin-link'>
            <motion.svg
            whileHover={{scale:1.2}} 
            initial={{scale:1}}
            transition={{duration:.5}}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </motion.svg>
          </a>
                </div>
                <div>
                    <p className='text-black cursor-pointer hover:text-grismed pointer'>
                            <a href="mailto:pauseade@gmail.com?subject=Cotización&body=Hola Paulina, me gustaria cotizar una sesión fotografica."
                                target='_blank'
                                rel="noopener noreferrer">
                                pauseade@gmail.com
                            </a>
                    </p>
                <p 
                className='text-black cursor-pointer hover:text-grismed pointer'> 
                    <a href="https://www.instagram.com/seadesin.photo/"
                        target="_blank"
                        rel="noopener noreferrer">
                    seadesin.photo</a></p>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}
export default Info