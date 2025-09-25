import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const animationtext = useRef(null); // for name + title
  const quoteRef = useRef(null); // wrapper for quote letters

  useEffect(() => {
    // --- Initialize Lenis for smooth scroll ---
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // lower = smoother
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // sync GSAP with Lenis
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Animate name + title ---
    gsap.fromTo(
      animationtext.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: animationtext.current,
          start: "top 100%",
          end: "top 30%",
          scrub: true,
          markers: false,
        },
      }
    );

    // --- Animate quote letters ---
    const letters = quoteRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 80, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.05, // each letter animates one after another
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
          markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill()); // ✅ correct cleanup
    };
  }, []);

  // Split quote into spans
  const quote =
    "Merlin became the operating system for my day—cleared my plate and gave me back 12 hours a week.";
  const splitQuote = quote.split("").map((char, i) => (
    <span key={i} className="letter inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section className="bg-[#ffff] max-w-[800px] m-auto mt-70 mb-70">
      {/* Quote */}
      <div className="flex justify-center items-center text-[40px] leading-[45px] font-medium">
        <div ref={quoteRef} className="text-black text-center">
          <h1>{splitQuote}</h1>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[40%] border max-w-[800px] m-auto mt-15 mb-15 text-gray-100"></div>

      {/* Animated name + title */}
      <div
        ref={animationtext}
        className="flex flex-col justify-center items-center text-[16px] leading-[25px] mt-16"
      >
        <h1 className="text-black">Elias Moore</h1>
        <h3 className="text-gray-500">CEO, Strideworks</h3>
      </div>
    </section>
  );
};

export default Text;
