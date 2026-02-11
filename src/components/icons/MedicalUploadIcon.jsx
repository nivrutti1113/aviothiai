import React from 'react';

const MedicalUploadIcon = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Computer/Laptop Base */}
      <rect x="4" y="14" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="6" y="12" width="12" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Medical Scan Document */}
      <rect x="8" y="6" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      
      {/* Medical cross symbol inside document */}
      <line x1="10" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="7" x2="12" y2="11" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Upload arrow */}
      <path d="M12 16V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8L12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Medical accent circle */}
      <circle cx="12" cy="10" r="0.5" fill="currentColor" />
    </svg>
  );
};

export default MedicalUploadIcon;