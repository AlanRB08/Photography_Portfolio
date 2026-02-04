import React from 'react'

const Experience = () => {
  return (
    <div className='md:h-screen flex flex-col items-center gap-2 pt-10'>
      <div className='max-w-[400px] h-[400px] rounded-full overflow-hidden'>
        <img src="src/assets/pau_profile/pau_ng1.jpg" alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='text-3xl'>
        <a className='text-negro hover:text-gray-400'>pauseade@gmail.com</a>       
      </div>
      <div className='text-3xl'>
        <a className='text-negro hover:text-gray-400'>(618) 993-8425</a>       
      </div>
      <div className='text-3xl'>
        <a className='text-negro hover:text-gray-400'>Durango,Dgo. México</a>       
      </div>
    </div>
  )
}

export default Experience