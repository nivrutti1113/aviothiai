import React from 'react';

const HospitalLogoBadge = ({ className = "", size = 120 }) => {
  const sizeClass = size === 'large' ? 'w-32 h-32' : size === 'small' ? 'w-16 h-16' : 'w-24 h-24';
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`${sizeClass} rounded-2xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 p-0.5`}>
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
          {/* Medical cross symbol */}
          <div className="relative">
            <div className="w-8 h-2 bg-blue-400 rounded-full mx-auto" />
            <div className="w-2 h-8 bg-blue-400 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            {/* Circular frame */}
            <div className="absolute inset-0 rounded-full border border-blue-400/30" />
            
            {/* Subtle shine effect */}
            <div className="absolute top-1 left-2 w-3 h-1 bg-white/20 rounded-full blur-sm" />
          </div>
        </div>
      </div>
      
      {/* Subtle glow effect around badge */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-md -z-10 ${sizeClass}`} />
    </div>
  );
};

export default HospitalLogoBadge;