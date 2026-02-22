import React, { useState, useEffect } from 'react';

const HeroIllustration = () => {
  const [animationState, setAnimationState] = useState(0);
  
  useEffect(() => {
    // Cinematic animation sequence
    const sequence = [
      { time: 0, state: 0 },      // Opening scene
      { time: 2000, state: 1 },   // Neural formation begins
      { time: 4000, state: 2 },   // Letters forming
      { time: 7000, state: 3 },   // Medical integration
      { time: 9000, state: 4 },   // Glow and stabilize
      { time: 11000, state: 5 }   // Loop reset
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Ambient glow */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/${animationState >= 1 ? '30' : '10'} to-transparent rounded-full blur-3xl transition-all duration-1000`}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
              animationState >= 1 ? 'bg-cyan-400 opacity-40' : 'bg-slate-600 opacity-20'
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
      </div>
      
      {/* Neural Network Formation */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl px-6">
        {/* Main Text Container */}
        <div className="text-center">
          {/* AVIOTHIC Main Text */}
          <div className="relative mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              <span className="relative">
                {/* Letter A */}
                <span className={`inline-block transition-all duration-1000 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  A
                </span>
                
                {/* Letter V */}
                <span className={`inline-block transition-all duration-1000 delay-100 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  V
                </span>
                
                {/* Letter I */}
                <span className={`inline-block transition-all duration-1000 delay-200 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  I
                </span>
                
                {/* Letter O - Special Medical Integration */}
                <span className="inline-block relative">
                  <span className={`transition-all duration-1000 delay-300 ${
                    animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
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
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  T
                </span>
                
                {/* Letter H */}
                <span className={`inline-block transition-all duration-1000 delay-500 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  H
                </span>
                
                {/* Letter I */}
                <span className={`inline-block transition-all duration-1000 delay-600 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  I
                </span>
                
                {/* Letter C */}
                <span className={`inline-block transition-all duration-1000 delay-700 ${
                  animationState >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 opacity-100' : 'text-slate-800 opacity-30'
                }`}>
                  C
                </span>
              </span>
            </h1>
            
            {/* Neural connections between letters */}
            <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 1200 200">
              <defs>
                <linearGradient id="neuralFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity={animationState >= 1 ? "0.6" : "0"} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Connecting lines between letters */}
              <path 
                d="M100,100 Q200,80 300,100 Q400,120 500,100 Q600,80 700,100 Q800,120 900,100 Q1000,80 1100,100" 
                stroke="url(#neuralFlow)" 
                strokeWidth="2" 
                fill="none"
                className="transition-all duration-1000"
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
            </svg>
          </div>
          
          {/* Tagline */}
          <div className={`transition-all duration-1000 delay-1000 ${
            animationState >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-2xl md:text-3xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
              AI That Sees What Others Miss
            </p>
          </div>
          
          {/* Platform Description */}
          <div className={`mt-8 transition-all duration-1000 delay-1200 ${
            animationState >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-lg md:text-xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              AI-powered early breast cancer detection and radiology intelligence platform designed for precision, explainability, and scalable screening.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1400 ${
            animationState >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={() => window.location.href = '/platform'}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Explore Platform
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
              className="px-8 py-4 bg-slate-800/50 text-white font-medium rounded-lg border border-slate-600 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm"
            >
              Request Demo
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
      `}</style>
    </div>
  );
};

export default HeroIllustration;