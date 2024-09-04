import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

export default function AnimatedCard({ children }) {
  const elementRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: elementRef });

  const handleMouseMove = contextSafe((event) => {
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(element, {
      rotationX: yPos * 50,
      rotationY: -xPos * 50,
      transformPerspective: 500,
      transformOrigin: 'center',
      scale: 1.05,
      duration: 0.5,
      rotation: 10 * 0.5,
      ease: 'power3.ease',
    });
  });

  const handleMouseLeave = contextSafe(() => {
    const element = elementRef.current;

    gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      rotation: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="max-w-30 flex p-2 m-2 items-center justify-center
       bg-white rounded-3xl shadow-2xl shadow-blue-950"
      ref={elementRef}
    >
      {children}
    </div>
  );
}

AnimatedCard.propTypes = {
  children: PropTypes.node,
};
