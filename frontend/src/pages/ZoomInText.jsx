import React, { useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const ZoomInText = () => {

    const ZoomIn = useRef(null);

    useEffect(()=>{
        if (!ZoomIn.current) return;
        
        const animation = gsap.to(ZoomIn.current,{
            scale:20,
            duration:1,
            opacity:0,
            scrollTrigger:{
                trigger:ZoomIn.current,
                pin:true,
                scrub:1,
                start: "top center",
                end: "bottom center",
                markers:false, // Remove markers for production
            }
        })
        
        return () => {
            animation.kill()
        }
    },[])
    

  return (
   <>
   
     <section ref={ZoomIn} className='max-w-[1300px] m-auto lg:min-h-[520px] mt-20 sm:mt-40 md:mt-90 mb-16 md:mb-20 pt-4 rounded-4xl px-4 overflow-hidden -pl-28' >
        <div  className='relative w-full'>
            <div  className='absolute left-4 sm:left-8 md:left-auto md:ml-[220px] lg:left-[280px] transform -translate-x-1/2 md:transform-none max-w-full'>
            {/* <img src="https://www.merlin.computer/how.svg" alt="" className='h-28 w-28 md:h-40 md:w-40' /> */}
            <img src="/text.png" alt="text" />
          </div>
        </div>

         <div  className='flex justify-center items-center mt-16 md:mt-20 max-w-2xl m-auto px-4 '>
              <h1 className='font-medium text-center leading-tight sm:leading-[40px] md:leading-[60px] text-2xl sm:text-3xl md:text-4xl lg:text-[60px]'>Merlin was built <br /> for one.
                <span>&nbsp;
                <img id='image-to-zoom' src="https://www.merlin.computer/cloud-small.webp" alt="Cloud icon" className='w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 inline' />
                </span> You.</h1>
          </div>        
    </section>

  <section id='section-after-zoom-in' className="relative overflow-hidden -mt-[40rem]">
  {/* Background image */}
  <div className="min-h-[200vh] object-cover ">
    <img
      src="https://www.merlin.computer/cloud-small.webp"
      alt="background cloud"
      className="w-h-screen min-h-screen object-cover "
    />
  </div>

  {/* Content container (absolute, centered) */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-8 -mt-[40rem]">
    {/* Top text */}
    <div className="max-w-4xl w-full mb-8 sm:mb-12 md:mb-16">
      <div className="flex text-white justify-center items-center gap-3 sm:gap-4 md:gap-6 text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-5xl leading-tight font-bold flex-wrap mb-4 sm:mb-6">
        <p>You and everybody</p>
        <img
          src="https://www.merlin.computer/everybody.webp"
          alt="everybody"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
        />
      </div>

      <p className="text-2xl  sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl -mt-9 font-medium text-white opacity-[0.4] mb-4 sm:mb-6">you know in one</p>

      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium flex-wrap">
        <img
          src="https://www.merlin.computer/place.webp"
          alt="place"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
        />
        <p className='text-white -mt-20 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-10'>place</p>
      </div>
    </div>

    {/* Side images */}
    <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl px-4 mb-8 sm:mb-12">
      <img
        src="https://www.merlin.computer/every.svg"
        alt="every"
        className="w-full -mt-20 max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] h-20 sm:h-24 md:h-32 lg:h-36 object-contain"
      />
      <img
        src="https://www.merlin.computer/timeline.webp"
        alt="timeline"
        className="w-full -mt-20 max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] object-contain"
      />
    </div>

    {/* Description */}
    <div className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white px-4 mt-40">
      <p className="">
        Merlin keeps track of every conversation, meeting, and moment that
        matters, organizing your relationships so you always know when to reach
        out, follow up, or reconnect.
      </p>
    </div>
  </div>
</section>

   </>
  )
}

export default ZoomInText