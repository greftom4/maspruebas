'use client'
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    let scrollPosition = window.scrollY;
    let targetPosition = scrollPosition;
    let scrollVelocity = 0;
    const friction = 0.3; // Mayor fricción para un movimiento más suave 0.3
    const speed = 0.1; // Velocidad de reacción al scroll 0.1

    function updateScroll() {
      scrollVelocity = (targetPosition - scrollPosition) * speed;
      scrollPosition += scrollVelocity * friction;
      window.scrollTo(0, scrollPosition);

      if (Math.abs(scrollVelocity) > 0.1 || Math.abs(scrollPosition - targetPosition) > 0.1) {
        requestAnimationFrame(updateScroll);
      }
    }

    const handleWheel = (event) => {
      targetPosition += event.deltaY;
      targetPosition = Math.max(0, Math.min(targetPosition, document.body.scrollHeight - window.innerHeight));
      requestAnimationFrame(updateScroll);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default SmoothScroll;