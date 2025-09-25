import React from 'react'

const Navbar = () => {
  return (
    <section className='fixed lg:fixed bottom-9 md:bottom-20 left-1/2 transform -translate-x-1/2 flex justify-between items-center
     w-[78%] md:w-auto lg:max-w-[900px] gap-4 md:gap-20 m-auto px-2 md:px-4 py-2 rounded-2xl bg-[#1b1b1b]/60 z-30 text-[12px] md:text-[13px]
      leading-[20px] backdrop-blur-md shadow-lg'>
        <div className='flex items-center gap-2 md:gap-4 list-none text-white'>
            <img src="https://www.merlin.computer/merlin-logo-white.svg" alt="logo" className='w-8 md:w-auto rounded-xl'/>
            <li className=' md:block'>
                Pricing
            </li>
            
            <li className=' md:block'>
                Manifesto
            </li>
        </div>

        <div className='flex items-center gap-2 md:gap-4 list-none text-white'>
            <li className=' md:block'>Login</li>
            <li className='rounded-xl py-1 md:py-2 px-2 md:px-3 bg-white text-[#1b1b1b] text-xs md:text-sm'>Sign up</li>
        </div>
    </section>
  )
}

export default Navbar