import React, { useState, useEffect } from 'react';

const TRIVITA_SystemArchitecture = () => {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    // Precise animation sequence with mathematical timing
    const sequence = [
      { time: 0, state: 0 },      // Initial state - grid alignment
      { time: 1500, state: 1 },   // Stage 1 activation
      { time: 3000, state: 2 },   // Stage 2 attention flow
      { time: 4500, state: 3 },   // Stage 3 fusion convergence
      { time: 6000, state: 4 },   // Output layer activation
      { time: 7500, state: 5 }    // Full system stabilization
    ];

    const timeouts = sequence.map(step => 
      setTimeout(() => setAnimationState(step.state), step.time)
    );

    // Continuous background gradient flow
    const gradientInterval = setInterval(() => {
      // Subtle background shifts
    }, 20000);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      clearInterval(gradientInterval);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Professional Dark Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent"></div>
      </div>

      {/* Layer 2: Animated Background Flow */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/5 to-transparent transition-all duration-10000 ${animationState >= 1 ? 'opacity-30' : 'opacity-0'}`}></div>
      </div>

      {/* Layer 3: Main Architecture Grid */}
      <div className="relative z-10 w-full max-w-7xl px-8">
        <svg 
          viewBox="0 0 1200 675" 
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="connectionFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0" />
              <stop offset="50%" stopColor="#0d9488" stopOpacity={animationState >= 1 ? "0.6" : "0"} />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="attentionFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity={animationState >= 2 ? "0.4" : "0"} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            
            <filter id="moduleShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Stage 1 - Representational Intelligence Layer */}
          <g transform="translate(100, 150)">
            {/* Input Panels */}
            <rect x="0" y="0" width="120" height="80" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="60" y="45" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              CC View
            </text>
            
            <rect x="140" y="0" width="120" height="80" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="200" y="45" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              MLO View
            </text>
            
            {/* DICOM Ingestion */}
            <rect x="70" y="100" width="180" height="60" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="160" y="135" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              DICOM Ingestion
            </text>
            
            {/* CNN Backbone */}
            <rect x="50" y="180" width="220" height="80" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="160" y="210" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              CNN Ensemble
            </text>
            <text x="160" y="230" textAnchor="middle" className="text-xs fill-slate-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
              EfficientNet + ResNet + DenseNet
            </text>
            
            {/* Feature Pyramid */}
            <g transform="translate(90, 280)">
              {[...Array(4)].map((_, i) => (
                <rect 
                  key={i}
                  x={i * 35} 
                  y={0} 
                  width="25" 
                  height="25" 
                  rx="4" 
                  fill="#0d9488" 
                  className="opacity-60"
                />
              ))}
            </g>
            
            {/* Stage 1 Connections */}
            <line x1="60" y1="80" x2="160" y2="100" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="200" y1="80" x2="160" y2="100" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="160" y1="160" x2="160" y2="180" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="160" y1="260" x2="160" y2="280" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            
            {/* Data Flow Animation */}
            {[...Array(3)].map((_, i) => (
              <circle 
                key={i}
                cx={160} 
                cy={100 + i * 60} 
                r="3" 
                fill="#0d9488"
                className={`transition-all duration-1000 ${animationState >= 1 ? 'opacity-80 animate-pulse' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </g>

          {/* Stage 2 - Vision-based Global Intelligence */}
          <g transform="translate(450, 150)">
            {/* Vision Transformer */}
            <rect x="50" y="50" width="200" height="100" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="150" y="95" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Vision Transformer
            </text>
            <text x="150" y="115" textAnchor="middle" className="text-xs fill-slate-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Multi-head Attention
            </text>
            
            {/* 16x16 Patch Grid */}
            <g transform="translate(40, 170)">
              {[...Array(16)].map((_, i) => (
                <rect 
                  key={i}
                  x={(i % 4) * 25} 
                  y={Math.floor(i / 4) * 25} 
                  width="20" 
                  height="20" 
                  rx="2" 
                  fill="#0d9488" 
                  className="opacity-50"
                />
              ))}
            </g>
            
            {/* Attention Visualization */}
            <g transform="translate(260, 170)">
              {[...Array(4)].map((_, i) => (
                <path 
                  key={i}
                  d={`M 0 ${i * 25 + 10} Q 30 ${Math.random() * 80 + 20} 60 ${Math.random() * 80 + 20}`}
                  stroke="url(#attentionFlow)" 
                  strokeWidth="1" 
                  fill="none"
                  className={`transition-all duration-2000 ${animationState >= 2 ? 'opacity-60' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </g>
            
            {/* Global Context */}
            <rect x="80" y="290" width="140" height="60" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="150" y="325" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Global Context
            </text>
            
            {/* Stage 2 Connections */}
            <line x1="150" y1="150" x2="150" y2="170" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="150" y1="270" x2="150" y2="290" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            
            {/* Attention Flow Animation */}
            {[...Array(4)].map((_, i) => (
              <circle 
                key={i}
                cx={100 + (i * 25)} 
                cy={180 + Math.floor(i / 4) * 25} 
                r="2" 
                fill="#ffffff"
                className={`transition-all duration-1500 ${animationState >= 2 ? 'opacity-70 animate-pulse' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </g>

          {/* Stage 3 - Integrated Transformative Fusion */}
          <g transform="translate(800, 150)">
            {/* Clinical Variables */}
            <g transform="translate(0, 20)">
              <circle cx="20" cy="20" r="15" fill="#0d9488" className="opacity-70" filter="url(#moduleShadow)" />
              <text x="40" y="25" className="text-sm fill-slate-200 font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Age
              </text>
              <circle cx="20" cy="50" r="15" fill="#0d9488" className="opacity-70" filter="url(#moduleShadow)" />
              <text x="40" y="55" className="text-sm fill-slate-200 font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Density
              </text>
              <circle cx="20" cy="80" r="15" fill="#0d9488" className="opacity-70" filter="url(#moduleShadow)" />
              <text x="40" y="85" className="text-sm fill-slate-200 font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
                History
              </text>
            </g>
            
            {/* Bayesian Modeling */}
            <rect x="50" y="120" width="180" height="60" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="140" y="155" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Bayesian Modeling
            </text>
            
            {/* Monte Carlo Dropout */}
            <rect x="60" y="200" width="160" height="50" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            <text x="140" y="230" textAnchor="middle" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              MC Dropout
            </text>
            
            {/* TRIVITA CORE - Central Fusion Engine */}
            <rect x="50" y="270" width="180" height="100" rx="8" fill="#f59e0b" className="opacity-80" filter="url(#glow)" />
            <text x="140" y="315" textAnchor="middle" className="text-lg font-bold fill-slate-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
              TRIVITA
            </text>
            <text x="140" y="335" textAnchor="middle" className="text-sm fill-slate-900 font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
              CORE
            </text>
            
            {/* Stage 3 Connections - Perfect Convergence */}
            <line x1="140" y1="80" x2="140" y2="120" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="140" y1="180" x2="140" y2="200" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            <line x1="140" y1="250" x2="140" y2="270" stroke="url(#connectionFlow)" strokeWidth="1.5" />
            
            {/* Convergence Flow Animation */}
            <circle 
              cx="140" 
              cy="270" 
              r="5" 
              fill="#f59e0b"
              className={`transition-all duration-2000 ${animationState >= 3 ? 'opacity-90 animate-pulse' : 'opacity-0'}`}
            />
          </g>

          {/* Output Layer */}
          <g transform="translate(500, 420)">
            <rect x="0" y="0" width="300" height="180" rx="8" fill="#1e40af" className="opacity-80" filter="url(#moduleShadow)" />
            
            {/* Grad-CAM Visualization */}
            <g transform="translate(20, 30)">
              <rect width="80" height="80" rx="4" fill="#7e22ce" className="opacity-40" />
              <text x="40" y="45" textAnchor="middle" className="text-xs fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Grad-CAM
              </text>
              <text x="40" y="60" textAnchor="middle" className="text-xs fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Heatmap
              </text>
            </g>
            
            {/* Risk Metrics */}
            <g transform="translate(120, 30)">
              <text x="0" y="20" className="text-sm fill-white font-medium" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Risk Probability: 
                <tspan className={`transition-all duration-3000 ${animationState >= 4 ? 'text-cyan-300' : 'text-white'}`}>
                  {animationState >= 4 ? '87%' : '0%'}
                </tspan>
              </text>
              <text x="0" y="45" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
                95% Confidence Interval
              </text>
              <rect x="0" y="55" width="150" height="8" rx="4" fill="#0d9488" className="opacity-30" />
              <rect x="0" y="55" width="130" height="8" rx="4" fill="#0d9488" className="opacity-80 transition-all duration-3000" />
              <text x="0" y="80" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
                BI-RADS: 4
              </text>
              <text x="0" y="100" className="text-sm fill-green-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Validation: ✓
              </text>
            </g>
          </g>

          {/* Perfect Grid Alignment Connections */}
          <g stroke="#0d9488" strokeWidth="1.5" fill="none">
            {/* Stage 1 to Stage 2 */}
            <path d="M 320 220 Q 385 200 450 200" stroke="url(#connectionFlow)" />
            
            {/* Stage 2 to Stage 3 */}
            <path d="M 650 200 Q 725 200 800 200" stroke="url(#connectionFlow)" />
            
            {/* Stage 3 to Output */}
            <path d="M 890 320 Q 800 400 700 420" stroke="url(#connectionFlow)" />
            
            {/* Feedback Loop */}
            <path d="M 700 500 Q 400 550 200 350" stroke="#f59e0b" strokeDasharray="5,5" opacity="0.4" />
          </g>

          {/* Mathematical Grid Overlay (Hidden but Present for Alignment) */}
          <g stroke="#ffffff" strokeWidth="0.5" opacity="0.05">
            {[...Array(20)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="675" />
            ))}
            {[...Array(12)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 60} x2="1200" y2={i * 60} />
            ))}
          </g>
        </svg>
      </div>

      {/* Layer 4: Subtle Motion Elements */}
      <div className="absolute inset-0">
        {/* Background particle flow */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-teal-400/30 transition-all duration-5000 ${animationState >= 1 ? 'opacity-40' : 'opacity-0'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `drift${i % 2} ${20 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes drift0 {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-15px); }
          50% { transform: translateX(40px) translateY(0px); }
          75% { transform: translateX(20px) translateY(15px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes drift1 {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-15px) translateY(20px); }
          50% { transform: translateX(0px) translateY(40px); }
          75% { transform: translateX(15px) translateY(20px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default TRIVITA_SystemArchitecture;