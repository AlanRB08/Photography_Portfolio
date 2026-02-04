import React from 'react'
import {motion} from 'framer-motion';
import { useRef ,useState} from 'react';
import { RotateWords } from './Rotate';
import  prod  from '../data/producto';
const Producst = () => {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen]= useState(false);
  const [srcImage, setSrcImage]= useState('')
  const textRef1 = useRef(null)
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
    setSrcImage(prod[index].big)   
  }
  return (
    <div className='w-screen'>    
    <div className='h-[55vh] flex justify-center align-bottom'>
        <RotateWords text="Fotografias con" words={["detalle.", "experiencia.","calidad."]} />
    </div>
    <div className='w-screen overflow-x-auto whitespace-nowrap scrollbar-hide'>        
        <div 
        className='w-screen overflow-x-auto scrollbar-hide overflow-y-hidden mb-0'
        style={{
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        }}
        ref={textRef1}>
            {prod.map((ima,index)=>{
              return(
                <motion.div className='w-[200px] md:w-[250px] cursor-pointer inline-block scrollbar-hide' key={index}
                initial={{scale: 1 , zIndex:1}}
                    animate={{
                        scale: hovered === index ? 1.1 : 1,
                        zIndex: hovered === index ? 10 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={()=>{setIsOpen(true) , handleChange(index),disableScroll()}}>
                  <img 
                  srcSet= {`${ima.small} 480w, ${ima.big} 1200w`}
                  sizes='(max-width: 600px) 480px , 100vw'
                  alt="Imagen"
                  loading='lazy'
                  className='w-[300px] h-full object-cover'/>
                </motion.div>
              )
            })}                   
        </div>        
        {isOpen && (
        <div
        className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50`}
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
export default Producst