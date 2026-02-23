import React from 'react';

const TRIVITA_Diagram = () => {
  return (
    <div className="w-full h-full bg-slate-900 p-8 overflow-hidden">
      <svg 
        viewBox="0 0 1200 675" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect width="1200" height="675" fill="#0f172a" />
        
        {/* Marker Definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" />
          </marker>
        </defs>
        
        {/* Title */}
        <text 
          x="600" 
          y="60" 
          textAnchor="middle" 
          className="font-bold text-4xl fill-white"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          TRIVITA
        </text>
        <text 
          x="600" 
          y="85" 
          textAnchor="middle" 
          className="text-lg fill-slate-300"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          Triple-stage Representational Intelligence via Vision-based Integrated Transformative Architecture
        </text>
        
        {/* Stage 1 - Representational Learning */}
        <g transform="translate(100, 150)">
          <text x="150" y="-30" textAnchor="middle" className="text-xl font-semibold fill-blue-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
            STAGE 1: REPRESENTATIONAL LEARNING
          </text>
          
          {/* Input Mammography Views */}
          <rect x="0" y="0" width="120" height="80" rx="8" fill="#1e40af" className="opacity-80" />
          <text x="60" y="45" textAnchor="middle" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
            CC View
          </text>
          <rect x="140" y="0" width="120" height="80" rx="8" fill="#1e40af" className="opacity-80" />
          <text x="200" y="45" textAnchor="middle" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
            MLO View
          </text>
          
          {/* Connection to CNN */}
          <line x1="60" y1="80" x2="60" y2="120" stroke="#0d9488" strokeWidth="2" />
          <line x1="200" y1="80" x2="200" y2="120" stroke="#0d9488" strokeWidth="2" />
          
          {/* CNN Backbone */}
          <rect x="40" y="120" width="180" height="60" rx="8" fill="#1e40af" className="opacity-80" />
          <text x="130" y="155" textAnchor="middle" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
            EfficientNet + ResNet + DenseNet
          </text>
          
          {/* Feature Maps */}
          <g transform="translate(80, 200)">
            <rect width="30" height="30" rx="4" fill="#0d9488" className="opacity-60" />
            <rect x="40" width="30" height="30" rx="4" fill="#0d9488" className="opacity-60" />
            <rect x="80" width="30" height="30" rx="4" fill="#0d9488" className="opacity-60" />
          </g>
        </g>
        
        {/* Stage 2 - Vision-Based Global Intelligence */}
        <g transform="translate(450, 150)">
          <text x="150" y="-30" textAnchor="middle" className="text-xl font-semibold fill-blue-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
            STAGE 2: VISION-BASED GLOBAL INTELLIGENCE
          </text>
          
          {/* Vision Transformer with Ensemble Models */}
          <rect x="50" y="50" width="200" height="100" rx="8" fill="#1e40af" className="opacity-80" />
          <text x="150" y="95" textAnchor="middle" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Vision Transformer
          </text>
          
          {/* Ensemble Model Indicators */}
          <g transform="translate(60, 110)">
            <circle cx="0" cy="0" r="6" fill="#0d9488" className="opacity-70" />
            <circle cx="20" cy="0" r="6" fill="#0d9488" className="opacity-70" />
            <circle cx="40" cy="0" r="6" fill="#0d9488" className="opacity-70" />
            <text x="60" y="4" className="text-xs fill-slate-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Ensemble
            </text>
          </g>
          
          {/* Patch Grid */}
          <g transform="translate(40, 150)">
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
          <g transform="translate(260, 150)">
            {[...Array(4)].map((_, i) => (
              <line 
                key={i}
                x1="0" 
                y1={i * 25 + 10} 
                x2="30" 
                y2={Math.random() * 80 + 20} 
                stroke="#f59e0b" 
                strokeWidth="1" 
                opacity="0.6"
              />
            ))}
          </g>
        </g>
        
        {/* Stage 3 - Integrated Transformative Fusion */}
        <g transform="translate(800, 150)">
          <text x="150" y="-30" textAnchor="middle" className="text-xl font-semibold fill-blue-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
            STAGE 3: INTEGRATED TRANSFORMATIVE FUSION
          </text>
          
          {/* Clinical Variables */}
          <g transform="translate(0, 20)">
            <circle cx="20" cy="20" r="15" fill="#0d9488" className="opacity-70" />
            <text x="40" y="25" className="text-sm fill-slate-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Age
            </text>
            <circle cx="20" cy="50" r="15" fill="#0d9488" className="opacity-70" />
            <text x="40" y="55" className="text-sm fill-slate-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Density
            </text>
            <circle cx="20" cy="80" r="15" fill="#0d9488" className="opacity-70" />
            <text x="40" y="85" className="text-sm fill-slate-200" style={{ fontFamily: 'system-ui, sans-serif' }}>
              History
            </text>
          </g>
          
          {/* TRIVITA Core with Enhanced Features */}
          <rect x="50" y="120" width="200" height="140" rx="8" fill="#f59e0b" className="opacity-80" />
          <text x="150" y="165" textAnchor="middle" className="text-lg font-bold fill-slate-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
            TRIVITA
          </text>
          <text x="150" y="185" textAnchor="middle" className="text-sm fill-slate-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Core Engine
          </text>
          
          {/* Uncertainty Quantification - Distribution Curve */}
          <g transform="translate(60, 190)">
            <path 
              d="M 0 40 Q 20 10 40 5 Q 60 0 80 5 Q 100 10 120 40" 
              fill="none" 
              stroke="#0f172a" 
              strokeWidth="2"
            />
            <text x="60" y="55" textAnchor="middle" className="text-xs fill-slate-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
              σ²
            </text>
          </g>
          
          {/* Ensemble Learning Flow */}
          <g transform="translate(60, 210)">
            <rect x="0" y="0" width="25" height="15" rx="2" fill="#0d9488" className="opacity-70" />
            <rect x="30" y="0" width="25" height="15" rx="2" fill="#0d9488" className="opacity-70" />
            <rect x="60" y="0" width="25" height="15" rx="2" fill="#0d9488" className="opacity-70" />
            <rect x="90" y="0" width="25" height="15" rx="2" fill="#0d9488" className="opacity-70" />
            <path d="M 120 7 L 135 7" stroke="#0f172a" strokeWidth="1" markerEnd="url(#arrowhead)" />
            <circle cx="145" cy="7" r="8" fill="#0f172a" className="opacity-80" />
          </g>
          
          {/* Multi-Model Stacking */}
          <g transform="translate(60, 235)">
            <rect x="0" y="0" width="40" height="20" rx="3" fill="#7e22ce" className="opacity-60" />
            <rect x="45" y="0" width="40" height="20" rx="3" fill="#7e22ce" className="opacity-60" />
            <rect x="90" y="0" width="40" height="20" rx="3" fill="#7e22ce" className="opacity-60" />
            <text x="65" y="35" textAnchor="middle" className="text-xs fill-slate-900" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Stacking
            </text>
          </g>
        </g>
        
        {/* Output Layer */}
        <g transform="translate(500, 400)">
          <rect x="0" y="0" width="300" height="200" rx="8" fill="#1e40af" className="opacity-80" />
          
          {/* Heatmap Visualization */}
          <g transform="translate(20, 30)">
            <rect width="100" height="100" rx="4" fill="#7e22ce" className="opacity-40" />
            <text x="50" y="55" textAnchor="middle" className="text-xs fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Grad-CAM
            </text>
            <text x="50" y="70" textAnchor="middle" className="text-xs fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Heatmap
            </text>
          </g>
          
          {/* Risk Metrics with Enhanced Uncertainty */}
          <g transform="translate(140, 30)">
            <text x="0" y="20" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Risk Probability: 87%
            </text>
            <text x="0" y="40" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              95% Confidence Interval
            </text>
            <text x="0" y="55" className="text-xs fill-cyan-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
              [82% - 92%]
            </text>
            <text x="0" y="75" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              BI-RADS: 4
            </text>
            <text x="0" y="95" className="text-sm fill-white" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Validation Status: ✅
            </text>
            <text x="0" y="110" className="text-xs fill-amber-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Uncertainty: Low
            </text>
          </g>
        </g>
        
        {/* Connecting Arrows */}
        <g stroke="#0d9488" strokeWidth="2" fill="none">
          {/* Stage 1 to Stage 2 */}
          <path d="M 300 250 Q 375 200 450 250" />
          <polygon points="445,245 460,250 445,255" fill="#0d9488" />
          
          {/* Stage 2 to Stage 3 */}
          <path d="M 650 250 Q 725 200 800 250" />
          <polygon points="795,245 810,250 795,255" fill="#0d9488" />
          
          {/* Stage 3 to Output */}
          <path d="M 900 300 Q 800 350 700 400" />
          <polygon points="695,395 680,400 695,405" fill="#0d9488" />
          
          {/* Feedback loops */}
          <path d="M 700 500 Q 400 550 200 400" stroke="#f59e0b" strokeDasharray="5,5" />
        </g>
        
        {/* Module Labels */}
        <g className="text-xs fill-slate-300" style={{ fontFamily: 'system-ui, sans-serif' }}>
          <text x="160" y="380">Feature</text>
          <text x="160" y="395">Extraction</text>
          
          <text x="520" y="380">Global</text>
          <text x="520" y="395">Context</text>
          
          <text x="880" y="380">Bayesian</text>
          <text x="880" y="395">Fusion</text>
        </g>
        
        {/* Technical Notes */}
        <g transform="translate(50, 630)" className="text-xs fill-slate-400" style={{ fontFamily: 'system-ui, sans-serif' }}>
          <text>MEDICAL AI RESEARCH GRADE DIAGRAM</text>
          <text x="0" y="15">MONAI-based architecture | Regulatory compliant | Production ready</text>
        </g>
      </svg>
    </div>
  );
};

export default TRIVITA_Diagram;