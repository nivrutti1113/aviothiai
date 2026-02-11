import React from 'react';

const ImpactDiagram = () => {
  // Define constants for the diagram
  const centerX = 300;
  const centerY = 250;
  const radius = 150; // Distance from center to outer circles
  const centerCircleRadius = 50;
  const outerCircleRadius = 35;
  
  // Calculate positions for 6 outer circles in a hexagon pattern
  const outerCirclePositions = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * (Math.PI / 180); // Convert to radians
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    outerCirclePositions.push({ x, y });
  }

  // Text labels for outer circles
  const outerCirclesData = [
    { title: "Workflow Automation", subtitle: "Streamline screening processes" },
    { title: "Clinical Decision Support", subtitle: "Enhance diagnostic accuracy" },
    { title: "Performance Dashboards", subtitle: "Track outcomes and metrics" },
    { title: "Real-World Evidence", subtitle: "Validate effectiveness" },
    { title: "Pathway Navigation", subtitle: "Guide patient journeys" },
    { title: "Academic Research", subtitle: "Advance scientific knowledge" }
  ];

  return (
    <div className="w-full max-w-2xl">
      <svg 
        viewBox="0 0 600 500" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto"
        shapeRendering="crispEdges"
      >
        {/* Lines from center to outer circles */}
        {outerCirclePositions.map((pos, index) => (
          <line
            key={`line-to-${index}`}
            x1={centerX}
            y1={centerY}
            x2={pos.x}
            y2={pos.y}
            stroke="#000000"
            strokeWidth="0.5"
          />
        ))}
        
        {/* Lines connecting outer circles to form hexagon */}
        {outerCirclePositions.map((pos, index) => {
          const nextIndex = (index + 1) % 6;
          return (
            <line
              key={`hex-line-${index}`}
              x1={pos.x}
              y1={pos.y}
              x2={outerCirclePositions[nextIndex].x}
              y2={outerCirclePositions[nextIndex].y}
              stroke="#000000"
              strokeWidth="0.3"
            />
          );
        })}
        
        {/* Center Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={centerCircleRadius}
          fill="white"
          stroke="#93c5fd" // soft blue
          strokeWidth="2"
        />
        
        {/* Center Circle Text */}
        <text
          x={centerX}
          y={centerY - 12}
          textAnchor="middle"
          fontSize="18"
          fontWeight="900"
          fill="#1e293b"
        >
          Aviothic
        </text>
        <text
          x={centerX}
          y={centerY + 2}
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#64748b"
        >
          Breast Cancer
        </text>
        <text
          x={centerX}
          y={centerY + 16}
          textAnchor="middle"
          fontSize="11"
          fontWeight="bold"
          fill="#64748b"
        >
          Screening Platform
        </text>
        
        {/* Outer Circles */}
        {outerCirclePositions.map((pos, index) => (
          <g key={`outer-circle-${index}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={outerCircleRadius}
              fill="white"
              stroke="#fca5a5" // soft red
              strokeWidth="2"
            />
            
            {/* Outer Circle Text - Highly visible */}
            <text
              x={pos.x}
              y={pos.y - 3}
              textAnchor="middle"
              fontSize="7"
              fontWeight="900"
              fill="#1e293b"
              className="text-wrap"
            >
              {outerCirclesData[index].title.length > 12 ? outerCirclesData[index].title.substring(0, 12) + '..' : outerCirclesData[index].title}
            </text>
            <text
              x={pos.x}
              y={pos.y + 9}
              textAnchor="middle"
              fontSize="5.5"
              fontWeight="bold"
              fill="#64748b"
            >
              {outerCirclesData[index].subtitle.length > 14 ? outerCirclesData[index].subtitle.substring(0, 14) + '..' : outerCirclesData[index].subtitle}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ImpactDiagram;