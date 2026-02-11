import React from 'react';

const AIBrainGraphic = ({ size = 24, className = '' }) => {
  return (
    <div className={`${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 hover:scale-110"
      >
        {/* Main Brain Structure */}
        <path 
          d="M12 2C8.13 2 5 5.13 5 9c0 1.74.63 3.35 1.67 4.62-.21.84-.33 1.72-.33 2.63 0 3.87 3.13 7 7 7s7-3.13 7-7c0-.91-.12-1.79-.33-2.63C18.37 12.35 19 10.74 19 9c0-3.87-3.13-7-7-7z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          className="animate-pulse"
        />
        
        {/* Neural Connections */}
        <path d="M9 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 14l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 11l1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Processing Nodes */}
        <circle cx="8" cy="7" r="0.8" fill="currentColor" className="animate-ping" />
        <circle cx="16" cy="8" r="0.8" fill="currentColor" className="animate-ping" style={{ animationDelay: '0.2s' }} />
        <circle cx="12" cy="15" r="0.8" fill="currentColor" className="animate-ping" style={{ animationDelay: '0.4s' }} />
        
        {/* AI Indicator */}
        <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="9" r="0.5" fill="currentColor" />
      </svg>
    </div>
  );
};

export default AIBrainGraphic;