import React from 'react';

const DoctorPatientIcon = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Doctor figure */}
      <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8L9 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8L7 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12L9 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 14L7 16L9 14" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Patient figure */}
      <circle cx="17" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 8L19 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 8L17 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 12L19 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 14L17 16L19 14" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Check mark for doctor */}
      <path d="M9 4L10 5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Check mark for patient */}
      <path d="M19 4L20 5L22 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Medical cross between them */}
      <path d="M12 8L12 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 10L14 10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};

export default DoctorPatientIcon;