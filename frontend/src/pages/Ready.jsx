import React from 'react'

const Ready = () => {
  return (
    <section className='bg-[linear-gradient(180deg,_#fff,_#fff_58.17%,_#e1f2e6)] max-w-[1300px] m-auto  lg:min-h-[700px] mt-20 md:mt-60 mb-20 md:mb-60 pt-4 rounded-4xl px-4'>
        <div className='relative'>
          <div className='absolute  left-[50px] lg:left-[90px] transform -translate-x-1/2 md:left-auto md:ml-[220px] md:transform-none'>
            <img src="https://www.merlin.computer/how.svg" alt="" className='h-28 w-28 md:h-40 md:w-40' />
          </div>
        </div>

         <div className='flex justify-between items-center mt-16 md:mt-20 max-w-2xl m-auto px-4 '>
              <h1 className='font-medium text-center leading-[60px] text-3xl md:text-[60px]'>Ready to win back 12 hours a week?</h1>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-12 md:mt-16 gap-8 md:gap-30 max-w-6xl m-auto md:space-x-7'>
              <div className='flex flex-col items-center text-center gap-4 max-w-sm'>
                  <img src="https://www.merlin.computer/1.png" alt="1" className='w-12 h-12' />
                <h1 className='text-center font-medium text-xl md:text-2xl'>Connect in minutes</h1>
                <p className='text-center text-gray-500'>Sync Gmail, Google Calendar, and more. Merlin filters the noise and finds what matters.</p>
              </div>

              <div className='flex flex-col items-center text-center gap-4 max-w-sm'>
                <img src="https://www.merlin.computer/2.png" alt="2" className='w-12 h-12' />
                <h1 className='text-center text-xl md:text-2xl'>See your day prioritized</h1>
                <p className='text-center text-gray-500'>Merlin surfaces the emails, meetings, and tasks that matter most to your day.</p>
              </div>

              <div className='flex flex-col items-center text-center gap-4 max-w-sm'>
                <img src="https://www.merlin.computer/3.png" alt="3" className='w-12 h-12' />
                <h1 className='text-center text-xl md:text-2xl'>Take back your time</h1>
                <p className='text-center text-gray-500'>Complete high-impact priorities with one click and reclaim 12+ hours a week.</p>
              </div>
          </div>

          <div className="mt-30 max-w-5xl m-auto text-center">
  <button className="relative py-4 px-12 rounded-2xl text-white bg-[#34C759] mb-[50px] overflow-hidden">
    <span className="relative z-10">Start free trial</span>

    {/* Rotating glow border inside */}
    <span className="absolute inset-0 rounded-2xl overflow-hidden w-full">
      <span className="absolute inset-[-20%] rounded-[50%] bg-[conic-gradient(from_0deg,white_10%,transparent_30%,transparent_100%)]  animate-spin-slow opacity-70 blur-sm"></span>
    </span>
  </button>
</div>


    </section>
  )
}

export default Ready