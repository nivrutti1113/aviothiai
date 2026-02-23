import React, { useState, useEffect } from 'react';

const AboutBackgroundAnimation = () => {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    // 2-second animation sequence
    const sequence = [
      { time: 0, state: 0 },      // Initial state
      { time: 500, state: 1 },    // Start Vedic pattern formation
      { time: 1500, state: 2 },   // Transition to neural network
      { time: 2000, state: 3 }    // Final static state
    ];

    const timeouts = sequence.map(step => 
      setTimeout(() => setAnimationState(step.state), step.time)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep navy background */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Vedic geometric pattern formation */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Central point */}
        {animationState >= 1 && (
          <circle 
            cx="50" 
            cy="50" 
            r="1" 
            fill="#06b6d4"
            className="transition-all duration-300"
          />
        )}

        {/* Vedic geometric lines - Sri Yantra inspired */}
        {animationState >= 1 && (
          <>
            {/* Outer triangle */}
            <polygon 
              points="50,20 25,70 75,70" 
              fill="none" 
              stroke="#06b6d4" 
              strokeWidth="0.5"
              className="transition-all duration-500"
            />
            
            {/* Inner triangles */}
            <polygon 
              points="50,35 35,65 65,65" 
              fill="none" 
              stroke="#06b6d4" 
              strokeWidth="0.5"
              className="transition-all duration-500 delay-100"
            />
            
            {/* Central diamond */}
            <polygon 
              points="50,45 45,55 50,65 55,55" 
              fill="none" 
              stroke="#06b6d4" 
              strokeWidth="0.5"
              className="transition-all duration-500 delay-200"
            />
          </>
        )}

        {/* Transition to neural network */}
        {animationState >= 2 && (
          <>
            {/* Neural connections */}
            <line 
              x1="30" y1="40" x2="50" y2="50" 
              stroke="#06b6d4" 
              strokeWidth="0.6"
              className="transition-all duration-300"
            />
            <line 
              x1="70" y1="40" x2="50" y2="50" 
              stroke="#06b6d4" 
              strokeWidth="0.6"
              className="transition-all duration-300 delay-100"
            />
            <line 
              x1="40" y1="70" x2="50" y2="50" 
              stroke="#06b6d4" 
              strokeWidth="0.6"
              className="transition-all duration-300 delay-200"
            />
            <line 
              x1="60" y1="70" x2="50" y2="50" 
              stroke="#06b6d4" 
              strokeWidth="0.6"
              className="transition-all duration-300 delay-300"
            />
            
            {/* Network nodes */}
            <circle cx="30" cy="40" r="1.2" fill="#06b6d4" className="transition-all duration-200" />
            <circle cx="70" cy="40" r="1.2" fill="#06b6d4" className="transition-all duration-200 delay-100" />
            <circle cx="40" cy="70" r="1.2" fill="#06b6d4" className="transition-all duration-200 delay-200" />
            <circle cx="60" cy="70" r="1.2" fill="#06b6d4" className="transition-all duration-200 delay-300" />
            <circle cx="50" cy="50" r="1.6" fill="#06b6d4" className="transition-all duration-200 delay-400" />
          </>
        )}

        {/* Connection points */}
        {animationState >= 3 && (
          <>
            {/* Subtle connection dots */}
            <circle cx="20" cy="30" r="0.8" fill="#06b6d4" opacity="0.8" />
            <circle cx="80" cy="30" r="0.8" fill="#06b6d4" opacity="0.8" />
            <circle cx="30" cy="80" r="0.8" fill="#06b6d4" opacity="0.8" />
            <circle cx="70" cy="80" r="0.8" fill="#06b6d4" opacity="0.8" />
            
            {/* Faint connecting lines */}
            <line x1="20" y1="30" x2="30" y2="40" stroke="#06b6d4" strokeWidth="0.4" opacity="0.6" />
            <line x1="80" y1="30" x2="70" y2="40" stroke="#06b6d4" strokeWidth="0.4" opacity="0.6" />
            <line x1="30" y1="80" x2="40" y2="70" stroke="#06b6d4" strokeWidth="0.4" opacity="0.6" />
            <line x1="70" y1="80" x2="60" y2="70" stroke="#06b6d4" strokeWidth="0.4" opacity="0.6" />
          </>
        )}
      </svg>

      {/* Subtle pulsing ambient effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${15 + (i * 10)}%`,
              left: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.2}s`,
              animation: 'subtle-pulse 4s infinite'
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default AboutBackgroundAnimation;