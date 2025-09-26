import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Merlin = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    const handleMouseMove = (event) => {
      // Get container bounding rect
      const rect = container.getBoundingClientRect();

      // Calculate mouse position relative to container
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      // Limit position to container bounds minus image size to avoid overflow
      const maxX = rect.width - image.offsetWidth / 2;
      const maxY = rect.height - image.offsetHeight /2;
      const minX = image.offsetWidth / 2;
      const minY = image.offsetHeight / 2;

      x = Math.min(Math.max(x, minX), maxX);
      y = Math.min(Math.max(y, minY), maxY);

      // Animate image to follow cursor with elastic ease for bounce effect
      gsap.to(image, {
        x: x - image.offsetWidth / 2,
        y: y - image.offsetHeight / 2,
        duration: 0.5,
        ease: 'elastic.out(0.7, 0.3)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Reset image position on mouse leave
    const handleMouseLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(0.7, 0.3)',
      });
    };

    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#f5f5f5] pb-10 relative  h-[150px] lg:h-[290px] overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="max-w-7xl m-auto pt-4 relative " style={{ position: 'relative' }}>
        <img
          ref={imageRef}
          src="https://www.merlin.computer/logo.svg"
          alt="logo"
          className="w-full "
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        />
      </div>
    </section>
  );
};

export default Merlin;
