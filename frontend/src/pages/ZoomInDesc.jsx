import React from 'react'


const ZoomInDesc = () => {
  return (
    <div 
      className="relative max-w-4xl m-auto min-h-screen min-w-screen bg-cover bg-fixed  lg:-mt-[40rem] h-[80rem] bg-center bg-no-repeat mb-90" 
      style={{
        backgroundImage: 'url(/cloud-small.jpg)'
      }}
    >

     <div>
     <div className="absolute inset-0 m-auto mt-20 max-w-4xl w-full mb-8 sm:mb-12 md:mb-16 text-6xl font-medium text-white">
          <div className="flex   justify-center items-center  ">
            <p>You and everybody</p>
            <img
              src="https://www.merlin.computer/everybody.webp"
              alt="everybody"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
            />
          </div>

          <p className="text-2xl text-center sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl mt-2 font-medium text-white opacity-[0.4] mb-4 sm:mb-6">
            you know in one
          </p>

          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium flex-wrap">
            <img
              src="https://www.merlin.computer/place.webp"
              alt="place"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
            />
            <p className="text-white -mt-20 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-10">
              place
            </p>
          </div> 

          <div className="flex flex-col justify-center items-center gap-6 mt-11 sm:gap-8 md:gap-10 w-full max-w-5xl px-4 mb-8 sm:mb-12">
          <img
            src="https://www.merlin.computer/every.svg"
            alt="every"
            className="w-full -mt-20 max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] h-20 sm:h-24 md:h-32 lg:h-36 object-contain"
          />
          <img
            id="timeline-image"
            src="https://www.merlin.computer/timeline.webp"
            alt="timeline"
            className="w-full -mt-20 max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[35rem] h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] object-contain"
          />
        </div> 

        <div className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white px-4 mt-40">
          <p>
            Merlin keeps track of every conversation, meeting, and moment that
            matters, organizing your relationships so you always know when to
            reach out, follow up, or reconnect.
          </p>
        </div>
    
      </div> 
    </div>
    </div>
  )

}

export default ZoomInDesc