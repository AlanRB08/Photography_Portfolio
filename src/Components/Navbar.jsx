import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false);
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
  const handleClick =()=>{
    if(isOpen == true){
      setIsOpen(false)
      enableScroll();
    }else{
      setIsOpen(true);
      disableScroll();
    }
  }
  const handleSection = (sectionId)=>{
    setIsOpen(false)
    enableScroll()
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      console.log(section)
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  }, 800);
  }
  return (   
    <div className='text-center font-DMSans font-extralight fixed w-screen py-4 bg-white z-50 flex justify-between md:px-10 px-4'>       
        <a href='#gallery' className=''>
        Paulina <strong>Seade</strong>
        </a>     
        <div className='gap-3 text-sm hidden md:flex'>          
            <ul className='hover:text-grisclaro'><a href="#gallery">Galeria</a></ul>
            <ul className='hover:text-grisclaro'><a href="#productos">Producto</a></ul>
            <ul className='hover:text-grisclaro'><a href="#experiencia">Acerca de mí</a></ul>
            <ul><button className='bg-negro text-blanco px-2 rounded-lg hover:bg-grisclaro'><a href="#contacto">Contacto</a></button></ul>
        </div>      
        <button className='md:hidden' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <AnimatePresence>
        {isOpen && (
          <motion.div 
          className='w-screen bg-white h-screen absolute top-0 left-0'
          initial={{ x: 0, y: "-100%" }} // Inicia fuera de la pantalla (izquierda)
            animate={{ x: 0, y: 0 }}       // Mueve a la posición original
            exit={{ x: 0, y: "-100%" }}    // Sale hacia la izquierda
            transition={{
                duration: 0.75, // Duración más corta para mejor experiencia
                ease: "easeOut" // Suaviza la animación
            }}
          >            
            <button className='absolute right-0 p-2' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='text-5xl flex flex-col gap-5 font-medium bg-transparent justify-center align-middle items-center h-screen'>
              <ul className='hover:text-grisclaro'><button onClick={()=>{handleSection('gallery')}} ><a href="#gallery">Galeria</a></button></ul>
              <ul className='hover:text-grisclaro'><button onClick={()=>{handleSection('productos')}}><a href="#productos">Producto</a></button></ul>
              <ul className='hover:text-grisclaro'><button onClick={()=>{handleSection('experiencia')}}><a href="#experiencia">Acerca de mí</a></button></ul>
              <ul className='hover:text-grisclaro'><button onClick={()=>{handleSection('contacto')}}><a href="#contacto">Contacto</a></button></ul>
            </div>
          </motion.div>
        )        
         }
        </AnimatePresence>  
    </div>    
  )
}
export default Navbar