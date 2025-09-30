import React, {  useEffect , useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)



const Cal = () => {
  const cards = useRef(null); 
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      cards.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cards.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    return () => {
      animation.kill()
    }
  }, [])

  const sentences = [
    "Resurface sequoia  meetings notes",
    "Block focus time this afternoon",
    "Summarize last investor call",
    "Draft reply to Sarah's email",
    "Schedule a  call with  Daniel",
];

useEffect(() => {
    const textEl = textRef.current;
    const cursorEl = cursorRef.current;

    tl.current = gsap.timeline({ repeat: -1 });

    sentences.forEach((sentence) => {
      // typing animation
      tl.current.to(textEl, {
        text: sentence,
        duration: sentence.length * 0.08, // typing speed
        filter: "blur(0px)",
        ease: "none",
      });

      // small pause
      tl.current.to({}, { duration: 1 });

      // deleting animation
      tl.current.to(textEl, {
        text: "",
        duration: sentence.length * 0.05, // deleting speed
        filter: "blur(1px)",
        ease: "none",
      });
    });

    return () => {
      if (tl.current) {
        tl.current.kill()
      }
    }
  }, []);



  return (
    <>
      <section className="bg-[#f5f5f4] py-12 mt-16 space-y-12"> {/* Standardized vertical spacing */}
        {/* Header section */}
        <div className="max-w-7xl mx-auto px-4 space-y-4"> {/* Consistent internal spacing */}
          <h1 className="text-2xl md:text-4xl font-medium">
            Your Inbox, Calendar & Slack – finally working together
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Merlin syncs Gmail, Google Calendar, and Slack so you can book trips, clear tasks, and silence chaos from one chat.
          </p>
        </div>

        {/* Main content area */}
        <div className="max-w-7xl mx-auto px-4 space-y-12"> {/* Consistent spacing between sections */}
          <div  className="font-medium flex flex-col items-center justify-center  md:mx-auto mt-10 md:mt-20 rounded-3xl md:rounded-4xl
           h-auto min-h-[700px] md:h-[750px] bg-gradient-to-b from-[#96dfff] to-[#dddd] p-2 md:p-6">
            <div className="w-full max-w-2xl">
              {/* User message */}
              <div className="flex justify-end mb-6">
                <div className="flex items-center max-w-[90%] md:max-w-[460px]">
                  <p className="rounded-2xl py-2 md:py-3 px-3 text-white bg-[#3575f8] font-light text-sm md:text-[14px] leading-tight md:leading-[22px]">
                    Hey Merlin - When can
                    <span className="text-[#8ca7f1]">Jason Glover</span> and I squeeze in a trip to Tokyo together for 4 days
                  </p>
                  <img src="https://www.merlin.computer/jason.png" alt="jason"
                    className="w-6 md:w-8 h-6 md:h-8 rounded-full ml-2 -mt-8" />
                </div>
              </div>

              {/* Merlin response */}
              <div ref={cards} className="flex justify-start mt-4"> {/* Changed from -mt-20 */}
                <div className="flex items-start max-w-[97%] md:max-w-[510px] space-y-4"> {/* Added consistent spacing */}
                  <img src="https://www.merlin.computer/merlin-logo.svg" alt="Merlin logo"
                    className="w-6 md:w-8 h-6 md:h-8 rounded-full mr-3" /> {/* Adjusted margin */}

                  <div className="bg-[#fdf8f7] rounded-2xl px-4 py-4 w-full"> {/* Standardized padding */}
                    <p className="mb-4">Alright, I've crunched the chaos.</p> {/* Consistent spacing */}
                    <p className="mb-4">Here's the game plan:</p>

                    {/* Schedule cards with consistent spacing */}
                    <div className="space-y-3"> {/* Standardized card spacing */}
                      {/* Schedule cards */}
                      <div className="flex items-center rounded-xl p-3 gap-3 shadow-lg bg-white">
                        <img src="https://www.merlin.computer/date.svg" alt="date" className="w-6" />
                        <p className="text-sm md:text-[14px]"><strong>Dates:</strong> March 16-20. Shifted Jason's 9 AM meeting to the 15th (he'll get over it).</p>
                      </div>
                      <div className="flex items-center rounded-xl p-3 gap-3 shadow-lg bg-white">
                        <img src="https://www.merlin.computer/flight.svg" alt="flight" className="w-6" />
                        <p className="text-sm md:text-[14px]"><strong>Flights:</strong> ANA Nonstop, March 16 @ 8 PM. Lie-flat seats, Wi-Fi, zero layover trauma.</p>
                      </div>
                      <div className="flex items-center rounded-xl p-3 gap-3 shadow-lg bg-white">
                        <img src="https://www.merlin.computer/stay.svg" alt="stay" className="w-6" />
                        <p className="text-sm md:text-[14px]"><strong>Stay:</strong> Daikanyama Airbnb. Artsy, quiet, and 2 blocks from Arabica Coffee (Jason's Insta crush).</p>
                      </div>
                    </div>

                    <div className="mt-6"> {/* Increased spacing */}
                      <p>If this sounds good, hit the button below and I'll get things booked.</p>
                      <img src="https://www.merlin.computer/lock.svg" alt="Security lock icon" className="w-full mt-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom cards */}
          <div className="max-w-7xl mx-auto  mt-12"> {/* Standardized margin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Consistent gap */}
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
                  className="absolute inset-0 w-full h-[20rem] p-4 md:p-8 object-contain"
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
                  className="absolute inset-0 w-full h-full object-cover "
                />

                <div className="absolute  top-8 md:top-12 left-4 md:left-20 z-10">
                  <button className="h-16 w-[20rem] md:h-24 lg:w-[30rem] px-4 md:px-6 rounded-2xl md:rounded-3xl text-white text-base md:text-lg font-medium
                    bg-gradient-to-b from-gray-500  to-gray-900
                    shadow-[16px_16px_32px_rgba(0,0,0,0.10),-2px_-2px_6px_rgba(255,255,255,0.6)] ">
                       <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-85 pointer-events-none flex  justify-center items-center "></span>
                    <span ref={textRef} className="inline-block"></span>
                   
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Cal;