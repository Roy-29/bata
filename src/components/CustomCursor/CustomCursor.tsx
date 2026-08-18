import { useEffect, useState } from 'react';
import { useCustomCursor } from '../../hooks';
import './CustomCursor.css';

export default function CustomCursor() {
  const { position, isHovering, isTouch } = useCustomCursor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show cursor after first mouse movement
    const showCursor = () => setIsVisible(true);
    window.addEventListener('mousemove', showCursor, { once: true });
    return () => window.removeEventListener('mousemove', showCursor);
  }, []);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)` 
        }}
      />
      <div 
        className={`cursor-crosshair ${isHovering ? 'cursor-crosshair--hover' : ''}`}
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)` 
        }}
      >
        <div className="cursor-crosshair__line cursor-crosshair__line--top" />
        <div className="cursor-crosshair__line cursor-crosshair__line--bottom" />
        <div className="cursor-crosshair__line cursor-crosshair__line--left" />
        <div className="cursor-crosshair__line cursor-crosshair__line--right" />
        <div className="cursor-crosshair__corner cursor-crosshair__corner--tl" />
        <div className="cursor-crosshair__corner cursor-crosshair__corner--tr" />
        <div className="cursor-crosshair__corner cursor-crosshair__corner--bl" />
        <div className="cursor-crosshair__corner cursor-crosshair__corner--br" />
      </div>
    </>
  );
}
