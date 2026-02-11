import React from 'react';

const MammogramAIOverlay = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-64 md:h-80 bg-gray-900 rounded-xl overflow-hidden border border-blue-400/30 ${className}`}>
      {/* Base mammogram tissue pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700/40 to-gray-800/60" />
      
      {/* Tissue structures */}
      <div className="absolute top-8 left-12 w-24 h-24 rounded-full bg-gray-600/30 blur-md" />
      <div className="absolute top-16 right-20 w-16 h-16 rounded-full bg-gray-500/25 blur-md" />
      <div className="absolute bottom-16 left-20 w-14 h-14 rounded-full bg-gray-600/25 blur-md" />
      <div className="absolute bottom-24 right-16 w-10 h-10 rounded-full bg-gray-500/20 blur-md" />
      <div className="absolute top-24 left-24 w-12 h-12 rounded-full bg-gray-500/20 blur-md" />
      
      {/* Suspicious lesion area (red) */}
      <div className="absolute top-20 right-24 w-8 h-8 rounded-full bg-red-500/60 blur-lg" />
      
      {/* Secondary suspicious area (yellow) */}
      <div className="absolute bottom-20 right-28 w-6 h-6 rounded-full bg-yellow-500/50 blur-lg" />
      
      {/* Grad-CAM heatmap overlay - primary area */}
      <div 
        className="absolute top-16 right-20 w-12 h-12 rounded-full opacity-40 blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,255,0,0.6) 50%, rgba(0,255,0,0.2) 100%)',
        }}
      />
      
      {/* Grad-CAM heatmap overlay - secondary area */}
      <div 
        className="absolute bottom-16 right-24 w-10 h-10 rounded-full opacity-30 blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,0,0.7) 0%, rgba(0,255,0,0.3) 100%)',
        }}
      />
      
      {/* AI overlay elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/10" />
      
      {/* Grid lines for precision */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]" />
      
      {/* Caption */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-md">
        AI Analysis Overlay
      </div>
    </div>
  );
};

export default MammogramAIOverlay;