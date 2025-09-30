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

    // Stage 1: zoom into cloud and make it disappear completely
    tl.to(section, {
      scale: 24,
      opacity: 1,
      transformOrigin: `${originX}% ${originY}%`,
      duration: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full mt-[20rem] lg:max-w-[1300px] mx-auto lg:min-h-screen px-4 sm:px-6 lg:px-8 
          py-12 sm:py-16 md:py-24"
      >
        {/* First Block */}
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto 
          mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
          <h1 className="font-medium text-center leading-snug 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px]
            tracking-tight">
            <img 
              src="/text.png" 
              alt="" 
              className="w-32 sm:w-40 md:w-48 lg:w-56 -ml-8 sm:-ml-12 lg:-ml-20 
                transform translate-x-0 sm:translate-x-[-5%]" 
            />
            Merlin was built <br /> for one.
            <span className="inline-flex items-center">
              &nbsp;
              <img
                id="image-to-zoom"
                src="https://www.merlin.computer/cloud-small.webp"
                alt="Cloud icon"
                className="w-8 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 lg:w-20 lg:h-12 
                  inline-block object-contain transition-transform duration-300"
              />
            </span>{" "}
            You.
          </h1>
        </div>
      </section>
    </>
  );
};

export default ZoomInText;
