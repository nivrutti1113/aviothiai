import React from 'react';

const AIBrainIcon = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain outline */}
      <path 
        d="M12 4C8.68629 4 6 6.68629 6 10C6 11.5 6.75 12.75 8 13.5C8 13.5 8.5 15 10 16C10 16 10.5 17.5 12 18C13.5 17.5 14 16 14 16C15.5 15 16 13.5 16 13.5C17.25 12.75 18 11.5 18 10C18 6.68629 15.3137 4 12 4Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* AI circuit lines */}
      <path d="M10 8H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M9 10H15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 12H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M11 14H13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      
      {/* Medical scan overlay */}
      <path d="M8 6L16 6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M8 8L16 8" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M8 10L16 10" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M8 12L16 12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M8 14L16 14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
      
      {/* Neural network dots */}
      <circle cx="9.5" cy="7" r="0.5" fill="currentColor" />
      <circle cx="14.5" cy="7" r="0.5" fill="currentColor" />
      <circle cx="10" cy="9" r="0.5" fill="currentColor" />
      <circle cx="14" cy="9" r="0.5" fill="currentColor" />
      <circle cx="9.5" cy="11" r="0.5" fill="currentColor" />
      <circle cx="14.5" cy="11" r="0.5" fill="currentColor" />
      <circle cx="10" cy="13" r="0.5" fill="currentColor" />
      <circle cx="14" cy="13" r="0.5" fill="currentColor" />
    </svg>
  );
};

export default AIBrainIcon;