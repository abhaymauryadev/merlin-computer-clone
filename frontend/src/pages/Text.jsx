import { use, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Text = () => {
    const animationtext = useRef(null);

    useEffect(()=>{
        gsap.fromTo(
      animationtext.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: animationtext.current, // element that triggers animation
          start: "top 80%",        // when top of box hits 80% of viewport
          end: "top 30%",          // when top of box hits 30% of viewport
          scrub: true,             // smooth scrubbing, takes 1 sec
          markers: true,           // show markers (for debugging)
        },
      }
    );
},[]);
  return (
    <section  className='bg-[#ffff] max-w-[800px] m-auto mt-70 mb-70'>
        <div className='flex justify-center items-center text-[40px] leading-[45px] font-medium'>
            <div>
                <h1 className='text-black  text-center'>"Merlin became the operating system for my day—cleared my plate and gave me back 12 hours a week."</h1>
            </div>
        </div>
        <div className='w-[40%] border  max-w-[800px] m-auto mt-15 mb-15 text-gray-100'></div>
        <div ref={animationtext} className='flex flex-col justify-center items-center text-[16px] leading-[25px] mt-16'>
            <h1 className='text-black'>Elias Moore</h1>
            <h3 className='text-gray-500'>CEO, Strideworks</h3>
        </div>
     </section>
  )
}

export default Text