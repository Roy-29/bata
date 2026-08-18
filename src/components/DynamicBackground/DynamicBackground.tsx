import { useCustomCursor } from '../../hooks';
import './DynamicBackground.css';

export default function DynamicBackground() {
  const { position, isHovering } = useCustomCursor();
  
  return (
    <div className="dynamic-bg" aria-hidden="true">
      <div className="dynamic-bg__noise" />
      <div className="dynamic-bg__grid" />
      
      {/* Interactive Cursor Glow */}
      <div 
        className={`dynamic-bg__cursor-glow ${isHovering ? 'dynamic-bg__cursor-glow--hover' : ''}`}
        style={{
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`
        }}
      />
      
      <div className="dynamic-bg__gradient dynamic-bg__gradient--teal" />
      <div className="dynamic-bg__gradient dynamic-bg__gradient--emerald" />
      <div className="dynamic-bg__energy" />
    </div>
  );
}
