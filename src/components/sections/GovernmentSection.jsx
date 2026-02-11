import React from 'react';

const GovernmentSection = () => {
  // Generate dots for the world map
  const generateWorldMapDots = () => {
    const dots = [];
    const rows = 20;
    const cols = 40;
    const dotSpacingX = 8;
    const dotSpacingY = 8;
    const offsetX = 40;
    const offsetY = 40;

    // Create base grid of dark navy dots
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = offsetX + col * dotSpacingX;
        const y = offsetY + row * dotSpacingY;
        
        // Define regions for purple highlighting
        let isHighlighted = false;
        
        // North America cluster
        if ((row >= 4 && row <= 8) && (col >= 2 && col <= 10) && 
            ((row === 4 && col >= 4) || (row === 5 && col >= 3) || 
             (row === 6 && col >= 2) || (row === 7 && col >= 3) || 
             (row === 8 && col >= 4 && col <= 8))) {
          isHighlighted = true;
        }
        
        // South America cluster
        if ((row >= 9 && row <= 14) && (col >= 4 && col <= 10) && 
            ((row === 9 && col >= 5) || (row === 10 && col >= 4) || 
             (row === 11 && col >= 3) || (row === 12 && col >= 4) || 
             (row === 13 && col >= 5) || (row === 14 && col >= 6))) {
          isHighlighted = true;
        }
        
        // Europe cluster
        if ((row >= 5 && row <= 8) && (col >= 18 && col <= 24) && 
            ((row === 5 && col >= 19) || (row === 6 && col >= 18) || 
             (row === 7 && col >= 18) || (row === 8 && col >= 19 && col <= 23))) {
          isHighlighted = true;
        }
        
        // Africa cluster
        if ((row >= 8 && row <= 13) && (col >= 18 && col <= 26) && 
            ((row === 8 && col >= 19) || (row === 9 && col >= 18) || 
             (row === 10 && col >= 18) || (row === 11 && col >= 18) || 
             (row === 12 && col >= 19) || (row === 13 && col >= 20))) {
          isHighlighted = true;
        }
        
        // Asia cluster
        if ((row >= 4 && row <= 10) && (col >= 26 && col <= 36) && 
            ((row === 4 && col >= 28) || (row === 5 && col >= 27) || 
             (row === 6 && col >= 26) || (row === 7 && col >= 26) || 
             (row === 8 && col >= 27) || (row === 9 && col >= 28) || 
             (row === 10 && col >= 29))) {
          isHighlighted = true;
        }
        
        // Australia cluster
        if ((row >= 13 && row <= 16) && (col >= 30 && col <= 34) && 
            ((row === 13 && col >= 31) || (row === 14 && col >= 30) || 
             (row === 15 && col >= 30) || (row === 16 && col >= 31))) {
          isHighlighted = true;
        }
        
        dots.push({
          x,
          y,
          fill: isHighlighted ? '#a855f7' : '#1e293b', // purple for highlighted, dark navy for others
          key: `${row}-${col}`
        });
      }
    }
    
    return dots;
  };

  const dots = generateWorldMapDots();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Government
            </h2>
            
            <p className="text-gray-700">
              Our platform aligns with public health initiatives and government policies aimed at expanding access to early cancer detection. Through strategic partnerships with health ministries and public health organizations, we're building infrastructure to support nationwide screening programs.
            </p>
            
            <p className="text-gray-700">
              By leveraging AI technology, we help governments optimize resource allocation, reduce healthcare costs, and improve population health outcomes. Our cloud-native approach ensures rapid deployment and scalability across diverse healthcare systems.
            </p>
            
            <p className="text-gray-700">
              We work closely with regulatory bodies to ensure our solutions meet all compliance requirements and support evidence-based policy decisions. Our commitment to transparency and accountability makes us a trusted partner for government health initiatives.
            </p>
          </div>
          
          {/* Right Column: Dotted World Map */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              <svg 
                viewBox="0 0 400 320" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-auto"
                shapeRendering="crispEdges"
              >
                {dots.map(dot => (
                  <circle
                    key={dot.key}
                    cx={dot.x}
                    cy={dot.y}
                    r="2"
                    fill={dot.fill}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;