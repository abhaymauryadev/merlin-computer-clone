import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Navbar = () => {

  const Dock = useRef(null);
   
  useEffect(() => {
    gsap.fromTo(
      Dock.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: Dock.current,
          start: "top 80%",
          end: "bottom 30%",
          markers:false,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [])

  return (
    <section ref={Dock} className='fixed lg:fixed bottom-2 md:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-between items-center
     w-[78%] md:w-auto lg:max-w-[900px] gap-4 md:gap-20 m-auto px-2 md:px-2 py-1 rounded-2xl bg-[black]/75 z-30 text-[12px] md:text-[13px]
      leading-[20px] backdrop-blur-md shadow-lg'>
        <div className='flex items-center gap-2 md:gap-4 list-none text-white'>
            <img src="https://www.merlin.computer/merlin-logo-white.svg" alt="logo" className='w-8 md:w-auto rounded-xl'/>
            <li className='group cursor-pointer relative overflow-hidden'>
                <div className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Pricing
                </div>
                <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Pricing
                </div>
            </li>
            
            <li className='group cursor-pointer relative overflow-hidden'>
                <div className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Manifesto
                </div>
                <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Manifesto
                </div>
            </li>
        </div>

        <div className='flex items-center gap-2 md:gap-4 list-none text-white'>
            <li className='group cursor-pointer relative overflow-hidden'>
                <div className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Login
                </div>
                <div className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Login
                </div>
            </li>
            <li className='rounded-xl py-1 md:py-2 px-2 md:px-3 bg-white text-[#1b1b1b] text-xs md:text-sm group cursor-pointer relative overflow-hidden hover:text-[#12baff]'>
                <div className=" ">
                    Sign up
                </div>
               
            </li>
        </div>
    </section>
  )
}

export default Navbar