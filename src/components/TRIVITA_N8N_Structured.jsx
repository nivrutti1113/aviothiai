import React from 'react';

const TRIVITA_N8N_Structured = () => {
  return (
    <div className="w-full h-[600px] bg-[#0B1120] rounded-xl p-6 overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1400 600"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-[#0B1120]"
      >
        {/* Grid pattern */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="1" opacity="0.3"/>
          </pattern>
          {/* Arrowhead marker for connections */}
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22D3EE" />
          </marker>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* COLUMN 1 - Input Nodes */}
        {/* CC View */}
        <g transform="translate(80, 80)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">CC View</text>
        </g>

        {/* MLO View */}
        <g transform="translate(80, 150)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">MLO View</text>
        </g>

        {/* Age */}
        <g transform="translate(80, 250)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E293B" stroke="#F87171" strokeWidth="1.5" />
          <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">Age</text>
        </g>

        {/* Density */}
        <g transform="translate(80, 320)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E293B" stroke="#F87171" strokeWidth="1.5" />
          <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">Density</text>
        </g>

        {/* History */}
        <g transform="translate(80, 390)">
          <rect x="0" y="0" width="120" height="50" rx="8" fill="#1E293B" stroke="#F87171" strokeWidth="1.5" />
          <text x="60" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">History</text>
        </g>

        {/* COLUMN 2 - Preprocessing */}
        {/* DICOM Ingestion */}
        <g transform="translate(280, 115)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5" />
          <text x="70" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">DICOM Ingestion</text>
        </g>

        {/* Bayesian Modeling */}
        <g transform="translate(280, 320)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5" />
          <text x="70" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">Bayesian Modeling</text>
        </g>

        {/* COLUMN 3 - CNN Ensemble */}
        <g transform="translate(500, 115)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#1E293B" stroke="#34D399" strokeWidth="1.5" />
          <text x="70" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">CNN Ensemble</text>
        </g>

        {/* COLUMN 4 - Vision Transformer */}
        <g transform="translate(720, 115)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#1E293B" stroke="#FBBF24" strokeWidth="1.5" />
          <text x="70" y="25" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">Vision Transformer</text>
        </g>

        {/* COLUMN 5 - TRIVITA CORE */}
        <g transform="translate(940, 217)">
          <rect x="0" y="0" width="160" height="65" rx="8" fill="#1E293B" stroke="#22D3EE" strokeWidth="2" />
          <text x="80" y="32" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">TRIVITA CORE</text>
        </g>

        {/* COLUMN 6 - MC Dropout */}
        <g transform="translate(1180, 217)">
          <rect x="0" y="0" width="140" height="65" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
          <text x="70" y="32" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">MC Dropout</text>
        </g>

        {/* COLUMN 7 - Output Node */}
        <g transform="translate(1180, 330)">
          <rect x="0" y="0" width="140" height="100" rx="8" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5" />
          <text x="70" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">Risk</text>
          <text x="70" y="35" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">Probability</text>
          <text x="70" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">Confidence</text>
          <text x="70" y="65" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">Interval</text>
          <text x="70" y="80" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">BI-RADS</text>
          <text x="70" y="95" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="monospace">Grad-CAM</text>
        </g>

        {/* CONNECTIONS */}
        {/* CC View to DICOM */}
        <path 
          d="M 200 105 L 240 105 L 240 140 L 280 140" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* MLO View to DICOM */}
        <path 
          d="M 200 175 L 240 175 L 240 140 L 280 140" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* DICOM to CNN */}
        <path 
          d="M 420 140 L 500 140" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* CNN to Vision Transformer */}
        <path 
          d="M 640 140 L 720 140" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* Vision Transformer to TRIVITA CORE */}
        <path 
          d="M 860 140 L 900 140 L 900 250 L 940 250" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* Age to Bayesian */}
        <path 
          d="M 200 275 L 240 275 L 240 345 L 280 345" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* Density to Bayesian */}
        <path 
          d="M 200 345 L 280 345" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* History to Bayesian */}
        <path 
          d="M 200 415 L 240 415 L 240 345 L 280 345" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* Bayesian to TRIVITA CORE */}
        <path 
          d="M 420 345 L 900 345 L 900 250 L 940 250" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* TRIVITA CORE to MC Dropout */}
        <path 
          d="M 1100 250 L 1180 250" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        {/* MC Dropout to Output */}
        <path 
          d="M 1250 282 L 1250 330" 
          fill="none" 
          stroke="#22D3EE" 
          strokeWidth="2" 
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
};

export default TRIVITA_N8N_Structured;