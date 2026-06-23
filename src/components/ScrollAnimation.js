import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  duration = 0.8,
  threshold = 0.1 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : getInitialTransform(animation),
    transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    // GPU acceleration for smoother animations
    willChange: 'opacity, transform',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
  };

  return (
    <div ref={ref} style={animationStyle}>
      {children}
    </div>
  );
};

const getInitialTransform = (animation) => {
  switch (animation) {
    case 'fade-in-up':
      return 'translateY(30px)';
    case 'fade-in-down':
      return 'translateY(-30px)';
    case 'fade-in-left':
      return 'translateX(-30px)';
    case 'fade-in-right':
      return 'translateX(30px)';
    case 'scale-in':
      return 'scale(0.8)';
    case 'slide-in-up':
      return 'translateY(50px)';
    default:
      return 'translateY(30px)';
  }
};

export default ScrollAnimation;
