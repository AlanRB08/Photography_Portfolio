import React from 'react'
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div 
    id='contacto'
    className='bg-negro w-full px-4 md:px-10 h-full md:h-[75vh] font-DMSans font-semibold text-blanco flex flex-col justify-between'>        
        <div>
          <div className='pt-10 pb-3'>
            <h1 className='text-6xl md:text-9xl'>Contactame</h1>
          </div>
          <div className='pb-10 text-center md:block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </div>
        </div>
        <div>
        <div className='flex gap-4 pb-2'>
          <a 
          href="https://www.instagram.com/seadesin.photo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label='instagram-link'>
            <motion.svg
            
            whileHover={{scale:1.2}} 
            initial={{scale:1}}
            transition={{duration:.5}}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </motion.svg>
          </a>
          <a 
          href=""
          target='_blank'
          rel="noopener noreferrer"
          aria-label='linkedin-link'>
            <motion.svg 
            whileHover={{scale:1.2}} 
            initial={{scale:1}}
            transition={{duration:.5}}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
            </motion.svg>
          </a>
          <a 
          href="mailto:pauseade@gmail.com?subject=Cotización&body=Hola Paulina, me gustaria cotizar una sesión fotografica."
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
          href="https://api.whatsapp.com/send?phone=5216188016599&text=Hola Pau,%20me%20gustaría%20cotizar%20una%20sesión%20fotografica."
          target='_blank'
          rel="noopener noreferrer"
          aria-label='whatsapp-link'>
            <motion.svg 
            whileHover={{scale:1.2}} 
            initial={{scale:1}}
            transition={{duration:.5}}
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </motion.svg>
          </a>
        </div>
        <div className='text-1xl font-normal'>
            <div>
              <a
              href="https://www.instagram.com/seadesin.photo/"
              target="_blank"
              rel="noopener noreferrer" 
              className='hover:text-grismed cursor-pointer inline'>
                Instagram</a>
            </div>
            <div className='bg-blanco h-0.5 mt-1 w-[25vw] '> </div>
                <a 
                href=""
                target='_blank'
                rel="noopener noreferrer"
                className='hover:text-grismed cursor-pointer inline'>
                  LinkedIn
                </a>
            <div className='bg-blanco h-0.5 mt-1 w-[20vw]'> </div>
              <a 
              className='hover:text-grismed cursor-pointer inline'
              href="mailto:pauseade@gmail.com?subject=Cotización&body=Hola Pau, me gustaria cotizar una sesión fotografica."
          target='_blank'
          rel="noopener noreferrer">pauseade@gmail.com</a>
            <div className='bg-blanco h-0.5 mt-1 w-[45vw]'> </div>
              <a 
              className='hover:text-grismed cursor-pointer inline'
              href="https://api.whatsapp.com/send?phone=5216188016599&text=Hola Pau,%20me%20gustaría%20cotizar%20una%20sesión%20fotografica."
          target='_blank'
          rel="noopener noreferrer">(618)801-6599</a>
            <div className='bg-blanco h-0.5 mt-1 w-[35vw]'> </div>
        </div>
        <div className='font-thin text-xs text-center my-5'>
            <p> @ Made & design by alanrb</p>
        </div>
        </div>     
    </div>
  )
}
export default Footer