import React from "react";

const Cal = () => {
  return (
    <>
      <section className="bg-[#f5f5f4] py-8 md:py-20 mt-16 md:mt-30 leading-normal md:leading-[47px] font-inter font-medium">
        <div className="max-w-7xl mx-auto text-left px-4 md:px-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4">
            Your Inbox, Calendar & Slack – finally working together
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Merlin syncs Gmail, Google Calendar, and Slack so you can book trips, clear tasks, and silence chaos from one chat.
          </p>
        </div>

        <div className="max-w-7xl flex flex-col items-center justify-center mx-4 md:mx-auto mt-10 md:mt-20 rounded-3xl md:rounded-4xl h-64 md:h-96 bg-gradient-to-b from-[#96dfff] to-[#dddd]">
        </div>

        {/* Bottom two side-by-side cards */}
        <div className="max-w-7xl mx-4 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-0 md:px-5 mt-10 md:mt-20">
          {/* Card 1 */}
          <div className="relative rounded-2xl md:rounded-3xl bg-[#edebdc] overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-end p-4 md:p-6 lg:p-8">
            <img
              src="https://www.merlin.computer/_next/static/media/clarity.7c04cbd8.webp"
              alt="Clarity Background"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <img
              src="https://www.merlin.computer/apps.webp"
              alt="Apps Overlay"
              className="absolute inset-0 w-full p-4 md:p-8 object-contain"
            />

            <div className="relative z-10 pb-2 md:pb-3">
              <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mb-4 leading-tight md:leading-[30px] text-gray-900">
                Clarity over clutter
              </h3>
              <p className="text-base md:text-lg lg:text-[20px] text-gray-600 leading-snug md:leading-[30px] max-w-[430px]">
                No more jumping between apps. Merlin sees your full context and lines up what matters, when it matters.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl md:rounded-3xl bg-white overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-end p-4 md:p-6 lg:p-8">
            <img
              src="https://www.merlin.computer/_next/static/media/talk.ab54a1e5.webp"
              alt="Talk Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute top-8 md:top-12 left-4 md:left-20 z-10">
              <button className="h-16 md:h-24 lg:w-auto px-4 md:px-6 rounded-2xl md:rounded-3xl text-white text-base md:text-lg font-medium 
                bg-gradient-to-b from-gray-500 to-gray-900 
                shadow-[4px_4px_8px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.6)]">
                Resurface Sequoia meeting notes
              </button>
            </div>

            <div className="relative z-10 pb-2 md:pb-3">
              <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mb-4 leading-tight md:leading-[30px] text-gray-900">
                Talk. Type. Done.
              </h3>
              <p className="text-base md:text-lg lg:text-[20px] text-gray-600 leading-snug md:leading-[30px] max-w-[430px]">
                Ask Merlin for anything. Whether it is a draft reply, a meeting proposal, or a quick summary, it happens instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cal;