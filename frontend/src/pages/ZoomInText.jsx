import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomInText = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const cloud = section.querySelector("#image-to-zoom");
    const content = section.querySelector(".next-content");
    const timelineImg = section.querySelector("#timeline-image");

    // Calculate transform origin for zoom
    const sectionRect = section.getBoundingClientRect();
    const cloudRect = cloud.getBoundingClientRect();
    const originX =
      ((cloudRect.left + cloudRect.width / 2) - sectionRect.left) /
      sectionRect.width *
      100;
    const originY =
      ((cloudRect.top + cloudRect.height / 2) - sectionRect.top) /
      sectionRect.height *
      100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=4000", // more scroll distance for extra stage
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    // Stage 1: zoom into cloud
    tl.to(section, {
      scale: 30,
      opacity: 0,
      transformOrigin: `${originX}% ${originY}%`,
      duration: 1,
    });

    // Stage 2: fade in new content
    tl.fromTo(
      content,{
       
      },
      { autoAlpha: 0, y: 100 , scale: -0},
      { autoAlpha: 1, y: 0, duration: 1 },
      "+=0.2"
    );

    // Stage 3: hide timeline image
    tl.to(
      timelineImg,
      {
        autoAlpha: 0,
        duration: 1,
      },
      "+=0.5" // start a bit after content appears
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-[1300px] m-auto lg:min-h-[520px] mt-20 sm:mt-40 md:mt-90 mb-16 md:mb-20 pt-4 rounded-4xl px-4 overflow-hidden"
    >
      {/* First Block */}
      <div className="flex justify-center items-center mt-16 md:mt-20 max-w-2xl m-auto px-4">
        <h1 className="font-medium  text-center leading-tight sm:leading-[40px] md:leading-[60px] text-2xl 
        sm:text-3xl md:text-4xl lg:text-[60px]">
        <img src="/text.png" alt="" className="-ml-28 " />
          Merlin was built <br /> for one.
          <span>
            &nbsp;
            <img
              id="image-to-zoom"
              src="https://www.merlin.computer/cloud-small.webp"
              alt="Cloud icon"
              className="w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 inline"
            />
          </span>{" "}
          You.
        </h1>
      </div>

      {/* Next Content */}
      <div className="next-content absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-8 sm:py-8 opacity-0">
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

          <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl -mt-9 font-medium text-white opacity-[0.4] mb-4 sm:mb-6">
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
        </div>

        {/* Side images */}
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl px-4 mb-8 sm:mb-12">
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

        {/* Description */}
        <div className="max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white px-4 mt-40">
          <p>
            Merlin keeps track of every conversation, meeting, and moment that
            matters, organizing your relationships so you always know when to
            reach out, follow up, or reconnect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZoomInText;
