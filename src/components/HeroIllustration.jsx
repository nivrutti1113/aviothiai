import React, { useState, useEffect } from 'react';

const HeroIllustration = () => {
  const [animationState, setAnimationState] = useState(0);
  
  useEffect(() => {
    // Advanced cinematic animation sequence
    const sequence = [
      { time: 0, state: 0 },      // Opening scene - cosmic void
      { time: 1500, state: 1 },   // Quantum fluctuations emerge
      { time: 3000, state: 2 },   // Neural network formation
      { time: 4500, state: 3 },   // AVIOTHIC text formation
      { time: 6000, state: 4 },   // Medical integration
      { time: 7500, state: 5 },   // Quantum entanglement
      { time: 9000, state: 6 },   // Glow and stabilization
      { time: 10500, state: 7 }   // Loop reset
    ];
    
    const timeouts = sequence.map(step => 
      setTimeout(() => setAnimationState(step.state), step.time)
    );
    
    // Loop the animation
    const loop = setInterval(() => {
      setAnimationState(0);
      sequence.forEach(step => 
        setTimeout(() => setAnimationState(step.state), step.time)
      );
    }, 12000);
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Advanced cosmic background */}
      <div className="absolute inset-0">
        {/* Primary ambient glow */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/${animationState >= 1 ? '30' : '10'} to-transparent rounded-full blur-3xl transition-all duration-1000`}></div>
        
        {/* Secondary quantum field */}
        <div className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl transition-all duration-1500 ${animationState >= 5 ? 'opacity-60' : 'opacity-20'}`}></div>
        
        {/* Tertiary energy field */}
        <div className={`absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-500/20 to-transparent rounded-full blur-2xl transition-all duration-2000 ${animationState >= 5 ? 'opacity-40' : 'opacity-10'}`}></div>
        
        {/* Quantum particles */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
              animationState >= 1 ? 'bg-cyan-400 opacity-60' : 'bg-slate-600 opacity-20'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: animationState >= 2 ? 'scale(1.2)' : 'scale(1)',
            }}
          ></div>
        ))}
        
        {/* Energy streams */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`stream-${i}`}
            className={`absolute w-0.5 h-20 bg-gradient-to-t from-cyan-400/40 to-transparent transition-all duration-2000 ${
              animationState >= 3 ? 'opacity-80' : 'opacity-10'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: animationState >= 3 ? `float${i % 4} 6s infinite linear` : 'none',
            }}
          ></div>
        ))}
      </div>
      
      {/* Advanced Neural Network Formation */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl px-6">
        {/* Main Text Container */}
        <div className="text-center">
          {/* AVIOTHIC Main Text */}
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              <span className="relative">
                {/* Letter A */}
                <span className={`inline-block transition-all duration-1000 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  A
                </span>
                
                {/* Letter V */}
                <span className={`inline-block transition-all duration-1000 delay-100 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  V
                </span>
                
                {/* Letter I */}
                <span className={`inline-block transition-all duration-1000 delay-200 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  I
                </span>
                
                {/* Letter O - Special Medical Integration */}
                <span className="inline-block relative">
                  <span className={`transition-all duration-1000 delay-300 ${
                    animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                  }`}>
                    O
                  </span>
                  
                  {/* Medical scan inside O */}
                  {animationState >= 3 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center animate-pulse">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500/40 to-rose-500/30 rounded-full flex items-center justify-center">
                          {/* Scan lines */}
                          <div className="absolute inset-2">
                            {[...Array(6)].map((_, i) => (
                              <div 
                                key={i}
                                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-60"
                                style={{ top: `${i * 20}%` }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Heatmap pulse */}
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-radial from-rose-400/60 to-transparent rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
                
                {/* Letter T */}
                <span className={`inline-block transition-all duration-1000 delay-400 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  T
                </span>
                
                {/* Letter H */}
                <span className={`inline-block transition-all duration-1000 delay-500 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  H
                </span>
                
                {/* Letter I */}
                <span className={`inline-block transition-all duration-1000 delay-600 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  I
                </span>
                
                {/* Letter C */}
                <span className={`inline-block transition-all duration-1000 delay-700 ${
                  animationState >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100 shadow-lg shadow-cyan-400/30' : 'text-slate-800 opacity-30'
                }`}>
                  C
                </span>
              </span>
            </h1>
            
            {/* Advanced neural connections between letters */}
            <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 1200 200">
              <defs>
                <linearGradient id="neuralFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity={animationState >= 1 ? "0.6" : "0"} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="quantumFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity={animationState >= 5 ? "0.8" : "0"} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Primary neural connections */}
              <path 
                d="M100,100 Q200,80 300,100 Q400,120 500,100 Q600,80 700,100 Q800,120 900,100 Q1000,80 1100,100" 
                stroke="url(#neuralFlow)" 
                strokeWidth="2" 
                fill="none"
                className="transition-all duration-1000"
                filter="url(#glow)"
              />
              
              {/* Quantum entanglement lines */}
              <path 
                d="M100,90 Q300,70 500,90 Q700,110 900,90 Q1100,70 1100,90" 
                stroke="url(#quantumFlow)" 
                strokeWidth="1" 
                fill="none"
                className={`transition-all duration-1000 ${animationState >= 5 ? 'opacity-100' : 'opacity-0'}`}
                filter="url(#glow)"
              />
              
              {/* Pulsing connection points */}
              {[...Array(8)].map((_, i) => (
                <circle 
                  key={i}
                  cx={150 + i * 125}
                  cy="100"
                  r="3"
                  fill="#06b6d4"
                  className={`transition-all duration-500 ${
                    animationState >= 2 ? 'opacity-80 animate-ping' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
              
              {/* Quantum nodes */}
              {[...Array(6)].map((_, i) => (
                <circle 
                  key={`qnode-${i}`}
                  cx={200 + i * 180}
                  cy="80"
                  r="2"
                  fill="#ffffff"
                  className={`transition-all duration-1000 ${
                    animationState >= 5 ? 'opacity-100 animate-pulse' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
          
          {/* Enhanced tagline */}
          <div className={`transition-all duration-1000 delay-1000 ${
            animationState >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-2xl md:text-3xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              AI That Sees What Others Miss
            </p>
          </div>
          
          {/* Enhanced platform description */}
          <div className={`mt-8 transition-all duration-1000 delay-1200 ${
            animationState >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              AI-powered early breast cancer detection and radiology intelligence platform designed for precision, explainability, and scalable screening.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1400 ${
            animationState >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={() => window.location.href = '/platform'}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Platform</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="px-8 py-4 bg-slate-800/50 text-white font-medium rounded-lg border border-slate-600 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle camera push effect */}
      <div className={`absolute inset-0 transition-transform duration-5000 ${
        animationState >= 4 ? 'scale-105' : 'scale-100'
      }`}></div>
      
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-700 { transition-delay: 700ms; }
        
        /* Quantum particle animations */
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.8; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          75% { transform: translateY(20px) rotate(-5deg); opacity: 0.8; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(15px) rotate(-5deg); opacity: 0.7; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          75% { transform: translateY(-15px) rotate(5deg); opacity: 0.7; }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          25% { transform: translateY(-10px) rotate(3deg); opacity: 0.9; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          75% { transform: translateY(10px) rotate(-3deg); opacity: 0.9; }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(25px) rotate(7deg); opacity: 0.4; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          75% { transform: translateY(-25px) rotate(-7deg); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default HeroIllustration;