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
      scale:22,
      opacity:1,
      transformOrigin: `${originX}% ${originY}%`,
      duration:0.2,
    });

   

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
    <section
      ref={sectionRef}
      className="relative max-w-[1300px]  m-auto lg:min-h-[520px] mt-20 sm:mt-40 md:mt-90  mb-16 md:mb-20 pt-4 rounded-4xl px-4 overflow-hidden"
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

      </section>
  </>
  );
};

export default ZoomInText;
