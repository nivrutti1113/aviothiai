import React from 'react';

const HubSpokeDiagram = () => {
  // Define constants for the diagram
  const centerX = 200;
  const centerY = 200;
  const radius = 120; // Distance from center to outer circles
  const centerCircleRadius = 50;
  const outerCircleRadius = 25;
  
  // Calculate positions for 8 outer circles in a more map-like pattern
  // Using varied distances and angles to simulate realistic geographic distribution
  const outerCirclePositions = [
    // Top (North)
    { x: centerX, y: centerY - radius - 10, label: "Northern Clinic" },
    // Top-right
    { x: centerX + radius * 0.8, y: centerY - radius * 0.6, label: "Northeast Center" },
    // Right (East)
    { x: centerX + radius + 15, y: centerY, label: "Eastern Facility" },
    // Bottom-right
    { x: centerX + radius * 0.7, y: centerY + radius * 0.7, label: "Southeast Clinic" },
    // Bottom (South)
    { x: centerX, y: centerY + radius + 10, label: "Southern Hospital" },
    // Bottom-left
    { x: centerX - radius * 0.8, y: centerY + radius * 0.6, label: "Southwest Center" },
    // Left (West)
    { x: centerX - radius - 15, y: centerY, label: "Western Facility" },
    // Top-left
    { x: centerX - radius * 0.7, y: centerY - radius * 0.7, label: "Northwest Clinic" }
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <svg 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto max-w-md"
        shapeRendering="crispEdges"
      >
        {/* Define gradients */}
        <defs>
          <radialGradient id="purpleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6b21a8" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Lines from center to outer circles - thicker and more visible */}
        {outerCirclePositions.map((pos, index) => (
          <line
            key={`line-to-${index}`}
            x1={centerX}
            y1={centerY}
            x2={pos.x}
            y2={pos.y}
            stroke="#4f46e5"  // Indigo color for better visibility
            strokeWidth="2.5"
            strokeDasharray="5,3"  // Dashed lines like roads on a map
          />
        ))}
        
        {/* Center Hub with enhanced styling */}
        <circle
          cx={centerX}
          cy={centerY}
          r={centerCircleRadius}
          fill="url(#purpleGradient)"
          stroke="#ffffff"
          strokeWidth="3"
          filter="url(#glow)"
        />
        
        {/* Center Hub Text */}
        <text
          x={centerX}
          y={centerY - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#ffffff"
        >
          Central
        </text>
        <text
          x={centerX}
          y={centerY + 5}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#ffffff"
        >
          AI Hub
        </text>
        <text
          x={centerX}
          y={centerY + 18}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9"
          fontWeight="normal"
          fill="#f0f0f0"
        >
          Processing Center
        </text>
        
        {/* Outer Facilities */}
        {outerCirclePositions.map((pos, index) => (
          <g key={`outer-circle-${index}`}>
            {/* Outer Circle with glow effect */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={outerCircleRadius}
              fill="#1e40af" // blue color for facilities
              stroke="#ffffff"
              strokeWidth="2"
              filter="url(#glow)"
            />
            
            {/* Facility Label */}
            <text
              x={pos.x}
              y={pos.y - 25}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontWeight="bold"
              fill="#1e293b"
            >
              {pos.label.split(' ')[0]}
            </text>
            <text
              x={pos.x}
              y={pos.y - 12}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="8"
              fontWeight="normal"
              fill="#475569"
            >
              {pos.label.split(' ').slice(1).join(' ')}
            </text>
            
            {/* Facility Number */}
            <text
              x={pos.x}
              y={pos.y + 8}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight="bold"
              fill="#ffffff"
            >
              #{index + 1}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default HubSpokeDiagram;