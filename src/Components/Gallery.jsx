import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import gal from '../data/galleria.js';
const Gallery = () => {
    const [hovered, setHovered] = useState(null);
    const [isOpen, setIsOpen]= useState(false);
    const [isWii, setIsWii] = useState(false);
    const [srcImage, setSrcImage]= useState('')

    function disableScroll() {
      // Deshabilita el scroll en el body y html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    function enableScroll() {
    // Habilita el scroll en el body y html
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    }   
    const handleChange = (index)=>{
        setSrcImage(gal[index].big)
        setIsWii(gal[index].isWide)       
    }
  return (
    <div id='gallery' className='w-screen pt-6 overflow-hidden sm:px-[15vw]'>      
        <div className='grid grid-cols-2 gap-1 px-1 pb-1 sm:grid-cols-4 pt-10'>            
            {
                gal.map((ima,index)=>{                 
                    return <motion.div 
                    className={`w-full h-full cursor-pointer ${ima.isWide ? 'col-span-2' : ''}`}
                    key={index} 
                    initial={{ scale: 1 , zIndex:1}}
                    animate={{
                        scale: hovered === index ? 1.1 : 1,
                        zIndex: hovered === index ? 10 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={()=>{setIsOpen(true) , handleChange(index), disableScroll()}}       
                    >
                        <img
                          src={ima.small}
                          srcset= {`${ima.small} 480w, ${ima.big} 1200w`}
                          sizes='(max-width: 600px) 480px, 100vw'
                          alt="Imagen"
                          loading={`${ima.eager ? 'eager' : 'lazy'}`}
                          className={`${ima.isWide ? 'w-[600px]' : 'w-[300px]'} h-full`}
                          />
                    </motion.div>
                })
            }
            {isOpen && (
        <div
        className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50 ${isWii ? 'md:px-[10vw]':''}`}
        onClick={() => {setIsOpen(false), enableScroll()}}>
        <div className={`bg-transparent absolute top-0 right-0 p-2 cursor-pointer`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <img
          src={srcImage}
          className="max-w-full max-h-full"
        />
      </div>
)
}
        </div>   
    </div>
  )
}
export default Gallery