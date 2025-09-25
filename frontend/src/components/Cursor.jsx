import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const width = cursor.offsetWidth;
    const height = cursor.offsetHeight;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - width / 2,
        y: e.clientY - height / 2,
        duration: 0.5, // A slightly smoother duration
        ease: "power1.Out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 3.5, // Scale up for a more noticeable effect
        duration: 0.3,
        ease: "power1.Out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1, // Scale back to normal
        duration: 0.3,
        ease: "power1.Out",
      });
    };

    // Find all interactive elements like links, buttons, and elements with a pointer cursor
    // const interactiveElements = document.querySelectorAll(
    //   'a, button, img, logo, video [style*="cursor:pointer"]'
    // );

    // interactiveElements.forEach(el => {
    //   el.addEventListener("mouseenter", handleMouseEnter);
    //   el.addEventListener("mouseleave", handleMouseLeave);
    // });

    window.addEventListener("mousemove", moveCursor);

    // Cleanup function to remove all event listeners
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    //   interactiveElements.forEach(el => {
    //     el.removeEventListener("mouseenter", handleMouseEnter);
    //     el.removeEventListener("mouseleave", handleMouseLeave);
    //   });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-50"
    /> 
  );
};

export default Cursor;
